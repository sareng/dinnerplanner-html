var SearchDishController = function(genController, view, model) {
	var searchText = "";
	var dishType = "All";

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
		if(searchText == "" && dishType == "All") {
			dishes = model.getAllDishesAllTypes();
		}
		else if(dishType != "All") {
			console.log("their " + model.getAllDishes(dishType, searchText));
			console.log("their 2 " + model.getAllDishes("", "starter"));
			dishes = model.getAllDishes(dishType, searchText);
			// return getAllDishes(dishType, searchText)
		}
		else {
			dishes = model.getAllDishes(dishType, searchText);
			// return getAllDishes(dishType, searchText) ? does this work?
		}
		dishIds = dishes.map(dish => dish.id);
		model.setSearchResult(dishIds);
	}
	searchbtn.addEventListener("click", searchListener , false);

}

