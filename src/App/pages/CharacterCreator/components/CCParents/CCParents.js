import * as React from 'react';
import {observer} from "mobx-react-lite";

import ParentBlock from "./components/ParentBlock";

import './CCParents.scss';

const CCParents = ({ mother, father, mix }) => {
    const fatherNames = React.useMemo(() =>
        ['Test Father #1', 'Test Father #2', 'Test Father #3', 'Test Father #4'], []);
    const motherNames = React.useMemo(() =>
        ['Test Mother #1', 'Test Mother #2', 'Test Mother #3', 'Test Mother #4'], []);

    return <div className='character-creator-parents'>
        <div className='character-creator-parents__title'>Parents</div>
        <div className='character-creator-parents-block'>
            <ParentBlock
                title='Mother'
                parent={mother}
                names={motherNames}
            />
            <ParentBlock
                title='Father'
                parent={father}
                names={fatherNames}
            />
        </div>
        <input
            className='character-creator-parents__input'
            type='range'
            min='-100'
            max='100'
            name='n_creatorParentsMix'
            defaultValue={mix}
            onChange={(e) => mix = Number(e.target.value)}
        />
    </div>
}

export default observer(CCParents);