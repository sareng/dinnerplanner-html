$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	// initialize views
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


	// initialize controllers
	var startController = new StartController(this, startView, model);


	this.hideStartView = function() {
		document.getElementById("startView").style.display = "none";
	}
	// var hideSidePanelView = function() {
	// 	document.getElementById("sidePanel").style.display = "none";
	// }
	this.hideSelectDish = function() {
		document.getElementById("body-row").style.display = "none";
	}
	this.hideSelectDishView = function() {
		document.getElementById("selectDishView").style.display = "none";
	}
	this.hideSelectDishListView = function() {
		document.getElementById("selectDishListView").style.display = "none";
	}
	this.hideDinnerPrintView = function() {
		document.getElementById("dinnerPrintView").style.display = "none";
	}
	this.hideDinnerSummaryView = function() {
		document.getElementById("dinnerSummaryView").style.display = "none";
	}
	this.hideDishView = function() {
		document.getElementById("dishView").style.display = "none";
	}
	this.hideMenuView = function() {
		document.getElementById("menuView").style.display = "none";
	}

	this.showStartView = function() {
		document.getElementById("startView").style.display = "";
	}
	this.showSelectDishView = function() {
		document.getElementById("selectDishView").style.display = "";
	}
	this.showSelectDishListView = function() {
		document.getElementById("selectDishListView").style.display = "";
	}
	this.showDishView = function() {
		document.getElementById("dishView").style.display = "";
	}

	this.hideAllViews = function() {
		// hideSidePanelView();
		// hideSelectDish();
		this.hideSelectDishView();
		this.hideSelectDishListView();
	 	this.hideDishView();
	 	this.hideMenuView();
	 	this.hideDinnerPrintView();
	 	this.hideDinnerSummaryView();
	 	this.hideStartView();
	}

	this.initiatePage = function() {
		this.hideAllViews();
		this.showStartView();
		// // hideSidePanelView();
		// // hideSelectDish();
		// this.hideSelectDishView();
		// this.hideSelectDishListView();
	 // 	this.hideDishView();
	 // 	this.hideMenuView();
	 // 	this.hideDinnerPrintView();
	 // 	this.hideDinnerSummaryView();
	 }

	// window.onload = initiatePage;



	// startbtn = document.getElementById("startButton");
	// var startListener = function(evt){
	//  	hideStartView();
	//  	showSelectDishView();
	//  	showSelectDishListView();
	//  	addCardEventListeners();
	// }
	// startbtn.addEventListener("click", startListener , false);

	this.showSelectDishPage = function() {
		this.hideStartView();
	 	this.showSelectDishView();
	 	this.showSelectDishListView();
	 	this.addCardEventListeners();
	}	

	this.addCardEventListeners = function() {
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

	this.initiatePage();
	

});