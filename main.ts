input.onButtonPressed(Button.A, function () {
    record.setSampleRate(20000, record.AudioSampleRateScope.Playback)
    record.playAudio(record.BlockingState.Blocking)
})
input.onSound(DetectedSound.Loud, function () {
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
    record.setMicGain(record.AudioLevels.Low)
    record.setSampleRate(20000, record.AudioSampleRateScope.Recording)
    record.startRecording(record.BlockingState.Nonblocking)
    basic.pause(10000)
    basic.showIcon(IconNames.Asleep)
    basic.clearScreen()
})
loops.everyInterval(1000, function () {
    datalogger.log(
    datalogger.createCV("TILT IN DEGREES", input.compassHeading()),
    datalogger.createCV("TEMPERATURE", input.temperature()),
    datalogger.createCV("MAGNETIC FORCE", input.magneticForce(Dimension.Strength)),
    datalogger.createCV("GRAVITY", input.acceleration(Dimension.Z)),
    datalogger.createCV("LIGHT LEVEL", input.lightLevel()),
    datalogger.createCV("SOUND LEVEL", input.soundLevel())
    )
})
basic.forever(function () {
    led.setDisplayMode(DisplayMode.Greyscale)
    basic.showIcon(IconNames.Fabulous)
})
