import * as React from 'react';

const TuningCategory = ({ id, type, image}) => {
    return <div className='tuning-categories-option'>
        <img src={image} alt='#' />
        <span>{type}</span>
    </div>
}

export default React.memo(TuningCategory);