/* global alt */
import * as React from 'react';

import './HouseBuy.scss';

const HouseBuy = ({ price, id }) => {
    return <div className='house-buy'>
        <div className='house-buy__price'>
            Price<br/>{price}
        </div>
        <div className='house-buy__button' onClick={() => {
            if ('alt' in window) {
                alt.emit('client::house:buy', id);
            }
        }}>Buy</div>
    </div>
}

export default React.memo(HouseBuy);