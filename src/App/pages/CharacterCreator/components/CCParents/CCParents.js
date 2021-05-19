import * as React from 'react';
import {observer} from "mobx-react-lite";

import ParentBlock from "./components/ParentBlock";

import './CCParents.scss';

const CCParents = ({ parents, changeParents, changeParentsMix }) => {
    const fatherNames = React.useMemo(() =>
        ['Jens', 'Daniel', 'Elias', 'Noah', 'David', 'Joan', 'Alex', 'Tim', 'Marcel', 'Ethan', 'Vincent', 'Angel', 'Diego', 'Adrian', 'Gabriel', 'Michael', 'Santiago', 'Kevin', 'Louis', 'Samuel', 'Anthony', 'John', 'Niko', 'Claude'], []);
    const motherNames = React.useMemo(() =>
        ['Hannah','Audrey','Jamsine','Giselle','Amelia','Isabella','Elias','Karin','Julia','Lea','Sophia','Evelin','Nicole','Ashley','Grace','Brianna','Natalie','Olivia','Elizabeth','Charlotte','Emma','Misty'], []);

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