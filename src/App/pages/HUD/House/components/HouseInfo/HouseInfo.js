import * as React from 'react';

import './HouseInfo.scss';

const HouseInfo = ({ price, family, garage, garden, daysPaid }) => {
    return <div className='house-info'>
        <div className='house-info__title'>Price/day</div>
        <div className='house-info__subtitle'>{price}</div>
        <div className='house-info__title'>Family name</div>
        <div className='house-info__subtitle'>{family}</div>
        <div className='house-info__title'>Garage spaces</div>
        <div className='house-info__subtitle'>{garage}</div>
        <div className='house-info__title'>Garden</div>
        <div className='house-info__subtitle'>{garden}</div>
        <div className='house-info__title'>Days paid</div>
        <div className='house-info__subtitle'>{daysPaid}</div>
    </div>
}

export default React.memo(HouseInfo);