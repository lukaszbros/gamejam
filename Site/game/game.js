
function preload() {
    game.load.image('ball', 'assets/ball.png');
    game.load.image('pong', 'assets/pong.png');
    game.load.image('pong2', 'assets/pong2.png');
    game.load.image('background', 'assets/background.png');
}
var game;

function showGame()
{

    if (typeof game === "undefined") {
        game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });
    }
}

function ResetScore()
{
    if (typeof game === "undefined") {
        game.resetScore();
    }
}

var ballGroup;
var ball;
var player1;
var player2;
var players;
var cursors;
var player1Score;
var player2Score;
var text;
var background;
var speedFactor;

var playerAMove;

var playerBMove;

function create() {
    
    speedFactor = 1;

    background = game.add.sprite(0, 0, 'background');
    
    text = game.add.text(game.world.centerX - 28 - 16, 30, "00 : 00", {
        font: "30px Arial",
        fill: "#ff0044",
        align: "center"
    });
    
    player1Score = 0;
    player2Score = 0;
    
    game.world.setBounds(-50,0,900, 600);
    
    ballGroup =  game.add.group();
    players = game.add.group();

    for (var i = 0; i < 1; i++)
    {
        ball = ballGroup.create(300, 300, 'ball');
        //ball.name = 'ball' + s;
        ball.body.collideWorldBounds = true;
        ball.body.bounce.setTo(1,1);
        ball.body.velocity.setTo(200, 200);
    }
    
    player1 = players.create(-50, 160, 'pong');
    player1.body.collideWorldBounds = true;
    player1.body.bounce.setTo(1, 1);
    
    player1.body.immovable = true;
    
    player2 = players.create(800 - 20, 160, 'pong2');
    player2.body.collideWorldBounds = true;
    player2.body.bounce.setTo(1, 1);
    
    player2.body.immovable = true;
    
    cursors = game.input.keyboard.createCursorKeys();
}

function update() {
    
    player2.body.velocity.y = 0;
    player1.body.velocity.y = 0;

    if (cursors.up.isDown || playerAMove == 1)
    {
         player1.body.y -= 5
    }
    
    if (cursors.down.isDown || playerAMove == -1)
    {
         player1.body.y += 5
    }
    
    if (cursors.left.isDown || playerBMove == 1)
    {
         player2.body.y -= 5
    }
    
    if (cursors.right.isDown || playerBMove == -1)
    {
         player2.body.y += 5
    }
    
    if (cursors.up.isDown || playerAMove == 2)
    {
         player1.body.y -= 10
    }
    
    if (cursors.down.isDown || playerAMove == -2)
    {
         player1.body.y += 10
    }
    
    if (cursors.left.isDown || playerBMove == 2)
    {
         player2.body.y -= 10
    }
    
    if (cursors.right.isDown || playerBMove == -2)
    {
         player2.body.y += 10
    }
    
    game.physics.collide(ballGroup, players);

    
    if(ball.body.x < -40)
    {
      reset(1);
    }
    
    if(ball.body.x > 790)
    {
      reset(2); 
    }
    
    
}
function reset(loser)
{
    ball.body.x = 300;
    ball.body.y = 300;
    var direction = Math.random() - .5;
    if (direction > 0)
    {
        ball.body.velocity.setTo(  200  , 200 ); 
    }else 
    {
        ball.body.velocity.setTo( - 200  , 200 ); 
    }
    
    
    if(loser == 1){
        player2Score++;
    }else{
        player1Score++;
    }
    
    var textScore;
    
    if(player1Score < 10)
    {
    textScore = "0" + player1Score + " : ";
    }else
    {
    textScore = player1Score + " : ";   
    }
    
    if(player2Score < 10)
    {
    textScore += "0" + player2Score;
    }else
    {
    textScore += player2Score;   
    }
    
    text.setText(textScore);
     
}

function resetScore()
{
    player1Score = 0;
    player2Score = 0;
    text.setText("00 : 00");
}

function render() {



}
