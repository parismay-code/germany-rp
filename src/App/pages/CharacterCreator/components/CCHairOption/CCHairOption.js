/* global alt */

import {useState, useEffect, useRef} from 'react';

import circleArrow from "../../../../assets/images/cCreator/circleArrow.svg";

import './CCHairOption.scss';

const CCHairOption = (props) => {
    const [value, setValue] = useState(props.el.value);

    useEffect(() => {
        props.el.value = value;

        if ('alt' in window) {
            alt.emit('cef::characterCreator:preview', props.creatorData);
        }
    }, [value])

    const input = useRef(null);

    return <div className='character-creator-hair-option'>
        <div className='character-creator-hair-option-title'>
            <span>{props.title}</span>
            <span>{props.data[value]}</span>
        </div>
        <div className='character-creator-hair-option-input'>
            <img
                className='character-creator-hair-option-input__leftArrow'
                src={circleArrow}
                alt='#'
                onClick={() => {
                    props.el.value -= 1;
                    if (props.el.value < 0) props.el.value = props.data.length-1;
                    props.event(props.id);

                    setValue(props.el.value);
                    input.current.value = props.el.value;
                }}
            />
            <input
                ref={input}
                type='range'
                defaultValue={props.el.value}
                name='n_characterCreatorOptInput'
                min='0'
                max={props.data.length-1}
                onChange={(e) => {
                    props.event(props.id);
                    setValue(e.target.value);
                }}
            />
            <img
                className='character-creator-hair-option-input__rightArrow'
                src={circleArrow}
                alt='#'
                onClick={() => {
                    props.el.value += 1;
                    if (props.el.value > props.data.length-1) props.el.value = 0;
                    props.event(props.id);

                    setValue(props.el.value);
                    input.current.value = props.el.value;
                }}
            />
        </div>
    </div>
}

export default CCHairOption;