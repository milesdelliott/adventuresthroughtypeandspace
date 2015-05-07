function preloadimages(arr){
	var newimages=[]
	var arr=(typeof arr!="object")? [arr] : arr //force arr parameter to always be an array
	for (var i=0; i<arr.length; i++){
		newimages[i]=new Image()
		newimages[i].src=arr[i]
	}
}



preloadimages(['backgrounds/cursor.png', 'backgrounds/hirez.png', 'backgrounds/swamp.png', 'backgrounds/swamp2.png', 'backgrounds/crossroads.png', 'backgrounds/city.png', 'backgrounds/shop.png', 'backgrounds/gift.png', 'backgrounds/bodoni.png', 'backgrounds/fashionshow.png', 'backgrounds/slabtown.png', 'backgrounds/moon.png', 'backgrounds/slabtownnoose.png', 'foregrounds/spaceship.png', 'foregrounds/frutiger1-01.png', 'foregrounds/frutiger2-01.png', 'foregrounds/frutiger3-01.png'])
function switchBoard(input, current, progress) {
	var next = "intro";
	
	if (cStatus.health <= 0) {
			next = "death";
	}
	else if (current === "intro") {
		if (input === 1) {
			next = "anim";
		}
	}
	else if (current === "anim") {
		if (input === 1) {
			next = "character";
		}
	}
	else if (current === "hospital") {
		//Inital Hospital

		//See the Cursor
		if (input === 1) {
				progressArray[10] = input;
				next = "cursor";
		}
	}
	else if (current === "cursor") {
		//Begin the Quest
		progressArray[11] = input;
		//leave the city
		if (input === 1) {
			
			next = "kitchen";
		}
		 if (input === 2) {
			next = "kitchen";
		}
		 if (input === 3) {
			next = "kitchen";
		}
	}
	else if (current === "character") {
		//Begin the Quest
		cStatus.health = cStatus.maxHealth;
		//leave the city
		if (input === 1) {
			progressArray[12] = input;
			charName = "Dan";
			next = "hospital";
		}
		if (input === 2) {
			progressArray[12] = input;
			next = "hospital";
			charName = "Wendy";
		}
	}
	else if (current === "kitchen") {
		progressArray[66] = input;
		//Go to swamp
		if (input === 1) {
			next = "kitchen_cabinet";
		}
	}
	else if (current === "kitchen_cabinet") {
		//Leaving Hi Rez
		progressArray[70] = input;
		//Go to swamp
		if (input === 1) {
			next = "kitchen_pantry";
			addFood("granola");
		}
		if (input === 2) {
			next = "kitchen_pantry";
			addFood("cheezits");
		}
		if (input === 3) {
			next = "kitchen_pantry";
			addFood("gummybears");
		}
	}
	else if (current === "kitchen_pantry") {
		//Leaving Hi Rez
		progressArray[71] = input;
		//Go to swamp
		if (input === 1) {
			next = "kitchen_fridge";
			addFood("chips");
		}
		if (input === 2) {
			next = "kitchen_fridge";
			addFood("cookie");
		}
		if (input === 3) {
			next = "kitchen_fridge";
			addFood("trailmix");
		}
	}
	else if (current === "kitchen_fridge") {
		//Leaving Hi Rez
		progressArray[72] = input;
		//Go to swamp
		if (input === 1) {
			next = "kitchen2";
			addFood("pizza");
		}
		if (input === 2) {
			next = "kitchen2";
			addFood("soda");
		}
		if (input === 3) {
			next = "kitchen2";
			addFood("orange");
		}
	}
	else if (current === "kitchen2") {
		if (input === 1) {
			next = "closet";
		}
	}
		else if (current === "closet") {
		//Leaving Hi Rez
		progressArray[67] = input;
		//Go to swamp
		if (input === 1) {
			next = "hirez";
		}
		if (input === 2) {
			next = "hirez";
		}
		if (input === 3) {
			next = "hirez";
		}
	}
	else if (current === "hirez") {
		//Leaving Hi Rez
		
		//Go to swamp
		if (input === 1) {
			progressArray[13] = input;
			next = "swamp";
		}
	}
	else if (current === "swamp") {
		//Gross Swamp
		
		//Swamp2
		if (input === 1) {
			progressArray[14] = input;
			next = "swamp2";
		}
	}
	else if (current === "swamp2") {
		//Gross Swamp
		
		//crossroads
		if (input === 1) {
			progressArray[15] = input;
			next = "para";
		}
	}
	else if (current === "para") {
		//Gross Swamp
		
		//crossroads
		if (input === 1) {
			progressArray[16] = input;
			next = "para2";
		}
		if (input === 2) {
			progressArray[16] = input;
			next = "crossroads";
		}
	}
	else if (current === "para2") {
		//Gross Swamp
		
		//crossroads
		if (input === 1) {
			next = "crossroads";
		}
		if (input === 2) {
			next = "crossroads";
		}
	}
	else if (current === "crossroads") {
		//crossroads

		//city a
		if (input === 1) {
			progressArray[17] = input;
			next = "city_intro";
		}
		
		//city b
		if (input === 2) {
			progressArray[17] = input;
			next = "city_intro";
		}
	}
	else if (current === "city_intro") {
		//Gross Swamp
		
		//crossroads
		if (input === 1) {
			next = "city";
		}
	}
	else if (current === "city") {
		//city
		
		//go to shop
		if (input === 1) {
			progressArray[18] = input;
			next = "frutiger";
		}
		
		//get the gift
		if (input === 2) {
			progressArray[18] = input;
			next = "history";
		}
		//fight
		if (input === 3) {
			progressArray[18] = input;
			next = "shop";
		}
	}
	else if (current === "frutiger") {
		//city
		//fight
		if (input === 1) {
			progressArray[19] = input;
			next = "frutiger2";
		}
		if (input === 2) {
			progressArray[19] = input;
			next = "frutiger2";
		}
		if (input === 3) {
			progressArray[19] = input;
			next = "frutiger2";
		}
	}
	else if (current === "frutiger2") {
		//city
		//fight
		if (input === 1) {
			progressArray[20] = input;
			next = "byecursor";
		}
		if (input === 2) {
			progressArray[20] = input;
			next = "byecursor";
		}
		if (input === 3) {
			progressArray[20] = input;
			next = "byecursor";
		}
	}
	else if (current === "history") {
		//got the gift
		
		//go to bodoni
		if (input === 1) {
			progressArray[21] = input;
			next = "city";
		}
		if (input === 2) {
			progressArray[21] = input;
			next = "city";
		}
	}
	else if (current === "shop") {
		//got the shop
		
		//go to space
		if (input === 1) {
			progressArray[22] = input;
			next = "city";
		}
		if (input === 2) {
			progressArray[22] = input;
			next = "city";
		}
	}
	else if (current === "random2") {
		//Spaceship City
		
		//go to Space
		if (input === 1) {
			progressArray[23] = input;
			next = "byecursor";
		}
		if (input === 2) {
			progressArray[23] = input;
			next = "byecursor";
		}
		if (input === 3) {
			progressArray[23] = input;
			next = "byecursor";
		}
	}
	else if (current === "byecursor") {
		//Moon
		
		//go to Bodoni
		if (input === 1) {
			progressArray[24] = input;
			next = "cliff";
		}
		if (input === 2) {
			progressArray[24] = input;
			next = "cliff";
		}
		if (input === 3) {
			progressArray[24] = input;
			next = "cliff";
		}
	}
	else if (current === "cliff") {
		//Moon
		
		progressArray[69] = input;
		if (input === 1) {
			next = "cliff";
		}
		if (input === 2) {
			next = "flyingmachine";
		}
		if (input === 3) {
			next = "actii";
		}
	}
	else if (current === "flyingmachine") {
		//Moon
		
		//go to Bodoni
		if (input === 1) {
			progressArray[25] = input;
			next = "actii";
		}
		if (input === 2) {
			progressArray[25] = input;
			next = "actii";
		}
		if (input === 3) {
			progressArray[25] = input;
			next = "actii";
		}
	}
	else if (current === "actii") {
		//Moon
		
		//go to Bodoni
		if (input === 1) {
			next = "3merchants";
		}
	}
	else if (current === "3merchants") {
		//Bodoni
		
		//go to Fashion Show
		if (input === 1) {
			progressArray[26] = input;
			next = "swiss";
		}
		if (input === 2) {
			progressArray[26] = input;
			next = "swiss";
		}
		if (input === 3) {
			progressArray[26] = input;
			next = "swiss";
		}
	}
	else if (current === "swiss") {
		//at Fashion Show
		
		//go to slabtown
		if (input === 1) {
			progressArray[27] = input;
			next = "bank";
		}
		if (input === 2) {
			progressArray[27] = input;
			next = "shop_swiss";
		}
		if (input === 3) {
			progressArray[27] = input;
			next = "history_swiss";
		}
	}
	else if (current === "shop_swiss") {
		//at Fashion Show
		
		//go to slabtown
		if (input === 1) {
			progressArray[28] = input;
			next = "swiss";
		}
	}
	else if (current === "history_swiss") {
		//at Fashion Show
		
		//go to slabtown
		if (input === 1) {
			progressArray[29] = input;
			next = "swiss";
		}
	}
	else if (current === "bank") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[30] = input;
			next = "bank_inner";
		}
	}
	 else if (current === "bank_inner") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[68] = input;
			next = "swiss_designer";
		}
	}
	else if (current === "swiss_designer") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[31] = input;
			next = "mountain";
		}
	}
	else if (current === "mountain") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[32] = input;
			next = "port_gill";
		}
		 if (input === 2) {
			progressArray[32] = input;
			next = "port_futura";
		}
		 if (input === 3) {
			progressArray[32] = input;
			next = "port_eurostile";
		}
	}
	else if (current === "port_gill") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[33] = input;
			next = "voyage_gill";
		}
		if (input === 2) {
			progressArray[33] = input;
			next = "voyage_gill";
		}
		if (input === 3) {
			progressArray[33] = input;
			next = "mountain";
		}
	}
	else if (current === "voyage_gill") {
		next = "death";
	}
	else if (current === "port_futura") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[34] = input;
			next = "moon";
		}
		if (input === 2) {
			progressArray[34] = input;
			next = "moon";
		}
		if (input === 3) {
			progressArray[34] = input;
			next = "mountain";
		}
	}
	else if (current === "port_eurostile") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[35] = input;
			next = "voyage_eurostile";
		}
		if (input === 2) {
			progressArray[35] = input;
			next = "voyage_eurostile";
		}
		 if (input === 3) {
			progressArray[35] = input;
			next = "mountain";
		}
	}
	else if (current === "moon") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[36] = input;
			next = "moon_up";
		}
	}
	else if (current === "voyage_eurostile") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[37] = input;
			next = "bodoni";
		}
	}
	else if (current === "moon_up") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[38] = input;
			next = "bodoni";
		}
	}
	else if (current === "bodoni") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[39] = input;
			next = "fashionshow";
		}
		 if (input === 2) {
			progressArray[39] = input;
			next = "fashion_school";
		}
	}
	else if (current === "fashion_school") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[39] = input;
			next = "bodoni";
		}
	}
	else if (current === "fashionshow") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[39] = input;
			next = "prize";
		}
	}
	else if (current === "prize") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[40] = input;
			next = "slabtown";
		}
	}
	else if (current === "random3") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[41] = input;
			next = "slabtown";
		}
	}
		else if (current === "slabtown") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[42] = input;
			next = "history_slabtown";
		}
		if (input === 2) {
			progressArray[42] = input;
			next = "shop_slabtown";
		}
		if (input === 3) {
			progressArray[42] = input;
			next = "slab_sheriff";
		}
	}
	else if (current === "history_slabtown") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[43] = input;
			next = "slabtown";
		}
	}
	else if (current === "shop_slabtown") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[45] = input;
			next = "slabtown";
		}
	}
	else if (current === "slab_sheriff") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[46] = input;
			next = "slabtownnoose";
		}
	}
	else if (current === "slabtownnoose") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[47] = input;
			next = "escape_slabtown";
		}
	}
	else if (current === "escape_slabtown") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[48] = input;
			next = "actiii";
		}
	}
	else if (current === "actiii") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[49] = input;
			next = "forest";
		}
	}
	else if (current === "actiii") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[50] = input;
			next = "forest";
		}
	}
	else if (current === "actiii") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[51] = input;
			next = "forest";
		}
	}
	else if (current === "random4") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[52] = input;
			next = "forest";
		}
	}
	else if (current === "forest") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[53] = input;
			next = "baskervillage";
		}
	}
	else if (current === "baskervillage") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[54] = input;
			next = "library";
		}
	}
	else if (current === "library") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[55] = input;
			next = "castle_village";
		}
	}
	else if (current === "castle_village") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[56] = input;
			next = "shop_village";
		}
		if (input === 2) {
			progressArray[56] = input;
			next = "history_village";
		}
		if (input === 3) {
			progressArray[56] = input;
			next = "castle_entrance";
		}
	}
	else if (current === "shop_village") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[57] = input;
			next = "castle_village";
		}
	}
	else if (current === "history_village") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[58] = input;
			next = "castle_village";
		}
	}
	else if (current === "castle_entrance") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[59] = input;
			next = "castle_fight1";
		}
	}
	else if (current === "castle_fight1") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[60] = input;
			next = "gutenberg";
		}
	}
	else if (current === "gutenberg") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[61] = input;
			next = "castle_fight2";
		}
	}
	else if (current === "castle_fight2") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[62] = input;
			next = "victory";
		}
	}
	else if (current === "victory") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[63] = input;
			next = "decision";
		}
	}
	else if (current === "decision") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[63] = input;
			next = "scepter";
		}
		if (input === 2) {
			progressArray[63] = input;
			next = "scepter";
		}
	}
	else if (current === "scepter") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[64] = input;
			next = "end";
		}
	}
	else if (current === "end") {
		//at slabtown
		
		 
		if (input === 1) {
			progressArray[65] = input;
			next = "credits";
		}
	}
	$( "#wrapper" ).load( next + ".html" );
	cStatus.health = parseInt(cStatus.health,10) - 10;
	$('.health').html(cStatus.health);
	$('.healthMax').html(cStatus.maxHealth);
	updateHealthBar();
	Cookies.set('progress', progressArray, { expires: 15, path: '/'});
	Cookies.set('current', next, { expires: 15, path: '/'});
}
