
var DishView = function (container, model) {
	this.update = function(model, changeDetails){
	     // redraw just the portion affected by the changeDetails
	     // or remove all graphics in the view, read the whole model and redraw 
	} 
	model.addObserver(this.update);

	container.find('#mealTotalCost').html(model.getTotalMenuPrice() + " SEK");
	// container.find('#ingrHdr').html("INGREDIENTS FOR " + model.getNumberOfGuests() + " PEOPLE");

	// temporarily set an id to show for testing
	var id = model.getCurrentDish();

	var dish = model.getDish(id);
	var imagePath = "images/" + dish.image;
	var dishText = "Ambitioni rmentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti";
	// container.find('#dishName').html(dish.name);
	// container.find('#preparation').html(dish.description);

	var ingrTable = container.find('#ingredientTable');

	var table = [];
	dish.ingredients.forEach(ingredient => {
		table.push("<tr>",
		"<th>",ingredient.quantity," ",ingredient.unit,"</th>",
		"<td>",ingredient.name,"</td>",
		"<td>SEK</td>",
		"<td>",ingredient.price,"</td>",
		"</tr>");
	});
	// ingrTable.html("<tbody>" + table.join("") + "<tr><th></th><td></td><td>SEK</td><td>" + model.getTotalDishPrice(id) + "</td></tr>");


	var foodInfo = 
		`<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				  <div class="row">
					  <div class="col-12">
						  <h3 id="dishName">${dish.name}</h3>
					  </div>
				  </div>
				  <div class="row">
					  <div class="col-12">
						  <img src="${imagePath}" class="img-fluid rectImages" alt="image of ${dish.name}">
					  </div>
				  </div>
				  <div class="row">
					  <div class="col">
						  <p class="text-justify"><br/>
						  </p>
					  </div>
				  </div>
				  <br/>
				  <br />
			  </div>`;

	var ingredientList = 
		`<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 ingredientCard">
			<div class="row">
				<div class="col-12">
					<h3 id="ingrHdr">INGREDIENTS FOR ${model.getNumberOfGuests()} PEOPLE</h3>
				</div>
			</div>
			<table id="ingredientTable" class="table table-striped">
				<tbody>${table.join("")} <tr><th></th><td></td><td>SEK</td><td> ${model.getTotalDishPrice(id)} </td></tr>
			</table>
			<button id="dishBackButton" type="button" class="btn">Back to Search</button>
			<button id="addDishButton" type="button" class="btn">Add to Menu</button>
		</div>`;

	var prep = 		  
		`<div class="row">
			<div class="col">
				<div class="row">
					<div class="col-12">
						<h3>PREPARATION</h3>
					</div>
				</div>
				<div class="row">
					<div class="col-12">
						<p id="preparation" class="text-justify">${dish.description}</p>
					</div>
				</div>
			</div>
		</div>`;


	container.html("<div class=\"row\">" + foodInfo + ingredientList +  "</div>");

}