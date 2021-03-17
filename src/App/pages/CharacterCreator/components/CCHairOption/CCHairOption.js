import * as React from 'react';
import {observer} from "mobx-react-lite";

import circleArrow from "../../../../assets/images/cCreator/circleArrow.svg";

import './CCHairOption.scss';

const CCHairOption = ({ el, id, data, setCurrentHair, changeHair }) => {
    return <div className='character-creator-hair-option'>
        <div className='character-creator-hair-option-title'>
            <span>{el.title}</span>
            <span>{data[el.value]}</span>
        </div>
        <div className='character-creator-hair-option-input'>
            <img
                className='character-creator-hair-option-input__leftArrow'
                src={circleArrow}
                alt='#'
                onClick={() => {
                    if (el.value - 1 < 0) changeHair(id, data.length - 1);
                    else changeHair(id, el.value - 1);
                    setCurrentHair(id);
                }}
            />
            <input
                type='range'
                value={el.value}
                name='n_characterCreatorOptInput'
                min='0'
                max={ data.length - 1 }
                onChange={(e) => {
                    setCurrentHair(id);
                    changeHair(id, Number(e.target.value));
                }}
            />
            <img
                className='character-creator-hair-option-input__rightArrow'
                src={circleArrow}
                alt='#'
                onClick={() => {
                    if (el.value + 1 > data.length - 1) changeHair(id, 0);
                    else changeHair(id, el.value + 1);
                    setCurrentHair(id);
                }}
            />
        </div>
    </div>
}

export default observer(CCHairOption);