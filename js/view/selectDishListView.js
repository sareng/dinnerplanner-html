var  SelectDishListView = function (container,model, genController) {


	//var view = this;
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
	}

	model.addObserver(this.update);

	// SEARCH BAR

	this.generateDishTypes = function() {
		var dishTypes = model.getDishTypes();
		var dishTypesHtml = [];

		dishTypes.forEach(dishType => {
			dishTypesHtml.push(`<option value="${dishType.value}"> ${dishType.name} </option>`);
		});
		return dishTypesHtml.join("");
	}

	var dishTypes = this.generateDishTypes();

	var content =
		`<div class="col-xs-12 col-sm-12 col-md-4 col-lg-6">
				<form>
					<div class="form-group">
						<input type="text" class="form-control" id="searchDishInput" placeholder="FIND A DISH...">
					</div>
				</form>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<form>
					<div class="form-group">
						<select class="form-control" id="dishTypeSelect">
							${dishTypes}
						</select>
					</div>
				</form>

			</div>
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-2">
				<button id="searchButton" type="button" class="btn">Search</button>
			</div>`;


	//loading bar while api works

	console.log('loading');
	container.html(model.loader());


	//load from the API
	this.loadDishes = function() {
		var cards = [];
		var allDishes = ' ';
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

			console.log('done loading...');
			container.html(content + allDishes);

//			ids.forEach(id => {
//				new SelectDishListController(genController, view, model, id);
//	    	});


    	})

	}

	this.loadDishes();

	this.test = function () {
		console.log("test");
	}

	this.getSearchButton = function() {
		return container.find("#searchButton");;
	}

	this.getSearchDishInput = function() {
		return container.find("#searchDishInput");
	}

	this.getDishTypeSelect = function() {
		return container.find("#dishTypeSelect");
	}



	/*

        this.getDishCardId = function(dishId) {
            return "sh" + dishId;
        }

        /*
         this.getDishId = function(dishCardId) {
            return dishCardId.slice(4);
        }

        this.hideDish = function(id) {
            container.find("#" + this.getDishCardId(id) + "card").hide();
        }

        this.showDish = function(id) {
            container.find("#" + this.getDishCardId(id) + "card").show();
        }


        this.getCard = function(dishId) {
            return container.find("#" + this.getDishCardId(dishId));
        }

        // container.html(this.loadDishes(allDishes));
    */

	//container.html(request);
}


 
