
// -- user code here --
var vidasTotales;
var AllSounds_proto = Object.create(GameSounds.prototype);
/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * Level20.
 */
function Level20() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Level20_proto = Object.create(Phaser.State.prototype);
Level20.prototype = Level20_proto;
Level20.prototype.constructor = Level20;

Level20.prototype.init = function (vidas) {
	
	
	console.log(vidas);
	vidasTotales = vidas;
		this.LevelNumber = 20;
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.stage.backgroundColor = '#eff0ed';
	
};

Level20.prototype.preload = function () {
	
	this.load.pack('Ground', 'assets/eviroment.json');
	this.load.pack('Enemy', 'assets/enemy.json');
	this.load.pack('player', 'assets/pack.json');
	this.load.pack('BitmapFont', 'assets/eviroment.json');
	
	this.myPreload();
	
};

Level20.prototype.create = function () {
	this.add.sprite(0.0, 0.0, 'background');
	
	this.add.sprite(-160.0, 807.0, 'grass');
	
	var _Plataformas = this.add.group();
	
	var _floor1 = new Piso(this.game, 320.0, 960.0);
	_Plataformas.add(_floor1);
	
	var _platformTipo = new Platform1(this.game, 195.0, 869.0);
	_Plataformas.add(_platformTipo);
	
	this.add.sprite(423.0, 475.0, 'platformTipo2', null, _Plataformas);
	
	this.add.sprite(89.0, 519.0, 'platformTipo2', null, _Plataformas);
	
	this.add.sprite(270.0, 839.0, 'platformTipo2', null, _Plataformas);
	
	this.add.sprite(-8.0, 205.0, 'platformTipo2', null, _Plataformas);
	
	var _Coins = this.add.group();
	
	var _coinStar = new CoinStar(this.game, 503.0, 136.0);
	_Coins.add(_coinStar);
	
	var _coinStar1 = new CoinStar(this.game, 459.0, 383.0);
	_Coins.add(_coinStar1);
	
	var _coinStar2 = new CoinStar(this.game, 135.0, 415.0);
	_Coins.add(_coinStar2);
	
	var _coinStar3 = new CoinStar(this.game, 312.0, 765.0);
	_Coins.add(_coinStar3);
	
	var _Enemies = this.add.group();
	
	var _enemy = new Enemy3(this.game, 540.0, 853.0);
	_Enemies.add(_enemy);
	
	var _enemy2 = new Enemy3(this.game, 4.0, 129.0);
	_Enemies.add(_enemy2);
	
	var _EnemyL2 = this.add.group();
	
	var _enemy3 = new Enemy2(this.game, 565.0, 115.0);
	_EnemyL2.add(_enemy3);
	
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
	
	this.add.sprite(29.0, -67.0, 'platformTipo3', null, _plataformasMove);
	
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
	this.fPlatformTipo = _platformTipo;
	this.fCoins = _Coins;
	this.fCoinStar = _coinStar;
	this.fCoinStar1 = _coinStar1;
	this.fCoinStar2 = _coinStar2;
	this.fCoinStar3 = _coinStar3;
	this.fEnemies = _Enemies;
	this.fEnemy = _enemy;
	this.fEnemy2 = _enemy2;
	this.fEnemyL2 = _EnemyL2;
	this.fEnemy3 = _enemy3;
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

Level20.prototype.myPreload = function () {
	AllSounds_proto.preload(this);
};


Level20.prototype.myCreate = function () {
	//this.sound.setDecodedCallback('coin', start, this);
	var allSounds = AllSounds_proto.create(this);
	this.fPixelFont.text = this.LevelNumber;
	this.behavior = new PlatformerBehavior(this, "Level",this.fScreenLevel, this.fPlayer,this.fScreenLevel, this.fPlataformas,this.fPlataformasMove, this.fEnemies, this.fEnemyL2,this.fEnemyL3, this.fCoins, vidasTotales,this.fLives, this.fGreatJobScreen,this.fPauseBtn , allSounds);
};


Level20.prototype.update = function () {
	this.behavior.update();
};

