import * as React from 'react';
import cn from 'classnames';

const ShopProduct = ({ item, setItem, id, name }) => {
    return <div
        className={cn('shop-options-content__option', item === id && 'shop-options-content__option_active')}
        onClick={() => setItem(id)}
    >{name}</div>
}

export default React.memo(ShopProduct);