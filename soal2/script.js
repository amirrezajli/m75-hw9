class Dates {
    constructor(year, month, day) {
        this.year = year;
        this.month = month;
        this.day = day;
    }

    // year 
    get year() {
        return this._year;
    }


    set year(value) {
        if (value > 1300) {
            this._year = value;
            return;
        } else this._year = "Wrong year entered"

    }

    // month

    get month() {
        return this._month;
    }

    set month(value) {
        if (value > 0 && value <= 12) {
            this._month = value
            return;
        }
    }

    // day 

    get day() {
        return this._day;
    }

    set day(value) {
        let dayOfMonth;
        if (this._month >= 1 && this._month <= 6) {
            dayOfMonth = 31;

        } else {
            dayOfMonth = 30;
        }
        if (value > 0 && value <= dayOfMonth) {
            this._day = value
            return;
        } else this._day = "Wrong day entered"

    }

    getMiliSeconds() {
        return this._year * 1000 * 60 * 60 * 24 * 365 + this._month * 1000 * 60 * 60 * 24 * (this._month <= 6 ? 31 : 30) + this._day * 1000 * 60 * 60 * 24
    }


    toString(format) {
        if (format == "y/m/d" || format == "yyyy/mm/dd") {

            return `${this.year}/${this.month}/${(0 + (this.day.toString())).slice(-2)}`;
        }
        if (format == "yy/mm/dd") {

            return `${this.year.toString().slice(-2)}/${(0 + (this.month.toString())).slice(-2)}/${(0 + (this.day.toString())).slice(-2)}`;
        }
    }

    static compareDate(date1, date2) {
        let d1 = date1.getMiliSeconds()
        let d2 = date2.getMiliSeconds()

        return d1 - d2 === 0 ? 0 : d1 - d2 > 0 ? 1 : -1;
    }


}

let date1 = new Dates(1374, 4, 25)
let date2 = new Dates(1346, 2, 1)
console.log(date1.toString("yyyy/mm/dd"));
console.log(date2.toString("yy/mm/dd"));
console.log(Dates.compareDate(date1, date2))

////////////////////////////////////////////////////////
class Time {
    constructor(hour, minute, second) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }

    // hour

    get hour() {
        return this._hour;
    }

    set hour(value) {
        if (value >= 0 && value <= 23) {
            this._hour = value;

        } else this._hour = "wrong hour entered"
    }

    // minute
    get minute() {
        return this._minute;
    }

    set minute(value) {
        if (value >= 0 && value <= 59) {
            this._minute = value;
        } else this._minute = "wrong minute entered"
    }

    // second

    get second() {
        return this.second;
    }

    set second(value) {
        if (value >= 0 && value <= 59) {
            this._second = value;
        } else this._second = "wrong second entered"
    }


    getMiliSeconds() {
        return this._hour * 1000 * 60 * 60 + this._minute * 1000 * 60 + this._second * 1000
    }

    toString(format) {
        if (format == "hh:mm:ss") {

            return `${(0 + this._hour.toString()).slice(-2)}:${(0 + this._minute.toString()).slice(-2)}:${(0 + this._second.toString()).slice(-2)}`;
        }
        if (format == "mm:ss") {

            return `${(0 + this._minute.toString()).slice(-2)}:${(0 + this._second.toString()).slice(-2)}`;
        }
    }

    static compareTime(time1, time2) {
        let t1 = time1.getMiliSeconds()
        let t2 = time2.getMiliSeconds()

        return t1 - t2 === 0 ? 0 : t1 - t2 > 0 ? 1 : -1;
    }
}
let time1 = new Time(9, 10, 7)
let time2 = new Time(8, 24, 51)
console.log(time1.toString("hh:mm:ss"));
console.log(time2.toString("hh:mm:ss"));
console.log(Time.compareTime(time1, time2))

//////////////////////////////////////////////////////////


class TimeStamp {
    constructor(year, month, day, hour, minute, second) {
        this.date = new Dates(year, month, day);
        this.time = new Time(hour, minute, second);

    }

    toString(format) {
        let fmt = format.split("");
        let formatted = "";
        for (let i = 0; i < fmt.length; i++) {
            switch (fmt[i]) {
                case "/":
                    formatted += "/"
                    break;
                case ":":
                    formatted += ":"
                    break;
                case " ":
                    formatted += " "
                    break;
                case "Y":
                    formatted += `${this.date.year}`
                    break;
                case "y":
                    formatted += `${this.date.year.toString().slice(-2)}`
                    break;
                case "m":
                    formatted += `${this.date.month}`
                    break;
                case "d":
                    formatted += `${this.date.day}`
                    break;
                case "H":
                    formatted += `${this.time.hour}`
                    break;
                case "h":
                    formatted += `${this.time.hour % 12}`
                    break;

                case "i":
                    formatted += `${this.time.minute}`
                    break;
                case "a":
                    formatted += `${this.time.hour < 12 ? "a.m" : "p.m"}`
                    break;

            }
        }
        return formatted;
    }
}
let timeStamp = new TimeStamp(1374, 12, 5, 2, 41, 19)
console.log(timeStamp.toString("Y/m/d h:i a"))