/* global alt */
import * as React from 'react';

import TuningCategories from "./components/Categories";
import TuningSpecifications from "./components/Specifications";
import TuningPrice from "./components/Price";

import close from '@assets/images/close.svg';
import creditCard from "@assets/images/creditCard.svg";
import geld from "@assets/images/geld.svg";

import './Tuning.scss';

const Tuning = ({ store }) => {
    const fetchCarTuningEvent = React.useCallback((json) => {
        try {
            const tuningList = JSON.parse(json);

            return {
                isError: false,
                data: tuningList
            }
        } catch (e) {
            console.log(e);
            return {
                isError: true,
                data: null
            }
        }
    }, []);

    React.useEffect(() => {
        if ('alt' in window) {
            alt.on('cef::carDealer:sendCarTuningData', (data) => {
                store.fetchCarTuning(fetchCarTuningEvent(data));
            })
        }
    }, [store, fetchCarTuningEvent]);

    return <div className='tuning'>
        <div className='tuning-menu'>
            <div className='tuning-menu__header'>Tuning</div>
            <TuningCategories/>
            <TuningSpecifications/>
            <TuningPrice/>
        </div>
        <img
            className='tuning__exit'
            src={close}
            alt='#'
            onClick={() => {
                if ('alt' in window) {
                    alt.emit('client::component:close');
                }
            }}
        />
        <div className='tuning-buy'>
            <div
                className='tuning-buy-element tuning-buy-element_card'
                onClick={() => {
                    if ('alt' in window) {
                        alt.emit('client::tuning:buy', store.tuning, 0);
                    }
                }}>
                <span className='tuning-buy-element__text'>Mit karte bezahlen</span>
                <img className='tuning-buy-element__image' src={creditCard} alt='#'/>
            </div>
            <div
                className='tuning-buy-element tuning-buy-element_geld'
                onClick={() => {
                    if ('alt' in window) {
                        alt.emit('client::tuning:buy', store.tuning, 0);
                    }
                }}>
                <span className='tuning-buy-element__text'>Bar bezahlen</span>
                <img className='tuning-buy-element__image' src={geld} alt='#'/>
            </div>
        </div>
    </div>
}

export default React.memo(Tuning);