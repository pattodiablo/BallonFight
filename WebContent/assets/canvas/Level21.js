
// -- user code here --
var vidasTotales;
var AllSounds_proto = Object.create(GameSounds.prototype);
/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * Level21.
 */
function Level21() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Level21_proto = Object.create(Phaser.State.prototype);
Level21.prototype = Level21_proto;
Level21.prototype.constructor = Level21;

Level21.prototype.init = function (vidas) {
	
	

	vidasTotales = vidas;
		this.LevelNumber = 21;
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.stage.backgroundColor = '#eff0ed';
	
};

Level21.prototype.preload = function () {
	
	this.load.pack('Ground', 'assets/eviroment.json');
	this.load.pack('player', 'assets/pack.json');
	this.load.pack('BitmapFont', 'assets/eviroment.json');
	
	this.myPreload();
	
};

Level21.prototype.create = function () {
	this.add.sprite(0.0, 0.0, 'finalBg');
	
	this.add.sprite(-160.0, 807.0, 'grass');
	
	var _Plataformas = this.add.group();
	
	var _floor1 = new Piso(this.game, 320.0, 960.0);
	_Plataformas.add(_floor1);
	
	var _Coins = this.add.group();
	
	var _coinStar = new CoinStar(this.game, 50.0, 107.0);
	_Coins.add(_coinStar);
	
	var _coinStar1 = new CoinStar(this.game, 58.0, 381.0);
	_Coins.add(_coinStar1);
	
	var _coinStar2 = new CoinStar(this.game, 54.0, 199.0);
	_Coins.add(_coinStar2);
	
	var _coinStar3 = new CoinStar(this.game, 58.0, 292.0);
	_Coins.add(_coinStar3);
	
	this.add.sprite(30.0, 480.0, 'coinStar', null, _Coins);
	
	this.add.sprite(90.0, 455.0, 'coinStar', null, _Coins);
	
	this.add.sprite(92.0, 285.0, 'coinStar', null, _Coins);
	
	this.add.sprite(125.0, 83.0, 'coinStar', null, _Coins);
	
	this.add.sprite(78.0, 562.0, 'coinStar', null, _Coins);
	
	this.add.sprite(69.0, 724.0, 'coinStar', null, _Coins);
	
	this.add.sprite(114.0, 142.0, 'coinStar', null, _Coins);
	
	this.add.sprite(82.0, 657.0, 'coinStar', null, _Coins);
	
	this.add.sprite(116.0, 277.0, 'coinStar', null, _Coins);
	
	this.add.sprite(83.0, 356.0, 'coinStar', null, _Coins);
	
	this.add.sprite(57.0, 683.0, 'coinStar', null, _Coins);
	
	this.add.sprite(56.0, 335.0, 'coinStar', null, _Coins);
	
	this.add.sprite(564.0, 855.0, 'coinStar', null, _Coins);
	
	var _Enemies = this.add.group();
	
	var _EnemyL2 = this.add.group();
	
	var _lives = this.add.group();
	
	var _vida = new Vida(this.game, 15.0, 20.0);
	_lives.add(_vida);
	
	var _vida1 = new Vida(this.game, 86.0, 20.0);
	_lives.add(_vida1);
	
	var _vida2 = new Vida(this.game, 158.0, 20.0);
	_lives.add(_vida2);
	
	var _EnemyL3 = this.add.group();
	
	var _plataformasMove = this.add.group();
	_plataformasMove.position.set(471.0, 267.0);
	
	var _player = new Player(this.game, 81.0, 882.0);
	this.add.existing(_player);
	
	var _greatJobScreen = this.add.sprite(0.0, -960.0, 'greatJobScreen');
	
	var _pauseBtn = this.add.sprite(555.0, 9.0, 'pauseBtn');
	
	var _ScreenLevel = this.add.group();
	
	var _LevelScreen = this.add.sprite(0.0, -960.0, 'LevelScreen', null, _ScreenLevel);
	
	var _PixelFont = this.add.bitmapText(408.0, -438.0, 'PixelFont', '1', 80, _ScreenLevel);
	
	
	
	// fields
	
	this.fPlataformas = _Plataformas;
	this.fFloor1 = _floor1;
	this.fCoins = _Coins;
	this.fCoinStar = _coinStar;
	this.fCoinStar1 = _coinStar1;
	this.fCoinStar2 = _coinStar2;
	this.fCoinStar3 = _coinStar3;
	this.fEnemies = _Enemies;
	this.fEnemyL2 = _EnemyL2;
	this.fLives = _lives;
	this.fEnemyL3 = _EnemyL3;
	this.fPlataformasMove = _plataformasMove;
	this.fPlayer = _player;
	this.fGreatJobScreen = _greatJobScreen;
	this.fPauseBtn = _pauseBtn;
	this.fScreenLevel = _ScreenLevel;
	this.fLevelScreen = _LevelScreen;
	this.fPixelFont = _PixelFont;
		this.myCreate();
	
	
};

/* --- end generated code --- */

Level21.prototype.myPreload = function () {
	AllSounds_proto.preload(this);
};


Level21.prototype.myCreate = function () {
	//this.sound.setDecodedCallback('coin', start, this);
	var allSounds = AllSounds_proto.create(this);
	this.fPixelFont.text = this.LevelNumber;
	this.behavior = new PlatformerBehavior(this, "Level",this.fScreenLevel, this.fPlayer, this.fPlataformas,this.fPlataformasMove, this.fEnemies, this.fEnemyL2,this.fEnemyL3, this.fCoins, vidasTotales,this.fLives, this.fGreatJobScreen,this.fPauseBtn , allSounds);
};


Level21.prototype.update = function () {
	this.behavior.update();
};

