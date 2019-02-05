var SelectDishListController = function(genController, view, model) {

	addCardEventListeners = function() {
		var root = document.getElementById("selectDishListView");
		var cards = root.getElementsByClassName("card");

		var cardListener = function(evt){
			model.setCurrentDish(evt.currentTarget.id.slice(4)); // slice to remove "dish" from id
			genController.showDishInfoPage();
			// hideSelectDishView();
			// hideSelectDishListView();
			// // TODO get view to update to use new id
			// showDishView();
		}

		Array.from(cards).forEach(card => {
	      card.addEventListener('click', cardListener, false);
	    });
	}
	addCardEventListeners();








}