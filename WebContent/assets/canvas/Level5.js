
// -- user code here --
var vidasTotales;
var AllSounds_proto = Object.create(GameSounds.prototype);
/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * Level5.
 */
function Level5() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Level5_proto = Object.create(Phaser.State.prototype);
Level5.prototype = Level5_proto;
Level5.prototype.constructor = Level5;

Level5.prototype.init = function (vidas) {
	
	
	console.log(vidas);
	vidasTotales = vidas;
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.stage.backgroundColor = '#eff0ed';
	
};

Level5.prototype.preload = function () {
	
	this.load.pack('Ground', 'assets/eviroment.json');
	this.load.pack('player', 'assets/pack.json');
	this.load.pack('Enemy', 'assets/enemy.json');
	
	this.myPreload();
	
};

Level5.prototype.create = function () {
	this.add.sprite(0.0, 0.0, 'background');
	
	this.add.sprite(-160.0, 807.0, 'grass');
	
	var _Plataformas = this.add.group();
	
	var _floor1 = new Piso(this.game, 320.0, 960.0);
	_Plataformas.add(_floor1);
	
	var _platformTipo = new Platform1(this.game, 382.0, 655.0);
	_Plataformas.add(_platformTipo);
	
	var _platformTipo2 = new Platform1(this.game, -177.0, 432.0);
	_Plataformas.add(_platformTipo2);
	
	var _Coins = this.add.group();
	
	var _coinStar = new CoinStar(this.game, 49.0, 366.0);
	_Coins.add(_coinStar);
	
	var _coinStar1 = new CoinStar(this.game, 385.0, 575.0);
	_Coins.add(_coinStar1);
	
	var _coinStar2 = new CoinStar(this.game, 441.0, 111.0);
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
	
	var _enemy = new Enemy(this.game, 514.0, 110.0);
	_EnemyL3.add(_enemy);
	
	var _plataformasMove = this.add.group();
	_plataformasMove.position.set(471.0, 267.0);
	
	var _platformTipo1 = new Platform1(this.game, -42.0, -86.0);
	_plataformasMove.add(_platformTipo1);
	
	var _player = new Player(this.game, 81.0, 882.0);
	this.add.existing(_player);
	
	var _greatJobScreen = this.add.sprite(0.0, -960.0, 'greatJobScreen');
	
	var _pauseBtn = this.add.sprite(555.0, 9.0, 'pauseBtn');
	
	
	
	// fields
	
	this.fPlataformas = _Plataformas;
	this.fFloor1 = _floor1;
	this.fPlatformTipo = _platformTipo;
	this.fPlatformTipo2 = _platformTipo2;
	this.fCoins = _Coins;
	this.fCoinStar = _coinStar;
	this.fCoinStar1 = _coinStar1;
	this.fCoinStar2 = _coinStar2;
	this.fEnemies = _Enemies;
	this.fEnemyL2 = _EnemyL2;
	this.fLives = _lives;
	this.fEnemyL3 = _EnemyL3;
	this.fEnemy = _enemy;
	this.fPlataformasMove = _plataformasMove;
	this.fPlatformTipo1 = _platformTipo1;
	this.fPlayer = _player;
	this.fGreatJobScreen = _greatJobScreen;
	this.fPauseBtn = _pauseBtn;
		this.myCreate();
	
	
};

/* --- end generated code --- */

Level5.prototype.myPreload = function () {
	AllSounds_proto.preload(this);
};


Level5.prototype.myCreate = function () {
	//this.sound.setDecodedCallback('coin', start, this);
	var allSounds = AllSounds_proto.create(this);
	this.behavior = new PlatformerBehavior(this, "Level6", this.fPlayer, this.fPlataformas,this.fPlataformasMove, this.fEnemies, this.fEnemyL2,this.fEnemyL3, this.fCoins, vidasTotales,this.fLives, this.fGreatJobScreen,this.fPauseBtn , allSounds);
};


Level5.prototype.update = function () {
	
	this.behavior.update();
};

