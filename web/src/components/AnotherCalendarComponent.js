import React from "react";
import createClass from "create-react-class";

/* For embedding google calendars, visit: https://support.google.com/calendar/answer/41207?hl=en */
const Component = createClass({
    iframe: function () {
        return {
            __html: this.props.iframe
        }
    },

    render: function () {
        return (
            <div>
                <div dangerouslySetInnerHTML={this.iframe()} />
            </div>
        );
    }
});

const iframe = '<iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FHong_Kong&amp;src=dGhlZ29vZGNvZGVyc2phMTZAZ21haWwuY29t&amp;color=%23039BE5" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no"></iframe>';

function AnotherCalendarComponent() {
    return (
        <Component iframe={iframe} />
    )
}

export default AnotherCalendarComponent;