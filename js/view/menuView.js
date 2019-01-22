
var MenuView = function (container, model) {


    var menuItem = container.find("#meunuItem");
    var model = new DinnerModel();


    /**
     * Here we use @var {jQuery object} numberOfGuests that is a reference to <span>
     * in our view to dynamically set it's value to "Hello World".
     */
    menuItem.html(model.getDish(1).name + "name");
    console.log(model.getDish(1).name);

}

