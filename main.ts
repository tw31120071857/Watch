input.onButtonPressed(Button.A, function () {
    if (showing_the_time == 0) {
        showing_the_time = 1
        basic.clearScreen()
        basic.showString("" + (hour))
        basic.pause(100)
        basic.showString("" + (minute))
        showing_the_time = 0
    }
})
let minute = 0
let showing_the_time = 0
let hour = 0
hour = 610
let date_day = 13
let date_month = 9
let date_year = 2022
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
})
