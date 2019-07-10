
function PlatformerBehavior(state, nextLevel, player) {
	// init

	this._state = state;
	this._nextLevel = nextLevel;

	// physics
	this._arcade = state.game.physics.arcade;
	this._arcade.gravity.y = 50;

	// player
	this._player = player;
	this._state.camera.follow(this._player);
	this._state.camera.width=640;
	this._state.camera.height=960;

	// cursors
	this._cursors = this._state.input.keyboard.createCursorKeys();
	
}

PlatformerBehavior.prototype.update = function() {

	// update player velocity

	var velocity = this._player.body.velocity;

	velocity.x = 0;

	if (this._cursors.left.isDown) {
		velocity.x = -100;
	
	} else if (this._cursors.right.isDown) {
		velocity.x = 100;

	}
	
	if(this._state.input.activePointer.leftButton.isDown){
		velocity.y = -50;
		
	}


	this._state.input.onDown.add(function() {
		velocity.y = -50;
	    });


	var pointer = this._state.input.activePointer;
	
	if (pointer.isDown) {
	    var touchX = pointer.x;
	    //var touchY = pointer.y;
	    console.log(touchX);
	    if(touchX>this._state.scale.width/2){
	    
	    	velocity.x = 100;
	    	
	    }else{
	    	
	        velocity.x = -100;
	    }
	} 
	    
	// update player animation

		var moving = this._player.body.velocity.x != 0;

		if (this._cursors.up.isDown) {
			velocity.y = -100;
			
		} else if (moving) {
			
			this._player.play("walk");
		} else {
			
			this._player.play("stay");
		}
	
};

PlatformerBehavior.prototype.startNextLevel = function() {
	if (!this._levelOver) {
		this._levelOver = true;
		this._state.camera.fade();
		this._state.time.events.add(1000, function (){
			this._state.game.state.start(this._nextLevel);
		}, this);
	}
};


