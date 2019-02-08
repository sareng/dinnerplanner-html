var SelectDishListController = function(genController, view, model) {

	addCardEventListeners = function() {
		var cards = view.getAllCards();

		var cardListener = function(evt){
			model.setCurrentDish(view.getDishId(evt.currentTarget.id)); 
			genController.dishCardClicked();
		}

		cards.forEach(card => {
	      card[0].addEventListener('click', cardListener, false);
	    });
	}
	addCardEventListeners();








}