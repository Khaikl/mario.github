class Menu extends Phaser.Scene {

    constructor () {
        super('Menu');
    }

    preload() {
        this.load.spritesheet('background', './src/assets/menu/mario.png', {frameWidth: 1200, frameHeight: 1200});
        this.load.spritesheet('playButton', './src/assets/menu/play-button.png', {frameWidth: 195, frameHeight: 204});
    }

    create() {
        var cameraWidth = this.cameras.main.width;
        var cameraHeight = this.cameras.main.height;

        this.add.sprite(cameraWidth / 2, cameraHeight / 2, 'background');
        this.btnPlay = new PlayButton(this, cameraWidth / 2, cameraHeight / 2);
    }

    startGamePlay() {
        this.scene.start('Game');
    }
    
    update() {
        
    }
}