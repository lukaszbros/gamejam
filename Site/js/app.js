var socket = io.connect('http://racinglife.net:8090');

function PlayerAReady()
{
    $("#waitForPlayerA").hide();
    $("#playerAReady").show();
}

function PlayerBReady(){
    $("#waitForPlayerB").hide();
    $("#playerBReady").show();
}

socket.on('player_connected', function(data){
   	console.log('player_connected');
    console.log(data);

    if (data.player == "A") {
        console.log("Player A is ready")
        PlayerAReady();
    }

    if (data.player == "B") {
        console.log("Player B is ready")
        PlayerBReady();
    }
});

socket.on('player_move', function(data){
	console.log(data.player);
})
