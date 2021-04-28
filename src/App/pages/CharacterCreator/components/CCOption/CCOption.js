import * as React from 'react';
import {observer} from "mobx-react-lite";

import circleArrow from '@assets/images/cCreator/circleArrow.svg';

import './CCOption.scss';

const CCOption = ({ el, changeOption }) => {
    return <div className='character-creator-option'>
        <span className='character-creator-option__title'>{el.title}</span>
        <div className='character-creator-option-input'>
            <img
                className='character-creator-option-input__leftArrow'
                src={circleArrow}
                alt='#'
                onClick={() => {
                    if (el.value - 10 < -100) changeOption(el.type, 100);
                    else changeOption(el.type, el.value - 10);
                }}
            />
            <input
                type='range'
                value={el.value}
                name='n_characterCreatorOptInput'
                min='-100'
                max='100'
                onChange={(e) => {
                    changeOption(el.type, Number(e.target.value));
                }}
            />
            <img
                className='character-creator-option-input__rightArrow'
                src={circleArrow}
                alt='#'
                onClick={() => {
                    if (el.value + 10 > 100) changeOption(el.type, -100);
                    else changeOption(el.type, el.value + 10);
                }}
            />
        </div>

    </div>
}

export default observer(CCOption);