const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 500,
  physics: {
    arcade: {
      gravity: {y: 1500}
    },
    default: 'arcade'
  },
  pixelArt: true,
  scene: [Startscene]
};

const game = new Phaser.Game(config);