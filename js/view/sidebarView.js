
var SidebarView = function (container, model) {
	
	var guests = container.find("#numPeople");

	model.setNumberOfGuests(5);
	console.log("num guests model: " + model.numberOfGuests);
	console.log("number input object: " + guests);
	guests.value = model.numberOfGuests;

	document.getElementById('numPeople').value = model.numberOfGuests;
	console.log("numpeople value: " + document.getElementById('numPeople').value);

	// model.setNumberOfGuests(11);	
	// document.getElementById('numPeople').value = model.numberOfGuests;


	// document.getElementById('gadget_url').value = '';
	
}