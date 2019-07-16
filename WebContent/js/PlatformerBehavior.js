
	function PlatformerBehavior(state, nextLevel, player, plataformas, enemigos, enemigos2) {
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
		this._enemigos2 = enemigos2;
		this.maxPower = 200;
		this._state.camera.follow(this._player);

	

		this.swipeCoordX, this.swipeCoordY,  this.swipeCoordX2,  this.swipeCoordY2,  this.swipeMinDistance = 1;  
		this.AirFriction = 0.8;	
	
		
	//habilitar fisica para todos los objetos	
		this._state.physics.arcade.enable([this._player, this._plataformas, this._enemigos]);
		
	
	//player	
		this._player.body.enable = true;
		this._player.body.setSize(this._player.width/2, this._player.height, this._player.width/4, 0);
		this._player.body.allowGravity = true;
		this._player.body.collideWorldBounds = true;
		this._velocity = this._player.body.velocity;
		this._state.physics.arcade.enable(this._player);

		
	//enemigos1	
		
		this._arcade.enable(this._enemigos, true);
		this._enemigos.setAll("body.allowGravity", true);
		this._enemigos.setAll("body.immovable", false);
		this._enemigos.setAll("body.collideWorldBounds", true);

	//enemigos2
		
		this._arcade.enable(this._enemigos2, true);
		this._enemigos2.setAll("body.allowGravity", true);
		this._enemigos2.setAll("body.immovable", false);
		this._enemigos2.setAll("body.collideWorldBounds", true);
		
		
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

			if(this.Dx >=this.maxPower){
				this.Dx = this.maxPower;

			}

			if(this.Dy >=this.maxPower){

				this.Dy = this.maxPower/2;

			}


			console.log(this.Dy);
				console.log(this.Dx);
			
	
		if(this.swipeCoordX2 < this.swipeCoordX - this.swipeMinDistance){            
		
			//console.log("left");  
			this.dirX=-1;	
	 	
		}
	
		if(this.swipeCoordX2 > this.swipeCoordX + this.swipeMinDistance){            
			
			this.dirX=1;
			//console.log("rigth");  
	 	
		}
	
		if(this.swipeCoordY2 < this.swipeCoordY - this.swipeMinDistance){
	
			this._velocity.y = -this.Dy;
			//console.log("up");        
		
		}
		if(this.swipeCoordY2 > this.swipeCoordY + this.swipeMinDistance){  
	
			this._velocity.y = this.Dy;
			//console.log("down");        
		
		}   

	 	this.veloX = 100;

		}, this);

		this._enemigos.forEach(function(enemy) { //funcionamiento enemigos tipo 1
    		
    		enemy.body.setSize(enemy.width/2, enemy.height, enemy.width/4, 0);
    		var CurrentState = enemy.data;
    		var CurrentPlayer = CurrentState.game.fPlayer;

			this._state.time.events.loop(2000, updateCounter);


			function updateCounter(){

				
				this.enemyDir = Math.round(Math.random()*10);


				this.CurrentPlayerX = CurrentPlayer.x;
				this.CurrentPlayerY = CurrentPlayer.y;

				if(this.CurrentPlayerX < CurrentState.game.world.width/2){

						if(this.CurrentPlayerY < CurrentState.game.world.height/2){

						this.enemyPowerX=100;	
							//console.log("jugador en cuadrante 1");
						this.enemyPowerY=100;	
						}else{
							this.enemyPowerY=0;	

							//console.log("jugador en cuadrante 3");

						}
							
				}else{

					if(this.CurrentPlayerY < CurrentState.game.world.height/2){
						this.enemyPowerX=100;	
						this.enemyPowerY=100;	
							//console.log("jugador en cuadrante 2");
						
						}else{
						this.enemyPowerY=0;	
							//console.log("jugador en cuadrante 4");
						}
				}



				if(enemyPowerY<60){
						enemyPowerY=60;

				}
			
				if(this.enemyDir > 5){

					this.enemyDir=-1;

				}else{

					this.enemyDir=1;

				}

				enemy.body.velocity.x=this.enemyPowerX*this.enemyDir;
				enemy.body.velocity.y=-this.enemyPowerY;

		

			}

  		}, this);


		this._enemigos2.forEach(function(enemy) { //funcionamiento enemigos tipo 2
    		

    		enemy.body.setSize(enemy.width/2, enemy.height, enemy.width/4, 0);
    		var CurrentState = enemy.data;
    		var CurrentPlayer = CurrentState.game.fPlayer;
    	
			this._state.time.events.loop(Math.abs(Math.random()*3000), updateCounter);


			function updateCounter(){

				//console.log(this.CurrentPlayerY - enemy.y);
				this.enemyPowerX2 = Math.abs(this.CurrentPlayerX - enemy.x);
				this.enemyDir2 = Math.sign(this.CurrentPlayerX - enemy.x)
				
				if(enemyPowerX2 > 50){
					enemyPowerX2 = 50;

				}
				if(this.CurrentPlayerY > enemy.y){

					this.enemyPowerY2 = 0;

				}else{

					this.enemyPowerY2= Math.abs(this.CurrentPlayerY - enemy.y)*0.8;
					
					
				}

				this.CurrentPlayerX = CurrentPlayer.x;
				this.CurrentPlayerY = CurrentPlayer.y;

				if(this.CurrentPlayerX < CurrentState.game.world.width/2){

						if(this.CurrentPlayerY < CurrentState.game.world.height/2){

						this.enemyPower2Y=400;	
							//console.log("jugador en cuadrante 1");
						
						}else{
							this.enemyPower2Y=0;	

							//console.log("jugador en cuadrante 3");

						}
							
				}else{

					if(this.CurrentPlayerY < CurrentState.game.world.height/2){
						this.enemyPower2Y=400;	
							//console.log("jugador en cuadrante 2");
						
						}else{
						this.enemyPower2Y=0;	
							//console.log("jugador en cuadrante 4");
						}
				}


				

				enemy.body.velocity.x=this.enemyPowerX2*this.enemyDir2;
				enemy.body.velocity.y=-this.enemyPowerY2;
		

			}

  		}, this);
  		
	}

		

	PlatformerBehavior.prototype.update = function() {

		this._arcade.collide(this._player, this._plataformas);
		this._arcade.collide(this._enemigos, this._enemigos);
		this._arcade.collide(this._enemigos2, this._enemigos);
		this._arcade.collide(this._enemigos2, this._enemigos2);
		this._arcade.collide(this._player, this._enemigos,touchingEnemy);
		this._arcade.collide(this._player, this._enemigos2,touchingEnemy);
		this._arcade.collide(this._plataformas, this._enemigos);
		this._arcade.collide(this._plataformas, this._enemigos2, bounceAbit);


		function touchingEnemy(player, enemy){

	
		
			if(enemy.body.touching.up){
				
				//enemy.visible = false;
				console.log("kill the bastard");

			}else{

				console.log("damage");
			}
			

		}

		function bounceAbit(enemy, platform){
			enemy.body.bounce.set(0.8);
			console.log("collinding platform");
		}

		//reducción de velocidad de player en eje x
		
		if(this.Dx>=0){
			this.Dx-=this.AirFriction;	
		}else{

			this.Dx=0;
		}
		
	this._velocity.x=this.Dx*this.dirX;
	
	

	};



