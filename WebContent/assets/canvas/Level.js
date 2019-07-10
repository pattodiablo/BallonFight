
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
	
};

Level.prototype.create = function () {
	this.add.sprite(-141.0, 772.0, 'floor');
	
	this.add.text(16.0, 10.0, 'Ballonaizer', {"font":"bold 40px Arial","fill":"#f9fcff"});
	
	var _player = new Player(this.game, 290.0, 705.0);
	this.add.existing(_player);
	
	
	
	// fields
	
	this.fPlayer = _player;
		this.myCreate();
	
	
};

/* --- end generated code --- */

Level.prototype.myInit = function() {
	this.world.resize(1080, 1920);
};

Level.prototype.myCreate = function () {
	this.behavior = new PlatformerBehavior(this, "Level2", this.fPlayer);
};

Level.prototype.update = function () {
	this.behavior.update();
};

