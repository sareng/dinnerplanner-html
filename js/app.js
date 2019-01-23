$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	// And create the instance of ExampleView
	// var exampleView = new ExampleView($("#exampleView"), model);
	var sidebarView = new SidebarView($("#sidePanel"), model);
	var dishView = new DishView($("#dishView"), model);
	var menuView = new MenuView($("#dishCard"), model);

	/**
	 * IMPORTANT: app.js is the only place where you are allowed to
	 * use the $('someSelector') to search for elements in the whole HTML.
	 * In other places you should limit the search only to the children 
	 * of the specific view you're working with (see exampleView.js).
	 */

});