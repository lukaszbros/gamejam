var express = require('express');
var socket = require('socket.io');
var app = express();
http = require('http');
server = http.createServer(app);
var io = socket.listen(server);

server.listen(8090);

io.sockets.on('connection', function(client) {
	console.log('Client connected...' + client.id);
			
	client.on('player_connected', function(data) {
		console.log('Player joined player: ' + data.player + ', client: '  + client.id);
		
		// Broadcast new oponent to connected
		client.broadcast.emit("player_connected", {player: data.player, playerId: client.id});
		console.log('Player joined');
	});
	
	// Broadcast movement of oponent
	client.on('player_move', function(data){
		client.broadcast.emit("player_move", {playerId: client.id, data: data});
	});
	
	// Broadcast disconnect of oponent
	client.on('disconnect', function() {
		client.broadcast.emit("oponent_disconnected", {playerId: client.id});
		console.log('Client disconnected...');
	});
});
