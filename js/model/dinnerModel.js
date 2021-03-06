

var DinnerModel = function() {

    var observers = [];

    this.addObserver = function(observer){ observers.push(observer); };

    this.notifyObservers = function(changeDetails){
        for(var i=0; i<observers.length; i++)
             observers[i](this, changeDetails); // we assume that observers[i] is a function, so we call it like observers[i](parameters)
    };

    this.removeObserver = function(observer){  /* remove observer from array */};


	var cache = [];

	this.getCache = function (id) {

		for (let i = 0; i < cache.length; i++){
			if (cache[i].id === id) {
				return cache[i];
			}
		}
	}

	this.pushCache = function(dish) {
		cache.push(dish);

		/*	dish.extendedIngredients.forEach(ingredient => {


                if (ingredientCache.includes(ingredient.id)) {
                    console.log("we got this thing")
                }else {
                    this.getIngredient(ingredient.id).then(
                        function(temp) {
                        ingredientCache.push(temp) }
                    )}

            })

    */
	}

	this.numberOfGuests = 2;
	this.currentDish = 1;
	this.menu = [];
	this.menuImages = [];
	this.dishTypes = [{value:"all",name:"All"},{value:"main dish",name:"Main Course"},{value:"side dish",name:"Side Dish"},{value:"starter",name:"Appetizer"},{value:"dessert",name:"Dessert"}];
	this.searchResult = [];

	this.setNumberOfGuests = function(num) {
		this.numberOfGuests = num;
		this.notifyObservers({changeType: "guests", newValue:this.numberOfGuests});
	};

	this.getNumberOfGuests = function() {
		return this.numberOfGuests;
	};

	this.setCurrentDish = function(id) {
		this.currentDish = id;
		this.notifyObservers({changeType: "dish", newValue:this.currentDish});
	};

	this.getCurrentDish = function() {
		return this.currentDish;
	};

	this.setSearchResult = function(result) {
		this.searchResult = result;
		this.notifyObservers({changeType: "search", newValue:this.searchResult});
	};

	this.getSearchResult = function() {
		return this.searchResult;
	};

	this.addDishType = function(type) {
		this.dishTypes.push(type);
		this.notifyObservers({changeType: "dishTypes", newValue:this.dishTypes});
	};

	this.removeDishType = function(type) {
		this.dishTypes.splice(this.dishTypes.indexOf(type),1);
		this.notifyObservers({changeType: "dishTypes", newValue:this.dishTypes});
	};

	this.getDishTypes = function() {
		return this.dishTypes;
	};

	//Returns the dish that is on the menu for selected type
	this.getSelectedDish = function(type) {
		//return this.menu.filter(dishId => {
		//	return this.getDish(dishId).type == type;
		//});
	};

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
	   return this.menu;
	};

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		/*
		var allIngredients = [];
		this.menu.map(id => this.getDish(id).ingredients).forEach(dish => {
			dish.forEach(ingredient => {
				allIngredients.push(ingredient.name);
			})
		});*/
	};

	//Returns the total price of the passed dish (all the ingredients multiplied by number of guests).
	this.getTotalDishPrice = function(id) {
	//	var totalPrice = 0;
	//	var dish = this.getDish(id);
	//	for(key in dish.ingredients) {
	//		totalPrice += dish.ingredients[key].price;
	//	}
	//	return totalPrice * this.numberOfGuests;
	};

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var totalPrice = 0;
		this.menu.forEach(dish => {
			totalPrice += dish.pricePerServing;
		});
		return totalPrice * this.numberOfGuests;
	};


	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(dish) {
    console.log("ADDING: " + dish.pricePerServing);
		if(!this.menu.includes(dish)) {
		  console.log("not matching");
		  this.menu.push(dish);
		  this.menuImages.push(this.getSearchResult().find(dish => dish.id == this.getCurrentDish()));
		  console.log(this.getSearchResult().find(dish => dish.id == this.getCurrentDish()));
		  this.notifyObservers({changeType: "menu", newValue:this.getFullMenu()});
		}
	};

	this.getAllMenuImages = function() {
		return this.menuImages;
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		this.menu.splice(this.menu.indexOf(id),1);
		this.notifyObservers({changeType: "menu", newValue:this.getFullMenu()});
	};

	//returns all dishes, no type needed
	this.getAllDishesAllTypes = function () {
		return dishes;
	};

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned

	this.passHeader = function () {
		return httpOptions.headers["X-Mashape-Key"];
	};
	this.passHeaderTwo = function () {
		return  httpOptions.headers["Accept"];
	};

	this.getAllDishes = function (type = 'all',filter='') {
		const url = 'http://sunset.nada.kth.se:8080/iprog/group/5/recipes/search?number=10&offset=0&type='+ type + '&query=' + filter;

		return fetch(url,{
			headers:{
				'X-Mashape-Key': API_KEY,
			}
		})
			.then(response => response.json())
			.then(data => data.results)
			// .then(data => console.log(data))
			// .then(data => this.setSearchResult())
			.catch(errorOutput)

	};

	this.getDishDummy = function (id = 1) {
		return dishes[1];
	}

	//function that returns a dish of specific ID
	this.getDish = function (id = '479101') {
		const url = 'http://sunset.nada.kth.se:8080/iprog/group/5/recipes/'+ id + '/information';

		return fetch(url,{
			headers:{
				'X-Mashape-Key': API_KEY,
			}
		})
			.then(response => response.json())
			.then(data => data)
			.catch(errorOutput)
	};

  this.getDishFromSearchResult = function(id) {
    return this.searchResult.find(dish => dish.id == id);
  }


	this.loader = function() {
		let html = '<div class="row justify-content-center align-items-center">' +
			'<img src="images/loadingRing.gif"></div>'
		return html;
	}


	const handleResponse = (response) => {
		if(response.ok){
			console.log('loading...')
			return response;
		}
		else {
			throw response;
		}
	}

	const errorOutput = (error) => {
		console.error('getAllDishes() API Error:', error.message || error);
	}


	// the dishes variable contains an array of all the
	// dishes in the database. each dish has id, name, type,
	// image (name of the image file), description and
	// array of ingredients. Each ingredient has name,
	// quantity (a number), price (a number) and unit (string
	// defining the unit i.e. "g", "slices", "ml". Unit
	// can sometimes be empty like in the example of eggs where
	// you just say "5 eggs" and not "5 pieces of eggs" or anything else.
	var dishes = [{
		'id':1,
		'title':'French toast',
		'type':'starter',
		'imageUrls':'toast.png',
		'instructions':"In a large mixing bowl, beat the eggs. Add the milk, brown sugar and nutmeg; stir well to combine. Soak bread slices in the egg mixture until saturated. Heat a lightly oiled griddle or frying pan over medium high heat. Brown slices on both sides, sprinkle with cinnamon and serve hot.",
		'ingredients':[{
			'name':'eggs',
			'quantity':0.5,
			'unit':'',
			'price':10
			},{
			'name':'milk',
			'quantity':30,
			'unit':'ml',
			'price':6
			},{
			'name':'brown sugar',
			'quantity':7,
			'unit':'g',
			'price':1
			},{
			'name':'ground nutmeg',
			'quantity':0.5,
			'unit':'g',
			'price':12
			},{
			'name':'white bread',
			'quantity':2,
			'unit':'slices',
			'price':2
			}]
		},{
		'id':2,
		'name':'Sourdough Starter',
		'type':'starter',
		'image':'sourdough.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'active dry yeast',
			'quantity':0.5,
			'unit':'g',
			'price':4
			},{
			'name':'warm water',
			'quantity':30,
			'unit':'ml',
			'price':0
			},{
			'name':'all-purpose flour',
			'quantity':15,
			'unit':'g',
			'price':2
			}]
		},{
		'id':3,
		'name':'Baked Brie with Peaches',
		'type':'starter',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'round Brie cheese',
			'quantity':10,
			'unit':'g',
			'price':8
			},{
			'name':'raspberry preserves',
			'quantity':15,
			'unit':'g',
			'price':10
			},{
			'name':'peaches',
			'quantity':1,
			'unit':'',
			'price':4
			}]
		},{
		'id':100,
		'name':'Meat balls',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Preheat an oven to 400 degrees F (200 degrees C). Place the beef into a mixing bowl, and season with salt, onion, garlic salt, Italian seasoning, oregano, red pepper flakes, hot pepper sauce, and Worcestershire sauce; mix well. Add the milk, Parmesan cheese, and bread crumbs. Mix until evenly blended, then form into 1 1/2-inch meatballs, and place onto a baking sheet. Bake in the preheated oven until no longer pink in the center, 20 to 25 minutes.",
		'ingredients':[{
			'name':'extra lean ground beef',
			'quantity':115,
			'unit':'g',
			'price':20
			},{
			'name':'sea salt',
			'quantity':0.7,
			'unit':'g',
			'price':3
			},{
			'name':'small onion, diced',
			'quantity':0.25,
			'unit':'',
			'price':2
			},{
			'name':'garlic salt',
			'quantity':0.7,
			'unit':'g',
			'price':2
			},{
			'name':'Italian seasoning',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'dried oregano',
			'quantity':0.3,
			'unit':'g',
			'price':3
			},{
			'name':'crushed red pepper flakes',
			'quantity':0.6,
			'unit':'g',
			'price':3
			},{
			'name':'Worcestershire sauce',
			'quantity':6,
			'unit':'ml',
			'price':7
			},{
			'name':'milk',
			'quantity':20,
			'unit':'ml',
			'price':4
			},{
			'name':'grated Parmesan cheese',
			'quantity':5,
			'unit':'g',
			'price':8
			},{
			'name':'seasoned bread crumbs',
			'quantity':15,
			'unit':'g',
			'price':4
			}]
		},{
		'id':101,
		'name':'MD 2',
		'type':'main dish',
		'image':'bakedbrie.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':15,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':10,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':102,
		'name':'MD 3',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ingredient 1',
			'quantity':2,
			'unit':'pieces',
			'price':8
			},{
			'name':'ingredient 2',
			'quantity':10,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':5,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':103,
		'name':'MD 4',
		'type':'main dish',
		'image':'meatballs.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ingredient 1',
			'quantity':1,
			'unit':'pieces',
			'price':4
			},{
			'name':'ingredient 2',
			'quantity':12,
			'unit':'g',
			'price':7
			},{
			'name':'ingredient 3',
			'quantity':6,
			'unit':'ml',
			'price':4
			}]
		},{
		'id':200,
		'name':'Chocolat Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':201,
		'name':'Vanilla Ice cream',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		},{
		'id':202,
		'name':'Strawberry',
		'type':'dessert',
		'image':'icecream.jpg',
		'description':"Here is how you make it... Lore ipsum...",
		'ingredients':[{
			'name':'ice cream',
			'quantity':100,
			'unit':'ml',
			'price':6
			}]
		}
	];

};
