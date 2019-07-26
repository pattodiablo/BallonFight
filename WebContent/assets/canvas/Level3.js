
// -- user code here --
var vidasTotales;
var AllSounds_proto = Object.create(GameSounds.prototype);
/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * Level3.
 */
function Level3() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Level3_proto = Object.create(Phaser.State.prototype);
Level3.prototype = Level3_proto;
Level3.prototype.constructor = Level3;

Level3.prototype.init = function (vidas) {
	
	
	console.log(vidas);
	vidasTotales = vidas;
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.stage.backgroundColor = '#eff0ed';
	
};

Level3.prototype.preload = function () {
	
	this.load.pack('Ground', 'assets/eviroment.json');
	this.load.pack('player', 'assets/pack.json');
	
	this.myPreload();
	
};

Level3.prototype.create = function () {
	this.add.sprite(0.0, 0.0, 'background');
	
	this.add.sprite(-160.0, 807.0, 'grass');
	
	var _Plataformas = this.add.group();
	
	var _floor1 = new Piso(this.game, 320.0, 960.0);
	_Plataformas.add(_floor1);
	
	var _platformTipo = new Platform1(this.game, 382.0, 655.0);
	_Plataformas.add(_platformTipo);
	
	var _platformTipo1 = new Platform1(this.game, -217.0, 207.0);
	_Plataformas.add(_platformTipo1);
	
	var _platformTipo2 = new Platform1(this.game, 387.0, 215.0);
	_Plataformas.add(_platformTipo2);
	
	var _Coins = this.add.group();
	
	var _coinStar = new CoinStar(this.game, 564.0, 720.0);
	_Coins.add(_coinStar);
	
	var _coinStar1 = new CoinStar(this.game, 477.0, 430.0);
	_Coins.add(_coinStar1);
	
	var _coinStar2 = new CoinStar(this.game, 379.0, 118.0);
	_Coins.add(_coinStar2);
	
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
	
	
	
	// fields
	
	this.fPlataformas = _Plataformas;
	this.fFloor1 = _floor1;
	this.fPlatformTipo = _platformTipo;
	this.fPlatformTipo1 = _platformTipo1;
	this.fPlatformTipo2 = _platformTipo2;
	this.fCoins = _Coins;
	this.fCoinStar = _coinStar;
	this.fCoinStar1 = _coinStar1;
	this.fCoinStar2 = _coinStar2;
	this.fEnemies = _Enemies;
	this.fEnemyL2 = _EnemyL2;
	this.fLives = _lives;
	this.fEnemyL3 = _EnemyL3;
	this.fPlataformasMove = _plataformasMove;
	this.fPlayer = _player;
	this.fGreatJobScreen = _greatJobScreen;
	this.fPauseBtn = _pauseBtn;
		this.myCreate();
	
	
};

/* --- end generated code --- */

Level3.prototype.myPreload = function () {
	AllSounds_proto.preload(this);
};


Level3.prototype.myCreate = function () {
	//this.sound.setDecodedCallback('coin', start, this);
	var allSounds = AllSounds_proto.create(this);
	this.behavior = new PlatformerBehavior(this, "Level4", this.fPlayer, this.fPlataformas,this.fPlataformasMove, this.fEnemies, this.fEnemyL2,this.fEnemyL3, this.fCoins, vidasTotales,this.fLives, this.fGreatJobScreen,this.fPauseBtn , allSounds);
};


Level3.prototype.update = function () {
	this.behavior.update();
};

