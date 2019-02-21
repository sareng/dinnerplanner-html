

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
	var selectDishListView = new SelectDishListView($("#selectDishListView"), model, this);
	var topMenuStandardView = new TopMenuStandardView ($("#menuStandard"), model);
	var topMenuSummaryView = new TopMenuSummaryView ($("#menuSummary"), model);

	// initialize controllers
	var startController = new StartController(this, startView, model);
	var sidePanelController = new SidePanelController(this, sidePanelView, model);
	//var selectDishListController = new SelectDishListController(this, selectDishListView, model);
	var searchDishController = new SearchDishController(this, selectDishView, model, selectDishListView);
	var dishController = new DishController(this, dishView, model);
	var dinnerSummaryController = new DinnerSummaryController(this, dinnerSummaryView, model);
	var topMenuSummaryController = new TopMenuSummaryController(this, topMenuSummaryView, model);

	this.hideAllViews = function() {
		$("#startView").hide();
		$("#sidePanel").hide();
		$("#selectDishView").hide();
		$("#selectDishListView").hide();
		$("#dishView").hide();
		$("#dinnerPrintView").hide();
		$("#dinnerSummaryView").hide();
		$("#menuStandard").hide();
		$("#menuSummary").hide();
	}

	this.initiatePage = function() {
		this.hideAllViews();
		$("#startView").show();
	 }

	this.showSelectDishPage = function() {
		this.hideAllViews();
		$("#sidePanel").show();
		$("#menuStandard").show();
		$("#selectDishView").show();
		$("#selectDishListView").show();
	}

	this.showDishInfoPage = function() {
		this.hideAllViews();
		$("#sidePanel").show();
		$("#menuStandard").show();
		$("#dishView").show();
	}

	this.showDinnerSummaryPage = function() {
		this.hideAllViews();
		$("#dinnerSummaryView").show();
		$("#menuSummary").show();
	}

	this.showDinnerPrintPage = function() {
		this.hideAllViews();
		$("#dinnerPrintView").show();
		$("#menuSummary").show();
	}

	this.startDinner = function() {
		this.showSelectDishPage();
	}

	this.dishCardClicked = function() {
		this.showDishInfoPage();
	}

	this.dishBackButtonClicked = function() {
		this.showSelectDishPage();
	}

	this.dinnerConfirmed = function() {
		this.showDinnerSummaryPage();
	}

	this.printButtonClicked = function() {
		this.showDinnerPrintPage();
	}

	this.editDinner = function() {
		this.showSelectDishPage();
	}



	this.initiatePage();


});
