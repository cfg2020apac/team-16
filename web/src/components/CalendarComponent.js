import React from 'react';
import BigCalendar from 'react-big-calendar-like-google';
import moment from 'moment';
import "react-big-calendar-like-google/lib/css/react-big-calendar.css"
import events from './events';

BigCalendar.setLocalizer(
    BigCalendar.momentLocalizer(moment)
);

const CalendarComponent = props => (
    <div>
        <BigCalendar events={events} />
    </div>
);

export default CalendarComponent;