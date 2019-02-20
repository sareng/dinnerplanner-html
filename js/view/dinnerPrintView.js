
var DinnerPrintView = function (container, model) {
	this.update = function(model, changeDetails){
        if(changeDetails.changeType == "menu") {
            this.changeMenu();
        }
    }.bind(this);  
	model.addObserver(this.update);

	this.generateDishViews = function() {
		var menu = model.getFullMenu();
		var dishViews = [];
/*
		menu.forEach(dish => {
			dishViews.push(DishPrintView(model, dish));
			dishViews.push("</hr>");
		});
		*/

		return dishViews.join("");
	}

	var dishViews = this.generateDishViews();
	var guests = model.getNumberOfGuests();

	var dishes = 
	`<div class="row" id="body-row">
		<!-- Sidebar -->
		<!-- MAIN -->
		<div id="dishViews" class="col main">
			${dishViews}
		</div>
	</div><!-- body-row END -->`;

	container.html(dishes);

    this.changeMenu = function() {
        container.find("#dishViews")[0].innerHTML = this.generateDishViews();
    }


}