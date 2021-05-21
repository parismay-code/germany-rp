import * as React from 'react';
import {observer} from "mobx-react-lite";

import './CCSkinColor.scss';

const CCSkinColor = ({changeSkinColor}) => {
    return <div className='character-creator-skinColor'>
        <div className='character-creator-skinColor__title'>Hautfarbe</div>
        <div className='character-creator-skinColor__form'>
            <input
                className='character-creator-skinColor__input'
                type='range'
                min='0'
                max='1'
                step='0.05'
                name='n_creatorSkinColor'
                defaultValue='0.5'
                onChange={(e) => changeSkinColor(Number(e.target.value))}
            />
        </div>
    </div>
}

export default observer(CCSkinColor);