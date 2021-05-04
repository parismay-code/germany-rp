import * as React from 'react';

import circleArrow from "@assets/images/cCreator/circleArrow.svg";

import './ShopValue.scss';

const ShopValue = ({ count, imageName, value, setValue }) => {
    return <div className='shop-value'>
        <div className='shop-value-header'>
            <div className='shop-value-header__count'>{value} units</div>
            <div className='shop-value-header-input'>
                <img
                    className='shop-value-header-input__leftArrow'
                    src={circleArrow}
                    alt='#'
                    onClick={() => {
                        if (value - 10 < 0) setValue(count);
                        else setValue(value - 10);
                    }}
                />
                <input
                    type='range'
                    min='1'
                    max={count}
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                />
                <img
                    className='shop-value-header-input__rightArrow'
                    src={circleArrow}
                    alt='#'
                    onClick={() => {
                        if (value + 10 > count) setValue(0);
                        else setValue(value + 10);
                    }}
                />
            </div>
        </div>
        <div className='shop-value__image'>
            <img src={`./publicImages/items/${imageName}`} alt='#'/>
        </div>
    </div>
}

export default React.memo(ShopValue);