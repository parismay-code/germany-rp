import * as React from 'react';

const TuningSpecification = ({ thumb, maxValue, value }) => {
    return <div className='tuning-specification'>
        <img src={thumb}/>
        <div className='tuning-specification__bar'>
            <div style={{width: `${value / maxValue * 100}%`}} />
        </div>
    </div>
}

export default React.memo(TuningSpecification);