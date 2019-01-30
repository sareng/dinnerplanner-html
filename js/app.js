$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	var startView = new StartView($("#startView"), model);
	var dinnerPrintView = new DinnerPrintView($("#dinnerPrintView"), model);
	var dinnerSummaryView = new DinnerSummaryView($("#dinnerSummaryView"), model);
	var sidebarView = new SidebarView($("#sidePanel"), model);
	var dishView = new DishView($("#dishView"), model);
	var menuView = new MenuView($("#dishCard"), model);

	//var dishPrintView = new DishPrintView($("#dishPrintView"), model);


	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});