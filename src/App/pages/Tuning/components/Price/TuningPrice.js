import * as React from 'react';

import './TuningPrice.scss';

const TuningPrice = () => {
    return <div className='tuning-price'>
        Price<br/>$999 999 999
    </div>
}

export default React.memo(TuningPrice);