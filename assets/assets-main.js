(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/assets_main_atlas_.png", id:"assets_main_atlas_"}
	]
};



lib.ssMetadata = [
		{name:"assets_main_atlas_", frames: [[0,0,320,320],[0,322,320,320],[0,644,320,320],[322,0,320,320],[644,0,320,320],[322,322,320,320],[322,644,320,320],[644,322,320,320]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
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
// symbols:



(lib.frame0001 = function() {
	this.spriteSheet = ss["assets_main_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.frame0002 = function() {
	this.spriteSheet = ss["assets_main_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.frame0003 = function() {
	this.spriteSheet = ss["assets_main_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.frame0004 = function() {
	this.spriteSheet = ss["assets_main_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.frame0005 = function() {
	this.spriteSheet = ss["assets_main_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.frame0006 = function() {
	this.spriteSheet = ss["assets_main_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.frame0007 = function() {
	this.spriteSheet = ss["assets_main_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.frame0008 = function() {
	this.spriteSheet = ss["assets_main_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.MyHamster = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.frame0001();
	this.instance.parent = this;
	this.instance.setTransform(-33,-42);

	this.instance_1 = new lib.frame0002();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-33,-42);

	this.instance_2 = new lib.frame0003();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-33,-42);

	this.instance_3 = new lib.frame0004();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-33,-42);

	this.instance_4 = new lib.frame0005();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-33,-42);

	this.instance_5 = new lib.frame0006();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-33,-42);

	this.instance_6 = new lib.frame0007();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-33,-42);

	this.instance_7 = new lib.frame0008();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-33,-42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-33,-42,320,320);


(lib.MyAsset = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.hamham = new lib.MyHamster();
	this.hamham.parent = this;
	this.hamham.setTransform(121.6,161.3,1,1,0,0,0,127.2,163.8);

	this.timeline.addTween(cjs.Tween.get(this.hamham).to({regX:0,regY:0,x:537.7,y:-16.7},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.6,-44.5,320,320);


// stage content:



(lib.assetsmain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// レイヤー 1
	this.instance = new lib.MyAsset();
	this.instance.parent = this;
	this.instance.setTransform(166,169.1,1,1,0,0,0,160,160);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(26));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(242.4,164.6,320,320);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;