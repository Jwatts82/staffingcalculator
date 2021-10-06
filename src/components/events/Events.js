import React, { Component } from 'react'
import EventItem from './EventItem'

class Events extends Component {
    state = {
        events: [
            {
                id: "1",
                style: "Plated Dinner",
                img_url: "./plated-dinner.jpg"
            },
            {
                id: "2",
                style: "Family Style",
                img_url: "./family-style.jpg"
            },
            {
                id: "3",
                style: "Cocktail Hour",
                img_url: "./passed-apps.jpg"
            }
        ]
    }

    render() {
        return (
            <div style={eventStyle}>
                {this.state.events.map(event => (
                    <EventItem key={event.id} event={event}/>
                ))}
            </div>
        )
    }
}

const eventStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Events
