
var SelectDishView = function (container, model) {
	this.update = function(model, changeDetails){
	     // redraw just the portion affected by the changeDetails
	     // or remove all graphics in the view, read the whole model and redraw 
	} 
	model.addObserver(this.update);

	this.generateDishTypes = function() {
	 	var dishTypes = model.getDishTypes();
		var dishTypesHtml = [];

		dishTypes.forEach(dishType => {
			dishTypesHtml.push(`<option> ${dishType} </option>`);
		});
		return dishTypesHtml.join("");
	}

	var dishTypes = this.generateDishTypes();

	var content = 	
		`<div class="col-xs-12 col-sm-12 col-md-4 col-lg-6">
				<form>
					<div class="form-group">
						<input type="text" class="form-control" id="searchDishInput" placeholder="FIND A DISH...">
					</div>
				</form>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<form>
					<div class="form-group">
						<select class="form-control" id="dishTypeSelect">
							${dishTypes}
						</select>
					</div>
				</form>

			</div>
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-2">
				<button id="searchButton" type="button" class="btn">Search</button>
			</div>`;

	container.html(content);
}











			