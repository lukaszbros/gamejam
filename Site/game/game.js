
function preload() {
    game.load.image('ball', 'assets/ball.png');
    game.load.image('pong', 'assets/pong.png');
    game.load.image('pong2', 'assets/pong2.png');
    game.load.image('background', 'assets/background.png');
}
var game;

function showGame()
{
    game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });
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

var playerAMove;

var playerBMove;

function create() {

    background = game.add.sprite(0, 0, 'background');
    
    text = game.add.text(game.world.centerX, 30, "0 : 0", {
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
        ball = ballGroup.create(300, 300, 'ball')
        //ball.name = 'ball' + s;
        ball.body.collideWorldBounds = true;
        ball.body.bounce.setTo(1,1);
        ball.body.velocity.setTo(200, 200);
    }
    
    player1 = players.create(-50, 160, 'pong');
    player1.body.collideWorldBounds = true;
    player1.body.bounce.setTo(1, 1);
    
    player2 = players.create(800 - 20, 160, 'pong2');
    player2.body.collideWorldBounds = true;
    player2.body.bounce.setTo(1, 1);
    
    cursors = game.input.keyboard.createCursorKeys();
}

function update() {
    
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
    ball.body.velocity.setTo(200, 200); 
    
    if(loser == 1){
        player2Score++;
    }else{
        player1Score++;
    }
    
    text.setText(player1Score + " : " + player2Score);
    
    console.log("player " + loser + " lose"); 
}

function render() {



}
