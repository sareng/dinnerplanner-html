var SelectDishListController = function(genController, view, model) {

	addCardEventListeners = function() {
		var root = document.getElementById("selectDishListView");
		var cards = root.getElementsByClassName("card");

		var cardListener = function(evt){
			model.setCurrentDish(evt.currentTarget.id.slice(4)); // slice to remove "dish" from id
			genController.dishCardClicked();
		}

		Array.from(cards).forEach(card => {
	      card.addEventListener('click', cardListener, false);
	    });
	}
	addCardEventListeners();








}