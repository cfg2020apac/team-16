import React from 'react';
import BigCalendar from 'react-big-calendar-like-google';
import moment from 'moment';
import "react-big-calendar-like-google/lib/css/react-big-calendar.css"
import events from './events';

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

const CalendarComponent = props => (
    <div>
        <BigCalendar
            events={events}
            startAccessor='2020-03-01'
            endAccessor='2020-03-25'
            views={allViews}
        />
    </div>
);

export default CalendarComponent;