
var  MenuView = function (container, model) {
	this.update = function(model, changeDetails){
	    if(changeDetails.changeType == "search") {
            this.updateDishList();
        }
	}.bind(this);
	model.addObserver(this.update);

	// load dishes from the model to search dish view
	var allDishes = model.getAllDishesAllTypes();

	this.loadDishes = function(dishes) {
		var card = [];
		dishes.forEach(dish => {
			var imagePath = "images/" + dish.image;
			card.push(
				`<div id="dish${dish.id}col" class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
					<div id="dish${dish.id}" class="card text-center">
						<img id="dishImage" class="card-img-top" src="${imagePath}" alt="${dish.name}">
						<div class="card-body">
							<h5 class="card-title" id="dishTitle">${dish.name}</h5>
						</div>
					</div>
				</div>`);
		});
		return card.join("")
	}

	this.hideDish = function(id) {
		dishId = "dish" + id + "col"; 
		document.getElementById(dishId).style.display = "none";

	}
	this.showDish = function(id) {
		dishId = "dish" + id + "col"; 
		document.getElementById(dishId).style.display = "";
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
	
	container.html(this.loadDishes(allDishes));
}


 
