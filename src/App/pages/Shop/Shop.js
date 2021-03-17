/* global alt */
import * as React from 'react';

import ProductType from "./components/ProductType";
import ProductElements from "./components/ProductElements";
import ShopDescription from "./components/ShopDescription";
import ShopPrice from "./components/Price";

import close from "@assets/images/close.svg";

import './Shop.scss';

const Shop = () => {
    const [type, setType] = React.useState('food');
    const [item, setItem] = React.useState(0);

    return <div className='shop'>
        <div className='shop-menu'>
            <div className='shop-menu__header'>Shop</div>
            <ProductType type={type} setType={setType}/>
            <ProductElements item={item} setItem={setItem}/>
            <ShopDescription item={item}/>
            <ShopPrice item={item}/>
        </div>
        <img
            className='shop__exit'
            src={close}
            alt='#'
            onClick={() => {
                if ('alt' in window) {
                    alt.emit('client::component:close');
                }
            }}
        />
        <div
            className='shop__buy'
            onClick={() => {
                if ('alt' in window) {
                    alt.emit('client:shop:buy', item);
                }
            }}>
            Buy
        </div>
    </div>
}

export default Shop;