/* global alt */
import * as React from 'react';
import {observer} from "mobx-react-lite";

import CDClasses from "./components/CDClasses";
import CDModels from "./components/CDModels";
import CDParameters from "./components/CDParameters";
import CDColor from "./components/CDColor";
import CDPrice from "./components/CDPrice";

import close from "@assets/images/close.svg";
import creditCard from "@assets/images/creditCard.svg";
import geld from "@assets/images/geld.svg";

import './CarDealer.scss';

const CarDealer = ({ store }) => {
    const [autoClass, setAutoClass] = React.useState(store.carDealerList[0].CategoryId);
    const [model, setModel] = React.useState(store.carDealerList[0].id);
    const [color, setColor] = React.useState(0);

    const fetchCarsEvent = React.useCallback((json) => {
        try {
            const carsList = JSON.parse(json);

            return {
                isError: false,
                data: carsList
            }
        } catch (e) {
            console.log(e);
            return {
                isError: true,
                data: null
            }
        }
    }, []);

    const carsList = React.useMemo(() => store.carDealerList, [store.carDealerList]);

    React.useEffect(() => {
        if ('alt' in window) {
            alt.emit('client::carDealer:preview', JSON.stringify({model, color}));
        }
    }, [autoClass, model, color]);

    React.useEffect(() => {
        if ('alt' in window) {
            alt.on('cef::carDealer:sendCarsData', (data) => {
                store.fetchCarDealerList(fetchCarsEvent(data));
            })
        }
    }, [store, fetchCarsEvent]);

    const testPalette = React.useMemo(() => [
        '#121212',
        '#E8E8E8',
        '#E10A0A',
        '#D3670E',
        '#D4D309',
        '#16C30E',
        '#1F99C2',
        '#081BAD',
        '#A84199'
    ], [])

    return <div className='car-dealer'>
        <div className='car-dealer-menu'>
            <div className='car-dealer-menu__header'>CarDealer</div>
            <CDClasses
                store={store}
                autoClass={autoClass}
                setAutoClass={setAutoClass}
            />
            <CDModels
                autoClass={autoClass}
                model={model}
                setModel={setModel}
                carsList={carsList}
            />
            <CDParameters
                model={model}
                carsList={carsList}
            />
            <CDColor
                color={color}
                setColor={setColor}
                palette={testPalette}
            />
            <CDPrice
                model={model}
                carsList={carsList}
            />
        </div>
        <div className='car-dealer-rotate'>
            <input className='car-dealer-rotate__input' type='range' name='n_carDealerRotate' min='0' max='360' onChange={(e) => {
                if ('alt' in window) {
                    alt.emit('client::carDealer:rotate', Number(e.target.value));
                }
            }}/>
        </div>
        <img className='car-dealer__exit' src={close} alt='#' onClick={() => {
            if ('alt' in window) {
                alt.emit('client::component:close');
            }
        }}/>
        <div className='car-dealer-buy'>
            <div
                className='car-dealer-buy-element car-dealer-buy-element_card'
                onClick={() => {
                    if ('alt' in window) {
                        alt.emit('client::carDealer:buy', autoClass, model, color, 0);
                    }
                }}>
                <span className='car-dealer-buy-element__text'>Mit karte bezahlen</span>
                <img className='car-dealer-buy-element__image' src={creditCard} alt='#'/>
            </div>
            <div
                className='car-dealer-buy-element car-dealer-buy-element_geld'
                onClick={() => {
                    if ('alt' in window) {
                        alt.emit('client::carDealer:buy', autoClass, model, color, 1);
                    }
                }}>
                <span className='car-dealer-buy-element__text'>Bar bezahlen</span>
                <img className='car-dealer-buy-element__image' src={geld} alt='#'/>
            </div>
        </div>
    </div>
}

export default observer(CarDealer);