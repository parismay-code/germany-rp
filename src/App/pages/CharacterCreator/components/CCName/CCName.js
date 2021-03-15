import './CCName.scss';

const CCName = (props) => {
    return <div className='character-creator-name'>
        <div className='character-creator-name__title'>User Name</div>
        <div className='character-creator-name__form'>
            <input
                type='text'
                name='n_creatorFirstname'
                defaultValue={props.creatorData.player.nickname.firstname}
                placeholder='Firstname'
                onChange={(e) => {
                    props.creatorData.player.nickname.firstname = e.target.value;
                }}/>
            <input
                type='text'
                name='n_creatorLastname'
                defaultValue={props.creatorData.player.nickname.lastname}
                placeholder='Lastname'
                onChange={(e) => {
                    props.creatorData.player.nickname.lastname = e.target.value;
                }}/>
        </div>
    </div>
}

export default CCName;