
	function PlatformerBehavior(state, nextLevel, player, plataformas, enemigos) {
	// init

		this._state = state;
		this._nextLevel = nextLevel;
	
	// physics
		this._arcade = state.game.physics.arcade;
		this._arcade.gravity.y = 90;

	// player
		this._player = player;
		this._plataformas= plataformas;
		this._enemigos = enemigos;
		this._state.camera.follow(this._player);
		this._state.camera.width=640;
		this._state.camera.height=960;
		this.swipeCoordX, this.swipeCoordY,  this.swipeCoordX2,  this.swipeCoordY2,  this.swipeMinDistance = 1;  
		this.AirFriction = 0.8;	
	
		
	//habilitar fisica para todos los objetos	
		this._state.physics.arcade.enable([this._player, this._plataformas, this._enemigos]);
		
	
	//player	
		this._player.body.enable = true;
		this._player.body.allowGravity = true;
		this._player.body.collideWorldBounds = true;
		this._velocity = this._player.body.velocity;
		
	//enemigos	
		
		this._arcade.enable(this._enemigos, true);
		this._enemigos.setAll("body.allowGravity", true);
		this._enemigos.setAll("body.immovable", false);
		this._enemigos.setAll("body.collideWorldBounds", true);
		
		
	//plataformas
		this._arcade.enable(this._plataformas, true);
		this._plataformas.setAll("body.allowGravity", false);
		this._plataformas.setAll("body.immovable", true);
		this._plataformas.setAll("body.friccion", false);	

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

		this._enemigos.forEach(function(enemy) {
    		
    		
    		console.log('entro a foreach');

			this._state.time.events.loop(Math.random()*4000, updateCounter);


			function updateCounter(){
				this.enemyPowerX=Math.random()*100;
				this.enemyPowerY=Math.random()*200;
				this.enemyDir = Math.random()*10;
				if(this.enemyDir > 5){

					this.enemyDir=-1;
				}else{
					this.enemyDir=1;
				}

				enemy.body.velocity.x=this.enemyPowerX*this.enemyDir;
				enemy.body.velocity.y=-this.enemyPowerY;

			console.log(enemy.body.velocity.x);

			}

  		}, this);


  		
	}

		

	PlatformerBehavior.prototype.update = function() {

		this._arcade.collide(this._player, this._plataformas);
		this._arcade.collide(this._player, this._enemigos);
		this._arcade.collide(this._plataformas, this._enemigos);





		function touchingFloor(player, floor){

			//console.log("collinding shit");
		}

		//reducción de velocidad de player en eje x
		
		if(this.Dx>=0){
			this.Dx-=this.AirFriction;	
		}else{

			this.Dx=0;
		}
		
	this._velocity.x=this.Dx*this.dirX;
	
	

	};



