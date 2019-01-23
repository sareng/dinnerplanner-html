
var SidebarView = function (container, model) {

	model.setNumberOfGuests(5);

	document.getElementById('numPeopleSide').value = model.numberOfGuests;
	document.getElementById('numPeopleNav').value = model.numberOfGuests;	
}