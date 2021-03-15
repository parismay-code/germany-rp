/* global alt */
import * as React from 'react';

import CDClasses from "./components/CDClasses";
import CDModels from "./components/CDModels";
import CDParameters from "./components/CDParameters";
import CDColor from "./components/CDColor";
import CDPrice from "./components/CDPrice";

import close from "../../assets/images/close.svg";

import './CarDealer.scss';

const CarDealer = () => {
    const [autoClass, setAutoClass] = React.useState(0);
    const [model, setModel] = React.useState(0);
    const [color, setColor] = React.useState(0);

    React.useEffect(() => {
        if ('alt' in window) {
            alt.emit('cef::carDealer:preview', JSON.stringify({autoClass, model, color}));
        }
    }, [autoClass, model, color])

    React.useEffect(() => {
        setModel(0);
    }, [autoClass])

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
            <CDClasses autoClass={autoClass} setAutoClass={setAutoClass}/>
            <CDModels autoClass={autoClass} model={model} setModel={setModel}/>
            <CDParameters autoClass={autoClass} model={model} />
            <CDColor color={color} setColor={setColor} palette={testPalette} />
            <CDPrice autoClass={autoClass} model={model}/>
        </div>
        <img className='car-dealer__exit' src={close} alt='#' onClick={() => {
            if ('alt' in window) {
                alt.emit('cef::component:close');
            }
        }}/>
        <div className='car-dealer__create' onClick={() => {
            if ('alt' in window) {
                alt.emit('cef::carDealer:buy', JSON.stringify({autoClass, model, color}));
            }
        }}>Buy
        </div>
    </div>
}

export default React.memo(CarDealer);