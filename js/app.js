$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	// initialize views
	var startView = new StartView($("#startView"), model);
	var sidePanelView = new SidePanelView($("#sidePanel"), model);
	var dinnerPrintView = new DinnerPrintView($("#dinnerPrintView"), model);
	var dinnerSummaryView = new DinnerSummaryView($("#dinnerSummaryView"), model);
	var dishView = new DishView($("#dishView"), model);
	var selectDishView = new SelectDishView($("#selectDishView"), model);
	var menuView = new MenuView($("#selectDishListView"), model);
	var topMenuStandardView = new TopMenuStandardView ($("#menuStandard"), model);
	var topMenuSummary = new TopMenuSummaryView ($("#menuSummary"), model);


	// var menuView = new MenuView($("#dishCard"), model);
	//var topView = new topView($(".topMenu"), model);

	//var dishPrintView = new DishPrintView($("#dishPrintView"), model);


	// initialize controllers
	var startController = new StartController(this, startView, model);
	var sidePanelController = new SidePanelController(this, sidePanelView, model);
	var selectDishListController = new SelectDishListController(this, selectDishListView, model);
	var dishController = new DishController(this, dishView, model);
	var dinnerSummaryController = new DinnerSummaryController(this, dinnerSummaryView, model);
	var dinnerPrintController = new DinnerPrintController(this, dinnerPrintView, model);

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
		document.getElementById("sd").style.display = "none";
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
		document.getElementById("sd").style.display = "";
	}
	this.showSelectDishListView = function() {
		document.getElementById("selectDishListView").style.display = "";
	}
	this.showDishView = function() {
		document.getElementById("dishView").style.display = "";
	}
	this.showDinnerSummaryView = function() {
		document.getElementById("dinnerSummaryView").style.display = "";
	}
	this.showDinnerPrintView = function() {
		document.getElementById("dinnerPrintView").style.display = "";
	}

	this.showSidePanelView = function() {
		document.getElementById("sidePanel").style.display = "";
	}
	this.hideSidePanelView = function() {
		document.getElementById("sidePanel").style.display = "none";
	}

	this.showTopMenu = function() {
		document.getElementById("menuStandard").style.display = "";
	}
	this.hideTopMenu = function() {
		document.getElementById("menuStandard").style.display = "none";
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
	 	this.hideSidePanelView();
	 	this.hideTopMenu();
	}

	this.initiatePage = function() {
		this.hideAllViews();
		this.showStartView();
	 }


	this.showSelectDishPage = function() {
		this.hideAllViews();
	 	this.showSelectDishView();
	 	this.showSelectDishListView();
	 	this.showSidePanelView();
	 	this.showTopMenu();
	}	

	this.showDishInfoPage = function() {
		this.hideSelectDishView();
		this.hideSelectDishListView();
			// TODO get view to update to use new id
		this.showDishView();
	}

	this.showDinnerSummaryPage = function() {
		this.hideAllViews();
		this.showDinnerSummaryView();
	}

	this.showPrintPage = function() {
		this.hideAllViews();
		this.showDinnerPrintView();
	}


	this.initiatePage();
	

});