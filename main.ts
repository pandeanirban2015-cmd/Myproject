let Hand = 0
input.onGesture(Gesture.Shake, function () {
    Hand = randint(0, 10)
    if (Hand == 6) {
        basic.showString("Aniket")
    }
})
