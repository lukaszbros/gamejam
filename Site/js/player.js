var socket = io.connect('http://racinglife.net:8090');
socket.emit('player_connected',{player:'A'});