import React, { Component } from 'react'

class EventItem extends Component {
    render() {
        const { service_style, img_url } = this.props.event;
        
        return (
            <div className='card text-center'>
                <img src={img_url} alt="" style={{ width: '60px' }}
                />
            <h3>{service_style}</h3>

            <div>
                <h3>Calculate</h3>  
            </div>
                {/* <img
                    src={img_url}
                    alt=''
                    className='round-img'
                    style={{ width: '60px' }}
                />
                <h3>{style}</h3>
                
                <div>
                    <h3>
                        Calculate
                    </h3>
                </div> */}
            </div>
        )
    }
}

export default EventItem
