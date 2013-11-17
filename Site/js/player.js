var socket = io.connect('http://racinglife.net:8090');
<<<<<<< HEAD
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
=======
socket.emit('player_connected',{player:'A'});
>>>>>>> 0650cd5183d4e9ed0569e18bab3574a18994ef1d
