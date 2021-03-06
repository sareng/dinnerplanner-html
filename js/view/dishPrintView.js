var DishPrintView = function (model, dish, image) { //container,
	this.update = function(model, changeDetails){
	     // redraw just the portion affected by the changeDetails
	     // or remove all graphics in the view, read the whole model and redraw 
	} 
	model.addObserver(this.update);

	var name = dish.title;
	var prep = dish.instructions;
	var imagePath = "https://spoonacular.com/recipeImages/" + image;
	var text = "Ambitioni rmentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti";

	var content = 
		`<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
				<img src=${imagePath} class="img-fluid rectImages" alt="Responsive image">
			</div>
			<div class="col-xs-12 col-sm-12 col-md-3 col-lg-3">
				<div class="col-12">
					<h3>${name}</h3>
				</div>
				<div class="col-12">
					<p class="text-justify"><br/>${text}</p>
				</div>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
				<div class="col-12">
					<h4>Preparation</h4>
				</div>
				<div class="col">
					<p class="text-justify"><br/>${prep}</p>
				</div>
			</div>
		</div>`;

	return content;
}