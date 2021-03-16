import * as React from 'react';
import {observer} from "mobx-react-lite";

import './CCName.scss';

const CCName = ({ nickname }) => {
    return <div className='character-creator-name'>
        <div className='character-creator-name__title'>User Name</div>
        <div className='character-creator-name__form'>
            <input
                type='text'
                name='n_creatorFirstname'
                defaultValue={nickname.firstname}
                placeholder='Firstname'
                onChange={(e) => nickname.firstname = e.target.value}/>
            <input
                type='text'
                name='n_creatorLastname'
                defaultValue={nickname.lastname}
                placeholder='Lastname'
                onChange={(e) => nickname.lastname = e.target.value}/>
        </div>
    </div>
}

export default observer(CCName);