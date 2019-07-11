
	function PlatformerBehavior(state, nextLevel, player, floor) {
	// init

		this._state = state;
		this._nextLevel = nextLevel;
	
	// physics
		this._arcade = state.game.physics.arcade;
		this._arcade.gravity.y = 90;

	// player
		this._player = player;
		this._floor = floor;
		this._state.camera.follow(this._player);
		this._state.camera.width=640;
		this._state.camera.height=960;
		this.swipeCoordX, this.swipeCoordY,  this.swipeCoordX2,  this.swipeCoordY2,  this.swipeMinDistance = 10;  
		this._factorX = 0;
		this._factorY = 0;
	
		
	//habilitar fisica para todos los objetos	
		this._state.physics.arcade.enable([this._player, this._floor]);
		
	
	//player	
		this._player.body.enable = true;
		this._player.body.allowGravity = true;
		this._player.body.collideWorldBounds = true;
		this._velocity = this._player.body.velocity;
		
	//piso	
		this._floor.body.enable = true;
		this._floor.body.allowGravity = false;
		this._floor.body.immovable = true;
		
		this._state.physics.arcade.collide(this._player, this._floor);
		
	// touchScreen
		
		this._state.input.addPointer();

	
		this._state.input.onDown.add(function(pointer) {
			
			this.swipeCoordX = pointer.clientX;   
			this.swipeCoordY = pointer.clientY; 
			
		}, this);   

		this._state.input.onUp.add(function(pointer) { 
		
			this.swipeCoordX2 = pointer.clientX;        
			this.swipeCoordY2 = pointer.clientY;        
			
			this.Dx = Math.abs(this.swipeCoordX - this.swipeCoordX2);
			this.Dy = Math.abs(this.swipeCoordY - this.swipeCoordY2);

			
	
		if(this.swipeCoordX2 < this.swipeCoordX - this.swipeMinDistance){            
		
			console.log("left");  
			this.dirX=-1;	
	 	
		}
	
		if(this.swipeCoordX2 > this.swipeCoordX + this.swipeMinDistance){            
			
			this.dirX=1;
			console.log("rigth");  
	 	
		}
	
		if(this.swipeCoordY2 < this.swipeCoordY - this.swipeMinDistance){
	
			this._velocity.y = -this.Dy;
			console.log("up");        
		
		}
		if(this.swipeCoordY2 > this.swipeCoordY + this.swipeMinDistance){  
	
			this._velocity.y = this.Dy;
			console.log("down");        
		
		}   

	 	this.veloX = 100;

		}, this);

	
	}

	PlatformerBehavior.prototype.update = function() {
		
		if(this.veloX!=0){
			this.veloX--;	
		}
		
	this._velocity.x=this.Dx*this.dirX;
	
	

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


