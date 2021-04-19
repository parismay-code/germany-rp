import * as React from 'react';
import cn from 'classnames';

const CDClass = ({ select, image, autoClass, setAutoClass }) => {
    return <div
        className={cn('car-dealer-class__option', autoClass === select && 'car-dealer-class__option_active')}
        onClick={() => setAutoClass(select)}
    >
        <img src={image} alt='#'/>
    </div>
}

export default React.memo(CDClass);