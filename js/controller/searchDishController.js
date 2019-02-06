var SearchDishController = function(genController, view, model) {
	var searchText = "";
	var dishType = "all";

	freeSearchInput = document.getElementById("searchDishInput"); // prob change from searching whole document to only this container
	var freeSearchInputListener = function(evt){
		searchText = evt.target.value;
	}
	freeSearchInput.addEventListener("input", freeSearchInputListener , false);

	dishTypeSelect = document.getElementById("dishTypeSelect"); // prob change from searching whole document to only this container
	var dishTypeSelectListener = function(evt){
		dishType = evt.target.value;
	}
	dishTypeSelect.addEventListener("input", dishTypeSelectListener , false);

	searchbtn = document.getElementById("searchButton"); // prob change from searching whole document to only this container
	var searchListener = function(evt){
		var dishes = [];
		dishes = model.getAllDishes(dishType, searchText);
		dishIds = dishes.map(dish => dish.id);
		model.setSearchResult(dishIds);
	}
	searchbtn.addEventListener("click", searchListener , false);

}

