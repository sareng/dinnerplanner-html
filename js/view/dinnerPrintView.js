
var DinnerPrintView = function (container, model) {

	var guests = model.getNumberOfGuests();
	var menu = model.getFullMenu();

	var dishViews = [];

	menu.forEach(dish => {
		dishViews.push(DishPrintView(model, dish));
		dishViews.push("</hr>");
	});

	dishView = dishViews.join("");

	var content = 
	`<nav class="navbar navbar-expand-md navbar-light bg-light col-xs-12 col-sm-12 col-md-12 col-lg-12 topMenu" >
		<div class="navbar-brand">
		</div>
		<div id="numberOfGuests" class="col-4">My dinner: ${guests} people</div>
		<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNavDropdown">
				<ul class="navbar-nav">
					<button class="btn  my-2 my-lg-0">Go back and edit dinner</button>
				</ul>
			</div>
		</nav><!-- NavBar END -->`; 

	var dishes = 
	`<div class="row" id="body-row">
		<!-- Sidebar -->
		<!-- MAIN -->
		<div class="col main">
			${dishView}
		</div>
	</div><!-- body-row END -->`;

	container.html(content + dishes);
}