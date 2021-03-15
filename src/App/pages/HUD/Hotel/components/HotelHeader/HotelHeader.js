/* global alt */
import close from '../../../../../assets/images/close.svg';
import locked from '../../../../../assets/images/house/locked.svg'
import opened from '../../../../../assets/images/house/opened.svg'

import './HotelHeader.scss';

const HotelHeader = (props) => {
    return <div className='hotel-header'>
        <span className='hotel-header__id'>Hotel<br/>№{props.id}</span>
        <img className='hotel-header__close' src={close} alt='#' onClick={() => {
            if ('alt' in window) {
                alt.emit('cef::hud:closeComponent');
            }
        }}/>
    </div>
}

export default HotelHeader;