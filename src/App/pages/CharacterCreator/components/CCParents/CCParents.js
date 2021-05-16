import * as React from 'react';
import {observer} from "mobx-react-lite";

import ParentBlock from "./components/ParentBlock";

import './CCParents.scss';

const CCParents = ({ parents, changeParents, changeParentsMix }) => {
    const fatherNames = React.useMemo(() =>
        ['Test Father #1', 'Test Father #2', 'Test Father #3', 'Test Father #4'], []);
    const motherNames = React.useMemo(() =>
        ['Test Mother #1', 'Test Mother #2', 'Test Mother #3', 'Test Mother #4'], []);

    return <div className='character-creator-parents'>
        <div className='character-creator-parents__title'>Eltern</div>
        <div className='character-creator-parents-block'>
            <ParentBlock
                title='Mutter'
                type={0}
                parent={parents.mother}
                changeParents={changeParents}
                names={motherNames}
            />
            <ParentBlock
                title='Vater'
                type={1}
                parent={parents.father}
                changeParents={changeParents}
                names={fatherNames}
            />
        </div>
        <input
            className='character-creator-parents__input'
            type='range'
            min='-100'
            max='100'
            name='n_creatorParentsMix'
            defaultValue={parents.mix}
            onChange={(e) => changeParentsMix(Number(e.target.value))}
        />
    </div>
}

export default observer(CCParents);