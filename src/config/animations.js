class Animation extends Phaser.Scene{
    constructor() 
    {
        super('Animation');
    }

    preload() {
        this.load.image('tiles', './src/assets/img/tiles.png');
        this.load.tilemapTiledJSON('map', './src/assets/json/map.json');
        this.load.atlas('atlas', './src/assets/img/mario-atlas.png','./src/assets/json/mario-atlas.json');
    }

    create(){
        this.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNames('atlas', {
                prefix: 'mario-atlas_',
                start: 1,
                end: 3,
            }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'idle',
            frames: [{ key: 'atlas', frame: 'mario-atlas_0' }],
            frameRate: 10
        });
    
        this.anims.create({
            key: 'jump',
            frames: [{ key: 'atlas', frame: 'mario-atlas_4' }],
            frameRate: 10
        });
    
        this.anims.create({
            key: 'die',
            frames: [{ key: 'atlas', frame: 'mario-atlas_5' }],
            frameRate: 10
        });
    
        // Goomba
        this.anims.create({
            key: 'goombaRun',
            frames: this.anims.generateFrameNames('atlas', {
                prefix: 'mario-atlas_',
                start: 11,
                end: 12,
            }),
            frameRate: 15,
            repeat: -1
        });
    
        this.anims.create({
            key: 'goombaDie',
            frames: [{ key: 'atlas', frame: 'mario-atlas_10' }],
            frameRate: 10,
            hideOnComplete: true
        });
    
        // Coin xoay
        this.anims.create({
            key: 'rotate',
            frames: this.anims.generateFrameNames('atlas', {
                prefix: 'mario-atlas_',
                start: 6,
                end: 9,
            }),
            frameRate: 10,
            repeat: -1
        });

        this.scene.start('Menu');
    }
}