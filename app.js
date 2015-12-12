var express = require("express"),
app         = express(),
server      = require('http').createServer(app),
io          = require("socket.io").listen(server),
ent         = require("ent"),
		// On initialise la todoliste à vide
todo        = [];

// On envoie la page html
app.get("/", function(req, res){
	res.sendFile(__dirname + "/views/todo.html");
})
.use(express.static("public"));

// On utilise socket.io
io.sockets.on("connection", function(socket){
	// Envoi de la todoliste au client
	socket.emit("todo", todo)
	// Ajout de la nouvelle tache
	.on("newTask", function(newTask){
		todo.push(ent.encode(newTask));
		socket.broadcast.emit("todo", todo);
	})
	// Suppression de la tache
	.on("deleteTask", function(task){
		var index = todo.indexOf(ent.encode(task));
		todo.splice(index, 1);
		socket.broadcast.emit("todo", todo);
	});
});

server.listen(8080, function() {
	console.log('Serveur d\351marr\351 sur le port : 8080');
});