import * as React from 'react';

import engineIcon from '@assets/images/tuning/engine.svg';
import mufflerIcon from '@assets/images/tuning/muffler.svg';
import colorIcon from '@assets/images/tuning/color.svg';
import wheelIcon from '@assets/images/tuning/wheel.svg';
import turboIcon from '@assets/images/tuning/turbo.svg';
import soundIcon from '@assets/images/tuning/sound.svg';

import TuningCategory from "./Category";

import './TuningCategories.scss';

const TuningCategories = () => {
    const tuningData = React.useMemo(() => [
        {
            id: 0,
            type: 'Engine',
            value: 0,
            image: engineIcon,
        },
        {
            id: 1,
            type: 'Muffler',
            value: 0,
            image: mufflerIcon,
        },
        {
            id: 2,
            type: 'Color',
            value: 0,
            image: colorIcon,
        },
        {
            id: 3,
            type: 'Wheels',
            value: 0,
            image: wheelIcon,
        },
        {
            id: 4,
            type: 'Turbo',
            value: 0,
            image: turboIcon,
        },
        {
            id: 5,
            type: 'Sound',
            value: 0,
            image: soundIcon,
        },
        {
            id: 5,
            type: 'Sound',
            value: 0,
            image: soundIcon,
        },
        {
            id: 5,
            type: 'Sound',
            value: 0,
            image: soundIcon,
        },
    ], []);

    return <div className='tuning-categories'>
        <div className='tuning-categories__title'>Categories</div>
        <div className='tuning-categories-content'>
            {tuningData.map((el, key) => {
                return <TuningCategory
                    key={key}
                    id={el.id}
                    type={el.type}
                    image={el.image}
                />
            })}
        </div>
    </div>
}

export default React.memo(TuningCategories);