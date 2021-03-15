/* global alt */
import close from '../../../../../assets/images/close.svg';
import locked from '../../../../../assets/images/house/locked.svg'
import opened from '../../../../../assets/images/house/opened.svg'

import './HouseHeader.scss';

const HouseHeader = (props) => {
    return <div className='house-header'>
        <span className='house-header__id'>House<br/>№{props.id}</span>
        <div className='house-header__lock'>
            <span>{props.locked ? 'Locked' : 'Opened'}</span>
            <img src={props.locked ? locked : opened} alt='#'/>
        </div>
        <img className='house-header__close' src={close} alt='#' onClick={() => {
            if ('alt' in window) {
                alt.emit('cef::hud:closeComponent');
            }
        }}/>
    </div>
}

export default HouseHeader;