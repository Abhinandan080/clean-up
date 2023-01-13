scene.onHitWall(SpriteKind.Food, function (sprite, location) {
    sprite.destroy()
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    info.startCountdown(10)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.rings, 500)
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level6`)
let Dust_Bin = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . . f 1 1 1 1 1 1 f . . . . 
    . . f f f f f f f f f f f f . . 
    . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    . f 1 1 1 1 1 1 1 1 1 1 1 1 f . 
    . . f 1 f 1 f 1 1 f 1 f 1 f . . 
    . . f 1 f 1 f 1 1 f 1 f 1 f . . 
    . . f 1 f 1 f 1 1 f 1 f 1 f . . 
    . . f 1 f 1 f f f f 1 f 1 f . . 
    . . f 1 f 1 f 1 1 f 1 f 1 f . . 
    . . f 1 f 1 f 1 1 f 1 f 1 f . . 
    . . f 1 f 1 f 1 1 f 1 f 1 f . . 
    . . f 1 1 1 1 1 1 1 1 1 1 f . . 
    . . f 1 1 1 1 1 1 1 1 1 1 f . . 
    . . . f f f f f f f f f f . . . 
    . . . . . f . . . . f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Dust_Bin, 100, 0)
Dust_Bin.setPosition(75, 89)
info.setScore(0)
info.setLife(5)
game.onUpdateInterval(2000, function () {
    mySprite = sprites.create(img`
        . . . . . . . . . . f d f . . . 
        . . . . . f f f . f d f . . . . 
        . . . . f 7 7 7 f d f . . . . . 
        . . . f 7 7 7 7 7 7 7 f . . . . 
        . . f 7 7 7 7 7 7 7 7 7 f . . . 
        . . f 7 7 7 7 7 7 7 7 7 7 f . . 
        . . f 7 7 7 7 7 7 7 7 7 7 f . . 
        . . f 7 7 7 7 7 7 7 7 7 7 f . . 
        . . f 7 7 7 7 7 7 7 7 7 7 f . . 
        . . f 7 7 7 7 7 7 7 7 7 7 f . . 
        . . . f 7 7 7 7 7 7 7 7 f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Food)
    mySprite.setPosition(randint(15, 125), 15)
    mySprite.setVelocity(0, 50)
})
