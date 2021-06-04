/* global alt */
import * as React from 'react';
import {observer} from "mobx-react-lite";

import ProductElements from "./components/ProductElements";
import ShopValue from "./components/ShopValue";
import ShopPrice from "./components/Price";


import close from "@assets/images/close.svg";
import creditCard from "@assets/images/creditCard.svg";
import geld from "@assets/images/geld.svg";

import './Dealer.scss';

const Dealer = ({store}) => {

    const [item, setItem] = React.useState(0),
        [value, setValue] = React.useState(1);

    const fetchDealerDataEvent = React.useCallback((json) => {
        try {
            const dealerData = JSON.parse(json);

            return {
                isError: false,
                data: dealerData
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
            alt.on('cef::dealer:setData', json => store.fetchDealerData(fetchDealerDataEvent(json)));
            alt.on('cef::dealer:changeData', (id, data) => store.changeDealerData(id, data));
        }
    }, [fetchDealerDataEvent, store]);

    return <div className='dealer'>
        <div className='dealer-menu'>
            <div className='dealer-menu__header'>Dealer</div>
            <ProductElements item={item} setItem={setItem} store={store}/>
            <ShopValue count={store?.dealerData[item]?.Count} imageName={store?.dealerData[item]?.Image} value={value} setValue={setValue}/>
            <ShopPrice price={store?.dealerData[item]?.Price} value={value}/>
        </div>
        <img
            className='dealer__exit'
            src={close}
            alt='#'
            onClick={() => {
                if ('alt' in window) {
                    alt.emit('client::component:close');
                }
            }}
        />
        <div className='dealer-buy'>
            <div
                className='dealer-buy-element dealer-buy-element_geld'
                onClick={() => {
                    if ('alt' in window) {
                        alt.emit('client::dealer:sell', store?.dealerData[item]?.ItemId, value, 1);
                    }
                }}>
                <span className='dealer-buy-element__text'>Verkaufen</span>
                <img className='dealer-buy-element__image' src={geld} alt='#'/>
            </div>
        </div>
    </div>
}

export default observer(Dealer);