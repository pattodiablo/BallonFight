window.onload = function() {
	
		//var Pixelratio = window.screen.availWidth / 640;
	  var width = 640  ;﻿﻿﻿
	  var height = 960 ;
	  var firstRunLandscape;
	  
	console.log("pixel ratio "+  window.devicePixelRatio); 
	console.log("largo "  + width + " ancho " + height);
	  
	var game = new Phaser.Game(width,height, Phaser.CANVAS);
	
	var play = function(game){};
	
	play.prototype = {
			
			preload:function(){
				console.log("paro zona");
				firstRunLandscape = game.scale.isGameLandscape;
				game.scale.forceOrientation(false, true);
				game.scale.enterIncorrectOrientation.add(handleIncorrect);
				game.scale.leaveIncorrectOrientation.add(handleCorrect);
			},
			create:function(){
				game.state.start("Boot",true,true);
					
			}
			
	};
	

	function handleIncorrect(){
     	if(!game.device.desktop){
     		document.getElementById("turn").style.display="block";
     	}
	}
	
	function handleCorrect(){
		if(!game.device.desktop){
			if(firstRunLandscape){
				gameRatio = window.innerWidth/window.innerHeight;		
				game.width = Math.ceil(640*gameRatio);
				game.height = 640;
				game.renderer.resize(game.width,game.height);
				game.state.start("Play");		
			}
			document.getElementById("turn").style.display="none";
		}
	}
	
	// Add the States your game has.
	
	// game.state.add("Menu", Menu);
	game.state.add("Play",play);
	game.state.add("Boot", Boot);
	game.state.add("IntroScene", IntroScene);
	game.state.add("GoverScene", goverScene);
	game.state.add("Level", Level);
	game.state.add("Level2", Level2);
	game.state.start("Play",true,true);
	
};	

