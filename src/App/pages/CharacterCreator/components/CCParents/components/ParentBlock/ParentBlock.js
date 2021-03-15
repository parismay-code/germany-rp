import circleArrow from "../../../../../../assets/images/cCreator/circleArrow.svg";

import './ParentBlock.scss';

const ParentBlock = (props) => {
    const nextParent = (bool) => {
        let next;

        if (bool) next = props.parent + 1;
        else next = props.parent - 1;

        if (next < 0) next = props.names.length-1;
        if (next > props.names.length-1) next = 0;

        props.setParent(next);
    }

    return <div className='character-creator-parent-block'>
        <div className='character-creator-parent-block-nav'>
            <img
                className='character-creator-parent-block-nav__leftArrow'
                src={circleArrow}
                alt='#'
                onClick={() => nextParent(false)}
            />
            <span className='character-creator-parent-block-nav__title'>{props.title}</span>
            <img
                className='character-creator-parent-block-nav__rightArrow'
                src={circleArrow}
                alt='#'
                onClick={() => nextParent(true)}
            />
        </div>
        <div className='character-creator-parent-block__name'>{props.names[props.parent]}</div>
    </div>
}

export default ParentBlock;