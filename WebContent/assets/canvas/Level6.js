
// -- user code here --
var vidasTotales;
var AllSounds_proto = Object.create(GameSounds.prototype);
/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * Level6.
 */
function Level6() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Level6_proto = Object.create(Phaser.State.prototype);
Level6.prototype = Level6_proto;
Level6.prototype.constructor = Level6;

Level6.prototype.init = function (vidas) {
	
	
	console.log(vidas);
	vidasTotales = vidas;
	
		this.LevelNumber = 6;
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.stage.backgroundColor = '#eff0ed';
	
};

Level6.prototype.preload = function () {
	
	this.load.pack('Ground', 'assets/eviroment.json');
	this.load.pack('player', 'assets/pack.json');
	this.load.pack('Enemy', 'assets/enemy.json');
	
	this.myPreload();
	
};

Level6.prototype.create = function () {
	this.add.sprite(0.0, 0.0, 'background');
	
	this.add.sprite(-160.0, 807.0, 'grass');
	
	var _Plataformas = this.add.group();
	
	var _floor1 = new Piso(this.game, 320.0, 960.0);
	_Plataformas.add(_floor1);
	
	this.add.sprite(249.0, 211.0, 'platformTipo2', null, _Plataformas);
	
	var _platformTipo = new Platform1(this.game, 178.0, 547.0);
	_Plataformas.add(_platformTipo);
	
	var _Coins = this.add.group();
	
	var _coinStar = new CoinStar(this.game, 291.0, 473.0);
	_Coins.add(_coinStar);
	
	var _coinStar1 = new CoinStar(this.game, 288.0, 144.0);
	_Coins.add(_coinStar1);
	
	var _coinStar2 = new CoinStar(this.game, 286.0, 859.0);
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
	
	var _enemy = new Enemy(this.game, 276.0, 141.0);
	_EnemyL3.add(_enemy);
	
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
	this.fPlayer = _player;
	this.fGreatJobScreen = _greatJobScreen;
	this.fPauseBtn = _pauseBtn;
		this.myCreate();
	
	
};

/* --- end generated code --- */

Level6.prototype.myPreload = function () {
	AllSounds_proto.preload(this);
};


Level6.prototype.myCreate = function () {
	//this.sound.setDecodedCallback('coin', start, this);
	var allSounds = AllSounds_proto.create(this);
	this.behavior = new PlatformerBehavior(this, "Level7", this.fPlayer, this.fPlataformas,this.fPlataformasMove, this.fEnemies, this.fEnemyL2,this.fEnemyL3, this.fCoins, vidasTotales,this.fLives, this.fGreatJobScreen,this.fPauseBtn , allSounds);
};


Level6.prototype.update = function () {
	this.behavior.update();
};

