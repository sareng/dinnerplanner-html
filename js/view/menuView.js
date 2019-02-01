
var  MenuView = function (container, model) {

	// load dishes from the model to search dish view
	var allDishes = model.getAllDishesAllTypes();
	var card = [];
	allDishes.forEach(dish => {
		card.push("<div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3\">",
			"<div class=\"card text-center\" id=\"dish", dish.id, "\">",
			"<img id=\"dishImage\" class=\"card-img-top\" src=\"images/",dish.image,"\" alt=\"",dish.name,"\">",
			"<div class=\"card-body\">",
			"<h5 class=\"card-title\" id=\"dishTitle\">",dish.name,"</h5>",
			"</div>",
			"</div>",
			"</div>");
	});
	container.html(card.join(""));
}


 
