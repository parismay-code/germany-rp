/* global alt */
import * as React from 'react';

import TuningCategories from "./components/Categories";
import TuningSpecifications from "./components/Specifications";
import TuningPrice from "./components/Price";

import close from '@assets/images/close.svg';

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
        <div
            className='tuning__buy'
            onClick={() => {
                if ('alt' in window) {
                    alt.emit('client::tuning:buy', JSON.stringify(store.tuning));
                }
            }}
        >
            Buy
        </div>
    </div>
}

export default React.memo(Tuning);