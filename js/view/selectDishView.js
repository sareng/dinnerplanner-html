
var SelectDishView = function (container, model) {

	var options = ["Main Course", "Side Dish", "Appetiser", "Dessert"];
	var optionsHtml = [];

	options.forEach(option => {
		optionsHtml.push(`<option> ${option} </option>`);
	});

	var content = 	
		`<div class="col-xs-12 col-sm-12 col-md-4 col-lg-6">
				<form>
					<div class="form-group">
						<input type="text" class="form-control" id="formGroupExampleInput" placeholder="FIND A DISH...">
					</div>
				</form>
			</div>
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
				<form>
					<div class="form-group">
						<select class="form-control" id="exampleFormControlSelect1">
							${optionsHtml.join("")}
						</select>
					</div>
				</form>

			</div>
			<div class="col-xs-12 col-sm-12 col-md-4 col-lg-2">
				<button type="button" class="btn">Search</button>
			</div>`;

	container.html(content);
}











			