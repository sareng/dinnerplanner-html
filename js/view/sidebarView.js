
var SidebarView = function (container, model) {

	// model.setNumberOfGuests(5);

	// document.getElementById('numPeopleSide').value = model.numberOfGuests;
	// document.getElementById('numPeopleNav').value = model.numberOfGuests;	

	// document.getElementById('mealTotalCost').html(+ " SEK")


	// numberOfGuests.html("Hello World");
	// console.log(container.find('#numPeopleSide')[0].value);

	container.find('#numPeopleSide')[0].value = model.numberOfGuests;
	// model.addDishToMenu(1);
	container.find('#mealTotalCost').html(model.getTotalMenuPrice() + " SEK");
}