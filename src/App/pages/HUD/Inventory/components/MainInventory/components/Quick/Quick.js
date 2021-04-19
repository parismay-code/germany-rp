import * as React from 'react';

import './Quick.scss';

const Quick = () => {
    return <div className='inventory-quick'>
        <div className='inventory-quick__title'>Quick</div>
        <div className='inventory-quick-content'>
            <div className='inventory-quick-content__element'/>
            <div className='inventory-quick-content__element'/>
            <div className='inventory-quick-content__element'/>
            <div className='inventory-quick-content__element'/>
            <div className='inventory-quick-content__element'/>
            <div className='inventory-quick-content__element'/>
            <div className='inventory-quick-content__element'/>
        </div>
    </div>
}

export default React.memo(Quick);