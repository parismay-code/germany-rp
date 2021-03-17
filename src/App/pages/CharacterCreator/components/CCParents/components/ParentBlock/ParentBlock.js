import * as React from 'react';

import circleArrow from "@assets/images/cCreator/circleArrow.svg";

import './ParentBlock.scss';

const ParentBlock = ({ title, type, parent, changeParents, names }) => {

    return <div className='character-creator-parent-block'>
        <div className='character-creator-parent-block-nav'>
            <img
                className='character-creator-parent-block-nav__leftArrow'
                src={circleArrow}
                alt='#'
                onClick={() => {
                    if (parent === 0) changeParents(type, names.length - 1);
                    else changeParents(type, --parent);
                }}
            />
            <span className='character-creator-parent-block-nav__title'>{title}</span>
            <img
                className='character-creator-parent-block-nav__rightArrow'
                src={circleArrow}
                alt='#'
                onClick={() => {
                    if (parent === names.length - 1) changeParents(type, 0);
                    else changeParents(type, ++parent);
                }}
            />
        </div>
        <div className='character-creator-parent-block__name'>{names[parent]}</div>
    </div>
}

export default React.memo(ParentBlock);