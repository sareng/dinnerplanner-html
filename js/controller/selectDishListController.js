var SelectDishListController = function(genController, view, model, dishid) {

	/*
	var card = viewList.getCard(dishId)[0];
	var cardListener = function(evt){
		model.setCurrentDish(dishId); 
		genController.dishCardClicked();
	}
	card.addEventListener('click', cardListener, false);

*/
	// SEARCH VIEW
/*
	var searchText = "";
	var dishType = "all";

	console.log("hey hey ")

	view.test();

	freeSearchInput = view.getSearchDishInput();

	if (freeSearchInput) {
		console.log('we got here');
	}

	var freeSearchInputListener = function(evt){
		console.log("writing");
		searchText = evt.target.value;
	}
	freeSearchInput[0].addEventListener("input", freeSearchInputListener , false);

	dishTypeSelect = view.getDishTypeSelect();
	var dishTypeSelectListener = function(evt){
		dishType = evt.target.value;
	}
	dishTypeSelect[0].addEventListener("input", dishTypeSelectListener , false);
*//*
	searchbtn = view.getSearchButton();
	var searchListener = function(evt){
		/*var dishes = [];
		dishes = model.getAllDishes(dishType, searchText);

		dishIds = dishes.map(dish => dish.id);
		model.setSearchResult(dishIds);*/

	//	console.log("Main Controller");
	//	console.log(searchText + " " + dishType);


	//}
//	searchbtn[0].addEventListener("click", searchListener , false);


}