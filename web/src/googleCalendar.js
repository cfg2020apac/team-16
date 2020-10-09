import googleCalendarConfig from "./constants/googleCalendar";
import request from "superagent";

const {
    apiKey,
    calendarId
} = googleCalendarConfig;

const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}`

export function getEvents(callback) {
    request
        .get(url)
        .end((err, resp) => {
            if (!err) {
                const events = []
                JSON.parse(resp.text).items.map((event) => {
                    events.push({
                        start: event.start.date || event.start.dateTime,
                        end: event.end.date || event.end.dateTime,
                        title: event.summary,
                        colorId: event.colorId || (Math.floor(Math.random() * 16) + 1).toString()
                    })
                })
                callback(events)
            }
        })
}
