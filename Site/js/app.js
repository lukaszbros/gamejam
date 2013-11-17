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

function PlayerADisconnected()
{
    $("#waitForPlayerA").show();
    $("#playerAReady").hide();
    playerAConnected = false;
}

function PlayerBDisconnected()
{
    $("#waitForPlayerB").show();
    $("#playerBReady").hide();
    playerBConnected = false;
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


function HideLoadingGame()
{
    $("#ChoosePlayer").show();
    $("#LoadingBar").hide();
}


function CheckIfPlayersConnected()
{
    if (playerAConnected && playerBConnected)
    {
        ShowLoadingGame();
        setTimeout(function(){ DipslayGame(); }, 3000);
    } else if (!playerAConnected || !playerBConnected){
        $("#mainPage").show();
        $("#phaser-example").hide();
        HideLoadingGame();
        game = null;
    }
}


function DipslayGame()
{
    $("#mainPage").hide();
    $("#phaser-example").show();
    showGame();
}
socket.on('player_disconnected', function(data){
    if (data.playerId == playerAId) {
        console.log("Player A is disconnected")
        playerAId = 0;
        PlayerADisconnected();
    }

    if (data.playerId == playerBId) {
        console.log("Player B is disconnected")
        playerBId = 0;
        PlayerBDisconnected();
    }
});

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
		if (data.move.b > 40) {
			playerAMove = 2;
		} else if (data.move.b > 10) {
			playerAMove = 1;
		} else if (data.move.b < -30) {
			playerAMove = -2;
		} else if (data.move.b < -10) {
			playerAMove = -1;
		} else {
			playerAMove = 0;
		}		
	} else {
		if (data.move.b > 40) {
			playerBMove = 2;
		} else if (data.move.b > 10) {
			playerBMove = 1;
		} else if (data.move.b < -30) {
			playerBMove = -2;
		} else if (data.move.b < -10) {
			playerBMove = -1;
		} else {
			playerBMove = 0;
		}
	}
	//console.log('playerA ' + playerAMove + ' - playerB ' + playerBMove);
})
