
var TopMenuStandardView = function (container, model) {


    var numPeopleSide = '"' + model.getNumberOfGuests() + '"';
    var totalCost = model.getTotalMenuPrice() + " SEK";

    content = " <nav class=\"navbar navbar-expand-md navbar-light bg-light col-xs-12 col-sm-12 col-md-12 col-lg-12 topMenu\" id=\"menuStandard\" >" +
        "<div class=\"navbar-brand\">" +
        "<span class=\"menu-collapsed\">" +
        "My Dinner" +
        "</span>" +
        "</div>" +
        "<span class=\"navbar-toggler \" data-toggle=\"collapse\">" +
        "<div class=\"col-12\" id=\"mealTotalCost\">" + totalCost +
        "</div>" +
        "</span>" +
        "<button class=\"navbar-toggler navbar-toggler-right\" " +
        "type=\"button\" data-toggle=\"collapse\" " +
        "data-target=\"#navbarNavDropdown\" " +
        "aria-controls=\"navbarNavDropdown\" " +
        "aria-expanded=\"false\" aria-label=\"Toggle navigation\">" +
        "<span class=\"navbar-toggler-icon\"></span>" +
        "</button>" +
        "<div class=\"collapse navbar-collapse sidePanel\" id=\"navbarNavDropdown\">" +
        "<ul class=\"navbar-nav\">" +
        "<li class=\"nav-item dropdown d-sm-block d-md-none\">" +
        "<ul class=\"list-group\">" +
        "<div class=\"row subTitles\">" +
        "<div class=\"col-4\">People</div>" +
        "<div class=\"col-8\">" +
        "<form><input id=\"numPeopleTop\" type=\"number\" name=\"numPeople\" min=\"1\" max=\"999\" value=" +
        numPeopleSide +
        "></form></div></div><div class=\"row mainTitles\"> <div class=\"col\">Dish Name</div> <div class=\"col\">Cost</div></div><div class=\"row\">" +
        "<div class=\"col-9\" id=\"dishName\"></div><div class=\"col-3\" id=\"dishTotalCost\"></div></div>" +
        "<div class=\"row\"><div class=\"col-12\" id=\"mealTotalCost\">" + totalCost + "</div></div>" +
        "<div class=\"row\"><div class=\"col\"><button type=\"button\" class=\"btn\" disabled>Confirm Dinner</button></div></div></ul>"+
        "</li>" +
        "</ul>" +
        "</div>" +
        "</nav>"

    container.html(content);
};