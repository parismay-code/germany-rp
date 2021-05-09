/* global alt */
import * as React from 'react';
import {useLocalStore} from "@utils/hooks/useLocal";
import {observer} from "mobx-react-lite";

import ProductElements from "./components/ProductElements";
import ShopValue from "./components/ShopValue";
import ShopPrice from "./components/Price";

import ShopsStore from "@store/ShopsStore";

import close from "@assets/images/close.svg";
import creditCard from "@assets/images/creditCard.svg";
import geld from "@assets/images/geld.svg";

import './Shop.scss';

const Shop = () => {
    const store = useLocalStore(() => new ShopsStore());

    const [item, setItem] = React.useState(0),
        [value, setValue] = React.useState(1);

    const fetchShopDataEvent = React.useCallback((json) => {
        try {
            const shopData = JSON.parse(json);

            return {
                isError: false,
                data: shopData
            }
        } catch (e) {
            console.log(e);
            return {
                isError: true,
                data: null
            }
        }
    }, []);

    React.useEffect(() => setValue(1), [item]);

    React.useEffect(() => {
        if ('alt' in window) {
            alt.on('cef::shop:setData', json => store.fetchShopData(fetchShopDataEvent(json)));
            alt.on('cef::shop:changeData', (id, data) => store.changeShopData(id, data));
        }
    }, [fetchShopDataEvent, store]);

    return <div className='shop'>
        <div className='shop-menu'>
            <div className='shop-menu__header'>Shop</div>
            <ProductElements item={item} setItem={setItem} store={store}/>
            <ShopValue count={store?.shopData[item]?.Count} imageName={store?.shopData[item]?.Image} value={value} setValue={setValue}/>
            <ShopPrice price={store?.shopData[item]?.Price} value={value}/>
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
        <div className='shop-buy'>
            <div
                className='shop-buy-element shop-buy-element_card'
                onClick={() => {
                    if ('alt' in window) {
                        alt.emit('client::shop:buy', store?.shopData[item]?.ItemId, value, 0);
                    }
                }}>
                <span className='shop-buy-element__text'>Mit karte bezahlen</span>
                <img className='shop-buy-element__image' src={creditCard} alt='#'/>
            </div>
            <div
                className='shop-buy-element shop-buy-element_geld'
                onClick={() => {
                    if ('alt' in window) {
                        alt.emit('client::shop:buy', store?.shopData[item]?.ItemId, value, 1);
                    }
                }}>
                <span className='shop-buy-element__text'>Bar bezahlen</span>
                <img className='shop-buy-element__image' src={geld} alt='#'/>
            </div>
        </div>
    </div>
}

export default observer(Shop);