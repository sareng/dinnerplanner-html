var DinnerSummaryController = function(genController, view, model) {

	printbtn = document.getElementById("printButton"); // prob change from searching whole document to only this container
	var printListener = function(evt){
		genController.showPrintPage();
	}
	printbtn.addEventListener("click", printListener , false);

}