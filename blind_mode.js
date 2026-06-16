//
// BLIND MODE FOR LESSON 6
// Configured for 3 multiple choice exercises
//

(function() {
    var BLIND_CONFIG = {
        enabled: false,
        currentExerciseIndex: 0,

        // ========================================
        // 🔧 LESSON 6 CONFIGURATION
        // ========================================
        
        // Exercise frames
        exerciseFrames: [14, 16, 28],  // Ex 4, 5, 11
        
        // Exercise names
        exerciseNames: ["Дасгал 4", "Дасгал 5", "Дасгал 11"],
        
        // Map frame to actual exercise number in lesson
        exerciseNumbers: {14: 4, 16: 5, 28: 11},
        
        // Audio paths for each exercise frame (VP instruction audio)
        instructionAudioPaths: {
            14: "sounds/instructions/vp/Lesson06_ex04_mn.mp3",
            16: "sounds/instructions/vp/Lesson06_ex05_mn.mp3",
            28: "sounds/instructions/vp/Lesson06_ex11_mn.mp3"
        },
        
        
        // Next frame after each exercise (videos to skip)
        exerciseNextFrames: {14: 15, 16: 17, 28: 29},
        
        // Input exercises - none for L6 (converted to multiple choice in blind mode)
        inputExercises: {},
        correctAnswers: {},
        
        // Multiple choice exercises - keyboard 1/2/3 selection
        choiceExercises: {
            14: { buttons: ["btn_4_4", "btn_4_5", "btn_4_6"], correctKey: 2 },  // Ex4: Drag-drop → 3 fraction choices, btn_4_5 correct
            16: { buttons: [], correctKey: 1 },  // Ex5: > < > comparison, press 1 for "Их" (correct)
            28: { buttons: [], correctKey: 1 }   // Ex11: 8/8, 8/6 comparison, press 1 (correct)
        },
        
        // Choice labels for audio announcements
        choiceLabels: {
            14: ["нэг", "хоёр", "гурав"],
            16: ["нэг", "хоёр", "гурав"],
            28: ["нэг", "хоёр", "гурав"]
        },

        // Final frame (completion screen)
        finalFrame: 29,

        // Animation frames (videos to skip with S key)
        animationFrames: [1, 3, 5, 7],

        // Sound files
        sounds: {
            correct: "sounds/voice_correct_mn.mp3",
            wrong: "sounds/voice_wrong_mn.mp3",
            click: "sounds/click.mp3"
        }
    };

    // ========================================
    // 🚫 DON'T CHANGE BELOW THIS LINE
    // (Copy from working blind_lesson02.js or blind_lesson03.js)
    // ========================================

    var audioPlayers = {};
    var currentInstructionAudio = null;
    var ariaRegion = null;
    var isSpeaking = false;
    var questionSpoken = false;

    // ARIA
    function createAriaRegion() {
        var r = document.createElement('div');
        r.id = 'blind-aria-live';
        r.setAttribute('role', 'alert');
        r.setAttribute('aria-live', 'assertive');
        r.style.cssText = 'position:absolute;left:-10000px;width:1px;height:1px;overflow:hidden;';
        document.body.appendChild(r);
        return r;
    }

    // AUDIO
    function loadAudio() {
        Object.keys(BLIND_CONFIG.sounds).forEach(function(key) {
            audioPlayers[key] = new Audio(BLIND_CONFIG.sounds[key]);
            audioPlayers[key].preload = "auto";
        });
    }

    function playSound(type) {
        if (audioPlayers[type]) {
            audioPlayers[type].currentTime = 0;
            audioPlayers[type].play().catch(function() {});
        }
    }

    function stopExerciseInstruction() {
        if (currentInstructionAudio) {
            currentInstructionAudio.pause();
            currentInstructionAudio.currentTime = 0;
            currentInstructionAudio = null;
        }
    }

    function playExerciseInstruction(frame, onEnded) {
        stopExerciseInstruction();

        var src = BLIND_CONFIG.instructionAudioPaths[frame];
        if (!src) {
             if (onEnded) {
                setTimeout(onEnded, 500);
            }
            return;
        }

        currentInstructionAudio = new Audio(src);
        currentInstructionAudio.preload = 'auto';
        currentInstructionAudio.addEventListener('ended', function() {
            currentInstructionAudio = null;
            if (onEnded) {
                setTimeout(onEnded, 600);
            }
        }, { once: true });
        currentInstructionAudio.addEventListener('error', function() {
            currentInstructionAudio = null;
            if (onEnded) {
                setTimeout(onEnded, 600);
            }
        }, { once: true });
        currentInstructionAudio.play().catch(function() {});
    }

    function getExercisePrompt(frame) {
        return "";
    }

    function announceExercisePrompt(frame) {
        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }
    }

    function waitForMainInstructionAudio(callback) {
        if (!callback) return;
        
        var checkAttempts = 0;
        var maxAttempts = 30;
        var audioFound = false;
        
        function checkForAudio() {
            checkAttempts++;
            
            var foundPlayingAudio = false;
            if (exportRoot && exportRoot.audioPool) {
                for (var key in exportRoot.audioPool) {
                    if (key.indexOf('correct') !== -1 || key.indexOf('wrong') !== -1 || 
                        key.indexOf('click') !== -1 || key.indexOf('title') !== -1 || key.indexOf('start') !== -1) {
                        continue;
                    }
                    
                    var audio = exportRoot.audioPool[key];
                    if (audio && audio.duration > 0) {
                        var isPlaying = !audio.paused && !audio.ended;
                        var isLoading = audio.readyState > 0 && audio.currentTime === 0 && !audio.paused;
                        
                        if (isPlaying || isLoading) {
                            foundPlayingAudio = true;
                            audioFound = true;
                            
                            if (isLoading && audio.paused) {
                                setTimeout(function() {
                                    audio.addEventListener('ended', function() {
                                        setTimeout(callback, 300);
                                    }, { once: true });
                                }, 200);
                            } else {
                                audio.addEventListener('ended', function() {
                                    setTimeout(callback, 300);
                                }, { once: true });
                            }
                            return;
                        }
                    }
                }
            }
            
            if (!foundPlayingAudio && checkAttempts < maxAttempts) {
                setTimeout(checkForAudio, 100);
            } else if (!foundPlayingAudio) {
                callback();
            }
        }
        
        setTimeout(checkForAudio, 700);
    }

    function correctBtn(btn, label) {
        if (btn.cacheCanvas) btn.uncache();
        btn.filters = [new createjs.ColorFilter(0, 0, 0, 1, 51, 153, 153, 0)];
        var b = btn.getBounds();
        if (b) btn.cache(b.x, b.y, b.width, b.height);
        else   btn.cache(-200, -200, 1000, 1000);
        if (label && label.parent) label.parent.setChildIndex(label, label.parent.numChildren - 1);
        createjs.Tween.get(btn)
            .to({ scaleX: 1.1, scaleY: 1.1 }, 200, createjs.Ease.backOut)
            .to({ scaleX: 1,   scaleY: 1   }, 200, createjs.Ease.backOut);
    }

    function wrongBtn(btn, label) {
        if (btn.cacheCanvas) btn.uncache();
        btn.filters = [new createjs.ColorFilter(0, 0, 0, 1, 231, 76, 60, 0)];
        var b = btn.getBounds();
        if (b) btn.cache(b.x, b.y, b.width, b.height);
        else   btn.cache(-200, -200, 1000, 1000);
        if (label && label.parent) label.parent.setChildIndex(label, label.parent.numChildren - 1);
        var sx = btn.x;
        createjs.Tween.get(btn)
            .to({ x: sx - 10 }, 50).to({ x: sx + 10 }, 50)
            .to({ x: sx - 10 }, 50).to({ x: sx + 10 }, 50)
            .to({ x: sx      }, 50);
        setTimeout(function() {
            btn.filters = [];
            if (btn.cacheCanvas) btn.uncache();
        }, 1500);
    }

    function speak(text, callback) {
        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
        }
        
        isSpeaking = true;
        if ('speechSynthesis' in window) {
            setTimeout(function() {
                if (window.speechSynthesis.paused) window.speechSynthesis.resume();
                var utt = new SpeechSynthesisUtterance(text);
                utt.rate = 1.0; utt.pitch = 1.0; utt.volume = 1.0;
                utt.onend   = function() { isSpeaking = false; if (callback) callback(); };
                utt.onerror = function() { isSpeaking = false; if (callback) callback(); };
                window.speechSynthesis.speak(utt);
            }, 100);
        } else {
            isSpeaking = false;
            if (callback) callback();
        }
        if (!ariaRegion) ariaRegion = createAriaRegion();
        ariaRegion.textContent = text;
    }

    function click(obj) {
        obj.dispatchEvent(new createjs.MouseEvent('click', true, false));
    }

    var originalGotoAndStop = null;
    
    function installNextFramePatch(exerciseFrame) {
        var nextFrame = BLIND_CONFIG.exerciseNextFrames[exerciseFrame];
        if (!originalGotoAndStop) {
            originalGotoAndStop = exportRoot.gotoAndStop.bind(exportRoot);
        }
        var _real = exportRoot.gotoAndStop.bind(exportRoot);
        exportRoot.gotoAndStop = function interceptNext(f) {
            if (f === nextFrame) {
                exportRoot.gotoAndStop = _real;
                jumpToExercise();
            } else {
                _real(f);
            }
        };
    }
    
    function restoreGotoAndStop() {
        if (originalGotoAndStop) {
            exportRoot.gotoAndStop = originalGotoAndStop;
        }
    }

    function jumpToExercise() {
        // Cancel speech synthesis
        if (window.speechSynthesis) {
            window.speechSynthesis.cancel();
            setTimeout(function() { window.speechSynthesis.cancel(); }, 50);
        }
        
        // Stop exercise instruction audio
        stopExerciseInstruction();
        
        // Stop ALL audio from audioPool (main instruction audio, etc.)
        if (exportRoot && exportRoot.audioPool) {
            for (var key in exportRoot.audioPool) {
                var audio = exportRoot.audioPool[key];
                if (audio && !audio.paused) {
                    audio.pause();
                    audio.currentTime = 0;
                }
            }
        }
        
        isSpeaking     = false;
        questionSpoken = false;

        // Clean up overlay buttons from previous exercise
        var overlayIds = ['blind-overlay-buttons-14', 'blind-overlay-buttons-16', 'blind-overlay-buttons-28'];
        overlayIds.forEach(function(id) {
            var overlay = document.getElementById(id);
            if (overlay) {
                overlay.style.display = 'none';
            }
        });

        if (BLIND_CONFIG.currentExerciseIndex >= BLIND_CONFIG.exerciseFrames.length) {
            // Stop all audio and speech
            if (exportRoot && exportRoot.audioPool) {
                for (var key in exportRoot.audioPool) {
                    var audio = exportRoot.audioPool[key];
                    if (audio && !audio.paused) {
                        audio.pause();
                        audio.currentTime = 0;
                    }
                }
            }
            
            stopExerciseInstruction();
            
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
            
            // Remove overlay buttons before going to final frame
            var overlayIds = ['blind-overlay-buttons-14', 'blind-overlay-buttons-16', 'blind-overlay-buttons-28'];
            overlayIds.forEach(function(id) {
                var overlay = document.getElementById(id);
                if (overlay && overlay.parentNode) {
                    overlay.parentNode.removeChild(overlay);
                }
            });
            
            // Clean up text elements with stroke clones BEFORE going to final frame
            function cleanupTextWithStroke(textObj) {
                if (!textObj) return;
                try {
                    // Remove stroke clone if it exists
                    if (textObj._strokeClone) {
                        if (textObj._strokeClone.parent) {
                            textObj._strokeClone.parent.removeChild(textObj._strokeClone);
                        }
                        textObj._strokeClone = null;
                    }
                    // Clear any event listeners
                    if (textObj.removeAllEventListeners) {
                        textObj.removeAllEventListeners();
                    }
                    // Hide the text
                    textObj.visible = false;
                } catch (e) {
                    console.warn("Error cleaning text:", e);
                }
            }
            
            // Clean up text elements
            cleanupTextWithStroke(exportRoot.txt_title);
            cleanupTextWithStroke(exportRoot.txt_instruction);
            cleanupTextWithStroke(exportRoot.txt_subject);
            cleanupTextWithStroke(exportRoot.txt_grade);
            
            // Hide movie clips from exercises
            if (exportRoot.ex5_mv) exportRoot.ex5_mv.visible = false;
            if (exportRoot.ex5_mv5) exportRoot.ex5_mv5.visible = false;
            if (exportRoot.ex11_mv) exportRoot.ex11_mv.visible = false;
            
            // Restore original gotoAndStop before going to final frame
            restoreGotoAndStop();
            
            // Go to final frame - let lesson_06.js handle the rest
            exportRoot.gotoAndStop(BLIND_CONFIG.finalFrame);
            
            // Wait for frame to load, then setup blind mode final frame
            setTimeout(function() {
                // Speak congratulations message
     
                
                // Setup keyboard handler for restart button in blind mode
                if (exportRoot.btn_restart) {
                    // Wait for video to finish or be skipped, then enable keyboard control
                    var checkInterval = setInterval(function() {
                        if (exportRoot.btn_restart && exportRoot.btn_restart.visible && exportRoot.btn_restart.alpha > 0.5) {
                            clearInterval(checkInterval);
                            
                            // Announce button is ready
                     
                            
                            // Add keyboard listener for Enter key
                            var enterHandler = function(e) {
                                if (e.key === 'Enter' && exportRoot.btn_restart && exportRoot.btn_restart.visible) {
                                    e.preventDefault();
                                    e.stopImmediatePropagation();
                                    document.removeEventListener('keydown', enterHandler);
                                    
                                    // Trigger button click
                                    if (exportRoot.btn_restart.dispatchEvent) {
                                        speak("Дахин эхлүүлж байна");
                                        exportRoot.btn_restart.dispatchEvent(new createjs.MouseEvent('click', true, false));
                                    } else {
                                        // Fallback: direct reload
                                        try { sessionStorage.removeItem("Lesson06_gameState"); } catch(err) {}
                                        location.reload();
                                    }
                                }
                            };
                            document.addEventListener('keydown', enterHandler);
                        }
                    }, 500);
                }
            }, 500);
            
            return;
        }

        var frame = BLIND_CONFIG.exerciseFrames[BLIND_CONFIG.currentExerciseIndex];
        BLIND_CONFIG.currentExerciseIndex++;

        exportRoot.gotoAndStop(frame);
        installNextFramePatch(frame);

        if (BLIND_CONFIG.inputExercises[frame]) focusInput(frame);

        // Ensure character is visible for all exercises - check multiple times
        function ensureCharacterVisible() {
            if (exportRoot.Emoji_result) {
                exportRoot.Emoji_result.visible = true;
                exportRoot.Emoji_result.alpha = 1;
            }
        }
        setTimeout(ensureCharacterVisible, 200);
        setTimeout(ensureCharacterVisible, 500);
        setTimeout(ensureCharacterVisible, 800);

        // Special setup for Exercise 4 (drag-and-drop simplified to 3 choices)
        if (frame === 14) {
            setTimeout(function() {
                // Auto-place correct buttons in their targets (except the one user chooses)
                var autoPlaceConfig = {
                    "btn_4_2": "target_4_1",  // Auto-complete: 2/4 → target 1
                    "btn_4_9": "target_4_3"   // Auto-complete: 9/8 → target 3
                    // btn_4_5 → target_4_2 is what the user will choose
                };
                
                Object.keys(autoPlaceConfig).forEach(function(btnName) {
                    var btn = exportRoot[btnName];
                    var targetName = autoPlaceConfig[btnName];
                    var target = exportRoot[targetName];
                    
                    if (btn && target) {
                        btn.x = target.x;
                        btn.y = target.y;
                        btn.mouseEnabled = false;
                        btn.cursor = 'default';
                    }
                });
                
                // Hide all buttons except the 3 choices (btn_4_4, btn_4_5, btn_4_6)
                var allButtons = ["btn_4_1", "btn_4_3", "btn_4_7", "btn_4_8", "btn_4_10"];
                allButtons.forEach(function(btnName) {
                    var btn = exportRoot[btnName];
                    if (btn) {
                        btn.visible = false;
                        btn.mouseEnabled = false;
                    }
                });
                
                // Disable mouse interaction for the 3 choice buttons (keyboard only)
                var choiceButtons = ["btn_4_4", "btn_4_5", "btn_4_6"];
                choiceButtons.forEach(function(btnName) {
                    var btn = exportRoot[btnName];
                    if (btn) {
                        btn.mouseEnabled = false;
                        btn.cursor = 'default';
                    }
                });
            }, 400);
        }

        // Special setup for Exercise 5 (frame 16) - Create overlay buttons
        if (frame === 16) {
            setTimeout(function() {
                // Hide all HTML inputs AND their canvas equivalents
                var inputNames = ["input_5_1", "input_5_2", "input_5_3", "input_5_4"];
                inputNames.forEach(function(name) {
                    // Hide HTML inputs
                    var inputId = "html_lesson6_ex05_" + name;
                    var input = document.getElementById(inputId);
                    if (input) {
                        input.style.display = "none";
                        input.style.opacity = "0";
                        input.style.pointerEvents = "none";
                        input.style.border = "none";
                        input.style.visibility = "hidden";
                    }
                    
                    // Hide canvas input objects
                    if (exportRoot[name]) {
                        exportRoot[name].visible = false;
                        exportRoot[name].alpha = 0;
                    }
                });
                
                // Make movie clips semi-transparent (0.5 alpha) so content is visible
                if (exportRoot.ex5_mv) {
                    exportRoot.ex5_mv.alpha = 0.3;
                }
                // Make squares semi-transparent too
                if (exportRoot.ex5_mv5) {
                    exportRoot.ex5_mv5.alpha = 0.3;
                }
                
                // Create 3 overlay buttons for choices (нэг/хоёр/гурав)
                createOverlayButtons(frame, 3, ['Их', 'Бага', 'Тэнцүү']);
            }, 400);
        }

        // Special setup for Exercise 11 (frame 28) - Create overlay buttons
        if (frame === 28) {
            setTimeout(function() {
                // Hide all HTML inputs AND their canvas equivalents
                var inputNames = ["input_11_1", "input_11_2"];
                inputNames.forEach(function(name) {
                    // Hide HTML inputs
                    var inputId = "html_lesson6_ex11_" + name;
                    var input = document.getElementById(inputId);
                    if (input) {
                        input.style.display = "none";
                        input.style.opacity = "0";
                        input.style.pointerEvents = "none";
                        input.disabled = true;
                        input.style.border = "none";
                        input.style.visibility = "hidden";
                    }
                    
                    // Hide canvas input objects
                    if (exportRoot[name]) {
                        exportRoot[name].visible = false;
                        exportRoot[name].alpha = 0;
                    }
                });
                
                // Make movie clip semi-transparent (0.5 alpha) so content is visible
                if (exportRoot.ex11_mv) {
                    exportRoot.ex11_mv.alpha = 0.2;
                }
                
                // Hide the background image that overlays buttons (06-11-zuraas.png)
                if (exportRoot['06-11-zuraas']) {
                    exportRoot['06-11-zuraas'].visible = false;
                    exportRoot['06-11-zuraas'].alpha = 0;
                }
                // Also try variations
                if (exportRoot.lesson6_11_zuraas) {
                    exportRoot.lesson6_11_zuraas.visible = false;
                    exportRoot.lesson6_11_zuraas.alpha = 0;
                }
                if (exportRoot.mc_ex11) {
                    exportRoot.mc_ex11.visible = false;
                }
                
                // Create 3 overlay buttons for choices (нэг/хоёр/гурав)
                createOverlayButtons(frame, 3, ['Наймны дөрөв', 'Наймны тав', 'Наймны гурав']);
            }, 400);
        }

        // Helper function to create overlay buttons - RESPONSIVE WITH STAGE
        function createOverlayButtons(frame, count, labels) {
            var overlayContainer = document.getElementById('blind-overlay-buttons-' + frame);
            if (overlayContainer) {
                overlayContainer.style.display = 'flex';
                return;
            }
            
            overlayContainer = document.createElement('div');
            overlayContainer.id = 'blind-overlay-buttons-' + frame;
            
            // Function to position buttons based on canvas/stage dimensions
            function positionButtons() {
                var canvas = document.getElementById('canvas') || document.querySelector('canvas');
                if (canvas) {
                    var rect = canvas.getBoundingClientRect();
                    var centerX = rect.left + (rect.width / 2) - 80;  // Center horizontally (80 = half button width)
                    var verticalPos = rect.top + (rect.height * 0.6);  // 60% down from stage top
                    
                    overlayContainer.style.left = centerX + 'px';
                    overlayContainer.style.top = verticalPos + 'px';
                    overlayContainer.style.transform = 'translateY(-50%)';  // Center the button group itself
                }
            }
            
            // Initial styling
            overlayContainer.style.cssText = 'position:fixed;' +
                'z-index:99999;' +
                'display:flex;' +
                'flex-direction:column;' +
                'gap:15px;' +
                'pointer-events:none;' +
                'max-width:160px;';
            
            // Position initially
            positionButtons();
            
            // Reposition on window resize to stay with stage
            var resizeTimeout;
            window.addEventListener('resize', function() {
                clearTimeout(resizeTimeout);
                resizeTimeout = setTimeout(positionButtons, 100);
            });
            
            for (var i = 1; i <= count; i++) {
                var btn = document.createElement('div');
                btn.id = 'blind-choice-' + frame + '-' + i;
                
                // Compact button sizing for left side positioning - FULLY OPAQUE
                btn.style.cssText = 'min-width:200px;' +
                    'max-width:250px;' +
                    'height:40px;' +
                    'background:#339999;' +  // Solid color, no transparency
                    'border:2px solid #2a7a7a;' +
                    'border-radius:8px;' +
                    'display:flex;' +
                    'align-items:center;' +
                    'justify-content:flex-start;' +  // Left align
                    'color:white;' +
                    'font-size:12px;' +  // Smaller fixed font for narrow buttons
                    'font-weight:bold;' +
                    'font-family:Rubik,sans-serif;' +
                    'padding:0 10px;' +
                    'text-transform:uppercase;' +  // Uppercase text
                    'box-shadow:0 2px 4px rgba(0,0,0,0.3);';
                
                var label = labels[i-1] || '';
                btn.textContent = (i + '. ' + label).toUpperCase();
                overlayContainer.appendChild(btn);
            }
            
            document.body.appendChild(overlayContainer);
        }

        // Play main instruction audio directly
        setTimeout(function() {
            var exerciseNum = BLIND_CONFIG.exerciseNumbers[frame] || (BLIND_CONFIG.exerciseFrames.indexOf(frame) + 1);
            var mainAudioPath = 'sounds/instructions/Lesson06_ex' + (exerciseNum < 10 ? '0' : '') + exerciseNum + '_mn.mp3';
            
            var mainAudio = new Audio(mainAudioPath);
            mainAudio.preload = 'auto';
            
            // Add to audioPool so waitForMainInstructionAudio can detect it
            var audioKey = 'mainInstruction_' + frame;
            if (exportRoot && exportRoot.audioPool) {
                exportRoot.audioPool[audioKey] = mainAudio;
            }
            
            mainAudio.play().catch(function() {});
        }, 600);

        waitForMainInstructionAudio(function() {
            playExerciseInstruction(frame, function() {
                setTimeout(function() {
                    announceExercisePrompt(frame);
                }, 800);
            });
        });
        questionSpoken = true;
    }

    function focusInput(frame) {
        var cfg = BLIND_CONFIG.inputExercises[frame];
        setTimeout(function() {
            var id = cfg.htmlId || (cfg.htmlIds && cfg.htmlIds[0]);
            if (id) {
                var el = document.getElementById(id);
                if (el) { 
                    var canvasEl = document.getElementById('canvas');
                    if (canvasEl) canvasEl.tabIndex = -1;
                    el.focus(); 
                    el.select();
                }
            }
        }, 700);
    }

    function handleCorrect() {
        window.speechSynthesis.cancel();
        
        var frame = exportRoot.currentFrame;
        
        // Stop ALL audio to prevent duplicate correct sounds
        if (exportRoot && exportRoot.audioPool) {
            for (var key in exportRoot.audioPool) {
                var audio = exportRoot.audioPool[key];
                if (audio && !audio.paused) {
                    audio.pause();
                    audio.currentTime = 0;
                }
            }
        }
        
        if (exportRoot.gameState) {
            // Update exercise complete status
            var exerciseNum = BLIND_CONFIG.exerciseFrames.indexOf(frame) + 1;
            if (exerciseNum > 0) {
                exportRoot.gameState['exercise' + exerciseNum + 'Complete'] = true;
                if (exportRoot.saveState) exportRoot.saveState();
            }
        }
        
        playSound('correct');
        setTimeout(jumpToExercise, 1500);
    }

    function handleWrong() {
        playSound('wrong');
        speak("Буруу байна. Дахин оролдоно уу.");
    }

    function activate() {
        BLIND_CONFIG.enabled = true;
        BLIND_CONFIG.currentExerciseIndex = 0;

        exportRoot = window.exportRoot;

        if ('speechSynthesis' in window) {
            window.speechSynthesis.getVoices();
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(new SpeechSynthesisUtterance(''));
        }

        loadAudio();

        // Load fonts
        if (!document.getElementById('blind-mode-fonts-style')) {
            var fontStyle = document.createElement('style');
            fontStyle.id = 'blind-mode-fonts-style';
            fontStyle.textContent = `
                @font-face {
                    font-family: 'Rubik';
                    src: url('fonts/rubik-cyrillic-400-normal.woff2') format('woff2');
                    font-weight: 400;
                    font-style: normal;
                }
                @font-face {
                    font-family: 'Rubik';
                    src: url('fonts/rubik-cyrillic-700-normal.woff2') format('woff2');
                    font-weight: 700;
                    font-style: normal;
                }
                @font-face {
                    font-family: 'Roboto';
                    src: url('fonts/roboto-cyrillic-400-normal.woff2') format('woff2');
                    font-weight: 400;
                    font-style: normal;
                }
                @font-face {
                    font-family: 'Roboto';
                    src: url('fonts/roboto-cyrillic-700-normal.woff2') format('woff2');
                    font-weight: 700;
                    font-style: normal;
                }
            `;
            document.head.appendChild(fontStyle);
        }

        function updateTextFonts(obj) {
            if (!obj) return;
            if (obj instanceof createjs.Text) {
                if (obj.font && obj.font.indexOf('Rubik') === -1 && obj.font.indexOf('Roboto') === -1) {
                    var size = obj.font.match(/\d+/);
                    obj.font = (size ? size[0] : '24') + 'px Rubik, Roboto, sans-serif';
                }
            }
            if (obj.children) {
                for (var i = 0; i < obj.children.length; i++) {
                    updateTextFonts(obj.children[i]);
                }
            }
        }

        var observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.tagName === 'INPUT' || node.tagName === 'TEXTAREA') {
                        node.style.fontFamily = 'Rubik, Roboto, sans-serif';
                    }
                });
            });
        });
        observer.observe(document.body, { childList: true, subtree: true });

        // Disable mouse interactions
        var canvas = document.querySelector('canvas');
        if (canvas) {
            canvas.style.pointerEvents = 'none';
        }
        if (exportRoot && exportRoot.stage) {
            exportRoot.stage.enableMouseOver(0);
            exportRoot.stage.mouseEnabled = false;
        }

        // Store original gotoAndStop
        var _origGotoAndStop = exportRoot.gotoAndStop.bind(exportRoot);
        exportRoot._blindFontGotoAndStop = function(frame) {
            _origGotoAndStop(frame);
            setTimeout(function() { updateTextFonts(exportRoot); }, 100);
        };

        // Animation flow patch for L6 (only 4 videos)
        exportRoot.gotoAndStop = function blindFlowPatch(f) {
            if (!BLIND_CONFIG.enabled) {
                _origGotoAndStop(f);
                return;
            }
            // Skip even frames (2, 4, 6) to next odd frame
            if (f === 2 || f === 4 || f === 6) {
                _origGotoAndStop(f + 1);
                var videoNum = ((f / 2) + 1);
                setTimeout(function() {
                    speak(videoNum + ' дугаар видео. S дарж алгасна уу.');
                }, 800);
                return;
            }
            // After last animation (frame 7), jump to frame 8, then to exercises
            if (f === 8) {
                exportRoot.gotoAndStop = _origGotoAndStop;
                jumpToExercise();
                return;
            }
            _origGotoAndStop(f);
        };

        // Set blind mode state and update UI
        if (exportRoot.gameState) {
            exportRoot.gameState.selectedLanguage = "mn";
            exportRoot.gameState.isBlind = true;

            if (exportRoot.checkmark && exportRoot.btn_visual) {
                if (typeof createjs !== 'undefined' && createjs.Tween) {
                    createjs.Tween.removeTweens(exportRoot.checkmark);
                    createjs.Tween.get(exportRoot.checkmark).to({
                        x: exportRoot.btn_visual.x + 10,
                        y: exportRoot.btn_visual.y - 20
                    }, 200);
                } else {
                    exportRoot.checkmark.x = exportRoot.btn_visual.x + 10;
                    exportRoot.checkmark.y = exportRoot.btn_visual.y - 20;
                }
            }

            if (exportRoot.saveState) exportRoot.saveState();
        }

        var canvasEl = document.getElementById('canvas');
        if (canvasEl) {
            canvasEl.setAttribute('role', 'application');
            canvasEl.tabIndex = 0;
            canvasEl.focus();
        }

        document.addEventListener('focusin', function(e) {
            if (BLIND_CONFIG.enabled && e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) {
                var canvasEl = document.getElementById('canvas');
                if (canvasEl) canvasEl.tabIndex = -1;
            }
        });

        // Start animations
        function startAnimations() {
            _origGotoAndStop(1);
            setTimeout(function() {
                speak('1 дүгээр видео. S дарж алгасна уу.');
            }, 800);
        }

        // Play title audio: Lesson06_title_mn.mp3
        var titleAudio = new Audio('sounds/Lesson06_title_mn.mp3');
        titleAudio.preload = 'auto';
        titleAudio.addEventListener('ended', function() {
            startAnimations();
        }, { once: true });
        titleAudio.addEventListener('error', function() {
            // If title audio fails, just start
            startAnimations();
        }, { once: true });
        titleAudio.play().catch(function() {
            startAnimations();
        });
    }

    // GLOBAL KEYBOARD HANDLER
    document.addEventListener('keydown', function(e) {
        if (!exportRoot) exportRoot = window.exportRoot;
        if (!exportRoot) return;

        var targetEl = e.target;
        var isTypingInInput = targetEl && (targetEl.tagName === 'INPUT' || targetEl.tagName === 'TEXTAREA');

        // ACTIVATE BLIND MODE
        if ((e.shiftKey && e.key.toLowerCase() === 'v') ||
            (e.key === '5' && exportRoot.currentFrame === 0)) {
            e.preventDefault();
            if (!BLIND_CONFIG.enabled) {
                if (exportRoot.currentFrame === 0 && exportRoot.hitarea_visual) {
                    exportRoot.hitarea_visual.dispatchEvent(new createjs.MouseEvent('click', true, false));
                } else {
                    activate();
                }
            }
            return;
        }

        if (!BLIND_CONFIG.enabled) return;

        var frame = exportRoot.currentFrame;

        // When typing in input field
        if (isTypingInInput && BLIND_CONFIG.inputExercises[frame]) {
            // H key: Replay instruction
            if (e.key === 'h' || e.key === 'H') {
                e.preventDefault();
                e.stopImmediatePropagation();
                stopExerciseInstruction();
                playExerciseInstruction(frame, function() {
                    setTimeout(function() { announceExercisePrompt(frame); }, 500);
                });
                return;
            }

            // S key: Skip
            if (e.key === 's' || e.key === 'S') {
                e.preventDefault();
                e.stopImmediatePropagation();
                stopExerciseInstruction();
                jumpToExercise();
                return;
            }

            // Enter key: Validate
            if (e.key === 'Enter') {
                e.preventDefault();
                e.stopImmediatePropagation();
                
                var correct  = BLIND_CONFIG.correctAnswers[frame];
                var inputCfg = BLIND_CONFIG.inputExercises[frame];
                var isCorrect = false;

                if (Array.isArray(correct)) {
                    isCorrect = inputCfg.htmlIds.every(function(id, i) {
                        var el = document.getElementById(id);
                        return el && el.value.trim() === correct[i];
                    });
                } else {
                    var el = document.getElementById(inputCfg.htmlId);
                    isCorrect = el && el.value.trim() === correct;
                }

                if (isCorrect) {
                    handleCorrect();
                } else {
                    handleWrong();
                }
                return;
            }

            if (e.key.length === 1 || e.key === 'Backspace' || e.key === 'Delete' || e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
                e.stopImmediatePropagation();
            }
            return;
        }

        // S key: Skip animations
        if ((e.key === 's' || e.key === 'S') && BLIND_CONFIG.animationFrames.indexOf(frame) !== -1) {
            e.preventDefault();
            e.stopImmediatePropagation();
            
            var buttons = document.querySelectorAll('button');
            for (var i = 0; i < buttons.length; i++) {
                var btnText = buttons[i].innerHTML || buttons[i].textContent || '';
                if (btnText.indexOf('АЛГАСАХ') !== -1 || btnText.indexOf('▶') !== -1) {
                    buttons[i].click();
                    break;
                }
            }
            return;
        }

        // H key: Replay instruction
        if (e.key.toLowerCase() === 'h' && BLIND_CONFIG.exerciseFrames.indexOf(frame) !== -1) {
            e.preventDefault();
            e.stopImmediatePropagation();
            stopExerciseInstruction();
            if (window.speechSynthesis) {
                window.speechSynthesis.cancel();
            }
            playExerciseInstruction(frame, function() {
                setTimeout(function() {
                    announceExercisePrompt(frame);
                }, 500);
            });
            return;
        }

        // Multiple choice handling
        if (BLIND_CONFIG.choiceExercises[frame]) {
            var choice = BLIND_CONFIG.choiceExercises[frame];
            var key = parseInt(e.key);
            
            if (key >= 1 && key <= 3) {  // Always 3 choices
                e.preventDefault();
                e.stopImmediatePropagation();
                
                playSound('click');

                if (key === choice.correctKey) {
                    // ✅ CORRECT
                    
                    // Highlight overlay button if exists
                    var overlayBtn = document.getElementById('blind-choice-' + frame + '-' + key);
                    if (overlayBtn) {
                        overlayBtn.style.background = 'rgba(51,153,153,1)';
                        overlayBtn.style.borderColor = '#00ff00';
                        overlayBtn.style.borderWidth = '4px';
                    }
                    
                    // Special handling for Exercise 4 (has actual buttons)
                    if (frame === 14 && choice.buttons.length > 0) {
                        var btnName = choice.buttons[key - 1];  // btn_4_5 for key 2
                        var btn = exportRoot[btnName];
                        var target = exportRoot["target_4_2"];  // The target for the user's choice
                        
                        if (btn && target) {
                            // Move button to correct target position
                            btn.x = target.x;
                            btn.y = target.y;
                            btn.mouseEnabled = false;
                            
                            // Hide text in button
                            function hideTextInButton(container) {
                                if (!container || !container.children) return;
                                for (var i = 0; i < container.children.length; i++) {
                                    var child = container.children[i];
                                    if (child instanceof createjs.Text) {
                                        child.visible = false;
                                        child.alpha = 0;
                                    }
                                    if (child.children && child.children.length > 0) {
                                        hideTextInButton(child);
                                    }
                                }
                            }
                            hideTextInButton(btn);
                            btn.alpha = 0.7;
                        }
                    }
                    
                    // Animate character
                    setTimeout(function() {
                        if (exportRoot.Emoji_result) {
                            exportRoot.Emoji_result.visible = true;
                            exportRoot.Emoji_result.alpha = 1;
                        }
                        
                        if (exportRoot.playCharacterAnimation) {
                            exportRoot.playCharacterAnimation("correct");
                        } else if (exportRoot.Emoji_result) {
                            exportRoot.Emoji_result.gotoAndStop(3);  // Frame 3 = Correct
                            setTimeout(function() {
                                if (exportRoot.Emoji_result) {
                                    exportRoot.Emoji_result.gotoAndStop(0);  // Reset to neutral
                                }
                            }, 2000);
                        }
                    }, 50);
                    
                    // Save state
                    if (exportRoot.gameState) {
                        var exerciseNum = BLIND_CONFIG.exerciseNumbers[frame];
                        if (exerciseNum) {
                            exportRoot.gameState['exercise' + exerciseNum + 'Complete'] = true;
                            if (exportRoot.saveState) exportRoot.saveState();
                        }
                    }
                    
                    handleCorrect();
                } else {
                    // ❌ WRONG
                    
                    // Highlight overlay button if exists (red for wrong)
                    var overlayBtn = document.getElementById('blind-choice-' + frame + '-' + key);
                    if (overlayBtn) {
                        var origBg = overlayBtn.style.background;
                        overlayBtn.style.background = 'rgba(231,76,60,0.9)';
                        overlayBtn.style.borderColor = '#ff0000';
                        overlayBtn.style.borderWidth = '4px';
                        
                        setTimeout(function() {
                            if (overlayBtn) {
                                overlayBtn.style.background = origBg;
                                overlayBtn.style.borderColor = '#339999';
                                overlayBtn.style.borderWidth = '2px';
                            }
                        }, 1500);
                    }
                    
                    // Ensure character is visible before animation
                    if (exportRoot.Emoji_result) {
                        exportRoot.Emoji_result.visible = true;
                        exportRoot.Emoji_result.alpha = 1;
                    }
                    
                    // Special handling for Exercise 4 (animate wrong button)
                    if (frame === 14 && choice.buttons.length > 0) {
                        var btnName = choice.buttons[key - 1];
                        var btn = exportRoot[btnName];
                        
                        if (btn) {
                            // Shake animation
                            var sx = btn.x;
                            createjs.Tween.get(btn)
                                .to({ x: sx - 10 }, 50).to({ x: sx + 10 }, 50)
                                .to({ x: sx - 10 }, 50).to({ x: sx + 10 }, 50)
                                .to({ x: sx }, 50);
                        }
                    }
                    
                    // Animate character wrong
                    setTimeout(function() {
                        if (exportRoot.playCharacterAnimation) {
                            exportRoot.playCharacterAnimation("wrong");
                        } else if (exportRoot.Emoji_result) {
                            exportRoot.Emoji_result.gotoAndStop(2);  // Frame 2 = Wrong
                            setTimeout(function() {
                                if (exportRoot.Emoji_result) {
                                    exportRoot.Emoji_result.gotoAndStop(0);  // Reset to neutral
                                }
                            }, 2000);
                        }
                    }, 50);
                    
                    handleWrong();
                }
            }
            return;
        }
    });

    // Setup blind button
    function setupBlindButton() {
        exportRoot = window.exportRoot;
        if (exportRoot && exportRoot.hitarea_visual) {
            exportRoot.hitarea_visual.on("click", function() {
                if (!BLIND_CONFIG.enabled) {
                    setTimeout(activate, 100);
                }
            });
        } else {
            setTimeout(setupBlindButton, 500);
        }
    }

    if (typeof window.exportRoot !== 'undefined') {
        setupBlindButton();
    } else {
        window.addEventListener('load', setupBlindButton);
    }

    // PUBLIC API
    window.BlindMode = {
        activate:       activate,
        jumpToExercise: jumpToExercise,
        handleCorrect:  handleCorrect,
        handleWrong:    handleWrong,
        speak:          speak,
        config:         BLIND_CONFIG
    };
})();