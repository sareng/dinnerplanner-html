
var  StartView = function (container, model) {

	this.update = function(model, changeDetails){
	     // redraw just the portion affected by the changeDetails
	     // or remove all graphics in the view, read the whole model and redraw 
	} 
	model.addObserver(this.update);

	content = 	
		"<div class=\"row \">" + "<div class=\"col-3\"></div>"+ "<div class=\"col-6 index\">"+
				"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis fermentum lectus et maximus. Sed gravida dignissim quam, consectetur facilisis nisi faucibus quis. Nunc non purus pharetra, suscipit sem eu, hendrerit magna. Integer in pellentesque lacus. Nulla lectus ante, lobortis at posuere at, elementum vel quam. Integer eu gravida leo. hasellus vitae ex non elit ultricies scelerisque a ut dui. Mauris auctor vulputate placerat.</p>" +
				"<br />" + 
				"<button id=\"startButton\" type=\"button\" class=\"btn\">Create New Dinner</button>" +
			"</div>" + 
		"</div>";

	container.html(content);

	this.getStartButton = function() {
		return container.find("#startButton");
	}
}
