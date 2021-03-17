import * as React from 'react';
import cn from 'classnames';

const CDClass = ({ id, image, autoClass, setAutoClass, setModel }) => {
    return <div
        className={cn('car-dealer-class__option', autoClass === id && 'car-dealer-class__option_active')}
        onClick={() => {
            setAutoClass(id);
            setModel(0);
        }}
    >
        <img src={image} alt='#'/>
    </div>
}

export default React.memo(CDClass);