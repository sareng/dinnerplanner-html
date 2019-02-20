
var SidePanelView = function (container, model) {
    this.update = function(model, changeDetails){
        if(changeDetails.changeType == "menu") {
            this.changeMenu();
        }
        else if(changeDetails.changeType == "guests") {
            this.changeNumberOfGuests();
        }
    }.bind(this);       // maybe find another solution but this works for now
    model.addObserver(this.update);

    this.generateMenuContent = function() {
        var menu = model.getFullMenu();
        var menuContent = "";
        var i;
/*
        for (i = 0; i < menu.length; i++) {
            menuContent += "<div class='selectedDish row'><div class='col-8'>"+ menu[i].name+ "</div>" +
                "<div class='col-4'>"+ model.getTotalDishPrice(menu[i].id)  + "</div></div>";
        }*/
        return menuContent;
    }

    this.generate = function() {
        var numPeopleSide = '"' + model.getNumberOfGuests() + '"';
        var totalCost = model.getTotalMenuPrice() + " SEK";
        var dish = model.getFullMenu();
      //  var length = model.getFullMenu().length;
        var length = 3;

        var menuContent = this.generateMenuContent();

        content =
            "<ul class=\"list-group\">" +
            "<div class=\"row subTitles\">" +
            "<div class=\"col-4\">People</div>" +
            "<div class=\"col-8\">" +
            "<form><input id=\"numPeopleSide\" type=\"number\" name=\"numPeople\" min=\"1\" max=\"999\" value=" +
            numPeopleSide +
            "></form></div></div><div class=\"row mainTitles\"> <div class=\"col-8\">Dish Name</div> <div class=\"col-4\">" +
            "Cost</div></div>" +
            "<br/><div id=\"menuContent\">" + menuContent + "</div>" +
            "<div class=\"row\"><div class=\"col-12\" id=\"mealTotalCostSide\">" + totalCost + "</div></div>" +
            "<div class=\"row\"><div class=\"col\"><button id=\"confirmButton\" type=\"button\" class=\"btn\" disabled>Confirm Dinner</button></div></div></ul>";


        container.html(content);


        if (length > 0) { confirmButton.disabled = false;}
        else { confirmButton.disabled = true;}

    }

    this.generate();

    this.changeNumberOfGuests = function() {
        // container.find("#numPeopleSide").value = model.getNumberOfGuests(); // remove because this is where the change comes from?
        container.find("#menuContent")[0].innerHTML = this.generateMenuContent();
        container.find("#mealTotalCostSide")[0].innerHTML = model.getTotalMenuPrice() + " SEK";

    }
    this.changeMenu = function() {
        container.find("#menuContent")[0].innerHTML = this.generateMenuContent();
        container.find("#mealTotalCostSide")[0].innerHTML = model.getTotalMenuPrice() + " SEK";

    }

    this.getNumGuestsButton = function() {
        return container.find("#numPeopleSide");
    }
    this.getConfirmButton = function() {
        return container.find("#confirmButton");
    }
};