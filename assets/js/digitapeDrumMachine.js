

var keyData = {
	//z key
	z: {
		sound: new Howl({
			src: ['assets/sounds/DigiTape-Kick-22-DepthCharge.mp3']
		})
	},
	//x key
	x: {
		sound: new Howl({
			src: ['assets/sounds/DigiTape-Kick-34-Batter.mp3']
		})
	},
	//c key
	c: {
		sound: new Howl({
			src: ['assets/sounds/DigiTape-Perc-07-ClapClassic.mp3']
		})
	},
	//v key
	v: {
		sound: new Howl({
			src: ['assets/sounds/DigiTape-Perc-11-VerbClave.mp3']
		})
	},
	//a key
	a: {
		sound: new Howl({
			src: ['assets/sounds/DigiTape-Hat-CH-06-Favorite.mp3']
		})
	},
	//s key
	s: {
		sound: new Howl({
			src: ['assets/sounds/DigiTape-Hat-OH-02-Squall.mp3']
		})
	},
	//d key
	d: {
		sound: new Howl({
			src: ['assets/sounds/DigiTape-Snare-12-Favorite.mp3']
		})
	},
	//f key
	f: {
		sound: new Howl({
			src: ['assets/sounds/DigiTape-Snare-19-TopRound.mp3']
		})
	},
	//q key
	q: {
		sound: new Howl({
			src: ['assets/sounds/DigiTape-Tom-11b-PopTop.mp3']
		})
	},
	//w key
	w: {
		sound: new Howl({
			src: ['assets/sounds/DigiTape-Tom-11d-PopTop.mp3']
		})
	},
	//e key
	e: {
		sound: new Howl({
			src: ['assets/sounds/DigiTape-FX-02-BigSubDrop.mp3']
		})
	},
	//r key
	r: {
		sound: new Howl({
			src: ['assets/sounds/DigiTape-FX-28-BriteVerb.mp3']
		})
	},
	//1 key
	1: {
		sound: new Howl({
			src: ['assets/sounds/City-Nights-Electric-Piano_bip_3.1.mp3']
		})
	},
	//2 key
	2: {
		sound: new Howl({
			src: ['assets/sounds/City-Nights-Electric-Piano_bip_3.3.mp3']
		})
	},
	//3 key
	3: {
		sound: new Howl({
			src: ['assets/sounds/City-Nights-Electric-Piano_bip_3.5.mp3']
		})
	},
	//4 key
	4: {
		sound: new Howl({
			src: ['assets/sounds/City-Nights-Electric-Piano_bip_3.6.mp3']
		})
	},
};

//Listens for keyboard presses and triggers appropriate sound
document.addEventListener('keypress', function(event) {
	//create mute groups for electric piano samples and stop playing them when another is triggeres
	if (event.key === '1' || event.key === '2' || event.key === '3' || event.key === '4' ) {
		
		for (var i = 1; i <= 4; i++) {
			keyData[i.toString()].sound.stop();
		};	
	};

	//light up the pad then fade out
	var idFromKey = "#" + event.key;
	$(idFromKey).css("opacity", 1.0);
	$(idFromKey).animate({opacity : 0}, {duration: 600, queue: false });

	console.log(event.key);
	if (keyData[event.key]) {
		keyData[event.key].sound.play();
	};
})

var drumPads = document.getElementsByClassName("drumPad");

// add click functionality to drum pads
for (var i = 0; i < drumPads.length; i++) {
	drumPads[i].addEventListener("click", function() {
		padId = this.getAttribute("id")

		//mute EP sounds that are already playing
		if (padId === '1' || padId === '2' || padId === '3' || padId === '4' ) {
			for (var i = 1; i <= 4; i++) {
				keyData[i.toString()].sound.stop();
			};	
		};

		//play the sound
		if  (keyData[padId]) {
			keyData[padId].sound.play();
		};

		//light the pad
		var idFromPad = "#" + padId;
		$(idFromPad).css("opacity", 1.0);
		$(idFromPad).animate({opacity : 0}, {duration: 600, queue: false });
	})
}
