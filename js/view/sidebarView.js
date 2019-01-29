
var SidebarView = function (container, model) {

	container.find('#numPeopleSide')[0].value = model.getNumberOfGuests();
	container.find('#mealTotalCost').html(model.getTotalMenuPrice() + " SEK");
}