import * as React from 'react';
import cn from 'classnames';

import arrow from '@assets/images/carDealer/arrow.svg';

const CDColorOption = ({ id, el, color, setColor }) => {
    return <div
        className={cn('car-dealer-color-option', color === id && 'car-dealer-color-option_active')}
        onClick={() => setColor(id)}
    >
        <div
            style={{backgroundColor: `${el}`}}
            className='car-dealer-color-option__top'
        />
        <div
            style={{background: `linear-gradient(to bottom, ${el}, ${el}60, ${el}00)`}}
            className='car-dealer-color-option__bottom'
        />
        <img src={arrow} alt='#' className='car-dealer-color-option__arrow'/>
    </div>
}

export default React.memo(CDColorOption);