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


function CheckIfPlayersConnected()
{
    if (playerAConnected && playerBConnected)
    {
        ShowLoadingGame();
        setTimeout(function(){ DipslayGame(); }, 3000);
    }
}

function DipslayGame()
{
    $("#mainPage").hide();
    showGame();
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
		if (data.move.b > 20) {
			playerAMove = 1;
		} else if (data.move.b < -20) {
			playerAMove = -1;
		} else {
			playerAMove = 0;
		}		
	} else {
		if (data.move.b > 20) {
			playerBMove = 1;
		} else if (data.move.b < -20) {
			playerBMove = -1;
		} else {
			playerBMove = 0;
		}
		
	}
	console.log('playerA ' + playerAMove + ' - playerB ' + playerBMove);
})
