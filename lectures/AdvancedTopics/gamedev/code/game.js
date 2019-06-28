const config = {
    type: Phaser.AUTO, 
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
}


const game = new Phaser.Game(config);
