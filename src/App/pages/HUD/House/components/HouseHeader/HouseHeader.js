/* global alt */
import * as React from 'react';

import close from '@assets/images/close.svg';
import lockedImg from '@assets/images/house/locked.svg'
import openedImg from '@assets/images/house/opened.svg'

import './HouseHeader.scss';

const HouseHeader = ({ id, locked }) => {
    return <div className='house-header'>
        <span className='house-header__id'>House<br/>№{id}</span>
        <div className='house-header__lock'>
            <span>{locked ? 'Locked' : 'Opened'}</span>
            <img src={locked ? lockedImg : openedImg} alt='#'/>
        </div>
        <img className='house-header__close' src={close} alt='#' onClick={() => {
            if ('alt' in window) {
                alt.emit('client::hud:closeComponent');
            }
        }}/>
    </div>
}

export default React.memo(HouseHeader);