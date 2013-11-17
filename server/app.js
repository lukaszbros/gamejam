var express = require('express');
var socket = require('socket.io');
var app = express();
http = require('http');
server = http.createServer(app);
var io = socket.listen(server);
var players = new Array();

server.listen(8090);

io.sockets.on('connection', function(client) {
	console.log('Client connected...' + client.id);
			
	client.on('player_connected', function(data) {
		console.log('Player joined player: ' + data.player + 'client: '  + client.id);
		players[data.player] = client.id
		
		// Add client to oponents
		oponents.push(client.id);
		// Broadcast new oponent to connected
		client.broadcast.emit("player_connected", {player: data.player});
		console.log('Player joined');
	});
	
	// Broadcast movement of oponent
	client.on('player_move', function(data){
		console.log(data);
		data.
		client.broadcast.emit("player_move", data);
	});
	
	// Broadcast disconnect of oponent
	client.on('disconnect', function() {
		console.log(oponents.length);
		oponents.pop(client.id);
		client.broadcast.emit("oponent_disconnected", {oponentId: client.id});
		console.log('Client disconnected...');
		console.log(oponents.length);
	});
	
	client.on('oponent_gameover', function() {
		console.log(oponents.length);
		oponents.pop(client.id);
		client.broadcast.emit("oponent_disconnected", {oponentId: client.id});
		console.log('Client oponent_gameover...');
		console.log(oponents.length);
	});
});
