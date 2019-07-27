
// -- user code here --
var audioJSON = {
		  "spritemap": {"coin": {
			    "start": 0,
			    "end": 0.339592
			  }},
			  "resources": [
			    "soundFx.wav",
			    "soundFx.ogg",
			    "soundFx.mp3"
			  ]
			};
/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * IntroScene.
 */
function IntroScene() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var IntroScene_proto = Object.create(Phaser.State.prototype);
IntroScene.prototype = IntroScene_proto;
IntroScene.prototype.constructor = IntroScene;

IntroScene.prototype.init = function () {
	
	this.scale.scaleMode = Phaser.ScaleManager.USER_SCALE;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	
	this.myInit();
	
};

IntroScene.prototype.preload = function () {
	
	this.load.pack('Ground', 'assets/eviroment.json');
	this.myPreload();
	
};

IntroScene.prototype.create = function () {
	var _introScene1 = this.add.sprite(0.0, 0.0, 'introScene1');
	
	
	
	// fields
	
	this.fIntroScene1 = _introScene1;
		this.myCreate();
	
};

/* --- end generated code --- */
// -- user code here --

IntroScene.prototype.myPreload = function () {
	console.log('cargando audio');

	this.load.onLoadComplete.add(this.myInit, this);
	this.load.audiosprite('soundFXSprite', 'assets/audio/soundFx.ogg', null, audioJSON);
	this.load.start();
	
};

IntroScene.prototype.myInit = function () {
	console.log("IntroScene");

	
	
};
IntroScene.prototype.myCreate = function () {
	 

	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	fx = this.add.audioSprite('soundFXSprite');
    fx.allowMultiple = true;
    if (this.sound.context.state === 'suspended') {
		this.sound.context.resume();
	}
	this.fIntroScene1.inputEnabled = true;
	this.fIntroScene1.events.onInputDown.add﻿(this.iniciarJuego, this);
	
	
};
IntroScene.prototype.iniciarJuego = function () {
	
	
	
	console.log("wanna iniciar");
	this.state.game.state.start("Level9", true, true, 3);
};


