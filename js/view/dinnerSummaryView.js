var DinnerSummaryView = function (container, model) {
	this.update = function(model, changeDetails){
        if(changeDetails.changeType == "menu") {
            this.changeMenu();
        }
        else if(changeDetails.changeType == "guests") {
            this.changeNumberOfGuests();
        }
	}.bind(this)
	model.addObserver(this.update);

	this.generateDishCards = function() {
		var allDishes = model.getFullMenu();
		var card = [];
		allDishes.forEach(dish => {
			card.push(
				`<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
					<div class="card text-center">
						<img id="dishImage" class="card-img-top" src="images/${dish.image}" alt="${dish.name}">
						<div class="card-body">
							<h5 class="card-title" id="dishTitle">${dish.name}</h5>
						</div>
					</div>
				</div>`);
		});
		return card.join("");
	}
	

	//footer = "<div class="row"> " + ""

	var footer = 
		`<hr>
		<div style="text-align: center"> Total:<div id="mealSummaryTotalCost">${model.getTotalMenuPrice()} SEK</div><br/>
		<button id="printButton" style="text-align: center" type="button" class="btn">Print Full Recipe</button>
		</div><br />`;

	var cards = this.generateDishCards();
	container.html("<div id=\"dishCards\" class=\"row menu\">" + cards + "</div>" + footer);

    this.changeNumberOfGuests = function() {
        document.getElementById("mealSummaryTotalCost").innerHTML = model.getTotalMenuPrice() + " SEK";
        // fix for top nr of people and ind dish prices

    }
    this.changeMenu = function() {
        document.getElementById("dishCards").innerHTML = this.generateDishCards();
        document.getElementById("mealSummaryTotalCost").innerHTML = model.getTotalMenuPrice() + " SEK";
        console.log("menu.length: " + model.getFullMenu().length + " price: " + model.getTotalMenuPrice());
    }

}