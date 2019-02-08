var DinnerSummaryController = function(genController, view, model) {

	printbtn = view.getPrintButton(); 
	var printListener = function(evt){
		genController.printButtonClicked();
	}
	printbtn.addEventListener("click", printListener , false);

}