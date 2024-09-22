let zeit = 0
let blinkzeit = 0
basic.forever(function () {
    zeit = input.runningTime()
    zeit = zeit / 1000
    zeit = Math.round(zeit)
    basic.showNumber(zeit)
})
basic.forever(function () {
    blinkzeit = Math.round(input.runningTime() / 1000)
    if (blinkzeit % 2 == 0) {
        basic.setLedColor(0xff0000)
    } else {
        basic.setLedColor(0x00ff00)
    }
})
