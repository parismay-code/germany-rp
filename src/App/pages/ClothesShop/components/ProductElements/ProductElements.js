import * as React from 'react';
import {observer} from "mobx-react-lite";

import ShopProduct from "./ShopProduct";

import './ProductElements.scss';

const ProductElements = ({ currentComponent, item, setItem, store }) => {
    return <div className='clothes-shop-options'>
        <div className='clothes-shop-options__title'>Wähle ein Produkt</div>
        <div className='clothes-shop-options-content'>
            {store.clothesShopData.filter(el => el.category === currentComponent).map((el, key) => {
                return <ShopProduct
                    key={key}
                    item={item}
                    setItem={setItem}
                    itemKey={key}
                    name={el.name}
                />
            })}
        </div>
    </div>
}

export default observer(ProductElements);