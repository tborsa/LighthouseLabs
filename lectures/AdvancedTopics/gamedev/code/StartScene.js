

class Startscene extends Phaser.Scene {

  preload () {
    //load assets into the enviornment
    this.load.image('background', 'assets/background.png');
    this.load.spritesheet('dino', 'assets/dino.png', {frameWidth: 24, frameHeight: 21});
    this.load.spritesheet('tiles', 'assets/tiles.png', {frameWidth: 8, frameHeight: 8});

  }

  create () {
    //bind assets to game objects
    this.background = this.add.image(0,0, 'background').setOrigin(0,0);
    //player
    this.player = this.physics.add.sprite(100, 200, 'dino').setScale(3,3);
    this.player.body.collideWorldBounds = true;
    this.anims.create({
      key: 'left',
      frames: this.anims.generateFrameNumbers('dino', {start: 10 , end: 15}).reverse(),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'right',
      frames: this.anims.generateFrameNumbers('dino', {start: 4 , end: 9}),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('dino', {start: 0 , end: 3}),
      frameRate: 10,
      repeat: -1
    });

    //platforms
    this.platforms = this.physics.add.staticGroup();
    this.platforms.create(400, 490, 'tiles', 84).setScale(100,2).refreshBody();
    this.platforms.create(600, 300, 'tiles', 84).setScale(6,2).refreshBody();
    this.platforms.create(300, 400, 'tiles', 84).setScale(5,2).refreshBody();
    this.platforms.create(500, 200, 'tiles', 84).setScale(8,2).refreshBody();

    //coins
    this.coins = this.physics.add.group({
      key: 'tiles',
      repeat: '10',
      frame: 18,
      setXY: {x: 20, y:0, stepX: 60}
    });
    
    this.coins.children.iterate((coin)=>{
      coin.setScale(4,4);
      coin.setBounceY(Phaser.Math.FloatBetween(0.8, 1));
    });
    
    // user controlls
    this.cursors = this.input.keyboard.createCursorKeys();
    
    this.doublejump = 2;
    
    this.physics.add.collider(this.player, this.platforms);
    this.physics.add.collider(this.coins, this.platforms);

    this.physics.add.overlap(this.player, this.coins, this.pickupCoin);

  }

  pickupCoin (player, coin) {
    coin.disableBody(true, true);
  }

  update () {
    if (this.cursors.right.isDown) {
      this.player.anims.play('right', true);
      this.player.body.setVelocityX(300);
    } else if (this.cursors.left.isDown) {
      this.player.anims.play('left', true);
      this.player.body.setVelocityX(-300);
    } else {
      this.player.anims.play('idle', true);
      this.player.body.setVelocityX(0);
    }

    if (this.cursors.up.isDown ) {
      this.player.body.setVelocityY(-600);
      console.log(this.doublejump);
    
    }
    
  }


};