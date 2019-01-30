
var SidePanelView = function (container, model) {


    var numPeopleSide = '"' + model.getNumberOfGuests() + '"';
    var totalCost = model.getTotalMenuPrice() + " SEK";

    content =
        "<ul class=\"list-group\">" +
        "<div class=\"row subTitles\">" +
        "<div class=\"col-4\">People</div>" +
        "<div class=\"col-8\">" +
        "<form><input id=\"numPeopleSide\" type=\"number\" name=\"numPeople\" min=\"1\" max=\"999\" value=" +
        numPeopleSide +
        "></form></div></div><div class=\"row mainTitles\"> <div class=\"col\">Dish Name</div> <div class=\"col\">Cost</div></div><div class=\"row\">" +
        "<div class=\"col-9\" id=\"dishName\"></div><div class=\"col-3\" id=\"dishTotalCost\"></div></div>" +
        "<div class=\"row\"><div class=\"col-12\" id=\"mealTotalCost\">" + totalCost + "</div></div>" +
        "<div class=\"row\"><div class=\"col\"><button type=\"button\" class=\"btn\" disabled>Confirm Dinner</button></div></div></ul>";

    console.log(numPeopleSide);
    console.log(totalCost);

    container.html(content);
};