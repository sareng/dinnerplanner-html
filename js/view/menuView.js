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


	var allDishes = model.getAllDishesAllTypes();

	console.log("All dishes l " + allDishes.length);
	console.log("All dishes: " + allDishes);
	// var dish = new DinnerModel();
	// var cards = container.find('#dishCard');

	var card = [];

	allDishes.forEach(dish => {
		card.push("<div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3\">",
			"<div class=\"card text-center\">",
			"<img id=\"dishImage\" class=\"card-img-top\" src=\"images/",dish.image,"\" alt=\"",dish.name,"\">",
			"<div class=\"card-body\">",
			"<h5 class=\"card-title\" id=\"dishTitle\">",dish.name,"</h5>",
			"</div>",
			"</div>",
			"</div>");
		console.log("dish dets: " + dish.image + dish.name);
	});

	// dish.name{
	// 	card.push("<div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3\">",
	// 		"<div class=\"card text-center\">",
	// 		"<img id=\"dishImage\" class=\"card-img-top\" src=\"" + images/toast.png + "\" alt=\"Card image cap\">",
	// 		"<div class=\"card-body\">",
	// 		"<h5 class=\"card-title\" id=\"dishTitle\">Card title</h5>",
	// 		"</div>",
	// 		"</div>",
	// 		"</div>";
	// });
	console.log("card: " + card.join(""));

	container.html(card.join(""));


}


	// var table = [];

	// dish.ingredients.forEach(ingredient => {
	// 	table.push("<tr>",
	// 	"<th>",ingredient.quantity," ",ingredient.unit,"</th>",
	// 	"<td>",ingredient.name,"</td>",
	// 	"<td>SEK</td>",
	// 	"<td>",ingredient.price,"</td>",
	// 	"</tr>");
	// });

	// ingrTable.html("<tbody>" + table.join("") + "<tr><th></th><td></td><td>SEK</td><td>" + model.getTotalDishPrice(id) + "</td></tr>");



	// 		<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
	// 			<div class="card text-center">
	// 				<img id="dishImage" class="card-img-top" src="images/toast.png" alt="Card image cap">
	// 				<div class="card-body">
	// 					<h5 class="card-title" id="dishTitle">Card title</h5>
	// 				</div>
	// 			</div>
	// 		</div>
 
