var DinnerSummaryView = function (container, model) {
	this.update = function(model, changeDetails){
        if(changeDetails.changeType == "menu") {
            this.changeMenu();
        }
        else if(changeDetails.changeType == "guests") {
            this.changeNumberOfGuests();
            this.generateDishCards();
        }
	}.bind(this)
	model.addObserver(this.update);

	this.generateDishCards = function() {
		var allDishes = model.getFullMenu();
		var allImages = model.getAllMenuImages();
		var card = [];
		let i = 0;
		allDishes.forEach(dish => {
		    var imagePath = "https://spoonacular.com/recipeImages/" + allImages[i].imageUrls;
		    i++;
		    var dishTotal = dish.pricePerServing * model.getNumberOfGuests();
		    console.log(dish.imageUrls);
			card.push(
				`<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
					<div class="card text-center">
						<img id="dishImage" class="card-img-top" src="${imagePath}" alt="${dish.title}">
						<div class="card-body">
							<h5 class="card-title" id="dishTitle">${dish.title}</h5>
							<p> ${dishTotal}</p>
						</div>
					</div>
				</div>`);
		});
		return card.join("");
	}
	


	var footer = 
		`<hr>
		<div style="text-align: center"> Total:<div id="mealSummaryTotalCost">${model.getTotalMenuPrice()} SEK</div><br/>
		<button id="printButton" style="text-align: center" type="button" class="btn">Print Full Recipe</button>
		</div><br />`;

	var cards = this.generateDishCards();
	container.html("<div id=\"dishCards\" class=\"row menu\">" + cards + "</div>" + footer);

    this.changeNumberOfGuests = function() {
        container.find("#mealSummaryTotalCost")[0].innerHTML = model.getTotalMenuPrice() + " SEK";
        // fix for top nr of people and ind dish prices

    }
    this.changeMenu = function() {
        container.find("#dishCards")[0].innerHTML = this.generateDishCards();
        container.find("#mealSummaryTotalCost")[0].innerHTML = model.getTotalMenuPrice() + " SEK";
    }

    this.getPrintButton = function() {
		return container.find("#printButton")[0];
	}

}