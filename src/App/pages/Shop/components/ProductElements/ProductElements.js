import * as React from 'react';
import {observer} from "mobx-react-lite";

import ShopProduct from "./ShopProduct";

import './ProductElements.scss';

const ProductElements = ({ item, setItem, store }) => {
    return <div className='shop-options'>
        <div className='shop-options__title'>Select product</div>
        <div className='shop-options-content'>
            {store.shopData.map((el, key) => {
                return <ShopProduct
                    key={key}
                    item={item}
                    setItem={setItem}
                    itemKey={key}
                    name={el.Name}
                />
            })}
        </div>
    </div>
}

export default observer(ProductElements);