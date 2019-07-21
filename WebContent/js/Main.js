window.onload = function() {
	
	 var height = window.innerHeight;
	  var width = window.innerWidth;﻿﻿﻿
	  
	var game = new Phaser.Game(640, 960, Phaser.EXACT_FIT, 'container');
	
	// Add the States your game has.
	// game.state.add("Boot", Boot);
	// game.state.add("Menu", Menu);
	game.state.add("IntroScene", IntroScene);
	game.state.add("GoverScene", goverScene);
	game.state.add("Level", Level);
	game.state.add("Level2", Level2);
	game.state.start("IntroScene");
	
};	
