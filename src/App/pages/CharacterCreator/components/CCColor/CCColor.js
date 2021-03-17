import * as React from 'react';
import cn from 'classnames';
import {observer} from "mobx-react-lite";

import './CCColor.scss';

const CCColor = ({ title, palette, type, color, changeColor }) => {
    const _color = React.useMemo(() => {
        switch (type) {
            case 'body': return color.body;
            case 'headHair': return color.headHair;
            case 'eyebrows': return color.eyebrows;
            case 'chestHair': return color.chestHair;
            case 'beard': return color.beard;
            case 'eyes': return color.eyes;
            default: return;
        }
    }, [type, color.body, color.headHair, color.eyebrows, color.chestHair, color.beard, color.eyes])

    return <div className='character-creator-color'>
        <div className='character-creator-color__title'>{title}</div>
        <div className='character-creator-color-list'>
            {palette.map((el, key) => {
                return <div
                    key={key}
                    className={cn('character-creator-color-list__element', _color === key && 'character-creator-color-list__element_active')}
                    style={{backgroundColor: el}}
                    onClick={() => changeColor(type, key)}
                />
            })}
        </div>
    </div>
}

export default observer(CCColor);