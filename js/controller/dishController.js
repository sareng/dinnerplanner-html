var DishController = function(genController, view, model) {

	backbtn = document.getElementById("dishBackButton"); // prob change from searching whole document to only this container
	var backListener = function(evt){
		console.log("why");
		genController.showSelectDishPage();
	}
	console.log("adding dish back button listener");
	backbtn.addEventListener("click", backListener , false);

	addbtn = document.getElementById("addDishButton"); // prob change from searching whole document to only this container
	var addListener = function(evt){
		model.addDishToMenu(model.getCurrentDish());
	}
	addbtn.addEventListener("click", addListener , false);

}