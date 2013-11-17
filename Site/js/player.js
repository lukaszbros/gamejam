var socket = io.connect('http://racinglife.net:8090');
socket.emit('player_connected',{player:'A'});
function devOrientHandler(eventData) {
  socket.emit('player_move',eventData)
}
        
if (window.DeviceOrientationEvent) {
	console.log('DeviceOrientation is supported');
    window.addEventListener('deviceorientation', devOrientHandler, false);
} else {
    console.log('Error! DeviceOrientation not supported');
}