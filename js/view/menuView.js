
var  MenuView = function (container, model) {
	this.update = function(model, changeDetails){
	    if(changeDetails.changeType == "search") {
	    	console.log("search dets changed" + model.getSearchResult());
            this.updateDishList();
        }
	}.bind(this);
	model.addObserver(this.update);

	// load dishes from the model to search dish view
	var dishes = model.getAllDishesAllTypes();

	this.loadDishes = function() {
		var card = [];
		dishes.forEach(dish => {
			var imagePath = "images/" + dish.image;
			card.push(
				`<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
					<div class="card text-center" id="dish${dish.id}">
						<img id="dishImage" class="card-img-top" src="${imagePath}" alt="${dish.name}">
						<div class="card-body">
							<h5 class="card-title" id="dishTitle">${dish.name}</h5>
						</div>
					</div>
				</div>`);
		});
		return card.join("")
	}

	var cards = this.loadDishes();
	this.updateDishList = function() {
		dishes = [];
		searchResult = model.getSearchResult();
		searchResult.forEach( id => {
			dishes.push(model.getDish(id));
		})
		container.html(this.loadDishes());
	}
	
	container.html(cards);
}


 
