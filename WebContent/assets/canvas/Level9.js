
// -- user code here --
var vidasTotales;
var AllSounds_proto = Object.create(GameSounds.prototype);
/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * Level9.
 */
function Level9() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Level9_proto = Object.create(Phaser.State.prototype);
Level9.prototype = Level9_proto;
Level9.prototype.constructor = Level9;

Level9.prototype.init = function (vidas) {
	
	
	console.log(vidas);
	vidasTotales = vidas;
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.stage.backgroundColor = '#eff0ed';
	
};

Level9.prototype.preload = function () {
	
	this.load.pack('Ground', 'assets/eviroment.json');
	this.load.pack('Enemy', 'assets/enemy.json');
	this.load.pack('player', 'assets/pack.json');
	
	this.myPreload();
	
};

Level9.prototype.create = function () {
	this.add.sprite(0.0, 0.0, 'background');
	
	this.add.sprite(-160.0, 807.0, 'grass');
	
	var _Plataformas = this.add.group();
	
	this.add.sprite(-1.0, 351.0, 'platformTipo2', null, _Plataformas);
	
	this.add.sprite(493.0, 451.0, 'platformTipo2', null, _Plataformas);
	
	this.add.sprite(-3.0, 564.0, 'platformTipo2', null, _Plataformas);
	
	var _floor1 = new Piso(this.game, 320.0, 960.0);
	_Plataformas.add(_floor1);
	
	var _Coins = this.add.group();
	
	var _coinStar = new CoinStar(this.game, 387.0, 573.0);
	_Coins.add(_coinStar);
	
	var _coinStar1 = new CoinStar(this.game, 348.0, 150.0);
	_Coins.add(_coinStar1);
	
	var _coinStar2 = new CoinStar(this.game, 42.0, 285.0);
	_Coins.add(_coinStar2);
	
	var _coinStar3 = new CoinStar(this.game, 44.0, 497.0);
	_Coins.add(_coinStar3);
	
	var _coinStar4 = new CoinStar(this.game, 518.0, 382.0);
	_Coins.add(_coinStar4);
	
	var _Enemies = this.add.group();
	
	var _EnemyL2 = this.add.group();
	
	var _enemy1 = new Enemy2(this.game, 393.0, 109.0);
	_EnemyL2.add(_enemy1);
	
	var _lives = this.add.group();
	
	var _vida = new Vida(this.game, 15.0, 20.0);
	_lives.add(_vida);
	
	var _vida1 = new Vida(this.game, 86.0, 20.0);
	_lives.add(_vida1);
	
	var _vida2 = new Vida(this.game, 158.0, 20.0);
	_lives.add(_vida2);
	
	var _EnemyL3 = this.add.group();
	
	var _enemy = new Enemy(this.game, 183.0, 129.0);
	_EnemyL3.add(_enemy);
	
	var _plataformasMove = this.add.group();
	_plataformasMove.position.set(471.0, 267.0);
	
	var _platformTipo4 = new Platform1(this.game, -129.0, -53.0);
	_plataformasMove.add(_platformTipo4);
	
	this.add.sprite(-126.0, 373.0, 'platformTipo3', null, _plataformasMove);
	
	var _player = new Player(this.game, 81.0, 882.0);
	this.add.existing(_player);
	
	var _greatJobScreen = this.add.sprite(0.0, -960.0, 'greatJobScreen');
	
	var _pauseBtn = this.add.sprite(555.0, 9.0, 'pauseBtn');
	
	
	
	// fields
	
	this.fPlataformas = _Plataformas;
	this.fFloor1 = _floor1;
	this.fCoins = _Coins;
	this.fCoinStar = _coinStar;
	this.fCoinStar1 = _coinStar1;
	this.fCoinStar2 = _coinStar2;
	this.fCoinStar3 = _coinStar3;
	this.fCoinStar4 = _coinStar4;
	this.fEnemies = _Enemies;
	this.fEnemyL2 = _EnemyL2;
	this.fEnemy1 = _enemy1;
	this.fLives = _lives;
	this.fEnemyL3 = _EnemyL3;
	this.fEnemy = _enemy;
	this.fPlataformasMove = _plataformasMove;
	this.fPlatformTipo4 = _platformTipo4;
	this.fPlayer = _player;
	this.fGreatJobScreen = _greatJobScreen;
	this.fPauseBtn = _pauseBtn;
		this.myCreate();
	
	
};

/* --- end generated code --- */

Level9.prototype.myPreload = function () {
	AllSounds_proto.preload(this);
};


Level9.prototype.myCreate = function () {
	//this.sound.setDecodedCallback('coin', start, this);
	var allSounds = AllSounds_proto.create(this);
	this.behavior = new PlatformerBehavior(this, "Level10", this.fPlayer, this.fPlataformas,this.fPlataformasMove, this.fEnemies, this.fEnemyL2,this.fEnemyL3, this.fCoins, vidasTotales,this.fLives, this.fGreatJobScreen,this.fPauseBtn , allSounds);
};


Level9.prototype.update = function () {
	this.behavior.update();
};

