import * as React from 'react';
import {observer} from "mobx-react-lite";

import circleArrow from '@assets/images/cCreator/circleArrow.svg';

import './CCOption.scss';

const CCOption = ({ el, changeOption, min, max, step }) => {
    return <div className='character-creator-option'>
        <span className='character-creator-option__title'>{el.title}</span>
        <div className='character-creator-option-input'>
            <img
                className='character-creator-option-input__leftArrow'
                src={circleArrow}
                alt='#'
                onClick={() => {
                    if (el.value - step < min) changeOption(el.type, max);
                    else changeOption(el.type, el.value - step);
                }}
            />
            <input
                type='range'
                value={el.value}
                name='n_characterCreatorOptInput'
                min={min}
                max={max}
                step={step}
                onChange={(e) => {
                    changeOption(el.type, Number(e.target.value));
                    el.value = e.target.value;
                }}
            />
            <img
                className='character-creator-option-input__rightArrow'
                src={circleArrow}
                alt='#'
                onClick={() => {
                    if (el.value + step > max) changeOption(el.type, min);
                    else changeOption(el.type, el.value + step);
                }}
            />
        </div>

    </div>
}

export default observer(CCOption);