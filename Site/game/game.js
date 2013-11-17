
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {
    game.load.image('ball', 'assets/ball.png');
    game.load.image('pong', 'assets/pong.png');
}

var ball;
var player1;
var player2;
var players;
var cursors;

function create() {
    
    game.world.setBounds(-50,0,900, 600);
    
    ball =  game.add.group();
    players = game.add.group();

    for (var i = 0; i < 1; i++)
    {
        var s = ball.create(game.world.randomX, game.world.randomY, 'ball')
        s.name = 'ball' + s;
        s.body.collideWorldBounds = true;
        s.body.bounce.setTo(1, 1);
        //s.body.velocity.setTo(100 + Math.random() * 40, 10 + Math.random() * 40);
        s.body.velocity.setTo(200, 200);
    }
    
    player1 = players.create(0, 160, 'pong');
    player1.body.collideWorldBounds = true;
    player1.body.bounce.setTo(1, 1);
    
    player2 = players.create(800 - 28, 160, 'pong');
    player2.body.collideWorldBounds = true;
    player2.body.bounce.setTo(1, 1);
    
    cursors = game.input.keyboard.createCursorKeys();
    
   // player1 = game.add.sprite(100 - 28, 160, 'pong');
    //player1.body.collideWorldBounds = true;
    //player1.body.bounce.setTo(0, 0);
    
//    player2 = game.add.sprite(700, 160, 'pong');
  //  player2.body.collideWorldBounds = true;
    //player2.body.bounce.setTo(0, 0);
    

}

function update() {
    
    if (cursors.up.isDown)
    {
         player1.body.y -= 5
    }
    
    if (cursors.down.isDown)
    {
         player1.body.y += 5
    }
    
    if (cursors.left.isDown)
    {
         player2.body.y -= 5
    }
    
    if (cursors.right.isDown)
    {
         player2.body.y += 5
    }
    
    
    
    game.physics.collide(ball, players);
    
    
    
    

}

function render() {



}
