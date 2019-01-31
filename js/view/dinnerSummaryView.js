var DinnerSummaryView = function (container, model) {


	var allDishes = model.getAllDishesAllTypes();
	var card = [];
	allDishes.forEach(dish => {
		card.push("<div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3\">",
			"<div class=\"card text-center\">",
			"<img id=\"dishImage\" class=\"card-img-top\" src=\"images/",dish.image,"\" alt=\"",dish.name,"\">",
			"<div class=\"card-body\">",
			"<h5 class=\"card-title\" id=\"dishTitle\">",dish.name,"</h5>",
			"</div>",
			"</div>",
			"</div>");
	});



	//footer = "<div class=\"row\"> " + ""

	var footer = "<hr>" +
		"<div style=\"text-align: center\">" +
		"Total:<div id=\"mealTotalCost\">0.00 SEK</div><br/>" +
		"<button style=\"text-align: center\" type=\"button\" class=\"btn\">Print Full Recipe</button>" +
		"</div><br />";


	container.html("<div class=\"row menu\">" + card.join("") +"</div>" + footer);

}