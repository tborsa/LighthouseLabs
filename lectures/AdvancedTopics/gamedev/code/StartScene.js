class StartScene extends Phaser.Scene{
    constructor(){
        super({key: "StartScene"});
    }
    preload(){
        this.load.image("background", "assets/background.png");
        this.load.spritesheet("dino", "assets/dino.png", {frameWidth: 24, frameHeight: 21});
        this.load.spritesheet("tiles", "assets/tiles.png", {frameWidth: 8, frameHeight: 8});
    }
    create(){
        this.background = this.add.image(0,0, 'background').setOrigin(0,0);
        //Player
        this.player = this.physics.add.sprite(50,350, "dino").setScale(4,4);
        this.player.body.bounce.y = 0.2;
        this.player.body.gravity.y = 1500;
        this.player.body.collideWorldBounds = true;
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

        //Platforms
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 480, 'tiles', 84).setScale(100,2).refreshBody();
        this.platforms.create(600, 400, 'tiles', 84).setScale(20,2).refreshBody();
        this.physics.add.collider(this.player, this.platforms);


        //Coins
        this.coins = this.physics.add.group({
            key: 'tiles',
            repeat: 11,
            frame: 18,
            setXY: { x:12, y:0, stepX: 70}
        });
        this.coins.children.iterate(function(child){
            child.setScale(4,4);
            child.setBounceY(Phaser.Math.FloatBetween(0.1, 0.6));
        });

        this.physics.add.collider(this.coins, this.platforms);
        this.physics.add.overlap(this.player, this.coins, this.collectStar, null, this);


        this.cursors = this.input.keyboard.createCursorKeys();
    }
    collectStar(player, coin){
        coin.disableBody(true,true);
    }
    update(){
        if(this.cursors.left.isDown){
            this.player.setVelocityX(-200);
            this.player.anims.play('left',true);
        }else if(this.cursors.right.isDown){
            this.player.anims.play('right',true);
            this.player.setVelocityX(200);
        }else{
            this.player.anims.play('idle',true);
            this.player.setVelocityX(0);
        }
        if(this.cursors.up.isDown && this.player.body.touching.down){
            this.player.setVelocityY(-1000);
        }
    }
}