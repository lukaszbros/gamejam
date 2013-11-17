$(document).ready(function() {
	var mainLoop;
	
	var alpha;
    var beta;
    var gamma;
	
	var socket = io.connect('http://racinglife.net:8090');
	socket.emit('player_connected',{player:player});
	
	function devOrientHandler(eventData) {
		alpha = eventData.alpha;
        beta = eventData.beta;
        gamma = eventData.gamma;
            
        if(!mainLoop) {
        	mainLoop = setInterval(step, 50);    
        }
	}
	
	function step() {
		socket.emit('player_move', {
            a: alpha, 
            b: beta, 
            c: gamma,
        });
    }
	        
	if (window.DeviceOrientationEvent) {
		console.log('DeviceOrientation is supported');
	    window.addEventListener('deviceorientation', devOrientHandler, false);
	} else {
	    console.log('Error! DeviceOrientation not supported');
	}
});