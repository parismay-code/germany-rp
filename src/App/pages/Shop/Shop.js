/* global alt */
import {useState} from 'react';

import ProductType from "./components/ProductType";
import ProductElements from "./components/ProductElements";
import ShopDescription from "./components/ShopDescription";
import TuningPrice from "./components/Price";

import close from "../../assets/images/close.svg";

import './Shop.scss';

const Shop = () => {
    const [type, setType] = useState('food');
    const [item, setItem] = useState(0);

    return <div className='shop'>
        <div className='shop-menu'>
            <div className='shop-menu__header'>Shop</div>
            <ProductType type={type} setType={setType} />
            <ProductElements item={item} setItem={setItem} />
            <ShopDescription item={item} />
            <TuningPrice item={item} />
        </div>
        <img className='shop__exit' src={close} alt='#' onClick={() => {
            if ('alt' in window) {
                alt.emit('cef::component:close');
            }
        }}/>
        <div className='shop__create' onClick={() => {
            if ('alt' in window) {
                alt.emit('cef:shop:buy', item);
            }
        }}>Buy
        </div>
    </div>
}

export default Shop;