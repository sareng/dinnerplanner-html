
var SidebarView = function (container, model) {

	model.setNumberOfGuests(5);

	document.getElementById('numPeople').value = model.numberOfGuests;
	
}