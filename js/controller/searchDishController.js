var SearchDishController = function(genController, view, model) {
	var searchText = "";
	var dishType = "all";


	freeSearchInput = view.getSearchDishInput();

	if (freeSearchInput) {
		console.log("we good");
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

	searchbtn = view.getSearchButton();
	var searchListener = function(evt){
		/*var dishes = [];
		dishes = model.getAllDishes(dishType, searchText);

		dishIds = dishes.map(dish => dish.id);
		model.setSearchResult(dishIds);*/

		console.log(searchText + " " + dishType);



	}
	searchbtn[0].addEventListener("click", searchListener , false);

}

