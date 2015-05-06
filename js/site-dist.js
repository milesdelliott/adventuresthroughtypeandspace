function updateMenu(progress, status, location) {
	
}

function fightHandler(input, status, enemy) {
	//player action
	if (input === 1) {
		var dmg = status.damage * items.currentWep;
		var dealt = dmg * enemy.def;
		var currentEnemyHealth = enemy.health - dealt;
		enemy.health = currentEnemyHealth;
		var received = enemy.damage * status.def;
		status.health = status.health - received;
	}
	if (input === 2) {
		var dmg = items.special
		var received = enemy.damage * status.def;
		status.health = status.health - received;
	}
	//enemy response
}

function convBoard(input, current, progress, convP, convo) {
	if (convo[convP][7] === 1) {
		switchBoard(input, current, progress);
	}
	var dest = 1;
	if (input === 1) {
		dest = convo[convP][4];
	} else if (input === 2) {
		dest = convo[convP][5];
	} else if (input === 3) {
		dest = convo[convP][6];
	}
	$( ".text" ).html( convo[dest][0] );
	$('.1').html(convo[dest][1]);
	$('.2').html(convo[dest][2]);
	$('.3').html(convo[dest][3]);
	convoCurrent = dest;

};

function updateHealthBar() {
	var newVal = cStatus.health/cStatus.maxHealth*50;
	$(".healthValue").css("width", newVal+"px");
};

function deathHandler() {
	cStatus = saveStatus;
	progressArray = saveProgress;
	current = saveCurrent;
	Cookies.set('progress', progressArray, { expires: 15, path: '/'});
	Cookies.set('current', next, { expires: 15, path: '/'});
};

var weapons = {
	club: {
			name:"club",
			text:100,
	  	icon:"club",
		damage:20,
	  	effect:"health",
		effectValue:30,
	  	effectTarget:"self",
		has:false,
	},
};

var enemies = {
	frutiger: {
			name:"frutiger",
			health:100,
	  	defense:20,
	  	food:2,
		attack:30,
	  	special:"health",
	  	specialValue:10,
		specialTarget:"self",
		yeildLevel:20,
		poisonFactor:1,
		maxHealth:100,
	},
};


