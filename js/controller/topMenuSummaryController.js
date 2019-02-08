var TopMenuSummaryController = function(genController, view, model) {

	var printbackbtn = view.getBackButton();
	var backListener = function(evt){
		genController.editDinner();
	}
	printbackbtn[0].addEventListener("click", backListener , false);

}