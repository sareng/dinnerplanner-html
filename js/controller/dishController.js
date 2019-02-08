var DishController = function(genController, view, model) {

	backbtn = document.getElementById("dishBackButton"); // prob change from searching whole document to only this container
	var backListener = function(evt){
		genController.dishBackButtonClicked();
	}
	backbtn.addEventListener("click", backListener , false);

	addbtn = document.getElementById("addDishButton"); // prob change from searching whole document to only this container
	var addListener = function(evt){
		model.addDishToMenu(model.getCurrentDish());
	}
	addbtn.addEventListener("click", addListener , false);

}