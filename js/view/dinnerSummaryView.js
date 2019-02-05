var DinnerSummaryView = function (container, model) {
	this.update = function(model, changeDetails){
	     // redraw just the portion affected by the changeDetails
	     // or remove all graphics in the view, read the whole model and redraw 
	} 
	model.addObserver(this.update);

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

	//footer = "<div class="row"> " + ""

	var footer = 
		`<hr>
		<div style="text-align: center"> Total:<div id="mealTotalCost">${model.getTotalMenuPrice()} SEK</div><br/>
		<button id="printButton" style="text-align: center" type="button" class="btn">Print Full Recipe</button>
		</div><br />`;

	var cards = card.join("");
	container.html("<div class=\"row menu\">" + cards + "</div>" + footer);

}