controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . 4 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, space_plane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let projectile: Sprite = null
let space_plane: Sprite = null
space_plane = sprites.create(img`
    8 8 . . . . . . . . . . . . . . 
    8 8 8 . . . . . . . . . . . . . 
    8 8 8 8 . . . . . . . . . . . . 
    8 8 8 f . . . . . . . . . . . . 
    8 8 8 f 8 . . . . . . . . . . . 
    8 8 6 f 8 c . . . . . . . . . . 
    6 6 6 c 7 c 8 8 . . . . . . . . 
    6 6 7 c 7 c 7 8 8 f c f c c c c 
    7 7 7 6 7 6 5 5 7 f 7 f b d d d 
    7 7 7 6 5 6 6 6 . . . . . . . . 
    7 7 7 f 6 6 . . . . . . . . . . 
    7 5 5 f 6 . . . . . . . . . . . 
    5 7 7 6 . . . . . . . . . . . . 
    7 7 6 6 . . . . . . . . . . . . 
    6 6 6 . . . . . . . . . . . . . 
    6 6 . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(space_plane, 200, 200)
space_plane.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    bogey = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 8 8 8 8 . . . . . . . . . . 
        . 8 8 9 9 8 8 8 8 . . . . . . . 
        2 4 8 8 8 8 9 8 9 8 8 . . . . . 
        2 8 8 8 8 8 8 8 9 9 9 8 8 . . . 
        2 4 8 9 8 8 8 8 8 8 8 . . . . . 
        . 8 8 8 8 8 8 8 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(160, randint(5, 115))
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
