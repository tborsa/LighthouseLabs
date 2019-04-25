class Startscene extends Phaser.Scene{
    constructor(){
        super({key: "Startscene"});
    }

    preload(){
        this.load.image("background", "assets/background.png");
        this.load.spritesheet("dino", "assets/dino.png", {frameWidth: 24, frameHeight: 21});
        this.load.spritesheet("tiles", "assets/tiles.png", {frameWidth: 8, frameHeight: 8});

    }

    create(){
        this.background = this.add.image(0,0, 'background').setOrigin(0, 0);
        //player;
        this.player = this.physics.add.sprite(50, 350, "dino").setScale(4,4);
        this.player.body.bounce.y = 0.2;
        this.player.body.gravity.y = 1200;
        this.player.body.collideWorldBounds = true;
        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dino', { start: 4, end: 10 }),
            frameRate: 10,
            repeat: -1
        });
        
        this.anims.create({
            key: 'turn',
            frames: this.anims.generateFrameNumbers('dino', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dino', { start: 4, end: 10 }),
            frameRate: 10,
            repeat: -1
        });
        //platforms
        this.platforms = this.physics.add.staticGroup();
        this.platforms.create(400, 480, 'tiles', 84).setScale(100,2).refreshBody();
        this.platforms.create(600, 400, 'tiles',84).setScale(20,2).refreshBody();;
        this.platforms.create(50, 300, 'tiles',84).setScale(20,2).refreshBody();;;
        this.platforms.create(750, 270, 'tiles',84).setScale(20,2).refreshBody();;;
        
        //Coins
        this.coins = this.physics.add.group({
            key: 'tiles',
            repeat: 11,
            frame: 18,
            setXY: { x: 12, y: 0, stepX: 70 }
        });
        this.anims.create({
            key: 'spin',
            frames: this.anims.generateFrameNumbers('tiles', { start: 18, end: 23 }),
            frameRate: 10,
            repeat: -1
        });

        this.coins.children.iterate(function (child) {
            child.setScale(4,4);
            child.setBounceY(Phaser.Math.FloatBetween(0.1, 0.7));
            child.anims.play('spin', true);
        });

        this.physics.add.collider(this.player, this.platforms);
        this.physics.add.collider(this.coins, this.platforms);
        this.physics.add.overlap(this.player, this.coins, this.collectStar, null, this);
        this.cursors = this.input.keyboard.createCursorKeys()
    }

    update(delta){
        if (this.cursors.left.isDown)
        {
            this.player.setVelocityX(-160);
            this.player.setScale(-4,4);
            this.player.anims.play('left', true);
        }
        else if (this.cursors.right.isDown)
        {
            this.player.setVelocityX(160);
            this.player.setScale(4,4);
            this.player.anims.play('right', true);
        }
        else
        {
            this.player.setVelocityX(0);

            this.player.anims.play('turn', true);
        }

        if (this.cursors.up.isDown && this.player.body.touching.down )
        {
            this.player.anims.play('turn', true);
            this.player.setVelocityY(-1000);
        }
    }

    collectStar(player, coin){
        coin.disableBody(true, true);
    }
}