/* global alt */
import * as React from 'react';

import close from '@assets/images/close.svg';

import './HotelHeader.scss';

const HotelHeader = ({id}) => {
    return <div className='hotel-header'>
        <span className='hotel-header__id'>Hotel<br/>№{id}</span>
        <img className='hotel-header__close' src={close} alt='#' onClick={() => {
            if ('alt' in window) {
                alt.emit('client::hud:closeComponent');
            }
        }}/>
    </div>
}

export default React.memo(HotelHeader);