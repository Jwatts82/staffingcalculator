import React from 'react'
import { PropTypes } from 'prop-types'

const EventItem = ({event: { service_style, img_url }}) => {
    return (
        <div className='card text-center'>
            <img src={img_url} alt="" style={{ width: '60px' }}
            />
            <h3>{service_style}</h3>

            <div>
                <h3>Calculate</h3>  
            </div>
        </div>
    )
}

EventItem.propTypes = {
    event: PropTypes.object.isRequired,
}

export default EventItem
