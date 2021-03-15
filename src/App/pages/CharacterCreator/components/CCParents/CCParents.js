import ParentBlock from "./components/ParentBlock";

import './CCParents.scss';

const CCParents = (props) => {
    const fatherNames = ['Test Father #1', 'Test Father #2', 'Test Father #3', 'Test Father #4'];
    const motherNames = ['Test Mother #1', 'Test Mother #2', 'Test Mother #3', 'Test Mother #4'];

    return <div className='character-creator-parents'>
        <div className='character-creator-parents__title'>Parents</div>
        <div className='character-creator-parents-block'>
            <ParentBlock
                title='Mother'
                parent={props.mother}
                setParent={props.setMother}
                names={motherNames}
            />
            <ParentBlock
                title='Father'
                parent={props.father}
                setParent={props.setFather}
                names={fatherNames}
            />
        </div>
        <input
            className='character-creator-parents__input'
            type='range'
            min='-100'
            max='100'
            name='n_creatorParentsMix'
            defaultValue={props.parentsMix}
            onChange={(e) => props.setParentsMix(e.target.value)}
        />
    </div>
}

export default CCParents;