var  SelectDishListView = function (container,model, genController) {


	var view = this;
/*
	this.update = function(model, changeDetails){
		if(changeDetails.changeType == "search") {
			this.updateDishList();
		}
	}.bind(this);
	model.addObserver(this.update);

*/
	this.update = function(model, changeDetails){
		// redraw just the portion affected by the changeDetails
		// or remove all graphics in the view, read the whole model and redraw
		if(changeDetails.changeType == "search") {
			console.log("search array: " + model.getSearchResult());
		}
	}

	model.addObserver(this.update);

	//loading bar while api works

	console.log('loading');
	container.html(model.loader());


	//load from the API
	this.loadDishes = function(type = '', filter = 'all') {
		var cards = [];
		var allDishes = ' ';
		var ids = [];
		model.getAllDishes(type, filter).then(
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

			console.log('done loading...');
			console.log();
			container.html(allDishes);

			ids.forEach(id => {
				new SelectDishListController(genController, view, model, id);
	    	});

    	})

	}

	this.loadDishes();

	this.getCard = function(dishId) {
            return container.find("#dish" + dishId);
        }

	this.searchRecipes = function (type, filter) {
		container.html(model.loader());
		this.loadDishes(type, filter);
	}

}
