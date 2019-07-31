window.onload = function() {
	
		//var Pixelratio = window.screen.availWidth / 640;
	  var width = 640  ;﻿﻿﻿
	  var height = 960 ;
	  var firstRunLandscape = false;
	  
	console.log("pixel ratio "+  window.devicePixelRatio); 
	console.log("largo "  + width + " ancho " + height);
	  
	var game = new Phaser.Game(width,height, Phaser.AUTO);
	
	var play = function(){};
	
	play.prototype = {
			
			preload:function(){
				console.log("paro zona");
				firstRunLandscape = game.scale.isGameLandscape;
				if(game.device.desktop){
					game.scale.forceOrientation(false, false);
				}else{
					game.scale.forceOrientation(false, true);
					
				}
				
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
				game.height = 960;
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
	game.state.add("Level3", Level3);
	game.state.add("Level4", Level4);
	game.state.add("Level5", Level5);
	game.state.add("Level6", Level6);
	game.state.add("Level7", Level7);
	game.state.add("Level8", Level8);
	game.state.add("Level9", Level9);
	game.state.add("Level10", Level10);
	game.state.start("Play",true,true);
	
};	

