var  SelectDishListView = function (container, model, genController) {
	var view = this;

	this.update = function(model, changeDetails){
		if(changeDetails.changeType == "search") {
			this.updateDishList();
		}
	}.bind(this);
	model.addObserver(this.update);


	//load from the API
	
	// var allDishes = '';
	this.loadDishes = function() {
	// this.loadDishes = function(dishes) {
		
		var cards = [];
		var allDishes = '';
		var ids = [];
		model.getAllDishes().then(
			function(dishes){ 
				dishes.forEach(dish => {
					var imagePath = "https://spoonacular.com/recipeImages/" + dish.imageUrls;
					var dishId = "dish" + dish.id;
					ids.push(dish.id);
					cards.push(
						`<div id="${dishId}card" class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
							<div id="${dishId}" class="card text-center">
								<img id="dishImage" class="card-img-top" src="${imagePath}" alt="${dish.title}">
								<div class="card-body">
									<h5 class="card-title" id="dishTitle">${dish.title}</h5>
								</div>
							</div>
						</div>`)})

			allDishes = cards.join("");
			// console.log(allDishes);
			// return card.join("")
			// return allDishes;

			container.html(allDishes);

			ids.forEach(id => {
				new SelectDishListController(genController, view, model, id);
	    	});
    	})
		// model.getAllDishes().then(
		// 	function(dishes){ dishes.forEach(
		// 		dish => { 
		// 			var imagePath = "https://spoonacular.com/recipeImages/" + dish.imageUrls;
		// 			allDishes += '<div id="dish${dish.id}card" class="col-xs-12 col-sm-12 col-md-3 col-lg-3">' +
		// 				'<div id="dish${dish.id}" class="card text-center">' +
		// 				'<img id="dishImage" class="card-img-top" src="${imagePath}" alt="${dish.title}">' +
		// 				'<div class="card-body">\n' +
		// 				'<h5 class="card-title" id="dishTitle">${dish.title}</h5>' +
		// 				'</div>' +
		// 				'</div>' +
		// 				'</div>'})})
		// .catch( error => {
		// 	console.error("");
		// });
	}

	this.getDishCardId = function(dishId) {
		return "dish" + dishId; 
	}
	 this.getDishId = function(dishCardId) {
		return dishCardId.slice(4); 
	}

	this.hideDish = function(id) {
		container.find("#" + this.getDishCardId(id) + "card").hide();
	}

	this.showDish = function(id) {
		container.find("#" + this.getDishCardId(id) + "card").show();
	}

	// this.updateDishList = function() {
	// 	searchResult = model.getSearchResult();

	// 	allDishes.map(dish => dish.id).forEach( id => {
	// 		if(searchResult.includes(id)) {
	// 			this.showDish(id);
	// 		}
	// 		else {
	// 			this.hideDish(id);
	// 		}
	// 	});
	// }

	// this.getAllCards = function() {
	// 	dishes = [];
	// 	allDishes.map(dish => dish.id).forEach( id => {
	// 		dishes.push(this.getCard(id));
	// 	});
	// 	return dishes;
	// }
	

	this.getCard = function(dishId) {
		return container.find("#" + this.getDishCardId(dishId));
	}
	
	// container.html(this.loadDishes(allDishes));

	this.loadDishes();



	//container.html(request);
}


 
