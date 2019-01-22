/** ExampleView Object constructor
 * 
 * This object represents the code for one specific view (in this case the Example view). 
 * 
 * It is responsible for:
 * - constructing the view (e.g. if you need to create some HTML elements procedurally) 
 * - populating the view with the data
 * - updating the view when the data changes
 * 
 * You should create a view Object like this for every view in your UI.
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */ 
var  MenuView = function (container, model) {


	var totalPrice = new DinnerModel().getDish(1);
	var tt = 0;

	console.log(totalPrice.ingredients[1].price);

	for(key in totalPrice.ingredients) {
		tt += totalPrice.ingredients[key].price;
	}
	console.log('total Price: ' + tt);
	
}
 
