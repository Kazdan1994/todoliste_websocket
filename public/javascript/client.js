/* On se connecte */
var socket = io.connect("http://localhost:8080");

// Mettre à jour la todoliste
socket.on("todo", function(todo){
	$("#todo").empty();
	for(var i=0; i<todo.length; i++){
		$("#todo").append("<div class=\"alert alert-info\"><p class=\"text-center\">"
				+ todo[i]
				+ "</p><p class=\"text-right\"><button class=\"btn btn-danger\"><span class=\"glyphicon glyphicon-trash\"></button></p></div>");
	}
});

// Ajouter une tache
$("#todoForm").submit(function(){
	var tache = $("#tache").val();
	socket.emit("newTask", tache);
	$("#todo").append("<div class=\"alert alert-info\"><p class=\"text-center\">"
			+ todo[i]
			+ "</p><p class=\"text-right\"><button class=\"btn btn-danger\"><span class=\"glyphicon glyphicon-trash\"></button></p></div>");
	$("#tache").val("").focus();
	return false;
});

// Supprimer une tache
$("#todo").on("click", "button", function(){
	$(this).text("");
	var task = $(this).closest("li").text();
	socket.emit("deleteTask", task);
	$(this).closest("li").remove();
});
