import * as React from 'react';
import cn from 'classnames';

const ShopProduct = ({ item, setItem, name, itemKey }) => {
    return <div
        className={cn('clothes-shop-options-content__option', item === itemKey && 'clothes-shop-options-content__option_active')}
        onClick={() => setItem(itemKey)}
    >{name}</div>
}

export default React.memo(ShopProduct);