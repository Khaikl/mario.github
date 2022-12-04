class Flag {
    constructor(scene) {
        const flagObject = scene.map.getObjectLayer('flag').objects[0];
        const flagCoordinates = scene.tileset.texCoordinates[962]; // 962 là chỉ số ô xếp trong ô xếp cho cờ
        const flagRoot = scene.platform.getTileAt(153, 20); // Lấy gốc của cờ với vị trí gạch

        this.scene = scene;
        this.sprite = scene.add.tileSprite(flagObject.x, flagObject.y, 16, 16, 'tiles')
            .setOrigin(0, 1)
            .setTilePosition(flagCoordinates.x, flagCoordinates.y);

        flagRoot.setCollisionCallback(() => {
            flagRoot.collisionCallback = null; // Set to null to make sure the callback only runs once

            
            const particles = scene.add.particles('atlas', 'mario-atlas_13');
            const emitter = particles.createEmitter({
                x: flagObject.x,
                y: flagObject.y - flagObject.height,
                scale:  { start: 1, end: 0 },
                speed:  { min: 50, max: 100 },
                angle:  { min: 0, max: -180 },
                rotate: { min: 0, max: 360 },
                alpha: .5
            });

scene.tweens.add({
    targets: this.sprite,
    ease: 'Linear',
    y: '+=60',
    duration: 800,
    onComplete: () => emitter.stop()
});

this.scene.input.keyboard.shutdown();
        });
    }
}
