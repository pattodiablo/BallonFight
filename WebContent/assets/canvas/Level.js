
// -- user code here --

/* --- start generated code --- */

// Generated by  1.5.4 (Phaser v2.6.2)


/**
 * Level.
 */
function Level() {
	
	Phaser.State.call(this);
	
}

/** @type Phaser.State */
var Level_proto = Object.create(Phaser.State.prototype);
Level.prototype = Level_proto;
Level.prototype.constructor = Level;

Level.prototype.init = function () {
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.stage.backgroundColor = '#65edff';
	
};

Level.prototype.preload = function () {
	
	this.load.pack('Ground', 'assets/eviroment.json');
	this.load.pack('player', 'assets/pack.json');
	this.load.pack('Enemy', 'assets/enemy.json');
	
};

Level.prototype.create = function () {
	this.add.sprite(-161.0, 844.0, 'grass');
	
	this.add.text(16.0, 10.0, 'Ballonaizer', {"font":"bold 40px Arial","fill":"#f9fcff"});
	
	var _player = new Player(this.game, 290.0, 705.0);
	this.add.existing(_player);
	
	var _Plataformas = this.add.group();
	
	var _floor = new Piso(this.game, -237.0, 527.0);
	_Plataformas.add(_floor);
	
	var _floor1 = new Piso(this.game, 324.0, 935.0);
	_Plataformas.add(_floor1);
	
	var _floor2 = new Piso(this.game, 935.0, 207.0);
	_Plataformas.add(_floor2);
	
	var _Enemies = this.add.group();
	
	var _enemy = new Enemy(this.game, 155.0, 408.0);
	_Enemies.add(_enemy);
	
	var _enemy = new Enemy(this.game, 426.0, 86.0);
	_Enemies.add(_enemy);
	
	var _enemy = new Enemy(this.game, 518.0, 812.0);
	_Enemies.add(_enemy);
	
	
	
	// fields
	
	this.fPlayer = _player;
	this.fPlataformas = _Plataformas;
	this.fFloor = _floor;
	this.fFloor1 = _floor1;
	this.fFloor2 = _floor2;
	this.fEnemies = _Enemies;
	this.fEnemy = _enemy;
	this.fEnemy = _enemy;
	this.fEnemy = _enemy;
		this.myCreate();
	
	
};

/* --- end generated code --- */

Level.prototype.myInit = function() {
	this.world.resize(1080, 1920);
};

Level.prototype.myCreate = function () {
	this.behavior = new PlatformerBehavior(this, "Level1", this.fPlayer, this.fPlataformas, this.fEnemies);
};

Level.prototype.update = function () {
	this.behavior.update();
};

