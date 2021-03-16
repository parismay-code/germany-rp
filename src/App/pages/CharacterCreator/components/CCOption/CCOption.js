/* global alt */
import * as React from 'react';
import {observer} from "mobx-react-lite";

import circleArrow from '../../../../assets/images/cCreator/circleArrow.svg';

import './CCOption.scss';

const CCOption = ({ el }) => {
    return <div className='character-creator-option'>
        <span className='character-creator-option__title'>{el.title}</span>
        <div className='character-creator-option-input'>
            <img
                className='character-creator-option-input__leftArrow'
                src={circleArrow}
                alt='#'
                onClick={() => {
                    el.value -= 10;
                    if (el.value < -100) el.value = 100;
                }}
            />
            <input
                type='range'
                value={el.value}
                name='n_characterCreatorOptInput'
                min='-100'
                max='100'
                onChange={(e) => {
                    el.value = Number(e.target.value);
                }}
            />
            <img
                className='character-creator-option-input__rightArrow'
                src={circleArrow}
                alt='#'
                onClick={() => {
                    el.value += 10;
                    if (el.value > 100) el.value = -100;
                }}
            />
        </div>

    </div>
}

export default observer(CCOption);