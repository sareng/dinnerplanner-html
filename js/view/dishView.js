
var DishView = function (container, model) {
	this.update = function(model, changeDetails){
		var numGuests = model.getNumberOfGuests();
		var id = model.getCurrentDish();

		if(changeDetails.changeType == "dish") {
            this.changeDish(id, numGuests);
        }
        else if(changeDetails.changeType == "guests") {
        	this.changeNumberOfGuests(id, numGuests);
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

		return `<tbody>${table.join("")} <tr><th></th><td></td><td>SEK</td><td id="totalDishPrice"> ${model.getTotalDishPrice(id)} </td></tr>`;
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
					${table}
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

	this.changeDish = function(id, numGuests) {
		var dish = model.getDish(id);
		container.find("#dishInfoName")[0].innerHTML = dish.name;
		var dishInfoImage = container.find("#dishInfoImage")[0];
		dishInfoImage.src = "images/" + dish.image;
		dishInfoImage.alt = "image of " + dish.name;
		container.find("#ingredientTable")[0].innerHTML = this.generateIngrTable(id, numGuests);
	}
	this.changeNumberOfGuests = function(id, numGuests) {
		container.find("#ingrHdr")[0].innerHTML = `INGREDIENTS FOR ${numGuests} PEOPLE`;
		container.find("#ingredientTable")[0].innerHTML = this.generateIngrTable(id, numGuests);
	}

	this.getDishBackButton = function() {
		return container.find("#dishBackButton");
	}
	this.getAddDishButton = function() {
		return container.find("#addDishButton");
	}



}