def on_countdown_end():
    info.change_life_by(-1)
info.on_countdown_end(on_countdown_end)

def on_on_overlap(sprite, otherSprite):
    global isPointsLocked
    if not (isPointsLocked):
        mySprite.start_effect(effects.confetti, 500)
        isPointsLocked = True
        info.change_score_by(1)
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap)

def on_on_overlap2(sprite, otherSprite):
    global isLifeLocked
    if not (isLifeLocked):
        mySprite.start_effect(effects.fire, 500)
        isLifeLocked = True
        info.change_life_by(-1)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap2)

isLifeLocked = False
isPointsLocked = False
mySprite: Sprite = None
info.set_life(10)
ghost = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.player)
controller.move_sprite(mySprite)
mySprite.set_position(randint(0, 50), randint(0, 50))
ghost.set_position(randint(65, 85), randint(65, 85))
Candy = sprites.create(img("""
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . f f e e e e e e e e f f . . 
            . . f f e e e e e e e e f f . . 
            . . f f e e e e e e e e f f . . 
            . . f f e e e e e e e e f f . . 
            . . f f e e e e e e e e f f . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    """),
    SpriteKind.food)
ghost2 = sprites.create(img("""
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
    """),
    SpriteKind.enemy)

def on_update_interval():
    global isPointsLocked, isLifeLocked
    if isPointsLocked:
        isPointsLocked = False
    if isLifeLocked:
        isLifeLocked = False
game.on_update_interval(2000, on_update_interval)

def on_forever():
    pass
forever(on_forever)

def on_update_interval2():
    Candy.x += randint(-25, 25)
    Candy.y += randint(-25, 25)
game.on_update_interval(500, on_update_interval2)

def on_update_interval3():
    if ghost.x != mySprite.x:
        ghost.vx = mySprite.x - ghost.x
    if ghost.y != mySprite.y:
        ghost.vy = mySprite.y - ghost.y
    if ghost2.x != mySprite.x:
        ghost2.vx = mySprite.x - ghost2.x
    if ghost2.x != mySprite.x:
        ghost2.vy = mySprite.x - ghost2.x
game.on_update_interval(200, on_update_interval3)
