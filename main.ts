input.onButtonPressed(Button.A, function () {
    if (page == 1) {
        showing_the_time = 1
        basic.clearScreen()
        basic.showString("" + (hour))
        basic.pause(100)
        basic.showString("" + (minute))
        showing_the_time = 0
    }
    if (page == 2) {
        Showing_Step_Count = 1
        basic.showString("" + (Step_Tracker))
        Showing_Step_Count = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    page += 1
})
input.onButtonPressed(Button.B, function () {
    if (page == 1) {
        showing_the_time = 2
        basic.clearScreen()
        basic.showString("" + (date_day))
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
        basic.showString("" + (date_month))
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
        basic.clearScreen()
        basic.pause(500)
        basic.showString("" + (date_year))
        showing_the_time = 0
    }
    if (page == 2) {
        Step_Tracker = 0
        basic.showString("" + (Step_Tracker))
    }
})
input.onGesture(Gesture.Shake, function () {
    if (page == 2) {
        Step_Tracker += 1
        if (Showing_Step_Count == 1) {
            basic.showString("" + (Step_Tracker))
        }
    }
})
let minute = 0
let showing_the_time = 0
let Showing_Step_Count = 0
let Step_Tracker = 0
let page = 0
let date_year = 0
let date_month = 0
let date_day = 0
let hour = 0
hour = 610
date_day = 13
date_month = 9
date_year = 2022
// 1 = Clock
// 2 = Step tracker.
page = 1
Step_Tracker = 0
// 0 = Animation
// 1= Show step count.
Showing_Step_Count = 0
basic.forever(function () {
    if (hour == 25) {
        date_day += 1
    }
    if (date_month == 13) {
        date_year += 1
        date_month = 1
    }
})
basic.forever(function () {
    if (date_month == 1) {
        if (date_day == 32) {
            date_month += 1
            date_day = 1
        }
    }
    if (date_month == 2) {
        if (date_day == 29) {
            date_month += 1
            date_day = 1
        }
    }
    if (date_month == 3) {
        if (date_day == 32) {
            date_month += 1
            date_day = 1
        }
    }
    if (date_month == 4) {
        if (date_day == 31) {
            date_month += 1
            date_day = 1
        }
    }
    if (date_month == 5) {
        if (date_day == 32) {
            date_month += 1
            date_day = 1
        }
    }
    if (date_month == 6) {
        if (date_day == 31) {
            date_month += 1
            date_day = 1
        }
    }
    if (date_month == 7) {
        if (date_day == 32) {
            date_month += 1
            date_day = 1
        }
    }
    if (date_month == 8) {
        if (date_day == 32) {
            date_month += 1
            date_day = 1
        }
    }
    if (date_month == 9) {
        if (date_day == 31) {
            date_month += 1
            date_day = 1
        }
    }
    if (date_month == 10) {
        if (date_day == 32) {
            date_month += 1
            date_day = 1
        }
    }
    if (date_month == 11) {
        if (date_day == 31) {
            date_month += 1
            date_day = 1
        }
    }
    if (date_month == 12) {
        if (date_day == 32) {
            date_month += 1
            date_day = 1
        }
    }
})
basic.forever(function () {
    basic.pause(60000)
    minute += 1
})
basic.forever(function () {
    if (minute == 60) {
        hour += 1
    }
    if (hour == 13) {
        hour = 1
    }
})
basic.forever(function () {
    if (minute == 60) {
        hour += 1
        minute = 0
        if (hour == 25) {
            basic.pause(1000)
            hour = 1
        }
    }
})
basic.forever(function () {
    if (page == 2) {
        if (Showing_Step_Count == 0) {
            basic.showLeds(`
                . . # . .
                # # # # #
                . . # . .
                . # . # .
                # . . . #
                `)
            if (Showing_Step_Count == 0) {
                basic.showLeds(`
                    . # . . .
                    # # # # .
                    . # . . .
                    # # # . .
                    . . . # .
                    `)
                if (Showing_Step_Count == 0) {
                    basic.showLeds(`
                        . . # . .
                        # # # # #
                        . . # . .
                        . # # # .
                        # . . . #
                        `)
                    if (Showing_Step_Count == 0) {
                        basic.showLeds(`
                            . . . # .
                            . # # # #
                            . . . # .
                            . . # # #
                            . # . . .
                            `)
                    }
                }
            }
        }
    }
})
basic.forever(function () {
    if (page == 3) {
        page = 1
    }
})
basic.forever(function () {
    if (page == 1) {
        if (showing_the_time == 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            if (showing_the_time == 0) {
                basic.showLeds(`
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    # # # # #
                    `)
                if (showing_the_time == 0) {
                    basic.showLeds(`
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        . . . . .
                        `)
                }
            }
        }
    }
})
