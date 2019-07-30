
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * Boot.
 */
function Boot() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Boot_proto = Object.create(Phaser.State.prototype);
Boot.prototype = Boot_proto;
Boot.prototype.constructor = Boot;

Boot.prototype.init = function () {
	
	this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
	
	this.myInit();
	
};

Boot.prototype.preload = function () {
	this.load.image('background', 'assets/sprites/background.png');
	this.load.image('backLoad', 'assets/sprites/backLoad.png');
	this.load.image('progressBar', 'assets/sprites/progressBar.png');
	this.load.image('loadingTitle', 'assets/sprites/loadingTitle.png');
	this.myPreload();
	
};

Boot.prototype.create = function () {
	this.myCreate();
	
};

/* --- end generated code --- */
// -- user code here --
Boot.prototype.myPreload = function () {

	
	
	this.add.sprite(0.0, 0.0, 'background');
	this.add.sprite(160.0, 416.0, 'loadingTitle');
	this.add.sprite(128.0, 544.0, 'backLoad');

	var progressBar = this.add.sprite(128.0, 544.0, 'progressBar');
	this.load.setPreloadSprite(progressBar); 
	
	this.load.onLoadStart.add(this.loadStart, this);
	this.load.onFileComplete.add(this.fileComplete, this);
	this.load.onLoadComplete.add(this.myInit, this);
	this.load.start();
	
};

Boot.prototype.loadStart = function () {
	console.log("loadStart");
//	 this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;	
	
	
};

Boot.prototype.fileComplete = function (progress, cacheKey, success, totalLoaded, totalFiles) {
	console.log("FileCompleted");
	
	this.add.sprite(0.0, 0.0, 'background');
	this.add.sprite(148.0, 446.0, 'loadingTitle');
	this.add.sprite(118.0, 570.0, 'backLoad');
	var progressBar = this.add.sprite(118.0, 570.0, 'progressBar');
	this.load.setPreloadSprite(progressBar); 
	console.log(cacheKey + " File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);
	
	
};

Boot.prototype.myInit = function () {
	console.log("Boot");
	this.game.sound.boot();
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;	
	//this.scale.setUserScale(0.5, 0.5, 0, 0);
};

Boot.prototype.myCreate = function () {
	this.game.state.start("IntroScene", true, true);
};


