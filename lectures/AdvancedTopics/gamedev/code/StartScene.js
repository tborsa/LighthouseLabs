class Startscene extends Phaser.Scene{
  constructor(){
      super({key: "Startscene"});
  }
  preload(){
      this.load.image("background", "assets/background.png");
      this.load.spritesheet("dino", "assets/dino.png", {frameWidth: 24 , frameHeight: 21})
      this.load.spritesheet("tiles", "assets/tiles.png", {frameWidth: 8, frameHeight: 8})
  }

  create(){
      this.background = this.add.image(0,0, "background").setOrigin(0,0);
      
      //player
        this.player = this.physics.add.sprite(50, 350, "dino", ).setScale(4,4);
        this.anims.create({
            key: "left", 
            frames: this.anims.generateFrameNumbers("dino", {start: 10, end: 15}).reverse(),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "right", 
            frames: this.anims.generateFrameNumbers("dino", {start: 4, end: 9}),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "idle", 
            frames: this.anims.generateFrameNumbers("dino", {start: 0, end: 3}),
            frameRate: 10,
            repeat: -1
        })
      //platforms
      this.platforms = this.physics.add.staticGroup();
      this.platforms.create(400,470, 'tiles', 84).setScale(100,2).refreshBody();
      this.platforms.create(250, 200 , 'tiles', 84).setScale(15,2).refreshBody();
      this.platforms.create(500, 350 , 'tiles', 84).setScale(15,2).refreshBody();
      this.platforms.create(700, 100 , 'tiles', 84).setScale(15,2).refreshBody();
      
      this.physics.add.collider(this.player, this.platforms);

      //coins

      this.coins = this.physics.add.group({
          key: "tiles",
          repeat: 10,
          frame: 18,
          setXY: { x: 10, y:0 , stepX: 100}
      })
      this.anims.create({
          key: "coin",
          frames: this.anims.generateFrameNumbers('tiles', {start: 18, end:23}),
          frameRate: 10,
          repeat: -1
      })


      this.coins.children.iterate((child)=>{
          child.setScale(4,4);
          child.setBounceY(Phaser.Math.FloatBetween(0.8, 1));
          child.anims.play("coin", true);
      })

      //Can Have This
      this.physics.add.collider(this.platforms, this.coins);
      //Or This
      //this.physics.add.overlap(this.player, this.coins, this.collectCoin, null, this);

      this.physics.add.collider(this.player, this.coins, this.playerCoins);
      // this.player.body.collideWorldBounds = true;
      

      this.cursors = this.input.keyboard.createCursorKeys();
  }
  playerCoins(player, coin) {
    if(coin.body.touching.down){

        coin.setVelocityY(-1000);
    }
  }
  collectCoin(player, coin){
      console.log("hey");
      coin.setVelocityY(-1000);
  }
  update(){
    if(this.cursors.left.isDown){
        this.player.setVelocityX(-500);
        this.player.anims.play("left", true);
    }else if(this.cursors.right.isDown){
        this.player.setVelocityX(500);
        this.player.anims.play("right", true);
    }else{
        this.player.setVelocityX(0);
        this.player.anims.play("idle", true);
    }  
    if(this.cursors.up.isDown && this.player.body.touching.down){
        this.player.setVelocityY(-1000);
    }


  }
}