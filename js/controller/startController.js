var StartController = function(genController, view, model) {

	startbtn = document.getElementById("startButton"); // prob change from searchin
	var startListener = function(evt){
		genController.showSelectDishPage();
	}
	startbtn.addEventListener("click", startListener , false);

}