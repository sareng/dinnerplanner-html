var DishController = function(genController, view, model) {

	backbtn = view.getDishBackButton();
	var backListener = function(evt){
		genController.dishBackButtonClicked();
	}
	backbtn[0].addEventListener("click", backListener , false);

	addbtn = view.getAddDishButton();
	var addListener = function(evt){
		//model.addDishToMenu(model.getDishFromSearchResult(model.getCurrentDish()));
		model.addDishToMenu(model.getCache(model.getCurrentDish()));

	}
	addbtn[0].addEventListener("click", addListener , false);

}
