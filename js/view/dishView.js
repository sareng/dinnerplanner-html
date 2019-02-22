
var DishView = function (container, model) {


	this.update = function(model, changeDetails){
		var numGuests = model.getNumberOfGuests();
		var id = model.getCurrentDish();

		if(changeDetails.changeType == "dish") {
			this.getDish(id, this);
		}
		else if(changeDetails.changeType == "guests") {
			this.changeNumberOfGuests(id, numGuests);
		}
	}.bind(this);
	model.addObserver(this.update);


	this.generateIngrTable = function(dish, numGuests) {
		//var dish = this.getDish(id);

		console.log("We're in " + dish.title + " " + numGuests)

		//console.log(dish.title)

		var table = [];

		dish.extendedIngredients.forEach(ingredient => {
			table.push(
				`<tr>
					<th>${numGuests * ingredient.amount} ${ingredient.unit}</th>
					<td>${ingredient.name}</td>
					<td>SEK</td>
					<td>${numGuests * ingredient.amount}</td>
				</tr>`);
		});

		return `<tbody>${table.join("")} <tr><th></th><td></td><td>SEK</td><td id="totalDishPrice"> ${dish.pricePerServing} </td></tr>`;
	}


	this.generate = function(view) {
		var id = model.getCurrentDish();
		var dish = model.getDishDummy(1);
			var numGuests = model.getNumberOfGuests();
			var imagePath = "https://spoonacular.com/recipeImages/" + dish.imageUrls;
			var dishText = "Ambitioni rmentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti";

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
						<p id="preparation" class="text-justify">${dish.instructions}</p>
					</div>
				</div>
			</div>
		</div>`;

			var foodInfo =
				`<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				  <div class="row">
					  <div class="col-12">
						  <h3 id="dishInfoName">${dish.title}</h3>
					  </div>
				  </div>
				  <div class="row">
					  <div class="col-3">
						  <img id="dishInfoImage" src="${imagePath}" class="img-fluid rectImages" alt="image of ${dish.title}">
					  </div>
					  <div class="col-8">' + ingredientList + 
					 
						'</div>
				  </div>
				  <div class="row">
					  <div class="col">
						  <p class="text-justify"><br/>
						  </p>
					  </div>
				  </div>
		
			  </div>`;

			//var table = this.generateIngrTable(id, numGuests);
			//var table = view.generateIngrTable(dish, model.getNumberOfGuests());

		var table = `<tr>
					<th>"loading"</th>
					<td>"loading"</td>
					<td>"loading"</td>
					<td>"loading"</td>
				</tr>`;




		let buttons = '<button id="dishBackButton" type="button" class="btn">Back to Search</button>' +
			'<button id="addDishButton" type="button" class="btn">Add to Menu</button>';


		container.html(foodInfo + ingredientList + prep +  buttons );
	}


	this.getDish = function (id=497101, view) {

		let dish = model.getCache(id);

		if (dish === undefined) {
			console.log("pushing in") ;
			model.getDish(id).then(
				function(dish) {
					console.log("dish total Price:" + dish.pricePerServing * model.getNumberOfGuests());
					model.pushCache(dish);
					//view.generateIngrTable(dish,  model.getNumberOfGuests() );

					view.changeDish(dish, model.getNumberOfGuests());

					return dish;

				}
			)
		}else {
			console.log("does exist");
			console.log(dish.title);
			//view.generateIngrTable(dish, model.getNumberOfGuests());
			view.changeDish(dish, model.getNumberOfGuests());
			return dish;
		}


	}


	this.generate(this);

	this.changeDish = function(dish, numGuests) {
		// temp dish with only the info from search result

		var searchDish = model.getSearchResult().find(dish => dish.id == model.getCurrentDish());

		container.find("#dishInfoName")[0].innerHTML = dish.title;
		var dishInfoImage = container.find("#dishInfoImage")[0];
		dishInfoImage.src = "https://spoonacular.com/recipeImages/" + searchDish.imageUrls;
		dishInfoImage.alt = "image of " + dish.title;
		container.find("#ingredientTable")[0].innerHTML = this.generateIngrTable(dish, numGuests);


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
