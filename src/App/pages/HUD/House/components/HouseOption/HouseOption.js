import * as React from 'react';

import './HouseOption.scss';

const HouseOption = ({ target, event, locked }) => {
    return <div className='house-option' onClick={event}>
        <span className='house-option__text'>
            {`${locked ? 'Open' : 'Lock'} ${target}`}
        </span>
    </div>
}

export default React.memo(HouseOption);