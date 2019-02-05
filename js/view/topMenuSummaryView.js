
var TopMenuSummaryView = function (container, model) {
    this.update = function(model, changeDetails){
        if(changeDetails.changeType == "guests") {
            this.changeNumberOfGuests();
        }
    }.bind(this);  
    model.addObserver(this.update);

    var guests = model.getNumberOfGuests();
    var totalCost = model.getTotalMenuPrice() + " SEK";


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

    // content = "<nav class=\"navbar navbar-expand-md navbar-light bg-light col-xs-12 col-sm-12 col-md-12 col-lg-12 topMenu\" >" +
    //     "<div class=\"navbar-brand\">" +
    //     "<span class=\"menu-collapsed\">" +
    //     "My Dinner" +
    //     "</span>" +
    //     "</div>" +
    //     "<div id=\"numberOfGuests\" class=\"col-4\">: 3 people</div>" +
    //     "<button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">" +
    //     "<span class=\"navbar-toggler-icon\"></span>" +
    //     "</button>" +
    //     "<div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">" +
    //     "<ul class=\"navbar-nav\">" +
    //     "<button class=\"btn  my-2 my-lg-0\">" +
    //     "Go back and edit dinner</button>" +
    //     "</ul>" +
    //     "</div>" +
    //     "</nav>";

    container.html(content);

    this.changeNumberOfGuests = function() {
        document.getElementById("numberOfGuests").innerHTML= "My dinner: " + model.getNumberOfGuests() + " people"; 
    }
};



