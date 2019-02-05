
var DinnerPrintView = function (container, model) {
	this.update = function(model, changeDetails){
        if(changeDetails.changeType == "menu") {
            this.changeMenu();
        }
        else if(changeDetails.changeType == "guests") {
            this.changeNumberOfGuests();
        }
    }.bind(this);  
	model.addObserver(this.update);

	this.generateDishViews = function() {
		var menu = model.getFullMenu();
		var dishViews = [];

		menu.forEach(dish => {
			dishViews.push(DishPrintView(model, dish));
			dishViews.push("</hr>");
		});

		return dishViews.join("");
	}

	var dishViews = this.generateDishViews();
	var guests = model.getNumberOfGuests();
	

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
					<button id="backButton" class="btn  my-2 my-lg-0">Go back and edit dinner</button>
				</ul>
			</div>
		</nav><!-- NavBar END -->`; 

	var dishes = 
	`<div class="row" id="body-row">
		<!-- Sidebar -->
		<!-- MAIN -->
		<div id="dishViews" class="col main">
			${dishViews}
		</div>
	</div><!-- body-row END -->`;

	container.html(content + dishes);

	this.changeNumberOfGuests = function() {
        document.getElementById("numberOfGuests").innerHTML= "My dinner: " + guests + " people"; 
    }

    this.changeMenu = function() {
        document.getElementById("dishViews").innerHTML = this.generateDishViews();
    }


}