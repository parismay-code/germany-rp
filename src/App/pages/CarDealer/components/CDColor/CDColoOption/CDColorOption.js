import cn from 'classnames';

import arrow from '../../../../../assets/images/carDealer/arrow.svg';

const CDColorOption = (props) => {
    return <div
        className={cn('car-dealer-color-option', props.color === props.id && 'car-dealer-color-option_active')}
        onClick={() => props.setColor(props.id)}
    >
        <div
            style={{backgroundColor: `${props.el}`}}
            className='car-dealer-color-option__top'
        />
        <div
            style={{background: `linear-gradient(to bottom, ${props.el}, ${props.el}60, ${props.el}00)`}}
            className='car-dealer-color-option__bottom'
        />
        <img src={arrow} alt='#' className='car-dealer-color-option__arrow'/>
    </div>
}

export default CDColorOption;