import * as React from 'react';
import {observer} from "mobx-react-lite";

import circleArrow from "@assets/images/cCreator/circleArrow.svg";

import './ParentBlock.scss';

const ParentBlock = ({ title, parent, names }) => {
    return <div className='character-creator-parent-block'>
        <div className='character-creator-parent-block-nav'>
            <img
                className='character-creator-parent-block-nav__leftArrow'
                src={circleArrow}
                alt='#'
                onClick={() => {
                    if (parent === 0) parent = names.length - 1;
                    else parent--;
                }}
            />
            <span className='character-creator-parent-block-nav__title'>{title}</span>
            <img
                className='character-creator-parent-block-nav__rightArrow'
                src={circleArrow}
                alt='#'
                onClick={() => {
                    if (parent === names.length - 1) parent = 0;
                    else parent++;
                }}
            />
        </div>
        <div className='character-creator-parent-block__name'>{names[parent]}</div>
    </div>
}

export default observer(ParentBlock);