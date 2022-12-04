class Button extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, spriteSheet) {
        super(scene, x, y);
        this._scene = scene;
        
        this._sprite = null;
        this._wasClicked = false;
        this._enableClick = true;
    }

    initInteractive() {
        this._sprite.setInteractive();
        this._sprite.on('pointerdown', this.onClicked.bind(this));
    }

    onClicked() {
        if(!this._enableClick) return;
        if(this._wasClicked) return;

        this._scene.tweens.add({
            targets: this._sprite,
            scaleX: 0.9,
            scaleY: 0.9,
            yoyo: true,
            duration: 100,

            onStart: function() {
                this._wasClicked = true;
            }.bind(this),

            onComplete: function() {
                this.handleClick();
                this._wasClicked = false;
            }.bind(this)
        });
    }

    enable() {
        this._enableClick = true;
    }

    disable() {
        this._enableClick = false;
    }
}