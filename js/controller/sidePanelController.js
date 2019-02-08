var SidePanelController = function(genController, view, model) {

	var numGuestsButton = view.getNumGuestsButton();
	var numGuestsListener = function(evt) {
		model.setNumberOfGuests(evt.target.value);
	}
	numGuestsButton[0].addEventListener("input", numGuestsListener , false);
	//numGuestsButton.addEventListener("change", numGuestsListener , false);

	var confirmbtn = view.getConfirmButton(); 
	var confirmListener = function(evt){
		genController.dinnerConfirmed();
	}
	confirmbtn[0].addEventListener("click", confirmListener , false);

}