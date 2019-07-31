
// -- user code here --
var AllSounds_proto = Object.create(GameSounds.prototype);
/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * goverScene.
 */
function goverScene() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var goverScene_proto = Object.create(Phaser.State.prototype);
goverScene.prototype = goverScene_proto;
goverScene.prototype.constructor = goverScene;

goverScene.prototype.init = function (levelReached) {
	
	this._levelReached = levelReached;
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	
};

goverScene.prototype.preload = function () {
	AllSounds_proto.preload(this);
	this.load.pack('Ground', 'assets/eviroment.json');
	this.load.pack('BitmapFont', 'assets/eviroment.json');
	
};

goverScene.prototype.create = function () {
	var _goverScene1 = this.add.sprite(0.0, -4.0, 'goverScene');
	
	var _LevelReached = this.add.bitmapText(416.0, 448.0, 'VT323-Regular.fnt', 'level', 32);
	

	
	// fields
	
	this.fGoverScene1 = _goverScene1;
	this.fLevelReached = _LevelReached;
		this.myCreate();
	
};

/* --- end generated code --- */
// -- user code here --
goverScene.prototype.myCreate = function () {
	var allSounds = AllSounds_proto.create(this);

	allSounds.ending.play("ending",0, 0.5, false, true);
	this.fLevelReached.text = this._levelReached;
	this.fGoverScene1.inputEnabled = true;
	this.fGoverScene1.events.onInputDown.add﻿(this.iniciarJuego, this);
	
};

goverScene.prototype.iniciarJuego = function () {
	
	console.log("wanna iniciar");
	this.state.game.state.start("Level", true, true, 3);
	
};
