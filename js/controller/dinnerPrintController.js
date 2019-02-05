var DinnerPrintController = function(genController, view, model) {

	var printbackbtn = document.getElementById("backButton"); // prob change from searching whole document to only this container
	var backListener = function(evt){
		genController.showSelectDishPage();
	}
	printbackbtn.addEventListener("click", backListener , false);

}