import React, { Component } from 'react';
import EventRmeApp from "./event-rme-app";
import EventWhatNewsApp from "./event-what-news-app";

class EventExample extends Component {
    main() {
        new EventWhatNewsApp().load();
        new EventRmeApp().load();

    }
    render() {
        this.main();
        return (
            <div>'Event Example'</div>
        );
    }
}

export default EventExample;
