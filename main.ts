let naamOmTeLatenZien = " Seth"
basic.forever(function () {
    basic.showString(naamOmTeLatenZien)
    basic.showIcon(IconNames.Heart)
    basic.showString(" Codefever ")
})

input.onButtonPressed(Button.A, function () {
    naamOmTeLatenZien = " Everybody"
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
    basic.showString("Mammie")
basic.showIcon(IconNames.Heart)
    })
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Duck)
})
input.onSound(DetectedSound.Quiet, function() {
    
    basic.showIcon(IconNames.Angry)
})
