var DinnerSummaryView = function (container, model) {

	content = "" +
		"<div class=\"col align-self-center dishCard\">" +
		"<div class=\"card-deck\">" +
		"<div class=\"card\">" +
		"<img class=\"card-img-top\" src=\"images/toast.png\" alt=\"Card image cap\">" +
		"<div class=\"card-body\">\n" +
		"<h5 class=\"card-title\">Card title</h5>" +
		"</div>" +
		"<div class=\"card-footer\">" +
		"<small class=\"text-muted\">SEK 0.00</small>" +
		"</div>" +
		"</div>" +
		"</div>" +
		"</div></div>" +
		"<hr>" +
		"<div style=\"text-align: center\">" +
		"Total:<div id=\"mealTotalCost\">0.00 SEK</div><br/>" +
		"<button style=\"text-align: center\" type=\"button\" class=\"btn\">Print Full Recipe</button>" +
		"</div><br />";

	container.html(content);
}