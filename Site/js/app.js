var socket = io.connect('http://racinglife.net:8090');

socket.on('player_connected', function(data){
   	console.log('player_connected');
    console.log(data);

    if (data.player == "A") {
        console.log("Player A is ready")
        PlayerAReady();
    }
    function PlayerAReady()
    {
        $("#waitForPlayerA").hide();
        $("#playerAReady").show();
    }

    function PlayerBReady(){
        $("#waitForPlayerB").hide();
        $("#playerBReady").show();
    }
});