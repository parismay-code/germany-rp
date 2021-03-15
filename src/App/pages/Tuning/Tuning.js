/* global alt */

import {useState} from 'react';

import TuningCategories from "./components/Categories";
import TuningSpecifications from "./components/Specifications";

import TuningPrice from "./components/Price";

import close from '../../assets/images/close.svg';

import './Tuning.scss';

const Tuning = () => {
    const [engine, setEngine] = useState(0);
    const [muffler, setMuffler] = useState(0);
    const [color, setColor] = useState(0);
    const [wheels, setWheels] = useState(0);
    const [turbo, setTurbo] = useState(0);
    const [sound, setSound] = useState(0);

    return <div className='tuning'>
        <div className='tuning-menu'>
            <div className='tuning-menu__header'>Tuning</div>
            <TuningCategories />
            <TuningSpecifications />
            <TuningPrice />
        </div>
        <img className='tuning__exit' src={close} alt='#' onClick={() => {
            if ('alt' in window) {
                alt.emit('cef::component:close');
            }
        }}/>
        <div className='tuning__create' onClick={() => {
            if ('alt' in window) {
                alt.emit('cef::tuning:buy', JSON.stringify({engine, muffler, color, wheels, turbo, sound}));
            }
        }}>Buy
        </div>
    </div>
}

export default Tuning