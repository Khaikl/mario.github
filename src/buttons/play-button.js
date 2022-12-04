class PlayButton extends Button {
    constructor(scene, x, y) {
        super(scene, x, y, "playButton");

        this._sprite = scene.add.sprite(x, y, "playButton");
        this.initInteractive();
    }

    handleClick() {
        this._scene.startGamePlay();
    }
}