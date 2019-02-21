var SelectDishListController = function(genController, view,  model, dishId) {

	var card = view.getCard(dishId)[0];
	var cardListener = function(evt){
		console.log("dish " + dishId + " clicked");
		model.setCurrentDish(dishId);
		genController.dishCardClicked();
	}
	card.addEventListener('click', cardListener, false);

}
