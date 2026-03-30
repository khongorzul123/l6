(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"lesson_06_atlas_1", frames: [[0,0,1928,1187]]},
		{name:"lesson_06_atlas_2", frames: [[0,0,1920,1080]]},
		{name:"lesson_06_atlas_3", frames: [[0,0,1920,1080]]},
		{name:"lesson_06_atlas_4", frames: [[0,0,1920,1080]]},
		{name:"lesson_06_atlas_5", frames: [[0,1082,1513,794],[0,0,1920,1080]]},
		{name:"lesson_06_atlas_6", frames: [[0,0,1513,794],[0,796,1513,794]]},
		{name:"lesson_06_atlas_7", frames: [[0,0,1505,634],[0,1172,1453,533],[0,636,1474,534]]},
		{name:"lesson_06_atlas_8", frames: [[0,1192,1178,532],[0,0,1242,600],[0,602,1239,588]]},
		{name:"lesson_06_atlas_9", frames: [[0,0,1194,520],[0,1456,1277,372],[0,1005,1269,449],[0,522,1284,481]]},
		{name:"lesson_06_atlas_10", frames: [[0,350,1111,294],[0,0,1104,348],[0,646,1100,281],[1113,0,482,578],[1113,580,482,578],[0,1160,482,578],[484,929,482,578],[968,1160,482,578],[1452,1160,482,578]]},
		{name:"lesson_06_atlas_11", frames: [[0,0,482,578],[0,580,482,578],[0,1160,482,578],[484,0,482,578],[968,0,482,578],[1452,0,482,578],[484,580,482,578],[484,1160,482,578],[968,580,482,578],[1452,580,482,578],[968,1160,482,578],[1452,1160,482,578]]},
		{name:"lesson_06_atlas_12", frames: [[0,0,482,578],[0,580,482,578],[0,1160,482,578],[484,0,482,578],[968,0,482,578],[1452,0,482,578],[484,580,482,578],[484,1160,482,578],[968,580,482,578],[1452,580,482,578],[968,1160,482,578],[1452,1160,482,578]]},
		{name:"lesson_06_atlas_13", frames: [[1385,1335,313,294],[968,1335,415,389],[0,1740,1368,198],[0,1940,1279,73],[1452,964,492,369],[1452,580,541,382],[1370,1726,588,256],[1700,1335,283,266],[0,0,482,578],[0,580,482,578],[0,1160,482,578],[484,0,482,578],[968,0,482,578],[1452,0,482,578],[484,580,482,578],[484,1160,482,578],[968,580,482,578]]},
		{name:"lesson_06_atlas_14", frames: [[576,613,24,47],[369,504,32,48],[403,504,32,48],[549,563,32,48],[583,563,32,48],[602,613,24,47],[923,722,24,47],[949,722,23,46],[549,613,25,46],[974,722,23,46],[554,269,411,107],[229,641,118,112],[349,738,118,111],[638,378,184,182],[185,457,182,182],[824,378,183,182],[0,414,183,182],[266,270,184,185],[452,378,184,183],[0,0,281,267],[554,0,269,267],[283,0,269,268],[967,265,40,78],[369,563,178,173],[863,562,153,158],[825,0,190,191],[779,722,142,144],[638,562,223,143],[0,269,264,143],[549,707,228,117],[0,641,227,125],[369,457,54,45],[825,193,96,72],[923,193,97,70],[452,270,88,68],[229,755,117,106]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_11 = function() {
	this.initialize(ss["lesson_06_atlas_13"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["lesson_06_atlas_13"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["lesson_06_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._05help_tv = function() {
	this.initialize(ss["lesson_06_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._06storyinteractive = function() {
	this.initialize(ss["lesson_06_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._0611zuraas = function() {
	this.initialize(ss["lesson_06_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._06help_kz = function() {
	this.initialize(ss["lesson_06_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._06help_mn = function() {
	this.initialize(ss["lesson_06_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._13 = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._102 = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._104 = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._106 = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._108 = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._32 = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._33 = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._41 = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._42 = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._43 = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.bg_lessonnhiih = function() {
	this.initialize(ss["lesson_06_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Group2 = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.help_btn = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.home = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Layer1 = function() {
	this.initialize(ss["lesson_06_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_1 = function() {
	this.initialize(ss["lesson_06_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_10 = function() {
	this.initialize(ss["lesson_06_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_10a = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_10b = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_10c = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_10d = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_10f = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_10g = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_2 = function() {
	this.initialize(ss["lesson_06_atlas_10"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_3 = function() {
	this.initialize(ss["lesson_06_atlas_13"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_3_1 = function() {
	this.initialize(ss["lesson_06_atlas_13"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_4 = function() {
	this.initialize(ss["lesson_06_atlas_9"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_5 = function() {
	this.initialize(ss["lesson_06_atlas_9"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_6a = function() {
	this.initialize(ss["lesson_06_atlas_13"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_6b = function() {
	this.initialize(ss["lesson_06_atlas_13"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_6bg = function() {
	this.initialize(ss["lesson_06_atlas_8"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_6g = function() {
	this.initialize(ss["lesson_06_atlas_10"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_6v = function() {
	this.initialize(ss["lesson_06_atlas_13"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_7 = function() {
	this.initialize(ss["lesson_06_atlas_7"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_7aa = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_7bb = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_7cc = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_7vv = function() {
	this.initialize(ss["lesson_06_atlas_13"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_8 = function() {
	this.initialize(ss["lesson_06_atlas_8"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_9pngcopy = function() {
	this.initialize(ss["lesson_06_atlas_9"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_9Group2copy9 = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_inter_bg3_02618 = function() {
	this.initialize(ss["lesson_06_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_inter_bg4_03532 = function() {
	this.initialize(ss["lesson_06_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_inter_bt1_01520 = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_inter_bt2_01520 = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_inter_bt3_01520 = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_inter_bt4_01520 = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_inter_bt5_01520 = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_inter_bt6_01520 = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_inter_bt7_01520 = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.lesson6_inter_bt8_01520 = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.lesson_bg = function() {
	this.initialize(ss["lesson_06_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.nud0000 = function() {
	this.initialize(ss["lesson_06_atlas_10"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.nud0001 = function() {
	this.initialize(ss["lesson_06_atlas_10"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.nud0002 = function() {
	this.initialize(ss["lesson_06_atlas_10"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.nud0003 = function() {
	this.initialize(ss["lesson_06_atlas_10"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.nud0004 = function() {
	this.initialize(ss["lesson_06_atlas_10"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.nud0005 = function() {
	this.initialize(ss["lesson_06_atlas_10"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.nud0006 = function() {
	this.initialize(ss["lesson_06_atlas_11"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.nud0007 = function() {
	this.initialize(ss["lesson_06_atlas_11"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.nud0008 = function() {
	this.initialize(ss["lesson_06_atlas_11"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.nud0009 = function() {
	this.initialize(ss["lesson_06_atlas_11"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.nud0010 = function() {
	this.initialize(ss["lesson_06_atlas_11"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.nud0011 = function() {
	this.initialize(ss["lesson_06_atlas_11"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.nud0012 = function() {
	this.initialize(ss["lesson_06_atlas_11"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Rectangle4copy3 = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.sum = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.sum2 = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.true0000 = function() {
	this.initialize(ss["lesson_06_atlas_11"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.true0001 = function() {
	this.initialize(ss["lesson_06_atlas_11"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.true0002 = function() {
	this.initialize(ss["lesson_06_atlas_11"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.true0003 = function() {
	this.initialize(ss["lesson_06_atlas_11"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.true0004 = function() {
	this.initialize(ss["lesson_06_atlas_11"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.true0005 = function() {
	this.initialize(ss["lesson_06_atlas_12"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.true0006 = function() {
	this.initialize(ss["lesson_06_atlas_12"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.true0007 = function() {
	this.initialize(ss["lesson_06_atlas_12"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.true0008 = function() {
	this.initialize(ss["lesson_06_atlas_12"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.true0009 = function() {
	this.initialize(ss["lesson_06_atlas_12"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.true0010 = function() {
	this.initialize(ss["lesson_06_atlas_12"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.true0011 = function() {
	this.initialize(ss["lesson_06_atlas_12"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.true0012 = function() {
	this.initialize(ss["lesson_06_atlas_12"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.VectorSmartObject = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.voice_btn = function() {
	this.initialize(ss["lesson_06_atlas_14"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.zuvbndahinoroldnuu0000 = function() {
	this.initialize(ss["lesson_06_atlas_12"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.zuvbndahinoroldnuu0001 = function() {
	this.initialize(ss["lesson_06_atlas_12"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.zuvbndahinoroldnuu0002 = function() {
	this.initialize(ss["lesson_06_atlas_12"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.zuvbndahinoroldnuu0003 = function() {
	this.initialize(ss["lesson_06_atlas_12"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.zuvbndahinoroldnuu0004 = function() {
	this.initialize(ss["lesson_06_atlas_13"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.zuvbndahinoroldnuu0005 = function() {
	this.initialize(ss["lesson_06_atlas_13"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.zuvbndahinoroldnuu0006 = function() {
	this.initialize(ss["lesson_06_atlas_13"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.zuvbndahinoroldnuu0007 = function() {
	this.initialize(ss["lesson_06_atlas_13"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.zuvbndahinoroldnuu0008 = function() {
	this.initialize(ss["lesson_06_atlas_13"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.zuvbndahinoroldnuu0009 = function() {
	this.initialize(ss["lesson_06_atlas_13"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.zuvbndahinoroldnuu0010 = function() {
	this.initialize(ss["lesson_06_atlas_13"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.zuvbndahinoroldnuu0011 = function() {
	this.initialize(ss["lesson_06_atlas_13"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.zuvbndahinoroldnuu0012 = function() {
	this.initialize(ss["lesson_06_atlas_13"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.voice_btn_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.voice_btn();
	this.instance.setTransform(-58.5,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.voice_btn_1, new cjs.Rectangle(-58.5,-53,117,106), null);


(lib.target43 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#471B18").ss(3,1,1).p("AkIphIIRAAQBkAAAABkIAAP7QAABkhkAAIoRAAQhkAAAAhkIAAv7QAAhkBkAAg");
	this.shape.setTransform(36.5,61);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkIJiQhkAAAAhkIAAv7QAAhkBkAAIIRAAQBkAAAABkIAAP7QAABkhkAAg");
	this.shape_1.setTransform(36.5,61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target43, new cjs.Rectangle(-1.5,-1.5,76,125), null);


(lib.target42 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#471B18").ss(3,1,1).p("AkIphIIRAAQBkAAAABkIAAP7QAABkhkAAIoRAAQhkAAAAhkIAAv7QAAhkBkAAg");
	this.shape.setTransform(36.5,61);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkIJiQhkAAAAhkIAAv7QAAhkBkAAIIRAAQBkAAAABkIAAP7QAABkhkAAg");
	this.shape_1.setTransform(36.5,61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target42, new cjs.Rectangle(-1.5,-1.5,76,125), null);


(lib.target41 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#471B18").ss(3,1,1).p("AkIphIIRAAQBkAAAABkIAAP7QAABkhkAAIoRAAQhkAAAAhkIAAv7QAAhkBkAAg");
	this.shape.setTransform(36.5,61);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkIJiQhkAAAAhkIAAv7QAAhkBkAAIIRAAQBkAAAABkIAAP7QAABkhkAAg");
	this.shape_1.setTransform(36.5,61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target41, new cjs.Rectangle(-1.5,-1.5,76,125), null);


(lib.target_3_4_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AhKlOICVAAQBkAAAABkIAAHVQAABkhkAAIiVAAQhkAAAAhkIAAnVQAAhkBkAAg");
	this.shape.setTransform(17.5,33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD365").s().p("AhKFPQhkAAAAhkIAAnVQAAhkBkAAICVAAQBkAAAABkIAAHVQAABkhkAAg");
	this.shape_1.setTransform(17.5,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target_3_4_2, new cjs.Rectangle(-1,-1,37,69), null);


(lib.target_3_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AhKlOICVAAQBkAAAABkIAAHVQAABkhkAAIiVAAQhkAAAAhkIAAnVQAAhkBkAAg");
	this.shape.setTransform(17.5,33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD365").s().p("AhKFPQhkAAAAhkIAAnVQAAhkBkAAICVAAQBkAAAABkIAAHVQAABkhkAAg");
	this.shape_1.setTransform(17.5,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target_3_4_1, new cjs.Rectangle(-1,-1,37,69), null);


(lib.target_3_3_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AhKlOICVAAQBkAAAABkIAAHVQAABkhkAAIiVAAQhkAAAAhkIAAnVQAAhkBkAAg");
	this.shape.setTransform(17.5,33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD365").s().p("AhKFPQhkAAAAhkIAAnVQAAhkBkAAICVAAQBkAAAABkIAAHVQAABkhkAAg");
	this.shape_1.setTransform(17.5,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target_3_3_3, new cjs.Rectangle(-1,-1,37,69), null);


(lib.target_3_3_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AhKlOICVAAQBkAAAABkIAAHVQAABkhkAAIiVAAQhkAAAAhkIAAnVQAAhkBkAAg");
	this.shape.setTransform(17.5,33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD365").s().p("AhKFPQhkAAAAhkIAAnVQAAhkBkAAICVAAQBkAAAABkIAAHVQAABkhkAAg");
	this.shape_1.setTransform(17.5,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target_3_3_2, new cjs.Rectangle(-1,-1,37,69), null);


(lib.target_3_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AhKlOICVAAQBkAAAABkIAAHVQAABkhkAAIiVAAQhkAAAAhkIAAnVQAAhkBkAAg");
	this.shape.setTransform(17.5,33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD365").s().p("AhKFPQhkAAAAhkIAAnVQAAhkBkAAICVAAQBkAAAABkIAAHVQAABkhkAAg");
	this.shape_1.setTransform(17.5,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target_3_3_1, new cjs.Rectangle(-1,-1,37,69), null);


(lib.target_3_2_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AhKlOICVAAQBkAAAABkIAAHVQAABkhkAAIiVAAQhkAAAAhkIAAnVQAAhkBkAAg");
	this.shape.setTransform(17.5,33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD365").s().p("AhKFPQhkAAAAhkIAAnVQAAhkBkAAICVAAQBkAAAABkIAAHVQAABkhkAAg");
	this.shape_1.setTransform(17.5,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target_3_2_5, new cjs.Rectangle(-1,-1,37,69), null);


(lib.target_3_2_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AhKlOICVAAQBkAAAABkIAAHVQAABkhkAAIiVAAQhkAAAAhkIAAnVQAAhkBkAAg");
	this.shape.setTransform(17.5,33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD365").s().p("AhKFPQhkAAAAhkIAAnVQAAhkBkAAICVAAQBkAAAABkIAAHVQAABkhkAAg");
	this.shape_1.setTransform(17.5,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target_3_2_4, new cjs.Rectangle(-1,-1,37,69), null);


(lib.target_3_2_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AhKlOICVAAQBkAAAABkIAAHVQAABkhkAAIiVAAQhkAAAAhkIAAnVQAAhkBkAAg");
	this.shape.setTransform(17.5,33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD365").s().p("AhKFPQhkAAAAhkIAAnVQAAhkBkAAICVAAQBkAAAABkIAAHVQAABkhkAAg");
	this.shape_1.setTransform(17.5,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target_3_2_3, new cjs.Rectangle(-1,-1,37,69), null);


(lib.target_3_2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AhKlOICVAAQBkAAAABkIAAHVQAABkhkAAIiVAAQhkAAAAhkIAAnVQAAhkBkAAg");
	this.shape.setTransform(17.5,33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD365").s().p("AhKFPQhkAAAAhkIAAnVQAAhkBkAAICVAAQBkAAAABkIAAHVQAABkhkAAg");
	this.shape_1.setTransform(17.5,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target_3_2_2, new cjs.Rectangle(-1,-1,37,69), null);


(lib.target_3_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AhKlOICVAAQBkAAAABkIAAHVQAABkhkAAIiVAAQhkAAAAhkIAAnVQAAhkBkAAg");
	this.shape.setTransform(17.5,33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD365").s().p("AhKFPQhkAAAAhkIAAnVQAAhkBkAAICVAAQBkAAAABkIAAHVQAABkhkAAg");
	this.shape_1.setTransform(17.5,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target_3_2_1, new cjs.Rectangle(-1,-1,37,69), null);


(lib.target_3_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AhKlOICVAAQBkAAAABkIAAHVQAABkhkAAIiVAAQhkAAAAhkIAAnVQAAhkBkAAg");
	this.shape.setTransform(17.5,33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD365").s().p("AhKFPQhkAAAAhkIAAnVQAAhkBkAAICVAAQBkAAAABkIAAHVQAABkhkAAg");
	this.shape_1.setTransform(17.5,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target_3_1_2, new cjs.Rectangle(-1,-1,37,69), null);


(lib.target_3_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AhKlOICVAAQBkAAAABkIAAHVQAABkhkAAIiVAAQhkAAAAhkIAAnVQAAhkBkAAg");
	this.shape.setTransform(17.5,33.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD365").s().p("AhKFPQhkAAAAhkIAAnVQAAhkBkAAICVAAQBkAAAABkIAAHVQAABkhkAAg");
	this.shape_1.setTransform(17.5,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target_3_1_1, new cjs.Rectangle(-1,-1,37,69), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AqmClIAAlJIVNAAIAAFJg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-67.8,-16.5,135.7,33.1), null);


(lib.symb_1_6_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AmylEIQtAAIAAKJIz1AAIAAnBQAAjIDIAAg");
	this.shape.setTransform(63.5,32.5,1,1,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ap6FFIAAnBQAAjIDIAAIQtAAIAAKJg");
	this.shape_1.setTransform(63.5,32.5,1,1,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symb_1_6_4, new cjs.Rectangle(-1,-1,129,67), null);


(lib.symb_1_6_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ap6lEIQtAAQDIAAAADIIAAHBIz1AAg");
	this.shape.setTransform(63.5106,32.506,1,1,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ap6FFIAAqJIQtAAQDIAAAADIIAAHBg");
	this.shape_1.setTransform(63.5106,32.506,1,1,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symb_1_6_3, new cjs.Rectangle(-1,-1,129,67), null);


(lib.symb_1_6_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ap6lEIQtAAQDIAAAADIIAAHBIz1AAg");
	this.shape.setTransform(63.5,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ap6FFIAAqJIQtAAQDIAAAADIIAAHBg");
	this.shape_1.setTransform(63.5,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symb_1_6_2, new cjs.Rectangle(-1,-1,129,67), null);


(lib.symb_1_6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AmylEIQtAAIAAKJIz1AAIAAnBQAAjIDIAAg");
	this.shape.setTransform(63.5,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ap6FFIAAnBQAAjIDIAAIQtAAIAAKJg");
	this.shape_1.setTransform(63.5,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symb_1_6_1, new cjs.Rectangle(-1,-1,129,67), null);


(lib.symb_1_5_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AmylEIQtAAIAAKJIz1AAIAAnBQAAjIDIAAg");
	this.shape.setTransform(63.5,32.5,1,1,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ap6FFIAAnBQAAjIDIAAIQtAAIAAKJg");
	this.shape_1.setTransform(63.5,32.5,1,1,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symb_1_5_4, new cjs.Rectangle(-1,-1,129,67), null);


(lib.symb_1_5_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ap6lEIQtAAQDIAAAADIIAAHBIz1AAg");
	this.shape.setTransform(63.5106,32.506,1,1,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ap6FFIAAqJIQtAAQDIAAAADIIAAHBg");
	this.shape_1.setTransform(63.5106,32.506,1,1,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symb_1_5_3, new cjs.Rectangle(-1,-1,129,67), null);


(lib.symb_1_5_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ap6lEIQtAAQDIAAAADIIAAHBIz1AAg");
	this.shape.setTransform(63.5,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ap6FFIAAqJIQtAAQDIAAAADIIAAHBg");
	this.shape_1.setTransform(63.5,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symb_1_5_2, new cjs.Rectangle(-1,-1,129,67), null);


(lib.symb_1_5_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AmylEIQtAAIAAKJIz1AAIAAnBQAAjIDIAAg");
	this.shape.setTransform(63.5,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ap6FFIAAnBQAAjIDIAAIQtAAIAAKJg");
	this.shape_1.setTransform(63.5,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symb_1_5_1, new cjs.Rectangle(-1,-1,129,67), null);


(lib.symb_1_4_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AmylEIQtAAIAAKJIz1AAIAAnBQAAjIDIAAg");
	this.shape.setTransform(63.5,32.5,1,1,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ap6FFIAAnBQAAjIDIAAIQtAAIAAKJg");
	this.shape_1.setTransform(63.5,32.5,1,1,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symb_1_4_4, new cjs.Rectangle(-1,-1,129,67), null);


(lib.symb_1_4_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ap6lEIQtAAQDIAAAADIIAAHBIz1AAg");
	this.shape.setTransform(63.5106,32.506,1,1,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ap6FFIAAqJIQtAAQDIAAAADIIAAHBg");
	this.shape_1.setTransform(63.5106,32.506,1,1,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symb_1_4_3, new cjs.Rectangle(-1,-1,129,67), null);


(lib.symb_1_4_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ap6lEIQtAAQDIAAAADIIAAHBIz1AAg");
	this.shape.setTransform(63.5,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ap6FFIAAqJIQtAAQDIAAAADIIAAHBg");
	this.shape_1.setTransform(63.5,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symb_1_4_2, new cjs.Rectangle(-1,-1,129,67), null);


(lib.symb_1_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AmylEIQtAAIAAKJIz1AAIAAnBQAAjIDIAAg");
	this.shape.setTransform(63.5,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ap6FFIAAnBQAAjIDIAAIQtAAIAAKJg");
	this.shape_1.setTransform(63.5,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symb_1_4_1, new cjs.Rectangle(-1,-1,129,67), null);


(lib.symb_1_3_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AmylEIQtAAIAAKJIz1AAIAAnBQAAjIDIAAg");
	this.shape.setTransform(63.5,32.5,1,1,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ap6FFIAAnBQAAjIDIAAIQtAAIAAKJg");
	this.shape_1.setTransform(63.5,32.5,1,1,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symb_1_3_4, new cjs.Rectangle(-1,-1,129,67), null);


(lib.symb_1_3_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ap6lEIQtAAQDIAAAADIIAAHBIz1AAg");
	this.shape.setTransform(63.5106,32.506,1,1,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ap6FFIAAqJIQtAAQDIAAAADIIAAHBg");
	this.shape_1.setTransform(63.5106,32.506,1,1,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symb_1_3_3, new cjs.Rectangle(-1,-1,129,67), null);


(lib.symb_1_3_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ap6lEIQtAAQDIAAAADIIAAHBIz1AAg");
	this.shape.setTransform(63.5,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ap6FFIAAqJIQtAAQDIAAAADIIAAHBg");
	this.shape_1.setTransform(63.5,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symb_1_3_2, new cjs.Rectangle(-1,-1,129,67), null);


(lib.symb_1_3_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AmylEIQtAAIAAKJIz1AAIAAnBQAAjIDIAAg");
	this.shape.setTransform(63.5,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ap6FFIAAnBQAAjIDIAAIQtAAIAAKJg");
	this.shape_1.setTransform(63.5,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symb_1_3_1, new cjs.Rectangle(-1,-1,129,67), null);


(lib.symb_1_2_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AmylEIQtAAIAAKJIz1AAIAAnBQAAjIDIAAg");
	this.shape.setTransform(63.5,32.5,1,1,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ap6FFIAAnBQAAjIDIAAIQtAAIAAKJg");
	this.shape_1.setTransform(63.5,32.5,1,1,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symb_1_2_4, new cjs.Rectangle(-1,-1,129,67), null);


(lib.symb_1_2_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ap6lEIQtAAQDIAAAADIIAAHBIz1AAg");
	this.shape.setTransform(63.5106,32.506,1,1,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ap6FFIAAqJIQtAAQDIAAAADIIAAHBg");
	this.shape_1.setTransform(63.5106,32.506,1,1,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symb_1_2_3, new cjs.Rectangle(-1,-1,129,67), null);


(lib.symb_1_2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ap6lEIQtAAQDIAAAADIIAAHBIz1AAg");
	this.shape.setTransform(63.5,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ap6FFIAAqJIQtAAQDIAAAADIIAAHBg");
	this.shape_1.setTransform(63.5,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symb_1_2_2, new cjs.Rectangle(-1,-1,129,67), null);


(lib.symb_1_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AmylEIQtAAIAAKJIz1AAIAAnBQAAjIDIAAg");
	this.shape.setTransform(63.5,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ap6FFIAAnBQAAjIDIAAIQtAAIAAKJg");
	this.shape_1.setTransform(63.5,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symb_1_2_1, new cjs.Rectangle(-1,-1,129,67), null);


(lib.symb_1_1_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AmylEIQtAAIAAKJIz1AAIAAnBQAAjIDIAAg");
	this.shape.setTransform(63.5,32.5,1,1,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ap6FFIAAnBQAAjIDIAAIQtAAIAAKJg");
	this.shape_1.setTransform(63.5,32.5,1,1,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symb_1_1_4, new cjs.Rectangle(-1,-1,129,67), null);


(lib.symb_1_1_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ap6lEIQtAAQDIAAAADIIAAHBIz1AAg");
	this.shape.setTransform(63.5106,32.506,1,1,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ap6FFIAAqJIQtAAQDIAAAADIIAAHBg");
	this.shape_1.setTransform(63.5106,32.506,1,1,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symb_1_1_3, new cjs.Rectangle(-1,-1,129,67), null);


(lib.symb_1_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("Ap6lEIQtAAQDIAAAADIIAAHBIz1AAg");
	this.shape.setTransform(63.5,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ap6FFIAAqJIQtAAQDIAAAADIIAAHBg");
	this.shape_1.setTransform(63.5,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symb_1_1_2, new cjs.Rectangle(-1,-1,129,67), null);


(lib.symb_1_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("AmylEIQtAAIAAKJIz1AAIAAnBQAAjIDIAAg");
	this.shape.setTransform(63.5,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9999").s().p("Ap6FFIAAnBQAAjIDIAAIQtAAIAAKJg");
	this.shape_1.setTransform(63.5,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.symb_1_1_1, new cjs.Rectangle(-1,-1,129,67), null);


(lib.part_prev_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ArUrZQJfAAGsGtQGsGqABJcI3HAAIAA2zQAHAAAIAAg");
	this.shape.setTransform(74,73.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AF3B47").s().p("AHUJYQgSgqAXgpQAcgwA3gDQA3gCAgAtQAfAtgWAxQgWAzg3AKIgQABQhBgEgag9gAgQJmQgogSgOgpQgFgPAAgPQAEhCA9gaQAqgSAoAYQA3AggFBAQgDAmgdAZQgeAaghAAQgWAAgVgKgAo5JQQgQgFgMgKQg1glAIhAQAGgvApgYQAwgdAyAcQA4AfACA/QABAtgjAeQgdAYgiAAQgQAAgRgFgAEqG4QgLgGgIgJQgugtAUg9QAPguAtgPQA0gRArAiQAyAogNA/QgKAtgpAUQgXALgXAAQgZAAgZgOgAjyGAQg9gUgRg9QgJgeAMgdQAZg8BBgCQAqgCAgAcQAwArgQA+QgKAqgmAUQgXAMgYAAQgNAAgNgDgAkgFkIABAAIAAABIAAgBIgBgBgApFC4QgogSgOgpQgFgPAAgPQAEhCA9gaQArgRAoAXQA3AggFBAQgDAmgdAZQgeAaghAAQgWAAgWgKgAgCCaQgygcgDg6QAChCA7gaQAqgUApAWQA4AegCBAQgDA3gwAbQgYANgYAAQgXAAgXgNgAFTAzQgrgJgWgmQgeg4Ahg3QAPgaAcgMQA8gYAvAsQAhAfAAAtQgBA/g5AcQgVALgWAAQgKAAgKgCgAjegxQgZgGgTgTQgxgrAQg/QALgvAsgSQAzgVAtAfQA3AkgEBAQgDAmgcAZQgeAbgkAAQgOAAgOgEgAAXkdQgngSgOgpQgFgPAAgPQAEhCA8gaQArgSAoAYQA3AggFBAQgDAmgdAZQgeAaghAAQgWAAgWgKgAo4kuQgWgCgTgLIgEgDIgDgCIgEgDIgDgCIgDgDIgEgDQgcgdgCgpQgCglAXgeQAYgiAqgGQAogFAgAYQAiAZAGApQACAIgBAIIABADIAAADQAAAUgIATQgIASgNANQgNAOgRAHQgUAJgVAAIgJgBgAksnIQg2gMgTgzQgHgQAAgRQgDhBA4ghQAogYArASQAzAVALA2QAMBAgxAqQgbAWggAAQgKAAgMgDg");
	this.shape_1.setTransform(77.0234,77.0765);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FE5F56").s().p("AriLaIgB2zIAPAAQJfAAGsGtQGrGqACJcgAJKH7Qg3ACgbAxQgYAoASArQAaA9BBADIARgBQA2gJAWgzQAWgygfgtQgegqgzAAIgGAAgAATHaQg8AagDBBQAAAQAEAOQAOApAnASQA7AbAwgrQAdgZADgmQAGg/g4ghQgXgNgXAAQgSAAgTAIgAo1G+QgpAYgFAvQgJBAA1AlQANAJAQAFQA1ARAqgkQAjgdgBguQgCg/g4gfQgYgNgYAAQgZAAgZAPgAFYErQguAPgPAtQgTA9AtAuQAIAIALAGQAvAbAxgYQApgUAKgtQAOg/gzgoQgcgWggAAQgRAAgRAGgAjEDeQhBACgZA9QgNAcAJAeQARA9A9AUQAmAKAjgSQAmgVALgpQAQg+gxgrQgegbgnAAIgEAAgAohAsQg9AagDBBQAAAQAEAOQAOApAoASQA7AbAwgrQAdgZAEgmQAEg/g3ghQgXgNgXAAQgSAAgTAIgAAkAPQg7AcgBBCQACA5AxAdQAvAaAwgaQAwgcADg3QADhAg5geQgWgMgWAAQgTAAgUAJgAFfhoQgdALgPAaQghA3AeA4QAWAmAsAJQAgAHAfgPQA5gdAAg/QAAgsgggfQgfgdgkAAQgTAAgVAJgAjVjMQgsASgMAuQgPA/AwAsQATASAZAHQA1AMApgjQAcgZADgmQAEhAg2glQgbgSgdAAQgUAAgUAJgAA7mpQg8AZgEBCQAAAQAFAOQAOApAnASQA7AbAxgrQAcgZADgmQAFg/g3ghQgXgNgXAAQgSAAgTAIgAofnTQgpAGgZAhQgWAeACAmQACApAbAdIAEACIAEADIACADIAEACIAEADIADACQATAMAXACQAZACAYgKQARgIANgNQAOgOAHgRQAJgTgBgVIAAgDIAAgDQAAgIgBgHQgHgqgigZQgagTgfAAIgPABgAkppiQg4AhAEBBQAAARAGAQQATA0A3AMQAsAKAkgeQAygpgNhBQgLg2gygVQgTgHgSAAQgYAAgXANgAkBGNIgBgBIAAAAIABAAIAAABg");
	this.shape_2.setTransform(74,73.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.part_prev_1, new cjs.Rectangle(-1,-1,150,148.1), null);


(lib.MC_True = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {run:0};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_32 = function() {
		this.stop();
		
		var _this = this;
		
		//createjs.Tween.get().wait(1000).call(stopVideo);
		
		//function stopVideo() {
		//	/*_this.parent.gotoAndStop("Default");*/
		//	//window.location.href = "d1.html"
		//		window.location.href = "d2.html"
		//}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(32).call(this.frame_32).wait(1));

	// MC_True
	this.instance = new lib.true0000();
	this.instance.setTransform(719,251);

	this.instance_1 = new lib.true0001();
	this.instance_1.setTransform(719,251);

	this.instance_2 = new lib.true0002();
	this.instance_2.setTransform(719,251);

	this.instance_3 = new lib.true0003();
	this.instance_3.setTransform(719,251);

	this.instance_4 = new lib.true0004();
	this.instance_4.setTransform(719,251);

	this.instance_5 = new lib.true0005();
	this.instance_5.setTransform(719,251);

	this.instance_6 = new lib.true0006();
	this.instance_6.setTransform(719,251);

	this.instance_7 = new lib.true0007();
	this.instance_7.setTransform(719,251);

	this.instance_8 = new lib.true0008();
	this.instance_8.setTransform(719,251);

	this.instance_9 = new lib.true0009();
	this.instance_9.setTransform(719,251);

	this.instance_10 = new lib.true0010();
	this.instance_10.setTransform(719,251);

	this.instance_11 = new lib.true0011();
	this.instance_11.setTransform(719,251);

	this.instance_12 = new lib.true0012();
	this.instance_12.setTransform(719,251);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},2).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},3).to({state:[{t:this.instance_7}]},3).to({state:[{t:this.instance_8}]},3).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(719,251,482,578);


(lib.MC_False = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"run":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_27 = function() {
		this.stop();
		
		var _this = this;
		
		var rnd = Math.random()*5000+5000;
		createjs.Tween.get().wait(rnd).call(refreshHome);
		function refreshHome()
		{
			_this.gotoAndPlay(0);
		}
		
		_this.parent.gotoAndStop("Default");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(27).call(this.frame_27).wait(1));

	// MC_False
	this.instance = new lib.zuvbndahinoroldnuu0000();
	this.instance.setTransform(719,251);

	this.instance_1 = new lib.zuvbndahinoroldnuu0000();
	this.instance_1.setTransform(719,251);

	this.instance_2 = new lib.zuvbndahinoroldnuu0000();
	this.instance_2.setTransform(719,251);

	this.instance_3 = new lib.zuvbndahinoroldnuu0001();
	this.instance_3.setTransform(719,251);

	this.instance_4 = new lib.zuvbndahinoroldnuu0002();
	this.instance_4.setTransform(719,251);

	this.instance_5 = new lib.zuvbndahinoroldnuu0003();
	this.instance_5.setTransform(719,251);

	this.instance_6 = new lib.zuvbndahinoroldnuu0004();
	this.instance_6.setTransform(719,251);

	this.instance_7 = new lib.zuvbndahinoroldnuu0005();
	this.instance_7.setTransform(719,251);

	this.instance_8 = new lib.zuvbndahinoroldnuu0006();
	this.instance_8.setTransform(719,251);

	this.instance_9 = new lib.zuvbndahinoroldnuu0007();
	this.instance_9.setTransform(719,251);

	this.instance_10 = new lib.zuvbndahinoroldnuu0008();
	this.instance_10.setTransform(719,251);

	this.instance_11 = new lib.zuvbndahinoroldnuu0009();
	this.instance_11.setTransform(719,251);

	this.instance_12 = new lib.zuvbndahinoroldnuu0010();
	this.instance_12.setTransform(719,251);

	this.instance_13 = new lib.zuvbndahinoroldnuu0011();
	this.instance_13.setTransform(719,251);

	this.instance_14 = new lib.zuvbndahinoroldnuu0012();
	this.instance_14.setTransform(719,251);

	this.instance_15 = new lib.zuvbndahinoroldnuu0012();
	this.instance_15.setTransform(719,251);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},1).to({state:[{t:this.instance_3}]},2).to({state:[{t:this.instance_4}]},2).to({state:[{t:this.instance_5}]},2).to({state:[{t:this.instance_6}]},2).to({state:[{t:this.instance_7}]},2).to({state:[{t:this.instance_8}]},2).to({state:[{t:this.instance_9}]},2).to({state:[{t:this.instance_10}]},2).to({state:[{t:this.instance_11}]},2).to({state:[{t:this.instance_12}]},2).to({state:[{t:this.instance_13}]},2).to({state:[{t:this.instance_14}]},2).to({state:[{t:this.instance_15},{t:this.instance_14}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(719,251,482,578);


(lib.MC_Blink = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_49 = function() {
		this.stop();
		var _this = this;
		var rnd = Math.random()*5000+5000;
		createjs.Tween.get().wait(rnd).call(refreshHome);
		function refreshHome()
		{
			_this.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(1));

	// MC_Blink
	this.instance = new lib.nud0000();
	this.instance.setTransform(719,251);

	this.instance_1 = new lib.nud0001();
	this.instance_1.setTransform(719,251);

	this.instance_2 = new lib.nud0002();
	this.instance_2.setTransform(719,251);

	this.instance_3 = new lib.nud0003();
	this.instance_3.setTransform(719,251);

	this.instance_4 = new lib.nud0004();
	this.instance_4.setTransform(719,251);

	this.instance_5 = new lib.nud0005();
	this.instance_5.setTransform(719,251);

	this.instance_6 = new lib.nud0006();
	this.instance_6.setTransform(719,251);

	this.instance_7 = new lib.nud0007();
	this.instance_7.setTransform(719,251);

	this.instance_8 = new lib.nud0008();
	this.instance_8.setTransform(719,251);

	this.instance_9 = new lib.nud0009();
	this.instance_9.setTransform(719,251);

	this.instance_10 = new lib.nud0010();
	this.instance_10.setTransform(719,251);

	this.instance_11 = new lib.nud0011();
	this.instance_11.setTransform(719,251);

	this.instance_12 = new lib.nud0012();
	this.instance_12.setTransform(719,251);

	this.instance_13 = new lib.nud0012();
	this.instance_13.setTransform(719,251);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},19).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13},{t:this.instance_12}]},19).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(719,251,482,578);


(lib.Symbol18 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#461A17").ss(3,1,1).p("At5kkIbzAAQCWAAAACWIAAEdQAACWiWAAI7zAAQiWAAAAiWIAAkdQAAiWCWAAg");
	this.shape.setTransform(104.025,29.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCA7F").s().p("At5ElQiWAAAAiWIAAkdQAAiWCWAAIbzAAQCWAAAACWIAAEdQAACWiWAAg");
	this.shape_1.setTransform(104.025,29.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol18, new cjs.Rectangle(-1.5,-1.5,211.1,61.6), null);


(lib.Symbol17 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#461A17").ss(3,1,1).p("At5kkIbzAAQCWAAAACWIAAEdQAACWiWAAI7zAAQiWAAAAiWIAAkdQAAiWCWAAg");
	this.shape.setTransform(104.025,29.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEC7E").s().p("At5ElQiWAAAAiWIAAkdQAAiWCWAAIbzAAQCWAAAACWIAAEdQAACWiWAAg");
	this.shape_1.setTransform(104.025,29.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol17, new cjs.Rectangle(-1.5,-1.5,211.1,61.6), null);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#461A17").ss(3,1,1).p("At5kkIbzAAQCWAAAACWIAAEdQAACWiWAAI7zAAQiWAAAAiWIAAkdQAAiWCWAAg");
	this.shape.setTransform(104.025,29.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCF4A5").s().p("At5ElQiWAAAAiWIAAkdQAAiWCWAAIbzAAQCWAAAACWIAAEdQAACWiWAAg");
	this.shape_1.setTransform(104.025,29.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(-1.5,-1.5,211.1,61.6), null);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#461A17").ss(3,1,1).p("At5kkIbzAAQCWAAAACWIAAEdQAACWiWAAI7zAAQiWAAAAiWIAAkdQAAiWCWAAg");
	this.shape.setTransform(104.025,29.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAD0B2").s().p("At5ElQiWAAAAiWIAAkdQAAiWCWAAIbzAAQCWAAAACWIAAEdQAACWiWAAg");
	this.shape_1.setTransform(104.025,29.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(-1.5,-1.5,211.1,61.6), null);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#461A17").ss(3,1,1).p("At5kkIbzAAQCWAAAACWIAAEdQAACWiWAAI7zAAQiWAAAAiWIAAkdQAAiWCWAAg");
	this.shape.setTransform(104.025,29.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEC7E").s().p("At5ElQiWAAAAiWIAAkdQAAiWCWAAIbzAAQCWAAAACWIAAEdQAACWiWAAg");
	this.shape_1.setTransform(104.025,29.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(-1.5,-1.5,211.1,61.6), null);


(lib.Symbol13 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#461A17").ss(3,1,1).p("At5kkIbzAAQCWAAAACWIAAEdQAACWiWAAI7zAAQiWAAAAiWIAAkdQAAiWCWAAg");
	this.shape.setTransform(104.025,29.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAD0B2").s().p("At5ElQiWAAAAiWIAAkdQAAiWCWAAIbzAAQCWAAAACWIAAEdQAACWiWAAg");
	this.shape_1.setTransform(104.025,29.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(-1.5,-1.5,211.1,61.6), null);


(lib.Symbol12 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#461A17").ss(3,1,1).p("At5kkIbzAAQCWAAAACWIAAEdQAACWiWAAI7zAAQiWAAAAiWIAAkdQAAiWCWAAg");
	this.shape.setTransform(104.025,29.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCA7F").s().p("At5ElQiWAAAAiWIAAkdQAAiWCWAAIbzAAQCWAAAACWIAAEdQAACWiWAAg");
	this.shape_1.setTransform(104.025,29.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(-1.5,-1.5,211.1,61.6), null);


(lib.Symbol11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#461A17").ss(3,1,1).p("AxpkkMAjTAAAQCWAAAACWIAAEdQAACWiWAAMgjTAAAQiWAAAAiWIAAkdQAAiWCWAAg");
	this.shape.setTransform(128,29.275);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCF4A5").s().p("AxpElQiWAAAAiWIAAkdQAAiWCWAAMAjTAAAQCWAAAACWIAAEdQAACWiWAAg");
	this.shape_1.setTransform(128,29.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11, new cjs.Rectangle(-1.5,-1.5,259,61.6), null);


(lib.target44 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(71,27,24,0)").ss(0.1,1,1).p("A4SkNMAwlAAAQAKAAAAAKIAAIHQAAAKgKAAMgwlAAAQgKAAAAgKIAAoHQAAgKAKAAg");
	this.shape.setTransform(156.5,27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("A4SEOQgKAAAAgKIAAoHQAAgKAKAAMAwlAAAQAKAAAAAKIAAIHQAAAKgKAAg");
	this.shape_1.setTransform(156.5,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target44, new cjs.Rectangle(-1,-1,315,56), null);


(lib.target33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(71,27,24,0)").ss(0.1,1,1).p("A4SkNMAwlAAAQAKAAAAAKIAAIHQAAAKgKAAMgwlAAAQgKAAAAgKIAAoHQAAgKAKAAg");
	this.shape.setTransform(156.5,27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("A4SEOQgKAAAAgKIAAoHQAAgKAKAAMAwlAAAQAKAAAAAKIAAIHQAAAKgKAAg");
	this.shape_1.setTransform(156.5,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target33, new cjs.Rectangle(-1,-1,315,56), null);


(lib.target22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(71,27,24,0)").ss(0.1,1,1).p("A4SkNMAwlAAAQAKAAAAAKIAAIHQAAAKgKAAMgwlAAAQgKAAAAgKIAAoHQAAgKAKAAg");
	this.shape.setTransform(156.5,27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("A4SEOQgKAAAAgKIAAoHQAAgKAKAAMAwlAAAQAKAAAAAKIAAIHQAAAKgKAAg");
	this.shape_1.setTransform(156.5,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target22, new cjs.Rectangle(-1,-1,315,56), null);


(lib.target11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(71,27,24,0)").ss(0.1,1,1).p("A4SkNMAwlAAAQAKAAAAAKIAAIHQAAAKgKAAMgwlAAAQgKAAAAgKIAAoHQAAgKAKAAg");
	this.shape.setTransform(156.5,27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("A4SEOQgKAAAAgKIAAoHQAAgKAKAAMAwlAAAQAKAAAAAKIAAIHQAAAKgKAAg");
	this.shape_1.setTransform(156.5,27);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target11, new cjs.Rectangle(-1,-1,315,56), null);


(lib.target6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("Ao4IyQjsjpAAlJQAAlIDsjqQDsjoFMAAQFNAADsDoQDsDqAAFIQAAFJjsDpQjsDplNAAQlMAAjsjpg");
	this.shape.setTransform(80.5,79.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target6, new cjs.Rectangle(0,0,161,159), null);


(lib.target5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("Ao4IyQjsjpAAlJQAAlIDsjqQDsjoFMAAQFNAADsDoQDsDqAAFIQAAFJjsDpQjsDplNAAQlMAAjsjpg");
	this.shape.setTransform(80.5,79.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target5, new cjs.Rectangle(0,0,161,159), null);


(lib.target4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("Ao4IyQjsjpAAlJQAAlIDsjqQDsjoFMAAQFNAADsDoQDsDqAAFIQAAFJjsDpQjsDplNAAQlMAAjsjpg");
	this.shape.setTransform(80.5,79.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target4, new cjs.Rectangle(0,0,161,159), null);


(lib.target3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("Ao4IyQjsjpAAlJQAAlIDsjqQDsjoFMAAQFNAADsDoQDsDqAAFIQAAFJjsDpQjsDplNAAQlMAAjsjpg");
	this.shape.setTransform(80.5,79.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target3, new cjs.Rectangle(0,0,161,159), null);


(lib.target2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("Ao4IyQjsjpAAlJQAAlIDsjqQDsjoFMAAQFNAADsDoQDsDqAAFIQAAFJjsDpQjsDplNAAQlMAAjsjpg");
	this.shape.setTransform(80.5,79.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target2, new cjs.Rectangle(0,0,161,159), null);


(lib.target1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("Ao4IyQjsjpAAlJQAAlIDsjqQDsjoFMAAQFNAADsDoQDsDqAAFIQAAFJjsDpQjsDplNAAQlMAAjsjpg");
	this.shape.setTransform(80.5,79.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target1, new cjs.Rectangle(0,0,161,159), null);


(lib.Symbol11_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._108();
	this.instance.setTransform(5.25,16.35,2.0267,2.0267);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#471B18").ss(3,1,1).p("AkIphIIRAAQBkAAAABkIAAP7QAABkhkAAIoRAAQhkAAAAhkIAAv7QAAhkBkAAg");
	this.shape_2.setTransform(36.5,61);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AkIJiQhkAAAAhkIAAv7QAAhkBkAAIIRAAQBkAAAABkIAAP7QAABkhkAAg");
	this.shape_3.setTransform(36.5,61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol11_1, new cjs.Rectangle(-1.5,-1.5,76,125), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._106();
	this.instance.setTransform(5.6,17.65,2.026,2.0262);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#471B18").ss(3,1,1).p("AkIphIIRAAQBkAAAABkIAAP7QAABkhkAAIoRAAQhkAAAAhkIAAv7QAAhkBkAAg");
	this.shape.setTransform(36.5,61);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkIJiQhkAAAAhkIAAv7QAAhkBkAAIIRAAQBkAAAABkIAAP7QAABkhkAAg");
	this.shape_1.setTransform(36.5,61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(-1.5,-1.5,76,125), null);


(lib.Symbol9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._104();
	this.instance.setTransform(6.15,16.1,2.026,2.0262);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#471B18").ss(3,1,1).p("AkIphIIRAAQBkAAAABkIAAP7QAABkhkAAIoRAAQhkAAAAhkIAAv7QAAhkBkAAg");
	this.shape.setTransform(36.5,61);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkIJiQhkAAAAhkIAAv7QAAhkBkAAIIRAAQBkAAAABkIAAP7QAABkhkAAg");
	this.shape_1.setTransform(36.5,61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(-1.5,-1.5,76,125), null);


(lib.Symbol8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._102();
	this.instance.setTransform(4,12.85,2.026,2.0262);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#471B18").ss(3,1,1).p("AkIphIIRAAQBkAAAABkIAAP7QAABkhkAAIoRAAQhkAAAAhkIAAv7QAAhkBkAAg");
	this.shape.setTransform(36.5,61);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkIJiQhkAAAAhkIAAv7QAAhkBkAAIIRAAQBkAAAABkIAAP7QAABkhkAAg");
	this.shape_1.setTransform(36.5,61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(-1.5,-1.5,76,125), null);


(lib.Symbol7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._43();
	this.instance.setTransform(12.75,13.75,2.1143,2.1145);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#471B18").ss(3,1,1).p("AkIphIIRAAQBkAAAABkIAAP7QAABkhkAAIoRAAQhkAAAAhkIAAv7QAAhkBkAAg");
	this.shape.setTransform(36.5,61);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkIJiQhkAAAAhkIAAv7QAAhkBkAAIIRAAQBkAAAABkIAAP7QAABkhkAAg");
	this.shape_1.setTransform(36.5,61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol7, new cjs.Rectangle(-1.5,-1.5,76,125), null);


(lib.Symbol6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._42();
	this.instance.setTransform(11,14.75,2.1146,2.1145);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#471B18").ss(3,1,1).p("AkIphIIRAAQBkAAAABkIAAP7QAABkhkAAIoRAAQhkAAAAhkIAAv7QAAhkBkAAg");
	this.shape.setTransform(36.5,61);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkIJiQhkAAAAhkIAAv7QAAhkBkAAIIRAAQBkAAAABkIAAP7QAABkhkAAg");
	this.shape_1.setTransform(36.5,61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-1.5,-1.5,76,125), null);


(lib.Symbol5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._41();
	this.instance.setTransform(14.35,14.75,2.1143,2.1145);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#471B18").ss(3,1,1).p("AkIphIIRAAQBkAAAABkIAAP7QAABkhkAAIoRAAQhkAAAAhkIAAv7QAAhkBkAAg");
	this.shape.setTransform(36.5,61);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkIJiQhkAAAAhkIAAv7QAAhkBkAAIIRAAQBkAAAABkIAAP7QAABkhkAAg");
	this.shape_1.setTransform(36.5,61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(-1.5,-1.5,76,125), null);


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._33();
	this.instance.setTransform(10.55,12,2.0686,2.069);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#471B18").ss(3,1,1).p("AkIphIIRAAQBkAAAABkIAAP7QAABkhkAAIoRAAQhkAAAAhkIAAv7QAAhkBkAAg");
	this.shape.setTransform(36.5,61);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkIJiQhkAAAAhkIAAv7QAAhkBkAAIIRAAQBkAAAABkIAAP7QAABkhkAAg");
	this.shape_1.setTransform(36.5,61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(-1.5,-1.5,76,125), null);


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._32();
	this.instance.setTransform(10.6,11,2.0686,2.069);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#471B18").ss(3,1,1).p("AkIphIIRAAQBkAAAABkIAAP7QAABkhkAAIoRAAQhkAAAAhkIAAv7QAAhkBkAAg");
	this.shape.setTransform(36.5,61);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkIJiQhkAAAAhkIAAv7QAAhkBkAAIIRAAQBkAAAABkIAAP7QAABkhkAAg");
	this.shape_1.setTransform(36.5,61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(-1.5,-1.5,76,125), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._13();
	this.instance.setTransform(11.5,11,2.0686,2.069);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#471B18").ss(3,1,1).p("AkIphIIRAAQBkAAAABkIAAP7QAABkhkAAIoRAAQhkAAAAhkIAAv7QAAhkBkAAg");
	this.shape.setTransform(36.5,61);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AkIJiQhkAAAAhkIAAv7QAAhkBkAAIIRAAQBkAAAABkIAAP7QAABkhkAAg");
	this.shape_1.setTransform(36.5,61);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1.5,-1.5,76,125), null);


(lib.drag44 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("аравны нэг", "bold 35px 'Rubik'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 43;
	this.text.lineWidth = 267;
	this.text.parent = this;
	this.text.setTransform(151.35,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(71,27,24,0)").ss(0.1,1,1).p("A4SkNMAwlAAAQAKAAAAAKIAAIHQAAAKgKAAMgwlAAAQgKAAAAgKIAAoHQAAgKAKAAg");
	this.shape.setTransform(156.5,32.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("A4SEOQgKAAAAgKIAAoHQAAgKAKAAMAwlAAAQAKAAAAAKIAAIHQAAAKgKAAg");
	this.shape_1.setTransform(156.5,32.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.drag44, new cjs.Rectangle(-1,0,315,60.7), null);


(lib.drag33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("аравны гурав", "bold 35px 'Rubik'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 43;
	this.text.lineWidth = 254;
	this.text.parent = this;
	this.text.setTransform(153.05,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(71,27,24,0)").ss(0.1,1,1).p("A4SkNMAwlAAAQAKAAAAAKIAAIHQAAAKgKAAMgwlAAAQgKAAAAgKIAAoHQAAgKAKAAg");
	this.shape.setTransform(156.5,31.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("A4SEOQgKAAAAgKIAAoHQAAgKAKAAMAwlAAAQAKAAAAAKIAAIHQAAAKgKAAg");
	this.shape_1.setTransform(156.5,31.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.drag33, new cjs.Rectangle(-1,0,315,59.4), null);


(lib.drag22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("аравны дөрөв   ", "bold 35px 'Rubik'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 43;
	this.text.lineWidth = 269;
	this.text.parent = this;
	this.text.setTransform(152.95,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(71,27,24,0)").ss(0.1,1,1).p("A4SkNMAwlAAAQAKAAAAAKIAAIHQAAAKgKAAMgwlAAAQgKAAAAgKIAAoHQAAgKAKAAg");
	this.shape.setTransform(156.5,30.75);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("A4SEOQgKAAAAgKIAAoHQAAgKAKAAMAwlAAAQAKAAAAAKIAAIHQAAAKgKAAg");
	this.shape_1.setTransform(156.5,30.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.drag22, new cjs.Rectangle(-1,0,315,58.8), null);


(lib.drag11 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("аравны зургаа", "bold 35px 'Rubik'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 43;
	this.text.lineWidth = 291;
	this.text.parent = this;
	this.text.setTransform(158.75,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(71,27,24,0)").ss(0.1,1,1).p("A4SkNMAwlAAAQAKAAAAAKIAAIHQAAAKgKAAMgwlAAAQgKAAAAgKIAAoHQAAgKAKAAg");
	this.shape.setTransform(156.5,30.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0)").s().p("A4SEOQgKAAAAgKIAAoHQAAgKAKAAMAwlAAAQAKAAAAAKIAAIHQAAAKgKAAg");
	this.shape_1.setTransform(156.5,30.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.drag11, new cjs.Rectangle(-1,0,315,58.3), null);


(lib.drag6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.lesson6_10a();
	this.instance.setTransform(0,0,0.8873,0.8846);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.drag6, new cjs.Rectangle(0,0,163.3,161), null);


(lib.drag5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.lesson6_10c();
	this.instance.setTransform(0,0,0.8873,0.8846);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.drag5, new cjs.Rectangle(0,0,162.4,161), null);


(lib.drag4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.lesson6_10d();
	this.instance.setTransform(0,0,0.8873,0.8846);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.drag4, new cjs.Rectangle(0,0,162.4,161), null);


(lib.drag3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.lesson6_10f();
	this.instance.setTransform(0,0,0.8873,0.8846);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.drag3, new cjs.Rectangle(0,0,163.3,163.7), null);


(lib.drag1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.lesson6_10g();
	this.instance.setTransform(0,0,0.8873,0.8846);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.drag1, new cjs.Rectangle(0,0,163.3,161.9), null);


(lib.darg2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.lesson6_10b();
	this.instance.setTransform(0,0,0.8873,0.8846);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.darg2, new cjs.Rectangle(0,0,161.5,161), null);


(lib.Symbol1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#002E7A").ss(2,1,1).p("AvZnQIeyAAQDIAAAACgIAAJhQAACgjIAAI+yAAQjHAAAAigIAAphQAAigDHAAg");
	this.shape_1.setTransform(123.8,52.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FFFF").s().p("AvYHRQjIAAAAigIAApgQAAihDIAAIeyAAQDHAAAAChIAAJgQAACgjHAAg");
	this.shape_2.setTransform(123.8,52.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#00FFFF").ss(0.1,1,1).p("AvyoHIflAAQBfAABDBDQBEBEAABfIAAIvQAABohKBIQhJBKhnAAI/RAAQhfAAhEhDQhDhDAAhgIAApDQAAhfBDhEQBEhDBfAAg");
	this.shape_3.setTransform(123.9915,52,0.9993,1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066FF").s().p("AvyIIQhfAAhEhDQhDhEAAhfIAApDQAAhfBDhEQBEhDBfAAIflAAQBfAABDBDQBEBEAABfIAAIvQAABohKBIQhJBKhnAAg");
	this.shape_4.setTransform(123.9915,52,0.9993,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1_1, new cjs.Rectangle(-1,-1,250,106), null);


(lib.input_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9FD8D8").s().p("AskD4IAAnvIZJAAIAAHvg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.input_1, new cjs.Rectangle(-80.4,-24.7,160.9,49.5), null);


(lib.img_7_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.lesson6_7cc();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_7_4, new cjs.Rectangle(0,0,269,268), null);


(lib.img_7_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.lesson6_7vv();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_7_3, new cjs.Rectangle(0,0,283,266), null);


(lib.img_7_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.lesson6_7bb();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_7_2, new cjs.Rectangle(0,0,269,267), null);


(lib.img_7_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.lesson6_7aa();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_7_1, new cjs.Rectangle(0,0,281,267), null);


(lib.img_6_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.lesson6_6g();
	this.instance.setTransform(0,0,0.8764,0.8763);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_6_4, new cjs.Rectangle(0,0,964,246.3), null);


(lib.img_6_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.lesson6_6v();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_6_3, new cjs.Rectangle(0,0,588,256), null);


(lib.img_6_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.lesson6_6b();
	this.instance.setTransform(0,0,0.9759,0.9759);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_6_2, new cjs.Rectangle(0,0,528,372.8), null);


(lib.img_6_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.lesson6_6a();
	this.instance.setTransform(259,114,1,1.0001);

	this.instance_1 = new lib.lesson6_6bg();
	this.instance_1.setTransform(0,0,0.8325,0.8324);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_6_1, new cjs.Rectangle(0,0,1033.9,499.5), null);


(lib.home_btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.home();
	this.instance.setTransform(-59,-55.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.home_btn, new cjs.Rectangle(-59,-55.5,118,111), null);


(lib.hit_area_internal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(245,245,245,0.91)").s().p("AkRE9IAAp5IIjAAIAAJ5g");
	this.shape.setTransform(-0.025,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hit_area_internal, new cjs.Rectangle(-27.4,-31.7,54.8,63.4), null);


(lib.help_tv = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.help_btn_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.help_btn();
	this.instance.setTransform(-59,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.help_btn_1, new cjs.Rectangle(-59,-56,118,112), null);


(lib.checkmark = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.VectorSmartObject();
	this.instance.setTransform(-44,-34);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.checkmark, new cjs.Rectangle(-44,-34,88,68), null);


(lib.Blue = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EggFAgBMAAAhACMBALAAAMAAABACg");
	mask.setTransform(205.425,204.95);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#4528B8","#457CEC"],[0,1],-177.3,-102.4,177.4,102.4).s().p("EgAJAgAQmhgCl7ijQlviekakcQkbkdiZlwQifl+ACmfQACmhCjl7QCdlvEdkaQEdkaFwiaQF+ieGfABQGhACF8CjQFuCeEaEcQEaEdCaFwQCfF+gCGfQgCGhijF7QidFvkdEaQkdEalwCaQl5CdmbAAIgJAAg");
	this.shape.setTransform(205.1,204.75);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Blue, new cjs.Rectangle(0.3,0,409.59999999999997,409.5), null);


(lib.btn_tuva = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Rectangle4copy3();
	this.instance.setTransform(-27,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_tuva, new cjs.Rectangle(-27,-22.5,54,45), null);


(lib.btn_start = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Group2();
	this.instance.setTransform(-205.5,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-205.5,-53.5,411,107);


(lib.btn_sign = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Rectangle4copy3();
	this.instance.setTransform(-27,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_sign, new cjs.Rectangle(-27,-22.5,54,45), null);


(lib.btn_prev_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.lesson6_inter_bt8_01520();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_prev_8, new cjs.Rectangle(0,0,227,125), null);


(lib.btn_prev_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.lesson6_inter_bt6_01520();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_prev_7, new cjs.Rectangle(0,0,264,143), null);


(lib.btn_prev_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.lesson6_inter_bt7_01520();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_prev_6, new cjs.Rectangle(0,0,228,117), null);


(lib.btn_prev_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.lesson6_inter_bt5_01520();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_prev_5, new cjs.Rectangle(0,0,223,143), null);


(lib.btn_prev_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.lesson6_inter_bt4_01520();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_prev_4, new cjs.Rectangle(0,0,142,144), null);


(lib.btn_prev_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.lesson6_inter_bt3_01520();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_prev_3, new cjs.Rectangle(0,0,190,191), null);


(lib.btn_prev_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.lesson6_inter_bt2_01520();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_prev_2, new cjs.Rectangle(0,0,153,158), null);


(lib.btn_prev_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.lesson6_inter_bt1_01520();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_prev_1, new cjs.Rectangle(0,0,178,173), null);


(lib.btn_next = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sum2();
	this.instance.setTransform(-48.5,-35);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_next, new cjs.Rectangle(-48.5,-35,97,70), null);


(lib.btn_mn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Rectangle4copy3();
	this.instance.setTransform(-27,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_mn, new cjs.Rectangle(-27,-22.5,54,45), null);


(lib.btn_kz = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Rectangle4copy3();
	this.instance.setTransform(-27,-22.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_kz, new cjs.Rectangle(-27,-22.5,54,45), null);


(lib.btn_back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.sum();
	this.instance.setTransform(-48,-36);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_back, new cjs.Rectangle(-48,-36,96,72), null);


(lib.Nud = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Open:0,Close:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Nud
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#71345E").s().p("ABAAlQgLgJgBgPIgCgTQgBgOAJgMQAJgLAOgBQAPgBAKAJQALAJACAPIABATQACAOgJAMQgJALgPABIgCAAQgNAAgKgIgAhYAtQgOgBgKgMQgJgLABgOIACgTQACgPALgJQALgJAOABQAPABAJAMQAJALgBAOIgCATQgBAPgLAJQgKAIgMAAIgEAAg");
	this.shape.setTransform(77.3057,68.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#71345E").s().p("AAoAKQgEAAgDgDQgDgDAAgEQAAgJAKAAIBaAAQAKAAAAAJQAAAEgDADQgDADgEAAgAiBAKQgEAAgDgDQgDgDAAgEQAAgDADgDQADgDAEAAIBaAAQAKAAAAAJQAAAEgDADQgDADgEAAg");
	this.shape_1.setTransform(77.35,69.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(63.4,64.3,28.000000000000007,9.100000000000009);


(lib.Nud_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {"Open":0,"Close":1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Nud
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#71345E").s().p("ABYA6QgMgSAAgZQAAgYALgSQAMgRAQgBQARAAALASQAMARAAAYQAAAZgLASQgMASgQAAIAAAAQgQAAgMgRgAh6AsQgRgCgJgTQgJgTADgYQAEgYAOgQQAOgQARACQAQADAJATQAJATgDAYQgEAYgOAQQgMANgOAAIgEAAg");
	this.shape_2.setTransform(100.3529,86.4393);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#71345E").s().p("ACoAjIhkgJQgEAAgCgDQgDgEAAgEQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBIgCgGQABgEADgBQADgDAEAAIBkAIQAEABADADQADADgBAEIgBAFQABACAAADQAAAEgDADQgDADgDAAIgCgBgAhGADIhjgIQgEAAgDgDQgDgEABgEQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAgBQgCgEABgCQAAgEADgCQADgDAEAAIBkAJQAEABADADQADADgBAEIgBAFQACADgBACQgBAJgIAAIgCgBg");
	this.shape_3.setTransform(99.9242,87.9006);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2}]}).to({state:[{t:this.shape_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82,79,35.900000000000006,15);


(lib.txt_8_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.drag33();
	this.instance.setTransform(156.5,29.2,1,1,0,0,0,156.5,29.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_8_4, new cjs.Rectangle(0,0,313.1,58.5), null);


(lib.txt_8_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.drag11();
	this.instance.setTransform(156.5,28.8,1,1,0,0,0,156.5,28.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_8_3, new cjs.Rectangle(0,0,313.1,57.6), null);


(lib.txt_8_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.drag44();
	this.instance.setTransform(156.5,29.9,1,1,0,0,0,156.5,29.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_8_2, new cjs.Rectangle(0,0,313.1,59.8), null);


(lib.txt_8_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.drag22();
	this.instance.setTransform(156.5,28.9,1,1,0,0,0,156.5,28.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.txt_8_1, new cjs.Rectangle(0,0,313.1,57.8), null);


(lib.target_4_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.target43();
	this.instance.setTransform(36.5,61,1,1,0,0,0,36.5,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target_4_3, new cjs.Rectangle(-1.5,-1.5,76,125), null);


(lib.target_4_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.target42();
	this.instance.setTransform(36.5,61,1,1,0,0,0,36.5,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target_4_2, new cjs.Rectangle(-1.5,-1.5,76,125), null);


(lib.target_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.target41();
	this.instance.setTransform(36.5,61,1,1,0,0,0,36.5,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.target_4_1, new cjs.Rectangle(-1.5,-1.5,76,125), null);


(lib.MC_result = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {Default:0,Wrong:1,wrong:2,Correct:3};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1).call(this.frame_3).wait(1));

	// Correct
	this.mc_correct = new lib.MC_True();
	this.mc_correct.name = "mc_correct";
	this.mc_correct.setTransform(0.05,0.05,0.5717,0.5716,0,0,0,0.6,0.6);
	this.mc_correct._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_correct).wait(3).to({_off:false},0).wait(1));

	// Wrong
	this.mc_wrong = new lib.MC_False();
	this.mc_wrong.name = "mc_wrong";
	this.mc_wrong.setTransform(0.55,0.55,0.5715,0.5715,0,0,0,1.5,1.4);
	this.mc_wrong._off = true;

	this.timeline.addTween(cjs.Tween.get(this.mc_wrong).wait(2).to({_off:false},0).to({_off:true},1).wait(1));

	// Normal
	this.instance = new lib.MC_Blink();
	this.instance.setTransform(-0.2,0.15,0.5716,0.5715,0,0,0,0.2,0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,686.3,473.6);


(lib.img_10_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.drag4();
	this.instance.setTransform(81.2,80.5,1,1,0,0,0,81.2,80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_10_6, new cjs.Rectangle(0,0,162.4,161), null);


(lib.img_10_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.darg2();
	this.instance.setTransform(80.8,80.5,1,1,0,0,0,80.8,80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_10_5, new cjs.Rectangle(0,0,161.5,161), null);


(lib.img_10_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.drag6();
	this.instance.setTransform(81.6,80.5,1,1,0,0,0,81.6,80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_10_4, new cjs.Rectangle(0,0,163.3,161), null);


(lib.img_10_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.drag1();
	this.instance.setTransform(81.6,81,1,1,0,0,0,81.6,81);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_10_3, new cjs.Rectangle(0,0,163.3,161.9), null);


(lib.img_10_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.drag3();
	this.instance.setTransform(81.6,81.8,1,1,0,0,0,81.6,81.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_10_2, new cjs.Rectangle(0,0,163.3,163.7), null);


(lib.img_10_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.drag5();
	this.instance.setTransform(81.2,80.5,1,1,0,0,0,81.2,80.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.img_10_1, new cjs.Rectangle(0,0,162.4,161), null);


(lib.closeBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Hit_Area
	this.hit_area_internal = new lib.hit_area_internal();
	this.hit_area_internal.name = "hit_area_internal";
	this.hit_area_internal.setTransform(-1.2,-3);
	this.hit_area_internal.alpha = 0.0391;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("AldFeIAAq7IA9AAIAAJ6IIjAAIAAp6IBbAAIAAK7g");
	this.shape.setTransform(0.3,0.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.hit_area_internal}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.closeBtn, new cjs.Rectangle(-34.7,-34.7,70,70), null);


(lib.btn_voice = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMEmQgPgBgOgJIi1h9IiXAAQgRAAgLgLQgMgMAAgRIAAjtQAAgRAMgMQALgLARAAICXAAIC1h9QAOgJAPgBQAQgBAOAIQAgAQAAAkIAAHVQAAAkggAQQgNAHgPAAIgCAAgAEJDDIgBgBQgJgJgCgOQgBgPAJgLQAagiAOgoQAPgqAAgsQgBgsgOgpQgOgogaghQgIgLABgPQABgOAKgJIAAgBQAMgLARABQAQABALANQAhArASAzQASA1AAA5QABA4gTA2QgSA0giAsQgKANgRABIgCAAQgPAAgLgKgACdBXIgBAAQgJgJgBgMQgCgNAGgLQAQgbAAgdQAAgfgPgZQgHgLACgNQABgMAJgKIABAAQANgMASACQASACAJAQQAaAsAAAxQAAAzgaAsQgJAPgSADIgFABQgPAAgLgMg");
	this.shape.setTransform(0.2,0.2,0.95,0.95,0,0,0,0.2,0.2);

	this.instance = new lib.Blue();
	this.instance.setTransform(0.25,0.2,0.3034,0.3034,0,0,0,205.8,205.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{regX:205.8,regY:205.3,scaleX:0.3034,scaleY:0.3034,x:0.25,y:0.2}},{t:this.shape,p:{regX:0.2,regY:0.2,scaleX:0.95,scaleY:0.95,x:0.2}}]}).to({state:[{t:this.instance,p:{regX:201.7,regY:201.2,scaleX:0.2378,scaleY:0.2378,x:0.2,y:0.15}},{t:this.shape,p:{regX:0.8,regY:1.7,scaleX:0.7453,scaleY:0.7453,x:0.15}}]},1).to({state:[{t:this.instance,p:{regX:205.8,regY:205.3,scaleX:0.3034,scaleY:0.3034,x:0.25,y:0.2}},{t:this.shape,p:{regX:0.2,regY:0.2,scaleX:0.95,scaleY:0.95,x:0.2}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.2,-62.1,124.7,124.4);


(lib.btn_4_10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol11_1();
	this.instance.setTransform(36.5,61,1,1,0,0,0,36.5,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_4_10, new cjs.Rectangle(-1.5,-1.5,76,125), null);


(lib.btn_4_9 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol10();
	this.instance.setTransform(36.5,61,1,1,0,0,0,36.5,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_4_9, new cjs.Rectangle(-1.5,-1.5,76,125), null);


(lib.btn_4_8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol9();
	this.instance.setTransform(36.5,61,1,1,0,0,0,36.5,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_4_8, new cjs.Rectangle(-1.5,-1.5,76,125), null);


(lib.btn_4_7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol8();
	this.instance.setTransform(36.5,61,1,1,0,0,0,36.5,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_4_7, new cjs.Rectangle(-1.5,-1.5,76,125), null);


(lib.btn_4_6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol7();
	this.instance.setTransform(36.5,61,1,1,0,0,0,36.5,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_4_6, new cjs.Rectangle(-1.5,-1.5,76,125), null);


(lib.btn_4_5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol6();
	this.instance.setTransform(36.5,61,1,1,0,0,0,36.5,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_4_5, new cjs.Rectangle(-1.5,-1.5,76,125), null);


(lib.btn_4_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol5();
	this.instance.setTransform(36.5,61,1,1,0,0,0,36.5,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_4_4, new cjs.Rectangle(-1.5,-1.5,76,125), null);


(lib.btn_4_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol4();
	this.instance.setTransform(36.5,61,1,1,0,0,0,36.5,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_4_3, new cjs.Rectangle(-1.5,-1.5,76,125), null);


(lib.btn_4_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.setTransform(36.5,61,1,1,0,0,0,36.5,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_4_2, new cjs.Rectangle(-1.5,-1.5,76,125), null);


(lib.btn_4_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(36.5,61,1,1,0,0,0,36.5,61);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_4_1, new cjs.Rectangle(-1.5,-1.5,76,125), null);


(lib.btn_2_2_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol18();
	this.instance.setTransform(140.6,33.05,1.3201,1.1086,0,0,0,106.5,29.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_2_2_4, new cjs.Rectangle(-2,-1.6,278.6,68.19999999999999), null);


(lib.btn_2_2_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol17();
	this.instance.setTransform(140.6,33.05,1.3201,1.1086,0,0,0,106.5,29.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_2_2_3, new cjs.Rectangle(-2,-1.6,278.6,68.19999999999999), null);


(lib.btn_2_2_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol16();
	this.instance.setTransform(140.6,33.25,1.3201,1.1086,0,0,0,106.5,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_2_2_2, new cjs.Rectangle(-2,-1.6,278.6,68.19999999999999), null);


(lib.btn_2_2_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol15();
	this.instance.setTransform(140.6,33.05,1.3201,1.1086,0,0,0,106.5,29.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_2_2_1, new cjs.Rectangle(-2,-1.6,278.6,68.19999999999999), null);


(lib.btn_2_1_4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol14();
	this.instance.setTransform(127.35,33.05,1.1825,1.1086,0,0,0,107.7,29.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_2_1_4, new cjs.Rectangle(-1.7,-1.6,249.5,68.19999999999999), null);


(lib.btn_2_1_3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol13();
	this.instance.setTransform(127.35,33.25,1.1825,1.1086,0,0,0,107.7,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_2_1_3, new cjs.Rectangle(-1.7,-1.6,249.5,68.19999999999999), null);


(lib.btn_2_1_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol12();
	this.instance.setTransform(127.35,33.15,1.1825,1.1086,0,0,0,107.7,29.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_2_1_2, new cjs.Rectangle(-1.7,-1.6,249.5,68.19999999999999), null);


(lib.btn_2_1_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol11();
	this.instance.setTransform(104.15,33.25,0.9607,1.1086,0,0,0,108.4,30);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn_2_1_1, new cjs.Rectangle(-1.4,-1.6,248.8,68.19999999999999), null);


(lib.Od_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Nud
	this.instance = new lib.Nud("single",0);
	this.instance.setTransform(77.4,68.75,1,1,0,0,0,77.4,68.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(11).to({startPosition:0},0).to({_off:true},1).wait(20));

	// Od_2
	this.instance_1 = new lib.CachedBmp_11();
	this.instance_1.setTransform(9.95,11.1,0.4578,0.4578);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(19).to({_off:true},1).wait(20));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,153.3,145.7);


(lib.MC_Od_2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// MC_Od_2
	this.instance = new lib.Od_2("synched",0);
	this.instance.setTransform(1,1,1,1,0,0,0,81.5,78.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20).to({startPosition:10},0).to({regY:78.6,scaleX:1.0922,scaleY:0.9183,y:6.65,startPosition:12},4).to({regY:78.5,scaleX:1,scaleY:1,y:1,startPosition:0},4).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.1,-66.4,156.5,134.8);


(lib.Od_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Nud
	this.instance = new lib.Nud_1("single",0);
	this.instance.setTransform(99.9,86.5,1,1,0,0,0,99.9,86.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(10).to({startPosition:1},0).wait(2).to({startPosition:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(14));

	// Od_1
	this.instance_1 = new lib.CachedBmp_10();
	this.instance_1.setTransform(9.4,9.55,0.473,0.473);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(25).to({_off:true},1).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,205.7,193.6);


(lib.MC_Od_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Od_1
	this.instance = new lib.Od_1("synched",0);
	this.instance.setTransform(1,1,1,1,0,0,0,107.5,101.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(6).to({startPosition:0},0).to({regY:101.6,scaleX:1.0571,scaleY:0.9369,x:1.05,y:6.95,startPosition:5},4).to({regY:101.5,scaleX:1,scaleY:1,x:1,y:1,startPosition:0},4).wait(26));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-102.6,-90.9,207.5,184.10000000000002);


(lib.help_mn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._06help_mn();
	this.instance.setTransform(-757,-397);

	this.closeBtn = new lib.closeBtn();
	this.closeBtn.name = "closeBtn";
	this.closeBtn.setTransform(640.9,-301.6,1.3928,1.3928);
	this.closeBtn.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.closeBtn},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.help_mn, new cjs.Rectangle(-757,-397,1513,794), null);


(lib.help_kz = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib._06help_kz();
	this.instance.setTransform(-757,-397);

	this.instance_1 = new lib.closeBtn();
	this.instance_1.setTransform(639.55,-300.45,1.4814,1.3295,0,0,0,-0.1,0.1);
	this.instance_1.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.help_kz, new cjs.Rectangle(-757,-397,1513,794), null);


(lib.help_popup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {mn:0,kz:1,tuva:2};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Close
	this.closeBtn = new lib.closeBtn();
	this.closeBtn.name = "closeBtn";
	this.closeBtn.setTransform(653.8,-312.7,1.3295,1.3295,0,0,0,0,-0.1);
	this.closeBtn.alpha = 0.4297;

	this.timeline.addTween(cjs.Tween.get(this.closeBtn).wait(3));

	// Layer_1
	this.instance = new lib.help_mn();
	this.instance.setTransform(11.35,-11.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.004)").s().p("Eh3yA8RMAAAh4hMDvmAAAMAAAB4hg");
	this.shape.setTransform(1.1,0);

	this.instance_1 = new lib.help_kz();
	this.instance_1.setTransform(10.25,-11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.004)").s().p("Eh3yA8RMAAAh4hMDvlAAAMAAAB4hg");

	this.instance_2 = new lib._05help_tv();
	this.instance_2.setTransform(-746,-408);

	this.instance_3 = new lib.help_tv();
	this.instance_3.setTransform(10.25,-11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance,p:{x:11.35}}]}).to({state:[{t:this.shape_1},{t:this.instance,p:{x:10.25}},{t:this.instance_1}]},1).to({state:[{t:this.shape_1},{t:this.instance,p:{x:10.25}},{t:this.instance_1},{t:this.instance_3},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-766.7,-408.3,1534.6,794.3);


// stage content:
(lib.lesson_06 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
	// timeline functions:
	this.frame_0 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		// ============================================
		// LESSON CONFIG
		// ============================================
		var LESSON_ID = "Lesson06";
		var LESSON_NAME = "Lesson 06 - Тоглоомын хот";
		var STORAGE_KEY = LESSON_ID + "_gameState";
		var SOUND_PATH = "./sounds/" + LESSON_ID + "_";
		
		// Reset state if needed
		sessionStorage.removeItem(STORAGE_KEY);
		
		if (stage) stage.enableMouseOver(20);
		
		function loadState() {
			try {
				var saved = sessionStorage.getItem(STORAGE_KEY);
				if (saved) {
					return JSON.parse(saved);
				}
			} catch(e) {}
			return null;
		}
		
		function saveState() {
			try {
				exportRoot.gameState.timestamp = Date.now();
				sessionStorage.setItem(STORAGE_KEY, JSON.stringify(exportRoot.gameState));
			} catch(e) {}
		}
		
		var savedState = loadState();
		
		if (!exportRoot.gameState) {
			if (savedState) {
				exportRoot.gameState = savedState;
			} else {
				exportRoot.gameState = {
					timestamp: Date.now(),
					currentFrame: 0,
					selectedLanguage: "mn",
					accessibilityMode: false,
					exercise1Complete: false,
					exercise1Matches: [],
					exercise2Complete: false,
					exercise2Matches: [],
					exercise3Complete: false,
					exercise3Values: {},
					exercise4Complete: false,
					exercise4Values: {},
					exercise5Complete: false,
					exercise5Values: {},
					exercise6Complete: false,
					exercise7Complete: false,
					exercise7Values: {},
					exercise8Complete: false,
					exercise8Values: {}
				};
			}
		}
		
		exportRoot.saveState = saveState;
		
		if (!exportRoot.audioPool) exportRoot.audioPool = {};
		exportRoot.loadAudio = function(key, src) {
			if (!this.audioPool[key]) {
				this.audioPool[key] = new Audio(src);
				this.audioPool[key].preload = "auto";
			}
			return this.audioPool[key];
		};
		
		exportRoot.playAudio = function(key) {
			var audio = this.audioPool[key];
			if (audio) {
				audio.pause();
				audio.currentTime = 0;
				audio.play().catch(function() {});
			}
		};
		
		exportRoot.stopAudio = function(key) {
			var audio = this.audioPool[key];
			if (audio) {
				audio.pause();
				audio.currentTime = 0;
			}
		};
		
		if (!exportRoot.videoCache) exportRoot.videoCache = {};
		exportRoot.preloadVideo = function(path) {
			if (this.videoCache[path]) return;
			var vid = document.createElement("video");
			vid.preload = "metadata";
			vid.src = path;
			vid.style.display = "none";
			document.body.appendChild(vid);
			this.videoCache[path] = vid;
		};
		
		var lang = exportRoot.gameState.selectedLanguage;
		
		// Audio preload
		exportRoot.loadAudio("title_mn", SOUND_PATH + "title_mn.mp3");
		exportRoot.loadAudio("title_kz", SOUND_PATH + "title_kz.mp3");
		exportRoot.loadAudio("title_tuva", SOUND_PATH + "title_tuva.mp3");
		exportRoot.loadAudio("title_sign", SOUND_PATH + "title_sign.mp3");
		exportRoot.loadAudio("click", "./sounds/click.mp3");
		exportRoot.loadAudio("start", "./sounds/start.mp3");
		
		var homeText = {
			mn: {
				title: "ТОГЛООМЫН ХОТ",
				subtitle: "Энгийн бутархайг дүрслэх, унших, бичих, жиших",
				subject: "МАТЕМАТИК",
				grade: "3 ДУГААР АНГИ",
				start: "ЭХЛЭХ"
			},
			kz: {
				title: "ӨЛШЕУ ҚАЛАСЫ",
				subtitle: "Масса мен көлемді өлшеу",
				subject: "МАТЕМАТИКА",
				grade: "3 СЫНЫП",
				start: "БАСТАУ"
			},
			tuva: {
				title: "ХЕМЧЭЭР ХООРАЙ",
				subtitle: "Масс болгаш эзлэхүүнү хемчээри",
				subject: "МАТЕМАТИКА",
				grade: "3 КЛАСС",
				start: "ЭГЕЛЭЭРИ"
			},
			sign: {
				title: "ТОГЛООМЫН ХОТ",
				subtitle: "Энгийн бутархайг дүрслэх, унших, бичих, жиших",
				subject: "МАТЕМАТИК",
				grade: "3 ДУГААР АНГИ",
				start: "ЭХЛЭХ"
			}
		};
		
		function updateHomeText() {
			var texts = homeText[exportRoot.gameState.selectedLanguage];
			if (exportRoot.main_txt_title) exportRoot.main_txt_title.text = texts.title;
			if (exportRoot.txt_subtitle) exportRoot.txt_subtitle.text = texts.subtitle;
			if (exportRoot.txt_subject) exportRoot.txt_subject.text = texts.subject;
			if (exportRoot.txt_grade) exportRoot.txt_grade.text = texts.grade;
			if (exportRoot.txt_start) exportRoot.txt_start.text = texts.start;
		}
		
		function updateCheckmark() {
			if (!exportRoot.checkmark) return;
			var targetBtn = exportRoot["btn_" + exportRoot.gameState.selectedLanguage];
			if (targetBtn) {
				createjs.Tween.removeTweens(exportRoot.checkmark);
				createjs.Tween.get(exportRoot.checkmark).to(
					{x: targetBtn.x + 10, y: targetBtn.y - 20},
					200,
					createjs.Ease.quadOut
				);
			}
		}
		
		function selectLanguage(l) {
			exportRoot.playAudio("click");
			exportRoot.stopAudio("title_" + exportRoot.gameState.selectedLanguage);
			exportRoot.gameState.selectedLanguage = l;
			exportRoot.loadAudio("title_" + l, SOUND_PATH + "title_" + l + ".mp3");
			updateHomeText();
			updateCheckmark();
			saveState();
		}
		
		["mn", "kz", "tuva", "sign"].forEach(function(l) {
			if (exportRoot["btn_" + l]) exportRoot["btn_" + l].mouseEnabled = false;
			if (exportRoot["txt_" + l]) exportRoot["txt_" + l].mouseEnabled = false;
			if (exportRoot["hitarea_" + l]) {
				var ha = exportRoot["hitarea_" + l];
				ha.alpha = 0.01;
				ha.cursor = "pointer";
				ha.removeAllEventListeners("click");
				ha.on("click", function() { selectLanguage(l); });
			}
		});
		
		if (exportRoot.btn_voice) {
			exportRoot.btn_voice.cursor = "pointer";
			exportRoot.btn_voice.scaleX = 1;
			exportRoot.btn_voice.scaleY = 1;
			exportRoot.btn_voice.removeAllEventListeners();
			
			exportRoot.btn_voice.on("mousedown", function() {
				createjs.Tween.removeTweens(this);
				createjs.Tween.get(this).to({scaleX: 0.9, scaleY: 0.9}, 100);
			});
			
			exportRoot.btn_voice.on("pressup", function() {
				createjs.Tween.removeTweens(this);
				createjs.Tween.get(this).to({scaleX: 1, scaleY: 1}, 100);
			});
			
			exportRoot.btn_voice.on("mouseout", function() {
				createjs.Tween.removeTweens(this);
				createjs.Tween.get(this).to({scaleX: 1, scaleY: 1}, 100);
			});
			
			exportRoot.btn_voice.on("click", function() {
				exportRoot.playAudio("title_" + exportRoot.gameState.selectedLanguage);
			});
		}
		
		if (exportRoot.btn_start) {
			if (exportRoot.txt_start) exportRoot.txt_start.mouseEnabled = false;
			exportRoot.btn_start.cursor = "pointer";
			exportRoot.btn_start.mouseEnabled = true;
			exportRoot.btn_start.mouseChildren = false;
			exportRoot.btn_start.removeAllEventListeners();
			
			exportRoot.btn_start.on("mouseover", function() {
				createjs.Tween.removeTweens(exportRoot.btn_start);
				createjs.Tween.get(exportRoot.btn_start).to({scaleX: 0.95, scaleY: 0.95}, 150);
				if (exportRoot.txt_start) {
					createjs.Tween.get(exportRoot.txt_start).to({scaleX: 0.95, scaleY: 0.95}, 150);
				}
			});
			
			exportRoot.btn_start.on("mouseout", function() {
				createjs.Tween.removeTweens(exportRoot.btn_start);
				createjs.Tween.get(exportRoot.btn_start).to({scaleX: 1, scaleY: 1}, 150);
				if (exportRoot.txt_start) {
					createjs.Tween.get(exportRoot.txt_start).to({scaleX: 1, scaleY: 1}, 150);
				}
			});
			
			exportRoot.btn_start.on("click", function() {
				exportRoot.playAudio("start");
				exportRoot.stopAudio("title_" + exportRoot.gameState.selectedLanguage);
				exportRoot.gameState.currentFrame = 1;
				saveState();
				createjs.Tween.get(exportRoot).to({alpha: 0}, 80).call(function() {
					exportRoot.alpha = 1;
					exportRoot.gotoAndStop(1);
				});
			});
		}
		
		exportRoot.cleanupAllExercises = function() {
			var inputNames = [
				"ex1_input_1", "ex1_input_2", "ex1_input_3", "ex1_input_4",
				"ex1_input_5", "ex1_input_6", "ex1_input_7", "ex1_input_8",
				"ex2_input_1", "ex2_input_2", "ex2_input_3", "ex2_input_4",
				"ex2_input_5", "ex2_input_6", "ex2_input_7", "ex2_input_8",
				"ex3_input_1", "ex3_input_2", "ex3_input_3", "ex3_input_4",
				"ex7_input_1", "ex7_input_2", "ex7_input_3", "ex7_input_4",
				"ex8_input_1a", "ex8_input_1b", "ex8_input_2a", "ex8_input_2b",
				"ex8_input_3a", "ex8_input_3b", "ex8_input_4a", "ex8_input_4b",
				"ex10_input_1a", "ex10_input_1b", "ex10_input_2a", "ex10_input_2b",
				"ex10_input_3a", "ex10_input_3b", "ex10_input_4a", "ex10_input_4b",
				"ex11_input_middle", "ex11_input_final"
			];
			
			inputNames.forEach(function(name) {
				var el = document.getElementById("html_" + name);
				if (el && el.parentNode) el.parentNode.removeChild(el);
			});
			
			function cleanupTextObject(textObj) {
				if (!textObj) return;
				if (textObj._strokeClone && textObj._strokeClone.parent) {
					textObj._strokeClone.parent.removeChild(textObj._strokeClone);
					if (textObj._strokeClone.uncache) {
						textObj._strokeClone.uncache();
					}
					textObj._strokeClone = null;
				}
				if (textObj._isStyled) {
					textObj._isStyled = false;
				}
				if (textObj.uncache) {
					textObj.uncache();
				}
				if (textObj.outline) {
					textObj.outline = 0;
				}
				if (textObj.shadow) {
					textObj.shadow = null;
				}
			}
			
			var textFields = ["main_txt_title", "main_txt_instruction"];
			textFields.forEach(function(name) {
				if (exportRoot[name]) {
					cleanupTextObject(exportRoot[name]);
				}
			});
			
			function recursiveCleanup(container) {
				if (!container || !container.children) return;
				for (var i = container.children.length - 1; i >= 0; i--) {
					var child = container.children[i];
					if (child instanceof createjs.Text) {
						cleanupTextObject(child);
					}
					if (child.children && child.children.length > 0) {
						recursiveCleanup(child);
					}
				}
			}
			
			recursiveCleanup(exportRoot);
		};
		
		updateHomeText();
		updateCheckmark();
		
		window.addEventListener("beforeunload", function() {
			saveState();
		});
		
		console.log("🚀 " + LESSON_NAME + " initialized!");
	}
	this.frame_1 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		if (!exportRoot.gameState) {
			exportRoot.gameState = {};
		}
		if (!exportRoot.gameState.selectedLanguage) {
			exportRoot.gameState.selectedLanguage = "mn";
		}
		if (!exportRoot.gameState.videosWatched) {
			exportRoot.gameState.videosWatched = [];
		}
		if (!exportRoot.saveState) {
			exportRoot.saveState = function() {};
		}
		
		var videoContainer = null;
		var videoElement = null;
		var controlsBar = null;
		var playPauseBtn = null;
		var progressFill = null;
		var volumeSlider = null;
		var downloadBtn = null;
		var fullscreenBtn = null;
		var skipButton = null;
		var timeDisplay = null;
		var loadingIndicator = null;
		var resizeHandler = null;
		var clickOverlay = null;
		
		function cleanup() {
			if (videoElement) {
				videoElement.pause();
				videoElement.removeAttribute("src");
				videoElement.load();
				videoElement = null;
			}
			if (videoContainer && videoContainer.parentNode) {
				videoContainer.parentNode.removeChild(videoContainer);
				videoContainer = null;
			}
			if (resizeHandler) {
				window.removeEventListener("resize", resizeHandler);
				resizeHandler = null;
			}
			document.removeEventListener("fullscreenchange", fullscreenChangeHandler);
			playPauseBtn = null;
			progressFill = null;
			volumeSlider = null;
			downloadBtn = null;
			fullscreenBtn = null;
			skipButton = null;
			timeDisplay = null;
			loadingIndicator = null;
			controlsBar = null;
			clickOverlay = null;
		}
		
		function fullscreenChangeHandler() {
			if (!fullscreenBtn) return;
			if (document.fullscreenElement) {
				fullscreenBtn.innerHTML = "✖";
			} else {
				fullscreenBtn.innerHTML = "⛶";
			}
		}
		
		function createVideoPlayer() {
			var skipLabels = {
				mn: "АЛГАСАХ ▶",
				kz: "АТТАП ӨТУ ▶",
				tuva: "ЭРТЕР ▶",
				sign: "АЛГАСАХ ▶"
			};
		
			var existingContainer = document.getElementById("video-container-main");
			if (existingContainer && existingContainer.parentNode) {
				existingContainer.parentNode.removeChild(existingContainer);
			}
		
			var canvas = document.getElementById("canvas");
			if (!canvas) {
				console.log("Canvas not found");
				return;
			}
		
			var currentLang = exportRoot.gameState.selectedLanguage || "mn";
			var rect = canvas.getBoundingClientRect();
			var videoWatched = exportRoot.gameState.videosWatched.indexOf("mainStory") !== -1;
		
			// =====================================================
			// CONTAINER
			// =====================================================
			videoContainer = document.createElement("div");
			videoContainer.id = "video-container-main";
			videoContainer.style.position = "absolute";
			videoContainer.style.left = rect.left + "px";
			videoContainer.style.top = rect.top + "px";
			videoContainer.style.width = rect.width + "px";
			videoContainer.style.height = rect.height + "px";
			videoContainer.style.backgroundColor = "#1a1a2e";
			videoContainer.style.zIndex = "1000";
			videoContainer.style.overflow = "hidden";
		
			// =====================================================
			// LOADING SPINNER
			// =====================================================
			loadingIndicator = document.createElement("div");
			loadingIndicator.style.position = "absolute";
			loadingIndicator.style.top = "50%";
			loadingIndicator.style.left = "50%";
			loadingIndicator.style.transform = "translate(-50%, -50%)";
			loadingIndicator.style.textAlign = "center";
			loadingIndicator.style.zIndex = "1003";
		
			var spinner = document.createElement("div");
			spinner.style.width = "60px";
			spinner.style.height = "60px";
			spinner.style.border = "6px solid rgba(255,255,255,0.2)";
			spinner.style.borderTop = "6px solid #FFD700"; // ← FIXED COLOR
			spinner.style.borderRadius = "50%";
			spinner.style.margin = "0 auto 20px";
			spinner.style.animation = "spin 1s linear infinite";
		
			var loadingText = document.createElement("div");
			loadingText.textContent = currentLang === "mn" ? "Ачаалж байна..." : "Жүктелуде...";
			loadingText.style.color = "#fff";
			loadingText.style.fontSize = "18px";
			loadingText.style.fontFamily = "'Rubik', sans-serif";
			loadingText.style.fontWeight = "bold";
		
			loadingIndicator.appendChild(spinner);
			loadingIndicator.appendChild(loadingText);
		
			if (!document.getElementById("spinner-style")) {
				var style = document.createElement("style");
				style.id = "spinner-style";
				style.textContent = "@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }";
				document.head.appendChild(style);
			}
		
			// =====================================================
			// VIDEO ELEMENT
			// =====================================================
			videoElement = document.createElement("video");
			videoElement.src = "./videos/Lesson6_main_story.mp4";
			videoElement.style.width = "100%";
			videoElement.style.height = "100%";
			videoElement.style.objectFit = "contain";
			videoElement.style.display = "none";
			videoElement.preload = "auto";
			videoElement.playsInline = true;
			videoElement.muted = false;
			videoElement.autoplay = true;
			videoElement.setAttribute("webkit-playsinline", "true");
		
			videoElement.addEventListener("error", function() {
				console.log("VIDEO ERROR:", videoElement.error);
			});
		
			// =====================================================
			// CLICK OVERLAY
			// =====================================================
			clickOverlay = document.createElement("div");
			clickOverlay.style.position = "absolute";
			clickOverlay.style.top = "0";
			clickOverlay.style.left = "0";
			clickOverlay.style.width = "100%";
			clickOverlay.style.height = "calc(100% - 70px)";
			clickOverlay.style.zIndex = "1001";
			clickOverlay.style.cursor = "pointer";
			clickOverlay.style.display = "none";
		
			var flashIcon = document.createElement("div");
			flashIcon.style.position = "absolute";
			flashIcon.style.top = "50%";
			flashIcon.style.left = "50%";
			flashIcon.style.transform = "translate(-50%, -50%)";
			flashIcon.style.fontSize = "80px";
			flashIcon.style.color = "rgba(255,255,255,0.85)";
			flashIcon.style.pointerEvents = "none";
			flashIcon.style.opacity = "0";
			flashIcon.style.transition = "opacity 0.15s ease";
			flashIcon.style.textShadow = "0 0 30px rgba(0,0,0,0.6)";
			flashIcon.textContent = "⏸";
			clickOverlay.appendChild(flashIcon);
		
			function showFlash(icon) {
				flashIcon.textContent = icon;
				flashIcon.style.opacity = "1";
				setTimeout(function() {
					flashIcon.style.opacity = "0";
				}, 400);
			}
		
			clickOverlay.addEventListener("click", function() {
				if (!videoElement) return;
				if (videoElement.paused) {
					videoElement.muted = false;
					videoElement.play().catch(function() {});
					if (playPauseBtn) playPauseBtn.innerHTML = "⏸️";
					showFlash("▶");
				} else {
					videoElement.pause();
					if (playPauseBtn) playPauseBtn.innerHTML = "▶️";
					showFlash("⏸");
				}
			});
		
			// =====================================================
			// CONTROLS BAR
			// =====================================================
			controlsBar = document.createElement("div");
			controlsBar.style.position = "absolute";
			controlsBar.style.bottom = "0";
			controlsBar.style.left = "0";
			controlsBar.style.right = "0";
			controlsBar.style.height = "70px";
			controlsBar.style.background = "linear-gradient(to top, rgba(0,0,0,0.9), transparent)";
			controlsBar.style.display = "none";
			controlsBar.style.alignItems = "center";
			controlsBar.style.padding = "0 20px";
			controlsBar.style.gap = "15px";
			controlsBar.style.zIndex = "1002";
		
			// PLAY/PAUSE
			playPauseBtn = document.createElement("button");
			playPauseBtn.innerHTML = "⏸️";
			playPauseBtn.style.fontSize = "24px";
			playPauseBtn.style.background = "none";
			playPauseBtn.style.border = "none";
			playPauseBtn.style.cursor = "pointer";
			playPauseBtn.style.padding = "5px";
			playPauseBtn.style.color = "#fff";
			playPauseBtn.style.zIndex = "1003";
		
			// PROGRESS BAR
			var progressContainer = document.createElement("div");
			progressContainer.style.flex = "1";
			progressContainer.style.height = "6px";
			progressContainer.style.backgroundColor = "rgba(255,255,255,0.3)";
			progressContainer.style.borderRadius = "3px";
			progressContainer.style.cursor = "pointer";
			progressContainer.style.position = "relative";
			progressContainer.style.zIndex = "1003";
		
			progressFill = document.createElement("div");
			progressFill.style.width = "0%";
			progressFill.style.height = "100%";
			progressFill.style.backgroundColor = "#FFD700";
			progressFill.style.borderRadius = "3px";
			progressFill.style.transition = "width 0.1s";
			progressContainer.appendChild(progressFill);
		
			// TIME DISPLAY
			timeDisplay = document.createElement("span");
			timeDisplay.textContent = "0:00 / 0:00";
			timeDisplay.style.color = "#fff";
			timeDisplay.style.fontSize = "14px";
			timeDisplay.style.fontFamily = "'Rubik', sans-serif";
			timeDisplay.style.minWidth = "100px";
			timeDisplay.style.zIndex = "1003";
		
			// VOLUME
			volumeSlider = document.createElement("input");
			volumeSlider.type = "range";
			volumeSlider.min = "0";
			volumeSlider.max = "100";
			volumeSlider.value = "100";
			volumeSlider.style.width = "80px";
			volumeSlider.style.cursor = "pointer";
			volumeSlider.style.zIndex = "1003";
		
			// DOWNLOAD
			downloadBtn = document.createElement("button");
			downloadBtn.innerHTML = "⬇️";
			downloadBtn.style.fontSize = "20px";
			downloadBtn.style.background = "none";
			downloadBtn.style.border = "none";
			downloadBtn.style.cursor = "pointer";
			downloadBtn.style.padding = "5px";
			downloadBtn.style.color = "#fff";
			downloadBtn.style.zIndex = "1003";
		
			// =====================================================
			// FULLSCREEN BUTTON ← NEW
			// =====================================================
			fullscreenBtn = document.createElement("button");
			fullscreenBtn.innerHTML = "⛶";
			fullscreenBtn.style.fontSize = "22px";
			fullscreenBtn.style.background = "none";
			fullscreenBtn.style.border = "none";
			fullscreenBtn.style.cursor = "pointer";
			fullscreenBtn.style.padding = "5px";
			fullscreenBtn.style.color = "#fff";
			fullscreenBtn.style.zIndex = "1003";
		
			// =====================================================
			// SKIP BUTTON
			// =====================================================
			skipButton = document.createElement("button");
			skipButton.innerHTML = skipLabels[currentLang] || skipLabels.mn;
			skipButton.style.position = "absolute";
			skipButton.style.bottom = "90px";
			skipButton.style.right = "20px";
			skipButton.style.padding = "10px 20px";
			skipButton.style.fontSize = "16px";
			skipButton.style.fontFamily = "'Rubik', sans-serif";
			skipButton.style.fontWeight = "bold";
			skipButton.style.backgroundColor = "#FFD700";
			skipButton.style.color = "#1a1a2e";
			skipButton.style.border = "none";
			skipButton.style.borderRadius = "25px";
			skipButton.style.cursor = "pointer";
			skipButton.style.boxShadow = "0 4px 12px rgba(0,0,0,0.5)";
			skipButton.style.zIndex = "1004";
			skipButton.style.display = videoWatched ? "block" : "none";
		
			// =====================================================
			// ASSEMBLE
			// =====================================================
			controlsBar.appendChild(playPauseBtn);
			controlsBar.appendChild(progressContainer);
			controlsBar.appendChild(timeDisplay);
			controlsBar.appendChild(volumeSlider);
			controlsBar.appendChild(downloadBtn);
			controlsBar.appendChild(fullscreenBtn); // ← NEW
		
			videoContainer.appendChild(loadingIndicator);
			videoContainer.appendChild(videoElement);
			videoContainer.appendChild(clickOverlay);
			videoContainer.appendChild(controlsBar);
			videoContainer.appendChild(skipButton);
		
			document.body.appendChild(videoContainer);
		
			// =====================================================
			// VIDEO EVENTS
			// =====================================================
			videoElement.addEventListener("loadeddata", function() {
				if (loadingIndicator) loadingIndicator.style.display = "none";
				videoElement.style.display = "block";
				controlsBar.style.display = "flex";
				clickOverlay.style.display = "block";
				if (!videoWatched) skipButton.style.display = "block";
		
				videoElement.play().then(function() {
					playPauseBtn.innerHTML = "⏸️";
				}).catch(function(err) {
					console.log("Play failed:", err);
					playPauseBtn.innerHTML = "▶️";
				});
			});
		
			videoElement.addEventListener("loadedmetadata", function() {
				if (timeDisplay) {
					timeDisplay.textContent = "0:00 / " + formatTime(videoElement.duration);
				}
			});
		
			videoElement.addEventListener("timeupdate", function() {
				if (progressFill && timeDisplay && videoElement.duration) {
					var percent = (videoElement.currentTime / videoElement.duration) * 100;
					progressFill.style.width = percent + "%";
					timeDisplay.textContent = formatTime(videoElement.currentTime) + " / " + formatTime(videoElement.duration);
				}
			});
		
			videoElement.addEventListener("ended", function() {
				if (playPauseBtn) playPauseBtn.innerHTML = "▶️";
				if (exportRoot.gameState.videosWatched.indexOf("mainStory") === -1) {
					exportRoot.gameState.videosWatched.push("mainStory");
					exportRoot.saveState();
				}
				setTimeout(goToExercise1, 800);
			});
		
			// =====================================================
			// CONTROLS EVENTS
			// =====================================================
			playPauseBtn.addEventListener("click", function(e) {
				e.stopPropagation();
				if (videoElement.paused) {
					videoElement.muted = false;
					videoElement.play();
					playPauseBtn.innerHTML = "⏸️";
				} else {
					videoElement.pause();
					playPauseBtn.innerHTML = "▶️";
				}
			});
		
			progressContainer.addEventListener("click", function(e) {
				e.stopPropagation();
				var r = progressContainer.getBoundingClientRect();
				var pos = (e.clientX - r.left) / r.width;
				videoElement.currentTime = pos * videoElement.duration;
			});
		
			volumeSlider.addEventListener("input", function(e) {
				e.stopPropagation();
				videoElement.volume = this.value / 100;
				if (this.value > 0) videoElement.muted = false;
			});
		
			downloadBtn.addEventListener("click", function(e) {
				e.stopPropagation();
				var a = document.createElement("a");
				a.href = videoElement.src;
				a.download = "Lesson6_main_story.mp4";
				a.click();
			});
		
			// =====================================================
			// FULLSCREEN EVENTS ← NEW
			// =====================================================
			fullscreenBtn.addEventListener("click", function(e) {
				e.stopPropagation();
				if (!document.fullscreenElement) {
					videoContainer.requestFullscreen().catch(function(err) {
						console.log("Fullscreen error:", err);
					});
				} else {
					document.exitFullscreen();
				}
			});
		
			document.addEventListener("fullscreenchange", fullscreenChangeHandler);
		
			skipButton.addEventListener("click", function(e) {
				e.stopPropagation();
				goToExercise1();
			});
		
			// =====================================================
			// RESIZE
			// =====================================================
			resizeHandler = function() {
				if (!videoContainer) return;
				var canvas = document.getElementById("canvas");
				if (!canvas) return;
				var r = canvas.getBoundingClientRect();
				videoContainer.style.left   = r.left   + "px";
				videoContainer.style.top    = r.top    + "px";
				videoContainer.style.width  = r.width  + "px";
				videoContainer.style.height = r.height + "px";
			};
			window.addEventListener("resize", resizeHandler);
		}
		
		function formatTime(seconds) {
			if (isNaN(seconds)) return "0:00";
			var mins = Math.floor(seconds / 60);
			var secs = Math.floor(seconds % 60);
			return mins + ":" + (secs < 10 ? "0" : "") + secs;
		}
		
		function goToExercise1() {
			if (exportRoot.gameState.videosWatched.indexOf("mainStory") === -1) {
				exportRoot.gameState.videosWatched.push("mainStory");
				exportRoot.saveState();
			}
			cleanup();
			exportRoot.gameState.currentFrame = 2;
			exportRoot.saveState();
			exportRoot.gotoAndStop(2);
		}
		
		exportRoot.on("removed", cleanup);
		
		createVideoPlayer();
	}
	this.frame_2 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		// =====================================================
		// CONFIG
		// =====================================================
		var CONFIG = {
		    backFrame: null,
		    nextFrame: 3,
		    autoNextDelay: 1200,
		    soundPaths: {
		        correct: "./sounds/voice_correct.mp3",
		        wrong: "./sounds/voice_wrong.mp3",
		        click: "./sounds/click.mp3"
		    }
		};
		
		// =====================================================
		// GLOBAL STATE
		// =====================================================
		if (!exportRoot.audioPool) {
		    exportRoot.audioPool = {};
		}
		
		// =====================================================
		// AUDIO
		// =====================================================
		function loadSound(type) {
		    if (!CONFIG.soundPaths[type]) return null;
		
		    if (!exportRoot.audioPool[type]) {
		        var audio = new Audio(CONFIG.soundPaths[type]);
		        audio.preload = "auto";
		        exportRoot.audioPool[type] = audio;
		    }
		    return exportRoot.audioPool[type];
		}
		
		function playSound(type) {
		    var base = loadSound(type);
		    if (!base) return;
		
		    try {
		        var a = base.cloneNode();
		        a.play().catch(function () {});
		    } catch (e) {}
		}
		
		loadSound("correct");
		loadSound("wrong");
		loadSound("click");
		
		// =====================================================
		// REFERENCES
		// =====================================================
		var dropEqual = exportRoot.drop_equal;
		var dropUnequal = exportRoot.drop_unequal;
		
		// ЗӨВ mapping:
		// equal   = 1, 3, 5, 7
		// unequal = 2, 4, 6, 8
		var items = [
		    { mc: exportRoot.btn_prev_1_1, correctZone: "equal"   },
		    { mc: exportRoot.btn_prev_1_2, correctZone: "unequal" },
		    { mc: exportRoot.btn_prev_1_3, correctZone: "equal"   },
		    { mc: exportRoot.btn_prev_1_4, correctZone: "unequal" },
		    { mc: exportRoot.btn_prev_1_5, correctZone: "equal"   },
		    { mc: exportRoot.btn_prev_1_6, correctZone: "unequal" },
		    { mc: exportRoot.btn_prev_1_7, correctZone: "equal"   },
		    { mc: exportRoot.btn_prev_1_8, correctZone: "unequal" }
		];
		
		var placedInEqual = [];
		var placedInUnequal = [];
		var solvedCount = 0;
		var totalCount = 0;
		
		for (var i = 0; i < items.length; i++) {
		    if (items[i].mc) {
		        totalCount++;
		    } else {
		        console.log("Missing item:", i + 1);
		    }
		}
		
		if (!dropEqual) console.log("drop_equal not found");
		if (!dropUnequal) console.log("drop_unequal not found");
		
		// =====================================================
		// HELPERS
		// =====================================================
		function isPointInsideMovieClip(globalX, globalY, target) {
		    if (!target) return false;
		    var pt = target.globalToLocal(globalX, globalY);
		    return target.hitTest(pt.x, pt.y);
		}
		
		function detectDroppedZoneByPointer(stageX, stageY) {
		    if (isPointInsideMovieClip(stageX, stageY, dropEqual)) {
		        return "equal";
		    }
		    if (isPointInsideMovieClip(stageX, stageY, dropUnequal)) {
		        return "unequal";
		    }
		    return null;
		}
		
		function getSlotsForZone(zoneName) {
		    if (zoneName === "equal") {
		        return [
		            exportRoot.equal_slot_1,
		            exportRoot.equal_slot_2,
		            exportRoot.equal_slot_3,
		            exportRoot.equal_slot_4
		        ];
		    }
		
		    return [
		        exportRoot.unequal_slot_1,
		        exportRoot.unequal_slot_2,
		        exportRoot.unequal_slot_3,
		        exportRoot.unequal_slot_4
		    ];
		}
		
		function snapItemToSlot(item, slot) {
		    if (!item || !slot) return;
		
		    // slot-ийн registration point-ийг GLOBAL дээр авна
		    var g = slot.localToGlobal(0, 0);
		
		    // item-ийн parent coordinate руу хөрвүүлнэ
		    var target = item.parent.globalToLocal(g.x, g.y);
		
		    createjs.Tween.removeTweens(item);
		    createjs.Tween.get(item).to({
		        x: target.x,
		        y: target.y,
		        alpha: 0.82
		    }, 180);
		}
		
		function layoutZoneItems(zoneName) {
		    var list = zoneName === "equal" ? placedInEqual : placedInUnequal;
		    var slots = getSlotsForZone(zoneName);
		
		    if (!list.length || !slots.length) return;
		
		    for (var i = 0; i < list.length; i++) {
		        var item = list[i];
		        var slot = slots[i];
		
		        if (!item || !slot) continue;
		
		        snapItemToSlot(item, slot);
		    }
		}
		
		function shakeWrong(item, callback) {
		    var ox = item.x;
		
		    createjs.Tween.removeTweens(item);
		    createjs.Tween.get(item)
		        .to({ x: ox - 8 }, 50)
		        .to({ x: ox + 8 }, 50)
		        .to({ x: ox - 5 }, 50)
		        .to({ x: ox + 5 }, 50)
		        .to({ x: ox }, 50)
		        .call(function () {
		            if (callback) callback();
		        });
		}
		
		function returnToStart(item) {
		    createjs.Tween.removeTweens(item);
		    createjs.Tween.get(item).to({
		        x: item.startX,
		        y: item.startY,
		        scaleX: item.startScaleX,
		        scaleY: item.startScaleY,
		        rotation: item.startRotation,
		        alpha: 1
		    }, 200);
		}
		
		function lockItem(item) {
		    item.isLocked = true;
		    item.mouseEnabled = false;
		    item.mouseChildren = false;
		    item.cursor = "default";
		    item.alpha = 0.82;
		}
		
		function addItemToZone(item, zoneName) {
		    var list = zoneName === "equal" ? placedInEqual : placedInUnequal;
		
		    if (list.indexOf(item) === -1) {
		        list.push(item);
		    }
		
		    layoutZoneItems(zoneName);
		}
		
		function finishExercise() {
		    exportRoot.saveState();
		    setTimeout(function () {
		        if (CONFIG.nextFrame != null) {
		            exportRoot.gotoAndStop(CONFIG.nextFrame);
		        }
		    }, CONFIG.autoNextDelay);
		}
		
		// =====================================================
		// DRAG LOGIC
		// =====================================================
		items.forEach(function (entry) {
		    var item = entry.mc;
		    if (!item) return;
		
		    item.mouseChildren = false;
		    item.cursor = "pointer";
		
		    item.startX = item.x;
		    item.startY = item.y;
		    item.startScaleX = item.scaleX;
		    item.startScaleY = item.scaleY;
		    item.startRotation = item.rotation || 0;
		    item.isLocked = false;
		
		    item.on("mousedown", function (evt) {
		        if (this.isLocked) return;
		
		        playSound("click");
		
		        this.parent.addChild(this);
		
		        var pt = this.parent.globalToLocal(evt.stageX, evt.stageY);
		        this.dragOffsetX = this.x - pt.x;
		        this.dragOffsetY = this.y - pt.y;
		
		        createjs.Tween.removeTweens(this);
		        this.alpha = 1;
		    });
		
		    item.on("pressmove", function (evt) {
		        if (this.isLocked) return;
		
		        var pt = this.parent.globalToLocal(evt.stageX, evt.stageY);
		        this.x = pt.x + this.dragOffsetX;
		        this.y = pt.y + this.dragOffsetY;
		    });
		
		    item.on("pressup", function (evt) {
		        if (this.isLocked) return;
		
		        var droppedZone = detectDroppedZoneByPointer(evt.stageX, evt.stageY);
		
		        if (!droppedZone) {
		            returnToStart(this);
		            return;
		        }
		
		        if (droppedZone === entry.correctZone) {
		            lockItem(this);
		            addItemToZone(this, droppedZone);
		            playSound("correct");
		
		            solvedCount++;
		
		            if (solvedCount >= totalCount) {
		                finishExercise();
		            }
		        } else {
		            playSound("wrong");
		
		            var self = this;
		            shakeWrong(this, function () {
		                returnToStart(self);
		            });
		        }
		    });
		});
		
		// =====================================================
		// OPTIONAL NAV BUTTONS
		// =====================================================
		if (exportRoot.btn_next) {
		    exportRoot.btn_next.visible = false;
		    exportRoot.btn_next.mouseEnabled = false;
		}
		
		if (exportRoot.btn_back) {
		    exportRoot.btn_back.visible = CONFIG.backFrame != null;
		    exportRoot.btn_back.mouseEnabled = CONFIG.backFrame != null;
		
		    if (CONFIG.backFrame != null) {
		        exportRoot.btn_back.cursor = "pointer";
		        exportRoot.btn_back.on("click", function () {
		            playSound("click");
		            exportRoot.gotoAndStop(CONFIG.backFrame);
		        });
		    }
		}
	}
	this.frame_3 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		if (!exportRoot.gameState) {
			exportRoot.gameState = {};
		}
		if (!exportRoot.gameState.selectedLanguage) {
			exportRoot.gameState.selectedLanguage = "mn";
		}
		if (!exportRoot.gameState.videosWatched) {
			exportRoot.gameState.videosWatched = [];
		}
		if (!exportRoot.saveState) {
			exportRoot.saveState = function() {};
		}
		
		var videoContainer = null;
		var videoElement = null;
		var controlsBar = null;
		var playPauseBtn = null;
		var progressFill = null;
		var volumeSlider = null;
		var downloadBtn = null;
		var fullscreenBtn = null;
		var skipButton = null;
		var timeDisplay = null;
		var loadingIndicator = null;
		var resizeHandler = null;
		var clickOverlay = null;
		
		function cleanup() {
			if (videoElement) {
				videoElement.pause();
				videoElement.removeAttribute("src");
				videoElement.load();
				videoElement = null;
			}
			if (videoContainer && videoContainer.parentNode) {
				videoContainer.parentNode.removeChild(videoContainer);
				videoContainer = null;
			}
			if (resizeHandler) {
				window.removeEventListener("resize", resizeHandler);
				resizeHandler = null;
			}
			document.removeEventListener("fullscreenchange", fullscreenChangeHandler);
			playPauseBtn = null;
			progressFill = null;
			volumeSlider = null;
			downloadBtn = null;
			fullscreenBtn = null;
			skipButton = null;
			timeDisplay = null;
			loadingIndicator = null;
			controlsBar = null;
			clickOverlay = null;
		}
		
		function fullscreenChangeHandler() {
			if (!fullscreenBtn) return;
			if (document.fullscreenElement) {
				fullscreenBtn.innerHTML = "✖";
			} else {
				fullscreenBtn.innerHTML = "⛶";
			}
		}
		
		function createVideoPlayer() {
			var skipLabels = {
				mn: "АЛГАСАХ ▶",
				kz: "АТТАП ӨТУ ▶",
				tuva: "ЭРТЕР ▶",
				sign: "АЛГАСАХ ▶"
			};
		
			var existingContainer = document.getElementById("video-container-main");
			if (existingContainer && existingContainer.parentNode) {
				existingContainer.parentNode.removeChild(existingContainer);
			}
		
			var canvas = document.getElementById("canvas");
			if (!canvas) {
				console.log("Canvas not found");
				return;
			}
		
			var currentLang = exportRoot.gameState.selectedLanguage || "mn";
			var rect = canvas.getBoundingClientRect();
			var videoWatched = exportRoot.gameState.videosWatched.indexOf("mainStory") !== -1;
		
			// =====================================================
			// CONTAINER
			// =====================================================
			videoContainer = document.createElement("div");
			videoContainer.id = "video-container-main";
			videoContainer.style.position = "absolute";
			videoContainer.style.left = rect.left + "px";
			videoContainer.style.top = rect.top + "px";
			videoContainer.style.width = rect.width + "px";
			videoContainer.style.height = rect.height + "px";
			videoContainer.style.backgroundColor = "#1a1a2e";
			videoContainer.style.zIndex = "1000";
			videoContainer.style.overflow = "hidden";
		
			// =====================================================
			// LOADING SPINNER
			// =====================================================
			loadingIndicator = document.createElement("div");
			loadingIndicator.style.position = "absolute";
			loadingIndicator.style.top = "50%";
			loadingIndicator.style.left = "50%";
			loadingIndicator.style.transform = "translate(-50%, -50%)";
			loadingIndicator.style.textAlign = "center";
			loadingIndicator.style.zIndex = "1003";
		
			var spinner = document.createElement("div");
			spinner.style.width = "60px";
			spinner.style.height = "60px";
			spinner.style.border = "6px solid rgba(255,255,255,0.2)";
			spinner.style.borderTop = "6px solid #FFD700"; // ← FIXED COLOR
			spinner.style.borderRadius = "50%";
			spinner.style.margin = "0 auto 20px";
			spinner.style.animation = "spin 1s linear infinite";
		
			var loadingText = document.createElement("div");
			loadingText.textContent = currentLang === "mn" ? "Ачаалж байна..." : "Жүктелуде...";
			loadingText.style.color = "#fff";
			loadingText.style.fontSize = "18px";
			loadingText.style.fontFamily = "'Rubik', sans-serif";
			loadingText.style.fontWeight = "bold";
		
			loadingIndicator.appendChild(spinner);
			loadingIndicator.appendChild(loadingText);
		
			if (!document.getElementById("spinner-style")) {
				var style = document.createElement("style");
				style.id = "spinner-style";
				style.textContent = "@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }";
				document.head.appendChild(style);
			}
		
			// =====================================================
			// VIDEO ELEMENT
			// =====================================================
			videoElement = document.createElement("video");
			videoElement.src = "./videos/lesson6_intro2_mn.mp4";
			videoElement.style.width = "100%";
			videoElement.style.height = "100%";
			videoElement.style.objectFit = "contain";
			videoElement.style.display = "none";
			videoElement.preload = "auto";
			videoElement.playsInline = true;
			videoElement.muted = false;
			videoElement.autoplay = true;
			videoElement.setAttribute("webkit-playsinline", "true");
		
			videoElement.addEventListener("error", function() {
				console.log("VIDEO ERROR:", videoElement.error);
			});
		
			// =====================================================
			// CLICK OVERLAY
			// =====================================================
			clickOverlay = document.createElement("div");
			clickOverlay.style.position = "absolute";
			clickOverlay.style.top = "0";
			clickOverlay.style.left = "0";
			clickOverlay.style.width = "100%";
			clickOverlay.style.height = "calc(100% - 70px)";
			clickOverlay.style.zIndex = "1001";
			clickOverlay.style.cursor = "pointer";
			clickOverlay.style.display = "none";
		
			var flashIcon = document.createElement("div");
			flashIcon.style.position = "absolute";
			flashIcon.style.top = "50%";
			flashIcon.style.left = "50%";
			flashIcon.style.transform = "translate(-50%, -50%)";
			flashIcon.style.fontSize = "80px";
			flashIcon.style.color = "rgba(255,255,255,0.85)";
			flashIcon.style.pointerEvents = "none";
			flashIcon.style.opacity = "0";
			flashIcon.style.transition = "opacity 0.15s ease";
			flashIcon.style.textShadow = "0 0 30px rgba(0,0,0,0.6)";
			flashIcon.textContent = "⏸";
			clickOverlay.appendChild(flashIcon);
		
			function showFlash(icon) {
				flashIcon.textContent = icon;
				flashIcon.style.opacity = "1";
				setTimeout(function() {
					flashIcon.style.opacity = "0";
				}, 400);
			}
		
			clickOverlay.addEventListener("click", function() {
				if (!videoElement) return;
				if (videoElement.paused) {
					videoElement.muted = false;
					videoElement.play().catch(function() {});
					if (playPauseBtn) playPauseBtn.innerHTML = "⏸️";
					showFlash("▶");
				} else {
					videoElement.pause();
					if (playPauseBtn) playPauseBtn.innerHTML = "▶️";
					showFlash("⏸");
				}
			});
		
			// =====================================================
			// CONTROLS BAR
			// =====================================================
			controlsBar = document.createElement("div");
			controlsBar.style.position = "absolute";
			controlsBar.style.bottom = "0";
			controlsBar.style.left = "0";
			controlsBar.style.right = "0";
			controlsBar.style.height = "70px";
			controlsBar.style.background = "linear-gradient(to top, rgba(0,0,0,0.9), transparent)";
			controlsBar.style.display = "none";
			controlsBar.style.alignItems = "center";
			controlsBar.style.padding = "0 20px";
			controlsBar.style.gap = "15px";
			controlsBar.style.zIndex = "1002";
		
			// PLAY/PAUSE
			playPauseBtn = document.createElement("button");
			playPauseBtn.innerHTML = "⏸️";
			playPauseBtn.style.fontSize = "24px";
			playPauseBtn.style.background = "none";
			playPauseBtn.style.border = "none";
			playPauseBtn.style.cursor = "pointer";
			playPauseBtn.style.padding = "5px";
			playPauseBtn.style.color = "#fff";
			playPauseBtn.style.zIndex = "1003";
		
			// PROGRESS BAR
			var progressContainer = document.createElement("div");
			progressContainer.style.flex = "1";
			progressContainer.style.height = "6px";
			progressContainer.style.backgroundColor = "rgba(255,255,255,0.3)";
			progressContainer.style.borderRadius = "3px";
			progressContainer.style.cursor = "pointer";
			progressContainer.style.position = "relative";
			progressContainer.style.zIndex = "1003";
		
			progressFill = document.createElement("div");
			progressFill.style.width = "0%";
			progressFill.style.height = "100%";
			progressFill.style.backgroundColor = "#FFD700";
			progressFill.style.borderRadius = "3px";
			progressFill.style.transition = "width 0.1s";
			progressContainer.appendChild(progressFill);
		
			// TIME DISPLAY
			timeDisplay = document.createElement("span");
			timeDisplay.textContent = "0:00 / 0:00";
			timeDisplay.style.color = "#fff";
			timeDisplay.style.fontSize = "14px";
			timeDisplay.style.fontFamily = "'Rubik', sans-serif";
			timeDisplay.style.minWidth = "100px";
			timeDisplay.style.zIndex = "1003";
		
			// VOLUME
			volumeSlider = document.createElement("input");
			volumeSlider.type = "range";
			volumeSlider.min = "0";
			volumeSlider.max = "100";
			volumeSlider.value = "100";
			volumeSlider.style.width = "80px";
			volumeSlider.style.cursor = "pointer";
			volumeSlider.style.zIndex = "1003";
		
			// DOWNLOAD
			downloadBtn = document.createElement("button");
			downloadBtn.innerHTML = "⬇️";
			downloadBtn.style.fontSize = "20px";
			downloadBtn.style.background = "none";
			downloadBtn.style.border = "none";
			downloadBtn.style.cursor = "pointer";
			downloadBtn.style.padding = "5px";
			downloadBtn.style.color = "#fff";
			downloadBtn.style.zIndex = "1003";
		
			// =====================================================
			// FULLSCREEN BUTTON ← NEW
			// =====================================================
			fullscreenBtn = document.createElement("button");
			fullscreenBtn.innerHTML = "⛶";
			fullscreenBtn.style.fontSize = "22px";
			fullscreenBtn.style.background = "none";
			fullscreenBtn.style.border = "none";
			fullscreenBtn.style.cursor = "pointer";
			fullscreenBtn.style.padding = "5px";
			fullscreenBtn.style.color = "#fff";
			fullscreenBtn.style.zIndex = "1003";
		
			// =====================================================
			// SKIP BUTTON
			// =====================================================
			skipButton = document.createElement("button");
			skipButton.innerHTML = skipLabels[currentLang] || skipLabels.mn;
			skipButton.style.position = "absolute";
			skipButton.style.bottom = "90px";
			skipButton.style.right = "20px";
			skipButton.style.padding = "10px 20px";
			skipButton.style.fontSize = "16px";
			skipButton.style.fontFamily = "'Rubik', sans-serif";
			skipButton.style.fontWeight = "bold";
			skipButton.style.backgroundColor = "#FFD700";
			skipButton.style.color = "#1a1a2e";
			skipButton.style.border = "none";
			skipButton.style.borderRadius = "25px";
			skipButton.style.cursor = "pointer";
			skipButton.style.boxShadow = "0 4px 12px rgba(0,0,0,0.5)";
			skipButton.style.zIndex = "1004";
			skipButton.style.display = videoWatched ? "block" : "none";
		
			// =====================================================
			// ASSEMBLE
			// =====================================================
			controlsBar.appendChild(playPauseBtn);
			controlsBar.appendChild(progressContainer);
			controlsBar.appendChild(timeDisplay);
			controlsBar.appendChild(volumeSlider);
			controlsBar.appendChild(downloadBtn);
			controlsBar.appendChild(fullscreenBtn); // ← NEW
		
			videoContainer.appendChild(loadingIndicator);
			videoContainer.appendChild(videoElement);
			videoContainer.appendChild(clickOverlay);
			videoContainer.appendChild(controlsBar);
			videoContainer.appendChild(skipButton);
		
			document.body.appendChild(videoContainer);
		
			// =====================================================
			// VIDEO EVENTS
			// =====================================================
			videoElement.addEventListener("loadeddata", function() {
				if (loadingIndicator) loadingIndicator.style.display = "none";
				videoElement.style.display = "block";
				controlsBar.style.display = "flex";
				clickOverlay.style.display = "block";
				if (!videoWatched) skipButton.style.display = "block";
		
				videoElement.play().then(function() {
					playPauseBtn.innerHTML = "⏸️";
				}).catch(function(err) {
					console.log("Play failed:", err);
					playPauseBtn.innerHTML = "▶️";
				});
			});
		
			videoElement.addEventListener("loadedmetadata", function() {
				if (timeDisplay) {
					timeDisplay.textContent = "0:00 / " + formatTime(videoElement.duration);
				}
			});
		
			videoElement.addEventListener("timeupdate", function() {
				if (progressFill && timeDisplay && videoElement.duration) {
					var percent = (videoElement.currentTime / videoElement.duration) * 100;
					progressFill.style.width = percent + "%";
					timeDisplay.textContent = formatTime(videoElement.currentTime) + " / " + formatTime(videoElement.duration);
				}
			});
		
			videoElement.addEventListener("ended", function() {
				if (playPauseBtn) playPauseBtn.innerHTML = "▶️";
				if (exportRoot.gameState.videosWatched.indexOf("mainStory") === -1) {
					exportRoot.gameState.videosWatched.push("mainStory");
					exportRoot.saveState();
				}
				setTimeout(goToExercise1, 800);
			});
		
			// =====================================================
			// CONTROLS EVENTS
			// =====================================================
			playPauseBtn.addEventListener("click", function(e) {
				e.stopPropagation();
				if (videoElement.paused) {
					videoElement.muted = false;
					videoElement.play();
					playPauseBtn.innerHTML = "⏸️";
				} else {
					videoElement.pause();
					playPauseBtn.innerHTML = "▶️";
				}
			});
		
			progressContainer.addEventListener("click", function(e) {
				e.stopPropagation();
				var r = progressContainer.getBoundingClientRect();
				var pos = (e.clientX - r.left) / r.width;
				videoElement.currentTime = pos * videoElement.duration;
			});
		
			volumeSlider.addEventListener("input", function(e) {
				e.stopPropagation();
				videoElement.volume = this.value / 100;
				if (this.value > 0) videoElement.muted = false;
			});
		
			downloadBtn.addEventListener("click", function(e) {
				e.stopPropagation();
				var a = document.createElement("a");
				a.href = videoElement.src;
				a.download = "lesson6_intro2_mn.mp4";
				a.click();
			});
		
			// =====================================================
			// FULLSCREEN EVENTS ← NEW
			// =====================================================
			fullscreenBtn.addEventListener("click", function(e) {
				e.stopPropagation();
				if (!document.fullscreenElement) {
					videoContainer.requestFullscreen().catch(function(err) {
						console.log("Fullscreen error:", err);
					});
				} else {
					document.exitFullscreen();
				}
			});
		
			document.addEventListener("fullscreenchange", fullscreenChangeHandler);
		
			skipButton.addEventListener("click", function(e) {
				e.stopPropagation();
				goToExercise1();
			});
		
			// =====================================================
			// RESIZE
			// =====================================================
			resizeHandler = function() {
				if (!videoContainer) return;
				var canvas = document.getElementById("canvas");
				if (!canvas) return;
				var r = canvas.getBoundingClientRect();
				videoContainer.style.left   = r.left   + "px";
				videoContainer.style.top    = r.top    + "px";
				videoContainer.style.width  = r.width  + "px";
				videoContainer.style.height = r.height + "px";
			};
			window.addEventListener("resize", resizeHandler);
		}
		
		function formatTime(seconds) {
			if (isNaN(seconds)) return "0:00";
			var mins = Math.floor(seconds / 60);
			var secs = Math.floor(seconds % 60);
			return mins + ":" + (secs < 10 ? "0" : "") + secs;
		}
		
		function goToExercise1() {
			if (exportRoot.gameState.videosWatched.indexOf("mainStory") === -1) {
				exportRoot.gameState.videosWatched.push("mainStory");
				exportRoot.saveState();
			}
			cleanup();
			exportRoot.gameState.currentFrame = 4;
			exportRoot.saveState();
			exportRoot.gotoAndStop(4);
		}
		
		exportRoot.on("removed", cleanup);
		
		createVideoPlayer();
	}
	this.frame_4 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		// =====================================================
		// CONFIG
		// =====================================================
		var CONFIG = {
		    backFrame: null,
		    nextFrame: 5, // хэрэгтэй frame-ээ энд тавь
		    autoNextDelay: 800,
		    requiredCount: 2,
		    selectedAlpha: 1,
		    normalAlpha: 0.01,
		    soundPaths: {
		        correct: "./sounds/voice_correct.mp3",
		        wrong: "./sounds/voice_wrong.mp3",
		        click: "./sounds/click.mp3"
		    }
		};
		
		// =====================================================
		// GLOBAL STATE
		// =====================================================
		if (!exportRoot.audioPool) {
		    exportRoot.audioPool = {};
		}
		if (!exportRoot.saveState) {
		    exportRoot.saveState = function () {};
		}
		
		// =====================================================
		// AUDIO
		// =====================================================
		function loadSound(type) {
		    if (!CONFIG.soundPaths[type]) return null;
		
		    if (!exportRoot.audioPool[type]) {
		        var audio = new Audio(CONFIG.soundPaths[type]);
		        audio.preload = "auto";
		        exportRoot.audioPool[type] = audio;
		    }
		    return exportRoot.audioPool[type];
		}
		
		function playSound(type) {
		    var base = loadSound(type);
		    if (!base) return;
		
		    try {
		        var a = base.cloneNode();
		        a.play().catch(function () {});
		    } catch (e) {}
		}
		
		loadSound("correct");
		loadSound("wrong");
		loadSound("click");
		
		// =====================================================
		// REFERENCES
		// =====================================================
		var parts = [
		    exportRoot.part_prev_1,
		    exportRoot.part_prev_2,
		    exportRoot.part_prev_3,
		    exportRoot.part_prev_4
		];
		
		// =====================================================
		// CHECK
		// =====================================================
		var selectedCount = 0;
		var finished = false;
		
		for (var i = 0; i < parts.length; i++) {
		    if (!parts[i]) {
		        console.log("Missing part_prev_" + (i + 1));
		    }
		}
		
		// =====================================================
		// HELPERS
		// =====================================================
		function setSelected(part, isSelected) {
		    if (!part) return;
		
		    part.isSelected = isSelected;
		
		    if (isSelected) {
		        part.alpha = CONFIG.selectedAlpha;
		    } else {
		        part.alpha = CONFIG.normalAlpha;
		    }
		}
		
		function pulseWrong(part) {
		    if (!part) return;
		
		    var baseScaleX = part.baseScaleX || 1;
		    var baseScaleY = part.baseScaleY || 1;
		
		    createjs.Tween.removeTweens(part);
		    createjs.Tween.get(part)
		        .to({ scaleX: baseScaleX * 1.06, scaleY: baseScaleY * 1.06 }, 70)
		        .to({ scaleX: baseScaleX, scaleY: baseScaleY }, 70)
		        .to({ scaleX: baseScaleX * 1.04, scaleY: baseScaleY * 1.04 }, 60)
		        .to({ scaleX: baseScaleX, scaleY: baseScaleY }, 60);
		}
		
		function finishExercise() {
		    if (finished) return;
		    finished = true;
		
		    playSound("correct");
		
		    setTimeout(function () {
		        if (CONFIG.nextFrame != null) {
		            exportRoot.gotoAndStop(CONFIG.nextFrame);
		        }
		    }, CONFIG.autoNextDelay);
		}
		
		// =====================================================
		// INIT
		// =====================================================
		parts.forEach(function (part, index) {
		    if (!part) return;
		
		    part.mouseChildren = false;
		    part.mouseEnabled = true;
		    part.cursor = "pointer";
		    part.isSelected = false;
		    part.alpha = CONFIG.normalAlpha;
		    part.baseScaleX = part.scaleX;
		    part.baseScaleY = part.scaleY;
		
		    part.on("mousedown", function () {
		        if (finished) return;
		
		        playSound("click");
		
		        if (this.isSelected) {
		            setSelected(this, false);
		            selectedCount--;
		            return;
		        }
		
		        if (selectedCount >= CONFIG.requiredCount) {
		            playSound("wrong");
		            pulseWrong(this);
		            return;
		        }
		
		        setSelected(this, true);
		        selectedCount++;
		
		        if (selectedCount === CONFIG.requiredCount) {
		            finishExercise();
		        }
		    });
		});
		
		// =====================================================
		// OPTIONAL NAV BUTTONS
		// =====================================================
		if (exportRoot.btn_next) {
		    exportRoot.btn_next.visible = false;
		    exportRoot.btn_next.mouseEnabled = false;
		}
		
		if (exportRoot.btn_back) {
		    exportRoot.btn_back.visible = CONFIG.backFrame != null;
		    exportRoot.btn_back.mouseEnabled = CONFIG.backFrame != null;
		
		    if (CONFIG.backFrame != null) {
		        exportRoot.btn_back.cursor = "pointer";
		        exportRoot.btn_back.on("click", function () {
		            playSound("click");
		            exportRoot.gotoAndStop(CONFIG.backFrame);
		        });
		    }
		}
	}
	this.frame_5 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		if (!exportRoot.gameState) {
			exportRoot.gameState = {};
		}
		if (!exportRoot.gameState.selectedLanguage) {
			exportRoot.gameState.selectedLanguage = "mn";
		}
		if (!exportRoot.gameState.videosWatched) {
			exportRoot.gameState.videosWatched = [];
		}
		if (!exportRoot.saveState) {
			exportRoot.saveState = function() {};
		}
		
		var videoContainer = null;
		var videoElement = null;
		var controlsBar = null;
		var playPauseBtn = null;
		var progressFill = null;
		var volumeSlider = null;
		var downloadBtn = null;
		var fullscreenBtn = null;
		var skipButton = null;
		var timeDisplay = null;
		var loadingIndicator = null;
		var resizeHandler = null;
		var clickOverlay = null;
		
		function cleanup() {
			if (videoElement) {
				videoElement.pause();
				videoElement.removeAttribute("src");
				videoElement.load();
				videoElement = null;
			}
			if (videoContainer && videoContainer.parentNode) {
				videoContainer.parentNode.removeChild(videoContainer);
				videoContainer = null;
			}
			if (resizeHandler) {
				window.removeEventListener("resize", resizeHandler);
				resizeHandler = null;
			}
			document.removeEventListener("fullscreenchange", fullscreenChangeHandler);
			playPauseBtn = null;
			progressFill = null;
			volumeSlider = null;
			downloadBtn = null;
			fullscreenBtn = null;
			skipButton = null;
			timeDisplay = null;
			loadingIndicator = null;
			controlsBar = null;
			clickOverlay = null;
		}
		
		function fullscreenChangeHandler() {
			if (!fullscreenBtn) return;
			if (document.fullscreenElement) {
				fullscreenBtn.innerHTML = "✖";
			} else {
				fullscreenBtn.innerHTML = "⛶";
			}
		}
		
		function createVideoPlayer() {
			var skipLabels = {
				mn: "АЛГАСАХ ▶",
				kz: "АТТАП ӨТУ ▶",
				tuva: "ЭРТЕР ▶",
				sign: "АЛГАСАХ ▶"
			};
		
			var existingContainer = document.getElementById("video-container-main");
			if (existingContainer && existingContainer.parentNode) {
				existingContainer.parentNode.removeChild(existingContainer);
			}
		
			var canvas = document.getElementById("canvas");
			if (!canvas) {
				console.log("Canvas not found");
				return;
			}
		
			var currentLang = exportRoot.gameState.selectedLanguage || "mn";
			var rect = canvas.getBoundingClientRect();
			var videoWatched = exportRoot.gameState.videosWatched.indexOf("mainStory") !== -1;
		
			// =====================================================
			// CONTAINER
			// =====================================================
			videoContainer = document.createElement("div");
			videoContainer.id = "video-container-main";
			videoContainer.style.position = "absolute";
			videoContainer.style.left = rect.left + "px";
			videoContainer.style.top = rect.top + "px";
			videoContainer.style.width = rect.width + "px";
			videoContainer.style.height = rect.height + "px";
			videoContainer.style.backgroundColor = "#1a1a2e";
			videoContainer.style.zIndex = "1000";
			videoContainer.style.overflow = "hidden";
		
			// =====================================================
			// LOADING SPINNER
			// =====================================================
			loadingIndicator = document.createElement("div");
			loadingIndicator.style.position = "absolute";
			loadingIndicator.style.top = "50%";
			loadingIndicator.style.left = "50%";
			loadingIndicator.style.transform = "translate(-50%, -50%)";
			loadingIndicator.style.textAlign = "center";
			loadingIndicator.style.zIndex = "1003";
		
			var spinner = document.createElement("div");
			spinner.style.width = "60px";
			spinner.style.height = "60px";
			spinner.style.border = "6px solid rgba(255,255,255,0.2)";
			spinner.style.borderTop = "6px solid #FFD700"; // ← FIXED COLOR
			spinner.style.borderRadius = "50%";
			spinner.style.margin = "0 auto 20px";
			spinner.style.animation = "spin 1s linear infinite";
		
			var loadingText = document.createElement("div");
			loadingText.textContent = currentLang === "mn" ? "Ачаалж байна..." : "Жүктелуде...";
			loadingText.style.color = "#fff";
			loadingText.style.fontSize = "18px";
			loadingText.style.fontFamily = "'Rubik', sans-serif";
			loadingText.style.fontWeight = "bold";
		
			loadingIndicator.appendChild(spinner);
			loadingIndicator.appendChild(loadingText);
		
			if (!document.getElementById("spinner-style")) {
				var style = document.createElement("style");
				style.id = "spinner-style";
				style.textContent = "@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }";
				document.head.appendChild(style);
			}
		
			// =====================================================
			// VIDEO ELEMENT
			// =====================================================
			videoElement = document.createElement("video");
			videoElement.src = "./videos/lesson6_intro3_mn.mp4";
			videoElement.style.width = "100%";
			videoElement.style.height = "100%";
			videoElement.style.objectFit = "contain";
			videoElement.style.display = "none";
			videoElement.preload = "auto";
			videoElement.playsInline = true;
			videoElement.muted = false;
			videoElement.autoplay = true;
			videoElement.setAttribute("webkit-playsinline", "true");
		
			videoElement.addEventListener("error", function() {
				console.log("VIDEO ERROR:", videoElement.error);
			});
		
			// =====================================================
			// CLICK OVERLAY
			// =====================================================
			clickOverlay = document.createElement("div");
			clickOverlay.style.position = "absolute";
			clickOverlay.style.top = "0";
			clickOverlay.style.left = "0";
			clickOverlay.style.width = "100%";
			clickOverlay.style.height = "calc(100% - 70px)";
			clickOverlay.style.zIndex = "1001";
			clickOverlay.style.cursor = "pointer";
			clickOverlay.style.display = "none";
		
			var flashIcon = document.createElement("div");
			flashIcon.style.position = "absolute";
			flashIcon.style.top = "50%";
			flashIcon.style.left = "50%";
			flashIcon.style.transform = "translate(-50%, -50%)";
			flashIcon.style.fontSize = "80px";
			flashIcon.style.color = "rgba(255,255,255,0.85)";
			flashIcon.style.pointerEvents = "none";
			flashIcon.style.opacity = "0";
			flashIcon.style.transition = "opacity 0.15s ease";
			flashIcon.style.textShadow = "0 0 30px rgba(0,0,0,0.6)";
			flashIcon.textContent = "⏸";
			clickOverlay.appendChild(flashIcon);
		
			function showFlash(icon) {
				flashIcon.textContent = icon;
				flashIcon.style.opacity = "1";
				setTimeout(function() {
					flashIcon.style.opacity = "0";
				}, 400);
			}
		
			clickOverlay.addEventListener("click", function() {
				if (!videoElement) return;
				if (videoElement.paused) {
					videoElement.muted = false;
					videoElement.play().catch(function() {});
					if (playPauseBtn) playPauseBtn.innerHTML = "⏸️";
					showFlash("▶");
				} else {
					videoElement.pause();
					if (playPauseBtn) playPauseBtn.innerHTML = "▶️";
					showFlash("⏸");
				}
			});
		
			// =====================================================
			// CONTROLS BAR
			// =====================================================
			controlsBar = document.createElement("div");
			controlsBar.style.position = "absolute";
			controlsBar.style.bottom = "0";
			controlsBar.style.left = "0";
			controlsBar.style.right = "0";
			controlsBar.style.height = "70px";
			controlsBar.style.background = "linear-gradient(to top, rgba(0,0,0,0.9), transparent)";
			controlsBar.style.display = "none";
			controlsBar.style.alignItems = "center";
			controlsBar.style.padding = "0 20px";
			controlsBar.style.gap = "15px";
			controlsBar.style.zIndex = "1002";
		
			// PLAY/PAUSE
			playPauseBtn = document.createElement("button");
			playPauseBtn.innerHTML = "⏸️";
			playPauseBtn.style.fontSize = "24px";
			playPauseBtn.style.background = "none";
			playPauseBtn.style.border = "none";
			playPauseBtn.style.cursor = "pointer";
			playPauseBtn.style.padding = "5px";
			playPauseBtn.style.color = "#fff";
			playPauseBtn.style.zIndex = "1003";
		
			// PROGRESS BAR
			var progressContainer = document.createElement("div");
			progressContainer.style.flex = "1";
			progressContainer.style.height = "6px";
			progressContainer.style.backgroundColor = "rgba(255,255,255,0.3)";
			progressContainer.style.borderRadius = "3px";
			progressContainer.style.cursor = "pointer";
			progressContainer.style.position = "relative";
			progressContainer.style.zIndex = "1003";
		
			progressFill = document.createElement("div");
			progressFill.style.width = "0%";
			progressFill.style.height = "100%";
			progressFill.style.backgroundColor = "#FFD700";
			progressFill.style.borderRadius = "3px";
			progressFill.style.transition = "width 0.1s";
			progressContainer.appendChild(progressFill);
		
			// TIME DISPLAY
			timeDisplay = document.createElement("span");
			timeDisplay.textContent = "0:00 / 0:00";
			timeDisplay.style.color = "#fff";
			timeDisplay.style.fontSize = "14px";
			timeDisplay.style.fontFamily = "'Rubik', sans-serif";
			timeDisplay.style.minWidth = "100px";
			timeDisplay.style.zIndex = "1003";
		
			// VOLUME
			volumeSlider = document.createElement("input");
			volumeSlider.type = "range";
			volumeSlider.min = "0";
			volumeSlider.max = "100";
			volumeSlider.value = "100";
			volumeSlider.style.width = "80px";
			volumeSlider.style.cursor = "pointer";
			volumeSlider.style.zIndex = "1003";
		
			// DOWNLOAD
			downloadBtn = document.createElement("button");
			downloadBtn.innerHTML = "⬇️";
			downloadBtn.style.fontSize = "20px";
			downloadBtn.style.background = "none";
			downloadBtn.style.border = "none";
			downloadBtn.style.cursor = "pointer";
			downloadBtn.style.padding = "5px";
			downloadBtn.style.color = "#fff";
			downloadBtn.style.zIndex = "1003";
		
			// =====================================================
			// FULLSCREEN BUTTON ← NEW
			// =====================================================
			fullscreenBtn = document.createElement("button");
			fullscreenBtn.innerHTML = "⛶";
			fullscreenBtn.style.fontSize = "22px";
			fullscreenBtn.style.background = "none";
			fullscreenBtn.style.border = "none";
			fullscreenBtn.style.cursor = "pointer";
			fullscreenBtn.style.padding = "5px";
			fullscreenBtn.style.color = "#fff";
			fullscreenBtn.style.zIndex = "1003";
		
			// =====================================================
			// SKIP BUTTON
			// =====================================================
			skipButton = document.createElement("button");
			skipButton.innerHTML = skipLabels[currentLang] || skipLabels.mn;
			skipButton.style.position = "absolute";
			skipButton.style.bottom = "90px";
			skipButton.style.right = "20px";
			skipButton.style.padding = "10px 20px";
			skipButton.style.fontSize = "16px";
			skipButton.style.fontFamily = "'Rubik', sans-serif";
			skipButton.style.fontWeight = "bold";
			skipButton.style.backgroundColor = "#FFD700";
			skipButton.style.color = "#1a1a2e";
			skipButton.style.border = "none";
			skipButton.style.borderRadius = "25px";
			skipButton.style.cursor = "pointer";
			skipButton.style.boxShadow = "0 4px 12px rgba(0,0,0,0.5)";
			skipButton.style.zIndex = "1004";
			skipButton.style.display = videoWatched ? "block" : "none";
		
			// =====================================================
			// ASSEMBLE
			// =====================================================
			controlsBar.appendChild(playPauseBtn);
			controlsBar.appendChild(progressContainer);
			controlsBar.appendChild(timeDisplay);
			controlsBar.appendChild(volumeSlider);
			controlsBar.appendChild(downloadBtn);
			controlsBar.appendChild(fullscreenBtn); // ← NEW
		
			videoContainer.appendChild(loadingIndicator);
			videoContainer.appendChild(videoElement);
			videoContainer.appendChild(clickOverlay);
			videoContainer.appendChild(controlsBar);
			videoContainer.appendChild(skipButton);
		
			document.body.appendChild(videoContainer);
		
			// =====================================================
			// VIDEO EVENTS
			// =====================================================
			videoElement.addEventListener("loadeddata", function() {
				if (loadingIndicator) loadingIndicator.style.display = "none";
				videoElement.style.display = "block";
				controlsBar.style.display = "flex";
				clickOverlay.style.display = "block";
				if (!videoWatched) skipButton.style.display = "block";
		
				videoElement.play().then(function() {
					playPauseBtn.innerHTML = "⏸️";
				}).catch(function(err) {
					console.log("Play failed:", err);
					playPauseBtn.innerHTML = "▶️";
				});
			});
		
			videoElement.addEventListener("loadedmetadata", function() {
				if (timeDisplay) {
					timeDisplay.textContent = "0:00 / " + formatTime(videoElement.duration);
				}
			});
		
			videoElement.addEventListener("timeupdate", function() {
				if (progressFill && timeDisplay && videoElement.duration) {
					var percent = (videoElement.currentTime / videoElement.duration) * 100;
					progressFill.style.width = percent + "%";
					timeDisplay.textContent = formatTime(videoElement.currentTime) + " / " + formatTime(videoElement.duration);
				}
			});
		
			videoElement.addEventListener("ended", function() {
				if (playPauseBtn) playPauseBtn.innerHTML = "▶️";
				if (exportRoot.gameState.videosWatched.indexOf("mainStory") === -1) {
					exportRoot.gameState.videosWatched.push("mainStory");
					exportRoot.saveState();
				}
				setTimeout(goToExercise1, 800);
			});
		
			// =====================================================
			// CONTROLS EVENTS
			// =====================================================
			playPauseBtn.addEventListener("click", function(e) {
				e.stopPropagation();
				if (videoElement.paused) {
					videoElement.muted = false;
					videoElement.play();
					playPauseBtn.innerHTML = "⏸️";
				} else {
					videoElement.pause();
					playPauseBtn.innerHTML = "▶️";
				}
			});
		
			progressContainer.addEventListener("click", function(e) {
				e.stopPropagation();
				var r = progressContainer.getBoundingClientRect();
				var pos = (e.clientX - r.left) / r.width;
				videoElement.currentTime = pos * videoElement.duration;
			});
		
			volumeSlider.addEventListener("input", function(e) {
				e.stopPropagation();
				videoElement.volume = this.value / 100;
				if (this.value > 0) videoElement.muted = false;
			});
		
			downloadBtn.addEventListener("click", function(e) {
				e.stopPropagation();
				var a = document.createElement("a");
				a.href = videoElement.src;
				a.download = "lesson6_intro3_mn.mp4";
				a.click();
			});
		
			// =====================================================
			// FULLSCREEN EVENTS ← NEW
			// =====================================================
			fullscreenBtn.addEventListener("click", function(e) {
				e.stopPropagation();
				if (!document.fullscreenElement) {
					videoContainer.requestFullscreen().catch(function(err) {
						console.log("Fullscreen error:", err);
					});
				} else {
					document.exitFullscreen();
				}
			});
		
			document.addEventListener("fullscreenchange", fullscreenChangeHandler);
		
			skipButton.addEventListener("click", function(e) {
				e.stopPropagation();
				goToExercise1();
			});
		
			// =====================================================
			// RESIZE
			// =====================================================
			resizeHandler = function() {
				if (!videoContainer) return;
				var canvas = document.getElementById("canvas");
				if (!canvas) return;
				var r = canvas.getBoundingClientRect();
				videoContainer.style.left   = r.left   + "px";
				videoContainer.style.top    = r.top    + "px";
				videoContainer.style.width  = r.width  + "px";
				videoContainer.style.height = r.height + "px";
			};
			window.addEventListener("resize", resizeHandler);
		}
		
		function formatTime(seconds) {
			if (isNaN(seconds)) return "0:00";
			var mins = Math.floor(seconds / 60);
			var secs = Math.floor(seconds % 60);
			return mins + ":" + (secs < 10 ? "0" : "") + secs;
		}
		
		function goToExercise1() {
			if (exportRoot.gameState.videosWatched.indexOf("mainStory") === -1) {
				exportRoot.gameState.videosWatched.push("mainStory");
				exportRoot.saveState();
			}
			cleanup();
			exportRoot.gameState.currentFrame = 4;
			exportRoot.saveState();
			exportRoot.gotoAndStop(6);
		}
		
		exportRoot.on("removed", cleanup);
		
		createVideoPlayer();
	}
	this.frame_6 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		// =====================================================
		// CONFIG
		// =====================================================
		var CONFIG = {
		    backFrame: null,
		    nextFrame: 7,
		    autoNextDelay: 800,
		    requiredCountPerGroup: 2,
		    selectedAlpha: 0.5,
		    normalAlpha: 0.01,
		    doneAlpha: 0.5,
		    soundPaths: {
		        correct: "./sounds/voice_correct.mp3",
		        wrong: "./sounds/voice_wrong.mp3",
		        click: "./sounds/click.mp3"
		    }
		};
		
		// =====================================================
		// GLOBAL STATE
		// =====================================================
		if (!exportRoot.audioPool) {
		    exportRoot.audioPool = {};
		}
		if (!exportRoot.saveState) {
		    exportRoot.saveState = function () {};
		}
		
		// =====================================================
		// AUDIO
		// =====================================================
		function loadSound(type) {
		    if (!CONFIG.soundPaths[type]) return null;
		
		    if (!exportRoot.audioPool[type]) {
		        var audio = new Audio(CONFIG.soundPaths[type]);
		        audio.preload = "auto";
		        exportRoot.audioPool[type] = audio;
		    }
		    return exportRoot.audioPool[type];
		}
		
		function playSound(type) {
		    var base = loadSound(type);
		    if (!base) return;
		
		    try {
		        var a = base.cloneNode();
		        a.play().catch(function () {});
		    } catch (e) {}
		}
		
		loadSound("correct");
		loadSound("wrong");
		loadSound("click");
		
		// =====================================================
		// GROUPS
		// =====================================================
		var groups = [
		    {
		        id: "g1",
		        parts: [
		            exportRoot.symb_1_1_1,
		            exportRoot.symb_1_1_2,
		            exportRoot.symb_1_1_3,
		            exportRoot.symb_1_1_4
		        ]
		    },
		    {
		        id: "g2",
		        parts: [
		            exportRoot.symb_1_2_1,
		            exportRoot.symb_1_2_2,
		            exportRoot.symb_1_2_3,
		            exportRoot.symb_1_2_4
		        ]
		    },
		    {
		        id: "g3",
		        parts: [
		            exportRoot.symb_1_3_1,
		            exportRoot.symb_1_3_2,
		            exportRoot.symb_1_3_3,
		            exportRoot.symb_1_3_4
		        ]
		    },
		    {
		        id: "g4",
		        parts: [
		            exportRoot.symb_1_4_1,
		            exportRoot.symb_1_4_2,
		            exportRoot.symb_1_4_3,
		            exportRoot.symb_1_4_4
		        ]
		    },
		    {
		        id: "g5",
		        parts: [
		            exportRoot.symb_1_5_1,
		            exportRoot.symb_1_5_2,
		            exportRoot.symb_1_5_3,
		            exportRoot.symb_1_5_4
		        ]
		    },
		    {
		        id: "g6",
		        parts: [
		            exportRoot.symb_1_6_1,
		            exportRoot.symb_1_6_2,
		            exportRoot.symb_1_6_3,
		            exportRoot.symb_1_6_4
		        ]
		    }
		];
		
		// Зөвшөөрөгдөх 6 хослол
		var ALL_VALID_COMBINATIONS = {
		    "1-2": true,
		    "1-3": true,
		    "1-4": true,
		    "2-3": true,
		    "2-4": true,
		    "3-4": true
		};
		
		var usedCombinations = {};
		var completedGroupCount = 0;
		var finished = false;
		
		// =====================================================
		// HELPERS
		// =====================================================
		function setPartSelected(part, isSelected) {
		    if (!part) return;
		    part.isSelected = isSelected;
		    part.alpha = isSelected ? CONFIG.selectedAlpha : CONFIG.normalAlpha;
		}
		
		function setGroupLocked(group, locked) {
		    group.isLocked = locked;
		
		    for (var i = 0; i < group.parts.length; i++) {
		        if (!group.parts[i]) continue;
		        group.parts[i].mouseEnabled = !locked;
		        group.parts[i].mouseChildren = false;
		        group.parts[i].cursor = locked ? "default" : "pointer";
		    }
		}
		
		function getSelectedIndexes(group) {
		    var arr = [];
		    for (var i = 0; i < group.parts.length; i++) {
		        var part = group.parts[i];
		        if (part && part.isSelected) {
		            arr.push(i + 1);
		        }
		    }
		    return arr;
		}
		
		function getCombinationKey(indexes) {
		    var sorted = indexes.slice().sort(function (a, b) { return a - b; });
		    return sorted.join("-");
		}
		
		function clearGroup(group) {
		    for (var i = 0; i < group.parts.length; i++) {
		        var part = group.parts[i];
		        if (!part) continue;
		        setPartSelected(part, false);
		    }
		}
		
		function pulseWrong(group) {
		    for (var i = 0; i < group.parts.length; i++) {
		        var part = group.parts[i];
		        if (!part) continue;
		
		        var baseScaleX = part.baseScaleX || 1;
		        var baseScaleY = part.baseScaleY || 1;
		
		        createjs.Tween.removeTweens(part);
		        createjs.Tween.get(part)
		            .to({ scaleX: baseScaleX * 1.05, scaleY: baseScaleY * 1.05 }, 60)
		            .to({ scaleX: baseScaleX, scaleY: baseScaleY }, 60);
		    }
		}
		
		function finalizeGroup(group) {
		    var selected = getSelectedIndexes(group);
		    var key = getCombinationKey(selected);
		
		    if (!ALL_VALID_COMBINATIONS[key]) {
		        playSound("wrong");
		        pulseWrong(group);
		        setTimeout(function () {
		            clearGroup(group);
		        }, 150);
		        return;
		    }
		
		    if (usedCombinations[key]) {
		        playSound("wrong");
		        pulseWrong(group);
		        setTimeout(function () {
		            clearGroup(group);
		        }, 150);
		        return;
		    }
		
		    usedCombinations[key] = true;
		    group.combinationKey = key;
		    group.isDone = true;
		    completedGroupCount++;
		
		    for (var i = 0; i < group.parts.length; i++) {
		        var part = group.parts[i];
		        if (!part) continue;
		
		        if (part.isSelected) {
		            part.alpha = CONFIG.doneAlpha;
		        } else {
		            part.alpha = CONFIG.normalAlpha;
		        }
		    }
		
		    setGroupLocked(group, true);
		    playSound("correct");
		
		    if (completedGroupCount === groups.length) {
		        finishExercise();
		    }
		}
		
		function finishExercise() {
		    if (finished) return;
		    finished = true;
		
		    exportRoot.saveState();
		
		    setTimeout(function () {
		        if (CONFIG.nextFrame != null) {
		            exportRoot.gotoAndStop(CONFIG.nextFrame);
		        }
		    }, CONFIG.autoNextDelay);
		}
		
		// =====================================================
		// INIT
		// =====================================================
		groups.forEach(function (group, groupIndex) {
		    group.isLocked = false;
		    group.isDone = false;
		    group.combinationKey = null;
		
		    group.parts.forEach(function (part, partIndex) {
		        if (!part) {
		            console.log("Missing:", "symb_" + (groupIndex + 1) + "_" + (partIndex + 1));
		            return;
		        }
		
		        part.groupRef = group;
		        part.partIndex = partIndex + 1;
		        part.isSelected = false;
		        part.mouseChildren = false;
		        part.mouseEnabled = true;
		        part.cursor = "pointer";
		        part.alpha = CONFIG.normalAlpha;
		        part.baseScaleX = part.scaleX;
		        part.baseScaleY = part.scaleY;
		
		        part.on("mousedown", function () {
		            var currentGroup = this.groupRef;
		            if (!currentGroup || currentGroup.isLocked || finished) return;
		
		            playSound("click");
		
		            if (this.isSelected) {
		                setPartSelected(this, false);
		                return;
		            }
		
		            var selectedNow = getSelectedIndexes(currentGroup);
		            if (selectedNow.length >= CONFIG.requiredCountPerGroup) {
		                playSound("wrong");
		                pulseWrong(currentGroup);
		                return;
		            }
		
		            setPartSelected(this, true);
		
		            selectedNow = getSelectedIndexes(currentGroup);
		            if (selectedNow.length === CONFIG.requiredCountPerGroup) {
		                finalizeGroup(currentGroup);
		            }
		        });
		    });
		});
		
		// =====================================================
		// OPTIONAL BACK BUTTON
		// =====================================================
		if (exportRoot.btn_back) {
		    exportRoot.btn_back.visible = CONFIG.backFrame != null;
		    exportRoot.btn_back.mouseEnabled = CONFIG.backFrame != null;
		
		    if (CONFIG.backFrame != null) {
		        exportRoot.btn_back.cursor = "pointer";
		        exportRoot.btn_back.on("click", function () {
		            playSound("click");
		            exportRoot.gotoAndStop(CONFIG.backFrame);
		        });
		    }
		}
	}
	this.frame_7 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		if (!exportRoot.gameState) {
			exportRoot.gameState = {};
		}
		if (!exportRoot.gameState.selectedLanguage) {
			exportRoot.gameState.selectedLanguage = "mn";
		}
		if (!exportRoot.gameState.videosWatched) {
			exportRoot.gameState.videosWatched = [];
		}
		if (!exportRoot.saveState) {
			exportRoot.saveState = function() {};
		}
		
		var videoContainer = null;
		var videoElement = null;
		var controlsBar = null;
		var playPauseBtn = null;
		var progressFill = null;
		var volumeSlider = null;
		var downloadBtn = null;
		var fullscreenBtn = null;
		var skipButton = null;
		var timeDisplay = null;
		var loadingIndicator = null;
		var resizeHandler = null;
		var clickOverlay = null;
		
		function cleanup() {
			if (videoElement) {
				videoElement.pause();
				videoElement.removeAttribute("src");
				videoElement.load();
				videoElement = null;
			}
			if (videoContainer && videoContainer.parentNode) {
				videoContainer.parentNode.removeChild(videoContainer);
				videoContainer = null;
			}
			if (resizeHandler) {
				window.removeEventListener("resize", resizeHandler);
				resizeHandler = null;
			}
			document.removeEventListener("fullscreenchange", fullscreenChangeHandler);
			playPauseBtn = null;
			progressFill = null;
			volumeSlider = null;
			downloadBtn = null;
			fullscreenBtn = null;
			skipButton = null;
			timeDisplay = null;
			loadingIndicator = null;
			controlsBar = null;
			clickOverlay = null;
		}
		
		function fullscreenChangeHandler() {
			if (!fullscreenBtn) return;
			if (document.fullscreenElement) {
				fullscreenBtn.innerHTML = "✖";
			} else {
				fullscreenBtn.innerHTML = "⛶";
			}
		}
		
		function createVideoPlayer() {
			var skipLabels = {
				mn: "АЛГАСАХ ▶",
				kz: "АТТАП ӨТУ ▶",
				tuva: "ЭРТЕР ▶",
				sign: "АЛГАСАХ ▶"
			};
		
			var existingContainer = document.getElementById("video-container-main");
			if (existingContainer && existingContainer.parentNode) {
				existingContainer.parentNode.removeChild(existingContainer);
			}
		
			var canvas = document.getElementById("canvas");
			if (!canvas) {
				console.log("Canvas not found");
				return;
			}
		
			var currentLang = exportRoot.gameState.selectedLanguage || "mn";
			var rect = canvas.getBoundingClientRect();
			var videoWatched = exportRoot.gameState.videosWatched.indexOf("mainStory") !== -1;
		
			// =====================================================
			// CONTAINER
			// =====================================================
			videoContainer = document.createElement("div");
			videoContainer.id = "video-container-main";
			videoContainer.style.position = "absolute";
			videoContainer.style.left = rect.left + "px";
			videoContainer.style.top = rect.top + "px";
			videoContainer.style.width = rect.width + "px";
			videoContainer.style.height = rect.height + "px";
			videoContainer.style.backgroundColor = "#1a1a2e";
			videoContainer.style.zIndex = "1000";
			videoContainer.style.overflow = "hidden";
		
			// =====================================================
			// LOADING SPINNER
			// =====================================================
			loadingIndicator = document.createElement("div");
			loadingIndicator.style.position = "absolute";
			loadingIndicator.style.top = "50%";
			loadingIndicator.style.left = "50%";
			loadingIndicator.style.transform = "translate(-50%, -50%)";
			loadingIndicator.style.textAlign = "center";
			loadingIndicator.style.zIndex = "1003";
		
			var spinner = document.createElement("div");
			spinner.style.width = "60px";
			spinner.style.height = "60px";
			spinner.style.border = "6px solid rgba(255,255,255,0.2)";
			spinner.style.borderTop = "6px solid #FFD700"; // ← FIXED COLOR
			spinner.style.borderRadius = "50%";
			spinner.style.margin = "0 auto 20px";
			spinner.style.animation = "spin 1s linear infinite";
		
			var loadingText = document.createElement("div");
			loadingText.textContent = currentLang === "mn" ? "Ачаалж байна..." : "Жүктелуде...";
			loadingText.style.color = "#fff";
			loadingText.style.fontSize = "18px";
			loadingText.style.fontFamily = "'Rubik', sans-serif";
			loadingText.style.fontWeight = "bold";
		
			loadingIndicator.appendChild(spinner);
			loadingIndicator.appendChild(loadingText);
		
			if (!document.getElementById("spinner-style")) {
				var style = document.createElement("style");
				style.id = "spinner-style";
				style.textContent = "@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }";
				document.head.appendChild(style);
			}
		
			// =====================================================
			// VIDEO ELEMENT
			// =====================================================
			videoElement = document.createElement("video");
			videoElement.src = "./videos/lesson6_intro4_mn.mp4";
			videoElement.style.width = "100%";
			videoElement.style.height = "100%";
			videoElement.style.objectFit = "contain";
			videoElement.style.display = "none";
			videoElement.preload = "auto";
			videoElement.playsInline = true;
			videoElement.muted = false;
			videoElement.autoplay = true;
			videoElement.setAttribute("webkit-playsinline", "true");
		
			videoElement.addEventListener("error", function() {
				console.log("VIDEO ERROR:", videoElement.error);
			});
		
			// =====================================================
			// CLICK OVERLAY
			// =====================================================
			clickOverlay = document.createElement("div");
			clickOverlay.style.position = "absolute";
			clickOverlay.style.top = "0";
			clickOverlay.style.left = "0";
			clickOverlay.style.width = "100%";
			clickOverlay.style.height = "calc(100% - 70px)";
			clickOverlay.style.zIndex = "1001";
			clickOverlay.style.cursor = "pointer";
			clickOverlay.style.display = "none";
		
			var flashIcon = document.createElement("div");
			flashIcon.style.position = "absolute";
			flashIcon.style.top = "50%";
			flashIcon.style.left = "50%";
			flashIcon.style.transform = "translate(-50%, -50%)";
			flashIcon.style.fontSize = "80px";
			flashIcon.style.color = "rgba(255,255,255,0.85)";
			flashIcon.style.pointerEvents = "none";
			flashIcon.style.opacity = "0";
			flashIcon.style.transition = "opacity 0.15s ease";
			flashIcon.style.textShadow = "0 0 30px rgba(0,0,0,0.6)";
			flashIcon.textContent = "⏸";
			clickOverlay.appendChild(flashIcon);
		
			function showFlash(icon) {
				flashIcon.textContent = icon;
				flashIcon.style.opacity = "1";
				setTimeout(function() {
					flashIcon.style.opacity = "0";
				}, 400);
			}
		
			clickOverlay.addEventListener("click", function() {
				if (!videoElement) return;
				if (videoElement.paused) {
					videoElement.muted = false;
					videoElement.play().catch(function() {});
					if (playPauseBtn) playPauseBtn.innerHTML = "⏸️";
					showFlash("▶");
				} else {
					videoElement.pause();
					if (playPauseBtn) playPauseBtn.innerHTML = "▶️";
					showFlash("⏸");
				}
			});
		
			// =====================================================
			// CONTROLS BAR
			// =====================================================
			controlsBar = document.createElement("div");
			controlsBar.style.position = "absolute";
			controlsBar.style.bottom = "0";
			controlsBar.style.left = "0";
			controlsBar.style.right = "0";
			controlsBar.style.height = "70px";
			controlsBar.style.background = "linear-gradient(to top, rgba(0,0,0,0.9), transparent)";
			controlsBar.style.display = "none";
			controlsBar.style.alignItems = "center";
			controlsBar.style.padding = "0 20px";
			controlsBar.style.gap = "15px";
			controlsBar.style.zIndex = "1002";
		
			// PLAY/PAUSE
			playPauseBtn = document.createElement("button");
			playPauseBtn.innerHTML = "⏸️";
			playPauseBtn.style.fontSize = "24px";
			playPauseBtn.style.background = "none";
			playPauseBtn.style.border = "none";
			playPauseBtn.style.cursor = "pointer";
			playPauseBtn.style.padding = "5px";
			playPauseBtn.style.color = "#fff";
			playPauseBtn.style.zIndex = "1003";
		
			// PROGRESS BAR
			var progressContainer = document.createElement("div");
			progressContainer.style.flex = "1";
			progressContainer.style.height = "6px";
			progressContainer.style.backgroundColor = "rgba(255,255,255,0.3)";
			progressContainer.style.borderRadius = "3px";
			progressContainer.style.cursor = "pointer";
			progressContainer.style.position = "relative";
			progressContainer.style.zIndex = "1003";
		
			progressFill = document.createElement("div");
			progressFill.style.width = "0%";
			progressFill.style.height = "100%";
			progressFill.style.backgroundColor = "#FFD700";
			progressFill.style.borderRadius = "3px";
			progressFill.style.transition = "width 0.1s";
			progressContainer.appendChild(progressFill);
		
			// TIME DISPLAY
			timeDisplay = document.createElement("span");
			timeDisplay.textContent = "0:00 / 0:00";
			timeDisplay.style.color = "#fff";
			timeDisplay.style.fontSize = "14px";
			timeDisplay.style.fontFamily = "'Rubik', sans-serif";
			timeDisplay.style.minWidth = "100px";
			timeDisplay.style.zIndex = "1003";
		
			// VOLUME
			volumeSlider = document.createElement("input");
			volumeSlider.type = "range";
			volumeSlider.min = "0";
			volumeSlider.max = "100";
			volumeSlider.value = "100";
			volumeSlider.style.width = "80px";
			volumeSlider.style.cursor = "pointer";
			volumeSlider.style.zIndex = "1003";
		
			// DOWNLOAD
			downloadBtn = document.createElement("button");
			downloadBtn.innerHTML = "⬇️";
			downloadBtn.style.fontSize = "20px";
			downloadBtn.style.background = "none";
			downloadBtn.style.border = "none";
			downloadBtn.style.cursor = "pointer";
			downloadBtn.style.padding = "5px";
			downloadBtn.style.color = "#fff";
			downloadBtn.style.zIndex = "1003";
		
			// =====================================================
			// FULLSCREEN BUTTON ← NEW
			// =====================================================
			fullscreenBtn = document.createElement("button");
			fullscreenBtn.innerHTML = "⛶";
			fullscreenBtn.style.fontSize = "22px";
			fullscreenBtn.style.background = "none";
			fullscreenBtn.style.border = "none";
			fullscreenBtn.style.cursor = "pointer";
			fullscreenBtn.style.padding = "5px";
			fullscreenBtn.style.color = "#fff";
			fullscreenBtn.style.zIndex = "1003";
		
			// =====================================================
			// SKIP BUTTON
			// =====================================================
			skipButton = document.createElement("button");
			skipButton.innerHTML = skipLabels[currentLang] || skipLabels.mn;
			skipButton.style.position = "absolute";
			skipButton.style.bottom = "90px";
			skipButton.style.right = "20px";
			skipButton.style.padding = "10px 20px";
			skipButton.style.fontSize = "16px";
			skipButton.style.fontFamily = "'Rubik', sans-serif";
			skipButton.style.fontWeight = "bold";
			skipButton.style.backgroundColor = "#FFD700";
			skipButton.style.color = "#1a1a2e";
			skipButton.style.border = "none";
			skipButton.style.borderRadius = "25px";
			skipButton.style.cursor = "pointer";
			skipButton.style.boxShadow = "0 4px 12px rgba(0,0,0,0.5)";
			skipButton.style.zIndex = "1004";
			skipButton.style.display = videoWatched ? "block" : "none";
		
			// =====================================================
			// ASSEMBLE
			// =====================================================
			controlsBar.appendChild(playPauseBtn);
			controlsBar.appendChild(progressContainer);
			controlsBar.appendChild(timeDisplay);
			controlsBar.appendChild(volumeSlider);
			controlsBar.appendChild(downloadBtn);
			controlsBar.appendChild(fullscreenBtn); // ← NEW
		
			videoContainer.appendChild(loadingIndicator);
			videoContainer.appendChild(videoElement);
			videoContainer.appendChild(clickOverlay);
			videoContainer.appendChild(controlsBar);
			videoContainer.appendChild(skipButton);
		
			document.body.appendChild(videoContainer);
		
			// =====================================================
			// VIDEO EVENTS
			// =====================================================
			videoElement.addEventListener("loadeddata", function() {
				if (loadingIndicator) loadingIndicator.style.display = "none";
				videoElement.style.display = "block";
				controlsBar.style.display = "flex";
				clickOverlay.style.display = "block";
				if (!videoWatched) skipButton.style.display = "block";
		
				videoElement.play().then(function() {
					playPauseBtn.innerHTML = "⏸️";
				}).catch(function(err) {
					console.log("Play failed:", err);
					playPauseBtn.innerHTML = "▶️";
				});
			});
		
			videoElement.addEventListener("loadedmetadata", function() {
				if (timeDisplay) {
					timeDisplay.textContent = "0:00 / " + formatTime(videoElement.duration);
				}
			});
		
			videoElement.addEventListener("timeupdate", function() {
				if (progressFill && timeDisplay && videoElement.duration) {
					var percent = (videoElement.currentTime / videoElement.duration) * 100;
					progressFill.style.width = percent + "%";
					timeDisplay.textContent = formatTime(videoElement.currentTime) + " / " + formatTime(videoElement.duration);
				}
			});
		
			videoElement.addEventListener("ended", function() {
				if (playPauseBtn) playPauseBtn.innerHTML = "▶️";
				if (exportRoot.gameState.videosWatched.indexOf("mainStory") === -1) {
					exportRoot.gameState.videosWatched.push("mainStory");
					exportRoot.saveState();
				}
				setTimeout(goToExercise1, 800);
			});
		
			// =====================================================
			// CONTROLS EVENTS
			// =====================================================
			playPauseBtn.addEventListener("click", function(e) {
				e.stopPropagation();
				if (videoElement.paused) {
					videoElement.muted = false;
					videoElement.play();
					playPauseBtn.innerHTML = "⏸️";
				} else {
					videoElement.pause();
					playPauseBtn.innerHTML = "▶️";
				}
			});
		
			progressContainer.addEventListener("click", function(e) {
				e.stopPropagation();
				var r = progressContainer.getBoundingClientRect();
				var pos = (e.clientX - r.left) / r.width;
				videoElement.currentTime = pos * videoElement.duration;
			});
		
			volumeSlider.addEventListener("input", function(e) {
				e.stopPropagation();
				videoElement.volume = this.value / 100;
				if (this.value > 0) videoElement.muted = false;
			});
		
			downloadBtn.addEventListener("click", function(e) {
				e.stopPropagation();
				var a = document.createElement("a");
				a.href = videoElement.src;
				a.download = "lesson6_intro4_mn.mp4";
				a.click();
			});
		
			// =====================================================
			// FULLSCREEN EVENTS ← NEW
			// =====================================================
			fullscreenBtn.addEventListener("click", function(e) {
				e.stopPropagation();
				if (!document.fullscreenElement) {
					videoContainer.requestFullscreen().catch(function(err) {
						console.log("Fullscreen error:", err);
					});
				} else {
					document.exitFullscreen();
				}
			});
		
			document.addEventListener("fullscreenchange", fullscreenChangeHandler);
		
			skipButton.addEventListener("click", function(e) {
				e.stopPropagation();
				goToExercise1();
			});
		
			// =====================================================
			// RESIZE
			// =====================================================
			resizeHandler = function() {
				if (!videoContainer) return;
				var canvas = document.getElementById("canvas");
				if (!canvas) return;
				var r = canvas.getBoundingClientRect();
				videoContainer.style.left   = r.left   + "px";
				videoContainer.style.top    = r.top    + "px";
				videoContainer.style.width  = r.width  + "px";
				videoContainer.style.height = r.height + "px";
			};
			window.addEventListener("resize", resizeHandler);
		}
		
		function formatTime(seconds) {
			if (isNaN(seconds)) return "0:00";
			var mins = Math.floor(seconds / 60);
			var secs = Math.floor(seconds % 60);
			return mins + ":" + (secs < 10 ? "0" : "") + secs;
		}
		
		function goToExercise1() {
			if (exportRoot.gameState.videosWatched.indexOf("mainStory") === -1) {
				exportRoot.gameState.videosWatched.push("mainStory");
				exportRoot.saveState();
			}
			cleanup();
			exportRoot.gameState.currentFrame = 4;
			exportRoot.saveState();
			exportRoot.gotoAndStop(8);
		}
		
		exportRoot.on("removed", cleanup);
		
		createVideoPlayer();
		var exportRoot = this;
		exportRoot.stop();
		
		if (!exportRoot.audioPool) {
			exportRoot.audioPool = {};
		}
		
		if (!exportRoot.gameState) {
			exportRoot.gameState = {};
		}
		
		exportRoot.currentLessonId = "Lesson06";
		exportRoot.currentExerciseId = "ex01";
		exportRoot.backBtn = null;
		exportRoot.nextBtn = null;
		var storageKey = "lesson6_gameState"
		
		function loadSound(type) {
			var lang = exportRoot.gameState.selectedLanguage || "mn";
			var lessonId = exportRoot.currentLessonId || "Lesson06";
			var exerciseId = exportRoot.currentExerciseId || "ex01";
			var key = type + "_" + lessonId + "_" + exerciseId + "_" + lang;
		
			var paths = {
				correct: "./sounds/voice_correct.mp3",
				wrong: "./sounds/voice_wrong.mp3",
				click: "./sounds/click.mp3",
				instruction: "./sounds/instructions/" + lessonId + "_" + exerciseId + "_" + lang + ".mp3"
			};
		
			if (!exportRoot.audioPool[key]) {
				exportRoot.audioPool[key] = new Audio(paths[type]);
				exportRoot.audioPool[key].preload = "metadata";
			}
		
			return exportRoot.audioPool[key];
		}
		
		var currentInstructionAudio = null;
		
		exportRoot.playExerciseSound = function(soundName) {
			var sound = loadSound(soundName);
			if (sound) {
				sound.pause();
				sound.currentTime = 0;
				sound.play().catch(function() {});
			}
		};
		
		exportRoot.playInstruction = function() {
			if (currentInstructionAudio) {
				currentInstructionAudio.pause();
				currentInstructionAudio.currentTime = 0;
			}
			currentInstructionAudio = loadSound("instruction");
			if (currentInstructionAudio) {
				currentInstructionAudio.play().catch(function() {});
			}
		};
		
		exportRoot.stopInstruction = function() {
			if (currentInstructionAudio) {
				currentInstructionAudio.pause();
				currentInstructionAudio.currentTime = 0;
				currentInstructionAudio = null;
			}
		};
		
		function playSound(type) {
			var s = loadSound(type);
			if (!s) return;
		
			s.pause();
			s.currentTime = 0;
			s.play().catch(function() {});
		}
		
		function setupButton(btn, callback, enabled) {
			if (!btn) return;
		
			if (btn.removeAllEventListeners) {
				btn.removeAllEventListeners();
			}
		
			btn.visible = true;
			btn.mouseChildren = false;
		
			if (enabled === false) {
				btn.mouseEnabled = false;
				btn.alpha = 0.3;
				btn.cursor = null;
				return;
			}
		
			btn.mouseEnabled = true;
			btn.alpha = 1;
			btn.cursor = "pointer";
		
			btn.addEventListener("click", function() {
				playSound("click");
				if (callback) callback();
			});
		}
		
		function getExerciseNumber() {
			if (!exportRoot || !exportRoot.currentExerciseId) return null;
		
			var match = String(exportRoot.currentExerciseId).match(/\d+/);
			return match ? parseInt(match[0], 10) : null;
		}
		
		var inputNames = ["lesson6_ex01_input_1_1", "lesson6_ex01_input_1_2", "lesson6_ex01_input_1_3", "lesson6_ex01_input_1_4", "lesson6_ex01_input_1_5", "lesson6_ex01_input_1_6", "lesson6_ex01_input_1_7", "lesson6_ex01_input_1_8", "lesson6_ex01_input_1_9", "lesson6_ex01_input_1_10", "lesson6_ex01_input_1_11", "lesson6_ex01_input_1_12", "lesson6_ex01_input_1_13", "lesson6_ex01_input_1_14", "lesson6_ex05_input_5_1", "lesson6_ex05_input_5_2", "lesson6_ex05_input_5_3", "lesson6_ex05_input_5_4", "lesson6_ex06_input_6_1_1", "lesson6_ex06_input_6_1_2", "lesson6_ex06_input_6_1_3", "lesson6_ex06_input_6_1_4", "lesson6_ex06_input_6_1_5", "lesson6_ex06_input_6_2_1", "lesson6_ex06_input_6_2_2", "lesson6_ex06_input_6_2_3", "lesson6_ex06_input_6_2_4", "lesson6_ex06_input_6_2_5", "lesson6_ex06_input_6_3_1", "lesson6_ex06_input_6_3_2", "lesson6_ex06_input_6_3_3", "lesson6_ex06_input_6_3_4", "lesson6_ex06_input_6_3_5", "lesson6_ex06_input_6_4_1", "lesson6_ex06_input_6_4_2", "lesson6_ex06_input_6_4_3", "lesson6_ex06_input_6_4_4", "lesson6_ex06_input_6_4_5", "lesson6_ex09_input_9_1_1", "lesson6_ex09_input_9_1_2", "lesson6_ex09_input_9_2_1", "lesson6_ex09_input_9_2_2", "lesson6_ex09_input_9_3_1", "lesson6_ex09_input_9_3_2", "lesson6_ex09_input_11_1", "lesson6_ex09_input_11_2"];
		
		function hideAllHtmlInputs() {
			console.log(exportRoot.currentExerciseId);
			inputNames.filter(name => name.includes(exportRoot.currentExerciseId)).forEach(function(name) {
				var el = document.getElementById("html_" + name);
				console.log(name);
				if (el) {
					console.log("found");
					el.style.opacity = "0";
				}else {
					console.log("not found");
				}
			});
		}
		
		function showAllHtmlInputs() {
			var exerciseNumber = getExerciseNumber();
			inputNames.filter(name => name.includes(exportRoot.currentExerciseId)).forEach(function(name) {
				var el = document.getElementById("html_" + name);
				if (el) {
					el.style.opacity = "1";
				}
			});
		}
		
		if (exportRoot.help_btn) {
			setupButton(exportRoot.help_btn, function() {
				if (exportRoot.stopInstruction) {
					exportRoot.stopInstruction();
				}
		
				if (exportRoot.help_popup) {
					var currentLang = exportRoot.gameState.selectedLanguage || "mn";
		
					if (exportRoot.help_popup.gotoAndStop) {
						exportRoot.help_popup.gotoAndStop(currentLang);
					}
		
					exportRoot.help_popup.visible = true;
					hideAllHtmlInputs();
		
					if (exportRoot.help_popup.parent) {
						exportRoot.help_popup.parent.setChildIndex(
							exportRoot.help_popup,
							exportRoot.help_popup.parent.numChildren - 1
						);
					}
		
					if (exportRoot.help_popup.closeBtn) {
						setupButton(exportRoot.help_popup.closeBtn, function() {
							exportRoot.help_popup.visible = false;
							showAllHtmlInputs();
						}, true);
					}
				}
			}, true);
		}
		
		if (exportRoot.voice_btn) {
			setupButton(exportRoot.voice_btn, function() {
				if (exportRoot.playInstruction) {
					exportRoot.playInstruction();
				}
			}, true);
		}
		
		function removeLessonStateAndReload() {
			sessionStorage.removeItem(storageKey);
			location.reload();
		}
		
		// HOME
		if (exportRoot.home_btn) {
			setupButton(exportRoot.home_btn, function() {
				removeLessonStateAndReload();
			}, true);
		}
		
		if (exportRoot.home_btn_0) {
			setupButton(exportRoot.home_btn_0, function() {
				removeLessonStateAndReload();
			}, true);
		}
		
		if (exportRoot.helpPopup) {
			exportRoot.help_popup.visible = false;
		}
		
		function getCompleteKeyByExerciseId(exerciseId) {
			var exNum = getExerciseNumber(exerciseId);
			return "exercise" + exNum + "Complete";
		}
		
		function getExerciseNumber(exerciseId) {
			if (!exerciseId) return 1;
		
			var match = String(exerciseId).match(/ex(\d+)/i);
			if (!match) return 1;
		
			return parseInt(match[1], 10);
		}
		
		function getCurrentExerciseNumber() {
			return getExerciseNumber(exportRoot.currentExerciseId);
		}
		
		function getCurrentCompleteKey() {
			return getCompleteKeyByExerciseId(exportRoot.currentExerciseId);
		}
		
		function goToExercise(exNum) {
			if (typeof exNum !== "number" || exNum < 1) return;
		
			exportRoot.stopInstruction();
		
			var nextExerciseId = "ex" + (exNum < 10 ? "0" + exNum : exNum);
			exportRoot.currentExerciseId = nextExerciseId;
		
			// frame = exercise number гэж үзэж байна
			// ex01 -> frame 1
			// ex02 -> frame 2
			// ex03 -> frame 3 ...
			if (exportRoot.gotoAndStop) {
				exportRoot.gotoAndStop(exNum);
			}
		}
		
		console.log("create exportRoot.refreshNavButtons");
		
		exportRoot.refreshNavButtons = function() {
			console.log("refreshNavButtons");
			console.log(exportRoot.backBtn);
			console.log(exportRoot.nextBtn);
			var currentExNum = getCurrentExerciseNumber();
			console.log("currentExNum");
			console.log(currentExNum);
			var currentCompleteKey = getCurrentCompleteKey();
			console.log("getCurrentCompleteKey");
			console.log(currentCompleteKey);
			var isComplete = !!exportRoot.gameState[currentCompleteKey];
			console.log("console.log(isComplete);");
			console.log(isComplete);
			
			if (exportRoot.backBtn) {
				setupButton(exportRoot.btn_back, function() {
					hideAllHtmlInputs();
					exportRoot.gotoAndStop(exportRoot.backBtn);
				}, currentExNum > 1);
			}else {
				setupButton(exportRoot.btn_back, function() {
					exportRoot.gotoAndStop(exportRoot.backBtn);
				}, false);
			}
		
			if (exportRoot.nextBtn) {
				setupButton(exportRoot.btn_next, function() {
					hideAllHtmlInputs()
					exportRoot.gotoAndStop(exportRoot.nextBtn);
				}, isComplete);
			}
		}
	}
	this.frame_8 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		// =====================================================
		// CONFIG
		// =====================================================
		var CONFIG = {
		    lessonId: "lesson6",
		    exerciseId: "ex01",
		    exerciseNumber: 1,
		    storageKey: "lesson6_gameState",
		    backFrame: null,
		    nextFrame: 9,
		    autoNextDelay: 1500,
		    soundPaths: {
		        correct: "./sounds/voice_correct.mp3",
		        wrong: "./sounds/voice_wrong.mp3",
		        click: "./sounds/click.mp3"
		    },
		    inputs: {
		        input_1_1: "1", input_1_2: "2", input_1_3: "2", input_1_4: "3",
		        input_1_5: "2", input_1_6: "4", input_1_7: "3", input_1_8: "5",
		        input_1_9: "3", input_1_10: "6", input_1_11: "4", input_1_12: "8",
		        input_1_13: "5", input_1_14: "10"
		    }
		};
		
		exportRoot.currentExerciseId = CONFIG.exerciseId;
		exportRoot.backBtn = CONFIG.backFrame;
		exportRoot.nextBtn = CONFIG.nextFrame;
		CONFIG.positionsKey = "exercise" + CONFIG.exerciseNumber + "Positions";
		CONFIG.completeKey = "exercise" + CONFIG.exerciseNumber + "Complete";
		
		// =====================================================
		// STATE & INIT
		// =====================================================
		if (!exportRoot.gameState) exportRoot.gameState = {};
		if (!exportRoot.gameState[CONFIG.positionsKey]) exportRoot.gameState[CONFIG.positionsKey] = {};
		if (typeof exportRoot.gameState[CONFIG.completeKey] === "undefined") exportRoot.gameState[CONFIG.completeKey] = false;
		
		if (!exportRoot.saveState) {
		    exportRoot.saveState = function() {
		        try { localStorage.setItem(CONFIG.storageKey, JSON.stringify(exportRoot.gameState)); } catch (e) {}
		    };
		}
		
		// =====================================================
		// CHARACTER
		// =====================================
		function createCharacterController(characterMC) {
		    var resetTimer = null;
		    return {
		        play: function(state) {
		            if (!characterMC) return;
		            if (resetTimer) clearTimeout(resetTimer);
		            if (state === "correct") {
		                characterMC.gotoAndStop(3);
		                resetTimer = setTimeout(function() { if (characterMC) characterMC.gotoAndStop(0); }, 1500);
		            } else if (state === "wrong") {
		                characterMC.gotoAndStop(2);
		                resetTimer = setTimeout(function() { if (characterMC) characterMC.gotoAndStop(0); }, 1500);
		            } else {
		                characterMC.gotoAndStop(0);
		            }
		        },
		        reset: function() {
		            if (resetTimer) clearTimeout(resetTimer);
		            if (characterMC) characterMC.gotoAndStop(0);
		        }
		    };
		}
		var character = createCharacterController(exportRoot.Emoji_result || exportRoot.Huuhduu);
		
		var INPUT_NAMES = Object.keys(CONFIG.inputs);
		var autoNextTriggered = !!exportRoot.gameState[CONFIG.completeKey];
		
		function playSound(type) {
		    try { new Audio(CONFIG.soundPaths[type]).play().catch(function() {}); } catch (e) {}
		}
		
		// =====================================================
		// HTML INPUT HELPERS
		// =====================================================
		function getInputDomId(name) { return "html_" + CONFIG.lessonId + "_" + CONFIG.exerciseId + "_" + name; }
		
		function createOrGetHtmlInput(name) {
		    var id = getInputDomId(name);
		    var input = document.getElementById(id);
		
		    if (!input) {
		        input = document.createElement("input");
		        input.type = "text";
		        input.id = id;
		        input.inputMode = "numeric";
		        input.maxLength = (name === "input_1_14") ? 2 : 1;
		
		        input.style.position = "fixed";
		        input.style.zIndex = "99999";
		        input.style.boxSizing = "border-box";
		        input.style.textAlign = "center";
		        input.style.fontFamily = "'Rubik', Arial, sans-serif";
		        input.style.fontWeight = "700";
		        
		        input.style.background = "transparent"; 
		        input.style.border = "none";
		        input.style.outline = "none";
		        input.style.padding = "0";
		        input.style.margin = "0";
		
		        document.body.appendChild(input);
		    }
		    input.style.opacity = "1";
		    input.style.pointerEvents = "auto";
		    
		    return input;
		}
		
		function hideAllHtmlInputs() {
		    INPUT_NAMES.forEach(function(name) {
		        var input = document.getElementById(getInputDomId(name));
		        if (input) {
		            input.style.opacity = "0";
		            input.style.pointerEvents = "none";
		        }
		    });
		}
		
		function positionHtmlInput(name) {
		    var clip = exportRoot[name];
		    var input = document.getElementById(getInputDomId(name));
		    var canvas = exportRoot.stage ? exportRoot.stage.canvas : document.querySelector("canvas");
		
		    if (!clip || !input || !canvas || !exportRoot.stage) return;
		
		    var canvasRect = canvas.getBoundingClientRect();
		    var stageScaleX = exportRoot.stage.scaleX || 1;
		    var stageScaleY = exportRoot.stage.scaleY || 1;
		    var browserScaleX = canvasRect.width / canvas.width;
		    var browserScaleY = canvasRect.height / canvas.height;
		
		    var b = clip.getBounds() || clip.nominalBounds || {width: 46, height: 46};
		    var size = { width: b.width, height: b.height };
		    var globalPos = clip.localToGlobal(0, 0);
		
		    var width = (size.width * stageScaleX * browserScaleX) * 0.9;
		    var height = (size.height * stageScaleY * browserScaleY) * 0.9;
		
		    var left = canvasRect.left + (globalPos.x * browserScaleX) - (width * 0.5);
		    var top = canvasRect.top + (globalPos.y * browserScaleY) - (height * 0.5);
		
		    input.style.left = left + "px";
		    input.style.top = top + "px";
		    input.style.width = width + "px";
		    input.style.height = height + "px";
		    
		    input.style.fontSize = Math.max(16, Math.floor(height * 0.7)) + "px";
		    input.style.lineHeight = Math.floor(height) + "px";
		}
		
		function positionAllHtmlInputs() {
		    INPUT_NAMES.forEach(positionHtmlInput);
		}
		
		// ЗАСВАРЛАГДСАН ХЭСЭГ: Зөвхөн текстийн өнгийг сольж, background-г үргэлж transparent байлгана.
		function paintInputState(input, state) {
		    if (!input) return;
		    
		    input.style.backgroundColor = "transparent"; // Арын дэвсгэр үргэлж нэвт гэрэлтэнэ
		    
		    if (state === "correct") {
		        input.style.color = "#1F5F1A"; // Зөв бол ногоон текст
		    } else if (state === "wrong") {
		        input.style.color = "#E54848"; // Буруу бол улаан текст
		    } else {
		        input.style.color = "#222222"; // Хэвийн үед хар
		    }
		}
		
		function isCorrect(name, value) { return String(value || "").trim() === String(CONFIG.inputs[name]); }
		
		// =====================================================
		// CHECK LOGIC
		// =====================================================
		function checkAllAnswers() {
		    var allCorrect = true;
		
		    INPUT_NAMES.forEach(function(name) {
		        var input = document.getElementById(getInputDomId(name));
		        if (!input) { allCorrect = false; return; }
		        var value = String(input.value || "").trim();
		        if (value === "" || !isCorrect(name, value)) allCorrect = false;
		    });
		
		    if (allCorrect && !autoNextTriggered) {
		        autoNextTriggered = true;
		        exportRoot.gameState[CONFIG.completeKey] = true;
		        exportRoot.saveState();
		        if (exportRoot.refreshNavButtons) exportRoot.refreshNavButtons();
		
		        INPUT_NAMES.forEach(function(n) {
		            var locked = document.getElementById(getInputDomId(n));
		            if (locked) locked.disabled = true;
		        });
		
		        setTimeout(function() {
		            hideAllHtmlInputs(); 
		            exportRoot.gotoAndStop(CONFIG.nextFrame);
		        }, CONFIG.autoNextDelay);
		    }
		}
		
		// =====================================================
		// SETUP
		// =====================================================
		function setupSingleHtmlInput(name) {
		    var clip = exportRoot[name];
		    if (!clip) return;
		
		    var input = createOrGetHtmlInput(name);
		    clip.alpha = 0.01;
		    clip.mouseEnabled = false;
		
		    input.value = String(exportRoot.gameState[CONFIG.positionsKey][name] || "");
		    input.disabled = !!exportRoot.gameState[CONFIG.completeKey];
		
		    if (input.value !== "") {
		        paintInputState(input, isCorrect(name, input.value) ? "correct" : "wrong");
		    } else {
		        paintInputState(input, "default");
		    }
		
		    input.oninput = function() {
		        var maxLen = (name === "input_1_14") ? 2 : 1;
		        this.value = String(this.value || "").replace(/[^0-9]/g, "").slice(0, maxLen);
		        exportRoot.gameState[CONFIG.positionsKey][name] = this.value;
		        exportRoot.saveState();
		        
		        if (this.value !== "" && this.value.length >= maxLen) {
		            paintInputState(this, isCorrect(name, this.value) ? "correct" : "wrong");
					exportRoot.playCharacterAnimation(isCorrect(name, this.value) ? "correct" : "wrong");
		        } else {
		            paintInputState(this, "default");
		        }
		        checkAllAnswers(); 
		    };
		
		    input.onfocus = function() { playSound("click"); };
		    positionHtmlInput(name);
		}
		
		function setupAllHtmlInputs() {
		    INPUT_NAMES.forEach(setupSingleHtmlInput);
		    positionAllHtmlInputs();
		}
		
		// =====================================================
		// START
		// =====================================================
		setupAllHtmlInputs();
		
		if (!exportRoot.resizeHandler) {
		    exportRoot.resizeHandler = function() { positionAllHtmlInputs(); };
		    window.addEventListener("resize", exportRoot.resizeHandler);
		}
		
		if (!exportRoot.tickAttached && createjs && createjs.Ticker) {
		    createjs.Ticker.addEventListener("tick", positionAllHtmlInputs);
		    exportRoot.tickAttached = true;
		}
		
		// =====================================================
		// EXECUTION
		// =====================================
		if (exportRoot.help_popup) {
		    exportRoot.help_popup.visible = false;
		    exportRoot.help_popup.stop();
		}
		
		console.log("exportRoot.refreshNavButtons");
		if (exportRoot.refreshNavButtons) {
			console.log("exportRoot.refreshNavButtons");
			exportRoot.refreshNavButtons();
		}
		
		exportRoot.stopInstruction();
		if (!exportRoot.gameState[CONFIG.completeKey]) {
		    setTimeout(function() { 
		        if(exportRoot.playInstruction) exportRoot.playInstruction(); 
		    }, 500);
		}
		
		exportRoot.on("removed", function() { 
		    if(exportRoot.stopInstruction) exportRoot.stopInstruction(); 
		    hideAllHtmlInputs(); 
		});
		var exportRoot = this;
		exportRoot.stop();
		
		var characterMC = exportRoot.Emoji_result;
		var characterResetTimer = null;
		
		var soundPaths = {
			correct: "./sounds/voice_correct.mp3",
			wrong: "./sounds/voice_wrong.mp3",
			click: "./sounds/click.mp3"
		};
		
		function playSound(type) {
		    try { new Audio(soundPaths[type]).play().catch(function() {}); } catch (e) {}
		}
		
		exportRoot.playCharacterAnimation = function(state) {
			if (!characterMC) return;
			if (characterResetTimer) clearTimeout(characterResetTimer);
			playSound(state);
			if (state === "correct") {
				characterMC.gotoAndStop(3);
				characterResetTimer = setTimeout(function () {
					if (characterMC) characterMC.gotoAndStop(0);
				}, 2000);
			} else if (state === "wrong") {
				characterMC.gotoAndStop(2);
				characterResetTimer = setTimeout(function () {
					if (characterMC) characterMC.gotoAndStop(0);
				}, 2000);
			} else {
				characterMC.gotoAndStop(0);
			}
		}
		var exportRoot = this;
		
		function applyTextStyling(textObj, opts) {
			if (!textObj || !(textObj instanceof createjs.Text) || !textObj.parent) return;
		
			opts = opts || {};
		
			// Фонт тохиргоо - Default-оор Rubik Bold ашиглана
			var fontSize = opts.fontSize || textObj.font.split('px')[0] || "40"; 
			var fontStyle = opts.fontStyle || "bold";
			var fontFamily = opts.fontFamily || "'Rubik', sans-serif";
			
			// textObj-ийн фонтыг шинэчлэх
			textObj.font = fontStyle + " " + fontSize + "px " + fontFamily;
		
			var outlineColor = opts.outlineColor || "#461A17";
			var outlineSize = opts.outlineSize || 6;
			var fillColor = opts.fillColor || "#FFFFFF";
			var shadowColor = opts.shadowColor || "rgba(60, 20, 0, 0.4)";
			var pad = opts.pad || 60;
		
			var savedX = textObj.x;
			var savedY = textObj.y;
			var parent = textObj.parent;
			var cloneName = "__strokeClone_" + (textObj.name || "text");
		
			// Өмнө үлдсэн ижил clone-уудыг parent-оос цэвэрлэнэ
			for (var i = parent.numChildren - 1; i >= 0; i--) {
				var child = parent.getChildAt(i);
				if (child && child.name === cloneName) {
					if (child.cacheCanvas) child.uncache();
					parent.removeChild(child);
				}
			}
		
			// Хуучин cache арилгана
			if (textObj.cacheCanvas) {
				textObj.uncache();
			}
		
			textObj.outline = null;
			textObj.color = fillColor;
			textObj.shadow = new createjs.Shadow(shadowColor, 3, 3, 6);
		
			// Stroke үүсгэхдээ шинэчлэгдсэн фонтыг ашиглана
			var strokeText = new createjs.Text(textObj.text, textObj.font, outlineColor);
			strokeText.name = cloneName;
			strokeText.textAlign = textObj.textAlign;
			strokeText.textBaseline = textObj.textBaseline;
			strokeText.x = savedX;
			strokeText.y = savedY;
			strokeText.scaleX = textObj.scaleX;
			strokeText.scaleY = textObj.scaleY;
			strokeText.rotation = textObj.rotation;
			strokeText.skewX = textObj.skewX;
			strokeText.skewY = textObj.skewY;
			strokeText.regX = textObj.regX;
			strokeText.regY = textObj.regY;
			strokeText.outline = outlineSize;
			strokeText.shadow = null;
			strokeText.mouseEnabled = false;
		
			var idx = parent.getChildIndex(textObj);
			parent.addChildAt(strokeText, idx);
		
			textObj._strokeClone = strokeText;
		
			// Cache хэрэглэх
			var bounds = textObj.getBounds();
			if (bounds) {
				var cacheX = bounds.x - pad;
				var cacheY = bounds.y - pad;
				var cacheW = bounds.width + pad * 2;
				var cacheH = bounds.height + pad * 2;
		
				if (strokeText.cacheCanvas) strokeText.uncache();
				if (textObj.cacheCanvas) textObj.uncache();
		
				strokeText.cache(cacheX, cacheY, cacheW, cacheH);
				textObj.cache(cacheX, cacheY, cacheW, cacheH);
			}
		
			// Cleanup logic
			if (textObj._onRemovedCleanup) {
				textObj.off("removed", textObj._onRemovedCleanup);
			}
		
			textObj._onRemovedCleanup = function () {
				if (strokeText) {
					if (strokeText.cacheCanvas) strokeText.uncache();
					if (strokeText.parent) {
						strokeText.parent.removeChild(strokeText);
					}
				}
				if (textObj.cacheCanvas) {
					textObj.uncache();
				}
				textObj._strokeClone = null;
			};
		
			textObj.on("removed", textObj._onRemovedCleanup);
		
			// Байрлалыг баталгаажуулах
			textObj.x = savedX;
			textObj.y = savedY;
			strokeText.x = savedX;
			strokeText.y = savedY;
		}
		
		var exerciseText = {
			mn: {
				title: "ТОГЛООМЫН ЗАМ",
				instruction: "Тоглоомын замын будсан хэсгүүдийг ажиглаарай. \n1 метр замын хэдэн хэсэг нь ягаан өнгөтэй байна вэ? \nТохирох энгийн бутархайг нөхөж бичээрэй."
			},
			kz: {
				title: "ОЙЫН ЖОЛЫ",
				instruction: "Ойын жолының боялған бөліктеріне назар аударыңыз. \n1 метр жолдың неше бөлігі қызғылт түсті? \nСәйкес жай бөлшекті толықтырып жазыңыз."
			},
			tuva: {
				title: "НААДАМ ЧОЛ",
				instruction: "Наадам чолунуң өөделген кезектерин ажыглаңар. \n1 метр чолнуң каш үеези ягаан өңгүлүг болур? \nТуда келген эңгин бөлүктү дүптеп бижиңер."
			},
			sign: {
				title: "ТОГЛООМЫН ЗАМ",
				instruction: "Тоглоомын замын будсан хэсгүүдийг ажиглаарай. \n1 метр замын хэдэн хэсэг нь ягаан өнгөтэй байна вэ? \nТохирох энгийн бутархайг нөхөж бичээрэй."
			}
		};
		
		var lang = exportRoot.gameState.selectedLanguage || "mn";
		var texts = exerciseText[lang];
		
		function findTextByContent(container, content) {
			if (!container) return null;
		
			if (container instanceof createjs.Text && container.text === content) {
				return container;
			}
		
			if (!container.numChildren) return null;
		
			for (var i = 0; i < container.numChildren; i++) {
				var found = findTextByContent(container.getChildAt(i), content);
				if (found) return found;
			}
		
			return null;
		}
		
		var txt_title = findTextByContent(exportRoot, "txt_title");
		var txt_instruction = findTextByContent(exportRoot, "txt_instruction");
		
		
		console.log("exerciseText[lang]");
		console.log(exerciseText[lang]);
		console.log(exportRoot.txt_title);
		if (txt_title) {
			txt_title.text = texts.title;
			applyTextStyling(txt_title, {
				outlineSize: 15,
				outlineColor: "#461A17",
				fillColor: "#FFFFFF",
				pad: 80
			});
		}else {
			console.log("exportRoot.txt_title not found");
		}
		
		console.log('--------------------------');
		console.log(exportRoot);
		console.log('--------------------------');
		
		if (txt_instruction) {
			txt_instruction.text = texts.instruction;
		}
	}
	this.frame_9 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		// =====================================================
		// CONFIG
		// =====================================================
		var CONFIG = {
			lessonId: "lesson6",
			lessonFolder: "Lesson6",
			videoId: "map01",
			videoFile: "./videos/lesson6_map1.mp4",
			containerId: "success-video-map01",
			nextFrame: 10,
			backgroundColor: "#6B4FBB",
			zIndex: "9999",
			autoSkipOnError: true,
			autoMarkWatchedOnSkip: true
		};
		
		// =====================================================
		// INIT
		// =====================================================
		if (!exportRoot.gameState) {
			exportRoot.gameState = {};
		}
		
		if (!exportRoot.gameState.videosWatched) {
			exportRoot.gameState.videosWatched = [];
		}
		
		if (!exportRoot.saveState) {
			exportRoot.saveState = function() {};
		}
		
		var videoContainer = null;
		var videoElement = null;
		var resizeHandler = null;
		var started = false;
		var endedOrSkipped = false;
		
		// =====================================================
		// HELPERS
		// =====================================================
		function hasWatchedVideo() {
			return exportRoot.gameState.videosWatched.indexOf(CONFIG.videoId) !== -1;
		}
		
		function markVideoWatched() {
			if (!hasWatchedVideo()) {
				exportRoot.gameState.videosWatched.push(CONFIG.videoId);
				exportRoot.saveState();
			}
		}
		
		function lockPageScroll() {
			document.body.style.overflow = "hidden";
			document.documentElement.style.overflow = "hidden";
		}
		
		function unlockPageScroll() {
			document.body.style.overflow = "";
			document.documentElement.style.overflow = "";
		}
		
		function cleanup() {
			unlockPageScroll();
		
			if (videoElement) {
				try {
					videoElement.pause();
					videoElement.removeAttribute("src");
					videoElement.load();
				} catch (e) {}
				videoElement = null;
			}
		
			if (videoContainer && videoContainer.parentNode) {
				videoContainer.parentNode.removeChild(videoContainer);
				videoContainer = null;
			}
		
			if (resizeHandler) {
				window.removeEventListener("resize", resizeHandler);
				resizeHandler = null;
			}
		}
		
		function updateContainerPosition() {
			if (!videoContainer) return;
		
			var canvas = document.getElementById("canvas");
			if (!canvas) return;
		
			var rect = canvas.getBoundingClientRect();
		
			videoContainer.style.left = rect.left + "px";
			videoContainer.style.top = rect.top + "px";
			videoContainer.style.width = rect.width + "px";
			videoContainer.style.height = rect.height + "px";
		}
		
		function goToNextExercise(reason) {
			if (endedOrSkipped) return;
			endedOrSkipped = true;
		
			if (CONFIG.autoMarkWatchedOnSkip) {
				markVideoWatched();
			}
		
			cleanup();
		
			exportRoot.gameState.currentFrame = CONFIG.nextFrame;
			exportRoot.saveState();
			exportRoot.gotoAndStop(CONFIG.nextFrame);
		}
		
		function tryPlayVideo() {
			if (!videoElement || started) return;
			started = true;
		
			var playPromise = videoElement.play();
		
			if (playPromise && typeof playPromise.catch === "function") {
				playPromise.catch(function(err) {
					console.log("Video autoplay failed:", err);
					goToNextExercise("autoplay_failed");
				});
			}
		}
		
		// =====================================================
		// MAIN
		// =====================================================
		function createSuccessVideo() {
			var existingContainer = document.getElementById(CONFIG.containerId);
			if (existingContainer && existingContainer.parentNode) {
				existingContainer.parentNode.removeChild(existingContainer);
			}
		
			var canvas = document.getElementById("canvas");
			if (!canvas) {
				goToNextExercise("canvas_missing");
				return;
			}
		
			if (hasWatchedVideo()) {
				goToNextExercise("already_watched");
				return;
			}
		
			lockPageScroll();
		
			var rect = canvas.getBoundingClientRect();
		
			videoContainer = document.createElement("div");
			videoContainer.id = CONFIG.containerId;
			videoContainer.style.position = "fixed";
			videoContainer.style.left = rect.left + "px";
			videoContainer.style.top = rect.top + "px";
			videoContainer.style.width = rect.width + "px";
			videoContainer.style.height = rect.height + "px";
			videoContainer.style.backgroundColor = CONFIG.backgroundColor;
			videoContainer.style.zIndex = CONFIG.zIndex;
			videoContainer.style.overflow = "hidden";
			videoContainer.style.margin = "0";
			videoContainer.style.padding = "0";
			videoContainer.style.boxSizing = "border-box";
		
			videoElement = document.createElement("video");
			videoElement.src = CONFIG.videoFile;
			videoElement.style.width = "100%";
			videoElement.style.height = "100%";
			videoElement.style.objectFit = "contain";
			videoElement.style.display = "block";
			videoElement.preload = "auto";
			videoElement.playsInline = true;
			videoElement.setAttribute("playsinline", "true");
			videoElement.setAttribute("webkit-playsinline", "true");
		
			// Зарим browser autoplay дээр дууг хаадаг.
			// Хэрэв заавал sound-тай autoplay хэрэгтэй бол browser policy-оос хамаарна.
			// Найдвартай ажиллуулахын тулд muted=true болгож болно.
			videoElement.muted = false;
			videoElement.autoplay = false;
			videoElement.controls = false;
		
			videoContainer.appendChild(videoElement);
			document.body.appendChild(videoContainer);
		
			videoElement.addEventListener("loadeddata", function() {
				tryPlayVideo();
			});
		
			videoElement.addEventListener("canplay", function() {
				tryPlayVideo();
			});
		
			videoElement.addEventListener("ended", function() {
				markVideoWatched();
				setTimeout(function() {
					goToNextExercise("ended");
				}, 500);
			});
		
			videoElement.addEventListener("error", function() {
				console.log("Video load error:", videoElement.error, CONFIG.videoFile);
				if (CONFIG.autoSkipOnError) {
					goToNextExercise("error");
				}
			});
		
			resizeHandler = function() {
				updateContainerPosition();
			};
		
			window.addEventListener("resize", resizeHandler);
			updateContainerPosition();
		
			// Хэрэв ямар ч event trigger болохгүй гацвал fallback
			setTimeout(function() {
				if (!started && !endedOrSkipped) {
					console.log("Video start timeout, skipping:", CONFIG.videoFile);
					goToNextExercise("timeout");
				}
			}, 4000);
		}
		
		exportRoot.on("removed", cleanup);
		
		createSuccessVideo();
	}
	this.frame_10 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		// =====================================================
		// CONFIG
		// =====================================
		var CONFIG = {
			lessonId: "lesson6",
			exerciseId: "ex02",
			exerciseNumber: 2,
			storageKey: "lesson6_gameState",
			backFrame: 8,
			nextFrame: 11,
			autoNextDelay: 1500,
			soundPaths: {
				correct: "./sounds/voice_correct.mp3",
				wrong: "./sounds/voice_wrong.mp3",
				click: "./sounds/click.mp3",
				instruction: "./sounds/instruction_ex02.mp3"
			},
			// Асуулт 1: Зүүн талын товчнууд
			q1_buttons: ["btn_2_1_1", "btn_2_1_2", "btn_2_1_3", "btn_2_1_4"], // Гуравны нэг, Гуравны хоёр...
			q1_correctIndex: 0, // "Гуравны нэг" (Эхний товч)
		
			// Асуулт 2: Баруун талын товчнууд
			q2_buttons: ["btn_2_2_1", "btn_2_2_2", "btn_2_2_3", "btn_2_2_4"], // Дөрөвний нэг, Дөрөвний хоёр...
			q2_correctIndex: 2 // "Дөрөвний гурав" (Гурав дахь товч)
		};
		
		exportRoot.currentExerciseId = CONFIG.exerciseId;
		exportRoot.backBtn = CONFIG.backFrame;
		exportRoot.nextBtn = CONFIG.nextFrame;
		CONFIG.completeKey = "exercise" + CONFIG.exerciseNumber + "Complete";
		CONFIG.answersKey = "exercise" + CONFIG.exerciseNumber + "Answers";
		
		// =====================================================
		// STATE & INIT
		// =====================
		if (!exportRoot.gameState) exportRoot.gameState = {};
		if (!exportRoot.gameState[CONFIG.answersKey]) {
			exportRoot.gameState[CONFIG.answersKey] = {
				q1: null,
				q2: null
			};
		}
		if (typeof exportRoot.gameState[CONFIG.completeKey] === "undefined") {
			exportRoot.gameState[CONFIG.completeKey] = false;
		}
		
		exportRoot.saveState = function () {
			try {
				localStorage.setItem(CONFIG.storageKey, JSON.stringify(exportRoot.gameState));
			} catch (e) {}
		};
		
		function playSound(type) {
			try {
				new Audio(CONFIG.soundPaths[type]).play().catch(function () {});
			} catch (e) {}
		}
		
		// =====================================================
		// BUTTON LOGIC
		// =====================
		function setupQuestion(buttonsArray, correctIdx, stateKey) {
			buttonsArray.forEach(function (btnName, idx) {
				var btn = exportRoot[btnName];
				if (!btn) return;
		
				btn.cursor = "pointer";
				btn.gotoAndStop(0); // Хэвийн төлөв (Frame 1)
		
				// Хэрэв өмнө нь зөв хариулсан бол сэргээх
				if (exportRoot.gameState[CONFIG.answersKey][stateKey] === idx) {
					btn.gotoAndStop(1); // Сонгогдсон/Зөв төлөв (Frame 2)
				}
		
				btn.on("click", function () {
					if (exportRoot.gameState[CONFIG.completeKey]) return; // Дууссан бол дарагдахгүй
					if (exportRoot.gameState[CONFIG.answersKey][stateKey] !== null) return; // Аль хэдийн зөв хариулсан бол
		
					playSound("click");
		
					if (idx === correctIdx) {
						// ЗӨВ
						exportRoot.playCharacterAnimation("correct");
						btn.gotoAndStop(1); // Зөв болсон эффект (Frame 2)
		
						// Change to green color
						var colorFilter = new createjs.ColorFilter(0, 1, 0, 1, 0, 100, 0, 0);
						btn.filters = [colorFilter];
						btn.cache(0, 0, btn.nominalBounds.width, btn.nominalBounds.height);
		
						exportRoot.gameState[CONFIG.answersKey][stateKey] = idx;
						exportRoot.saveState();
		
						checkAllDone();
					} else {
						// БУРУУ
						exportRoot.playCharacterAnimation("wrong");
		
						// Change to red color
						var colorFilter = new createjs.ColorFilter(1, 0, 0, 1, 100, 0, 0, 0);
						btn.filters = [colorFilter];
						btn.cache(0, 0, btn.nominalBounds.width, btn.nominalBounds.height);
		
						// Shake effect
						createjs.Tween.get(btn)
							.to({
								x: btn.x + 5
							}, 50)
							.to({
								x: btn.x - 5
							}, 50)
							.to({
								x: btn.x
							}, 50)
							.call(function () {
								// Remove red color after shake animation
								btn.filters = [];
								btn.updateCache();
							});
					}
				});
			});
		}
		
		function checkAllDone() {
			var q1Done = exportRoot.gameState[CONFIG.answersKey].q1 !== null;
			var q2Done = exportRoot.gameState[CONFIG.answersKey].q2 !== null;
		
			if (q1Done && q2Done && !exportRoot.gameState[CONFIG.completeKey]) {
				exportRoot.gameState[CONFIG.completeKey] = true;
				exportRoot.saveState();
		
				if (exportRoot.refreshNavButtons) exportRoot.refreshNavButtons();
		
				setTimeout(function () {
					exportRoot.gotoAndStop(CONFIG.nextFrame);
				}, CONFIG.autoNextDelay);
			}
		}
		
		// =====================================================
		// EXECUTION
		// =====================
		// Товчнуудыг идэвхжүүлэх
		setupQuestion(CONFIG.q1_buttons, CONFIG.q1_correctIndex, "q1");
		setupQuestion(CONFIG.q2_buttons, CONFIG.q2_correctIndex, "q2");
		
		if (exportRoot.help_popup) {
			exportRoot.help_popup.visible = false;
			exportRoot.help_popup.stop();
		}
		
		if (exportRoot.refreshNavButtons) {
			exportRoot.refreshNavButtons();
		}
		if (exportRoot.stopInstruction) exportRoot.stopInstruction();
		if (!exportRoot.gameState[CONFIG.completeKey]) {
			setTimeout(function () {
				if (exportRoot.playInstruction) exportRoot.playInstruction();
			}, 500);
		}
		
		exportRoot.on("removed", function () {
			if (exportRoot.stopInstruction) exportRoot.stopInstruction();
		});
		function applyTextStyling(textObj, opts) {
			if (!textObj || !(textObj instanceof createjs.Text) || !textObj.parent) return;
		
			opts = opts || {};
		
			// Фонт тохиргоо - Default-оор Rubik Bold ашиглана
			var fontSize = opts.fontSize || textObj.font.split('px')[0] || "40"; 
			var fontStyle = opts.fontStyle || "bold";
			var fontFamily = opts.fontFamily || "'Rubik', sans-serif";
			
			// textObj-ийн фонтыг шинэчлэх
			textObj.font = fontStyle + " " + fontSize + "px " + fontFamily;
		
			var outlineColor = opts.outlineColor || "#461A17";
			var outlineSize = opts.outlineSize || 6;
			var fillColor = opts.fillColor || "#FFFFFF";
			var shadowColor = opts.shadowColor || "rgba(60, 20, 0, 0.4)";
			var pad = opts.pad || 60;
		
			var savedX = textObj.x;
			var savedY = textObj.y;
			var parent = textObj.parent;
			var cloneName = "__strokeClone_" + (textObj.name || "text");
		
			// Өмнө үлдсэн ижил clone-уудыг parent-оос цэвэрлэнэ
			for (var i = parent.numChildren - 1; i >= 0; i--) {
				var child = parent.getChildAt(i);
				if (child && child.name === cloneName) {
					if (child.cacheCanvas) child.uncache();
					parent.removeChild(child);
				}
			}
		
			// Хуучин cache арилгана
			if (textObj.cacheCanvas) {
				textObj.uncache();
			}
		
			textObj.outline = null;
			textObj.color = fillColor;
			textObj.shadow = new createjs.Shadow(shadowColor, 3, 3, 6);
		
			// Stroke үүсгэхдээ шинэчлэгдсэн фонтыг ашиглана
			var strokeText = new createjs.Text(textObj.text, textObj.font, outlineColor);
			strokeText.name = cloneName;
			strokeText.textAlign = textObj.textAlign;
			strokeText.textBaseline = textObj.textBaseline;
			strokeText.x = savedX;
			strokeText.y = savedY;
			strokeText.scaleX = textObj.scaleX;
			strokeText.scaleY = textObj.scaleY;
			strokeText.rotation = textObj.rotation;
			strokeText.skewX = textObj.skewX;
			strokeText.skewY = textObj.skewY;
			strokeText.regX = textObj.regX;
			strokeText.regY = textObj.regY;
			strokeText.outline = outlineSize;
			strokeText.shadow = null;
			strokeText.mouseEnabled = false;
		
			var idx = parent.getChildIndex(textObj);
			parent.addChildAt(strokeText, idx);
		
			textObj._strokeClone = strokeText;
		
			// Cache хэрэглэх
			var bounds = textObj.getBounds();
			if (bounds) {
				var cacheX = bounds.x - pad;
				var cacheY = bounds.y - pad;
				var cacheW = bounds.width + pad * 2;
				var cacheH = bounds.height + pad * 2;
		
				if (strokeText.cacheCanvas) strokeText.uncache();
				if (textObj.cacheCanvas) textObj.uncache();
		
				strokeText.cache(cacheX, cacheY, cacheW, cacheH);
				textObj.cache(cacheX, cacheY, cacheW, cacheH);
			}
		
			// Cleanup logic
			if (textObj._onRemovedCleanup) {
				textObj.off("removed", textObj._onRemovedCleanup);
			}
		
			textObj._onRemovedCleanup = function () {
				if (strokeText) {
					if (strokeText.cacheCanvas) strokeText.uncache();
					if (strokeText.parent) {
						strokeText.parent.removeChild(strokeText);
					}
				}
				if (textObj.cacheCanvas) {
					textObj.uncache();
				}
				textObj._strokeClone = null;
			};
		
			textObj.on("removed", textObj._onRemovedCleanup);
		
			// Байрлалыг баталгаажуулах
			textObj.x = savedX;
			textObj.y = savedY;
			strokeText.x = savedX;
			strokeText.y = savedY;
		}
		
		var exerciseText = {
			mn: {
				title: "ЭРГЭДЭГ ХҮРД",
				instruction: "Хүрдний будагдаагүй хэсэгт тохирох хариултыг сонгоно уу."
			},
			kz: {
				title: "АЙНАЛМАЛЫ ДӨҢГЕЛЕК",
				instruction: "Дөңгелектің боялмаған бөлігіне сәйкес келетін жауапты таңдаңыз."
			},
			tuva: {
				title: "ЭРТКЕН ХҮР",
				instruction: "Хүрнүң өөделбээн кезээнге тааржыыр харыыны шылыңар."
			},
			sign: {
				title: "ЭРГЭДЭГ ХҮРД",
				instruction: "Хүрдний будагдаагүй хэсэгт тохирох хариултыг сонгоно уу."
			}
		};
		
		var lang = exportRoot.gameState.selectedLanguage || "mn";
		var texts = exerciseText[lang];
		
		function findTextByContent(container, content) {
			if (!container) return null;
		
			if (container instanceof createjs.Text && container.text === content) {
				return container;
			}
		
			if (!container.numChildren) return null;
		
			for (var i = 0; i < container.numChildren; i++) {
				var found = findTextByContent(container.getChildAt(i), content);
				if (found) return found;
			}
		
			return null;
		}
		
		var txt_title = findTextByContent(exportRoot, "txt_title");
		var txt_instruction = findTextByContent(exportRoot, "txt_instruction");
		
		
		console.log("exerciseText[lang]");
		console.log(exerciseText[lang]);
		console.log(exportRoot.txt_title);
		if (txt_title) {
			txt_title.text = texts.title;
			applyTextStyling(txt_title, {
				outlineSize: 15,
				outlineColor: "#461A17",
				fillColor: "#FFFFFF",
				pad: 80
			});
		}else {
			console.log("exportRoot.txt_title not found");
		}
		
		console.log('--------------------------');
		console.log(exportRoot);
		console.log('--------------------------');
		
		if (txt_instruction) {
			txt_instruction.text = texts.instruction;
		}
	}
	this.frame_11 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		// =====================================================
		// CONFIG
		// =====================================================
		var CONFIG = {
			lessonId: "lesson6",
			lessonFolder: "Lesson6",
			videoId: "map02",
			videoFile: "./videos/lesson6_map2.mp4",
			containerId: "success-video-map02",
			nextFrame: 12,
			backgroundColor: "#6B4FBB",
			zIndex: "9999",
			autoSkipOnError: true,
			autoMarkWatchedOnSkip: true
		};
		
		// =====================================================
		// INIT
		// =====================================================
		if (!exportRoot.gameState) {
			exportRoot.gameState = {};
		}
		
		if (!exportRoot.gameState.videosWatched) {
			exportRoot.gameState.videosWatched = [];
		}
		
		if (!exportRoot.saveState) {
			exportRoot.saveState = function() {};
		}
		
		var videoContainer = null;
		var videoElement = null;
		var resizeHandler = null;
		var started = false;
		var endedOrSkipped = false;
		
		// =====================================================
		// HELPERS
		// =====================================================
		function hasWatchedVideo() {
			return exportRoot.gameState.videosWatched.indexOf(CONFIG.videoId) !== -1;
		}
		
		function markVideoWatched() {
			if (!hasWatchedVideo()) {
				exportRoot.gameState.videosWatched.push(CONFIG.videoId);
				exportRoot.saveState();
			}
		}
		
		function lockPageScroll() {
			document.body.style.overflow = "hidden";
			document.documentElement.style.overflow = "hidden";
		}
		
		function unlockPageScroll() {
			document.body.style.overflow = "";
			document.documentElement.style.overflow = "";
		}
		
		function cleanup() {
			unlockPageScroll();
		
			if (videoElement) {
				try {
					videoElement.pause();
					videoElement.removeAttribute("src");
					videoElement.load();
				} catch (e) {}
				videoElement = null;
			}
		
			if (videoContainer && videoContainer.parentNode) {
				videoContainer.parentNode.removeChild(videoContainer);
				videoContainer = null;
			}
		
			if (resizeHandler) {
				window.removeEventListener("resize", resizeHandler);
				resizeHandler = null;
			}
		}
		
		function updateContainerPosition() {
			if (!videoContainer) return;
		
			var canvas = document.getElementById("canvas");
			if (!canvas) return;
		
			var rect = canvas.getBoundingClientRect();
		
			videoContainer.style.left = rect.left + "px";
			videoContainer.style.top = rect.top + "px";
			videoContainer.style.width = rect.width + "px";
			videoContainer.style.height = rect.height + "px";
		}
		
		function goToNextExercise(reason) {
			if (endedOrSkipped) return;
			endedOrSkipped = true;
		
			if (CONFIG.autoMarkWatchedOnSkip) {
				markVideoWatched();
			}
		
			cleanup();
		
			exportRoot.gameState.currentFrame = CONFIG.nextFrame;
			exportRoot.saveState();
			exportRoot.gotoAndStop(CONFIG.nextFrame);
		}
		
		function tryPlayVideo() {
			if (!videoElement || started) return;
			started = true;
		
			var playPromise = videoElement.play();
		
			if (playPromise && typeof playPromise.catch === "function") {
				playPromise.catch(function(err) {
					console.log("Video autoplay failed:", err);
					goToNextExercise("autoplay_failed");
				});
			}
		}
		
		// =====================================================
		// MAIN
		// =====================================================
		function createSuccessVideo() {
			var existingContainer = document.getElementById(CONFIG.containerId);
			if (existingContainer && existingContainer.parentNode) {
				existingContainer.parentNode.removeChild(existingContainer);
			}
		
			var canvas = document.getElementById("canvas");
			if (!canvas) {
				goToNextExercise("canvas_missing");
				return;
			}
		
			if (hasWatchedVideo()) {
				goToNextExercise("already_watched");
				return;
			}
		
			lockPageScroll();
		
			var rect = canvas.getBoundingClientRect();
		
			videoContainer = document.createElement("div");
			videoContainer.id = CONFIG.containerId;
			videoContainer.style.position = "fixed";
			videoContainer.style.left = rect.left + "px";
			videoContainer.style.top = rect.top + "px";
			videoContainer.style.width = rect.width + "px";
			videoContainer.style.height = rect.height + "px";
			videoContainer.style.backgroundColor = CONFIG.backgroundColor;
			videoContainer.style.zIndex = CONFIG.zIndex;
			videoContainer.style.overflow = "hidden";
			videoContainer.style.margin = "0";
			videoContainer.style.padding = "0";
			videoContainer.style.boxSizing = "border-box";
		
			videoElement = document.createElement("video");
			videoElement.src = CONFIG.videoFile;
			videoElement.style.width = "100%";
			videoElement.style.height = "100%";
			videoElement.style.objectFit = "contain";
			videoElement.style.display = "block";
			videoElement.preload = "auto";
			videoElement.playsInline = true;
			videoElement.setAttribute("playsinline", "true");
			videoElement.setAttribute("webkit-playsinline", "true");
		
			// Зарим browser autoplay дээр дууг хаадаг.
			// Хэрэв заавал sound-тай autoplay хэрэгтэй бол browser policy-оос хамаарна.
			// Найдвартай ажиллуулахын тулд muted=true болгож болно.
			videoElement.muted = false;
			videoElement.autoplay = false;
			videoElement.controls = false;
		
			videoContainer.appendChild(videoElement);
			document.body.appendChild(videoContainer);
		
			videoElement.addEventListener("loadeddata", function() {
				tryPlayVideo();
			});
		
			videoElement.addEventListener("canplay", function() {
				tryPlayVideo();
			});
		
			videoElement.addEventListener("ended", function() {
				markVideoWatched();
				setTimeout(function() {
					goToNextExercise("ended");
				}, 500);
			});
		
			videoElement.addEventListener("error", function() {
				console.log("Video load error:", videoElement.error, CONFIG.videoFile);
				if (CONFIG.autoSkipOnError) {
					goToNextExercise("error");
				}
			});
		
			resizeHandler = function() {
				updateContainerPosition();
			};
		
			window.addEventListener("resize", resizeHandler);
			updateContainerPosition();
		
			// Хэрэв ямар ч event trigger болохгүй гацвал fallback
			setTimeout(function() {
				if (!started && !endedOrSkipped) {
					console.log("Video start timeout, skipping:", CONFIG.videoFile);
					goToNextExercise("timeout");
				}
			}, 4000);
		}
		
		exportRoot.on("removed", cleanup);
		
		createSuccessVideo();
	}
	this.frame_12 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		// =====================================================
		// CONFIG
		// =====================================
		var CONFIG = {
		    lessonId: "lesson6",
		    exerciseId: "ex03",
		    exerciseNumber: 3,
		    storageKey: "lesson6_gameState",
		    backFrame: 10, 
		    nextFrame: 13, 
		    autoNextDelay: 1500,
		    soundPaths: {
		        correct: "./sounds/voice_correct.mp3",
		        wrong: "./sounds/voice_wrong.mp3",
		        click: "./sounds/click.mp3",
		        instruction: "./sounds/instruction_ex03.mp3"
		    },
		    // Бүлэг тус бүрийн Цагаан нүхний тоо (total) болон ЗӨВ нүхний тоо (required)
		    groups: [
		        { id: 1, total: 6,  required: 2 }, // Эрвээхэй: 1, 2-р нүд ЗӨВ
		        { id: 2, total: 10, required: 5 }, // Далайн од: 1-5-р нүд ЗӨВ
		        { id: 3, total: 8,  required: 3 }, // Мэлхий: 1-3-р нүд ЗӨВ
		        { id: 4, total: 5,  required: 2 }  // Оцон шувуу: 1-2-р нүд ЗӨВ
		    ]
		};
		
		exportRoot.currentExerciseId = CONFIG.exerciseId;
		exportRoot.backBtn = CONFIG.backFrame;
		exportRoot.nextBtn = CONFIG.nextFrame;
		CONFIG.completeKey = "exercise" + CONFIG.exerciseNumber + "Complete";
		CONFIG.answersKey = "exercise" + CONFIG.exerciseNumber + "Answers";
		
		// =====================================================
		// STATE & INIT
		// =====================
		if (!exportRoot.gameState) exportRoot.gameState = {};
		
		// Хариултуудыг массив байдлаар хадгалах (аль нүдийг дарсан бэ гэдгийг хадгална)
		if (!exportRoot.gameState[CONFIG.answersKey] || typeof exportRoot.gameState[CONFIG.answersKey].g1 === "number") {
		    exportRoot.gameState[CONFIG.answersKey] = { g1: [], g2: [], g3: [], g4: [] };
		}
		
		if (typeof exportRoot.gameState[CONFIG.completeKey] === "undefined") {
		    exportRoot.gameState[CONFIG.completeKey] = false;
		}
		
		exportRoot.saveState = function() {
		    try { localStorage.setItem(CONFIG.storageKey, JSON.stringify(exportRoot.gameState)); } catch (e) {}
		};
		
		function playSound(type) {
		    try { new Audio(CONFIG.soundPaths[type]).play().catch(function(){}); } catch (e) {}
		}
		
		// =====================================================
		// BUTTON & TARGET LOGIC
		// =====================
		function setupExercise() {
		    CONFIG.groups.forEach(function(group) {
		        var clickedArray = exportRoot.gameState[CONFIG.answersKey]["g" + group.id];
		
		        // 1. Шар TARGET-уудыг (будах хэсэг) тохируулах
		        for (var t = 1; t <= group.required; t++) {
		            var targetName = "target_3_" + group.id + "_" + t;
		            var target = exportRoot[targetName];
		            if (target) {
		                // Хэрэв өмнө нь дарсан бол ил гаргана
		                target.visible = (clickedArray.indexOf(t) !== -1);
		                // Target нь товчны click-ийг хаахгүй байх тохиргоо
		                target.mouseEnabled = false; 
		                target.mouseChildren = false;
		            }
		        }
		
		        // 2. ЦАГААН НҮХНҮҮДИЙГ (товчнууд) тохируулах
		        for (var b = 1; b <= group.total; b++) {
		            (function(btnIndex) {
		                var btnName = "btn_3_" + group.id + "_" + btnIndex;
		                var btn = exportRoot[btnName];
		                
		                if (!btn) {
		                    console.log("Олдсонгүй: " + btnName);
		                    return;
		                }
		
		                btn.mouseEnabled = true;
		                btn.mouseChildren = false;
		                btn.cursor = "pointer";
		                
		                if (btn.hasEventListener("click")) {
		                    btn.removeAllEventListeners("click");
		                }
		
		                btn.on("click", function() {
		                    if (exportRoot.gameState[CONFIG.completeKey]) return;
		
		                    // ЗӨВ нүх (шар амьтанд харгалзах нүх) мөн эсэхийг шалгах
		                    if (btnIndex <= group.required) {
		                        var currentClicked = exportRoot.gameState[CONFIG.answersKey]["g" + group.id];
		                        
		                        if (currentClicked.indexOf(btnIndex) === -1) {
		                            playSound("click");
		                            currentClicked.push(btnIndex);
		                            exportRoot.saveState();
		
		                            // Харгалзах шар target-ийг ил гаргах
		                            var targetToShow = exportRoot["target_3_" + group.id + "_" + btnIndex];
		                            if (targetToShow) {
		                                targetToShow.visible = true;
										exportRoot.playCharacterAnimation("correct");
		                            }
		
		                            checkCompletion();
		                        }
		                    } 
		                    // БУРУУ нүх (шар биш амьтанд харгалзах нүх)
		                    else {
		                        exportRoot.playCharacterAnimation("wrong");
		                        createjs.Tween.get(btn).to({x: btn.x + 4}, 50).to({x: btn.x - 4}, 50).to({x: btn.x}, 50);
		                    }
		                });
		            })(b);
		        }
		    });
		}
		
		function checkCompletion() {
		    var allCorrect = true;
		
		    CONFIG.groups.forEach(function(group) {
		        var currentClicked = exportRoot.gameState[CONFIG.answersKey]["g" + group.id];
		        if (currentClicked.length !== group.required) {
		            allCorrect = false;
		        }
		    });
		
		    if (allCorrect && !exportRoot.gameState[CONFIG.completeKey]) {
		        exportRoot.gameState[CONFIG.completeKey] = true;
		        exportRoot.saveState();
		        exportRoot.playCharacterAnimation("correct");
		
		        if (exportRoot.refreshNavButtons) exportRoot.refreshNavButtons();
		
		        setTimeout(function() {
		            exportRoot.gotoAndStop(CONFIG.nextFrame);
		        }, CONFIG.autoNextDelay);
		    }
		}
		
		// =====================================================
		// START
		// =====================
		setupExercise();
		
		if (exportRoot.help_popup) {
		    exportRoot.help_popup.visible = false;
		    exportRoot.help_popup.stop();
		}
		
		if (exportRoot.refreshNavButtons) exportRoot.refreshNavButtons();
		if (exportRoot.stopInstruction) exportRoot.stopInstruction();
		if (!exportRoot.gameState[CONFIG.completeKey]) {
		    setTimeout(function() { 
		        if(exportRoot.playInstruction) exportRoot.playInstruction(); 
		    }, 500);
		}
		
		exportRoot.on("removed", function() { 
		    if(exportRoot.stopInstruction) exportRoot.stopInstruction(); 
		});
		function applyTextStyling(textObj, opts) {
			if (!textObj || !(textObj instanceof createjs.Text) || !textObj.parent) return;
		
			opts = opts || {};
		
			// Фонт тохиргоо - Default-оор Rubik Bold ашиглана
			var fontSize = opts.fontSize || textObj.font.split('px')[0] || "40"; 
			var fontStyle = opts.fontStyle || "bold";
			var fontFamily = opts.fontFamily || "'Rubik', sans-serif";
			
			// textObj-ийн фонтыг шинэчлэх
			textObj.font = fontStyle + " " + fontSize + "px " + fontFamily;
		
			var outlineColor = opts.outlineColor || "#461A17";
			var outlineSize = opts.outlineSize || 6;
			var fillColor = opts.fillColor || "#FFFFFF";
			var shadowColor = opts.shadowColor || "rgba(60, 20, 0, 0.4)";
			var pad = opts.pad || 60;
		
			var savedX = textObj.x;
			var savedY = textObj.y;
			var parent = textObj.parent;
			var cloneName = "__strokeClone_" + (textObj.name || "text");
		
			// Өмнө үлдсэн ижил clone-уудыг parent-оос цэвэрлэнэ
			for (var i = parent.numChildren - 1; i >= 0; i--) {
				var child = parent.getChildAt(i);
				if (child && child.name === cloneName) {
					if (child.cacheCanvas) child.uncache();
					parent.removeChild(child);
				}
			}
		
			// Хуучин cache арилгана
			if (textObj.cacheCanvas) {
				textObj.uncache();
			}
		
			textObj.outline = null;
			textObj.color = fillColor;
			textObj.shadow = new createjs.Shadow(shadowColor, 3, 3, 6);
		
			// Stroke үүсгэхдээ шинэчлэгдсэн фонтыг ашиглана
			var strokeText = new createjs.Text(textObj.text, textObj.font, outlineColor);
			strokeText.name = cloneName;
			strokeText.textAlign = textObj.textAlign;
			strokeText.textBaseline = textObj.textBaseline;
			strokeText.x = savedX;
			strokeText.y = savedY;
			strokeText.scaleX = textObj.scaleX;
			strokeText.scaleY = textObj.scaleY;
			strokeText.rotation = textObj.rotation;
			strokeText.skewX = textObj.skewX;
			strokeText.skewY = textObj.skewY;
			strokeText.regX = textObj.regX;
			strokeText.regY = textObj.regY;
			strokeText.outline = outlineSize;
			strokeText.shadow = null;
			strokeText.mouseEnabled = false;
		
			var idx = parent.getChildIndex(textObj);
			parent.addChildAt(strokeText, idx);
		
			textObj._strokeClone = strokeText;
		
			// Cache хэрэглэх
			var bounds = textObj.getBounds();
			if (bounds) {
				var cacheX = bounds.x - pad;
				var cacheY = bounds.y - pad;
				var cacheW = bounds.width + pad * 2;
				var cacheH = bounds.height + pad * 2;
		
				if (strokeText.cacheCanvas) strokeText.uncache();
				if (textObj.cacheCanvas) textObj.uncache();
		
				strokeText.cache(cacheX, cacheY, cacheW, cacheH);
				textObj.cache(cacheX, cacheY, cacheW, cacheH);
			}
		
			// Cleanup logic
			if (textObj._onRemovedCleanup) {
				textObj.off("removed", textObj._onRemovedCleanup);
			}
		
			textObj._onRemovedCleanup = function () {
				if (strokeText) {
					if (strokeText.cacheCanvas) strokeText.uncache();
					if (strokeText.parent) {
						strokeText.parent.removeChild(strokeText);
					}
				}
				if (textObj.cacheCanvas) {
					textObj.uncache();
				}
				textObj._strokeClone = null;
			};
		
			textObj.on("removed", textObj._onRemovedCleanup);
		
			// Байрлалыг баталгаажуулах
			textObj.x = savedX;
			textObj.y = savedY;
			strokeText.x = savedX;
			strokeText.y = savedY;
		}
		
		var exerciseText = {
			mn: {
				title: "АМЬТНЫ ХҮРЭЭЛЭН",
				instruction: "Амьтны хүрээлэн дэх амьтдыг ажиглаарай. Нийт амьтдын дотор шар өнгөтэй амьтад хэдэн хэсэг болж байгааг олоод тохирох туузан дээрх хэсгийг будаарай."
			},
			kz: {
				title: "ХАЙУАНАТТАР БАҒЫ",
				instruction: "Хайуанаттар бағындағы жануарларға назар аударыңыз. Барлық жануарлардың ішінде сары түсті жануарлар неше бөлік болатынын тауып, сәйкес жолақтағы бөлікті бояңыз."
			},
			tuva: {
				title: "АҢНАР ХҮРЭЭЗИ",
				instruction: "Аңнар хүрээзиндеги аңнарны ажыглаңар. Бүгү аңнарның иштинде шара өңгүлүг аңнар каш бөлүк болурн олуп, тааржыыр лента дээрги бөлүктү өөдеңер."
			},
			sign: {
				title: "АМЬТНЫ ХҮРЭЭЛЭН",
				instruction: "Амьтны хүрээлэн дэх амьтдыг ажиглаарай. Нийт амьтдын дотор шар өнгөтэй амьтад хэдэн хэсэг болж байгааг олоод тохирох туузан дээрх хэсгийг будаарай."
			}
		};
		
		var lang = exportRoot.gameState.selectedLanguage || "mn";
		var texts = exerciseText[lang];
		
		var lang = exportRoot.gameState.selectedLanguage || "mn";
		var texts = exerciseText[lang];
		
		function findTextByContent(container, content) {
			if (!container) return null;
		
			if (container instanceof createjs.Text && container.text === content) {
				return container;
			}
		
			if (!container.numChildren) return null;
		
			for (var i = 0; i < container.numChildren; i++) {
				var found = findTextByContent(container.getChildAt(i), content);
				if (found) return found;
			}
		
			return null;
		}
		
		var txt_title = findTextByContent(exportRoot, "txt_title");
		var txt_instruction = findTextByContent(exportRoot, "txt_instruction");
		
		
		console.log("exerciseText[lang]");
		console.log(exerciseText[lang]);
		console.log(exportRoot.txt_title);
		if (txt_title) {
			txt_title.text = texts.title;
			applyTextStyling(txt_title, {
				outlineSize: 15,
				outlineColor: "#461A17",
				fillColor: "#FFFFFF",
				pad: 80
			});
		}else {
			console.log("exportRoot.txt_title not found");
		}
		
		console.log('--------------------------');
		console.log(exportRoot);
		console.log('--------------------------');
		
		if (txt_instruction) {
			txt_instruction.text = texts.instruction;
		}
	}
	this.frame_13 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		// =====================================================
		// CONFIG
		// =====================================================
		var CONFIG = {
			lessonId: "lesson6",
			lessonFolder: "Lesson6",
			videoId: "map03",
			videoFile: "./videos/lesson6_map3.mp4",
			containerId: "success-video-map03",
			nextFrame: 14,
			backgroundColor: "#6B4FBB",
			zIndex: "9999",
			autoSkipOnError: true,
			autoMarkWatchedOnSkip: true
		};
		
		// =====================================================
		// INIT
		// =====================================================
		if (!exportRoot.gameState) {
			exportRoot.gameState = {};
		}
		
		if (!exportRoot.gameState.videosWatched) {
			exportRoot.gameState.videosWatched = [];
		}
		
		if (!exportRoot.saveState) {
			exportRoot.saveState = function() {};
		}
		
		var videoContainer = null;
		var videoElement = null;
		var resizeHandler = null;
		var started = false;
		var endedOrSkipped = false;
		
		// =====================================================
		// HELPERS
		// =====================================================
		function hasWatchedVideo() {
			return exportRoot.gameState.videosWatched.indexOf(CONFIG.videoId) !== -1;
		}
		
		function markVideoWatched() {
			if (!hasWatchedVideo()) {
				exportRoot.gameState.videosWatched.push(CONFIG.videoId);
				exportRoot.saveState();
			}
		}
		
		function lockPageScroll() {
			document.body.style.overflow = "hidden";
			document.documentElement.style.overflow = "hidden";
		}
		
		function unlockPageScroll() {
			document.body.style.overflow = "";
			document.documentElement.style.overflow = "";
		}
		
		function cleanup() {
			unlockPageScroll();
		
			if (videoElement) {
				try {
					videoElement.pause();
					videoElement.removeAttribute("src");
					videoElement.load();
				} catch (e) {}
				videoElement = null;
			}
		
			if (videoContainer && videoContainer.parentNode) {
				videoContainer.parentNode.removeChild(videoContainer);
				videoContainer = null;
			}
		
			if (resizeHandler) {
				window.removeEventListener("resize", resizeHandler);
				resizeHandler = null;
			}
		}
		
		function updateContainerPosition() {
			if (!videoContainer) return;
		
			var canvas = document.getElementById("canvas");
			if (!canvas) return;
		
			var rect = canvas.getBoundingClientRect();
		
			videoContainer.style.left = rect.left + "px";
			videoContainer.style.top = rect.top + "px";
			videoContainer.style.width = rect.width + "px";
			videoContainer.style.height = rect.height + "px";
		}
		
		function goToNextExercise(reason) {
			if (endedOrSkipped) return;
			endedOrSkipped = true;
		
			if (CONFIG.autoMarkWatchedOnSkip) {
				markVideoWatched();
			}
		
			cleanup();
		
			exportRoot.gameState.currentFrame = CONFIG.nextFrame;
			exportRoot.saveState();
			exportRoot.gotoAndStop(CONFIG.nextFrame);
		}
		
		function tryPlayVideo() {
			if (!videoElement || started) return;
			started = true;
		
			var playPromise = videoElement.play();
		
			if (playPromise && typeof playPromise.catch === "function") {
				playPromise.catch(function(err) {
					console.log("Video autoplay failed:", err);
					goToNextExercise("autoplay_failed");
				});
			}
		}
		
		// =====================================================
		// MAIN
		// =====================================================
		function createSuccessVideo() {
			var existingContainer = document.getElementById(CONFIG.containerId);
			if (existingContainer && existingContainer.parentNode) {
				existingContainer.parentNode.removeChild(existingContainer);
			}
		
			var canvas = document.getElementById("canvas");
			if (!canvas) {
				goToNextExercise("canvas_missing");
				return;
			}
		
			if (hasWatchedVideo()) {
				goToNextExercise("already_watched");
				return;
			}
		
			lockPageScroll();
		
			var rect = canvas.getBoundingClientRect();
		
			videoContainer = document.createElement("div");
			videoContainer.id = CONFIG.containerId;
			videoContainer.style.position = "fixed";
			videoContainer.style.left = rect.left + "px";
			videoContainer.style.top = rect.top + "px";
			videoContainer.style.width = rect.width + "px";
			videoContainer.style.height = rect.height + "px";
			videoContainer.style.backgroundColor = CONFIG.backgroundColor;
			videoContainer.style.zIndex = CONFIG.zIndex;
			videoContainer.style.overflow = "hidden";
			videoContainer.style.margin = "0";
			videoContainer.style.padding = "0";
			videoContainer.style.boxSizing = "border-box";
		
			videoElement = document.createElement("video");
			videoElement.src = CONFIG.videoFile;
			videoElement.style.width = "100%";
			videoElement.style.height = "100%";
			videoElement.style.objectFit = "contain";
			videoElement.style.display = "block";
			videoElement.preload = "auto";
			videoElement.playsInline = true;
			videoElement.setAttribute("playsinline", "true");
			videoElement.setAttribute("webkit-playsinline", "true");
		
			// Зарим browser autoplay дээр дууг хаадаг.
			// Хэрэв заавал sound-тай autoplay хэрэгтэй бол browser policy-оос хамаарна.
			// Найдвартай ажиллуулахын тулд muted=true болгож болно.
			videoElement.muted = false;
			videoElement.autoplay = false;
			videoElement.controls = false;
		
			videoContainer.appendChild(videoElement);
			document.body.appendChild(videoContainer);
		
			videoElement.addEventListener("loadeddata", function() {
				tryPlayVideo();
			});
		
			videoElement.addEventListener("canplay", function() {
				tryPlayVideo();
			});
		
			videoElement.addEventListener("ended", function() {
				markVideoWatched();
				setTimeout(function() {
					goToNextExercise("ended");
				}, 500);
			});
		
			videoElement.addEventListener("error", function() {
				console.log("Video load error:", videoElement.error, CONFIG.videoFile);
				if (CONFIG.autoSkipOnError) {
					goToNextExercise("error");
				}
			});
		
			resizeHandler = function() {
				updateContainerPosition();
			};
		
			window.addEventListener("resize", resizeHandler);
			updateContainerPosition();
		
			// Хэрэв ямар ч event trigger болохгүй гацвал fallback
			setTimeout(function() {
				if (!started && !endedOrSkipped) {
					console.log("Video start timeout, skipping:", CONFIG.videoFile);
					goToNextExercise("timeout");
				}
			}, 4000);
		}
		
		exportRoot.on("removed", cleanup);
		
		createSuccessVideo();
	}
	this.frame_14 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		// =====================================================
		// CONFIG
		// =====================================
		var CONFIG = {
		    lessonId: "lesson6",
		    exerciseId: "ex04",
		    exerciseNumber: 4,
		    storageKey: "lesson6_gameState",
		    backFrame: 12, 
		    nextFrame: 15, 
		    autoNextDelay: 1500,
		    soundPaths: {
		        correct: "./sounds/voice_correct.mp3",
		        wrong: "./sounds/voice_wrong.mp3",
		        click: "./sounds/click.mp3",
		        instruction: "./sounds/instruction_ex04.mp3"
		    },
		    // Чирэх объектуудын нэрс
		    buttons: ["btn_4_1", "btn_4_2", "btn_4_3", "btn_4_4", "btn_4_5", "btn_4_6", "btn_4_7", "btn_4_8", "btn_4_9", "btn_4_10"],
		    // Зөв холболтууд (Target: Button)
		    correctMapping: {
		        "target_4_1": "btn_4_2",
		        "target_4_2": "btn_4_5",
		        "target_4_3": "btn_4_9"
		    }
		};
		
		exportRoot.currentExerciseId = CONFIG.exerciseId;
		exportRoot.backBtn = CONFIG.backFrame;
		exportRoot.nextBtn = CONFIG.nextFrame;
		CONFIG.completeKey = "exercise" + CONFIG.exerciseNumber + "Complete";
		CONFIG.answersKey = "exercise" + CONFIG.exerciseNumber + "Answers";
		
		// =====================================================
		// STATE & INIT
		// =====================
		if (!exportRoot.gameState) exportRoot.gameState = {};
		if (!exportRoot.gameState[CONFIG.answersKey]) {
		    exportRoot.gameState[CONFIG.answersKey] = {}; // Аль target дээр юу байгааг хадгална
		}
		
		if (typeof exportRoot.gameState[CONFIG.completeKey] === "undefined") {
		    exportRoot.gameState[CONFIG.completeKey] = false;
		}
		
		exportRoot.saveState = function() {
		    try { localStorage.setItem(CONFIG.storageKey, JSON.stringify(exportRoot.gameState)); } catch (e) {}
		};
		
		function playSound(type) {
		    try { new Audio(CONFIG.soundPaths[type]).play().catch(function(){}); } catch (e) {}
		}
		
		// =====================================================
		// DRAG AND DROP ENGINE
		// =====================
		var targetNames = Object.keys(CONFIG.correctMapping);
		
		function setupDragAndDrop() {
		    CONFIG.buttons.forEach(function(btnName) {
		        var btn = exportRoot[btnName];
		        if (!btn) return;
		
		        btn.oldX = btn.x;
		        btn.oldY = btn.y;
		        btn.cursor = "pointer";
		        btn.mouseChildren = false;
		
		        // Өмнөх төлөвийг сэргээх хэсэг (хэвээрээ үлдэнэ)
		        targetNames.forEach(function(tName) {
		            if (exportRoot.gameState[CONFIG.answersKey][tName] === btnName) {
		                var target = exportRoot[tName];
		                btn.x = target.x;
		                btn.y = target.y;
		                btn.mouseEnabled = false;
		            }
		        });
		
		        // ЧИРЭХ ЛОГИКИЙН ЗАСВАР (Масштаб тааруулах)
		        btn.on("mousedown", function(evt) {
		            if (exportRoot.gameState[CONFIG.completeKey]) return;
		            exportRoot.addChild(btn);
		            
		            // globalToLocal ашиглаж масштабыг тооцоолох
		            var localPos = btn.parent.globalToLocal(evt.stageX, evt.stageY);
		            btn.offset = { x: btn.x - localPos.x, y: btn.y - localPos.y };
		        });
		
		        btn.on("pressmove", function(evt) {
		            if (exportRoot.gameState[CONFIG.completeKey]) return;
		            
		            // globalToLocal ашиглаж масштабыг тооцоолох
		            var localPos = btn.parent.globalToLocal(evt.stageX, evt.stageY);
		            btn.x = localPos.x + btn.offset.x;
		            btn.y = localPos.y + btn.offset.y;
		        });
		
		        // Тавих үйлдэл (хэвээрээ үлдэнэ)
		        btn.on("pressup", function(evt) {
		            if (exportRoot.gameState[CONFIG.completeKey]) return;
		
		            var hitTarget = null;
		            targetNames.forEach(function(tName) {
		                var target = exportRoot[tName];
		                // hitTest хийхдээ мөн адил globalToLocal ашиглана
		                var pt = target.globalToLocal(evt.stageX, evt.stageY);
		                if (target.hitTest(pt.x, pt.y)) {
		                    hitTarget = tName;
		                }
		            });
		
		            if (hitTarget && CONFIG.correctMapping[hitTarget] === btnName) {
		                playSound("click");
		                var targetMC = exportRoot[hitTarget];
		                btn.x = targetMC.x;
		                btn.y = targetMC.y;
		                btn.mouseEnabled = false;
						exportRoot.playCharacterAnimation("correct");
		                exportRoot.gameState[CONFIG.answersKey][hitTarget] = btnName;
		                exportRoot.saveState();
		                checkCompletion();
		            } else {
		                exportRoot.playCharacterAnimation("wrong");
		                createjs.Tween.get(btn).to({ x: btn.oldX, y: btn.oldY }, 500, createjs.Ease.backOut);
		            }
		        });
		    });
		}
		
		function checkCompletion() {
		    var allCorrect = true;
		    targetNames.forEach(function(tName) {
		        if (exportRoot.gameState[CONFIG.answersKey][tName] !== CONFIG.correctMapping[tName]) {
		            allCorrect = false;
		        }
		    });
		
		    if (allCorrect) {
		        exportRoot.gameState[CONFIG.completeKey] = true;
		        exportRoot.saveState();
		        exportRoot.playCharacterAnimation("correct");
		        
		        if (exportRoot.refreshNavButtons) exportRoot.refreshNavButtons();
		
		        setTimeout(function() {
		            exportRoot.gotoAndStop(CONFIG.nextFrame);
		        }, CONFIG.autoNextDelay);
		    }
		}
		
		// =====================================================
		// START
		// =====================
		setupDragAndDrop();
		
		if (exportRoot.help_popup) {
		    exportRoot.help_popup.visible = false;
		}
		
		if (exportRoot.refreshNavButtons) exportRoot.refreshNavButtons();
		if (exportRoot.stopInstruction) exportRoot.stopInstruction();
		if (!exportRoot.gameState[CONFIG.completeKey]) {
		    setTimeout(function() { 
		        if(exportRoot.playInstruction) exportRoot.playInstruction(); 
		    }, 500);
		}
		
		exportRoot.on("removed", function() { 
		    if(exportRoot.stopInstruction) exportRoot.stopInstruction(); 
		});
		function applyTextStyling(textObj, opts) {
			if (!textObj || !(textObj instanceof createjs.Text) || !textObj.parent) return;
		
			opts = opts || {};
		
			// Фонт тохиргоо - Default-оор Rubik Bold ашиглана
			var fontSize = opts.fontSize || textObj.font.split('px')[0] || "40"; 
			var fontStyle = opts.fontStyle || "bold";
			var fontFamily = opts.fontFamily || "'Rubik', sans-serif";
			
			// textObj-ийн фонтыг шинэчлэх
			textObj.font = fontStyle + " " + fontSize + "px " + fontFamily;
		
			var outlineColor = opts.outlineColor || "#461A17";
			var outlineSize = opts.outlineSize || 6;
			var fillColor = opts.fillColor || "#FFFFFF";
			var shadowColor = opts.shadowColor || "rgba(60, 20, 0, 0.4)";
			var pad = opts.pad || 60;
		
			var savedX = textObj.x;
			var savedY = textObj.y;
			var parent = textObj.parent;
			var cloneName = "__strokeClone_" + (textObj.name || "text");
		
			// Өмнө үлдсэн ижил clone-уудыг parent-оос цэвэрлэнэ
			for (var i = parent.numChildren - 1; i >= 0; i--) {
				var child = parent.getChildAt(i);
				if (child && child.name === cloneName) {
					if (child.cacheCanvas) child.uncache();
					parent.removeChild(child);
				}
			}
		
			// Хуучин cache арилгана
			if (textObj.cacheCanvas) {
				textObj.uncache();
			}
		
			textObj.outline = null;
			textObj.color = fillColor;
			textObj.shadow = new createjs.Shadow(shadowColor, 3, 3, 6);
		
			// Stroke үүсгэхдээ шинэчлэгдсэн фонтыг ашиглана
			var strokeText = new createjs.Text(textObj.text, textObj.font, outlineColor);
			strokeText.name = cloneName;
			strokeText.textAlign = textObj.textAlign;
			strokeText.textBaseline = textObj.textBaseline;
			strokeText.x = savedX;
			strokeText.y = savedY;
			strokeText.scaleX = textObj.scaleX;
			strokeText.scaleY = textObj.scaleY;
			strokeText.rotation = textObj.rotation;
			strokeText.skewX = textObj.skewX;
			strokeText.skewY = textObj.skewY;
			strokeText.regX = textObj.regX;
			strokeText.regY = textObj.regY;
			strokeText.outline = outlineSize;
			strokeText.shadow = null;
			strokeText.mouseEnabled = false;
		
			var idx = parent.getChildIndex(textObj);
			parent.addChildAt(strokeText, idx);
		
			textObj._strokeClone = strokeText;
		
			// Cache хэрэглэх
			var bounds = textObj.getBounds();
			if (bounds) {
				var cacheX = bounds.x - pad;
				var cacheY = bounds.y - pad;
				var cacheW = bounds.width + pad * 2;
				var cacheH = bounds.height + pad * 2;
		
				if (strokeText.cacheCanvas) strokeText.uncache();
				if (textObj.cacheCanvas) textObj.uncache();
		
				strokeText.cache(cacheX, cacheY, cacheW, cacheH);
				textObj.cache(cacheX, cacheY, cacheW, cacheH);
			}
		
			// Cleanup logic
			if (textObj._onRemovedCleanup) {
				textObj.off("removed", textObj._onRemovedCleanup);
			}
		
			textObj._onRemovedCleanup = function () {
				if (strokeText) {
					if (strokeText.cacheCanvas) strokeText.uncache();
					if (strokeText.parent) {
						strokeText.parent.removeChild(strokeText);
					}
				}
				if (textObj.cacheCanvas) {
					textObj.uncache();
				}
				textObj._strokeClone = null;
			};
		
			textObj.on("removed", textObj._onRemovedCleanup);
		
			// Байрлалыг баталгаажуулах
			textObj.x = savedX;
			textObj.y = savedY;
			strokeText.x = savedX;
			strokeText.y = savedY;
		}
		
		var exerciseText = {
			mn: {
				title: "ХУВААРЬТ ЦАМХГУУД",
				instruction: "Цамхгийн будагдсан хэсэгт тохирох энгийн бутархайг байршуулна уу."
			},
			kz: {
				title: "БӨЛІНГЕН МҰНАРАЛАР",
				instruction: "Мұнараның боялған бөлігіне сәйкес келетін жай бөлшекті орналастырыңыз."
			},
			tuva: {
				title: "ҮЛЕЖИЛГЕН МҮНАРЛАР",
				instruction: "Мүнарның өөделген кезээнге тааржыыр эңгин бөлүктү тургузуңар."
			},
			sign: {
				title: "ХУВААРЬТ ЦАМХГУУД",
				instruction: "Цамхгийн будагдсан хэсэгт тохирох энгийн бутархайг байршуулна уу."
			}
		};
		
		var lang = exportRoot.gameState.selectedLanguage || "mn";
		var texts = exerciseText[lang];
		
		var lang = exportRoot.gameState.selectedLanguage || "mn";
		var texts = exerciseText[lang];
		
		function findTextByContent(container, content) {
			if (!container) return null;
		
			if (container instanceof createjs.Text && container.text === content) {
				return container;
			}
		
			if (!container.numChildren) return null;
		
			for (var i = 0; i < container.numChildren; i++) {
				var found = findTextByContent(container.getChildAt(i), content);
				if (found) return found;
			}
		
			return null;
		}
		
		var txt_title = findTextByContent(exportRoot, "txt_title");
		var txt_instruction = findTextByContent(exportRoot, "txt_instruction");
		
		
		console.log("exerciseText[lang]");
		console.log(exerciseText[lang]);
		console.log(exportRoot.txt_title);
		if (txt_title) {
			txt_title.text = texts.title;
			applyTextStyling(txt_title, {
				outlineSize: 15,
				outlineColor: "#461A17",
				fillColor: "#FFFFFF",
				pad: 80
			});
		}else {
			console.log("exportRoot.txt_title not found");
		}
		
		console.log('--------------------------');
		console.log(exportRoot);
		console.log('--------------------------');
		
		if (txt_instruction) {
			txt_instruction.text = texts.instruction;
		}
	}
	this.frame_15 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		// =====================================================
		// CONFIG
		// =====================================================
		var CONFIG = {
			lessonId: "lesson6",
			lessonFolder: "Lesson6",
			videoId: "map04",
			videoFile: "./videos/lesson6_map4.mp4",
			containerId: "success-video-map04",
			nextFrame: 16,
			backgroundColor: "#6B4FBB",
			zIndex: "9999",
			autoSkipOnError: true,
			autoMarkWatchedOnSkip: true
		};
		
		// =====================================================
		// INIT
		// =====================================================
		if (!exportRoot.gameState) {
			exportRoot.gameState = {};
		}
		
		if (!exportRoot.gameState.videosWatched) {
			exportRoot.gameState.videosWatched = [];
		}
		
		if (!exportRoot.saveState) {
			exportRoot.saveState = function() {};
		}
		
		var videoContainer = null;
		var videoElement = null;
		var resizeHandler = null;
		var started = false;
		var endedOrSkipped = false;
		
		// =====================================================
		// HELPERS
		// =====================================================
		function hasWatchedVideo() {
			return exportRoot.gameState.videosWatched.indexOf(CONFIG.videoId) !== -1;
		}
		
		function markVideoWatched() {
			if (!hasWatchedVideo()) {
				exportRoot.gameState.videosWatched.push(CONFIG.videoId);
				exportRoot.saveState();
			}
		}
		
		function lockPageScroll() {
			document.body.style.overflow = "hidden";
			document.documentElement.style.overflow = "hidden";
		}
		
		function unlockPageScroll() {
			document.body.style.overflow = "";
			document.documentElement.style.overflow = "";
		}
		
		function cleanup() {
			unlockPageScroll();
		
			if (videoElement) {
				try {
					videoElement.pause();
					videoElement.removeAttribute("src");
					videoElement.load();
				} catch (e) {}
				videoElement = null;
			}
		
			if (videoContainer && videoContainer.parentNode) {
				videoContainer.parentNode.removeChild(videoContainer);
				videoContainer = null;
			}
		
			if (resizeHandler) {
				window.removeEventListener("resize", resizeHandler);
				resizeHandler = null;
			}
		}
		
		function updateContainerPosition() {
			if (!videoContainer) return;
		
			var canvas = document.getElementById("canvas");
			if (!canvas) return;
		
			var rect = canvas.getBoundingClientRect();
		
			videoContainer.style.left = rect.left + "px";
			videoContainer.style.top = rect.top + "px";
			videoContainer.style.width = rect.width + "px";
			videoContainer.style.height = rect.height + "px";
		}
		
		function goToNextExercise(reason) {
			if (endedOrSkipped) return;
			endedOrSkipped = true;
		
			if (CONFIG.autoMarkWatchedOnSkip) {
				markVideoWatched();
			}
		
			cleanup();
		
			exportRoot.gameState.currentFrame = CONFIG.nextFrame;
			exportRoot.saveState();
			exportRoot.gotoAndStop(CONFIG.nextFrame);
		}
		
		function tryPlayVideo() {
			if (!videoElement || started) return;
			started = true;
		
			var playPromise = videoElement.play();
		
			if (playPromise && typeof playPromise.catch === "function") {
				playPromise.catch(function(err) {
					console.log("Video autoplay failed:", err);
					goToNextExercise("autoplay_failed");
				});
			}
		}
		
		// =====================================================
		// MAIN
		// =====================================================
		function createSuccessVideo() {
			var existingContainer = document.getElementById(CONFIG.containerId);
			if (existingContainer && existingContainer.parentNode) {
				existingContainer.parentNode.removeChild(existingContainer);
			}
		
			var canvas = document.getElementById("canvas");
			if (!canvas) {
				goToNextExercise("canvas_missing");
				return;
			}
		
			if (hasWatchedVideo()) {
				goToNextExercise("already_watched");
				return;
			}
		
			lockPageScroll();
		
			var rect = canvas.getBoundingClientRect();
		
			videoContainer = document.createElement("div");
			videoContainer.id = CONFIG.containerId;
			videoContainer.style.position = "fixed";
			videoContainer.style.left = rect.left + "px";
			videoContainer.style.top = rect.top + "px";
			videoContainer.style.width = rect.width + "px";
			videoContainer.style.height = rect.height + "px";
			videoContainer.style.backgroundColor = CONFIG.backgroundColor;
			videoContainer.style.zIndex = CONFIG.zIndex;
			videoContainer.style.overflow = "hidden";
			videoContainer.style.margin = "0";
			videoContainer.style.padding = "0";
			videoContainer.style.boxSizing = "border-box";
		
			videoElement = document.createElement("video");
			videoElement.src = CONFIG.videoFile;
			videoElement.style.width = "100%";
			videoElement.style.height = "100%";
			videoElement.style.objectFit = "contain";
			videoElement.style.display = "block";
			videoElement.preload = "auto";
			videoElement.playsInline = true;
			videoElement.setAttribute("playsinline", "true");
			videoElement.setAttribute("webkit-playsinline", "true");
		
			// Зарим browser autoplay дээр дууг хаадаг.
			// Хэрэв заавал sound-тай autoplay хэрэгтэй бол browser policy-оос хамаарна.
			// Найдвартай ажиллуулахын тулд muted=true болгож болно.
			videoElement.muted = false;
			videoElement.autoplay = false;
			videoElement.controls = false;
		
			videoContainer.appendChild(videoElement);
			document.body.appendChild(videoContainer);
		
			videoElement.addEventListener("loadeddata", function() {
				tryPlayVideo();
			});
		
			videoElement.addEventListener("canplay", function() {
				tryPlayVideo();
			});
		
			videoElement.addEventListener("ended", function() {
				markVideoWatched();
				setTimeout(function() {
					goToNextExercise("ended");
				}, 500);
			});
		
			videoElement.addEventListener("error", function() {
				console.log("Video load error:", videoElement.error, CONFIG.videoFile);
				if (CONFIG.autoSkipOnError) {
					goToNextExercise("error");
				}
			});
		
			resizeHandler = function() {
				updateContainerPosition();
			};
		
			window.addEventListener("resize", resizeHandler);
			updateContainerPosition();
		
			// Хэрэв ямар ч event trigger болохгүй гацвал fallback
			setTimeout(function() {
				if (!started && !endedOrSkipped) {
					console.log("Video start timeout, skipping:", CONFIG.videoFile);
					goToNextExercise("timeout");
				}
			}, 4000);
		}
		
		exportRoot.on("removed", cleanup);
		
		createSuccessVideo();
	}
	this.frame_16 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		// =====================================================
		// CONFIG
		// =====================================================
		var CONFIG = {
		    lessonId: "lesson6",
		    exerciseId: "ex05", // 5-р даалгавар
		    exerciseNumber: 5,
		    storageKey: "lesson6_gameState",
		    backFrame: 14, 
		    nextFrame: 17, 
		    autoNextDelay: 1500,
		    soundPaths: {
		        correct: "./sounds/voice_correct.mp3",
		        wrong: "./sounds/voice_wrong.mp3",
		        click: "./sounds/click.mp3"
		    },
		    // Зөв хариултууд: 3/4 > 1/4, 4/8 < 7/8, 2/3 < 3/3, 4/5 > 3/5
		    inputs: {
		        input_5_1: ">",
		        input_5_2: "<",
		        input_5_3: "<",
		        input_5_4: ">"
		    }
		};
		
		exportRoot.currentExerciseId = CONFIG.exerciseId;
		exportRoot.backBtn = CONFIG.backFrame;
		exportRoot.nextBtn = CONFIG.nextFrame;
		CONFIG.positionsKey = "exercise" + CONFIG.exerciseNumber + "Positions";
		CONFIG.completeKey = "exercise" + CONFIG.exerciseNumber + "Complete";
		
		// =====================================================
		// STATE & INIT
		// =====================================================
		if (!exportRoot.gameState) exportRoot.gameState = {};
		if (!exportRoot.gameState[CONFIG.positionsKey]) exportRoot.gameState[CONFIG.positionsKey] = {};
		if (typeof exportRoot.gameState[CONFIG.completeKey] === "undefined") exportRoot.gameState[CONFIG.completeKey] = false;
		
		if (!exportRoot.saveState) {
		    exportRoot.saveState = function() {
		        try { localStorage.setItem(CONFIG.storageKey, JSON.stringify(exportRoot.gameState)); } catch (e) {}
		    };
		}
		
		var INPUT_NAMES = Object.keys(CONFIG.inputs);
		var autoNextTriggered = !!exportRoot.gameState[CONFIG.completeKey];
		
		function playSound(type) {
		    try { new Audio(CONFIG.soundPaths[type]).play().catch(function() {}); } catch (e) {}
		}
		
		// =====================================================
		// HTML INPUT HELPERS
		// =====================================================
		function getInputDomId(name) { return "html_" + CONFIG.lessonId + "_" + CONFIG.exerciseId + "_" + name; }
		
		function createOrGetHtmlInput(name) {
		    var id = getInputDomId(name);
		    var input = document.getElementById(id);
		
		    if (!input) {
		        input = document.createElement("input");
		        input.type = "text";
		        input.id = id;
		        // inputMode-г text болгож өөрчлөв (Тэмдэгт бичих тул)
		        input.inputMode = "text"; 
		        input.maxLength = 1;
		
		        input.style.position = "fixed";
		        input.style.zIndex = "99999";
		        input.style.boxSizing = "border-box";
		        input.style.textAlign = "center";
		        input.style.fontFamily = "'Rubik', Arial, sans-serif";
		        input.style.fontWeight = "700";
		        
		        input.style.background = "transparent"; 
		        input.style.border = "none";
		        input.style.outline = "none";
		        input.style.padding = "0";
		        input.style.margin = "0";
		
		        document.body.appendChild(input);
		    }
		    input.style.opacity = "1";
		    input.style.pointerEvents = "auto";
		    
		    return input;
		}
		
		function hideAllHtmlInputs() {
		    INPUT_NAMES.forEach(function(name) {
		        var input = document.getElementById(getInputDomId(name));
		        if (input) {
		            input.style.opacity = "0";
		            input.style.pointerEvents = "none";
		        }
		    });
		}
		
		function positionHtmlInput(name) {
		    var clip = exportRoot[name];
		    var input = document.getElementById(getInputDomId(name));
		    var canvas = exportRoot.stage ? exportRoot.stage.canvas : document.querySelector("canvas");
		
		    if (!clip || !input || !canvas || !exportRoot.stage) return;
		
		    var canvasRect = canvas.getBoundingClientRect();
		    var stageScaleX = exportRoot.stage.scaleX || 1;
		    var stageScaleY = exportRoot.stage.scaleY || 1;
		    var browserScaleX = canvasRect.width / canvas.width;
		    var browserScaleY = canvasRect.height / canvas.height;
		
		    var b = clip.getBounds() || clip.nominalBounds || {width: 46, height: 46};
		    var size = { width: b.width, height: b.height };
		    var globalPos = clip.localToGlobal(0, 0);
		
		    var width = (size.width * stageScaleX * browserScaleX) * 0.9;
		    var height = (size.height * stageScaleY * browserScaleY) * 0.9;
		
		    var left = canvasRect.left + (globalPos.x * browserScaleX) - (width * 0.5);
		    var top = canvasRect.top + (globalPos.y * browserScaleY) - (height * 0.5);
		
		    input.style.left = left + "px";
		    input.style.top = top + "px";
		    input.style.width = width + "px";
		    input.style.height = height + "px";
		    
		    input.style.fontSize = Math.max(20, Math.floor(height * 0.8)) + "px";
		    input.style.lineHeight = Math.floor(height) + "px";
		}
		
		function positionAllHtmlInputs() {
		    INPUT_NAMES.forEach(positionHtmlInput);
		}
		
		function paintInputState(input, state) {
		    if (!input) return;
		    input.style.backgroundColor = "transparent";
		    
		    if (state === "correct") {
		        input.style.color = "#1F5F1A"; // Зөв бол ногоон
		    } else if (state === "wrong") {
		        input.style.color = "#E54848"; // Буруу бол улаан
		    } else {
		        input.style.color = "#222222"; 
		    }
		}
		
		function isCorrect(name, value) { return String(value || "").trim() === String(CONFIG.inputs[name]); }
		
		function checkAllAnswers() {
		    var allCorrect = true;
		    INPUT_NAMES.forEach(function(name) {
		        var input = document.getElementById(getInputDomId(name));
		        if (!input) { allCorrect = false; return; }
		        var value = String(input.value || "").trim();
		        if (value === "" || !isCorrect(name, value)) allCorrect = false;
		    });
		
		    if (allCorrect && !autoNextTriggered) {
		        autoNextTriggered = true;
		        exportRoot.gameState[CONFIG.completeKey] = true;
		        exportRoot.saveState();
		        exportRoot.playCharacterAnimation("correct");
		        if (exportRoot.refreshNavButtons) exportRoot.refreshNavButtons();
		
		        INPUT_NAMES.forEach(function(n) {
		            var locked = document.getElementById(getInputDomId(n));
		            if (locked) locked.disabled = true;
		        });
		
		        setTimeout(function() {
		            hideAllHtmlInputs(); 
		            exportRoot.gotoAndStop(CONFIG.nextFrame);
		        }, CONFIG.autoNextDelay);
		    }
		}
		
		function setupSingleHtmlInput(name) {
		    var clip = exportRoot[name];
		    if (!clip) return;
		
		    var input = createOrGetHtmlInput(name);
		    clip.alpha = 0.01;
		    clip.mouseEnabled = false;
		
		    input.value = String(exportRoot.gameState[CONFIG.positionsKey][name] || "");
		    input.disabled = !!exportRoot.gameState[CONFIG.completeKey];
		
		    if (input.value !== "") {
		        paintInputState(input, isCorrect(name, input.value) ? "correct" : "wrong");
		    } else {
		        paintInputState(input, "default");
		    }
		
		    input.oninput = function() {
		        // Зөвхөн харьцуулах тэмдэгтүүдийг зөвшөөрөх шүүлтүүр
		        this.value = this.value.replace(/[^><=]/g, "");
		        exportRoot.gameState[CONFIG.positionsKey][name] = this.value;
		        exportRoot.saveState();
		        
		        if (this.value !== "") {
		            paintInputState(this, isCorrect(name, this.value) ? "correct" : "wrong");
					exportRoot.playCharacterAnimation(isCorrect(name, input.value) ? "correct" : "wrong");
		        } else {
		            paintInputState(this, "default");
		        }
		        checkAllAnswers(); 
		    };
		
		    input.onfocus = function() { playSound("click"); };
		    positionHtmlInput(name);
		}
		
		// =====================================================
		// START
		// =====================================================
		INPUT_NAMES.forEach(setupSingleHtmlInput);
		positionAllHtmlInputs();
		
		if (!exportRoot.resizeHandler) {
		    exportRoot.resizeHandler = function() { positionAllHtmlInputs(); };
		    window.addEventListener("resize", exportRoot.resizeHandler);
		}
		
		if (exportRoot.help_popup) {
		    exportRoot.help_popup.visible = false;
		}
		
		if (!exportRoot.tickAttached && createjs && createjs.Ticker) {
		    createjs.Ticker.addEventListener("tick", positionAllHtmlInputs);
		    exportRoot.tickAttached = true;
		}
		
		if (exportRoot.refreshNavButtons) exportRoot.refreshNavButtons();
		if (exportRoot.stopInstruction) exportRoot.stopInstruction();
		if (!exportRoot.gameState[CONFIG.completeKey]) {
		    setTimeout(function() { 
		        if(exportRoot.playInstruction) exportRoot.playInstruction(); 
		    }, 500);
		}
		
		exportRoot.on("removed", function() { 
		    if(exportRoot.stopInstruction) exportRoot.stopInstruction(); 
		    hideAllHtmlInputs(); 
		});
		function applyTextStyling(textObj, opts) {
			if (!textObj || !(textObj instanceof createjs.Text) || !textObj.parent) return;
		
			opts = opts || {};
		
			// Фонт тохиргоо - Default-оор Rubik Bold ашиглана
			var fontSize = opts.fontSize || textObj.font.split('px')[0] || "40"; 
			var fontStyle = opts.fontStyle || "bold";
			var fontFamily = opts.fontFamily || "'Rubik', sans-serif";
			
			// textObj-ийн фонтыг шинэчлэх
			textObj.font = fontStyle + " " + fontSize + "px " + fontFamily;
		
			var outlineColor = opts.outlineColor || "#461A17";
			var outlineSize = opts.outlineSize || 6;
			var fillColor = opts.fillColor || "#FFFFFF";
			var shadowColor = opts.shadowColor || "rgba(60, 20, 0, 0.4)";
			var pad = opts.pad || 60;
		
			var savedX = textObj.x;
			var savedY = textObj.y;
			var parent = textObj.parent;
			var cloneName = "__strokeClone_" + (textObj.name || "text");
		
			// Өмнө үлдсэн ижил clone-уудыг parent-оос цэвэрлэнэ
			for (var i = parent.numChildren - 1; i >= 0; i--) {
				var child = parent.getChildAt(i);
				if (child && child.name === cloneName) {
					if (child.cacheCanvas) child.uncache();
					parent.removeChild(child);
				}
			}
		
			// Хуучин cache арилгана
			if (textObj.cacheCanvas) {
				textObj.uncache();
			}
		
			textObj.outline = null;
			textObj.color = fillColor;
			textObj.shadow = new createjs.Shadow(shadowColor, 3, 3, 6);
		
			// Stroke үүсгэхдээ шинэчлэгдсэн фонтыг ашиглана
			var strokeText = new createjs.Text(textObj.text, textObj.font, outlineColor);
			strokeText.name = cloneName;
			strokeText.textAlign = textObj.textAlign;
			strokeText.textBaseline = textObj.textBaseline;
			strokeText.x = savedX;
			strokeText.y = savedY;
			strokeText.scaleX = textObj.scaleX;
			strokeText.scaleY = textObj.scaleY;
			strokeText.rotation = textObj.rotation;
			strokeText.skewX = textObj.skewX;
			strokeText.skewY = textObj.skewY;
			strokeText.regX = textObj.regX;
			strokeText.regY = textObj.regY;
			strokeText.outline = outlineSize;
			strokeText.shadow = null;
			strokeText.mouseEnabled = false;
		
			var idx = parent.getChildIndex(textObj);
			parent.addChildAt(strokeText, idx);
		
			textObj._strokeClone = strokeText;
		
			// Cache хэрэглэх
			var bounds = textObj.getBounds();
			if (bounds) {
				var cacheX = bounds.x - pad;
				var cacheY = bounds.y - pad;
				var cacheW = bounds.width + pad * 2;
				var cacheH = bounds.height + pad * 2;
		
				if (strokeText.cacheCanvas) strokeText.uncache();
				if (textObj.cacheCanvas) textObj.uncache();
		
				strokeText.cache(cacheX, cacheY, cacheW, cacheH);
				textObj.cache(cacheX, cacheY, cacheW, cacheH);
			}
		
			// Cleanup logic
			if (textObj._onRemovedCleanup) {
				textObj.off("removed", textObj._onRemovedCleanup);
			}
		
			textObj._onRemovedCleanup = function () {
				if (strokeText) {
					if (strokeText.cacheCanvas) strokeText.uncache();
					if (strokeText.parent) {
						strokeText.parent.removeChild(strokeText);
					}
				}
				if (textObj.cacheCanvas) {
					textObj.uncache();
				}
				textObj._strokeClone = null;
			};
		
			textObj.on("removed", textObj._onRemovedCleanup);
		
			// Байрлалыг баталгаажуулах
			textObj.x = savedX;
			textObj.y = savedY;
			strokeText.x = savedX;
			strokeText.y = savedY;
		}
		
		var exerciseText = {
			mn: {
				title: "УС ТҮГЭЭХ ТӨВ",
				instruction: "Савтай шингэний эзлэхүүнийг харьцуулж, жишээрэй."
			},
			kz: {
				title: "СУ ТАРАТУ ОРТАЛЫҒЫ",
				instruction: "Ыдыстағы сұйықтықтардың көлемін салыстырып, теңестіріңіз."
			},
			tuva: {
				title: "СУГ ҮЛЕЖИР ТӨВ",
				instruction: "Савлар дахь шингэнниң көлемин деңнеп, жештириңер."
			},
			sign: {
				title: "УС ТҮГЭЭХ ТӨВ",
				instruction: "Савтай шингэний эзлэхүүнийг харьцуулж, жишээрэй."
			}
		};
		
		var lang = exportRoot.gameState.selectedLanguage || "mn";
		var texts = exerciseText[lang];
		
		var lang = exportRoot.gameState.selectedLanguage || "mn";
		var texts = exerciseText[lang];
		
		function findTextByContent(container, content) {
			if (!container) return null;
		
			if (container instanceof createjs.Text && container.text === content) {
				return container;
			}
		
			if (!container.numChildren) return null;
		
			for (var i = 0; i < container.numChildren; i++) {
				var found = findTextByContent(container.getChildAt(i), content);
				if (found) return found;
			}
		
			return null;
		}
		
		var txt_title = findTextByContent(exportRoot, "txt_title");
		var txt_instruction = findTextByContent(exportRoot, "txt_instruction");
		
		
		console.log("exerciseText[lang]");
		console.log(exerciseText[lang]);
		console.log(exportRoot.txt_title);
		if (txt_title) {
			txt_title.text = texts.title;
			applyTextStyling(txt_title, {
				outlineSize: 15,
				outlineColor: "#461A17",
				fillColor: "#FFFFFF",
				pad: 80
			});
		}else {
			console.log("exportRoot.txt_title not found");
		}
		
		console.log('--------------------------');
		console.log(exportRoot);
		console.log('--------------------------');
		
		if (txt_instruction) {
			txt_instruction.text = texts.instruction;
		}
	}
	this.frame_17 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		// =====================================================
		// CONFIG
		// =====================================================
		var CONFIG = {
			lessonId: "lesson6",
			lessonFolder: "Lesson6",
			videoId: "map05",
			videoFile: "./videos/lesson6_map5.mp4",
			containerId: "success-video-map05",
			nextFrame: 18,
			backgroundColor: "#6B4FBB",
			zIndex: "9999",
			autoSkipOnError: true,
			autoMarkWatchedOnSkip: true
		};
		
		// =====================================================
		// INIT
		// =====================================================
		if (!exportRoot.gameState) {
			exportRoot.gameState = {};
		}
		
		if (!exportRoot.gameState.videosWatched) {
			exportRoot.gameState.videosWatched = [];
		}
		
		if (!exportRoot.saveState) {
			exportRoot.saveState = function() {};
		}
		
		var videoContainer = null;
		var videoElement = null;
		var resizeHandler = null;
		var started = false;
		var endedOrSkipped = false;
		
		// =====================================================
		// HELPERS
		// =====================================================
		function hasWatchedVideo() {
			return exportRoot.gameState.videosWatched.indexOf(CONFIG.videoId) !== -1;
		}
		
		function markVideoWatched() {
			if (!hasWatchedVideo()) {
				exportRoot.gameState.videosWatched.push(CONFIG.videoId);
				exportRoot.saveState();
			}
		}
		
		function lockPageScroll() {
			document.body.style.overflow = "hidden";
			document.documentElement.style.overflow = "hidden";
		}
		
		function unlockPageScroll() {
			document.body.style.overflow = "";
			document.documentElement.style.overflow = "";
		}
		
		function cleanup() {
			unlockPageScroll();
		
			if (videoElement) {
				try {
					videoElement.pause();
					videoElement.removeAttribute("src");
					videoElement.load();
				} catch (e) {}
				videoElement = null;
			}
		
			if (videoContainer && videoContainer.parentNode) {
				videoContainer.parentNode.removeChild(videoContainer);
				videoContainer = null;
			}
		
			if (resizeHandler) {
				window.removeEventListener("resize", resizeHandler);
				resizeHandler = null;
			}
		}
		
		function updateContainerPosition() {
			if (!videoContainer) return;
		
			var canvas = document.getElementById("canvas");
			if (!canvas) return;
		
			var rect = canvas.getBoundingClientRect();
		
			videoContainer.style.left = rect.left + "px";
			videoContainer.style.top = rect.top + "px";
			videoContainer.style.width = rect.width + "px";
			videoContainer.style.height = rect.height + "px";
		}
		
		function goToNextExercise(reason) {
			if (endedOrSkipped) return;
			endedOrSkipped = true;
		
			if (CONFIG.autoMarkWatchedOnSkip) {
				markVideoWatched();
			}
		
			cleanup();
		
			exportRoot.gameState.currentFrame = CONFIG.nextFrame;
			exportRoot.saveState();
			exportRoot.gotoAndStop(CONFIG.nextFrame);
		}
		
		function tryPlayVideo() {
			if (!videoElement || started) return;
			started = true;
		
			var playPromise = videoElement.play();
		
			if (playPromise && typeof playPromise.catch === "function") {
				playPromise.catch(function(err) {
					console.log("Video autoplay failed:", err);
					goToNextExercise("autoplay_failed");
				});
			}
		}
		
		// =====================================================
		// MAIN
		// =====================================================
		function createSuccessVideo() {
			var existingContainer = document.getElementById(CONFIG.containerId);
			if (existingContainer && existingContainer.parentNode) {
				existingContainer.parentNode.removeChild(existingContainer);
			}
		
			var canvas = document.getElementById("canvas");
			if (!canvas) {
				goToNextExercise("canvas_missing");
				return;
			}
		
			if (hasWatchedVideo()) {
				goToNextExercise("already_watched");
				return;
			}
		
			lockPageScroll();
		
			var rect = canvas.getBoundingClientRect();
		
			videoContainer = document.createElement("div");
			videoContainer.id = CONFIG.containerId;
			videoContainer.style.position = "fixed";
			videoContainer.style.left = rect.left + "px";
			videoContainer.style.top = rect.top + "px";
			videoContainer.style.width = rect.width + "px";
			videoContainer.style.height = rect.height + "px";
			videoContainer.style.backgroundColor = CONFIG.backgroundColor;
			videoContainer.style.zIndex = CONFIG.zIndex;
			videoContainer.style.overflow = "hidden";
			videoContainer.style.margin = "0";
			videoContainer.style.padding = "0";
			videoContainer.style.boxSizing = "border-box";
		
			videoElement = document.createElement("video");
			videoElement.src = CONFIG.videoFile;
			videoElement.style.width = "100%";
			videoElement.style.height = "100%";
			videoElement.style.objectFit = "contain";
			videoElement.style.display = "block";
			videoElement.preload = "auto";
			videoElement.playsInline = true;
			videoElement.setAttribute("playsinline", "true");
			videoElement.setAttribute("webkit-playsinline", "true");
		
			// Зарим browser autoplay дээр дууг хаадаг.
			// Хэрэв заавал sound-тай autoplay хэрэгтэй бол browser policy-оос хамаарна.
			// Найдвартай ажиллуулахын тулд muted=true болгож болно.
			videoElement.muted = false;
			videoElement.autoplay = false;
			videoElement.controls = false;
		
			videoContainer.appendChild(videoElement);
			document.body.appendChild(videoContainer);
		
			videoElement.addEventListener("loadeddata", function() {
				tryPlayVideo();
			});
		
			videoElement.addEventListener("canplay", function() {
				tryPlayVideo();
			});
		
			videoElement.addEventListener("ended", function() {
				markVideoWatched();
				setTimeout(function() {
					goToNextExercise("ended");
				}, 500);
			});
		
			videoElement.addEventListener("error", function() {
				console.log("Video load error:", videoElement.error, CONFIG.videoFile);
				if (CONFIG.autoSkipOnError) {
					goToNextExercise("error");
				}
			});
		
			resizeHandler = function() {
				updateContainerPosition();
			};
		
			window.addEventListener("resize", resizeHandler);
			updateContainerPosition();
		
			// Хэрэв ямар ч event trigger болохгүй гацвал fallback
			setTimeout(function() {
				if (!started && !endedOrSkipped) {
					console.log("Video start timeout, skipping:", CONFIG.videoFile);
					goToNextExercise("timeout");
				}
			}, 4000);
		}
		
		exportRoot.on("removed", cleanup);
		
		createSuccessVideo();
	}
	this.frame_18 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		// =====================================================
		// CONFIG
		// =====================================================
		var CONFIG = {
		    lessonId: "lesson6",
		    exerciseId: "ex06",
		    exerciseNumber: 6,
		    storageKey: "lesson6_gameState",
		    backFrame: 16,
		    nextFrame: 19,
		    autoNextDelay: 1500,
		    soundPaths: {
		        correct: "./sounds/voice_correct.mp3",
		        wrong: "./sounds/voice_wrong.mp3",
		        click: "./sounds/click.mp3"
		    },
		    allVariants: [
		        { img: "img_6_1", inputs: { input_6_1_1: "3", input_6_1_2: "6", input_6_1_3: "=", input_6_1_4: "3", input_6_1_5: "6" } },
		        { img: "img_6_2", inputs: { input_6_2_1: "1", input_6_2_2: "2", input_6_2_3: "<", input_6_2_4: "2", input_6_2_5: "2" } },
		        { img: "img_6_3", inputs: { input_6_3_1: "1", input_6_3_2: "3", input_6_3_3: "=", input_6_3_4: "1", input_6_3_5: "3" } },
		        { img: "img_6_4", inputs: { input_6_4_1: "5", input_6_4_2: "8", input_6_4_3: "<", input_6_4_4: "6", input_6_4_5: "8" } }
		    ],
		    selectedVariant: null
		};
		
		var ALL_INPUT_NAMES = [];
		for (var s = 1; s <= 4; s++) {
		    for (var i = 1; i <= 5; i++) {
		        ALL_INPUT_NAMES.push("input_6_" + s + "_" + i);
		    }
		}
		
		exportRoot.currentExerciseId = CONFIG.exerciseId;
		exportRoot.backBtn = CONFIG.backFrame;
		exportRoot.nextBtn = CONFIG.nextFrame;
		
		CONFIG.positionsKey = "exercise" + CONFIG.exerciseNumber + "Positions";
		CONFIG.completeKey = "exercise" + CONFIG.exerciseNumber + "Complete";
		CONFIG.selectedVariantIndexKey = "exercise" + CONFIG.exerciseNumber + "SelectedVariantIndex";
		
		// =====================================================
		// STATE INIT
		// =====================================================
		if (!exportRoot.gameState) exportRoot.gameState = {};
		if (!exportRoot.gameState[CONFIG.positionsKey]) exportRoot.gameState[CONFIG.positionsKey] = {};
		if (typeof exportRoot.gameState[CONFIG.completeKey] === "undefined") {
		    exportRoot.gameState[CONFIG.completeKey] = false;
		}
		
		// ЗӨВХӨН АНХ ОРОХОД random сонгоно
		if (typeof exportRoot.gameState[CONFIG.selectedVariantIndexKey] === "undefined" || exportRoot.gameState[CONFIG.selectedVariantIndexKey] === null) {
		    exportRoot.gameState[CONFIG.selectedVariantIndexKey] = Math.floor(Math.random() * CONFIG.allVariants.length);
		}
		
		CONFIG.selectedVariant = CONFIG.allVariants[exportRoot.gameState[CONFIG.selectedVariantIndexKey]];
		
		exportRoot.saveState = function() {
		    try {
		        localStorage.setItem(CONFIG.storageKey, JSON.stringify(exportRoot.gameState));
		    } catch (e) {
		        console.error("Save state failed:", e);
		    }
		};
		
		function playSound(type) {
		    try {
		        var audio = new Audio(CONFIG.soundPaths[type]);
		        audio.play().catch(function(){});
		    } catch (e) {}
		}
		
		// =====================================================
		// HTML HELPERS
		// =====================================================
		function getInputDomId(name) {
		    return "html_" + CONFIG.lessonId + "_" + CONFIG.exerciseId + "_" + name;
		}
		
		function createOrGetHtmlInput(name) {
		    var id = getInputDomId(name);
		    var input = document.getElementById(id);
		
		    if (!input) {
		        input = document.createElement("input");
		        input.type = "text";
		        input.id = id;
		        input.inputMode = "text";
		        input.maxLength = 1;
		        input.style.position = "fixed";
		        input.style.zIndex = "99999";
		        input.style.textAlign = "center";
		        input.style.fontFamily = "'Rubik', Arial, sans-serif";
		        input.style.fontWeight = "700";
		        input.style.background = "transparent";
		        input.style.border = "none";
		        input.style.outline = "none";
		        input.style.padding = "0";
		        input.style.margin = "0";
		        document.body.appendChild(input);
		    }
		
		    input.style.display = "block";
		    input.style.visibility = "visible";
		    input.style.opacity = "1";
		
		    return input;
		}
		
		function positionInput(name) {
		    var clip = exportRoot[name];
		    var input = document.getElementById(getInputDomId(name));
		    if (!clip || !input || !exportRoot.stage || !exportRoot.stage.canvas) return;
		
		    var canvasRect = exportRoot.stage.canvas.getBoundingClientRect();
		    var sX = exportRoot.stage.scaleX || 1;
		    var sY = exportRoot.stage.scaleY || 1;
		    var bX = canvasRect.width / exportRoot.stage.canvas.width;
		    var bY = canvasRect.height / exportRoot.stage.canvas.height;
		
		    var b = clip.getBounds() || clip.nominalBounds || { width: 40, height: 40 };
		    var globalPos = clip.localToGlobal(0, 0);
		
		    var w = b.width * sX * bX;
		    var h = b.height * sY * bY;
		
		    input.style.left = (canvasRect.left + (globalPos.x * bX) - (w * 0.5)) + "px";
		    input.style.top = (canvasRect.top + (globalPos.y * bY) - (h * 0.5)) + "px";
		    input.style.width = w + "px";
		    input.style.height = h + "px";
		    input.style.fontSize = Math.floor(h * 0.7) + "px";
		    input.style.lineHeight = h + "px";
		}
		
		function positionAllInputs() {
		    if (!CONFIG.selectedVariant) return;
		    Object.keys(CONFIG.selectedVariant.inputs).forEach(positionInput);
		}
		
		function hideAllDomInputs() {
		    ALL_INPUT_NAMES.forEach(function(name) {
		        var el = document.getElementById(getInputDomId(name));
		        if (el) el.style.display = "none";
		    });
		}
		
		function hideAllTimelineInputs() {
		    ALL_INPUT_NAMES.forEach(function(name) {
		        if (exportRoot[name]) {
		            exportRoot[name].visible = false;
		            exportRoot[name].alpha = 0;
		        }
		    });
		}
		
		function hideAllImages() {
		    CONFIG.allVariants.forEach(function(variant) {
		        if (exportRoot[variant.img]) {
		            exportRoot[variant.img].visible = false;
		            exportRoot[variant.img].alpha = 0;
		        }
		    });
		}
		
		function cleanupVisualsForLeavingThisExercise() {
		    hideAllImages();
		    hideAllTimelineInputs();
		    hideAllDomInputs();
		}
		
		// =====================================================
		// EXERCISE SETUP
		// =====================================================
		function setupExercise() {
		    hideAllImages();
		    hideAllTimelineInputs();
		    hideAllDomInputs();
		
		    if (!CONFIG.selectedVariant) return;
		
		    // selected image харуулах
		    if (exportRoot[CONFIG.selectedVariant.img]) {
		        exportRoot[CONFIG.selectedVariant.img].visible = true;
		        exportRoot[CONFIG.selectedVariant.img].alpha = 1;
		    }
		
		    Object.keys(CONFIG.selectedVariant.inputs).forEach(function(name) {
		        var clip = exportRoot[name];
		        if (clip) {
		            clip.visible = true;
		            clip.alpha = 0.01;
		        }
		
		        var input = createOrGetHtmlInput(name);
		        input.value = exportRoot.gameState[CONFIG.positionsKey][name] || "";
		        input.disabled = !!exportRoot.gameState[CONFIG.completeKey];
		        input.readOnly = !!exportRoot.gameState[CONFIG.completeKey];
		        input.style.color = "#222";
		
		        if (input.value === CONFIG.selectedVariant.inputs[name]) {
		            input.style.color = "#1F5F1A";
		        }
		
		        input.oninput = function() {
		            if (exportRoot.gameState[CONFIG.completeKey]) return;
		
		            this.value = this.value.replace(/[^0-9><=]/g, "").slice(0, 1);
		
		            exportRoot.gameState[CONFIG.positionsKey][name] = this.value;
		            exportRoot.saveState();
		
		            if (this.value === "") {
		                this.style.color = "#222";
		                return;
		            }
		
		            if (this.value === CONFIG.selectedVariant.inputs[name]) {
		                this.style.color = "#1F5F1A";
		                if (exportRoot.playCharacterAnimation) {
		                    exportRoot.playCharacterAnimation("correct");
		                }
		                playSound("correct");
		            } else {
		                this.style.color = "#E54848";
		                if (exportRoot.playCharacterAnimation) {
		                    exportRoot.playCharacterAnimation("wrong");
		                }
		                playSound("wrong");
		            }
		
		            checkCompletion();
		        };
		
		        input.onfocus = function() {
		            if (!exportRoot.gameState[CONFIG.completeKey] && this.value !== "" && this.value !== CONFIG.selectedVariant.inputs[name]) {
		                this.style.color = "#E54848";
		            }
		        };
		
		        positionInput(name);
		    });
		
		    if (exportRoot.gameState[CONFIG.completeKey]) {
		        applyCompletedState();
		    }
		}
		
		function applyCompletedState() {
		    Object.keys(CONFIG.selectedVariant.inputs).forEach(function(name) {
		        var input = createOrGetHtmlInput(name);
		        input.value = CONFIG.selectedVariant.inputs[name];
		        input.disabled = true;
		        input.readOnly = true;
		        input.style.color = "#1F5F1A";
		        input.style.display = "block";
		        input.style.visibility = "visible";
		        input.style.opacity = "1";
		        positionInput(name);
		    });
		
		    if (exportRoot.refreshNavButtons) {
		        exportRoot.refreshNavButtons();
		    }
		}
		
		function checkCompletion() {
		    var allCorrect = true;
		
		    Object.keys(CONFIG.selectedVariant.inputs).forEach(function(name) {
		        var el = document.getElementById(getInputDomId(name));
		        if (!el || el.value !== CONFIG.selectedVariant.inputs[name]) {
		            allCorrect = false;
		        }
		    });
		
		    if (!allCorrect) return;
		    if (exportRoot.gameState[CONFIG.completeKey]) return;
		
		    exportRoot.gameState[CONFIG.completeKey] = true;
		    exportRoot.saveState();
		
		    if (exportRoot.playCharacterAnimation) {
		        exportRoot.playCharacterAnimation("correct");
		    }
		
		    applyCompletedState();
		
			// Navigate to video frame
			setTimeout(function() {
				console.log("🚀 Navigating to frame:", CONFIG.nextFrame);
				if (exportRoot.gotoAndStop) {
					cleanupVisualsForLeavingThisExercise();
					exportRoot.gotoAndStop(CONFIG.nextFrame);
				} else {
					console.error("❌ gotoAndStop not available!");
				}
			}, CONFIG.autoNextDelay);
		
		    // ЭНД ШУУД gotoAndStop хийхгүй
		    // Хэрэглэгч зөв бөглөсөн хариугаа хараад next товчоор өөрөө орно
		}
		
		// =====================================================
		// INITIAL
		// =====================================================
		if (exportRoot.help_popup) {
		    exportRoot.help_popup.visible = false;
		    if (exportRoot.help_popup.stop) exportRoot.help_popup.stop();
		}
		
		if (exportRoot.refreshNavButtons) {
		    exportRoot.refreshNavButtons();
		}
		
		setupExercise();
		
		// =====================================================
		// LISTENERS
		// =====================================================
		if (exportRoot.resizeHandler) {
		    window.removeEventListener("resize", exportRoot.resizeHandler);
		}
		exportRoot.resizeHandler = positionAllInputs;
		window.addEventListener("resize", exportRoot.resizeHandler);
		
		if (exportRoot.tickAttached && createjs && createjs.Ticker && exportRoot.tickHandler) {
		    createjs.Ticker.removeEventListener("tick", exportRoot.tickHandler);
		    exportRoot.tickAttached = false;
		}
		
		if (!exportRoot.tickAttached && createjs && createjs.Ticker) {
		    exportRoot.tickHandler = function() {
		        if (!CONFIG.selectedVariant) return;
		
		        // энэ дасгал дээр байх үедээ л байрлалыг update хийнэ
		        Object.keys(CONFIG.selectedVariant.inputs).forEach(function(name) {
		            var el = document.getElementById(getInputDomId(name));
		            if (el && el.style.display !== "none") {
		                positionInput(name);
		            }
		        });
		    };
		    createjs.Ticker.addEventListener("tick", exportRoot.tickHandler);
		    exportRoot.tickAttached = true;
		}
		
		if (exportRoot.stopInstruction) exportRoot.stopInstruction();
		if (!exportRoot.gameState[CONFIG.completeKey]) {
		    setTimeout(function() {
		        if (exportRoot.playInstruction) exportRoot.playInstruction();
		    }, 500);
		}
		
		// =====================================================
		// CLEANUP
		// =====================================================
		exportRoot.on("removed", function() {
		    if (exportRoot.stopInstruction) exportRoot.stopInstruction();
		
		    if (exportRoot.resizeHandler) {
		        window.removeEventListener("resize", exportRoot.resizeHandler);
		        exportRoot.resizeHandler = null;
		    }
		
		    if (exportRoot.tickAttached && createjs && createjs.Ticker && exportRoot.tickHandler) {
		        createjs.Ticker.removeEventListener("tick", exportRoot.tickHandler);
		        exportRoot.tickAttached = false;
		        exportRoot.tickHandler = null;
		    }
		
		    // ЧУХАЛ: энэ дасгалаас гарахад зураг нь өмнөх/дараагийн frame дээр үлдэхгүй
		    cleanupVisualsForLeavingThisExercise();
		});
		function applyTextStyling(textObj, opts) {
			if (!textObj || !(textObj instanceof createjs.Text) || !textObj.parent) return;
		
			opts = opts || {};
		
			// Фонт тохиргоо - Default-оор Rubik Bold ашиглана
			var fontSize = opts.fontSize || textObj.font.split('px')[0] || "40"; 
			var fontStyle = opts.fontStyle || "bold";
			var fontFamily = opts.fontFamily || "'Rubik', sans-serif";
			
			// textObj-ийн фонтыг шинэчлэх
			textObj.font = fontStyle + " " + fontSize + "px " + fontFamily;
		
			var outlineColor = opts.outlineColor || "#461A17";
			var outlineSize = opts.outlineSize || 6;
			var fillColor = opts.fillColor || "#FFFFFF";
			var shadowColor = opts.shadowColor || "rgba(60, 20, 0, 0.4)";
			var pad = opts.pad || 60;
		
			var savedX = textObj.x;
			var savedY = textObj.y;
			var parent = textObj.parent;
			var cloneName = "__strokeClone_" + (textObj.name || "text");
		
			// Өмнө үлдсэн ижил clone-уудыг parent-оос цэвэрлэнэ
			for (var i = parent.numChildren - 1; i >= 0; i--) {
				var child = parent.getChildAt(i);
				if (child && child.name === cloneName) {
					if (child.cacheCanvas) child.uncache();
					parent.removeChild(child);
				}
			}
		
			// Хуучин cache арилгана
			if (textObj.cacheCanvas) {
				textObj.uncache();
			}
		
			textObj.outline = null;
			textObj.color = fillColor;
			textObj.shadow = new createjs.Shadow(shadowColor, 3, 3, 6);
		
			// Stroke үүсгэхдээ шинэчлэгдсэн фонтыг ашиглана
			var strokeText = new createjs.Text(textObj.text, textObj.font, outlineColor);
			strokeText.name = cloneName;
			strokeText.textAlign = textObj.textAlign;
			strokeText.textBaseline = textObj.textBaseline;
			strokeText.x = savedX;
			strokeText.y = savedY;
			strokeText.scaleX = textObj.scaleX;
			strokeText.scaleY = textObj.scaleY;
			strokeText.rotation = textObj.rotation;
			strokeText.skewX = textObj.skewX;
			strokeText.skewY = textObj.skewY;
			strokeText.regX = textObj.regX;
			strokeText.regY = textObj.regY;
			strokeText.outline = outlineSize;
			strokeText.shadow = null;
			strokeText.mouseEnabled = false;
		
			var idx = parent.getChildIndex(textObj);
			parent.addChildAt(strokeText, idx);
		
			textObj._strokeClone = strokeText;
		
			// Cache хэрэглэх
			var bounds = textObj.getBounds();
			if (bounds) {
				var cacheX = bounds.x - pad;
				var cacheY = bounds.y - pad;
				var cacheW = bounds.width + pad * 2;
				var cacheH = bounds.height + pad * 2;
		
				if (strokeText.cacheCanvas) strokeText.uncache();
				if (textObj.cacheCanvas) textObj.uncache();
		
				strokeText.cache(cacheX, cacheY, cacheW, cacheH);
				textObj.cache(cacheX, cacheY, cacheW, cacheH);
			}
		
			// Cleanup logic
			if (textObj._onRemovedCleanup) {
				textObj.off("removed", textObj._onRemovedCleanup);
			}
		
			textObj._onRemovedCleanup = function () {
				if (strokeText) {
					if (strokeText.cacheCanvas) strokeText.uncache();
					if (strokeText.parent) {
						strokeText.parent.removeChild(strokeText);
					}
				}
				if (textObj.cacheCanvas) {
					textObj.uncache();
				}
				textObj._strokeClone = null;
			};
		
			textObj.on("removed", textObj._onRemovedCleanup);
		
			// Байрлалыг баталгаажуулах
			textObj.x = savedX;
			textObj.y = savedY;
			strokeText.x = savedX;
			strokeText.y = savedY;
		}
		
		var exerciseText = {
			mn: {
				title: "ХЯНАХ САМБАР",
				instruction: "Хянах самбарын будсан хэсэгт тохирох энгийн бутархайг бичээд жишээрэй."
			},
			kz: {
				title: "БАҚЫЛАУ ТАҚТАСЫ",
				instruction: "Бақылау тақтасындағы боялған бөлікке сәйкес келетін жай бөлшекті жазып, салыстырыңыз."
			},
			tuva: {
				title: "ХЫНААР САМБАЗЫ",
				instruction: "Хынаар самбазының өөделген кезээнге тааржыыр эңгин бөлүктү бижип, деңнеп көрүңер."
			},
			sign: {
				title: "ХЯНАХ САМБАР",
				instruction: "Хянах самбарын будсан хэсэгт тохирох энгийн бутархайг бичээд жишээрэй."
			}
		};
		
		var lang = exportRoot.gameState.selectedLanguage || "mn";
		var texts = exerciseText[lang];
		
		function findTextByContent(container, content) {
			if (!container) return null;
		
			if (container instanceof createjs.Text && container.text === content) {
				return container;
			}
		
			if (!container.numChildren) return null;
		
			for (var i = 0; i < container.numChildren; i++) {
				var found = findTextByContent(container.getChildAt(i), content);
				if (found) return found;
			}
		
			return null;
		}
		
		var txt_title = findTextByContent(exportRoot, "txt_title");
		var txt_instruction = findTextByContent(exportRoot, "txt_instruction");
		
		
		console.log("exerciseText[lang]");
		console.log(exerciseText[lang]);
		console.log(exportRoot.txt_title);
		if (txt_title) {
			txt_title.text = texts.title;
			applyTextStyling(txt_title, {
				outlineSize: 15,
				outlineColor: "#461A17",
				fillColor: "#FFFFFF",
				pad: 80
			});
		}else {
			console.log("exportRoot.txt_title not found");
		}
		
		console.log('--------------------------');
		console.log(exportRoot);
		console.log('--------------------------');
		
		if (txt_instruction) {
			txt_instruction.text = texts.instruction;
		}
	}
	this.frame_19 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		
		// =====================================================
		// CONFIG
		// =====================================================
		var CONFIG = {
		    lessonId: "lesson6",
		    lessonFolder: "Lesson6",
		    videoId: "map06",
		    videoFile: "./videos/lesson6_map6.mp4",
		    containerId: "success-video-map06",
		    nextFrame: 20,
		    backgroundColor: "#6B4FBB",
		    zIndex: "9999",
		    autoSkipOnError: true,
		    autoMarkWatchedOnSkip: true
		};
		
		// =====================================================
		// INIT
		// =====================================================
		if (!exportRoot.gameState) {
		    exportRoot.gameState = {};
		}
		
		if (!exportRoot.gameState.videosWatched) {
		    exportRoot.gameState.videosWatched = [];
		}
		
		if (!exportRoot.saveState) {
		    exportRoot.saveState = function() {};
		}
		
		var videoContainer = null;
		var videoElement = null;
		var resizeHandler = null;
		var started = false;
		var endedOrSkipped = false;
		
		// =====================================================
		// HELPERS
		// =====================================================
		function hasWatchedVideo() {
		    return exportRoot.gameState.videosWatched.indexOf(CONFIG.videoId) !== -1;
		}
		
		function markVideoWatched() {
		    if (!hasWatchedVideo()) {
		        exportRoot.gameState.videosWatched.push(CONFIG.videoId);
		        exportRoot.saveState();
		    }
		}
		
		function lockPageScroll() {
		    document.body.style.overflow = "hidden";
		    document.documentElement.style.overflow = "hidden";
		}
		
		function unlockPageScroll() {
		    document.body.style.overflow = "";
		    document.documentElement.style.overflow = "";
		}
		
		function cleanup() {
		    unlockPageScroll();
		
		    if (videoElement) {
		        try {
		            videoElement.pause();
		            videoElement.removeAttribute("src");
		            videoElement.load();
		        } catch (e) {}
		        videoElement = null;
		    }
		
		    if (videoContainer && videoContainer.parentNode) {
		        videoContainer.parentNode.removeChild(videoContainer);
		        videoContainer = null;
		    }
		
		    if (resizeHandler) {
		        window.removeEventListener("resize", resizeHandler);
		        resizeHandler = null;
		    }
		}
		
		function updateContainerPosition() {
		    if (!videoContainer) return;
		
		    var canvas = document.getElementById("canvas");
		    if (!canvas) return;
		
		    var rect = canvas.getBoundingClientRect();
		
		    videoContainer.style.left = rect.left + "px";
		    videoContainer.style.top = rect.top + "px";
		    videoContainer.style.width = rect.width + "px";
		    videoContainer.style.height = rect.height + "px";
		}
		
		function goToNextExercise(reason) {
		    if (endedOrSkipped) return;
		    endedOrSkipped = true;
		
		    if (CONFIG.autoMarkWatchedOnSkip) {
		        markVideoWatched();
		    }
		
		    cleanup();
		
		    exportRoot.gameState.currentFrame = CONFIG.nextFrame;
		    exportRoot.saveState();
		    exportRoot.gotoAndStop(CONFIG.nextFrame);
		}
		
		function tryPlayVideo() {
		    if (!videoElement || started) return;
		    started = true;
		
		    var playPromise = videoElement.play();
		
		    if (playPromise && typeof playPromise.catch === "function") {
		        playPromise.catch(function(err) {
		            console.log("Video autoplay failed:", err);
		            goToNextExercise("autoplay_failed");
		        });
		    }
		}
		
		// =====================================================
		// MAIN
		// =====================================================
		function createSuccessVideo() {
		    var existingContainer = document.getElementById(CONFIG.containerId);
		    if (existingContainer && existingContainer.parentNode) {
		        existingContainer.parentNode.removeChild(existingContainer);
		    }
		
		    var canvas = document.getElementById("canvas");
		    if (!canvas) {
		        goToNextExercise("canvas_missing");
		        return;
		    }
		
		    if (hasWatchedVideo()) {
		        goToNextExercise("already_watched");
		        return;
		    }
		
		    lockPageScroll();
		
		    var rect = canvas.getBoundingClientRect();
		
		    videoContainer = document.createElement("div");
		    videoContainer.id = CONFIG.containerId;
		    videoContainer.style.position = "fixed";
		    videoContainer.style.left = rect.left + "px";
		    videoContainer.style.top = rect.top + "px";
		    videoContainer.style.width = rect.width + "px";
		    videoContainer.style.height = rect.height + "px";
		    videoContainer.style.backgroundColor = CONFIG.backgroundColor;
		    videoContainer.style.zIndex = CONFIG.zIndex;
		    videoContainer.style.overflow = "hidden";
		    videoContainer.style.margin = "0";
		    videoContainer.style.padding = "0";
		    videoContainer.style.boxSizing = "border-box";
		
		    videoElement = document.createElement("video");
		    videoElement.src = CONFIG.videoFile;
		    videoElement.style.width = "100%";
		    videoElement.style.height = "100%";
		    videoElement.style.objectFit = "contain";
		    videoElement.style.display = "block";
		    videoElement.preload = "auto";
		    videoElement.playsInline = true;
		    videoElement.setAttribute("playsinline", "true");
		    videoElement.setAttribute("webkit-playsinline", "true");
		
		    // Зарим browser autoplay дээр дууг хаадаг.
		    // Хэрэв заавал sound-тай autoplay хэрэгтэй бол browser policy-оос хамаарна.
		    // Найдвартай ажиллуулахын тулд muted=true болгож болно.
		    videoElement.muted = false;
		    videoElement.autoplay = false;
		    videoElement.controls = false;
		
		    videoContainer.appendChild(videoElement);
		    document.body.appendChild(videoContainer);
		
		    videoElement.addEventListener("loadeddata", function() {
		        tryPlayVideo();
		    });
		
		    videoElement.addEventListener("canplay", function() {
		        tryPlayVideo();
		    });
		
		    videoElement.addEventListener("ended", function() {
		        markVideoWatched();
		        setTimeout(function() {
		            goToNextExercise("ended");
		        }, 500);
		    });
		
		    videoElement.addEventListener("error", function() {
		        console.log("Video load error:", videoElement.error, CONFIG.videoFile);
		        if (CONFIG.autoSkipOnError) {
		            goToNextExercise("error");
		        }
		    });
		
		    resizeHandler = function() {
		        updateContainerPosition();
		    };
		
		    window.addEventListener("resize", resizeHandler);
		    updateContainerPosition();
		
		    // Хэрэв ямар ч event trigger болохгүй гацвал fallback
		    setTimeout(function() {
		        if (!started && !endedOrSkipped) {
		            console.log("Video start timeout, skipping:", CONFIG.videoFile);
		            goToNextExercise("timeout");
		        }
		    }, 4000);
		}
		
		exportRoot.on("removed", cleanup);
		
		createSuccessVideo();
	}
	this.frame_20 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		// =====================================================
		// CONFIG
		// =====================================================
		var CONFIG = {
		    lessonId: "lesson6",
		    exerciseId: "ex07",
		    exerciseNumber: 7,
		    storageKey: "lesson6_gameState",
		    backFrame: 18,
		    nextFrame: 21,
		    autoNextDelay: 1500,
		    soundPaths: {
		        correct: "./sounds/voice_correct.mp3",
		        wrong: "./sounds/voice_wrong.mp3",
		        click: "./sounds/click.mp3"
		    },
		    cars: ["img_7_1", "img_7_2", "img_7_3", "img_7_4"],
		    correctOrder: ["img_7_1", "img_7_3", "img_7_4", "img_7_2"]
		};
		
		exportRoot.currentExerciseId = CONFIG.exerciseId;
		exportRoot.backBtn = CONFIG.backFrame;
		exportRoot.nextBtn = CONFIG.nextFrame;
		CONFIG.completeKey = "exercise" + CONFIG.exerciseNumber + "Complete";
		CONFIG.posKey = "exercise" + CONFIG.exerciseNumber + "CarPositions";
		CONFIG.slotKey = "exercise" + CONFIG.exerciseNumber + "SlotPositions";
		
		// Машин бүрийн зөв slot index
		var CORRECT_SLOT_BY_CAR = {};
		for (var i = 0; i < CONFIG.correctOrder.length; i++) {
		    CORRECT_SLOT_BY_CAR[CONFIG.correctOrder[i]] = i;
		}
		
		// =====================================================
		// STATE & INIT
		// =====================================================
		if (!exportRoot.gameState) exportRoot.gameState = {};
		if (typeof exportRoot.gameState[CONFIG.completeKey] === "undefined") {
		    exportRoot.gameState[CONFIG.completeKey] = false;
		}
		
		var SLOTS = [];
		
		function playSound(type) {
		    try {
		        new Audio(CONFIG.soundPaths[type]).play().catch(function(){});
		    } catch (e) {}
		}
		
		function saveStateToLocal() {
		    try {
		        localStorage.setItem(CONFIG.storageKey, JSON.stringify(exportRoot.gameState));
		    } catch (e) {}
		}
		
		function savePositions() {
		    var currentPositions = {};
		    CONFIG.cars.forEach(function(name) {
		        var car = exportRoot[name];
		        if (car) currentPositions[name] = car.currentSlotIdx;
		    });
		    exportRoot.gameState[CONFIG.posKey] = currentPositions;
		    saveStateToLocal();
		}
		
		function saveSlotsOnce() {
		    if (exportRoot.gameState[CONFIG.slotKey] && exportRoot.gameState[CONFIG.slotKey].length === CONFIG.cars.length) {
		        SLOTS = exportRoot.gameState[CONFIG.slotKey].slice();
		        return;
		    }
		
		    var fixedSlots = [];
		    CONFIG.cars.forEach(function(name) {
		        var car = exportRoot[name];
		        if (car) {
		            fixedSlots.push({ x: car.x, y: car.y });
		        }
		    });
		
		    exportRoot.gameState[CONFIG.slotKey] = fixedSlots;
		    SLOTS = fixedSlots.slice();
		    saveStateToLocal();
		}
		
		function setCarLocked(car, locked) {
		    car.isLocked = locked;
		    car.mouseEnabled = !locked;
		    car.mouseChildren = false;
		    car.cursor = locked ? "default" : "pointer";
		    car.alpha = locked ? 0.8 : 1;
		}
		
		function updateLocks() {
		    CONFIG.cars.forEach(function(name) {
		        var car = exportRoot[name];
		        if (!car) return;
		
		        var correctIdx = CORRECT_SLOT_BY_CAR[name];
		        var shouldLock = (car.currentSlotIdx === correctIdx);
		
		        setCarLocked(car, shouldLock);
		    });
		}
		
		function isAllLockedCorrect() {
		    for (var i = 0; i < CONFIG.cars.length; i++) {
		        var name = CONFIG.cars[i];
		        var car = exportRoot[name];
		        if (!car) return false;
		        if (car.currentSlotIdx !== CORRECT_SLOT_BY_CAR[name]) return false;
		    }
		    return true;
		}
		
		function moveCarsToSavedSlots() {
		    var savedPos = exportRoot.gameState[CONFIG.posKey];
		
		    if (!savedPos) {
		        CONFIG.cars.forEach(function(name, idx) {
		            var car = exportRoot[name];
		            if (!car) return;
		            car.currentSlotIdx = idx;
		            car.x = SLOTS[idx].x;
		            car.y = SLOTS[idx].y;
		        });
		        return;
		    }
		
		    CONFIG.cars.forEach(function(name, idx) {
		        var car = exportRoot[name];
		        if (!car) return;
		
		        var slotIdx = savedPos[name];
		        if (typeof slotIdx !== "number" || !SLOTS[slotIdx]) {
		            slotIdx = idx;
		        }
		
		        car.currentSlotIdx = slotIdx;
		        car.x = SLOTS[slotIdx].x;
		        car.y = SLOTS[slotIdx].y;
		    });
		}
		
		function clearOldListeners(car) {
		    if (!car) return;
		    car.removeAllEventListeners("mousedown");
		    car.removeAllEventListeners("pressmove");
		    car.removeAllEventListeners("pressup");
		    createjs.Tween.removeTweens(car);
		}
		
		// =====================================================
		// SWAP ENGINE
		// =====================================================
		function initSwapExercise() {
		    saveSlotsOnce();
		    moveCarsToSavedSlots();
		
		    CONFIG.cars.forEach(function(name) {
		        var car = exportRoot[name];
		        if (car) car.isLocked = false;
		    });
		    updateLocks();
		
		    CONFIG.cars.forEach(function(name) {
		        var car = exportRoot[name];
		        if (!car) return;
		
		        clearOldListeners(car);
		
		        car.cursor = "pointer";
		        car.mouseChildren = false;
		
		        car.on("mousedown", function(evt) {
		            if (exportRoot.gameState[CONFIG.completeKey]) return;
		            if (car.isLocked) return;
		
		            // addChild хийхээс ӨМНӨ offset-оо бодно
		            var parentBeforeDrag = car.parent;
		            var localPos = parentBeforeDrag.globalToLocal(evt.stageX, evt.stageY);
		
		            car.offset = {
		                x: car.x - localPos.x,
		                y: car.y - localPos.y
		            };
		
		            exportRoot.addChild(car);
		        });
		
		        car.on("pressmove", function(evt) {
		            if (exportRoot.gameState[CONFIG.completeKey]) return;
		            if (car.isLocked) return;
		
		            var localPos = car.parent.globalToLocal(evt.stageX, evt.stageY);
		            car.x = localPos.x + car.offset.x;
		            car.y = localPos.y + car.offset.y;
		        });
		
		        car.on("pressup", function() {
		            if (exportRoot.gameState[CONFIG.completeKey]) return;
		            if (car.isLocked) return;
		
		            var targetCar = null;
		
		            CONFIG.cars.forEach(function(otherName) {
		                if (otherName === name) return;
		
		                var otherCar = exportRoot[otherName];
		                if (!otherCar) return;
		                if (otherCar.isLocked) return;
		
		                var dx = car.x - otherCar.x;
		                var dy = car.y - otherCar.y;
		                var dist = Math.sqrt(dx * dx + dy * dy);
		
		                if (dist < 70) {
		                    targetCar = otherCar;
		                }
		            });
		
		            if (targetCar) {
		                playSound("click");
		
		                var oldIdx = car.currentSlotIdx;
		                var newIdx = targetCar.currentSlotIdx;
		
		                car.currentSlotIdx = newIdx;
		                targetCar.currentSlotIdx = oldIdx;
		
		                createjs.Tween.removeTweens(car);
		                createjs.Tween.removeTweens(targetCar);
		
		                createjs.Tween.get(car).to(
		                    { x: SLOTS[newIdx].x, y: SLOTS[newIdx].y },
		                    300,
		                    createjs.Ease.backOut
		                );
		
		                createjs.Tween.get(targetCar).to(
		                    { x: SLOTS[oldIdx].x, y: SLOTS[oldIdx].y },
		                    300,
		                    createjs.Ease.backOut
		                ).call(function() {
		                    updateLocks();
		                    savePositions();
		                    checkWin();
		                });
		            } else {
		                createjs.Tween.removeTweens(car);
		                createjs.Tween.get(car).to(
		                    { x: SLOTS[car.currentSlotIdx].x, y: SLOTS[car.currentSlotIdx].y },
		                    300
		                ).call(function() {
		                    updateLocks();
		                    savePositions();
		                    checkWin();
		                });
		            }
		        });
		    });
		}
		
		function checkWin() {
		    if (!isAllLockedCorrect()) return;
		
		    exportRoot.gameState[CONFIG.completeKey] = true;
		    savePositions();
		
		    exportRoot.playCharacterAnimation("correct");
		    if (exportRoot.refreshNavButtons) exportRoot.refreshNavButtons();
		
		    setTimeout(function() {
		        exportRoot.gotoAndStop(CONFIG.nextFrame);
		    }, CONFIG.autoNextDelay);
		}
		
		// =====================================================
		// COMMON HELP & NAVIGATION
		// =====================================================
		if (exportRoot.help_popup) {
		    exportRoot.help_popup.visible = false;
		    exportRoot.help_popup.stop();
		    var currentLang = exportRoot.gameState.selectedLanguage || "mn";
		    exportRoot.help_popup.gotoAndStop(currentLang);
		}
		
		if (exportRoot.refreshNavButtons) exportRoot.refreshNavButtons();
		
		initSwapExercise();
		
		if (exportRoot.stopInstruction) exportRoot.stopInstruction();
		if (!exportRoot.gameState[CONFIG.completeKey]) {
		    setTimeout(function() {
		        if (exportRoot.playInstruction) exportRoot.playInstruction();
		    }, 500);
		}
		
		exportRoot.on("removed", function() {
		    if (exportRoot.stopInstruction) exportRoot.stopInstruction();
		
		    CONFIG.cars.forEach(function(name) {
		        var car = exportRoot[name];
		        clearOldListeners(car);
		    });
		});
		function applyTextStyling(textObj, opts) {
			if (!textObj || !(textObj instanceof createjs.Text) || !textObj.parent) return;
		
			opts = opts || {};
		
			// Фонт тохиргоо - Default-оор Rubik Bold ашиглана
			var fontSize = opts.fontSize || textObj.font.split('px')[0] || "40"; 
			var fontStyle = opts.fontStyle || "bold";
			var fontFamily = opts.fontFamily || "'Rubik', sans-serif";
			
			// textObj-ийн фонтыг шинэчлэх
			textObj.font = fontStyle + " " + fontSize + "px " + fontFamily;
		
			var outlineColor = opts.outlineColor || "#461A17";
			var outlineSize = opts.outlineSize || 6;
			var fillColor = opts.fillColor || "#FFFFFF";
			var shadowColor = opts.shadowColor || "rgba(60, 20, 0, 0.4)";
			var pad = opts.pad || 60;
		
			var savedX = textObj.x;
			var savedY = textObj.y;
			var parent = textObj.parent;
			var cloneName = "__strokeClone_" + (textObj.name || "text");
		
			// Өмнө үлдсэн ижил clone-уудыг parent-оос цэвэрлэнэ
			for (var i = parent.numChildren - 1; i >= 0; i--) {
				var child = parent.getChildAt(i);
				if (child && child.name === cloneName) {
					if (child.cacheCanvas) child.uncache();
					parent.removeChild(child);
				}
			}
		
			// Хуучин cache арилгана
			if (textObj.cacheCanvas) {
				textObj.uncache();
			}
		
			textObj.outline = null;
			textObj.color = fillColor;
			textObj.shadow = new createjs.Shadow(shadowColor, 3, 3, 6);
		
			// Stroke үүсгэхдээ шинэчлэгдсэн фонтыг ашиглана
			var strokeText = new createjs.Text(textObj.text, textObj.font, outlineColor);
			strokeText.name = cloneName;
			strokeText.textAlign = textObj.textAlign;
			strokeText.textBaseline = textObj.textBaseline;
			strokeText.x = savedX;
			strokeText.y = savedY;
			strokeText.scaleX = textObj.scaleX;
			strokeText.scaleY = textObj.scaleY;
			strokeText.rotation = textObj.rotation;
			strokeText.skewX = textObj.skewX;
			strokeText.skewY = textObj.skewY;
			strokeText.regX = textObj.regX;
			strokeText.regY = textObj.regY;
			strokeText.outline = outlineSize;
			strokeText.shadow = null;
			strokeText.mouseEnabled = false;
		
			var idx = parent.getChildIndex(textObj);
			parent.addChildAt(strokeText, idx);
		
			textObj._strokeClone = strokeText;
		
			// Cache хэрэглэх
			var bounds = textObj.getBounds();
			if (bounds) {
				var cacheX = bounds.x - pad;
				var cacheY = bounds.y - pad;
				var cacheW = bounds.width + pad * 2;
				var cacheH = bounds.height + pad * 2;
		
				if (strokeText.cacheCanvas) strokeText.uncache();
				if (textObj.cacheCanvas) textObj.uncache();
		
				strokeText.cache(cacheX, cacheY, cacheW, cacheH);
				textObj.cache(cacheX, cacheY, cacheW, cacheH);
			}
		
			// Cleanup logic
			if (textObj._onRemovedCleanup) {
				textObj.off("removed", textObj._onRemovedCleanup);
			}
		
			textObj._onRemovedCleanup = function () {
				if (strokeText) {
					if (strokeText.cacheCanvas) strokeText.uncache();
					if (strokeText.parent) {
						strokeText.parent.removeChild(strokeText);
					}
				}
				if (textObj.cacheCanvas) {
					textObj.uncache();
				}
				textObj._strokeClone = null;
			};
		
			textObj.on("removed", textObj._onRemovedCleanup);
		
			// Байрлалыг баталгаажуулах
			textObj.x = savedX;
			textObj.y = savedY;
			strokeText.x = savedX;
			strokeText.y = savedY;
		}
		
		var exerciseText = {
			mn: {
				title: "УРАЛДААНЫ ЗАМ",
				instruction: "Дараах энгийн бутархайнуудыг өсөх эрэмбээр уралдааны зам дээр байрлуулна уу."
			},
			kz: {
				title: "ЖАРЫС ЖОЛЫ",
				instruction: "Төмендегі жай бөлшектерді өсу ретімен жарыс жолына орналастырыңыз."
			},
			tuva: {
				title: "УРАЛДААН ЧОЛУ",
				instruction: "Дорудагы эңгин бөлүктерни өске эрээри-биле уралдаан чолга тургузуңар."
			},
			sign: {
				title: "УРАЛДААНЫ ЗАМ",
				instruction: "Дараах энгийн бутархайнуудыг өсөх эрэмбээр уралдааны зам дээр байрлуулна уу."
			}
		};
		
		var lang = exportRoot.gameState.selectedLanguage || "mn";
		var texts = exerciseText[lang];
		
		function findTextByContent(container, content) {
			if (!container) return null;
		
			if (container instanceof createjs.Text && container.text === content) {
				return container;
			}
		
			if (!container.numChildren) return null;
		
			for (var i = 0; i < container.numChildren; i++) {
				var found = findTextByContent(container.getChildAt(i), content);
				if (found) return found;
			}
		
			return null;
		}
		
		var txt_title = findTextByContent(exportRoot, "txt_title");
		var txt_instruction = findTextByContent(exportRoot, "txt_instruction");
		
		
		console.log("exerciseText[lang]");
		console.log(exerciseText[lang]);
		console.log(exportRoot.txt_title);
		if (txt_title) {
			txt_title.text = texts.title;
			applyTextStyling(txt_title, {
				outlineSize: 15,
				outlineColor: "#461A17",
				fillColor: "#FFFFFF",
				pad: 80
			});
		}else {
			console.log("exportRoot.txt_title not found");
		}
		
		console.log('--------------------------');
		console.log(exportRoot);
		console.log('--------------------------');
		
		if (txt_instruction) {
			txt_instruction.text = texts.instruction;
		}
	}
	this.frame_21 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		// =====================================================
		// CONFIG
		// =====================================================
		var CONFIG = {
		    lessonId: "lesson6",
		    lessonFolder: "Lesson6",
		    videoId: "map07",
		    videoFile: "./videos/lesson6_map7.mp4",
		    containerId: "success-video-map07",
		    nextFrame: 22,
		    backgroundColor: "#6B4FBB",
		    zIndex: "9999",
		    autoSkipOnError: true,
		    autoMarkWatchedOnSkip: true
		};
		
		// =====================================================
		// INIT
		// =====================================================
		if (!exportRoot.gameState) {
		    exportRoot.gameState = {};
		}
		
		if (!exportRoot.gameState.videosWatched) {
		    exportRoot.gameState.videosWatched = [];
		}
		
		if (!exportRoot.saveState) {
		    exportRoot.saveState = function() {};
		}
		
		var videoContainer = null;
		var videoElement = null;
		var resizeHandler = null;
		var started = false;
		var endedOrSkipped = false;
		
		// =====================================================
		// HELPERS
		// =====================================================
		function hasWatchedVideo() {
		    return exportRoot.gameState.videosWatched.indexOf(CONFIG.videoId) !== -1;
		}
		
		function markVideoWatched() {
		    if (!hasWatchedVideo()) {
		        exportRoot.gameState.videosWatched.push(CONFIG.videoId);
		        exportRoot.saveState();
		    }
		}
		
		function lockPageScroll() {
		    document.body.style.overflow = "hidden";
		    document.documentElement.style.overflow = "hidden";
		}
		
		function unlockPageScroll() {
		    document.body.style.overflow = "";
		    document.documentElement.style.overflow = "";
		}
		
		function cleanup() {
		    unlockPageScroll();
		
		    if (videoElement) {
		        try {
		            videoElement.pause();
		            videoElement.removeAttribute("src");
		            videoElement.load();
		        } catch (e) {}
		        videoElement = null;
		    }
		
		    if (videoContainer && videoContainer.parentNode) {
		        videoContainer.parentNode.removeChild(videoContainer);
		        videoContainer = null;
		    }
		
		    if (resizeHandler) {
		        window.removeEventListener("resize", resizeHandler);
		        resizeHandler = null;
		    }
		}
		
		function updateContainerPosition() {
		    if (!videoContainer) return;
		
		    var canvas = document.getElementById("canvas");
		    if (!canvas) return;
		
		    var rect = canvas.getBoundingClientRect();
		
		    videoContainer.style.left = rect.left + "px";
		    videoContainer.style.top = rect.top + "px";
		    videoContainer.style.width = rect.width + "px";
		    videoContainer.style.height = rect.height + "px";
		}
		
		function goToNextExercise(reason) {
		    if (endedOrSkipped) return;
		    endedOrSkipped = true;
		
		    if (CONFIG.autoMarkWatchedOnSkip) {
		        markVideoWatched();
		    }
		
		    cleanup();
		
		    exportRoot.gameState.currentFrame = CONFIG.nextFrame;
		    exportRoot.saveState();
		    exportRoot.gotoAndStop(CONFIG.nextFrame);
		}
		
		function tryPlayVideo() {
		    if (!videoElement || started) return;
		    started = true;
		
		    var playPromise = videoElement.play();
		
		    if (playPromise && typeof playPromise.catch === "function") {
		        playPromise.catch(function(err) {
		            console.log("Video autoplay failed:", err);
		            goToNextExercise("autoplay_failed");
		        });
		    }
		}
		
		// =====================================================
		// MAIN
		// =====================================================
		function createSuccessVideo() {
		    var existingContainer = document.getElementById(CONFIG.containerId);
		    if (existingContainer && existingContainer.parentNode) {
		        existingContainer.parentNode.removeChild(existingContainer);
		    }
		
		    var canvas = document.getElementById("canvas");
		    if (!canvas) {
		        goToNextExercise("canvas_missing");
		        return;
		    }
		
		    if (hasWatchedVideo()) {
		        goToNextExercise("already_watched");
		        return;
		    }
		
		    lockPageScroll();
		
		    var rect = canvas.getBoundingClientRect();
		
		    videoContainer = document.createElement("div");
		    videoContainer.id = CONFIG.containerId;
		    videoContainer.style.position = "fixed";
		    videoContainer.style.left = rect.left + "px";
		    videoContainer.style.top = rect.top + "px";
		    videoContainer.style.width = rect.width + "px";
		    videoContainer.style.height = rect.height + "px";
		    videoContainer.style.backgroundColor = CONFIG.backgroundColor;
		    videoContainer.style.zIndex = CONFIG.zIndex;
		    videoContainer.style.overflow = "hidden";
		    videoContainer.style.margin = "0";
		    videoContainer.style.padding = "0";
		    videoContainer.style.boxSizing = "border-box";
		
		    videoElement = document.createElement("video");
		    videoElement.src = CONFIG.videoFile;
		    videoElement.style.width = "100%";
		    videoElement.style.height = "100%";
		    videoElement.style.objectFit = "contain";
		    videoElement.style.display = "block";
		    videoElement.preload = "auto";
		    videoElement.playsInline = true;
		    videoElement.setAttribute("playsinline", "true");
		    videoElement.setAttribute("webkit-playsinline", "true");
		
		    // Зарим browser autoplay дээр дууг хаадаг.
		    // Хэрэв заавал sound-тай autoplay хэрэгтэй бол browser policy-оос хамаарна.
		    // Найдвартай ажиллуулахын тулд muted=true болгож болно.
		    videoElement.muted = false;
		    videoElement.autoplay = false;
		    videoElement.controls = false;
		
		    videoContainer.appendChild(videoElement);
		    document.body.appendChild(videoContainer);
		
		    videoElement.addEventListener("loadeddata", function() {
		        tryPlayVideo();
		    });
		
		    videoElement.addEventListener("canplay", function() {
		        tryPlayVideo();
		    });
		
		    videoElement.addEventListener("ended", function() {
		        markVideoWatched();
		        setTimeout(function() {
		            goToNextExercise("ended");
		        }, 500);
		    });
		
		    videoElement.addEventListener("error", function() {
		        console.log("Video load error:", videoElement.error, CONFIG.videoFile);
		        if (CONFIG.autoSkipOnError) {
		            goToNextExercise("error");
		        }
		    });
		
		    resizeHandler = function() {
		        updateContainerPosition();
		    };
		
		    window.addEventListener("resize", resizeHandler);
		    updateContainerPosition();
		
		    // Хэрэв ямар ч event trigger болохгүй гацвал fallback
		    setTimeout(function() {
		        if (!started && !endedOrSkipped) {
		            console.log("Video start timeout, skipping:", CONFIG.videoFile);
		            goToNextExercise("timeout");
		        }
		    }, 4000);
		}
		
		exportRoot.on("removed", cleanup);
		
		createSuccessVideo();
	}
	this.frame_22 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		// =====================================================
		// CONFIG
		// =====================================
		var CONFIG = {
			lessonId: "lesson6",
			exerciseId: "ex08",
			exerciseNumber: 8,
			storageKey: "lesson6_gameState",
			backFrame: 20, 
			nextFrame: 23, 
			autoNextDelay: 1500,
			soundPaths: {
				correct: "./sounds/voice_correct.mp3",
				wrong: "./sounds/voice_wrong.mp3",
				click: "./sounds/click.mp3"
			},
			// Чирэх объектууд
			items: ["txt_8_1", "txt_8_2", "txt_8_3", "txt_8_4"],
			// Чиний өгсөн зөв хариултын зураглал:
			correctMapping: {
				"target_8_1": "txt_8_3",
				"target_8_2": "txt_8_1",
				"target_8_3": "txt_8_4",
				"target_8_4": "txt_8_2"
			}
		};
		
		// --- Common хэсгүүд ---
		exportRoot.currentExerciseId = CONFIG.exerciseId;
		exportRoot.backBtn = CONFIG.backFrame;
		exportRoot.nextBtn = CONFIG.nextFrame;
		CONFIG.completeKey = "exercise" + CONFIG.exerciseNumber + "Complete";
		CONFIG.answersKey = "exercise" + CONFIG.exerciseNumber + "Answers";
		
		// =====================================================
		// STATE & INIT
		// =====================
		if (!exportRoot.gameState) exportRoot.gameState = {};
		if (!exportRoot.gameState[CONFIG.answersKey]) exportRoot.gameState[CONFIG.answersKey] = {};
		if (typeof exportRoot.gameState[CONFIG.completeKey] === "undefined") exportRoot.gameState[CONFIG.completeKey] = false;
		
		exportRoot.saveState = function() {
			try { localStorage.setItem(CONFIG.storageKey, JSON.stringify(exportRoot.gameState)); } catch (e) {}
		};
		
		function playSound(type) {
			try { new Audio(CONFIG.soundPaths[type]).play().catch(function(){}); } catch (e) {}
		}
		
		// =====================================================
		// DRAG AND DROP LOGIC
		// =====================
		var targetNames = Object.keys(CONFIG.correctMapping);
		
		function setupDragAndDrop() {
			CONFIG.items.forEach(function(itemName) {
				var item = exportRoot[itemName];
				if (!item) return;
		
				item.oldX = item.x;
				item.oldY = item.y;
				item.cursor = "pointer";
				item.mouseChildren = false;
		
				// 1. Хадгалагдсан төлөвийг сэргээх
				targetNames.forEach(function(tName) {
					if (exportRoot.gameState[CONFIG.answersKey][tName] === itemName) {
						var target = exportRoot[tName];
						if (target) {
							item.x = target.x;
							item.y = target.y;
							item.mouseEnabled = false;
						}
					}
				});
		
				// 2. Чирж эхлэх
				item.on("mousedown", function(evt) {
					if (exportRoot.gameState[CONFIG.completeKey]) return;
					exportRoot.addChild(item); // Хамгийн дээр гаргах
					var localPos = item.parent.globalToLocal(evt.stageX, evt.stageY);
					item.offset = { x: item.x - localPos.x, y: item.y - localPos.y };
				});
		
				// 3. Чирэх үйлдэл
				item.on("pressmove", function(evt) {
					if (exportRoot.gameState[CONFIG.completeKey]) return;
					var localPos = item.parent.globalToLocal(evt.stageX, evt.stageY);
					item.x = localPos.x + item.offset.x;
					item.y = localPos.y + item.offset.y;
				});
		
				// 4. Тавих үйлдэл
				item.on("pressup", function(evt) {
					if (exportRoot.gameState[CONFIG.completeKey]) return;
		
					var hitTargetName = null;
					targetNames.forEach(function(tName) {
						var target = exportRoot[tName];
						if (!target) return;
						
						// Зай болон HitTest шалгах
						var pt = target.globalToLocal(evt.stageX, evt.stageY);
						var dist = Math.sqrt(Math.pow(item.x - target.x, 2) + Math.pow(item.y - target.y, 2));
						
						if (target.hitTest(pt.x, pt.y) || dist < 60) {
							hitTargetName = tName;
						}
					});
		
					if (hitTargetName && CONFIG.correctMapping[hitTargetName] === itemName) {
						// ЗӨВ БАЙРЛАЛ
						playSound("click");
						item.x = exportRoot[hitTargetName].x;
						item.y = exportRoot[hitTargetName].y;
						item.mouseEnabled = false;
						
						exportRoot.gameState[CONFIG.answersKey][hitTargetName] = itemName;
						exportRoot.saveState();
						checkWin();
					} else {
						// БУРУУ БАЙРЛАЛ - Буцааж үсэргэх
						if (hitTargetName) exportRoot.playCharacterAnimation("wrong");
						createjs.Tween.get(item).to({ x: item.oldX, y: item.oldY }, 500, createjs.Ease.backOut);
					}
				});
			});
		}
		
		function checkWin() {
			var allDone = true;
			targetNames.forEach(function(tName) {
				if (exportRoot.gameState[CONFIG.answersKey][tName] !== CONFIG.correctMapping[tName]) {
					allDone = false;
				}
			});
		
			if (allDone) {
				exportRoot.gameState[CONFIG.completeKey] = true;
				exportRoot.saveState();
				exportRoot.playCharacterAnimation("correct");
				if (exportRoot.refreshNavButtons) exportRoot.refreshNavButtons();
				setTimeout(function() {
					exportRoot.gotoAndStop(CONFIG.nextFrame);
				}, CONFIG.autoNextDelay);
			}
		}
		
		// =====================================================
		// COMMON ELEMENTS
		// =====================
		if (exportRoot.help_popup) {
			exportRoot.help_popup.visible = false;
			exportRoot.help_popup.stop();
			var currentLang = exportRoot.gameState.selectedLanguage || "mn";
			exportRoot.help_popup.gotoAndStop(currentLang);
		}
		
		if (exportRoot.refreshNavButtons) exportRoot.refreshNavButtons();
		
		// Start
		setupDragAndDrop();
		if (exportRoot.stopInstruction) exportRoot.stopInstruction();
		if (!exportRoot.gameState[CONFIG.completeKey]) {
			setTimeout(function() { if(exportRoot.playInstruction) exportRoot.playInstruction(); }, 500);
		}
		
		exportRoot.on("removed", function() {
			if(exportRoot.stopInstruction) exportRoot.stopInstruction(); 
		});
		function applyTextStyling(textObj, opts) {
			if (!textObj || !(textObj instanceof createjs.Text) || !textObj.parent) return;
		
			opts = opts || {};
		
			// Фонт тохиргоо - Default-оор Rubik Bold ашиглана
			var fontSize = opts.fontSize || textObj.font.split('px')[0] || "40"; 
			var fontStyle = opts.fontStyle || "bold";
			var fontFamily = opts.fontFamily || "'Rubik', sans-serif";
			
			// textObj-ийн фонтыг шинэчлэх
			textObj.font = fontStyle + " " + fontSize + "px " + fontFamily;
		
			var outlineColor = opts.outlineColor || "#461A17";
			var outlineSize = opts.outlineSize || 6;
			var fillColor = opts.fillColor || "#FFFFFF";
			var shadowColor = opts.shadowColor || "rgba(60, 20, 0, 0.4)";
			var pad = opts.pad || 60;
		
			var savedX = textObj.x;
			var savedY = textObj.y;
			var parent = textObj.parent;
			var cloneName = "__strokeClone_" + (textObj.name || "text");
		
			// Өмнө үлдсэн ижил clone-уудыг parent-оос цэвэрлэнэ
			for (var i = parent.numChildren - 1; i >= 0; i--) {
				var child = parent.getChildAt(i);
				if (child && child.name === cloneName) {
					if (child.cacheCanvas) child.uncache();
					parent.removeChild(child);
				}
			}
		
			// Хуучин cache арилгана
			if (textObj.cacheCanvas) {
				textObj.uncache();
			}
		
			textObj.outline = null;
			textObj.color = fillColor;
			textObj.shadow = new createjs.Shadow(shadowColor, 3, 3, 6);
		
			// Stroke үүсгэхдээ шинэчлэгдсэн фонтыг ашиглана
			var strokeText = new createjs.Text(textObj.text, textObj.font, outlineColor);
			strokeText.name = cloneName;
			strokeText.textAlign = textObj.textAlign;
			strokeText.textBaseline = textObj.textBaseline;
			strokeText.x = savedX;
			strokeText.y = savedY;
			strokeText.scaleX = textObj.scaleX;
			strokeText.scaleY = textObj.scaleY;
			strokeText.rotation = textObj.rotation;
			strokeText.skewX = textObj.skewX;
			strokeText.skewY = textObj.skewY;
			strokeText.regX = textObj.regX;
			strokeText.regY = textObj.regY;
			strokeText.outline = outlineSize;
			strokeText.shadow = null;
			strokeText.mouseEnabled = false;
		
			var idx = parent.getChildIndex(textObj);
			parent.addChildAt(strokeText, idx);
		
			textObj._strokeClone = strokeText;
		
			// Cache хэрэглэх
			var bounds = textObj.getBounds();
			if (bounds) {
				var cacheX = bounds.x - pad;
				var cacheY = bounds.y - pad;
				var cacheW = bounds.width + pad * 2;
				var cacheH = bounds.height + pad * 2;
		
				if (strokeText.cacheCanvas) strokeText.uncache();
				if (textObj.cacheCanvas) textObj.uncache();
		
				strokeText.cache(cacheX, cacheY, cacheW, cacheH);
				textObj.cache(cacheX, cacheY, cacheW, cacheH);
			}
		
			// Cleanup logic
			if (textObj._onRemovedCleanup) {
				textObj.off("removed", textObj._onRemovedCleanup);
			}
		
			textObj._onRemovedCleanup = function () {
				if (strokeText) {
					if (strokeText.cacheCanvas) strokeText.uncache();
					if (strokeText.parent) {
						strokeText.parent.removeChild(strokeText);
					}
				}
				if (textObj.cacheCanvas) {
					textObj.uncache();
				}
				textObj._strokeClone = null;
			};
		
			textObj.on("removed", textObj._onRemovedCleanup);
		
			// Байрлалыг баталгаажуулах
			textObj.x = savedX;
			textObj.y = savedY;
			strokeText.x = savedX;
			strokeText.y = savedY;
		}
		
		var exerciseText = {
			mn: {
				title: "БУУХ ЦАМХАГ",
				instruction: "Дараах энгийн бутархайнуудыг буурах эрэмбээр байрлуулна уу."
			},
			kz: {
				title: "ТӨМЕНДЕУ МҰНАРАСЫ",
				instruction: "Төмендегі жай бөлшектерді кему ретімен орналастырыңыз."
			},
			tuva: {
				title: "ДООРААР МҮНАР",
				instruction: "Дорудагы эңгин бөлүктерни буураар эрээри-биле тургузуңар."
			},
			sign: {
				title: "БУУХ ЦАМХАГ",
				instruction: "Дараах энгийн бутархайнуудыг буурах эрэмбээр байрлуулна уу."
			}
		};
		
		var lang = exportRoot.gameState.selectedLanguage || "mn";
		var texts = exerciseText[lang];
		
		function findTextByContent(container, content) {
			if (!container) return null;
		
			if (container instanceof createjs.Text && container.text === content) {
				return container;
			}
		
			if (!container.numChildren) return null;
		
			for (var i = 0; i < container.numChildren; i++) {
				var found = findTextByContent(container.getChildAt(i), content);
				if (found) return found;
			}
		
			return null;
		}
		
		var txt_title = findTextByContent(exportRoot, "txt_title");
		var txt_instruction = findTextByContent(exportRoot, "txt_instruction");
		
		
		console.log("exerciseText[lang]");
		console.log(exerciseText[lang]);
		console.log(exportRoot.txt_title);
		if (txt_title) {
			txt_title.text = texts.title;
			applyTextStyling(txt_title, {
				outlineSize: 15,
				outlineColor: "#461A17",
				fillColor: "#FFFFFF",
				pad: 80
			});
		}else {
			console.log("exportRoot.txt_title not found");
		}
		
		console.log('--------------------------');
		console.log(exportRoot);
		console.log('--------------------------');
		
		if (txt_instruction) {
			txt_instruction.text = texts.instruction;
		}
	}
	this.frame_23 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		// =====================================================
		// CONFIG
		// =====================================================
		var CONFIG = {
		    lessonId: "lesson6",
		    lessonFolder: "Lesson6",
		    videoId: "map08",
		    videoFile: "./videos/lesson6_map8.mp4",
		    containerId: "success-video-map08",
		    nextFrame: 24,
		    backgroundColor: "#6B4FBB",
		    zIndex: "9999",
		    autoSkipOnError: true,
		    autoMarkWatchedOnSkip: true
		};
		
		// =====================================================
		// INIT
		// =====================================================
		if (!exportRoot.gameState) {
		    exportRoot.gameState = {};
		}
		
		if (!exportRoot.gameState.videosWatched) {
		    exportRoot.gameState.videosWatched = [];
		}
		
		if (!exportRoot.saveState) {
		    exportRoot.saveState = function() {};
		}
		
		var videoContainer = null;
		var videoElement = null;
		var resizeHandler = null;
		var started = false;
		var endedOrSkipped = false;
		
		// =====================================================
		// HELPERS
		// =====================================================
		function hasWatchedVideo() {
		    return exportRoot.gameState.videosWatched.indexOf(CONFIG.videoId) !== -1;
		}
		
		function markVideoWatched() {
		    if (!hasWatchedVideo()) {
		        exportRoot.gameState.videosWatched.push(CONFIG.videoId);
		        exportRoot.saveState();
		    }
		}
		
		function lockPageScroll() {
		    document.body.style.overflow = "hidden";
		    document.documentElement.style.overflow = "hidden";
		}
		
		function unlockPageScroll() {
		    document.body.style.overflow = "";
		    document.documentElement.style.overflow = "";
		}
		
		function cleanup() {
		    unlockPageScroll();
		
		    if (videoElement) {
		        try {
		            videoElement.pause();
		            videoElement.removeAttribute("src");
		            videoElement.load();
		        } catch (e) {}
		        videoElement = null;
		    }
		
		    if (videoContainer && videoContainer.parentNode) {
		        videoContainer.parentNode.removeChild(videoContainer);
		        videoContainer = null;
		    }
		
		    if (resizeHandler) {
		        window.removeEventListener("resize", resizeHandler);
		        resizeHandler = null;
		    }
		}
		
		function updateContainerPosition() {
		    if (!videoContainer) return;
		
		    var canvas = document.getElementById("canvas");
		    if (!canvas) return;
		
		    var rect = canvas.getBoundingClientRect();
		
		    videoContainer.style.left = rect.left + "px";
		    videoContainer.style.top = rect.top + "px";
		    videoContainer.style.width = rect.width + "px";
		    videoContainer.style.height = rect.height + "px";
		}
		
		function goToNextExercise(reason) {
		    if (endedOrSkipped) return;
		    endedOrSkipped = true;
		
		    if (CONFIG.autoMarkWatchedOnSkip) {
		        markVideoWatched();
		    }
		
		    cleanup();
		
		    exportRoot.gameState.currentFrame = CONFIG.nextFrame;
		    exportRoot.saveState();
		    exportRoot.gotoAndStop(CONFIG.nextFrame);
		}
		
		function tryPlayVideo() {
		    if (!videoElement || started) return;
		    started = true;
		
		    var playPromise = videoElement.play();
		
		    if (playPromise && typeof playPromise.catch === "function") {
		        playPromise.catch(function(err) {
		            console.log("Video autoplay failed:", err);
		            goToNextExercise("autoplay_failed");
		        });
		    }
		}
		
		// =====================================================
		// MAIN
		// =====================================================
		function createSuccessVideo() {
		    var existingContainer = document.getElementById(CONFIG.containerId);
		    if (existingContainer && existingContainer.parentNode) {
		        existingContainer.parentNode.removeChild(existingContainer);
		    }
		
		    var canvas = document.getElementById("canvas");
		    if (!canvas) {
		        goToNextExercise("canvas_missing");
		        return;
		    }
		
		    if (hasWatchedVideo()) {
		        goToNextExercise("already_watched");
		        return;
		    }
		
		    lockPageScroll();
		
		    var rect = canvas.getBoundingClientRect();
		
		    videoContainer = document.createElement("div");
		    videoContainer.id = CONFIG.containerId;
		    videoContainer.style.position = "fixed";
		    videoContainer.style.left = rect.left + "px";
		    videoContainer.style.top = rect.top + "px";
		    videoContainer.style.width = rect.width + "px";
		    videoContainer.style.height = rect.height + "px";
		    videoContainer.style.backgroundColor = CONFIG.backgroundColor;
		    videoContainer.style.zIndex = CONFIG.zIndex;
		    videoContainer.style.overflow = "hidden";
		    videoContainer.style.margin = "0";
		    videoContainer.style.padding = "0";
		    videoContainer.style.boxSizing = "border-box";
		
		    videoElement = document.createElement("video");
		    videoElement.src = CONFIG.videoFile;
		    videoElement.style.width = "100%";
		    videoElement.style.height = "100%";
		    videoElement.style.objectFit = "contain";
		    videoElement.style.display = "block";
		    videoElement.preload = "auto";
		    videoElement.playsInline = true;
		    videoElement.setAttribute("playsinline", "true");
		    videoElement.setAttribute("webkit-playsinline", "true");
		
		    // Зарим browser autoplay дээр дууг хаадаг.
		    // Хэрэв заавал sound-тай autoplay хэрэгтэй бол browser policy-оос хамаарна.
		    // Найдвартай ажиллуулахын тулд muted=true болгож болно.
		    videoElement.muted = false;
		    videoElement.autoplay = false;
		    videoElement.controls = false;
		
		    videoContainer.appendChild(videoElement);
		    document.body.appendChild(videoContainer);
		
		    videoElement.addEventListener("loadeddata", function() {
		        tryPlayVideo();
		    });
		
		    videoElement.addEventListener("canplay", function() {
		        tryPlayVideo();
		    });
		
		    videoElement.addEventListener("ended", function() {
		        markVideoWatched();
		        setTimeout(function() {
		            goToNextExercise("ended");
		        }, 500);
		    });
		
		    videoElement.addEventListener("error", function() {
		        console.log("Video load error:", videoElement.error, CONFIG.videoFile);
		        if (CONFIG.autoSkipOnError) {
		            goToNextExercise("error");
		        }
		    });
		
		    resizeHandler = function() {
		        updateContainerPosition();
		    };
		
		    window.addEventListener("resize", resizeHandler);
		    updateContainerPosition();
		
		    // Хэрэв ямар ч event trigger болохгүй гацвал fallback
		    setTimeout(function() {
		        if (!started && !endedOrSkipped) {
		            console.log("Video start timeout, skipping:", CONFIG.videoFile);
		            goToNextExercise("timeout");
		        }
		    }, 4000);
		}
		
		exportRoot.on("removed", cleanup);
		
		createSuccessVideo();
	}
	this.frame_24 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		// =====================================================
		// CONFIG
		// =====================================================
		var CONFIG = {
			lessonId: "lesson6",
			exerciseId: "ex09",
			exerciseNumber: 9,
			storageKey: "lesson6_gameState",
			backFrame: 22,
			nextFrame: 25,
			autoNextDelay: 1500,
			soundPaths: {
				correct: "./sounds/voice_correct.mp3",
				wrong: "./sounds/voice_wrong.mp3",
				click: "./sounds/click.mp3"
			},
			inputs: [
				"input_9_1_1", "input_9_1_2",
				"input_9_2_1", "input_9_2_2",
				"input_9_3_1", "input_9_3_2"
			]
		};
		
		exportRoot.currentExerciseId = CONFIG.exerciseId;
		exportRoot.backBtn = CONFIG.backFrame;
		exportRoot.nextBtn = CONFIG.nextFrame;
		CONFIG.positionsKey = "exercise" + CONFIG.exerciseNumber + "Positions";
		CONFIG.completeKey = "exercise" + CONFIG.exerciseNumber + "Complete";
		CONFIG.progressKey = "exercise" + CONFIG.exerciseNumber + "Progress";
		
		// =====================================================
		// STATE & INIT
		// =====================================================
		if (!exportRoot.gameState) exportRoot.gameState = {};
		if (!exportRoot.gameState[CONFIG.positionsKey]) exportRoot.gameState[CONFIG.positionsKey] = {};
		if (typeof exportRoot.gameState[CONFIG.completeKey] === "undefined") exportRoot.gameState[CONFIG.completeKey] = false;
		if (!exportRoot.gameState[CONFIG.progressKey]) {
			exportRoot.gameState[CONFIG.progressKey] = {
				step1: false,
				step2: false,
				step3: false
			};
		}
		
		var isCleaningUp = false;
		var hasNavigated = false;
		
		exportRoot.saveState = function() {
			try {
				localStorage.setItem(CONFIG.storageKey, JSON.stringify(exportRoot.gameState));
			} catch (e) {}
		};
		
		function playSound(type) {
			try {
				var a = new Audio(CONFIG.soundPaths[type]);
				a.play().catch(function(){});
			} catch (e) {}
		}
		
		// =====================================================
		// HTML INPUT HELPERS
		// =====================================================
		function getInputDomId(name) {
			return "html_" + CONFIG.lessonId + "_" + CONFIG.exerciseId + "_" + name;
		}
		
		function createOrGetHtmlInput(name) {
			var id = getInputDomId(name);
			var input = document.getElementById(id);
		
			if (!input) {
				input = document.createElement("input");
				input.type = "text";
				input.id = id;
				input.inputMode = "numeric";
				input.maxLength = 2;
		
				input.style.position = "fixed";
				input.style.zIndex = "99999";
				input.style.textAlign = "center";
				input.style.fontFamily = "'Rubik', Arial, sans-serif";
				input.style.fontWeight = "700";
				input.style.background = "transparent";
				input.style.border = "none";
				input.style.outline = "none";
				input.style.boxShadow = "none";
				input.style.color = "#111111";
		
				document.body.appendChild(input);
			}
		
			input.style.display = "block";
			input.style.visibility = "visible";
			input.style.opacity = "1";
		
			return input;
		}
		
		function positionInput(name) {
			var clip = exportRoot[name];
			var input = document.getElementById(getInputDomId(name));
			if (!clip || !input || !exportRoot.stage || !exportRoot.stage.canvas) return;
		
			var canvasRect = exportRoot.stage.canvas.getBoundingClientRect();
			var sX = exportRoot.stage.scaleX || 1;
			var sY = exportRoot.stage.scaleY || 1;
			var bX = canvasRect.width / exportRoot.stage.canvas.width;
			var bY = canvasRect.height / exportRoot.stage.canvas.height;
		
			var b = clip.getBounds() || clip.nominalBounds || { width: 40, height: 40 };
			var globalPos = clip.localToGlobal(0, 0);
		
			var w = b.width * sX * bX;
			var h = b.height * sY * bY;
		
			input.style.left = (canvasRect.left + (globalPos.x * bX) - (w * 0.5)) + "px";
			input.style.top = (canvasRect.top + (globalPos.y * bY) - (h * 0.5)) + "px";
			input.style.width = w + "px";
			input.style.height = h + "px";
			input.style.lineHeight = h + "px";
			input.style.fontSize = Math.floor(h * 0.7) + "px";
		}
		
		function hideAllInputs() {
			CONFIG.inputs.forEach(function(name) {
				var el = document.getElementById(getInputDomId(name));
				if (el) el.style.display = "none";
			});
		}
		
		function showAllInputs() {
			if (isCleaningUp || hasNavigated) return;
		
			CONFIG.inputs.forEach(function(name) {
				var el = createOrGetHtmlInput(name);
				el.style.display = "block";
				el.style.visibility = "visible";
				el.style.opacity = "1";
				positionInput(name);
			});
		}
		
		function cleanupExerciseDom() {
			if (isCleaningUp) return;
			isCleaningUp = true;
		
			hideAllInputs();
		
			CONFIG.inputs.forEach(function(name) {
				var el = document.getElementById(getInputDomId(name));
				if (el) {
					el.oninput = null;
					el.onblur = null;
					el.onfocus = null;
					if (el.parentNode) el.parentNode.removeChild(el);
				}
			});
		
			if (createjs && createjs.Ticker && exportRoot._ex09TickHandler) {
				createjs.Ticker.removeEventListener("tick", exportRoot._ex09TickHandler);
				exportRoot._ex09TickHandler = null;
				exportRoot._ex09TickAttached = false;
			}
		}
		
		// =====================================================
		// FRACTION HELPERS
		// =====================================================
		function getIntValue(name) {
			var el = document.getElementById(getInputDomId(name));
			if (!el) return NaN;
			return parseInt(el.value, 10);
		}
		
		function getFraction(numName, denName) {
			var n = getIntValue(numName);
			var d = getIntValue(denName);
			if (isNaN(n) || isNaN(d) || d === 0) return null;
			return n / d;
		}
		
		function applyCompleteState() {
			CONFIG.inputs.forEach(function(name) {
				var clip = exportRoot[name];
				var el = createOrGetHtmlInput(name);
		
				if (clip) clip.alpha = 0;
		
				el.disabled = true;
				el.readOnly = true;
				el.style.display = "block";
				el.style.visibility = "visible";
				el.style.opacity = "1";
				el.style.color = "#1F5F1A";
		
				positionInput(name);
			});
		}
		
		function applyIncompleteState() {
			CONFIG.inputs.forEach(function(name) {
				var clip = exportRoot[name];
				var el = createOrGetHtmlInput(name);
		
				if (clip) clip.alpha = 0.01;
		
				el.disabled = false;
				el.readOnly = false;
				el.style.display = "block";
				el.style.visibility = "visible";
				el.style.opacity = "1";
				el.style.color = "#111111";
		
				positionInput(name);
			});
		}
		
		// =====================================================
		// PROGRESS SOUND LOGIC
		// =====================================================
		function evaluateProgressSound() {
			var f0 = 1 / 4;
			var f1 = getFraction("input_9_1_1", "input_9_1_2");
			var f2 = getFraction("input_9_2_1", "input_9_2_2");
			var f3 = getFraction("input_9_3_1", "input_9_3_2");
		
			var progress = exportRoot.gameState[CONFIG.progressKey];
			var changed = false;
		
			if (f1 !== null && f0 < f1 && !progress.step1) {
				progress.step1 = true;
				changed = true;
			}
			if (f1 !== null && f2 !== null && f1 < f2 && !progress.step2) {
				progress.step2 = true;
				changed = true;
			}
			if (f2 !== null && f3 !== null && f2 < f3 && !progress.step3) {
				progress.step3 = true;
				changed = true;
			}
		
			if (changed) {
				exportRoot.saveState();
				playSound("correct");
			}
		}
		
		// =====================================================
		// LOGIC
		// =====================================================
		function goNextSafely() {
			if (hasNavigated) return;
			hasNavigated = true;
			cleanupExerciseDom();
			exportRoot.gotoAndStop(CONFIG.nextFrame);
		}
		
		function checkAllAnswers() {
			var vals = {};
			var allFilled = true;
		
			CONFIG.inputs.forEach(function(name) {
				var el = document.getElementById(getInputDomId(name));
				var v = parseInt(el.value, 10);
				if (isNaN(v)) allFilled = false;
				vals[name] = v;
			});
		
			if (!allFilled) return;
		
			if (vals.input_9_1_2 === 0 || vals.input_9_2_2 === 0 || vals.input_9_3_2 === 0) return;
		
			var f0 = 1 / 4;
			var f1 = vals.input_9_1_1 / vals.input_9_1_2;
			var f2 = vals.input_9_2_1 / vals.input_9_2_2;
			var f3 = vals.input_9_3_1 / vals.input_9_3_2;
		
			evaluateProgressSound();
		
			if (f0 < f1 && f1 < f2 && f2 < f3) {
				exportRoot.gameState[CONFIG.completeKey] = true;
				exportRoot.saveState();
		
				applyCompleteState();
		
				if (exportRoot.playCharacterAnimation) {
					exportRoot.playCharacterAnimation("correct");
				}
				if (exportRoot.refreshNavButtons) {
					exportRoot.refreshNavButtons();
				}
		
				setTimeout(function() {
					goNextSafely();
				}, CONFIG.autoNextDelay);
			}
		}
		
		// =====================================================
		// START SETUP
		// =====================================================
		CONFIG.inputs.forEach(function(name) {
			var clip = exportRoot[name];
			if (!clip) return;
		
			var input = createOrGetHtmlInput(name);
			input.value = exportRoot.gameState[CONFIG.positionsKey][name] || "";
		
			input.oninput = function() {
				if (exportRoot.gameState[CONFIG.completeKey]) return;
		
				this.value = this.value.replace(/[^0-9]/g, "");
				exportRoot.gameState[CONFIG.positionsKey][name] = this.value;
				exportRoot.saveState();
		
				evaluateProgressSound();
				checkAllAnswers();
			};
		
			positionInput(name);
		});
		
		showAllInputs();
		
		if (exportRoot.gameState[CONFIG.completeKey]) {
			applyCompleteState();
		} else {
			applyIncompleteState();
		}
		
		// =====================================================
		// COMMON ELEMENTS
		// =====================================================
		if (exportRoot.help_popup) {
			exportRoot.help_popup.visible = false;
			exportRoot.help_popup.stop();
		}
		
		if (exportRoot.refreshNavButtons) {
			exportRoot.refreshNavButtons();
		}
		
		if (!exportRoot._ex09TickAttached && createjs && createjs.Ticker) {
			exportRoot._ex09TickHandler = function() {
				if (isCleaningUp || hasNavigated) return;
				if (exportRoot.currentExerciseId !== CONFIG.exerciseId) return;
		
				showAllInputs();
		
				CONFIG.inputs.forEach(function(name) {
					positionInput(name);
				});
		
				if (exportRoot.gameState[CONFIG.completeKey]) {
					applyCompleteState();
				}
			};
		
			createjs.Ticker.addEventListener("tick", exportRoot._ex09TickHandler);
			exportRoot._ex09TickAttached = true;
		}
		
		if (exportRoot.stopInstruction) {
			exportRoot.stopInstruction();
		}
		
		if (!exportRoot.gameState[CONFIG.completeKey]) {
			setTimeout(function() {
				if (exportRoot.playInstruction) exportRoot.playInstruction();
			}, 500);
		}
		
		exportRoot.on("removed", function() {
			if (exportRoot.stopInstruction) exportRoot.stopInstruction();
			cleanupExerciseDom();
		});
		function applyTextStyling(textObj, opts) {
			if (!textObj || !(textObj instanceof createjs.Text) || !textObj.parent) return;
		
			opts = opts || {};
		
			// Фонт тохиргоо - Default-оор Rubik Bold ашиглана
			var fontSize = opts.fontSize || textObj.font.split('px')[0] || "40"; 
			var fontStyle = opts.fontStyle || "bold";
			var fontFamily = opts.fontFamily || "'Rubik', sans-serif";
			
			// textObj-ийн фонтыг шинэчлэх
			textObj.font = fontStyle + " " + fontSize + "px " + fontFamily;
		
			var outlineColor = opts.outlineColor || "#461A17";
			var outlineSize = opts.outlineSize || 6;
			var fillColor = opts.fillColor || "#FFFFFF";
			var shadowColor = opts.shadowColor || "rgba(60, 20, 0, 0.4)";
			var pad = opts.pad || 60;
		
			var savedX = textObj.x;
			var savedY = textObj.y;
			var parent = textObj.parent;
			var cloneName = "__strokeClone_" + (textObj.name || "text");
		
			// Өмнө үлдсэн ижил clone-уудыг parent-оос цэвэрлэнэ
			for (var i = parent.numChildren - 1; i >= 0; i--) {
				var child = parent.getChildAt(i);
				if (child && child.name === cloneName) {
					if (child.cacheCanvas) child.uncache();
					parent.removeChild(child);
				}
			}
		
			// Хуучин cache арилгана
			if (textObj.cacheCanvas) {
				textObj.uncache();
			}
		
			textObj.outline = null;
			textObj.color = fillColor;
			textObj.shadow = new createjs.Shadow(shadowColor, 3, 3, 6);
		
			// Stroke үүсгэхдээ шинэчлэгдсэн фонтыг ашиглана
			var strokeText = new createjs.Text(textObj.text, textObj.font, outlineColor);
			strokeText.name = cloneName;
			strokeText.textAlign = textObj.textAlign;
			strokeText.textBaseline = textObj.textBaseline;
			strokeText.x = savedX;
			strokeText.y = savedY;
			strokeText.scaleX = textObj.scaleX;
			strokeText.scaleY = textObj.scaleY;
			strokeText.rotation = textObj.rotation;
			strokeText.skewX = textObj.skewX;
			strokeText.skewY = textObj.skewY;
			strokeText.regX = textObj.regX;
			strokeText.regY = textObj.regY;
			strokeText.outline = outlineSize;
			strokeText.shadow = null;
			strokeText.mouseEnabled = false;
		
			var idx = parent.getChildIndex(textObj);
			parent.addChildAt(strokeText, idx);
		
			textObj._strokeClone = strokeText;
		
			// Cache хэрэглэх
			var bounds = textObj.getBounds();
			if (bounds) {
				var cacheX = bounds.x - pad;
				var cacheY = bounds.y - pad;
				var cacheW = bounds.width + pad * 2;
				var cacheH = bounds.height + pad * 2;
		
				if (strokeText.cacheCanvas) strokeText.uncache();
				if (textObj.cacheCanvas) textObj.uncache();
		
				strokeText.cache(cacheX, cacheY, cacheW, cacheH);
				textObj.cache(cacheX, cacheY, cacheW, cacheH);
			}
		
			// Cleanup logic
			if (textObj._onRemovedCleanup) {
				textObj.off("removed", textObj._onRemovedCleanup);
			}
		
			textObj._onRemovedCleanup = function () {
				if (strokeText) {
					if (strokeText.cacheCanvas) strokeText.uncache();
					if (strokeText.parent) {
						strokeText.parent.removeChild(strokeText);
					}
				}
				if (textObj.cacheCanvas) {
					textObj.uncache();
				}
				textObj._strokeClone = null;
			};
		
			textObj.on("removed", textObj._onRemovedCleanup);
		
			// Байрлалыг баталгаажуулах
			textObj.x = savedX;
			textObj.y = savedY;
			strokeText.x = savedX;
			strokeText.y = savedY;
		}
		
		var exerciseText = {
			mn: {
				title: "ТУУЗАН ДАРААЛАЛ",
				instruction: "Дараах тэнцэтгэл бишийг үнэн болгох энгийн бутархайнуудыг олж, хоосон зайд бичээрэй. Дараа нь үүссэн дарааллыг уншаарай."
			},
			kz: {
				title: "ЖОЛАҚ ТІЗБЕГІ",
				instruction: "Төмендегі теңсіздікті дұрыс ететін жай бөлшектерді тауып, бос орынға жазыңыз. Содан кейін шыққан тізбекті оқыңыз."
			},
			tuva: {
				title: "ЛЕНТА ДАРААЛАЛЫ",
				instruction: "Дорудагы тең болбасын чөптүг болурунга тааржыыр эңгин бөлүктерни таап, хооңгай турар черге бижиңер. Сонуң соонда үүскен дараалалды унууңар."
			},
			sign: {
				title: "ТУУЗАН ДАРААЛАЛ",
				instruction: "Дараах тэнцэтгэл бишийг үнэн болгох энгийн бутархайнуудыг олж, хоосон зайд бичээрэй. Дараа нь үүссэн дарааллыг уншаарай."
			}
		};
		
		var lang = exportRoot.gameState.selectedLanguage || "mn";
		var texts = exerciseText[lang];
		
		function findTextByContent(container, content) {
			if (!container) return null;
		
			if (container instanceof createjs.Text && container.text === content) {
				return container;
			}
		
			if (!container.numChildren) return null;
		
			for (var i = 0; i < container.numChildren; i++) {
				var found = findTextByContent(container.getChildAt(i), content);
				if (found) return found;
			}
		
			return null;
		}
		
		var txt_title = findTextByContent(exportRoot, "txt_title");
		var txt_instruction = findTextByContent(exportRoot, "txt_instruction");
		
		
		console.log("exerciseText[lang]");
		console.log(exerciseText[lang]);
		console.log(exportRoot.txt_title);
		if (txt_title) {
			txt_title.text = texts.title;
			applyTextStyling(txt_title, {
				outlineSize: 15,
				outlineColor: "#461A17",
				fillColor: "#FFFFFF",
				pad: 80
			});
		}else {
			console.log("exportRoot.txt_title not found");
		}
		
		console.log('--------------------------');
		console.log(exportRoot);
		console.log('--------------------------');
		
		if (txt_instruction) {
			txt_instruction.text = texts.instruction;
		}
	}
	this.frame_25 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		// =====================================================
		// CONFIG
		// =====================================================
		var CONFIG = {
		    lessonId: "lesson6",
		    lessonFolder: "Lesson6",
		    videoId: "map09",
		    videoFile: "./videos/lesson6_map09.mp4",
		    containerId: "success-video-map09",
		    nextFrame: 26,
		    backgroundColor: "#6B4FBB",
		    zIndex: "9999",
		    autoSkipOnError: true,
		    autoMarkWatchedOnSkip: true
		};
		
		// =====================================================
		// INIT
		// =====================================================
		if (!exportRoot.gameState) {
		    exportRoot.gameState = {};
		}
		
		if (!exportRoot.gameState.videosWatched) {
		    exportRoot.gameState.videosWatched = [];
		}
		
		if (!exportRoot.saveState) {
		    exportRoot.saveState = function() {};
		}
		
		var videoContainer = null;
		var videoElement = null;
		var resizeHandler = null;
		var started = false;
		var endedOrSkipped = false;
		
		// =====================================================
		// HELPERS
		// =====================================================
		function hasWatchedVideo() {
		    return exportRoot.gameState.videosWatched.indexOf(CONFIG.videoId) !== -1;
		}
		
		function markVideoWatched() {
		    if (!hasWatchedVideo()) {
		        exportRoot.gameState.videosWatched.push(CONFIG.videoId);
		        exportRoot.saveState();
		    }
		}
		
		function lockPageScroll() {
		    document.body.style.overflow = "hidden";
		    document.documentElement.style.overflow = "hidden";
		}
		
		function unlockPageScroll() {
		    document.body.style.overflow = "";
		    document.documentElement.style.overflow = "";
		}
		
		function cleanup() {
		    unlockPageScroll();
		
		    if (videoElement) {
		        try {
		            videoElement.pause();
		            videoElement.removeAttribute("src");
		            videoElement.load();
		        } catch (e) {}
		        videoElement = null;
		    }
		
		    if (videoContainer && videoContainer.parentNode) {
		        videoContainer.parentNode.removeChild(videoContainer);
		        videoContainer = null;
		    }
		
		    if (resizeHandler) {
		        window.removeEventListener("resize", resizeHandler);
		        resizeHandler = null;
		    }
		}
		
		function updateContainerPosition() {
		    if (!videoContainer) return;
		
		    var canvas = document.getElementById("canvas");
		    if (!canvas) return;
		
		    var rect = canvas.getBoundingClientRect();
		
		    videoContainer.style.left = rect.left + "px";
		    videoContainer.style.top = rect.top + "px";
		    videoContainer.style.width = rect.width + "px";
		    videoContainer.style.height = rect.height + "px";
		}
		
		function goToNextExercise(reason) {
		    if (endedOrSkipped) return;
		    endedOrSkipped = true;
		
		    if (CONFIG.autoMarkWatchedOnSkip) {
		        markVideoWatched();
		    }
		
		    cleanup();
		
		    exportRoot.gameState.currentFrame = CONFIG.nextFrame;
		    exportRoot.saveState();
		    exportRoot.gotoAndStop(CONFIG.nextFrame);
		}
		
		function tryPlayVideo() {
		    if (!videoElement || started) return;
		    started = true;
		
		    var playPromise = videoElement.play();
		
		    if (playPromise && typeof playPromise.catch === "function") {
		        playPromise.catch(function(err) {
		            console.log("Video autoplay failed:", err);
		            goToNextExercise("autoplay_failed");
		        });
		    }
		}
		
		// =====================================================
		// MAIN
		// =====================================================
		function createSuccessVideo() {
		    var existingContainer = document.getElementById(CONFIG.containerId);
		    if (existingContainer && existingContainer.parentNode) {
		        existingContainer.parentNode.removeChild(existingContainer);
		    }
		
		    var canvas = document.getElementById("canvas");
		    if (!canvas) {
		        goToNextExercise("canvas_missing");
		        return;
		    }
		
		    if (hasWatchedVideo()) {
		        goToNextExercise("already_watched");
		        return;
		    }
		
		    lockPageScroll();
		
		    var rect = canvas.getBoundingClientRect();
		
		    videoContainer = document.createElement("div");
		    videoContainer.id = CONFIG.containerId;
		    videoContainer.style.position = "fixed";
		    videoContainer.style.left = rect.left + "px";
		    videoContainer.style.top = rect.top + "px";
		    videoContainer.style.width = rect.width + "px";
		    videoContainer.style.height = rect.height + "px";
		    videoContainer.style.backgroundColor = CONFIG.backgroundColor;
		    videoContainer.style.zIndex = CONFIG.zIndex;
		    videoContainer.style.overflow = "hidden";
		    videoContainer.style.margin = "0";
		    videoContainer.style.padding = "0";
		    videoContainer.style.boxSizing = "border-box";
		
		    videoElement = document.createElement("video");
		    videoElement.src = CONFIG.videoFile;
		    videoElement.style.width = "100%";
		    videoElement.style.height = "100%";
		    videoElement.style.objectFit = "contain";
		    videoElement.style.display = "block";
		    videoElement.preload = "auto";
		    videoElement.playsInline = true;
		    videoElement.setAttribute("playsinline", "true");
		    videoElement.setAttribute("webkit-playsinline", "true");
		
		    // Зарим browser autoplay дээр дууг хаадаг.
		    // Хэрэв заавал sound-тай autoplay хэрэгтэй бол browser policy-оос хамаарна.
		    // Найдвартай ажиллуулахын тулд muted=true болгож болно.
		    videoElement.muted = false;
		    videoElement.autoplay = false;
		    videoElement.controls = false;
		
		    videoContainer.appendChild(videoElement);
		    document.body.appendChild(videoContainer);
		
		    videoElement.addEventListener("loadeddata", function() {
		        tryPlayVideo();
		    });
		
		    videoElement.addEventListener("canplay", function() {
		        tryPlayVideo();
		    });
		
		    videoElement.addEventListener("ended", function() {
		        markVideoWatched();
		        setTimeout(function() {
		            goToNextExercise("ended");
		        }, 500);
		    });
		
		    videoElement.addEventListener("error", function() {
		        console.log("Video load error:", videoElement.error, CONFIG.videoFile);
		        if (CONFIG.autoSkipOnError) {
		            goToNextExercise("error");
		        }
		    });
		
		    resizeHandler = function() {
		        updateContainerPosition();
		    };
		
		    window.addEventListener("resize", resizeHandler);
		    updateContainerPosition();
		
		    // Хэрэв ямар ч event trigger болохгүй гацвал fallback
		    setTimeout(function() {
		        if (!started && !endedOrSkipped) {
		            console.log("Video start timeout, skipping:", CONFIG.videoFile);
		            goToNextExercise("timeout");
		        }
		    }, 4000);
		}
		
		exportRoot.on("removed", cleanup);
		
		createSuccessVideo();
	}
	this.frame_26 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		// =====================================================
		// CONFIG
		// =====================================
		var CONFIG = {
		    lessonId: "lesson6",
		    exerciseId: "ex10",
		    exerciseNumber: 10,
		    storageKey: "lesson6_gameState",
		    backFrame: 24, 
		    nextFrame: 27, 
		    autoNextDelay: 1500,
		    soundPaths: {
		        correct: "./sounds/voice_correct.mp3",
		        wrong: "./sounds/voice_wrong.mp3",
		        click: "./sounds/click.mp3"
		    },
		    // Чирэх цагны нэрс
		    items: ["img_10_1", "img_10_2", "img_10_3", "img_10_4", "img_10_5", "img_10_6"],
		    // Зөв эрэмбэ (Тавиур 1-ээс 6 хүртэл)
		    correctMapping: {
		        "target_10_1": "img_10_3", // 2/12 (Хамгийн бага)
		        "target_10_2": "img_10_5", // 3/12
		        "target_10_3": "img_10_2", // 4/12
		        "target_10_4": "img_10_6", // 6/12
		        "target_10_5": "img_10_1", // 8/12
		        "target_10_6": "img_10_4"  // 10/12 (Хамгийн их)
		    }
		};
		
		// --- Common хэсгүүд ---
		exportRoot.currentExerciseId = CONFIG.exerciseId;
		exportRoot.backBtn = CONFIG.backFrame;
		exportRoot.nextBtn = CONFIG.nextFrame;
		CONFIG.completeKey = "exercise" + CONFIG.exerciseNumber + "Complete";
		CONFIG.answersKey = "exercise" + CONFIG.exerciseNumber + "Answers";
		
		// =====================================================
		// STATE & INIT
		// =====================
		if (!exportRoot.gameState) exportRoot.gameState = {};
		if (!exportRoot.gameState[CONFIG.answersKey]) exportRoot.gameState[CONFIG.answersKey] = {};
		if (typeof exportRoot.gameState[CONFIG.completeKey] === "undefined") exportRoot.gameState[CONFIG.completeKey] = false;
		
		exportRoot.saveState = function() {
		    try { localStorage.setItem(CONFIG.storageKey, JSON.stringify(exportRoot.gameState)); } catch (e) {}
		};
		
		function playSound(type) {
		    try { new Audio(CONFIG.soundPaths[type]).play().catch(function(){}); } catch (e) {}
		}
		
		// =====================================================
		// DRAG AND DROP LOGIC
		// =====================
		var targetNames = Object.keys(CONFIG.correctMapping);
		
		function setupDragAndDrop() {
		    CONFIG.items.forEach(function(itemName) {
		        var item = exportRoot[itemName];
		        if (!item) return;
		
		        item.oldX = item.x;
		        item.oldY = item.y;
		        item.cursor = "pointer";
		        item.mouseChildren = false;
		
		        // 1. Хадгалагдсан төлөвийг сэргээх
		        targetNames.forEach(function(tName) {
		            if (exportRoot.gameState[CONFIG.answersKey][tName] === itemName) {
		                var target = exportRoot[tName];
		                if (target) {
		                    item.x = target.x;
		                    item.y = target.y;
		                    item.mouseEnabled = false;
		                }
		            }
		        });
		
		        // 2. Чирж эхлэх
		        item.on("mousedown", function(evt) {
		            if (exportRoot.gameState[CONFIG.completeKey]) return;
		            exportRoot.addChild(item); 
		            var localPos = item.parent.globalToLocal(evt.stageX, evt.stageY);
		            item.offset = { x: item.x - localPos.x, y: item.y - localPos.y };
		        });
		
		        // 3. Чирэх
		        item.on("pressmove", function(evt) {
		            if (exportRoot.gameState[CONFIG.completeKey]) return;
		            var localPos = item.parent.globalToLocal(evt.stageX, evt.stageY);
		            item.x = localPos.x + item.offset.x;
		            item.y = localPos.y + item.offset.y;
		        });
		
		        // 4. Тавих
		        item.on("pressup", function(evt) {
		            if (exportRoot.gameState[CONFIG.completeKey]) return;
		
		            var hitTargetName = null;
		            targetNames.forEach(function(tName) {
		                var target = exportRoot[tName];
		                if (!target) return;
		                
		                var pt = target.globalToLocal(evt.stageX, evt.stageY);
		                var dist = Math.sqrt(Math.pow(item.x - target.x, 2) + Math.pow(item.y - target.y, 2));
		                
		                if (target.hitTest(pt.x, pt.y) || dist < 60) {
		                    hitTargetName = tName;
		                }
		            });
		
		            if (hitTargetName && CONFIG.correctMapping[hitTargetName] === itemName) {
		                playSound("click");
		                item.x = exportRoot[hitTargetName].x;
		                item.y = exportRoot[hitTargetName].y;
		                item.mouseEnabled = false;
		                
		                exportRoot.gameState[CONFIG.answersKey][hitTargetName] = itemName;
		                exportRoot.saveState();
		                checkWin();
		            } else {
		                if (hitTargetName) exportRoot.playCharacterAnimation("wrong");
		                createjs.Tween.get(item).to({ x: item.oldX, y: item.oldY }, 500, createjs.Ease.backOut);
		            }
		        });
		    });
		}
		
		function checkWin() {
		    var allDone = true;
		    targetNames.forEach(function(tName) {
		        if (exportRoot.gameState[CONFIG.answersKey][tName] !== CONFIG.correctMapping[tName]) {
		            allDone = false;
		        }
		    });
		
		    if (allDone) {
		        exportRoot.gameState[CONFIG.completeKey] = true;
		        exportRoot.saveState();
		        exportRoot.playCharacterAnimation("correct");
		        if (exportRoot.refreshNavButtons) exportRoot.refreshNavButtons();
		        setTimeout(function() {
		            exportRoot.gotoAndStop(CONFIG.nextFrame);
		        }, CONFIG.autoNextDelay);
		    }
		}
		
		// =====================================================
		// COMMON ELEMENTS
		// =====================
		if (exportRoot.help_popup) {
		    exportRoot.help_popup.visible = false;
		    exportRoot.help_popup.stop();
		}
		
		if (exportRoot.refreshNavButtons) exportRoot.refreshNavButtons();
		
		setupDragAndDrop();
		if (exportRoot.stopInstruction) exportRoot.stopInstruction();
		if (!exportRoot.gameState[CONFIG.completeKey]) {
		    setTimeout(function() { if(exportRoot.playInstruction) exportRoot.playInstruction(); }, 500);
		}
		
		exportRoot.on("removed", function() {
		    if(exportRoot.stopInstruction) exportRoot.stopInstruction(); 
		});
		function applyTextStyling(textObj, opts) {
			if (!textObj || !(textObj instanceof createjs.Text) || !textObj.parent) return;
		
			opts = opts || {};
		
			// Фонт тохиргоо - Default-оор Rubik Bold ашиглана
			var fontSize = opts.fontSize || textObj.font.split('px')[0] || "40"; 
			var fontStyle = opts.fontStyle || "bold";
			var fontFamily = opts.fontFamily || "'Rubik', sans-serif";
			
			// textObj-ийн фонтыг шинэчлэх
			textObj.font = fontStyle + " " + fontSize + "px " + fontFamily;
		
			var outlineColor = opts.outlineColor || "#461A17";
			var outlineSize = opts.outlineSize || 6;
			var fillColor = opts.fillColor || "#FFFFFF";
			var shadowColor = opts.shadowColor || "rgba(60, 20, 0, 0.4)";
			var pad = opts.pad || 60;
		
			var savedX = textObj.x;
			var savedY = textObj.y;
			var parent = textObj.parent;
			var cloneName = "__strokeClone_" + (textObj.name || "text");
		
			// Өмнө үлдсэн ижил clone-уудыг parent-оос цэвэрлэнэ
			for (var i = parent.numChildren - 1; i >= 0; i--) {
				var child = parent.getChildAt(i);
				if (child && child.name === cloneName) {
					if (child.cacheCanvas) child.uncache();
					parent.removeChild(child);
				}
			}
		
			// Хуучин cache арилгана
			if (textObj.cacheCanvas) {
				textObj.uncache();
			}
		
			textObj.outline = null;
			textObj.color = fillColor;
			textObj.shadow = new createjs.Shadow(shadowColor, 3, 3, 6);
		
			// Stroke үүсгэхдээ шинэчлэгдсэн фонтыг ашиглана
			var strokeText = new createjs.Text(textObj.text, textObj.font, outlineColor);
			strokeText.name = cloneName;
			strokeText.textAlign = textObj.textAlign;
			strokeText.textBaseline = textObj.textBaseline;
			strokeText.x = savedX;
			strokeText.y = savedY;
			strokeText.scaleX = textObj.scaleX;
			strokeText.scaleY = textObj.scaleY;
			strokeText.rotation = textObj.rotation;
			strokeText.skewX = textObj.skewX;
			strokeText.skewY = textObj.skewY;
			strokeText.regX = textObj.regX;
			strokeText.regY = textObj.regY;
			strokeText.outline = outlineSize;
			strokeText.shadow = null;
			strokeText.mouseEnabled = false;
		
			var idx = parent.getChildIndex(textObj);
			parent.addChildAt(strokeText, idx);
		
			textObj._strokeClone = strokeText;
		
			// Cache хэрэглэх
			var bounds = textObj.getBounds();
			if (bounds) {
				var cacheX = bounds.x - pad;
				var cacheY = bounds.y - pad;
				var cacheW = bounds.width + pad * 2;
				var cacheH = bounds.height + pad * 2;
		
				if (strokeText.cacheCanvas) strokeText.uncache();
				if (textObj.cacheCanvas) textObj.uncache();
		
				strokeText.cache(cacheX, cacheY, cacheW, cacheH);
				textObj.cache(cacheX, cacheY, cacheW, cacheH);
			}
		
			// Cleanup logic
			if (textObj._onRemovedCleanup) {
				textObj.off("removed", textObj._onRemovedCleanup);
			}
		
			textObj._onRemovedCleanup = function () {
				if (strokeText) {
					if (strokeText.cacheCanvas) strokeText.uncache();
					if (strokeText.parent) {
						strokeText.parent.removeChild(strokeText);
					}
				}
				if (textObj.cacheCanvas) {
					textObj.uncache();
				}
				textObj._strokeClone = null;
			};
		
			textObj.on("removed", textObj._onRemovedCleanup);
		
			// Байрлалыг баталгаажуулах
			textObj.x = savedX;
			textObj.y = savedY;
			strokeText.x = savedX;
			strokeText.y = savedY;
		}
		
		var exerciseText = {
			mn: {
				title: "ТОГЛОХ ЦАГ",
				instruction: "Тоглоомын хотод хүүхдүүд дараах хугацааг өнгөрөөжээ.\nХүүхдүүдийн тоглосон хугацааг өсөх эрэмбээр байрлуулна уу."
			},
			kz: {
				title: "ОЙЫН УАҚЫТЫ",
				instruction: "Ойын қаласында балалар төмендегі уақыттарды өткізді.\nБалалардың ойнаған уақыттарын өсу ретімен орналастырыңыз."
			},
			tuva: {
				title: "НААДААР ҮЕ",
				instruction: "Наадам хоорайда уруглар дорудагы үелерни өткөрген.\nУругларның наадаан үелерин өске эрээри-биле тургузуңар."
			},
			sign: {
				title: "ТОГЛОХ ЦАГ",
				instruction: "Тоглоомын хотод хүүхдүүд дараах хугацааг өнгөрөөжээ.\nХүүхдүүдийн тоглосон хугацааг өсөх эрэмбээр байрлуулна уу."
			}
		};
		
		var lang = exportRoot.gameState.selectedLanguage || "mn";
		var texts = exerciseText[lang];
		
		function findTextByContent(container, content) {
			if (!container) return null;
		
			if (container instanceof createjs.Text && container.text === content) {
				return container;
			}
		
			if (!container.numChildren) return null;
		
			for (var i = 0; i < container.numChildren; i++) {
				var found = findTextByContent(container.getChildAt(i), content);
				if (found) return found;
			}
		
			return null;
		}
		
		var txt_title = findTextByContent(exportRoot, "txt_title");
		var txt_instruction = findTextByContent(exportRoot, "txt_instruction");
		
		
		console.log("exerciseText[lang]");
		console.log(exerciseText[lang]);
		console.log(exportRoot.txt_title);
		if (txt_title) {
			txt_title.text = texts.title;
			applyTextStyling(txt_title, {
				outlineSize: 15,
				outlineColor: "#461A17",
				fillColor: "#FFFFFF",
				pad: 80
			});
		}else {
			console.log("exportRoot.txt_title not found");
		}
		
		console.log('--------------------------');
		console.log(exportRoot);
		console.log('--------------------------');
		
		if (txt_instruction) {
			txt_instruction.text = texts.instruction;
		}
	}
	this.frame_27 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		// =====================================================
		// CONFIG
		// =====================================================
		var CONFIG = {
		    lessonId: "lesson6",
		    lessonFolder: "Lesson6",
		    videoId: "map10",
		    videoFile: "./videos/lesson6_map10.mp4",
		    containerId: "success-video-map10",
		    nextFrame: 28,
		    backgroundColor: "#6B4FBB",
		    zIndex: "9999",
		    autoSkipOnError: true,
		    autoMarkWatchedOnSkip: true
		};
		
		// =====================================================
		// INIT
		// =====================================================
		if (!exportRoot.gameState) {
		    exportRoot.gameState = {};
		}
		
		if (!exportRoot.gameState.videosWatched) {
		    exportRoot.gameState.videosWatched = [];
		}
		
		if (!exportRoot.saveState) {
		    exportRoot.saveState = function() {};
		}
		
		var videoContainer = null;
		var videoElement = null;
		var resizeHandler = null;
		var started = false;
		var endedOrSkipped = false;
		
		// =====================================================
		// HELPERS
		// =====================================================
		function hasWatchedVideo() {
		    return exportRoot.gameState.videosWatched.indexOf(CONFIG.videoId) !== -1;
		}
		
		function markVideoWatched() {
		    if (!hasWatchedVideo()) {
		        exportRoot.gameState.videosWatched.push(CONFIG.videoId);
		        exportRoot.saveState();
		    }
		}
		
		function lockPageScroll() {
		    document.body.style.overflow = "hidden";
		    document.documentElement.style.overflow = "hidden";
		}
		
		function unlockPageScroll() {
		    document.body.style.overflow = "";
		    document.documentElement.style.overflow = "";
		}
		
		function cleanup() {
		    unlockPageScroll();
		
		    if (videoElement) {
		        try {
		            videoElement.pause();
		            videoElement.removeAttribute("src");
		            videoElement.load();
		        } catch (e) {}
		        videoElement = null;
		    }
		
		    if (videoContainer && videoContainer.parentNode) {
		        videoContainer.parentNode.removeChild(videoContainer);
		        videoContainer = null;
		    }
		
		    if (resizeHandler) {
		        window.removeEventListener("resize", resizeHandler);
		        resizeHandler = null;
		    }
		}
		
		function updateContainerPosition() {
		    if (!videoContainer) return;
		
		    var canvas = document.getElementById("canvas");
		    if (!canvas) return;
		
		    var rect = canvas.getBoundingClientRect();
		
		    videoContainer.style.left = rect.left + "px";
		    videoContainer.style.top = rect.top + "px";
		    videoContainer.style.width = rect.width + "px";
		    videoContainer.style.height = rect.height + "px";
		}
		
		function goToNextExercise(reason) {
		    if (endedOrSkipped) return;
		    endedOrSkipped = true;
		
		    if (CONFIG.autoMarkWatchedOnSkip) {
		        markVideoWatched();
		    }
		
		    cleanup();
		
		    exportRoot.gameState.currentFrame = CONFIG.nextFrame;
		    exportRoot.saveState();
		    exportRoot.gotoAndStop(CONFIG.nextFrame);
		}
		
		function tryPlayVideo() {
		    if (!videoElement || started) return;
		    started = true;
		
		    var playPromise = videoElement.play();
		
		    if (playPromise && typeof playPromise.catch === "function") {
		        playPromise.catch(function(err) {
		            console.log("Video autoplay failed:", err);
		            goToNextExercise("autoplay_failed");
		        });
		    }
		}
		
		// =====================================================
		// MAIN
		// =====================================================
		function createSuccessVideo() {
		    var existingContainer = document.getElementById(CONFIG.containerId);
		    if (existingContainer && existingContainer.parentNode) {
		        existingContainer.parentNode.removeChild(existingContainer);
		    }
		
		    var canvas = document.getElementById("canvas");
		    if (!canvas) {
		        goToNextExercise("canvas_missing");
		        return;
		    }
		
		    if (hasWatchedVideo()) {
		        goToNextExercise("already_watched");
		        return;
		    }
		
		    lockPageScroll();
		
		    var rect = canvas.getBoundingClientRect();
		
		    videoContainer = document.createElement("div");
		    videoContainer.id = CONFIG.containerId;
		    videoContainer.style.position = "fixed";
		    videoContainer.style.left = rect.left + "px";
		    videoContainer.style.top = rect.top + "px";
		    videoContainer.style.width = rect.width + "px";
		    videoContainer.style.height = rect.height + "px";
		    videoContainer.style.backgroundColor = CONFIG.backgroundColor;
		    videoContainer.style.zIndex = CONFIG.zIndex;
		    videoContainer.style.overflow = "hidden";
		    videoContainer.style.margin = "0";
		    videoContainer.style.padding = "0";
		    videoContainer.style.boxSizing = "border-box";
		
		    videoElement = document.createElement("video");
		    videoElement.src = CONFIG.videoFile;
		    videoElement.style.width = "100%";
		    videoElement.style.height = "100%";
		    videoElement.style.objectFit = "contain";
		    videoElement.style.display = "block";
		    videoElement.preload = "auto";
		    videoElement.playsInline = true;
		    videoElement.setAttribute("playsinline", "true");
		    videoElement.setAttribute("webkit-playsinline", "true");
		
		    // Зарим browser autoplay дээр дууг хаадаг.
		    // Хэрэв заавал sound-тай autoplay хэрэгтэй бол browser policy-оос хамаарна.
		    // Найдвартай ажиллуулахын тулд muted=true болгож болно.
		    videoElement.muted = false;
		    videoElement.autoplay = false;
		    videoElement.controls = false;
		
		    videoContainer.appendChild(videoElement);
		    document.body.appendChild(videoContainer);
		
		    videoElement.addEventListener("loadeddata", function() {
		        tryPlayVideo();
		    });
		
		    videoElement.addEventListener("canplay", function() {
		        tryPlayVideo();
		    });
		
		    videoElement.addEventListener("ended", function() {
		        markVideoWatched();
		        setTimeout(function() {
		            goToNextExercise("ended");
		        }, 500);
		    });
		
		    videoElement.addEventListener("error", function() {
		        console.log("Video load error:", videoElement.error, CONFIG.videoFile);
		        if (CONFIG.autoSkipOnError) {
		            goToNextExercise("error");
		        }
		    });
		
		    resizeHandler = function() {
		        updateContainerPosition();
		    };
		
		    window.addEventListener("resize", resizeHandler);
		    updateContainerPosition();
		
		    // Хэрэв ямар ч event trigger болохгүй гацвал fallback
		    setTimeout(function() {
		        if (!started && !endedOrSkipped) {
		            console.log("Video start timeout, skipping:", CONFIG.videoFile);
		            goToNextExercise("timeout");
		        }
		    }, 4000);
		}
		
		exportRoot.on("removed", cleanup);
		
		createSuccessVideo();
	}
	this.frame_28 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		// =====================================================
		// CONFIG
		// =====================================
		var CONFIG = {
		    lessonId: "lesson6",
		    exerciseId: "ex11",
		    exerciseNumber: 11,
		    storageKey: "lesson6_gameState",
		    backFrame: 26, 
		    nextFrame: 29, 
		    autoNextDelay: 1500,
		    soundPaths: {
		        correct: "./sounds/voice_correct.mp3",
		        wrong: "./sounds/voice_wrong.mp3",
		        click: "./sounds/click.mp3"
		    },
		    // Оролтын талбаруудын нэрс
		    inputs: ["input_11_1", "input_11_2"],
		    // Зөв хариултууд
		    correctValues: {
		        "input_11_1": "4",
		        "input_11_2": "8"
		    }
		};
		
		// --- Common хэсгүүд ---
		exportRoot.currentExerciseId = CONFIG.exerciseId;
		exportRoot.backBtn = CONFIG.backFrame;
		exportRoot.nextBtn = CONFIG.nextFrame;
		CONFIG.positionsKey = "exercise" + CONFIG.exerciseNumber + "Positions";
		CONFIG.completeKey = "exercise" + CONFIG.exerciseNumber + "Complete";
		
		// =====================================================
		// STATE & INIT
		// =====================
		if (!exportRoot.gameState) exportRoot.gameState = {};
		if (!exportRoot.gameState[CONFIG.positionsKey]) exportRoot.gameState[CONFIG.positionsKey] = {};
		if (typeof exportRoot.gameState[CONFIG.completeKey] === "undefined") exportRoot.gameState[CONFIG.completeKey] = false;
		
		exportRoot.saveState = function() {
		    try { localStorage.setItem(CONFIG.storageKey, JSON.stringify(exportRoot.gameState)); } catch (e) {}
		};
		
		function playSound(type) {
		    try { new Audio(CONFIG.soundPaths[type]).play().catch(function(){}); } catch (e) {}
		}
		
		// =====================================================
		// HTML INPUT HELPERS
		// =====================
		function getInputDomId(name) { return "html_" + CONFIG.lessonId + "_" + CONFIG.exerciseId + "_" + name; }
		
		function createOrGetHtmlInput(name) {
		    var id = getInputDomId(name);
		    var input = document.getElementById(id);
		
		    if (!input) {
		        input = document.createElement("input");
		        input.type = "text";
		        input.id = id;
		        input.inputMode = "numeric"; 
		        input.maxLength = 1; // Зөвхөн нэг оронтой тоо (3 ба 5)
		
		        input.style.position = "fixed";
		        input.style.zIndex = "99999";
		        input.style.textAlign = "center";
		        input.style.fontFamily = "'Rubik', Arial, sans-serif";
		        input.style.fontWeight = "700";
		        input.style.background = "transparent"; 
		        input.style.border = "none";
		        input.style.outline = "none";
		        input.style.padding = "0";
		        input.style.margin = "0";
		        document.body.appendChild(input);
		    }
		    input.style.display = "block";
		    return input;
		}
		
		function positionInput(name) {
		    var clip = exportRoot[name];
		    var input = document.getElementById(getInputDomId(name));
		    if (!clip || !input || !exportRoot.stage) return;
		
		    var canvasRect = exportRoot.stage.canvas.getBoundingClientRect();
		    var sX = exportRoot.stage.scaleX;
		    var sY = exportRoot.stage.scaleY;
		    var bX = canvasRect.width / exportRoot.stage.canvas.width;
		    var bY = canvasRect.height / exportRoot.stage.canvas.height;
		
		    var b = clip.getBounds() || clip.nominalBounds || {width: 40, height: 40};
		    var globalPos = clip.localToGlobal(0, 0);
		
		    var w = b.width * sX * bX;
		    var h = b.height * sY * bY;
		
		    input.style.left = (canvasRect.left + (globalPos.x * bX) - (w * 0.5)) + "px";
		    input.style.top = (canvasRect.top + (globalPos.y * bY) - (h * 0.5)) + "px";
		    input.style.width = w + "px";
		    input.style.height = h + "px";
		    input.style.fontSize = Math.floor(h * 0.7) + "px";
		    input.style.lineHeight = Math.floor(h) + "px";
		}
		
		function hideAllInputs() {
		    CONFIG.inputs.forEach(function(name) {
		        var el = document.getElementById(getInputDomId(name));
		        if (el) el.style.display = "none";
		    });
		}
		
		// =====================================================
		// LOGIC
		// =====================
		function checkAllAnswers() {
		    var allCorrect = true;
		
		    CONFIG.inputs.forEach(function(name) {
		        var el = document.getElementById(getInputDomId(name));
		        var val = el.value.trim();
		        if (val !== CONFIG.correctValues[name]) {
		            allCorrect = false;
		        }
		    });
		
		    if (allCorrect) {
		        // ЗӨВ
		        exportRoot.gameState[CONFIG.completeKey] = true;
		        exportRoot.saveState();
		        exportRoot.playCharacterAnimation("correct");
		        
		        CONFIG.inputs.forEach(function(n) {
		            var el = document.getElementById(getInputDomId(n));
		            el.disabled = true;
		            el.style.color = "#1F5F1A";
		        });
		
		        if (exportRoot.refreshNavButtons) exportRoot.refreshNavButtons();
		        
		        setTimeout(function() {
		            hideAllInputs();
		            exportRoot.gotoAndStop(CONFIG.nextFrame);
		        }, CONFIG.autoNextDelay);
		    }
		}
		
		// --- Start Setup ---
		CONFIG.inputs.forEach(function(name) {
		    var clip = exportRoot[name];
		    if (!clip) return;
		    clip.alpha = 0.01;
		
		    var input = createOrGetHtmlInput(name);
		    input.value = exportRoot.gameState[CONFIG.positionsKey][name] || "";
		    input.disabled = !!exportRoot.gameState[CONFIG.completeKey];
		
		    if (input.value === CONFIG.correctValues[name]) {
		        input.style.color = "#1F5F1A";
		    }
		
		    input.oninput = function() {
		        this.value = this.value.replace(/[^0-9]/g, "");
		        exportRoot.gameState[CONFIG.positionsKey][name] = this.value;
		        exportRoot.saveState();
		        
		        if (this.value === CONFIG.correctValues[name]) {
		            this.style.color = "#1F5F1A";
		        } else {
		            this.style.color = (this.value === "") ? "#222" : "#E54848";
		        }
		        checkAllAnswers();
		    };
		    positionInput(name);
		});
		
		// =====================================================
		// COMMON ELEMENTS (Help, Nav, Ticker)
		// =====================
		if (exportRoot.help_popup) {
		    exportRoot.help_popup.visible = false;
		    exportRoot.help_popup.stop();
		    var currentLang = exportRoot.gameState.selectedLanguage || "mn";
		    exportRoot.help_popup.gotoAndStop(currentLang);
		}
		
		if (exportRoot.refreshNavButtons) exportRoot.refreshNavButtons();
		
		if (!exportRoot.tickAttached && createjs && createjs.Ticker) {
		    createjs.Ticker.addEventListener("tick", function() {
		        CONFIG.inputs.forEach(positionInput);
		    });
		    exportRoot.tickAttached = true;
		}
		if (exportRoot.stopInstruction) exportRoot.stopInstruction();
		if (!exportRoot.gameState[CONFIG.completeKey]) {
		    setTimeout(function() { if(exportRoot.playInstruction) exportRoot.playInstruction(); }, 500);
		}
		
		exportRoot.on("removed", function() {
		    if(exportRoot.stopInstruction) exportRoot.stopInstruction(); 
		    hideAllInputs();
		});
		function applyTextStyling(textObj, opts) {
			if (!textObj || !(textObj instanceof createjs.Text) || !textObj.parent) return;
		
			opts = opts || {};
		
			// Фонт тохиргоо - Default-оор Rubik Bold ашиглана
			var fontSize = opts.fontSize || textObj.font.split('px')[0] || "40"; 
			var fontStyle = opts.fontStyle || "bold";
			var fontFamily = opts.fontFamily || "'Rubik', sans-serif";
			
			// textObj-ийн фонтыг шинэчлэх
			textObj.font = fontStyle + " " + fontSize + "px " + fontFamily;
		
			var outlineColor = opts.outlineColor || "#461A17";
			var outlineSize = opts.outlineSize || 6;
			var fillColor = opts.fillColor || "#FFFFFF";
			var shadowColor = opts.shadowColor || "rgba(60, 20, 0, 0.4)";
			var pad = opts.pad || 60;
		
			var savedX = textObj.x;
			var savedY = textObj.y;
			var parent = textObj.parent;
			var cloneName = "__strokeClone_" + (textObj.name || "text");
		
			// Өмнө үлдсэн ижил clone-уудыг parent-оос цэвэрлэнэ
			for (var i = parent.numChildren - 1; i >= 0; i--) {
				var child = parent.getChildAt(i);
				if (child && child.name === cloneName) {
					if (child.cacheCanvas) child.uncache();
					parent.removeChild(child);
				}
			}
		
			// Хуучин cache арилгана
			if (textObj.cacheCanvas) {
				textObj.uncache();
			}
		
			textObj.outline = null;
			textObj.color = fillColor;
			textObj.shadow = new createjs.Shadow(shadowColor, 3, 3, 6);
		
			// Stroke үүсгэхдээ шинэчлэгдсэн фонтыг ашиглана
			var strokeText = new createjs.Text(textObj.text, textObj.font, outlineColor);
			strokeText.name = cloneName;
			strokeText.textAlign = textObj.textAlign;
			strokeText.textBaseline = textObj.textBaseline;
			strokeText.x = savedX;
			strokeText.y = savedY;
			strokeText.scaleX = textObj.scaleX;
			strokeText.scaleY = textObj.scaleY;
			strokeText.rotation = textObj.rotation;
			strokeText.skewX = textObj.skewX;
			strokeText.skewY = textObj.skewY;
			strokeText.regX = textObj.regX;
			strokeText.regY = textObj.regY;
			strokeText.outline = outlineSize;
			strokeText.shadow = null;
			strokeText.mouseEnabled = false;
		
			var idx = parent.getChildIndex(textObj);
			parent.addChildAt(strokeText, idx);
		
			textObj._strokeClone = strokeText;
		
			// Cache хэрэглэх
			var bounds = textObj.getBounds();
			if (bounds) {
				var cacheX = bounds.x - pad;
				var cacheY = bounds.y - pad;
				var cacheW = bounds.width + pad * 2;
				var cacheH = bounds.height + pad * 2;
		
				if (strokeText.cacheCanvas) strokeText.uncache();
				if (textObj.cacheCanvas) textObj.uncache();
		
				strokeText.cache(cacheX, cacheY, cacheW, cacheH);
				textObj.cache(cacheX, cacheY, cacheW, cacheH);
			}
		
			// Cleanup logic
			if (textObj._onRemovedCleanup) {
				textObj.off("removed", textObj._onRemovedCleanup);
			}
		
			textObj._onRemovedCleanup = function () {
				if (strokeText) {
					if (strokeText.cacheCanvas) strokeText.uncache();
					if (strokeText.parent) {
						strokeText.parent.removeChild(strokeText);
					}
				}
				if (textObj.cacheCanvas) {
					textObj.uncache();
				}
				textObj._strokeClone = null;
			};
		
			textObj.on("removed", textObj._onRemovedCleanup);
		
			// Байрлалыг баталгаажуулах
			textObj.x = savedX;
			textObj.y = savedY;
			strokeText.x = savedX;
			strokeText.y = savedY;
		}
		
		var exerciseText = {
			mn: {
				title: "ШААР ХАГАЛАХ ТЭМЦЭЭН",
				instruction: "Эгнээ бүрд бүтэн үлдсэн шааруудын тоо ямар зүй тогтлоор өөрчлөгдөж байгааг олж харна уу. Дунд эгнээнд тохирох энгийн бутархайг олж бичээрэй."
			},
			kz: {
				title: "ШАР ЖАРУ САЙЫЖЫ",
				instruction: "Хатар бүрүзүндө бүтүн артып калган шарларның тоозу кандыг ёзулал-биле өскерип турганын ажыглаңар. Ортакы хатарга тааржыыр эңгин бөлүктү таап бижиңер."
			},
			tuva: {
				title: "ШАР ЖАРУ САЙЫЖЫ",
				instruction: "Хатар бүрүзүндө бүтүн артып калган шарларның тоозу кандыг ёзулал-биле өскерип турганын ажыглаңар. Ортакы хатарга тааржыыр эңгин бөлүктү таап бижиңер."
			},
			sign: {
				title: "ШААР ХАГАЛАХ ТЭМЦЭЭН",
				instruction: "Эгнээ бүрд бүтэн үлдсэн шааруудын тоо ямар зүй тогтлоор өөрчлөгдөж байгааг олж харна уу. Дунд эгнээнд тохирох энгийн бутархайг олж бичээрэй."
			}
		};
		
		var lang = exportRoot.gameState.selectedLanguage || "mn";
		var texts = exerciseText[lang];
		
		function findTextByContent(container, content) {
			if (!container) return null;
		
			if (container instanceof createjs.Text && container.text === content) {
				return container;
			}
		
			if (!container.numChildren) return null;
		
			for (var i = 0; i < container.numChildren; i++) {
				var found = findTextByContent(container.getChildAt(i), content);
				if (found) return found;
			}
		
			return null;
		}
		
		var txt_title = findTextByContent(exportRoot, "txt_title");
		var txt_instruction = findTextByContent(exportRoot, "txt_instruction");
		
		
		console.log("exerciseText[lang]");
		console.log(exerciseText[lang]);
		console.log(exportRoot.txt_title);
		if (txt_title) {
			txt_title.text = texts.title;
			applyTextStyling(txt_title, {
				outlineSize: 15,
				outlineColor: "#461A17",
				fillColor: "#FFFFFF",
				pad: 80
			});
		}else {
			console.log("exportRoot.txt_title not found");
		}
		
		if (txt_instruction) {
			txt_instruction.text = texts.instruction;
		}
	}
	this.frame_29 = function() {
		var exportRoot = this;
		exportRoot.stop();
		
		// =====================================================
		// CONFIG
		// =====================================================
		var CONFIG = {
		    lessonId: "lesson6",
		    lessonFolder: "Lesson6",
		    videoId: "map11",
		    videoFile: "./videos/lesson6_map11.mp4",
		    containerId: "success-video-map11",
		    nextFrame: null,
		    backgroundColor: "#6B4FBB",
		    zIndex: "9999",
		    autoSkipOnError: true,
		    autoMarkWatchedOnSkip: true
		};
		
		
		// =====================================================
		// INIT
		// =====================================================
		if (!exportRoot.gameState) {
			exportRoot.gameState = {};
		}
		
		if (!exportRoot.gameState.videosWatched) {
			exportRoot.gameState.videosWatched = [];
		}
		
		if (!exportRoot.saveState) {
			exportRoot.saveState = function () {};
		}
		
		var videoContainer = null;
		var videoElement = null;
		var resizeHandler = null;
		var started = false;
		var endedOrSkipped = false;
		
		// =====================================================
		// HELPERS
		// =====================================================
		function hasWatchedVideo() {
			return exportRoot.gameState.videosWatched.indexOf(CONFIG.videoId) !== -1;
		}
		
		function markVideoWatched() {
			if (!hasWatchedVideo()) {
				exportRoot.gameState.videosWatched.push(CONFIG.videoId);
				exportRoot.saveState();
			}
		}
		
		function lockPageScroll() {
			document.body.style.overflow = "hidden";
			document.documentElement.style.overflow = "hidden";
		}
		
		function unlockPageScroll() {
			document.body.style.overflow = "";
			document.documentElement.style.overflow = "";
		}
		
		function cleanup() {
			unlockPageScroll();
		
			if (videoElement) {
				try {
					videoElement.pause();
					videoElement.removeAttribute("src");
					videoElement.load();
				} catch (e) {}
				videoElement = null;
			}
		
			if (videoContainer && videoContainer.parentNode) {
				videoContainer.parentNode.removeChild(videoContainer);
				videoContainer = null;
			}
		
			if (resizeHandler) {
				window.removeEventListener("resize", resizeHandler);
				resizeHandler = null;
			}
		}
		
		function updateContainerPosition() {
			if (!videoContainer) return;
		
			var canvas = document.getElementById("canvas");
			if (!canvas) return;
		
			var rect = canvas.getBoundingClientRect();
		
			videoContainer.style.left = rect.left + "px";
			videoContainer.style.top = rect.top + "px";
			videoContainer.style.width = rect.width + "px";
			videoContainer.style.height = rect.height + "px";
		}
		
		function goToNextExercise(reason) {
			if (endedOrSkipped) return;
			endedOrSkipped = true;
		
			if (CONFIG.autoMarkWatchedOnSkip) {
				markVideoWatched();
			}
			if (CONFIG.nextFrame === null) {
				return;
			}
		
			cleanup();
		
			exportRoot.gameState.currentFrame = CONFIG.nextFrame;
			exportRoot.saveState();
			exportRoot.gotoAndStop(CONFIG.nextFrame);
		}
		
		function tryPlayVideo() {
			if (!videoElement || started) return;
			started = true;
		
			var playPromise = videoElement.play();
		
			if (playPromise && typeof playPromise.
				catch === "function") {
				playPromise.
				catch (function (err) {
					console.log("Video autoplay failed:", err);
					if (CONFIG.nextFrame !== null) {
						goToNextExercise("autoplay_failed");
					}
				});
			}
		}
		
		// =====================================================
		// MAIN
		// =====================================================
		function createSuccessVideo() {
			var existingContainer = document.getElementById(CONFIG.containerId);
			if (existingContainer && existingContainer.parentNode) {
				existingContainer.parentNode.removeChild(existingContainer);
			}
		
			var canvas = document.getElementById("canvas");
			if (!canvas) {
				if (CONFIG.nextFrame !== null) {
					goToNextExercise("canvas_missing");
				}
				return;
			}
		
			if (hasWatchedVideo() && CONFIG.nextFrame !== null) {
				goToNextExercise("already_watched");
				return;
			}
		
			lockPageScroll();
		
			var rect = canvas.getBoundingClientRect();
		
			videoContainer = document.createElement("div");
			videoContainer.id = CONFIG.containerId;
			videoContainer.style.position = "fixed";
			videoContainer.style.left = rect.left + "px";
			videoContainer.style.top = rect.top + "px";
			videoContainer.style.width = rect.width + "px";
			videoContainer.style.height = rect.height + "px";
			videoContainer.style.backgroundColor = CONFIG.backgroundColor;
			videoContainer.style.zIndex = CONFIG.zIndex;
			videoContainer.style.overflow = "hidden";
			videoContainer.style.margin = "0";
			videoContainer.style.padding = "0";
			videoContainer.style.boxSizing = "border-box";
		
			videoElement = document.createElement("video");
			videoElement.src = CONFIG.videoFile;
			videoElement.style.width = "100%";
			videoElement.style.height = "100%";
			videoElement.style.objectFit = "contain";
			videoElement.style.display = "block";
			videoElement.preload = "auto";
			videoElement.playsInline = true;
			videoElement.setAttribute("playsinline", "true");
			videoElement.setAttribute("webkit-playsinline", "true");
		
			// Зарим browser autoplay дээр дууг хаадаг.
			// Хэрэв заавал sound-тай autoplay хэрэгтэй бол browser policy-оос хамаарна.
			// Найдвартай ажиллуулахын тулд muted=true болгож болно.
			videoElement.muted = false;
			videoElement.autoplay = false;
			videoElement.controls = false;
		
			videoContainer.appendChild(videoElement);
			document.body.appendChild(videoContainer);
		
			videoElement.addEventListener("loadeddata", function () {
				tryPlayVideo();
			});
		
			videoElement.addEventListener("canplay", function () {
				tryPlayVideo();
			});
		
			videoElement.addEventListener("ended", function () {
				markVideoWatched();
				if (CONFIG.nextFrame === null) {
					console.log("Final video ended - staying visible");
					return;
				}
				setTimeout(function () {
					goToNextExercise("ended");
				}, 500);
			});
		
			videoElement.addEventListener("error", function () {
				console.log("Video load error:", videoElement.error, CONFIG.videoFile);
				if (CONFIG.autoSkipOnError) {
					goToNextExercise("error");
				}
			});
		
			resizeHandler = function () {
				updateContainerPosition();
			};
		
			window.addEventListener("resize", resizeHandler);
			updateContainerPosition();
		
			// Хэрэв ямар ч event trigger болохгүй гацвал fallback
			if (CONFIG.nextFrame !== null) {
				setTimeout(function() {
					if (!started && !endedOrSkipped) {
						console.log("Video start timeout, skipping:", CONFIG.videoFile);
						goToNextExercise("timeout");
					}
				}, 4000);
			}
		}
		
		exportRoot.on("removed", cleanup);
		
		createSuccessVideo();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(1).call(this.frame_13).wait(1).call(this.frame_14).wait(1).call(this.frame_15).wait(1).call(this.frame_16).wait(1).call(this.frame_17).wait(1).call(this.frame_18).wait(1).call(this.frame_19).wait(1).call(this.frame_20).wait(1).call(this.frame_21).wait(1).call(this.frame_22).wait(1).call(this.frame_23).wait(1).call(this.frame_24).wait(1).call(this.frame_25).wait(1).call(this.frame_26).wait(1).call(this.frame_27).wait(1).call(this.frame_28).wait(1).call(this.frame_29).wait(1));

	// help
	this.help_popup = new lib.help_popup();
	this.help_popup.name = "help_popup";
	this.help_popup.setTransform(995.1,607.85);

	this.instance = new lib.closeBtn();
	this.instance.setTransform(1646.75,290.5,1.3295,1.4245,0,0,0,0.1,-0.1);
	this.instance.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance},{t:this.help_popup}]},8).wait(22));

	// kids
	this.Emoji_result = new lib.MC_result();
	this.Emoji_result.name = "Emoji_result";
	this.Emoji_result.setTransform(-792.15,10.25,1.7495,1.7498,0,0,0,-0.1,0.1);
	this.Emoji_result._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Emoji_result).wait(8).to({_off:false},0).wait(22));

	// btn_main_new
	this.btn_next = new lib.btn_next();
	this.btn_next.name = "btn_next";
	this.btn_next.setTransform(1061.5,1016);
	new cjs.ButtonHelper(this.btn_next, 0, 1, 1);

	this.btn_back = new lib.btn_back();
	this.btn_back.name = "btn_back";
	this.btn_back.setTransform(954,1016);
	new cjs.ButtonHelper(this.btn_back, 0, 1, 1);

	this.home_btn = new lib.home_btn();
	this.home_btn.name = "home_btn";
	this.home_btn.setTransform(1824,627.5);
	new cjs.ButtonHelper(this.home_btn, 0, 1, 1);

	this.help_btn = new lib.help_btn_1();
	this.help_btn.name = "help_btn";
	this.help_btn.setTransform(1824,508);
	new cjs.ButtonHelper(this.help_btn, 0, 1, 1);

	this.voice_btn = new lib.voice_btn_1();
	this.voice_btn.name = "voice_btn";
	this.voice_btn.setTransform(1823.5,391);
	new cjs.ButtonHelper(this.voice_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.voice_btn},{t:this.help_btn},{t:this.home_btn},{t:this.btn_back},{t:this.btn_next}]},7).wait(23));

	// text
	this.text = new cjs.Text("Тэнцүү биш хэсэгт \nхуваасан", "42px 'Roboto'");
	this.text.textAlign = "center";
	this.text.lineHeight = 51;
	this.text.lineWidth = 812;
	this.text.parent = this;
	this.text.setTransform(1173,234);

	this.text_1 = new cjs.Text("Тэнцүү хэсэгт хуваасан", "42px 'Roboto'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 51;
	this.text_1.lineWidth = 812;
	this.text_1.parent = this;
	this.text_1.setTransform(525.3,234);

	this.text_2 = new cjs.Text("Дөрөвний дөрөв", "normal 400 30px 'Roboto'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 40;
	this.text_2.lineWidth = 239;
	this.text_2.parent = this;
	this.text_2.setTransform(1546.6,776.45);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("Дөрөвний гурав", "normal 400 30px 'Roboto'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 40;
	this.text_3.lineWidth = 231;
	this.text_3.parent = this;
	this.text_3.setTransform(1543.9,698.15);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_3);
	}

	this.text_4 = new cjs.Text("Дөрөвний хоёр", "normal 400 30px 'Roboto'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 40;
	this.text_4.lineWidth = 221;
	this.text_4.parent = this;
	this.text_4.setTransform(1536.3,615.7);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_4);
	}

	this.text_5 = new cjs.Text("Дөрөвний нэг", "normal 400 30px 'Roboto'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 40;
	this.text_5.lineWidth = 203;
	this.text_5.parent = this;
	this.text_5.setTransform(1535.15,540.25);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_5);
	}

	this.text_6 = new cjs.Text("Гурван бүхэл", "normal 400 30px 'Roboto'");
	this.text_6.textAlign = "center";
	this.text_6.lineHeight = 40;
	this.text_6.lineWidth = 217;
	this.text_6.parent = this;
	this.text_6.setTransform(851.5,774.3);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_6);
	}

	this.text_7 = new cjs.Text("Гуравны гурав", "normal 400 30px 'Roboto'");
	this.text_7.textAlign = "center";
	this.text_7.lineHeight = 40;
	this.text_7.lineWidth = 217;
	this.text_7.parent = this;
	this.text_7.setTransform(852.55,696);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_7);
	}

	this.text_8 = new cjs.Text("Гуравны хоёр", "normal 400 30px 'Roboto'");
	this.text_8.textAlign = "center";
	this.text_8.lineHeight = 40;
	this.text_8.lineWidth = 203;
	this.text_8.parent = this;
	this.text_8.setTransform(849.9,615.7);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_8);
	}

	this.text_9 = new cjs.Text("Гуравны нэг", "normal 400 30px 'Roboto'");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 40;
	this.text_9.lineWidth = 203;
	this.text_9.parent = this;
	this.text_9.setTransform(850.95,536.25);
	if(!lib.properties.webfonts['Roboto']) {
		lib.webFontTxtInst['Roboto'] = lib.webFontTxtInst['Roboto'] || [];
		lib.webFontTxtInst['Roboto'].push(this.text_9);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("ABtEKIjYAAIAAoTIDYAA");
	this.shape.setTransform(387.05,770.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AhrhzIAAksIDYAAABtB0IjYAAIAAjnIDYAAABtGgIjYAAIAAks");
	this.shape_1.setTransform(387.05,755.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1,p:{x:525.3,y:234,text:"Тэнцүү хэсэгт хуваасан",font:"42px 'Roboto'",color:"#000000",lineHeight:51.2,lineWidth:812}},{t:this.text,p:{x:1173,y:234,text:"Тэнцүү биш хэсэгт \nхуваасан",lineWidth:812,font:"42px 'Roboto'",lineHeight:51.2}}]},2).to({state:[]},1).to({state:[{t:this.text,p:{x:949.85,y:222.25,text:"Дугуй дүрсний 2/4 хэсгийг будъя.\nАль хэсгийг будахаа өөрсдөө сонгоорой.",lineWidth:1395,font:"42px 'Roboto'",lineHeight:51.2}}]},1).to({state:[]},1).to({state:[{t:this.text,p:{x:949.85,y:151.85,text:"Харин дөрвөн тэнцүү хуваасан тэгш өнцөгтийн 2/4-ыг  будах хэдэн өөр боломж байна вэ? \nНайзууд аа. Үүнийг бие дааж хийгээрэй. ",lineWidth:1395,font:"42px 'Roboto'",lineHeight:51.2}}]},1).to({state:[]},1).to({state:[{t:this.text_1,p:{x:1012.65,y:140.3,text:"txt_title",font:"50px 'Arial'",color:"#FFFFFF",lineHeight:82.35,lineWidth:843}},{t:this.text,p:{x:1010.6,y:360.55,text:"txt_instruction",lineWidth:1398,font:"35px 'Arial'",lineHeight:48.45}}]},1).to({state:[{t:this.text_9},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1,p:{x:1012.65,y:140.3,text:"txt_title",font:"50px 'Arial'",color:"#FFFFFF",lineHeight:82.35,lineWidth:843}},{t:this.text,p:{x:1010.6,y:352.55,text:"txt_instruction",lineWidth:1398,font:"35px 'Arial'",lineHeight:48.45}}]},2).to({state:[{t:this.shape,p:{y:770.025}},{t:this.text_1,p:{x:1012.65,y:140.3,text:"txt_title",font:"50px 'Arial'",color:"#FFFFFF",lineHeight:82.35,lineWidth:843}},{t:this.text,p:{x:1010.6,y:352.55,text:"txt_instruction",lineWidth:1398,font:"35px 'Arial'",lineHeight:48.45}}]},2).to({state:[{t:this.text_1,p:{x:1012.65,y:140.3,text:"txt_title",font:"50px 'Arial'",color:"#FFFFFF",lineHeight:82.35,lineWidth:843}},{t:this.text,p:{x:1010.6,y:354.55,text:"txt_instruction",lineWidth:1398,font:"35px 'Arial'",lineHeight:48.45}}]},2).to({state:[{t:this.shape,p:{y:770.025}},{t:this.text_1,p:{x:1012.65,y:140.3,text:"txt_title",font:"50px 'Arial'",color:"#FFFFFF",lineHeight:82.35,lineWidth:843}},{t:this.text,p:{x:1010.6,y:354.55,text:"txt_instruction",lineWidth:1398,font:"35px 'Arial'",lineHeight:48.45}}]},2).to({state:[{t:this.shape_1},{t:this.text_1,p:{x:1008,y:140.6,text:"txt_title",font:"50px 'Arial'",color:"#FFFFFF",lineHeight:82.35,lineWidth:843}},{t:this.text,p:{x:1010.6,y:354.55,text:"txt_instruction",lineWidth:1398,font:"35px 'Arial'",lineHeight:48.45}}]},2).to({state:[{t:this.shape_1},{t:this.text_1,p:{x:1008,y:140.3,text:"txt_title",font:"50px 'Arial'",color:"#FFFFFF",lineHeight:82.35,lineWidth:843}},{t:this.text,p:{x:1010.6,y:354.55,text:"txt_instruction",lineWidth:1398,font:"35px 'Arial'",lineHeight:48.45}}]},2).to({state:[{t:this.shape_1},{t:this.text_1,p:{x:1012.65,y:140.3,text:"txt_title",font:"50px 'Arial'",color:"#FFFFFF",lineHeight:82.35,lineWidth:843}},{t:this.text,p:{x:1230.55,y:354.55,text:"txt_instruction",lineWidth:958,font:"35px 'Arial'",lineHeight:48.45}}]},2).to({state:[{t:this.shape_1},{t:this.text_1,p:{x:1012.65,y:140.3,text:"txt_title",font:"50px 'Arial'",color:"#FFFFFF",lineHeight:82.35,lineWidth:843}},{t:this.text,p:{x:1010.6,y:354.55,text:"txt_instruction",lineWidth:1398,font:"35px 'Arial'",lineHeight:48.45}}]},2).to({state:[{t:this.shape,p:{y:740.025}},{t:this.text_1,p:{x:1012.65,y:140.3,text:"txt_title",font:"50px 'Arial'",color:"#FFFFFF",lineHeight:82.35,lineWidth:843}},{t:this.text,p:{x:1010.6,y:354.55,text:"txt_instruction",lineWidth:1398,font:"35px 'Arial'",lineHeight:48.45}}]},2).to({state:[{t:this.shape,p:{y:740.025}},{t:this.text_1,p:{x:1012.65,y:140.3,text:"txt_title",font:"50px 'Arial'",color:"#FFFFFF",lineHeight:82.35,lineWidth:843}},{t:this.text,p:{x:1010.6,y:354.55,text:"txt_instruction",lineWidth:1398,font:"35px 'Arial'",lineHeight:48.45}}]},2).wait(2));

	// hariult
	this.input_1_14 = new lib.input_1();
	this.input_1_14.name = "input_1_14";
	this.input_1_14.setTransform(1561.7,887.85,0.3107,0.8275);
	this.input_1_14.visible = false;

	this.input_1_13 = new lib.input_1();
	this.input_1_13.name = "input_1_13";
	this.input_1_13.setTransform(1561.7,821.85,0.3107,0.8275);
	this.input_1_13.visible = false;

	this.input_1_12 = new lib.input_1();
	this.input_1_12.name = "input_1_12";
	this.input_1_12.setTransform(1561.7,761.85,0.3107,0.8275);
	this.input_1_12.visible = false;

	this.input_1_11 = new lib.input_1();
	this.input_1_11.name = "input_1_11";
	this.input_1_11.setTransform(1561.7,695.85,0.3107,0.8275);
	this.input_1_11.visible = false;

	this.input_1_10 = new lib.input_1();
	this.input_1_10.name = "input_1_10";
	this.input_1_10.setTransform(1561.7,633.85,0.3107,0.8275);
	this.input_1_10.visible = false;

	this.input_1_9 = new lib.input_1();
	this.input_1_9.name = "input_1_9";
	this.input_1_9.setTransform(1561.7,567.85,0.3107,0.8275);
	this.input_1_9.visible = false;

	this.input_1_8 = new lib.input_1();
	this.input_1_8.name = "input_1_8";
	this.input_1_8.setTransform(1141.7,863.85,0.3107,0.8275);
	this.input_1_8.visible = false;

	this.input_1_7 = new lib.input_1();
	this.input_1_7.name = "input_1_7";
	this.input_1_7.setTransform(1141.7,797.85,0.3107,0.8275);
	this.input_1_7.visible = false;

	this.input_1_6 = new lib.input_1();
	this.input_1_6.name = "input_1_6";
	this.input_1_6.setTransform(1141.7,695.85,0.3107,0.8275);
	this.input_1_6.visible = false;

	this.input_1_5 = new lib.input_1();
	this.input_1_5.name = "input_1_5";
	this.input_1_5.setTransform(1141.7,631.85,0.3107,0.8275);
	this.input_1_5.visible = false;

	this.input_1_4 = new lib.input_1();
	this.input_1_4.name = "input_1_4";
	this.input_1_4.setTransform(741.95,861.05,0.3107,0.8275,0,0,0,0.1,0);
	this.input_1_4.visible = false;

	this.input_1_3 = new lib.input_1();
	this.input_1_3.name = "input_1_3";
	this.input_1_3.setTransform(741.95,797.75,0.3107,0.8275,0,0,0,0.1,0);
	this.input_1_3.visible = false;

	this.input_1_2 = new lib.input_1();
	this.input_1_2.name = "input_1_2";
	this.input_1_2.setTransform(741.95,693.8,0.3107,0.8275,0,0,0,0.1,0);
	this.input_1_2.visible = false;

	this.input_1_1 = new lib.input_1();
	this.input_1_1.name = "input_1_1";
	this.input_1_1.setTransform(744.35,630.45,0.3098,0.8275,0,0,0,8.1,0);
	this.input_1_1.visible = false;

	this.input_5_4 = new lib.input_1();
	this.input_5_4.name = "input_5_4";
	this.input_5_4.setTransform(1289.65,803.65,0.8885,0.8275);
	this.input_5_4.visible = false;

	this.input_5_3 = new lib.input_1();
	this.input_5_3.name = "input_5_3";
	this.input_5_3.setTransform(609.9,813.65,0.8885,0.8275);
	this.input_5_3.visible = false;

	this.input_5_2 = new lib.input_1();
	this.input_5_2.name = "input_5_2";
	this.input_5_2.setTransform(1293.65,573.75,0.8885,0.8275);
	this.input_5_2.visible = false;

	this.input_5_1 = new lib.input_1();
	this.input_5_1.name = "input_5_1";
	this.input_5_1.setTransform(611.9,571.75,0.8885,0.8275);
	this.input_5_1.visible = false;

	this.input_9_3_2 = new lib.input_1();
	this.input_9_3_2.name = "input_9_3_2";
	this.input_9_3_2.setTransform(1481.9,796.45,0.8885,0.8275);
	this.input_9_3_2.visible = false;

	this.input_9_3_1 = new lib.input_1();
	this.input_9_3_1.name = "input_9_3_1";
	this.input_9_3_1.setTransform(1479.9,736.45,0.8885,0.8275);
	this.input_9_3_1.visible = false;

	this.input_9_2_2 = new lib.input_1();
	this.input_9_2_2.name = "input_9_2_2";
	this.input_9_2_2.setTransform(1197.9,796.45,0.8885,0.8275);
	this.input_9_2_2.visible = false;

	this.input_9_2_1 = new lib.input_1();
	this.input_9_2_1.name = "input_9_2_1";
	this.input_9_2_1.setTransform(1193.9,736.45,0.8885,0.8275);
	this.input_9_2_1.visible = false;

	this.input_9_1_2 = new lib.input_1();
	this.input_9_1_2.name = "input_9_1_2";
	this.input_9_1_2.setTransform(933.9,796.45,0.8885,0.8275);
	this.input_9_1_2.visible = false;

	this.input_9_1_1 = new lib.input_1();
	this.input_9_1_1.name = "input_9_1_1";
	this.input_9_1_1.setTransform(933.9,736.45,0.8885,0.8275);
	this.input_9_1_1.visible = false;

	this.input_11_2 = new lib.input_1();
	this.input_11_2.name = "input_11_2";
	this.input_11_2.setTransform(1021.9,878.45,0.8885,0.8275);
	this.input_11_2.visible = false;

	this.input_11_1 = new lib.input_1();
	this.input_11_1.name = "input_11_1";
	this.input_11_1.setTransform(1021.9,816.45,0.8885,0.8275);
	this.input_11_1.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.input_1_1},{t:this.input_1_2},{t:this.input_1_3},{t:this.input_1_4},{t:this.input_1_5},{t:this.input_1_6},{t:this.input_1_7},{t:this.input_1_8},{t:this.input_1_9},{t:this.input_1_10},{t:this.input_1_11},{t:this.input_1_12},{t:this.input_1_13},{t:this.input_1_14}]},8).to({state:[]},2).to({state:[{t:this.input_5_1},{t:this.input_5_2},{t:this.input_5_3},{t:this.input_5_4}]},6).to({state:[]},2).to({state:[{t:this.input_9_1_1},{t:this.input_9_1_2},{t:this.input_9_2_1},{t:this.input_9_2_2},{t:this.input_9_3_1},{t:this.input_9_3_2}]},6).to({state:[]},2).to({state:[{t:this.input_11_1},{t:this.input_11_2}]},2).wait(2));

	// btn
	this.unequal_slot_6 = new lib.Symbol1();
	this.unequal_slot_6.name = "unequal_slot_6";
	this.unequal_slot_6.setTransform(1315.5,549.35,0.6234,2.239,0,0,0,-0.1,-0.2);
	this.unequal_slot_6.alpha = 0.0117;

	this.unequal_slot_5 = new lib.Symbol1();
	this.unequal_slot_5.name = "unequal_slot_5";
	this.unequal_slot_5.setTransform(1175.55,549.35,0.6234,2.239,0,0,0,-0.1,-0.2);
	this.unequal_slot_5.alpha = 0.0117;

	this.unequal_slot_4 = new lib.Symbol1();
	this.unequal_slot_4.name = "unequal_slot_4";
	this.unequal_slot_4.setTransform(1033.6,549.35,0.6234,2.239,0,0,0,-0.1,-0.2);
	this.unequal_slot_4.alpha = 0.0117;

	this.unequal_slot_3 = new lib.Symbol1();
	this.unequal_slot_3.name = "unequal_slot_3";
	this.unequal_slot_3.setTransform(1325.5,421.4,0.6234,2.239,0,0,0,-0.1,-0.2);
	this.unequal_slot_3.alpha = 0.0117;

	this.unequal_slot_2 = new lib.Symbol1();
	this.unequal_slot_2.name = "unequal_slot_2";
	this.unequal_slot_2.setTransform(1175.55,421.4,0.6234,2.239,0,0,0,-0.1,-0.2);
	this.unequal_slot_2.alpha = 0.0117;

	this.unequal_slot_1 = new lib.Symbol1();
	this.unequal_slot_1.name = "unequal_slot_1";
	this.unequal_slot_1.setTransform(1033.6,421.4,0.6234,2.239,0,0,0,-0.1,-0.2);
	this.unequal_slot_1.alpha = 0.0117;

	this.equal_slot_4 = new lib.Symbol1();
	this.equal_slot_4.name = "equal_slot_4";
	this.equal_slot_4.setTransform(583.25,549.35,0.6234,2.239,0,0,0,-0.1,-0.2);
	this.equal_slot_4.alpha = 0.0117;

	this.equal_slot_3 = new lib.Symbol1();
	this.equal_slot_3.name = "equal_slot_3";
	this.equal_slot_3.setTransform(629.25,443.4,0.6234,2.239,0,0,0,-0.1,-0.2);
	this.equal_slot_3.alpha = 0.0117;

	this.equal_slot_2 = new lib.Symbol1();
	this.equal_slot_2.name = "equal_slot_2";
	this.equal_slot_2.setTransform(419.3,549.35,0.6234,2.239,0,0,0,-0.1,-0.2);
	this.equal_slot_2.alpha = 0.0117;

	this.equal_slot_1 = new lib.Symbol1();
	this.equal_slot_1.name = "equal_slot_1";
	this.equal_slot_1.setTransform(440.6,421.4,0.6234,2.239,0,0,0,-0.1,-0.2);
	this.equal_slot_1.alpha = 0.0117;

	this.btn_prev_1_8 = new lib.btn_prev_8();
	this.btn_prev_1_8.name = "btn_prev_1_8";
	this.btn_prev_1_8.setTransform(1460.5,913.5,1,1,0,0,0,113.5,62.5);

	this.btn_prev_1_7 = new lib.btn_prev_7();
	this.btn_prev_1_7.name = "btn_prev_1_7";
	this.btn_prev_1_7.setTransform(1294,770.5,1,1,0,0,0,132,71.5);

	this.btn_prev_1_6 = new lib.btn_prev_6();
	this.btn_prev_1_6.name = "btn_prev_1_6";
	this.btn_prev_1_6.setTransform(1123,917.5,1,1,0,0,0,114,58.5);

	this.btn_prev_1_5 = new lib.btn_prev_5();
	this.btn_prev_1_5.name = "btn_prev_1_5";
	this.btn_prev_1_5.setTransform(964.5,769.5,1,1,0,0,0,111.5,71.5);

	this.btn_prev_1_4 = new lib.btn_prev_4();
	this.btn_prev_1_4.name = "btn_prev_1_4";
	this.btn_prev_1_4.setTransform(841,916,1,1,0,0,0,71,72);

	this.btn_prev_1_3 = new lib.btn_prev_3();
	this.btn_prev_1_3.name = "btn_prev_1_3";
	this.btn_prev_1_3.setTransform(682,768.5,1,1,0,0,0,95,95.5);

	this.btn_prev_1_2 = new lib.btn_prev_2();
	this.btn_prev_1_2.name = "btn_prev_1_2";
	this.btn_prev_1_2.setTransform(494.5,734,1,1,0,0,0,76.5,79);

	this.btn_prev_1_1 = new lib.btn_prev_1();
	this.btn_prev_1_1.name = "btn_prev_1_1";
	this.btn_prev_1_1.setTransform(394,874.5,1,1,0,0,0,89,86.5);

	this.part_prev_4 = new lib.part_prev_1();
	this.part_prev_4.name = "part_prev_4";
	this.part_prev_4.setTransform(879.9,502.95,1,1,-90,0,0,74,73);

	this.part_prev_3 = new lib.part_prev_1();
	this.part_prev_3.name = "part_prev_3";
	this.part_prev_3.setTransform(878.95,650,1,1,180,0,0,74,73);

	this.part_prev_2 = new lib.part_prev_1();
	this.part_prev_2.name = "part_prev_2";
	this.part_prev_2.setTransform(1026,651.65,1,1,90,0,0,74,73);

	this.part_prev_1 = new lib.part_prev_1();
	this.part_prev_1.name = "part_prev_1";
	this.part_prev_1.setTransform(1027,503.9,1,1,0,0,0,74,73);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AAAglIAABL");
	this.shape_2.setTransform(950.975,577.4);

	this.btn_2_2_4 = new lib.btn_2_2_4();
	this.btn_2_2_4.name = "btn_2_2_4";
	this.btn_2_2_4.setTransform(1538.1,794.05,1,1,0,0,0,137.3,32.5);

	this.btn_2_2_3 = new lib.btn_2_2_3();
	this.btn_2_2_3.name = "btn_2_2_3";
	this.btn_2_2_3.setTransform(1538.1,716.45,1,1,0,0,0,137.3,32.5);

	this.btn_2_2_2 = new lib.btn_2_2_2();
	this.btn_2_2_2.name = "btn_2_2_2";
	this.btn_2_2_2.setTransform(1538.1,636.55,1,1,0,0,0,137.3,32.5);

	this.btn_2_2_1 = new lib.btn_2_2_1();
	this.btn_2_2_1.name = "btn_2_2_1";
	this.btn_2_2_1.setTransform(1538.1,558.95,1,1,0,0,0,137.3,32.5);

	this.btn_2_1_4 = new lib.btn_2_1_4();
	this.btn_2_1_4.name = "btn_2_1_4";
	this.btn_2_1_4.setTransform(852,791.9,1,1,0,0,0,123,32.5);

	this.btn_2_1_3 = new lib.btn_2_1_3();
	this.btn_2_1_3.name = "btn_2_1_3";
	this.btn_2_1_3.setTransform(852,714.2,1,1,0,0,0,123,32.5);

	this.btn_2_1_2 = new lib.btn_2_1_2();
	this.btn_2_1_2.name = "btn_2_1_2";
	this.btn_2_1_2.setTransform(852,634.35,1,1,0,0,0,123,32.5);

	this.btn_2_1_1 = new lib.btn_2_1_1();
	this.btn_2_1_1.name = "btn_2_1_1";
	this.btn_2_1_1.setTransform(852,556.7,1,1,0,0,0,123,32.5);

	this.target_3_4_2 = new lib.target_3_4_2();
	this.target_3_4_2.name = "target_3_4_2";
	this.target_3_4_2.setTransform(1518.25,788.2,1,1,0,0,0,17.5,33.5);

	this.target_3_4_1 = new lib.target_3_4_1();
	this.target_3_4_1.name = "target_3_4_1";
	this.target_3_4_1.setTransform(1481.05,788.2,1,1,0,0,0,17.5,33.5);

	this.target_3_3_3 = new lib.target_3_3_3();
	this.target_3_3_3.name = "target_3_3_3";
	this.target_3_3_3.setTransform(1177.75,788.5,1,1,0,0,0,17.5,33.5);

	this.target_3_3_2 = new lib.target_3_3_2();
	this.target_3_3_2.name = "target_3_3_2";
	this.target_3_3_2.setTransform(1140.55,788.3,1,1,0,0,0,17.5,33.5);

	this.target_3_3_1 = new lib.target_3_3_1();
	this.target_3_3_1.name = "target_3_3_1";
	this.target_3_3_1.setTransform(1103.75,788.3,1,1,0,0,0,17.5,33.5);

	this.target_3_2_5 = new lib.target_3_2_5();
	this.target_3_2_5.name = "target_3_2_5";
	this.target_3_2_5.setTransform(832,788.2,1,1,0,0,0,17.5,33.5);

	this.target_3_2_4 = new lib.target_3_2_4();
	this.target_3_2_4.name = "target_3_2_4";
	this.target_3_2_4.setTransform(795.9,788.5,1,1,0,0,0,17.5,33.5);

	this.target_3_2_3 = new lib.target_3_2_3();
	this.target_3_2_3.name = "target_3_2_3";
	this.target_3_2_3.setTransform(758.7,788.45,1,1,0,0,0,17.5,33.5);

	this.target_3_2_2 = new lib.target_3_2_2();
	this.target_3_2_2.name = "target_3_2_2";
	this.target_3_2_2.setTransform(721.5,788.2,1,1,0,0,0,17.5,33.5);

	this.target_3_2_1 = new lib.target_3_2_1();
	this.target_3_2_1.name = "target_3_2_1";
	this.target_3_2_1.setTransform(684.15,788.2,1,1,0,0,0,17.5,33.5);

	this.target_3_1_2 = new lib.target_3_1_2();
	this.target_3_1_2.name = "target_3_1_2";
	this.target_3_1_2.setTransform(428.3,788.45,1,1,0,0,0,17.5,33.5);

	this.target_3_1_1 = new lib.target_3_1_1();
	this.target_3_1_1.name = "target_3_1_1";
	this.target_3_1_1.setTransform(391.1,788.5,1,1,0,0,0,17.5,33.5);

	this.btn_4_10 = new lib.btn_4_10();
	this.btn_4_10.name = "btn_4_10";
	this.btn_4_10.setTransform(1638.25,869.65,1,1,0,0,0,36.5,61);

	this.btn_4_9 = new lib.btn_4_9();
	this.btn_4_9.name = "btn_4_9";
	this.btn_4_9.setTransform(1528.9,869.35,1,1,0,0,0,36.5,61);

	this.btn_4_8 = new lib.btn_4_8();
	this.btn_4_8.name = "btn_4_8";
	this.btn_4_8.setTransform(1421.35,869.9,1,1,0,0,0,36.5,61);

	this.btn_4_7 = new lib.btn_4_7();
	this.btn_4_7.name = "btn_4_7";
	this.btn_4_7.setTransform(1313.5,870.15,1,1,0,0,0,36.5,61);

	this.btn_4_6 = new lib.btn_4_6();
	this.btn_4_6.name = "btn_4_6";
	this.btn_4_6.setTransform(1115.75,870.25,1,1,0,0,0,36.5,61);

	this.btn_4_5 = new lib.btn_4_5();
	this.btn_4_5.name = "btn_4_5";
	this.btn_4_5.setTransform(1004.5,870.25,1,1,0,0,0,36.5,61);

	this.btn_4_4 = new lib.btn_4_4();
	this.btn_4_4.name = "btn_4_4";
	this.btn_4_4.setTransform(885.15,870.25,1,1,0,0,0,36.5,61);

	this.btn_4_3 = new lib.btn_4_3();
	this.btn_4_3.name = "btn_4_3";
	this.btn_4_3.setTransform(602.95,871,1,1,0,0,0,36.5,61);

	this.btn_4_2 = new lib.btn_4_2();
	this.btn_4_2.name = "btn_4_2";
	this.btn_4_2.setTransform(499.9,872,1,1,0,0,0,36.5,61);

	this.btn_4_1 = new lib.btn_4_1();
	this.btn_4_1.name = "btn_4_1";
	this.btn_4_1.setTransform(394,872,1,1,0,0,0,36.5,61);

	this.instance_1 = new lib.CachedBmp_9();
	this.instance_1.setTransform(575.75,534.05,0.5,0.5);

	this.img_7_4 = new lib.img_7_4();
	this.img_7_4.name = "img_7_4";
	this.img_7_4.setTransform(1400.5,637,1,1,0,0,0,134.5,134);

	this.img_7_3 = new lib.img_7_3();
	this.img_7_3.name = "img_7_3";
	this.img_7_3.setTransform(1114.5,715,1,1,0,0,0,141.5,133);

	this.img_7_2 = new lib.img_7_2();
	this.img_7_2.name = "img_7_2";
	this.img_7_2.setTransform(831.5,635.5,1,1,0,0,0,134.5,133.5);

	this.img_7_1 = new lib.img_7_1();
	this.img_7_1.name = "img_7_1";
	this.img_7_1.setTransform(548.5,716.5,1,1,0,0,0,140.5,133.5);

	this.txt_8_4 = new lib.txt_8_4();
	this.txt_8_4.name = "txt_8_4";
	this.txt_8_4.setTransform(1315.25,809.3,1,1,0,0,0,156.5,29.2);

	this.txt_8_3 = new lib.txt_8_3();
	this.txt_8_3.name = "txt_8_3";
	this.txt_8_3.setTransform(1315.25,754.15,1,1,0,0,0,156.5,28.8);

	this.txt_8_2 = new lib.txt_8_2();
	this.txt_8_2.name = "txt_8_2";
	this.txt_8_2.setTransform(1315.25,697.65,1,1,0,0,0,156.5,29.9);

	this.txt_8_1 = new lib.txt_8_1();
	this.txt_8_1.name = "txt_8_1";
	this.txt_8_1.setTransform(1315.25,643.5,1,1,0,0,0,156.5,28.9);

	this.target_8_4 = new lib.Symbol1();
	this.target_8_4.name = "target_8_4";
	this.target_8_4.setTransform(867.5,875,2.2516,2.239,0,0,0,-0.1,-0.2);
	this.target_8_4.alpha = 0.0117;

	this.target_8_2 = new lib.Symbol1();
	this.target_8_2.name = "target_8_2";
	this.target_8_2.setTransform(874.7,669.1,2.2516,2.239,0,0,0,-0.1,-0.2);
	this.target_8_2.alpha = 0.0117;

	this.target_8_3 = new lib.Symbol1();
	this.target_8_3.name = "target_8_3";
	this.target_8_3.setTransform(869.85,769.95,2.2516,2.239,0,0,0,-0.1,-0.2);
	this.target_8_3.alpha = 0.0117;

	this.target_10_6 = new lib.input_1();
	this.target_10_6.name = "target_10_6";
	this.target_10_6.setTransform(1029.85,739.55,0.8885,2.646,0,0,0,0.1,0.1);
	this.target_10_6.visible = false;

	this.target_10_5 = new lib.input_1();
	this.target_10_5.name = "target_10_5";
	this.target_10_5.setTransform(815.85,739.55,0.8885,2.646,0,0,0,0.1,0.1);
	this.target_10_5.visible = false;

	this.target_10_4 = new lib.input_1();
	this.target_10_4.name = "target_10_4";
	this.target_10_4.setTransform(597.85,739.55,0.8885,2.646,0,0,0,0.1,0.1);
	this.target_10_4.visible = false;

	this.target_10_3 = new lib.input_1();
	this.target_10_3.name = "target_10_3";
	this.target_10_3.setTransform(1013.85,571.55,0.8885,2.646,0,0,0,0.1,0.1);
	this.target_10_3.visible = false;

	this.target_10_2 = new lib.input_1();
	this.target_10_2.name = "target_10_2";
	this.target_10_2.setTransform(805.85,571.55,0.8885,2.646,0,0,0,0.1,0.1);
	this.target_10_2.visible = false;

	this.target_10_1 = new lib.input_1();
	this.target_10_1.name = "target_10_1";
	this.target_10_1.setTransform(595.85,571.55,0.8885,2.646,0,0,0,0.1,0.1);
	this.target_10_1.visible = false;

	this.img_10_6 = new lib.img_10_6();
	this.img_10_6.name = "img_10_6";
	this.img_10_6.setTransform(1486.2,847.5,1,1,0,0,0,81.2,80.5);

	this.img_10_5 = new lib.img_10_5();
	this.img_10_5.name = "img_10_5";
	this.img_10_5.setTransform(1574.8,692.5,1,1,0,0,0,80.8,80.5);

	this.img_10_4 = new lib.img_10_4();
	this.img_10_4.name = "img_10_4";
	this.img_10_4.setTransform(1377.6,701.5,1,1,0,0,0,81.6,80.5);

	this.img_10_3 = new lib.img_10_3();
	this.img_10_3.name = "img_10_3";
	this.img_10_3.setTransform(1638.6,532,1,1,0,0,0,81.6,81);

	this.img_10_2 = new lib.img_10_2();
	this.img_10_2.name = "img_10_2";
	this.img_10_2.setTransform(1464.6,538.8,1,1,0,0,0,81.6,81.8);

	this.img_10_1 = new lib.img_10_1();
	this.img_10_1.name = "img_10_1";
	this.img_10_1.setTransform(1291.2,539.5,1,1,0,0,0,81.2,80.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.btn_prev_1_1},{t:this.btn_prev_1_2},{t:this.btn_prev_1_3},{t:this.btn_prev_1_4},{t:this.btn_prev_1_5},{t:this.btn_prev_1_6},{t:this.btn_prev_1_7},{t:this.btn_prev_1_8},{t:this.equal_slot_1},{t:this.equal_slot_2},{t:this.equal_slot_3},{t:this.equal_slot_4},{t:this.unequal_slot_1},{t:this.unequal_slot_2},{t:this.unequal_slot_3},{t:this.unequal_slot_4},{t:this.unequal_slot_5},{t:this.unequal_slot_6}]},2).to({state:[]},1).to({state:[{t:this.shape_2},{t:this.part_prev_1},{t:this.part_prev_2},{t:this.part_prev_3},{t:this.part_prev_4}]},1).to({state:[]},1).to({state:[{t:this.btn_2_1_1},{t:this.btn_2_1_2},{t:this.btn_2_1_3},{t:this.btn_2_1_4},{t:this.btn_2_2_1},{t:this.btn_2_2_2},{t:this.btn_2_2_3},{t:this.btn_2_2_4}]},5).to({state:[{t:this.target_3_1_1},{t:this.target_3_1_2},{t:this.target_3_2_1},{t:this.target_3_2_2},{t:this.target_3_2_3},{t:this.target_3_2_4},{t:this.target_3_2_5},{t:this.target_3_3_1},{t:this.target_3_3_2},{t:this.target_3_3_3},{t:this.target_3_4_1},{t:this.target_3_4_2}]},2).to({state:[{t:this.btn_4_1},{t:this.btn_4_2},{t:this.btn_4_3},{t:this.btn_4_4},{t:this.btn_4_5},{t:this.btn_4_6},{t:this.btn_4_7},{t:this.btn_4_8},{t:this.btn_4_9},{t:this.btn_4_10}]},2).to({state:[{t:this.instance_1}]},2).to({state:[]},2).to({state:[{t:this.img_7_1},{t:this.img_7_2},{t:this.img_7_3},{t:this.img_7_4}]},2).to({state:[{t:this.target_8_3},{t:this.target_8_2},{t:this.target_8_4},{t:this.txt_8_1},{t:this.txt_8_2},{t:this.txt_8_3},{t:this.txt_8_4}]},2).to({state:[]},2).to({state:[{t:this.img_10_1},{t:this.img_10_2},{t:this.img_10_3},{t:this.img_10_4},{t:this.img_10_5},{t:this.img_10_6},{t:this.target_10_1},{t:this.target_10_2},{t:this.target_10_3},{t:this.target_10_4},{t:this.target_10_5},{t:this.target_10_6}]},2).to({state:[]},2).wait(2));

	// target
	this.drop_unequal = new lib.Symbol1();
	this.drop_unequal.name = "drop_unequal";
	this.drop_unequal.setTransform(1178.1,495.5,3.3861,8.9426);
	this.drop_unequal.alpha = 0.0117;

	this.drop_equal = new lib.Symbol1();
	this.drop_equal.name = "drop_equal";
	this.drop_equal.setTransform(529.05,495.5,3.3861,8.9427);
	this.drop_equal.alpha = 0.0117;

	this.instance_2 = new lib.Layer1();
	this.instance_2.setTransform(297,350);

	this.symb_1_6_4 = new lib.symb_1_6_4();
	this.symb_1_6_4.name = "symb_1_6_4";
	this.symb_1_6_4.setTransform(1170.4,786.1,1,1,0,0,0,63.5,32.5);

	this.symb_1_6_3 = new lib.symb_1_6_3();
	this.symb_1_6_3.name = "symb_1_6_3";
	this.symb_1_6_3.setTransform(1043.35,786.15,1,1,0,0,0,63.5,32.5);

	this.symb_1_6_2 = new lib.symb_1_6_2();
	this.symb_1_6_2.name = "symb_1_6_2";
	this.symb_1_6_2.setTransform(1170.4,721.1,1,1,0,0,0,63.5,32.5);

	this.symb_1_6_1 = new lib.symb_1_6_1();
	this.symb_1_6_1.name = "symb_1_6_1";
	this.symb_1_6_1.setTransform(1043.4,721.1,1,1,0,0,0,63.5,32.5);

	this.symb_1_5_4 = new lib.symb_1_5_4();
	this.symb_1_5_4.name = "symb_1_5_4";
	this.symb_1_5_4.setTransform(819.1,786.1,1,1,0,0,0,63.5,32.5);

	this.symb_1_5_3 = new lib.symb_1_5_3();
	this.symb_1_5_3.name = "symb_1_5_3";
	this.symb_1_5_3.setTransform(692.05,786.15,1,1,0,0,0,63.5,32.5);

	this.symb_1_5_2 = new lib.symb_1_5_2();
	this.symb_1_5_2.name = "symb_1_5_2";
	this.symb_1_5_2.setTransform(819.1,721.1,1,1,0,0,0,63.5,32.5);

	this.symb_1_5_1 = new lib.symb_1_5_1();
	this.symb_1_5_1.name = "symb_1_5_1";
	this.symb_1_5_1.setTransform(692.1,721.1,1,1,0,0,0,63.5,32.5);

	this.symb_1_4_4 = new lib.symb_1_4_4();
	this.symb_1_4_4.name = "symb_1_4_4";
	this.symb_1_4_4.setTransform(1170.35,616.95,1,1,0,0,0,63.5,32.5);

	this.symb_1_4_3 = new lib.symb_1_4_3();
	this.symb_1_4_3.name = "symb_1_4_3";
	this.symb_1_4_3.setTransform(1043.3,617,1,1,0,0,0,63.5,32.5);

	this.symb_1_4_2 = new lib.symb_1_4_2();
	this.symb_1_4_2.name = "symb_1_4_2";
	this.symb_1_4_2.setTransform(1170.35,551.95,1,1,0,0,0,63.5,32.5);

	this.symb_1_4_1 = new lib.symb_1_4_1();
	this.symb_1_4_1.name = "symb_1_4_1";
	this.symb_1_4_1.setTransform(1043.35,551.95,1,1,0,0,0,63.5,32.5);

	this.symb_1_3_4 = new lib.symb_1_3_4();
	this.symb_1_3_4.name = "symb_1_3_4";
	this.symb_1_3_4.setTransform(819.05,616.95,1,1,0,0,0,63.5,32.5);

	this.symb_1_3_3 = new lib.symb_1_3_3();
	this.symb_1_3_3.name = "symb_1_3_3";
	this.symb_1_3_3.setTransform(692,617,1,1,0,0,0,63.5,32.5);

	this.symb_1_3_2 = new lib.symb_1_3_2();
	this.symb_1_3_2.name = "symb_1_3_2";
	this.symb_1_3_2.setTransform(819.05,551.95,1,1,0,0,0,63.5,32.5);

	this.symb_1_3_1 = new lib.symb_1_3_1();
	this.symb_1_3_1.name = "symb_1_3_1";
	this.symb_1_3_1.setTransform(692.05,551.95,1,1,0,0,0,63.5,32.5);

	this.symb_1_2_4 = new lib.symb_1_2_4();
	this.symb_1_2_4.name = "symb_1_2_4";
	this.symb_1_2_4.setTransform(1170.3,449.9,1,1,0,0,0,63.5,32.5);

	this.symb_1_2_3 = new lib.symb_1_2_3();
	this.symb_1_2_3.name = "symb_1_2_3";
	this.symb_1_2_3.setTransform(1043.25,449.95,1,1,0,0,0,63.5,32.5);

	this.symb_1_2_2 = new lib.symb_1_2_2();
	this.symb_1_2_2.name = "symb_1_2_2";
	this.symb_1_2_2.setTransform(1170.3,384.9,1,1,0,0,0,63.5,32.5);

	this.symb_1_2_1 = new lib.symb_1_2_1();
	this.symb_1_2_1.name = "symb_1_2_1";
	this.symb_1_2_1.setTransform(1043.3,384.9,1,1,0,0,0,63.5,32.5);

	this.symb_1_1_4 = new lib.symb_1_1_4();
	this.symb_1_1_4.name = "symb_1_1_4";
	this.symb_1_1_4.setTransform(819.05,449.9,1,1,0,0,0,63.5,32.5);
	this.symb_1_1_4.cache(-3,-3,133,71);

	this.symb_1_1_3 = new lib.symb_1_1_3();
	this.symb_1_1_3.name = "symb_1_1_3";
	this.symb_1_1_3.setTransform(692,449.95,1,1,0,0,0,63.5,32.5);
	this.symb_1_1_3.cache(-3,-3,133,71);

	this.symb_1_1_2 = new lib.symb_1_1_2();
	this.symb_1_1_2.name = "symb_1_1_2";
	this.symb_1_1_2.setTransform(819.05,384.9,1,1,0,0,0,63.5,32.5);
	this.symb_1_1_2.cache(-3,-3,133,71);

	this.symb_1_1_1 = new lib.symb_1_1_1();
	this.symb_1_1_1.name = "symb_1_1_1";
	this.symb_1_1_1.setTransform(692.05,384.9,1,1,0,0,0,63.5,32.5);
	this.symb_1_1_1.cache(-3,-3,133,71);

	this.btn_3_4_5 = new lib.Symbol1();
	this.btn_3_4_5.name = "btn_3_4_5";
	this.btn_3_4_5.setTransform(1630,789.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_4_5.alpha = 0.0117;

	this.btn_3_4_4 = new lib.Symbol1();
	this.btn_3_4_4.name = "btn_3_4_4";
	this.btn_3_4_4.setTransform(1593,789.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_4_4.alpha = 0.0117;

	this.btn_3_4_3 = new lib.Symbol1();
	this.btn_3_4_3.name = "btn_3_4_3";
	this.btn_3_4_3.setTransform(1556,789.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_4_3.alpha = 0.0117;

	this.btn_3_4_2 = new lib.Symbol1();
	this.btn_3_4_2.name = "btn_3_4_2";
	this.btn_3_4_2.setTransform(1519,789.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_4_2.alpha = 0.0117;

	this.btn_3_4_1 = new lib.Symbol1();
	this.btn_3_4_1.name = "btn_3_4_1";
	this.btn_3_4_1.setTransform(1481,789.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_4_1.alpha = 0.0117;

	this.btn_3_3_8 = new lib.Symbol1();
	this.btn_3_3_8.name = "btn_3_3_8";
	this.btn_3_3_8.setTransform(1363,789.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_3_8.alpha = 0.0117;

	this.btn_3_3_7 = new lib.Symbol1();
	this.btn_3_3_7.name = "btn_3_3_7";
	this.btn_3_3_7.setTransform(1326,789.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_3_7.alpha = 0.0117;

	this.btn_3_3_6 = new lib.Symbol1();
	this.btn_3_3_6.name = "btn_3_3_6";
	this.btn_3_3_6.setTransform(1289,789.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_3_6.alpha = 0.0117;

	this.btn_3_3_5 = new lib.Symbol1();
	this.btn_3_3_5.name = "btn_3_3_5";
	this.btn_3_3_5.setTransform(1252,789.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_3_5.alpha = 0.0117;

	this.btn_3_3_4 = new lib.Symbol1();
	this.btn_3_3_4.name = "btn_3_3_4";
	this.btn_3_3_4.setTransform(1214,789.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_3_4.alpha = 0.0117;

	this.btn_3_3_3 = new lib.Symbol1();
	this.btn_3_3_3.name = "btn_3_3_3";
	this.btn_3_3_3.setTransform(1178,789.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_3_3.alpha = 0.0117;

	this.btn_3_3_2 = new lib.Symbol1();
	this.btn_3_3_2.name = "btn_3_3_2";
	this.btn_3_3_2.setTransform(1141,789.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_3_2.alpha = 0.0117;

	this.btn_3_3_1 = new lib.Symbol1();
	this.btn_3_3_1.name = "btn_3_3_1";
	this.btn_3_3_1.setTransform(1103,789.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_3_1.alpha = 0.0117;

	this.btn_3_2_10 = new lib.Symbol1();
	this.btn_3_2_10.name = "btn_3_2_10";
	this.btn_3_2_10.setTransform(1018,789.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_2_10.alpha = 0.0117;

	this.btn_3_2_9 = new lib.Symbol1();
	this.btn_3_2_9.name = "btn_3_2_9";
	this.btn_3_2_9.setTransform(980,789.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_2_9.alpha = 0.0117;

	this.btn_3_2_8 = new lib.Symbol1();
	this.btn_3_2_8.name = "btn_3_2_8";
	this.btn_3_2_8.setTransform(943,789.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_2_8.alpha = 0.0117;

	this.btn_3_2_7 = new lib.Symbol1();
	this.btn_3_2_7.name = "btn_3_2_7";
	this.btn_3_2_7.setTransform(907,789.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_2_7.alpha = 0.0117;

	this.btn_3_2_6 = new lib.Symbol1();
	this.btn_3_2_6.name = "btn_3_2_6";
	this.btn_3_2_6.setTransform(869,789.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_2_6.alpha = 0.0117;

	this.btn_3_2_5 = new lib.Symbol1();
	this.btn_3_2_5.name = "btn_3_2_5";
	this.btn_3_2_5.setTransform(833,789.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_2_5.alpha = 0.0117;

	this.btn_3_2_4 = new lib.Symbol1();
	this.btn_3_2_4.name = "btn_3_2_4";
	this.btn_3_2_4.setTransform(796,789.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_2_4.alpha = 0.0117;

	this.btn_3_2_3 = new lib.Symbol1();
	this.btn_3_2_3.name = "btn_3_2_3";
	this.btn_3_2_3.setTransform(758,789.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_2_3.alpha = 0.0117;

	this.btn_3_2_2 = new lib.Symbol1();
	this.btn_3_2_2.name = "btn_3_2_2";
	this.btn_3_2_2.setTransform(721,789.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_2_2.alpha = 0.0117;

	this.btn_3_2_1 = new lib.Symbol1();
	this.btn_3_2_1.name = "btn_3_2_1";
	this.btn_3_2_1.setTransform(684,789.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_2_1.alpha = 0.0117;

	this.btn_3_1_6 = new lib.Symbol1();
	this.btn_3_1_6.name = "btn_3_1_6";
	this.btn_3_1_6.setTransform(577,789.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_1_6.alpha = 0.0117;

	this.btn_3_1_5 = new lib.Symbol1();
	this.btn_3_1_5.name = "btn_3_1_5";
	this.btn_3_1_5.setTransform(539,789.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_1_5.alpha = 0.0117;

	this.btn_3_1_4 = new lib.Symbol1();
	this.btn_3_1_4.name = "btn_3_1_4";
	this.btn_3_1_4.setTransform(502,789.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_1_4.alpha = 0.0117;

	this.btn_3_1_3 = new lib.Symbol1();
	this.btn_3_1_3.name = "btn_3_1_3";
	this.btn_3_1_3.setTransform(465,789.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_1_3.alpha = 0.0117;

	this.btn_3_1_2 = new lib.Symbol1();
	this.btn_3_1_2.name = "btn_3_1_2";
	this.btn_3_1_2.setTransform(428,789.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_1_2.alpha = 0.0117;

	this.btn_3_1_1 = new lib.Symbol1();
	this.btn_3_1_1.name = "btn_3_1_1";
	this.btn_3_1_1.setTransform(390.7,788.5,0.2392,2.239,0,0,0,0,-0.2);
	this.btn_3_1_1.alpha = 0.0117;

	this.instance_3 = new lib.lesson6_3_1();
	this.instance_3.setTransform(371,753);

	this.target_4_3 = new lib.target_4_3();
	this.target_4_3.name = "target_4_3";
	this.target_4_3.setTransform(1615.25,622,1,1,0,0,0,36.5,61);

	this.target_4_2 = new lib.target_4_2();
	this.target_4_2.name = "target_4_2";
	this.target_4_2.setTransform(1156.25,622,1,1,0,0,0,36.5,61);

	this.target_4_1 = new lib.target_4_1();
	this.target_4_1.name = "target_4_1";
	this.target_4_1.setTransform(698.7,622,1,1,0,0,0,36.5,61);

	this.instance_4 = new lib.target44();
	this.instance_4.setTransform(871.5,875.05,1,1,0,0,0,156.5,27);

	this.instance_5 = new lib.target33();
	this.instance_5.setTransform(871.5,772.55,1,1,0,0,0,156.5,27);

	this.instance_6 = new lib.target22();
	this.instance_6.setTransform(871.5,669,1,1,0,0,0,156.5,27);

	this.target_8_1 = new lib.target11();
	this.target_8_1.name = "target_8_1";
	this.target_8_1.setTransform(871.4,567.6,1,1,0,0,0,156.5,27);

	this.instance_7 = new lib.target6();
	this.instance_7.setTransform(1012.5,754.5,1,1,0,0,0,80.5,79.5);

	this.instance_8 = new lib.target5();
	this.instance_8.setTransform(806.5,759.05,1,1,0,0,0,80.5,79.5);

	this.instance_9 = new lib.target4();
	this.instance_9.setTransform(604.5,759.5,1,1,0,0,0,80.5,79.5);

	this.instance_10 = new lib.target3();
	this.instance_10.setTransform(1013.9,583.5,1,1,0,0,0,80.5,79.5);

	this.instance_11 = new lib.target2();
	this.instance_11.setTransform(806.9,585.5,1,1,0,0,0,80.5,79.5);

	this.instance_12 = new lib.target1();
	this.instance_12.setTransform(604.75,585.4,1,1,0,0,0,80.5,79.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.drop_equal},{t:this.drop_unequal}]},2).to({state:[]},1).to({state:[{t:this.symb_1_1_1},{t:this.symb_1_1_2},{t:this.symb_1_1_3},{t:this.symb_1_1_4},{t:this.symb_1_2_1},{t:this.symb_1_2_2},{t:this.symb_1_2_3},{t:this.symb_1_2_4},{t:this.symb_1_3_1},{t:this.symb_1_3_2},{t:this.symb_1_3_3},{t:this.symb_1_3_4},{t:this.symb_1_4_1},{t:this.symb_1_4_2},{t:this.symb_1_4_3},{t:this.symb_1_4_4},{t:this.symb_1_5_1},{t:this.symb_1_5_2},{t:this.symb_1_5_3},{t:this.symb_1_5_4},{t:this.symb_1_6_1},{t:this.symb_1_6_2},{t:this.symb_1_6_3},{t:this.symb_1_6_4}]},3).to({state:[]},1).to({state:[{t:this.instance_3},{t:this.btn_3_1_1},{t:this.btn_3_1_2},{t:this.btn_3_1_3},{t:this.btn_3_1_4},{t:this.btn_3_1_5},{t:this.btn_3_1_6},{t:this.btn_3_2_1},{t:this.btn_3_2_2},{t:this.btn_3_2_3},{t:this.btn_3_2_4},{t:this.btn_3_2_5},{t:this.btn_3_2_6},{t:this.btn_3_2_7},{t:this.btn_3_2_8},{t:this.btn_3_2_9},{t:this.btn_3_2_10},{t:this.btn_3_3_1},{t:this.btn_3_3_2},{t:this.btn_3_3_3},{t:this.btn_3_3_4},{t:this.btn_3_3_5},{t:this.btn_3_3_6},{t:this.btn_3_3_7},{t:this.btn_3_3_8},{t:this.btn_3_4_1},{t:this.btn_3_4_2},{t:this.btn_3_4_3},{t:this.btn_3_4_4},{t:this.btn_3_4_5}]},5).to({state:[{t:this.target_4_1},{t:this.target_4_2},{t:this.target_4_3}]},2).to({state:[]},2).to({state:[{t:this.target_8_1},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4}]},6).to({state:[]},2).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]},2).to({state:[]},2).wait(2));

	// reshresh4
	this.img_6_4 = new lib.img_6_4();
	this.img_6_4.name = "img_6_4";
	this.img_6_4.setTransform(1016,754.1,1,1,0,0,0,482,123.1);
	this.img_6_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.img_6_4).wait(18).to({_off:false},0).to({_off:true},2).wait(10));

	// reshresh3
	this.img_6_3 = new lib.img_6_3();
	this.img_6_3.name = "img_6_3";
	this.img_6_3.setTransform(1001,743,1,1,0,0,0,294,128);
	this.img_6_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.img_6_3).wait(18).to({_off:false},0).to({_off:true},2).wait(10));

	// reshresh2
	this.img_6_2 = new lib.img_6_2();
	this.img_6_2.name = "img_6_2";
	this.img_6_2.setTransform(1006,742.4,1,1,0,0,0,264,186.4);
	this.img_6_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.img_6_2).wait(18).to({_off:false},0).to({_off:true},2).wait(10));

	// refresh1
	this.input_6_4_5 = new lib.input_1();
	this.input_6_4_5.name = "input_6_4_5";
	this.input_6_4_5.setTransform(1155.9,850.45,0.8885,0.8275);
	this.input_6_4_5.visible = false;

	this.input_6_4_4 = new lib.input_1();
	this.input_6_4_4.name = "input_6_4_4";
	this.input_6_4_4.setTransform(1155.9,782.45,0.8885,0.8275);
	this.input_6_4_4.visible = false;

	this.input_6_4_3 = new lib.input_1();
	this.input_6_4_3.name = "input_6_4_3";
	this.input_6_4_3.setTransform(1007.9,814.45,0.8885,0.8275);
	this.input_6_4_3.visible = false;

	this.input_6_4_2 = new lib.input_1();
	this.input_6_4_2.name = "input_6_4_2";
	this.input_6_4_2.setTransform(861.9,848.45,0.8885,0.8275);
	this.input_6_4_2.visible = false;

	this.input_6_4_1 = new lib.input_1();
	this.input_6_4_1.name = "input_6_4_1";
	this.input_6_4_1.setTransform(861.9,778.45,0.8885,0.8275);
	this.input_6_4_1.visible = false;

	this.input_6_3_5 = new lib.input_1();
	this.input_6_3_5.name = "input_6_3_5";
	this.input_6_3_5.setTransform(1165.9,840.45,0.8885,0.8275);
	this.input_6_3_5.visible = false;

	this.input_6_3_4 = new lib.input_1();
	this.input_6_3_4.name = "input_6_3_4";
	this.input_6_3_4.setTransform(1165.9,760.45,0.8885,0.8275);
	this.input_6_3_4.visible = false;

	this.input_6_3_3 = new lib.input_1();
	this.input_6_3_3.name = "input_6_3_3";
	this.input_6_3_3.setTransform(1001.9,800.45,0.8885,0.8275);
	this.input_6_3_3.visible = false;

	this.input_6_3_2 = new lib.input_1();
	this.input_6_3_2.name = "input_6_3_2";
	this.input_6_3_2.setTransform(829.9,840.45,0.8885,0.8275);
	this.input_6_3_2.visible = false;

	this.input_6_3_1 = new lib.input_1();
	this.input_6_3_1.name = "input_6_3_1";
	this.input_6_3_1.setTransform(829.9,760.45,0.8885,0.8275);
	this.input_6_3_1.visible = false;

	this.input_6_2_5 = new lib.input_1();
	this.input_6_2_5.name = "input_6_2_5";
	this.input_6_2_5.setTransform(1169.9,898.45,0.8885,0.8275);
	this.input_6_2_5.visible = false;

	this.input_6_2_4 = new lib.input_1();
	this.input_6_2_4.name = "input_6_2_4";
	this.input_6_2_4.setTransform(1169.9,820.45,0.8885,0.8275);
	this.input_6_2_4.visible = false;

	this.input_6_2_3 = new lib.input_1();
	this.input_6_2_3.name = "input_6_2_3";
	this.input_6_2_3.setTransform(1005.9,860.45,0.8885,0.8275);
	this.input_6_2_3.visible = false;

	this.input_6_2_2 = new lib.input_1();
	this.input_6_2_2.name = "input_6_2_2";
	this.input_6_2_2.setTransform(841.9,900.45,0.8885,0.8275);
	this.input_6_2_2.visible = false;

	this.input_6_2_1 = new lib.input_1();
	this.input_6_2_1.name = "input_6_2_1";
	this.input_6_2_1.setTransform(841.9,818.45,0.8885,0.8275);
	this.input_6_2_1.visible = false;

	this.input_6_1_1 = new lib.input_1();
	this.input_6_1_1.name = "input_6_1_1";
	this.input_6_1_1.setTransform(855.9,812.45,0.8885,0.8275);
	this.input_6_1_1.visible = false;

	this.input_6_1_4 = new lib.input_1();
	this.input_6_1_4.name = "input_6_1_4";
	this.input_6_1_4.setTransform(1143.9,813.75,0.8885,0.8275);
	this.input_6_1_4.visible = false;

	this.input_6_1_3 = new lib.input_1();
	this.input_6_1_3.name = "input_6_1_3";
	this.input_6_1_3.setTransform(1003.9,853.75,0.8885,0.8275);
	this.input_6_1_3.visible = false;

	this.input_6_1_2 = new lib.input_1();
	this.input_6_1_2.name = "input_6_1_2";
	this.input_6_1_2.setTransform(855.9,891.75,0.8885,0.8275);
	this.input_6_1_2.visible = false;

	this.input_6_1_5 = new lib.input_1();
	this.input_6_1_5.name = "input_6_1_5";
	this.input_6_1_5.setTransform(1141.9,895.75,0.8885,0.8275);
	this.input_6_1_5.visible = false;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.input_6_1_5},{t:this.input_6_1_2},{t:this.input_6_1_3},{t:this.input_6_1_4},{t:this.input_6_1_1},{t:this.input_6_2_1},{t:this.input_6_2_2},{t:this.input_6_2_3},{t:this.input_6_2_4},{t:this.input_6_2_5},{t:this.input_6_3_1},{t:this.input_6_3_2},{t:this.input_6_3_3},{t:this.input_6_3_4},{t:this.input_6_3_5},{t:this.input_6_4_1},{t:this.input_6_4_2},{t:this.input_6_4_3},{t:this.input_6_4_4},{t:this.input_6_4_5}]},18).to({state:[]},2).wait(10));

	// dasgal_img
	this.hitarea_sign = new lib.Symbol1();
	this.hitarea_sign.name = "hitarea_sign";
	this.hitarea_sign.setTransform(1441.75,962.4,2.0331,2.239,0,0,0,-0.1,-0.2);
	this.hitarea_sign.alpha = 0;

	this.hitarea_tuva = new lib.Symbol1();
	this.hitarea_tuva.name = "hitarea_tuva";
	this.hitarea_tuva.setTransform(1145,962.4,2.0331,2.239,0,0,0,-0.1,-0.2);
	this.hitarea_tuva.alpha = 0;

	this.hitarea_kz = new lib.Symbol1();
	this.hitarea_kz.name = "hitarea_kz";
	this.hitarea_kz.setTransform(819.5,962.4,2.0331,2.239,0,0,0,-0.1,-0.2);
	this.hitarea_kz.alpha = 0;

	this.hitarea_mn = new lib.Symbol1();
	this.hitarea_mn.name = "hitarea_mn";
	this.hitarea_mn.setTransform(502.85,962.4,2.0331,2.239,0,0,0,-0.1,-0.2);
	this.hitarea_mn.alpha = 0;

	this.hitarea_sign_1 = new lib.Symbol1_1();
	this.hitarea_sign_1.name = "hitarea_sign_1";
	this.hitarea_sign_1.setTransform(1453.75,962.4,2.0331,2.239,0,0,0,-0.1,-0.2);
	this.hitarea_sign_1.alpha = 0;

	this.hitarea_tuva_1 = new lib.Symbol1_1();
	this.hitarea_tuva_1.name = "hitarea_tuva_1";
	this.hitarea_tuva_1.setTransform(1162.75,962.4,2.0331,2.239,0,0,0,-0.1,-0.2);
	this.hitarea_tuva_1.alpha = 0;

	this.hitarea_kz_1 = new lib.Symbol1_1();
	this.hitarea_kz_1.name = "hitarea_kz_1";
	this.hitarea_kz_1.setTransform(841.75,962.4,2.0331,2.239,0,0,0,-0.1,-0.2);
	this.hitarea_kz_1.alpha = 0;

	this.hitarea_mn_1 = new lib.Symbol1_1();
	this.hitarea_mn_1.name = "hitarea_mn_1";
	this.hitarea_mn_1.setTransform(502.85,962.4,2.0331,2.239,0,0,0,-0.1,-0.2);
	this.hitarea_mn_1.alpha = 0;

	this.checkmark = new lib.checkmark();
	this.checkmark.name = "checkmark";
	this.checkmark.setTransform(415.35,951.3);

	this.btn_sign = new lib.btn_sign();
	this.btn_sign.name = "btn_sign";
	this.btn_sign.setTransform(1343,964.5);

	this.btn_tuva = new lib.btn_tuva();
	this.btn_tuva.name = "btn_tuva";
	this.btn_tuva.setTransform(1052,964.5);

	this.btn_kz = new lib.btn_kz();
	this.btn_kz.name = "btn_kz";
	this.btn_kz.setTransform(731,964.5);

	this.btn_mn = new lib.btn_mn();
	this.btn_mn.name = "btn_mn";
	this.btn_mn.setTransform(404,964.5);

	this.btn_voice = new lib.btn_voice();
	this.btn_voice.name = "btn_voice";
	this.btn_voice.setTransform(402.55,420.9,0.7243,0.7243,0,0,0,0.5,0.3);
	new cjs.ButtonHelper(this.btn_voice, 0, 1, 2);

	this.txt_grade = new cjs.Text("3 ДУГААР АНГИ", "40px 'Rubik'", "#38019A");
	this.txt_grade.name = "txt_grade";
	this.txt_grade.textAlign = "center";
	this.txt_grade.lineHeight = 49;
	this.txt_grade.lineWidth = 326;
	this.txt_grade.parent = this;
	this.txt_grade.setTransform(962.3,657.55);

	this.txt_subject = new cjs.Text("МАТЕМАТИК", "40px 'Rubik Medium'", "#38019A");
	this.txt_subject.name = "txt_subject";
	this.txt_subject.textAlign = "center";
	this.txt_subject.lineHeight = 49;
	this.txt_subject.lineWidth = 326;
	this.txt_subject.parent = this;
	this.txt_subject.setTransform(962.3,604.55);

	this.txt_sign = new cjs.Text("ДОХИО", "40px 'Rubik'", "#998DBF");
	this.txt_sign.name = "txt_sign";
	this.txt_sign.lineHeight = 49;
	this.txt_sign.lineWidth = 246;
	this.txt_sign.parent = this;
	this.txt_sign.setTransform(1379.1,947.3);

	this.txt_tuva = new cjs.Text("ТУВА", "40px 'Rubik'", "#998DBF");
	this.txt_tuva.name = "txt_tuva";
	this.txt_tuva.lineHeight = 49;
	this.txt_tuva.lineWidth = 226;
	this.txt_tuva.parent = this;
	this.txt_tuva.setTransform(1088.5,947.3);

	this.txt_kz = new cjs.Text("КАЗАК", "40px 'Rubik'", "#998DBF");
	this.txt_kz.name = "txt_kz";
	this.txt_kz.lineHeight = 49;
	this.txt_kz.lineWidth = 246;
	this.txt_kz.parent = this;
	this.txt_kz.setTransform(765,947.3);

	this.txt_mn = new cjs.Text("МОНГОЛ", "40px 'Rubik'", "#998DBF");
	this.txt_mn.name = "txt_mn";
	this.txt_mn.lineHeight = 49;
	this.txt_mn.lineWidth = 201;
	this.txt_mn.parent = this;
	this.txt_mn.setTransform(438.1,947.3);

	this.txt_start = new cjs.Text("ЭХЛЭХ", "bold 57px 'Rubik'", "#FFFFFF");
	this.txt_start.name = "txt_start";
	this.txt_start.textAlign = "center";
	this.txt_start.lineHeight = 69;
	this.txt_start.lineWidth = 226;
	this.txt_start.parent = this;
	this.txt_start.setTransform(960.5,759.7);

	this.btn_start = new lib.btn_start();
	this.btn_start.name = "btn_start";
	this.btn_start.setTransform(968.5,795.5);

	this.txt_subtitle = new cjs.Text("Энгийн бутархай ", "48px 'Rubik Light'", "#38019A");
	this.txt_subtitle.name = "txt_subtitle";
	this.txt_subtitle.textAlign = "center";
	this.txt_subtitle.lineHeight = 59;
	this.txt_subtitle.lineWidth = 1706;
	this.txt_subtitle.parent = this;
	this.txt_subtitle.setTransform(974.45,485.9);

	this.main_txt_title = new cjs.Text("ТОГЛООМЫН ХОТ", "bold 72px 'Rubik'", "#38019A");
	this.main_txt_title.name = "main_txt_title";
	this.main_txt_title.textAlign = "center";
	this.main_txt_title.lineHeight = 87;
	this.main_txt_title.lineWidth = 941;
	this.main_txt_title.parent = this;
	this.main_txt_title.setTransform(971.25,389.05);

	this.instance_13 = new lib.MC_Od_1();
	this.instance_13.setTransform(1611.2,899.35,0.4077,0.4078,0,0,0,1.9,0.2);

	this.instance_14 = new lib.MC_Od_2();
	this.instance_14.setTransform(169.05,517.8,0.7798,0.7791,0,0,180,0.2,0.5);

	this.instance_15 = new lib.lesson_bg();

	this.instance_16 = new lib.lesson_bg();

	this.instance_17 = new lib.lesson6_inter_bg3_02618();

	this.instance_18 = new lib.lesson6_inter_bg4_03532();

	this.instance_19 = new lib.lesson6_1();
	this.instance_19.setTransform(326,479,0.9257,0.9257);

	this.instance_20 = new lib.lesson6_2();
	this.instance_20.setTransform(294,491);

	this.instance_21 = new lib.lesson6_3();
	this.instance_21.setTransform(333,555);

	this.instance_22 = new lib.lesson6_4();
	this.instance_22.setTransform(351,429,0.9812,0.9812);

	this.instance_23 = new lib.lesson6_5();
	this.instance_23.setTransform(335,459);

	this.img_6_1 = new lib.img_6_1();
	this.img_6_1.name = "img_6_1";
	this.img_6_1.setTransform(1013,691.7,1,1,0,0,0,517,249.7);

	this.instance_24 = new lib.lesson6_7();
	this.instance_24.setTransform(277,424,0.9697,0.9697);

	this.target_8_1_1 = new lib.Symbol1();
	this.target_8_1_1.name = "target_8_1_1";
	this.target_8_1_1.setTransform(875.4,561.35,2.2516,2.239,0,0,0,-0.1,-0.2);
	this.target_8_1_1.alpha = 0.0117;

	this.instance_25 = new lib.lesson6_8();
	this.instance_25.setTransform(385,379,0.9669,0.9668);

	this.instance_26 = new lib.lesson6_9Group2copy9();
	this.instance_26.setTransform(631,724,1.0998,1.0998);

	this.instance_27 = new lib.lesson6_9pngcopy();
	this.instance_27.setTransform(288,453,1.1122,1.112);

	this.instance_28 = new lib.lesson6_10();
	this.instance_28.setTransform(291,445,0.9142,0.9143);

	this.instance_29 = new lib._0611zuraas();
	this.instance_29.setTransform(343,398,1.1292,1.1307);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.main_txt_title},{t:this.txt_subtitle},{t:this.btn_start},{t:this.txt_start},{t:this.txt_mn},{t:this.txt_kz},{t:this.txt_tuva},{t:this.txt_sign},{t:this.txt_subject},{t:this.txt_grade},{t:this.btn_voice},{t:this.btn_mn},{t:this.btn_kz},{t:this.btn_tuva},{t:this.btn_sign},{t:this.checkmark},{t:this.hitarea_mn_1},{t:this.hitarea_kz_1},{t:this.hitarea_tuva_1},{t:this.hitarea_sign_1},{t:this.hitarea_mn},{t:this.hitarea_kz},{t:this.hitarea_tuva},{t:this.hitarea_sign}]}).to({state:[]},1).to({state:[{t:this.instance_17}]},3).to({state:[]},1).to({state:[{t:this.instance_18}]},1).to({state:[]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},2).to({state:[{t:this.instance_21}]},2).to({state:[{t:this.instance_22}]},2).to({state:[{t:this.instance_23}]},2).to({state:[{t:this.img_6_1}]},2).to({state:[{t:this.instance_24}]},2).to({state:[{t:this.instance_25},{t:this.target_8_1_1}]},2).to({state:[{t:this.instance_27},{t:this.instance_26}]},2).to({state:[{t:this.instance_28}]},2).to({state:[{t:this.instance_29}]},2).wait(2));

	// bg
	this.instance_30 = new lib._06storyinteractive();

	this.instance_31 = new lib.bg_lessonnhiih();
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_30}]},2).to({state:[]},1).to({state:[{t:this.instance_31}]},5).to({state:[{t:this.instance_31}]},2).to({state:[{t:this.instance_31}]},2).to({state:[{t:this.instance_31}]},2).to({state:[{t:this.instance_31}]},2).to({state:[{t:this.instance_31}]},2).to({state:[{t:this.instance_31}]},2).to({state:[{t:this.instance_31}]},2).to({state:[{t:this.instance_31}]},2).to({state:[{t:this.instance_31}]},2).to({state:[{t:this.instance_31}]},2).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(8).to({_off:false},0).wait(22));

	// shar
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1).p("AkckrII5AAIAAJXIo5AAg");
	this.shape_3.setTransform(748.55,263);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCF29").s().p("AkcEsIAApXII5AAIAAJXg");
	this.shape_4.setTransform(748.55,263);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4,p:{x:748.55}},{t:this.shape_3,p:{x:748.55}}]},8).to({state:[{t:this.shape_4,p:{x:806.2}},{t:this.shape_3,p:{x:806.2}}]},2).to({state:[{t:this.shape_4,p:{x:864.5}},{t:this.shape_3,p:{x:864.5}}]},2).to({state:[{t:this.shape_4,p:{x:921.8}},{t:this.shape_3,p:{x:921.8}}]},2).to({state:[{t:this.shape_4,p:{x:979.8}},{t:this.shape_3,p:{x:979.8}}]},2).to({state:[{t:this.shape_4,p:{x:1038.15}},{t:this.shape_3,p:{x:1038.15}}]},2).to({state:[{t:this.shape_4,p:{x:1096.15}},{t:this.shape_3,p:{x:1096.15}}]},2).to({state:[{t:this.shape_4,p:{x:1154.5}},{t:this.shape_3,p:{x:1154.5}}]},2).to({state:[{t:this.shape_4,p:{x:1212.5}},{t:this.shape_3,p:{x:1212.5}}]},2).to({state:[{t:this.shape_4,p:{x:1269.15}},{t:this.shape_3,p:{x:1269.15}}]},2).to({state:[{t:this.shape_4,p:{x:1327.2}},{t:this.shape_3,p:{x:1327.2}}]},2).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1958.3,1195.8);
// library properties:
lib.properties = {
	id: 'FA9F9DF05B6EFB48B6CD75CC34870B12',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/lesson_06_atlas_1.png", id:"lesson_06_atlas_1"},
		{src:"images/lesson_06_atlas_2.png", id:"lesson_06_atlas_2"},
		{src:"images/lesson_06_atlas_3.png", id:"lesson_06_atlas_3"},
		{src:"images/lesson_06_atlas_4.png", id:"lesson_06_atlas_4"},
		{src:"images/lesson_06_atlas_5.png", id:"lesson_06_atlas_5"},
		{src:"images/lesson_06_atlas_6.png", id:"lesson_06_atlas_6"},
		{src:"images/lesson_06_atlas_7.png", id:"lesson_06_atlas_7"},
		{src:"images/lesson_06_atlas_8.png", id:"lesson_06_atlas_8"},
		{src:"images/lesson_06_atlas_9.png", id:"lesson_06_atlas_9"},
		{src:"images/lesson_06_atlas_10.png", id:"lesson_06_atlas_10"},
		{src:"images/lesson_06_atlas_11.png", id:"lesson_06_atlas_11"},
		{src:"images/lesson_06_atlas_12.png", id:"lesson_06_atlas_12"},
		{src:"images/lesson_06_atlas_13.png", id:"lesson_06_atlas_13"},
		{src:"images/lesson_06_atlas_14.png", id:"lesson_06_atlas_14"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['FA9F9DF05B6EFB48B6CD75CC34870B12'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;