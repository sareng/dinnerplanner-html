var StartController = function(genController, view, model) {

	startbtn = view.getStartButton()[0]; // prob change from searchin
	var startListener = function(evt){
		genController.startDinner();
	}
	startbtn.addEventListener("click", startListener , false);

}