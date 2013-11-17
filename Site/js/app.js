var socket = io.connect('http://racinglife.net:8090');
var playerAConnected;
var playerBConnected;


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
        PlayerAReady();
    }

    if (data.player == "B") {
        console.log("Player B is ready")
        PlayerBReady();
    }
});

socket.on('player_move', function(data){
	console.log(data);
})
