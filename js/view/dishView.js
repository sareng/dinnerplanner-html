
var DishView = function (container, model) {
	this.update = function(model, changeDetails){
		if(changeDetails.changeType == "dish") {
            //this.generate();
            this.changeDish();
        }
        else if(changeDetails.changeType == "guests") {
        	this.changeNumberOfGuests();
        }
	}.bind(this);
	model.addObserver(this.update);

	this.generateIngrTable = function(id, numGuests) {
		var dish = model.getDish(id);
		var table = [];
		dish.ingredients.forEach(ingredient => {
			table.push(
				`<tr>
					<th>${numGuests * ingredient.quantity} ${ingredient.unit}</th>
					<td>${ingredient.name}</td>
					<td>SEK</td>
					<td>${numGuests * ingredient.price}</td>
				</tr>`);
		});
		return table.join("");
	}

	this.generate = function() {
		var id = model.getCurrentDish();
		var dish = model.getDish(id);
		var numGuests = model.getNumberOfGuests();
		var imagePath = "images/" + dish.image;
		var dishText = "Ambitioni rmentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti";

		var foodInfo = 
			`<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
					  <div class="row">
						  <div class="col-12">
							  <h3 id="dishInfoName">${dish.name}</h3>
						  </div>
					  </div>
					  <div class="row">
						  <div class="col-12">
							  <img id="dishInfoImage" src="${imagePath}" class="img-fluid rectImages" alt="image of ${dish.name}">
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

		var table = this.generateIngrTable(id, numGuests);

		var ingredientList = 
			`<div class="col-xs-12 col-sm-12 col-md-8 col-lg-8 ingredientCard">
				<div class="row">
					<div class="col-12">
						<h3 id="ingrHdr">INGREDIENTS FOR ${model.getNumberOfGuests()} PEOPLE</h3>
					</div>
				</div>
				<table id="ingredientTable" class="table table-striped">
					<tbody>${table} <tr><th></th><td></td><td>SEK</td><td id="totalDishPrice"> ${model.getTotalDishPrice(id)} </td></tr>
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

	this.generate();

	this.changeDish = function() {
		var id = model.getCurrentDish();
		var dish = model.getDish(id);
		console.log("id: " + id + " dish: " + dish);
		var numGuests = model.getNumberOfGuests();
		document.getElementById("dishInfoName").innerHTML = dish.name;
		document.getElementById("dishInfoImage").src = "images/" + dish.image;
		document.getElementById("dishInfoImage").alt = "image of " + dish.name;
		table = this.generateIngrTable(id, numGuests);
		document.getElementById("ingredientTable").innerHTML = `<tbody>${table} <tr><th></th><td></td><td>SEK</td><td id="totalDishPrice"> ${model.getTotalDishPrice(id)} </td></tr>`;
	}
	this.changeNumberOfGuests = function() {
		var numGuests = model.getNumberOfGuests();
		var id = model.getCurrentDish();
		document.getElementById("ingrHdr").innerHTML = `INGREDIENTS FOR ${numGuests} PEOPLE`;
		table = this.generateIngrTable(id, numGuests);
		document.getElementById("ingredientTable").innerHTML = `<tbody>${table} <tr><th></th><td></td><td>SEK</td><td id="totalDishPrice"> ${model.getTotalDishPrice(id)} </td></tr>`;
	}

}