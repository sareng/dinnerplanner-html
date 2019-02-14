
<<<<<<< HEAD:js/view/selectDishListView.js
var  SelectDishListView = function (container, model) {
=======
var  MenuView = function (container, model) {

/*
>>>>>>> ce49359259094b5824c1bf8f704f12c8e4dbaa84:js/view/menuView.js
	this.update = function(model, changeDetails){
		if(changeDetails.changeType == "search") {
			this.updateDishList();
		}
	}.bind(this);
	model.addObserver(this.update);
*/

	//load from the API

	console.log("New era");

	model.getAllDishes().then(
		function(dishes){ dishes.forEach(d=> console.log(d.id + ' ' + d.title))}
	).catch( error => {
		console.error("");
	});


	this.loadDishes = function() {
		var allDishes = '';
		var card = [];
<<<<<<< HEAD:js/view/selectDishListView.js
		dishes.forEach(dish => {
			var imagePath = "images/" + dish.image;
			card.push(
				`<div id="dish${dish.id}card" class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
					<div id="dish${dish.id}" class="card text-center">
						<img id="dishImage" class="card-img-top" src="${imagePath}" alt="${dish.name}">
						<div class="card-body">
							<h5 class="card-title" id="dishTitle">${dish.name}</h5>
						</div>
					</div>
				</div>`);
=======
	/*	model.getAllDishes().then(
			function(dishes){ dishes.forEach(
				dish => {
					var imagePath = "https://spoonacular.com/recipeImages/" + dish.imageUrls;
					allDishes += '<div id="dish${dish.id}col" class="col-xs-12 col-sm-12 col-md-3 col-lg-3">' +
						'<div id="dish${dish.id}" class="card text-center">' +
						'<img id="dishImage" class="card-img-top" src="${imagePath}" alt="${dish.title}">' +
						'<div class="card-body">\n' +
						'<h5 class="card-title" id="dishTitle">${dish.title}</h5>' +
						'</div>' +
						'</div>' +
						'</div>'});
				} )}
		.catch( error => {
			console.error("");
>>>>>>> ce49359259094b5824c1bf8f704f12c8e4dbaa84:js/view/menuView.js
		});

		console.log(allDishes);*/
		return allDishes;
	}
/*

<<<<<<< HEAD:js/view/selectDishListView.js
	this.getDishCardId = function(dishId) {
		return "dish" + dishId; 
	}
	 this.getDishId = function(dishCardId) {
		return dishCardId.slice(4); 
	}
=======
	this.hideDish = function(id) {
		dishId = "dish" + id + "col";
		document.getElementById(dishId).style.display = "none";
>>>>>>> ce49359259094b5824c1bf8f704f12c8e4dbaa84:js/view/menuView.js

	this.hideDish = function(id) {
		container.find("#" + this.getDishCardId(id) + "card").hide();
	}

	this.showDish = function(id) {
<<<<<<< HEAD:js/view/selectDishListView.js
		container.find("#" + this.getDishCardId(id) + "card").show();
=======
		dishId = "dish" + id + "col";
		document.getElementById(dishId).style.display = "";
>>>>>>> ce49359259094b5824c1bf8f704f12c8e4dbaa84:js/view/menuView.js
	}

	this.updateDishList = function() {
		searchResult = model.getSearchResult();

		allDishes.map(dish => dish.id).forEach( id => {
			if(searchResult.includes(id)) {
				this.showDish(id);
			}
			else {
				this.hideDish(id);
			}
		});
	}
<<<<<<< HEAD:js/view/selectDishListView.js

	this.getAllCards = function() {
		dishes = [];
		allDishes.map(dish => dish.id).forEach( id => {
			dishes.push(this.getCard(id));
		});
		return dishes;
	}
	

	this.getCard = function(id) {
		return container.find("#" + this.getDishCardId(id));
	}
	
	container.html(this.loadDishes(allDishes));
=======
*/

	container.html(this.loadDishes());



	//container.html(request);
>>>>>>> ce49359259094b5824c1bf8f704f12c8e4dbaa84:js/view/menuView.js
}


 
