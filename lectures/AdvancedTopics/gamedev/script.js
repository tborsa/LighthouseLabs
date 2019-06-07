// Config in game file
var game = new Phaser.Game(config);

var config = {
    type: Phaser.AUTO, //which GL/renderer to use
    width: 800,
    height: 500,
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            gravity: {y: 1500}
        }
    },
    scene: [Startscene]
};



//======================================


class Startscene extends Phaser.Scene{
    constructor(){
        super({key: "Startscene"});
    }

    preload(){

    }

    create(){

    }

    update(){

    }
}

//==============================================

// ADD BACKGROUND
this.load.image("background", "assets/background.png");

this.background = this.add.image(0,0, 'background').setOrigin(0, 0);

//ADDPLAYER
this.load.spritesheet("dino", "assets/dino.png", {frameWidth: 24, frameHeight: 21});

this.player = this.physics.add.sprite(50, 350, "dino").setScale(4,4);

//MAKE PLAYER FALL
this.player.body.bounce.y = 0.2;
this.player.body.gravity.y = 1200;
this.player.body.collideWorldBounds = true;

//USER INPUT
// v in create
this.cursors = this.input.keyboard.createCursorKeys()

if (this.cursors.left.isDown)
{
    this.player.setVelocityX(-160);
}else if{
    
    
}else{
    this.player.setVelocityX(0);
}
if (this.cursors.up.isDown )
{
    this.player.setVelocityY(-1000);
}

// ADD ANIMATIONS
// IDLE 0-3 LEFT 10-15 Right 4-9
this.anims.create({
    key: 'right',
    frames: this.anims.generateFrameNumbers('dino', { start: 10, end: 15 }),
    frameRate: 10,
    repeat: -1 //# of times to reapeat -1 is infinity
});

this.player.anims.play('left', true);

// ADD PLATFORMS 
this.load.spritesheet("tiles", "assets/tiles.png", {frameWidth: 8, frameHeight: 8});

this.platforms = this.physics.add.staticGroup();
this.platforms.create(400, 480, 'tiles', 84).setScale(100,2).refreshBody();
this.platforms.create(600, 400, 'tiles',84).setScale(20,2).refreshBody();;
// add more then...

this.physics.add.collider(this.player, this.platforms);


// Restrict player jump 
this.player.body.touching.down
//ADD COINS
this.coins = this.physics.add.group({
    key: 'tiles',
    repeat: 11,
    frame: 18,
    setXY: { x: 12, y: 0, stepX: 70 }
});

this.coins.children.iterate(function (child) {
    child.setScale(4,4);
    child.setBounceY(Phaser.Math.FloatBetween(0.1, 0.7));
    //child.anims.play('spin', true);
});

this.physics.add.collider(this.coins, this.platforms);

//COIN ANIMATION
this.anims.create({
    key: 'spin',
    frames: this.anims.generateFrameNumbers('tiles', { start: 18, end: 23 }),
    frameRate: 10,
    repeat: -1
});

//COIN pickup              firstobj     secondobj   collisonfunc    testcollision  thiscontext
this.physics.add.overlap(this.player, this.coins, this.collectStar, null, this);

collectStar(player, coin){
    coin.disableBody(true, true);
}