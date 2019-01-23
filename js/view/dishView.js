
var DishView = function (container, model) {
	
	container.find('#mealTotalCost').html(model.getTotalMenuPrice() + " SEK");
	container.find('#ingrHdr').html("INGREDIENTS FOR " + model.numberOfGuests + " PEOPLE");
}