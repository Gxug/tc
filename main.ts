function c () {
    if (r.isTouching(e)) {
        game.addScore(1)
        r.delete()
        e.delete()
        e = game.createSprite(randint(0, 4), 0)
        a = true
    } else if (r.get(LedSpriteProperty.Y) == 0) {
        r.delete()
        a = true
    }
}
input.onButtonPressed(Button.A, function () {
    if (a) {
        r = game.createSprite(i.get(LedSpriteProperty.X), i.get(LedSpriteProperty.Y))
        r.turn(Direction.Left, 90)
        a = false
    }
})
let r: game.LedSprite = null
let a = false
let e: game.LedSprite = null
let i: game.LedSprite = null
i = game.createSprite(2, 4)
e = game.createSprite(randint(0, 4), 0)
a = true
game.startCountdown(100000)
basic.forever(function () {
    i.move(1)
    i.ifOnEdgeBounce()
    if (r) {
        r.move(1)
        c()
    }
    basic.pause(200)
})
