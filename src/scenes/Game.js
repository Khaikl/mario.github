class Game extends Phaser.Scene {

    constructor () {
        super('Game');
    }

    
    // preload() {
    //     this.load.image('tiles', './src/assets/img/tiles.png');
    //     this.load.tilemapTiledJSON('map', './src/assets/json/map.json');
    //     this.load.atlas('atlas', './src/assets/img/mario-atlas.png','./src/assets/json/mario-atlas.json');

    //     this.load.on('complete', () => {
    //         new Animation(this);
    //     });
    // }

    create() {
        const noCollisionTiles = [
            -1, // qoái đứng trên map
            450
        ];

        this.map = this.make.tilemap({ key: 'map' });
        this.tileset = this.map.addTilesetImage('map-tileset', 'tiles');
        this.platform = this.map.createStaticLayer('platform', this.tileset, 1, 1);

        this.map.createStaticLayer('background', this.tileset, 1, 1);
        this.platform.setCollisionByExclusion(noCollisionTiles,true); // note: cho mario đứng trên mặt đất

        this.player = new Player(this, 25, 400).collideWith(this.platform);
        this.goombas = new Goomba(this).collideWith(this.platform);
        this.coins = new Coin(this).collideWith(this.player.sprite);
         this.flag = new Flag(this);
        this.debugger = new Debugger(this);

        this.inputs = this.input.keyboard.createCursorKeys();
    }
    
    update() {
        this.player.update(this.inputs);
        this.goombas.update();
        this.coins.update();
        this.debugger.debuggerEnabled && this.debugger.update();
    }
}