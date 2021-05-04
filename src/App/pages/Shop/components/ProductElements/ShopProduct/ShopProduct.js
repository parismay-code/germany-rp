import * as React from 'react';
import cn from 'classnames';

const ShopProduct = ({ item, setItem, name, itemKey }) => {
    return <div
        className={cn('shop-options-content__option', item === itemKey && 'shop-options-content__option_active')}
        onClick={() => setItem(itemKey)}
    >{name}</div>
}

export default React.memo(ShopProduct);