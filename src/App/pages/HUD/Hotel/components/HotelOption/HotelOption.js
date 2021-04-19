import * as React from 'react';
import cn from 'classnames';

import './HotelOption.scss';

const HotelOption = ({currentOption, type, event}) => {
    const types = React.useMemo(() => ['standard', 'premium', 'platinum'], []);

    return <div className={cn('hotel-option', currentOption === type && 'hotel-option_active')} onClick={event}>
        <span className='hotel-option__text'>
            {`Rent ${types[type]} room`}
        </span>
    </div>
}

export default React.memo(HotelOption);