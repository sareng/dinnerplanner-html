var SelectDishListController = function(genController, view,  model, dishId) {

	var card = view.getCard(dishId)[0];
	var cardListener = function(evt){
		model.setCurrentDish(dishId);
		genController.dishCardClicked();
	}
	card.addEventListener('click', cardListener, false);

}
