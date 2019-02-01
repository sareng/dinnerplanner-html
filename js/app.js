$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	var startView = new StartView($("#startView"), model);
	var sidePanelView = new SidePanelView($(".sidePanel"), model);
	var dinnerPrintView = new DinnerPrintView($("#dinnerPrintView"), model);
	var dinnerSummaryView = new DinnerSummaryView($("#dinnerSummaryView"), model);
	var dishView = new DishView($("#dishView"), model);
	var selectDishView = new SelectDishView($("#selectDishView"), model);
	var menuView = new MenuView($("#selectDishListView"), model);
	// var menuView = new MenuView($("#dishCard"), model);
	//var topView = new topView($(".topMenu"), model);

	//var dishPrintView = new DishPrintView($("#dishPrintView"), model);


	var hideStartView = function() {
		document.getElementById("startView").style.display = "none";
	}
	// var hideSidePanelView = function() {
	// 	document.getElementById("sidePanel").style.display = "none";
	// }
	var hideSelectDish = function() {
		document.getElementById("body-row").style.display = "none";
	}
	var hideSelectDishView = function() {
		document.getElementById("selectDishView").style.display = "none";
	}
	var hideSelectDishListView = function() {
		document.getElementById("selectDishListView").style.display = "none";
	}
	var hideDinnerPrintView = function() {
		document.getElementById("dinnerPrintView").style.display = "none";
	}
	var hideDinnerSummaryView = function() {
		document.getElementById("dinnerSummaryView").style.display = "none";
	}
	var hideDishView = function() {
		document.getElementById("dishView").style.display = "none";
	}
	var hideMenuView = function() {
		document.getElementById("menuView").style.display = "none";
	}
	var showSelectDishView = function() {
		document.getElementById("selectDishView").style.display = "block";
	}
	var showSelectDishListView = function() {
		document.getElementById("selectDishListView").style.display = "block";
	}
	var showDishView = function() {
		document.getElementById("dishView").style.display = "block";
	}

	var initiatePage = function() {
		// hideSidePanelView();
		// hideSelectDish();
		hideSelectDishView();
		hideSelectDishListView();
	 	hideDishView();
	 	hideMenuView();
	 	hideDinnerPrintView();
	 	hideDinnerSummaryView();
	 }

	window.onload = initiatePage;



	startbtn = document.getElementById("startButton");
	var startListener = function(evt){
	 	hideStartView();
	 	showSelectDishView();
	 	showSelectDishListView();
	 	addCardEventListeners();
	}
	startbtn.addEventListener("click", startListener , false);


	var addCardEventListeners = function() {
		var root = document.getElementById("selectDishListView");
		var cards = root.getElementsByClassName("card");

		var cardListener = function(evt){
			hideSelectDishView();
			hideSelectDishListView();
			model.setCurrentDish(evt.currentTarget.id.slice(4)); // slice to remove "dish" from id
			// TODO get view to update to use new id
			showDishView();
		}

		Array.from(cards).forEach(card => {
	      card.addEventListener('click', cardListener, false);
	    });
	}
	

});