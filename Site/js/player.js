var socket = io.connect('http://localhost:8090');
socket.emit('player_connected',{player:'A'});