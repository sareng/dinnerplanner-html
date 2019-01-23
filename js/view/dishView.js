
var DishView = function (container, model) {

	container.find('#mealTotalCost').html(model.getTotalMenuPrice() + " SEK");
	container.find('#ingrHdr').html("INGREDIENTS FOR " + model.numberOfGuests + " PEOPLE");

	var id = 1;

	var dish = model.getDish(id);
	container.find('#dishName').html(dish.name);
	container.find('#preparation').html(dish.description);

	var ingrTable = container.find('#ingredientTable');


	// var table;

	// this.populateIngredientTable = function(dish) {
	// 	dish.ingredients.forEach(ingredient => {
	// 		table.push(	"<th>" + ingredient.quantity + " " + ingredient.unit  + "</th>",
	// 					"<td>" + ingredient.name + "</td>",
	// 					"<td>SEK</td>",
	// 					"<td>" + ingredient.price + "</td>");
	// 	});
	// 	table = table.join("");
	// }

	// ingrTable.value = this.populateIngredientTable(dish);


	var table = [];

	dish.ingredients.forEach(ingredient => {
		table.push("<tr>",
		"<th>",ingredient.quantity," ",ingredient.unit,"</th>",
		"<td>",ingredient.name,"</td>",
		"<td>SEK</td>",
		"<td>",ingredient.price,"</td>",
		"</tr>");
	});

	ingrTable.html("<tbody>" + table.join("") + "<tr><th></th><td></td><td>SEK</td><td>" + model.getTotalDishPrice(id) + "</td></tr>");



	// console.log(ingrTable);

	// var html = [];
	// html.push(
	//   "<html>",
	//   "<body>",
	//   "bla bla bla",
	//   "</body>",
	//   "</html>"
	// );
	// return html.join("");


	// // Populate ingredient list
	// <tr >
	// 	<th>23 g</th>
	// 	<td>Mark</td>
	// 	<td>SEK</td>
	// 	<td>0.00</td>
	// </tr>


}