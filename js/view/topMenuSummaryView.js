
var TopMenuSummaryView = function (container, model) {


    var numPeopleSide = '"' + model.getNumberOfGuests() + '"';
    var totalCost = model.getTotalMenuPrice() + " SEK";

    content = "<nav class=\"navbar navbar-expand-md navbar-light bg-light col-xs-12 col-sm-12 col-md-12 col-lg-12 topMenu\" >" +
        "<div class=\"navbar-brand\">" +
        "<span class=\"menu-collapsed\">" +
        "My Dinner" +
        "</span>" +
        "</div>" +
        "<div id=\"numberOfGuests\" class=\"col-4\">: 3 people</div>" +
        "<button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">" +
        "<span class=\"navbar-toggler-icon\"></span>" +
        "</button>" +
        "<div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">" +
        "<ul class=\"navbar-nav\">" +
        "<button class=\"btn  my-2 my-lg-0\">" +
        "Go back and edit dinner</button>" +
        "</ul>" +
        "</div>" +
        "</nav>";

    container.html(content);
};