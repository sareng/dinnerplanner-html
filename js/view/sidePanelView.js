
var SidePanelView = function (container, model) {
    this.update = function(model, changeDetails){
        // console.log("cd: " + changeDetails.changeType);
        if(changeDetails.changeType == menu) {

        }
         // redraw just the portion affected by the changeDetails
         // or remove all graphics in the view, read the whole model and redraw 
    } 
    model.addObserver(this.update);

    var numPeopleSide = '"' + model.getNumberOfGuests() + '"';
    var totalCost = model.getTotalMenuPrice() + " SEK";

    // console.log(numPeopleSide);
    // console.log(totalCost);

    var dish = model.getFullMenu();

    var length = model.getFullMenu().length;
    var i;
    var menuContent = "";

    for (i = 0; i < length; i++) {
        menuContent = menuContent +  "<div class='selectedDish row'><div class='col-8'>"+ dish[i].name+ "</div>" +
            "<div class='col-4'>"+ model.getTotalDishPrice(dish[i].id)  + "</div></div>";
    }

    console.log(menuContent);


    content =
        "<ul class=\"list-group\">" +
        "<div class=\"row subTitles\">" +
        "<div class=\"col-4\">People</div>" +
        "<div class=\"col-8\">" +
        "<form><input id=\"numPeopleSide\" type=\"number\" name=\"numPeople\" min=\"1\" max=\"999\" value=" +
        numPeopleSide +
        "></form></div></div><div class=\"row mainTitles\"> <div class=\"col-8\">Dish Name</div> <div class=\"col-4\">" +
        "Cost</div></div>" +
        "<br/>" + menuContent +
        "<div class=\"row\"><div class=\"col-12\" id=\"mealTotalCost\">" + totalCost + "</div></div>" +
        "<div class=\"row\"><div class=\"col\"><button id=\"confirmButton\" type=\"button\" class=\"btn\" disabled>Confirm Dinner</button></div></div></ul>";


    console.log(length);


    container.html(content);
    
    if (length > 0) { confirmButton.disabled = false;}
    else { confirmButton.disabled = true;}

};