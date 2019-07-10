
function PlatformerBehavior(state, nextLevel, player) {
	// init

	this._state = state;
	this._nextLevel = nextLevel;

	// physics
	this._arcade = state.game.physics.arcade;
	this._arcade.gravity.y = 90;

	// player
	this._player = player;
	this._state.camera.follow(this._player);
	this._state.camera.width=640;
	this._state.camera.height=960;
	this.swipeCoordX, this.swipeCoordY,  this.swipeCoordX2,  this.swipeCoordY2,  this.swipeMinDistance = 50;  
	this._velocity = this._player.body.velocity;
	this._factorX = 0;
	this._factorY = 0;

	
	// cursors
	this._cursors = this._state.input.keyboard.createCursorKeys();
	this._state.input.addPointer();
	
	
this._state.input.onDown.add(function(pointer) {
		
		this.swipeCoordX = pointer.clientX;   
		this.swipeCoordY = pointer.clientY; 
		
	}, this);   

this._state.input.onUp.add(function(pointer) { 
	
	this.swipeCoordX2 = pointer.clientX;        
	this.swipeCoordY2 = pointer.clientY;        
	
	this.veloX = 100;
	
	if(this.swipeCoordX2 < this.swipeCoordX - this.swipeMinDistance){            
		
		console.log("left");  
		this.dirX=-1;	
	 	
	}
	
	else if(this.swipeCoordX2 > this.swipeCoordX + this.swipeMinDistance){            
		
		this.dirX=1;
		console.log("rigth");  
	 	
	}
	
	else if(this.swipeCoordY2 < this.swipeCoordY - this.swipeMinDistance){
		
	
		this._velocity.y = -100 ;
		console.log("up");        
		
	}
	else if(this.swipeCoordY2 > this.swipeCoordY + this.swipeMinDistance){  
	
		this._velocity.y = 200 ;
	
		console.log("down");        
		
	}   
	 	
	}, this);

	
}

PlatformerBehavior.prototype.update = function() {
	
	if(this.veloX!=0){
		this.veloX--;	
	}
	
	
	
	this._velocity.x=this.veloX*this.dirX;
	
	//this._state.physics.arcade.velocityFromAngle(this._player.angle+this.angulo, this.velo, this._player.body.velocity);

	

	

	
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


