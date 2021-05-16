import * as React from 'react';
import {observer} from "mobx-react-lite";

import './CCName.scss';

const CCName = ({ player, changeNickname, changeBirthInfo }) => {
    return <div className='character-creator-name'>
        <div className='character-creator-name__title'>Name</div>
        <div className='character-creator-name__form'>
            <input
                type='text'
                name='n_creatorFirstname'
                defaultValue={player.nickname.firstname}
                placeholder='Vorname'
                onChange={(e) => changeNickname(0, e.target.value)}/>
            <input
                type='text'
                name='n_creatorLastname'
                defaultValue={player.nickname.lastname}
                placeholder='Nachname'
                onChange={(e) => changeNickname(1, e.target.value)}/>
            <input
                type='text'
                name='n_creatorBirthDay'
                defaultValue={player.birthday}
                placeholder='Geburtstag'
                pattern='[0-9]{4}-[0-9]{2}-[0-9]{2}'
                onFocus={(e) => e.target.type='date'}
                onBlur={(e) => e.target.type='text'}
                onChange={(e) => changeBirthInfo(0, e.target.value)}/>
            <input
                type='text'
                name='n_creatorBirthPlace'
                defaultValue={player.birthPlace}
                placeholder='Geburtsort'
                onChange={(e) => changeBirthInfo(1, e.target.value)}/>
        </div>
    </div>
}

export default observer(CCName);