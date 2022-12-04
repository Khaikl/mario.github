class GameOver extends Phaser.Scene {

    constructor () {
        super('GameOver');
    }

    create() {
        this.cameras.main.setBackgroundColor('#000');
        this.scene.start('Game');
        // document.getElementsByClassName('game-over')[0].classList.add('visible');
    }
}
