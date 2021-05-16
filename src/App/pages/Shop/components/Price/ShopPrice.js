import * as React from 'react';

import {regExp} from "@utils/regExp";

import './ShopPrice.scss';

const ShopPrice = ({ price, value }) => {

    const _price = React.useMemo(() => `$${String(price * value).replace(regExp.money, '$1 ')}`, [price, value]);

    return <div className='shop-price'>
        Preis<br/>{_price}
    </div>
}

export default React.memo(ShopPrice);