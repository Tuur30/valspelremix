input.onButtonPressed(Button.A, function () {
    Speler.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Speler.change(LedSpriteProperty.X, 1)
})
let Gewonnen = false
let Speler: game.LedSprite = null
Speler = game.createSprite(2, 4)
let Munt = game.createSprite(2, 0)
Munt.turn(Direction.Right, 90)
game.setScore(0)
let PauzeTijd = 1000
basic.forever(function () {
    basic.pause(PauzeTijd)
    Munt.move(1)
    if (Munt.isTouching(Speler)) {
        game.addScore(1)
        Munt.set(LedSpriteProperty.Y, 0)
        Munt.set(LedSpriteProperty.X, randint(0, 4))
        PauzeTijd += -25
    }
    if (Munt.get(LedSpriteProperty.Y) == 4) {
        game.gameOver()
        game.setScore(0)
        PauzeTijd = 1000
    }
    if (game.score() == 30) {
        Gewonnen = true
        while (Gewonnen == true) {
            basic.showLeds(`
                . # . # .
                . . . . .
                # . . . #
                # . . . #
                . # # # .
                `)
            basic.pause(1000)
            basic.showString("Je hebt het uitgespeeld!!! Proficiat")
        }
    }
})
