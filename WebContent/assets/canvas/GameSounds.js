/**
 * GameSounds
 */

function GameSounds() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */

var GameSounds_proto = Object.create(Phaser.State.prototype);
GameSounds.prototype = GameSounds_proto;
GameSounds.prototype.constructor = GameSounds;



GameSounds.prototype.preload = function (game) {
	
	game.load.audio('coin', ['assets/audio/coin.mp3','assets/audio/coin.ogg']);
	game.load.audio('bgSound', ['assets/audio/bgSound.mp3','assets/audio/bgSound.ogg']);
	game.load.audio('playerBlow', ['assets/audio/playerBlow.mp3','assets/audio/playerBlow.ogg']);
	game.load.audio('bgSound2', ['assets/audio/bgSound2.mp3','assets/audio/bgSound2.ogg']);
	game.load.audio('finLevel', ['assets/audio/finLevel.mp3','assets/audio/finLevel.ogg']);
	game.load.audio('dead', ['assets/audio/dead.mp3','assets/audio/dead.ogg']);
	game.load.audio('pause', ['assets/audio/pause.mp3','assets/audio/pause.ogg']);
	game.load.audio('ending', ['assets/audio/ending.mp3','assets/audio/ending.ogg']);
	
};

GameSounds.prototype.create = function (game) {
	
	var allSounds = {};
	
	fxCoin = game.add.audio('coin');
	fxCoin.allowMultiple = true;
	fxCoin.addMarker('coin', 0, 1);
	
	//fxCoin.play('coin');
	
	fxBGSound = game.add.audio('bgSound');
	fxBGSound.allowMultiple = false;
	fxBGSound.addMarker('bgSound', 0, 6.69);
	
	fxBGSound2 = game.add.audio('bgSound2');
	fxBGSound2.allowMultiple = false;
	fxBGSound2.addMarker('bgSound2', 0, 2.32);
	// fxBGSound2.play('bgSound2',8, 0.5, false, true);
	
	fxPblow = game.add.audio('playerBlow');
	fxPblow.allowMultiple = false;
	fxPblow.addMarker('playerBlow', 0, 0.63);
	//fxBGSound2.play('playerBlow',0, 0.5, false, true);
	
	finLevel = game.add.audio('finLevel');
	finLevel.allowMultiple = false;
	finLevel.addMarker('finLevel', 0, 3.3);
	
	dead = game.add.audio('dead');
	dead.allowMultiple = false;
	dead.addMarker('dead', 0, 2.7);
	
	pause = game.add.audio('pause');
	pause.allowMultiple = false;
	pause.addMarker('pause', 0, 0.7);
	
	ending = game.add.audio('ending');
	ending.allowMultiple = false;
	ending.addMarker('ending', 0, 8.5);
	
	allSounds.fxCoin = fxCoin;
	allSounds.fxBGSound = fxBGSound;
	allSounds.fxBGSound2 = fxBGSound2;
	allSounds.fxPblow = fxPblow;
	allSounds.finLevel = finLevel;
	allSounds.dead = dead;
	allSounds.pause = pause;
	allSounds.ending = ending;
	
	return allSounds;
	
};


