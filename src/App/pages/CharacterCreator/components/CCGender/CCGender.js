import cn from 'classnames';

import './CCGender.scss';

const CCGender = (props) => {
    return <div className='character-creator-gender'>
        <div
            className={cn('character-creator-gender__male', !Boolean(props.gender) && 'character-creator-gender__male_active')}
            onClick={() => props.setGender(0)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                <path id="svg_male"
                      d="M46.5,4.5H36.625a1.5,1.5,0,0,0-1.062,2.562l2.113,2.112L27.587,19.262a17.993,17.993,0,1,0,5.65,5.65L43.325,14.825l2.112,2.112A1.5,1.5,0,0,0,48,15.875V6a1.5,1.5,0,0,0-1.5-1.5ZM18,44.5a10,10,0,1,1,10-10A10.013,10.013,0,0,1,18,44.5Z"
                      transform="translate(0 -4.5)" fill="#0f0f0f" opacity="0.5"/>
            </svg>
        </div>
        <div
            className={cn('character-creator-gender__female', Boolean(props.gender) && 'character-creator-gender__female_active')}
            onClick={() => props.setGender(1)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="65.545" height="65.545" viewBox="0 0 65.545 65.545">
                <path id="svg_female"
                      d="M36.272,18.136A18.136,18.136,0,1,0,14.106,35.818v6.5H9.572A1.516,1.516,0,0,0,8.06,43.828v5.038a1.516,1.516,0,0,0,1.511,1.511h4.534v4.534a1.516,1.516,0,0,0,1.511,1.511h5.038a1.516,1.516,0,0,0,1.511-1.511V50.377H26.7a1.516,1.516,0,0,0,1.511-1.511V43.828A1.516,1.516,0,0,0,26.7,42.317H22.166v-6.5A18.14,18.14,0,0,0,36.272,18.136Zm-28.211,0A10.075,10.075,0,1,1,18.136,28.211,10.089,10.089,0,0,1,8.06,18.136Z"
                      transform="translate(25.648 65.545) rotate(-135)" fill="#0f0f0f" opacity="0.5"/>
            </svg>

        </div>
        <div
            className={cn('character-creator-gender__slider', Boolean(props.gender) && 'character-creator-gender__slider_right')}/>
    </div>
}

export default CCGender;