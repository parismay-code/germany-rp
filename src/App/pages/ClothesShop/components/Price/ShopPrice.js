import * as React from 'react';

import {regExp} from "@utils/regExp";

import './ShopPrice.scss';

const ShopPrice = ({ price }) => {

    const _price = React.useMemo(() => `$${String(price).replace(regExp.money, '$1 ')}`, [price]);

    return <div className='clothes-shop-price'>
        Preis<br/>{_price}
    </div>
}

export default React.memo(ShopPrice);