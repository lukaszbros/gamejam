var socket = io.connect('http://racinglife.net:8090');
var playerAConnected;
var playerBConnected;
var playerAId;
var playerBId;
var playerAMove = 0;
var playerBMove = 0;

function PlayerAReady()
{
    $("#waitForPlayerA").hide();
    $("#playerAReady").show();
    playerAConnected = true;
    CheckIfPlayersConnected();
}

function PlayerBReady(){
    $("#waitForPlayerB").hide();
    $("#playerBReady").show();
    playerBConnected = true;
    CheckIfPlayersConnected();
}

function ShowLoadingGame()
{
    $("#ChoosePlayer").hide();
    $("#LoadingBar").show();
}

function ShowGame()
{
    console.log('showgame');
}

function CheckIfPlayersConnected()
{
    if (playerAConnected && playerBConnected)
    {
        ShowLoadingGame();
        setTimeout(function(){ ShowGame(); }, 3000);
    }
}

socket.on('player_connected', function(data){
   	console.log('player_connected');
    console.log(data);

    if (data.player == "A") {
        console.log("Player A is ready")
        playerAId = data.playerId;
        PlayerAReady();
    }

    if (data.player == "B") {
        console.log("Player B is ready")
        playerBId = data.playerId;
        PlayerBReady();
    }
});

socket.on('player_move', function(data){
	if (data.playerId == playerAId) {
		if (data.b > 20) {
			playerAMove = 1;
		} else if (data.b < 20) {
			playerAMove = -1;
		} else {
			playerAMove = 0;
		}
		console.log('playerA ' + playerBMove);
	} else {
		if (data.b > 20) {
			playerBMove = 1;
		} else if (data.b < 20) {
			playerBMove = -1;
		} else {
			playerBMove = 0;
		}
		console.log('playerB ' + playerBMove);
	}
})
