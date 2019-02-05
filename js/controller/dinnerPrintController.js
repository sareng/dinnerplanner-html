var DinnerPrintController = function(genController, view, model) {

	var backbtn = document.getElementById("backButton"); // prob change from searching whole document to only this container
	var backListener = function(evt){
		genController.showSelectDishPage();
	}
	backbtn.addEventListener("click", backListener , false);

}