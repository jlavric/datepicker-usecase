export interface TimepickerEvent {
    time: {
        value: number, // getTime()
        meridian: string, // AM || PM
        hours: number,
        minutes: number
    }
}