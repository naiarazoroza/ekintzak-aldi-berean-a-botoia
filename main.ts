input.onButtonPressed(Button.A, function () {
    hasiera = 1
})
input.onButtonPressed(Button.B, function () {
    hasiera = 0
})
let hasiera = 0
DFRobotMaqueenPlus.I2CInit()
hasiera = 0
basic.forever(function () {
    while (hasiera == 1) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 30)
        basic.pause(1000)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        basic.pause(500)
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CCW, 30)
        basic.pause(1000)
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
        basic.pause(500)
    }
})
basic.forever(function () {
    while (hasiera == 1) {
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.GREEN)
        basic.pause(1000)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
        basic.pause(500)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.BLUE)
        basic.pause(1000)
        DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBA, Color.OFF)
        basic.pause(500)
    }
})
basic.forever(function () {
    while (hasiera == 1) {
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Forever)
        basic.pause(1000)
        music.stopMelody(MelodyStopOptions.All)
        basic.pause(500)
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Forever)
        basic.pause(1000)
        music.stopMelody(MelodyStopOptions.All)
        basic.pause(500)
    }
})
