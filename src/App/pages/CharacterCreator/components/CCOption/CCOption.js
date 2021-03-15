/* global alt */

import {useState, useEffect, useRef} from 'react';

import circleArrow from '../../../../assets/images/cCreator/circleArrow.svg';

import './CCOption.scss';

const CCOption = (props) => {
    const [value, setValue] = useState(props.el.value);

    const input = useRef(null);

    useEffect(() => {
        props.el.value = value;

        if ('alt' in window) {
            alt.emit('cef::characterCreator:preview', props.data);
        }
    }, [value])

    return <div className='character-creator-option'>
        <span className='character-creator-option__title'>{props.title}</span>
        <div className='character-creator-option-input'>
            <img
                className='character-creator-option-input__leftArrow'
                src={circleArrow}
                alt='#'
                onClick={() => {
                    props.el.value -= 10;
                    if (props.el.value < -100) props.el.value = 100;

                    setValue(props.el.value);
                    input.current.value = props.el.value;
                }}
            />
            <input
                ref={input}
                type='range'
                defaultValue={props.el.value}
                name='n_characterCreatorOptInput'
                min='-100'
                max='100'
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
            <img
                className='character-creator-option-input__rightArrow'
                src={circleArrow}
                alt='#'
                onClick={() => {
                    props.el.value += 10;
                    if (props.el.value > 100) props.el.value = -100;

                    setValue(props.el.value);
                    input.current.value = props.el.value;
                }}
            />
        </div>

    </div>
}

export default CCOption;