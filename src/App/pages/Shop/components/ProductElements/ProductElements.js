import * as React from 'react';
import {observer} from "mobx-react-lite";

import ShopProduct from "./ShopProduct";

import './ProductElements.scss';

const ProductElements = ({ item, setItem, type, store }) => {
    return <div className='shop-options'>
        <div className='shop-options__title'>Select product</div>
        <div className='shop-options-content'>
            {store.shopData.filter(el => el.type === type).map((el, key) => {
                return <ShopProduct
                    key={key}
                    item={item}
                    setItem={setItem}
                    name={el.name}
                    id={el.id}
                />
            })}
        </div>
    </div>
}

export default observer(ProductElements);