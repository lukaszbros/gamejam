var socket = io.connect('http://racinglife.net:8090');

socket.on('player_connected', function(data){
   	console.log('player_connected');
   	console.log(data);        	
});