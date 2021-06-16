import * as React from 'react';

import './HotelBuy.scss';

const HotelBuy = ({price, event}) => {
    return <div className='hotel-buy'>
        <div className='hotel-buy__price'>
            Preis<br/>{price} / Stunde
        </div>
        <div className='hotel-buy__button' onClick={event}>Mieten</div>
    </div>
}

export default React.memo(HotelBuy);