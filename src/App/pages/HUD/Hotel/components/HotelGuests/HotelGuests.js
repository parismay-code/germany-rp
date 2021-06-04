/* global alt */
import * as React from 'react';
import {observer} from 'mobx-react-lite';

import './HotelGuests.scss';

const HotelGuests = ({store}) => {
    return <div className='hotel-guests'>
        {store.hotelData.guests.map((el, key) => {
            return <div
                key={key}
                style={key % 2 === 0 ? {background: 'linear-gradient(to right, rgba(149, 149, 149, .5), #00000000)'} : null}
                className='hotel-guests-element'
            >
                <div className='hotel-guests-element__title'>{el.name}</div>
                {!el.isLocked && <div
                    className='hotel-guests-element__request'
                    onClick={() => {
                        if ('alt' in window) {
                            alt.emit('client::hotel:requestPlayerRoom', el.roomId);
                        }
                    }}
                >Betreten</div>}
            </div>
        })}
    </div>
}

export default observer(HotelGuests);