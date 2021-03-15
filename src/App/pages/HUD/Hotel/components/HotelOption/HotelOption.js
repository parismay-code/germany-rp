import cn from 'classnames';

import './HotelOption.scss';

const HotelOption = (props) => {
    const types = ['standard', 'premium', 'platinum'];

    return <div className={cn('hotel-option', props.currentOption === props.type && 'hotel-option_active')} onClick={props.event}>
        <span className='hotel-option__text'>
            {`Rent ${types[props.type]} room`}
        </span>
    </div>
}

export default HotelOption;