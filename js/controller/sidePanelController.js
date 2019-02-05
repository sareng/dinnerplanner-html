var SidePanelController = function(genController, view, model) {

	var numGuestsButton = document.getElementById("numPeopleSide");
	var numGuestsListener = function(evt) {
		model.setNumberOfGuests(evt.taget.value);
	}
	numGuestsButton.addEventListener("input", numGuestsListener , false);
	numGuestsButton.addEventListener("change", numGuestsListener , false);

	var confirmbtn = document.getElementById("confirmButton"); // prob change from searching whole document to only this container
	var confirmListener = function(evt){
		genController.showDinnerSummaryPage();
	}
	confirmbtn.addEventListener("click", confirmListener , false);

}