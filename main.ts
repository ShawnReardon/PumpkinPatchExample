sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (!(isPointsLocked)) {
        mySprite.startEffect(effects.confetti, 500)
        isPointsLocked = true
        Score += 1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (!(isLifeLocked)) {
        mySprite.startEffect(effects.fire, 500)
        isLifeLocked = true
        Health += -1
    }
})
let isLifeLocked = false
let isPointsLocked = false
let mySprite: Sprite = null
let Score = 0
let Health = 10
let ghost = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . . 1 2 1 2 1 1 . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . 1 1 2 2 2 1 . . . . . . 
    . . . . 1 1 1 2 1 1 1 . . . . . 
    . . . . . 1 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . . . . . . 7 . . . . . . . 
    . . . 4 4 4 4 4 4 4 4 4 4 4 . . 
    . . . 4 4 4 4 4 4 4 4 4 4 4 . . 
    . . . 4 4 4 4 4 4 4 4 4 4 4 . . 
    . . . 4 4 5 5 5 4 5 5 5 4 4 . . 
    . . . 4 4 5 5 5 4 5 5 5 4 4 . . 
    . . . 4 4 4 4 4 4 4 4 4 4 4 . . 
    . . . 4 4 4 4 4 4 4 4 4 4 4 . . 
    . . . 4 4 4 5 5 5 5 5 4 4 4 . . 
    . . . 4 4 4 5 5 5 5 5 4 4 4 . . 
    . . . 4 4 4 4 4 4 4 4 4 4 4 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setPosition(randint(0, 50), randint(0, 50))
ghost.setPosition(randint(65, 85), randint(65, 85))
let Candy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f 1 f f . . . . . . 
    . . . . . f 1 1 1 f . . . . . . 
    . . . . f f 1 1 1 f f . . . . . 
    . . . . f 4 4 4 4 4 f . . . . . 
    . . . . f 4 4 4 4 4 f . . . . . 
    . . . f 5 1 f 4 f 1 5 f . . . . 
    . . . f 5 f f 5 f f 5 f . . . . 
    . . . f 5 5 5 5 5 5 5 f . . . . 
    . . . f f 5 5 f 5 5 f f . . . . 
    . . . . f 5 5 5 5 5 f . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
let ghost2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . . 1 2 1 2 1 1 . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . 1 1 2 2 2 1 . . . . . . 
    . . . . 1 1 1 2 1 1 1 . . . . . 
    . . . . . 1 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
Candy.setFlag(SpriteFlag.StayInScreen, true)
mySprite.setFlag(SpriteFlag.BounceOnWall, true)
ghost.setFlag(SpriteFlag.BounceOnWall, true)
ghost2.setFlag(SpriteFlag.BounceOnWall, true)
game.onUpdateInterval(2000, function () {
    if (isPointsLocked) {
        isPointsLocked = false
    }
    if (isLifeLocked) {
        isLifeLocked = false
    }
})
forever(function () {
    info.setScore(Score)
    info.setLife(Health)
})
game.onUpdateInterval(500, function () {
    Candy.x += randint(-25, 25)
    Candy.y += randint(-25, 25)
})
game.onUpdateInterval(200, function () {
    if (ghost.x != mySprite.x) {
        ghost.vx = mySprite.x - ghost.x
    }
    if (ghost.y != mySprite.y) {
        ghost.vy = mySprite.y - ghost.y
    }
    if (ghost2.x != mySprite.x) {
        ghost2.vx = mySprite.x - ghost2.x
    }
    if (ghost2.x != mySprite.x) {
        ghost2.vy = mySprite.x - ghost2.x
    }
})
