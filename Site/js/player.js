var socket = io.connect('http://racinglife.net:8090');
socket.emit('player_connected',{player:'A'});
function devOrientHandler(eventData) {
	giro = new Array();
	giro['alpha'] = eventData.alpha;
    giro['beta'] = eventData.beta;
    giro['gamma'] = eventData.gamma;
    console.log(eventData);
  	socket.emit('player_move',giro);
}
        
if (window.DeviceOrientationEvent) {
	console.log('DeviceOrientation is supported');
    window.addEventListener('deviceorientation', devOrientHandler, false);
} else {
    console.log('Error! DeviceOrientation not supported');
}
