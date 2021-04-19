import * as React from 'react';

import './HotelInfo.scss';

const HotelInfo = () => {
    return <div className='hotel-info'>
        <div className='hotel-info__title'>Name filter</div>
        <div className='hotel-info__subtitle'>Name</div>
        <div className='hotel-info__title'>Name filter</div>
        <div className='hotel-info__subtitle'>Name</div>
        <div className='hotel-info__title'>Name filter</div>
        <div className='hotel-info__subtitle'>Name</div>
        <div className='hotel-info__title'>Name filter</div>
        <div className='hotel-info__subtitle'>Name</div>
        <div className='hotel-info__title'>Name filter</div>
        <div className='hotel-info__subtitle'>Name</div>
    </div>
}

export default React.memo(HotelInfo);