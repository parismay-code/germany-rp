import './CCNavigation.scss';

const CCNavigation = (props) => {
    return <div className='character-creator-navigation'>
        <div className='character-creator-navigation__button' onClick={() => props.nextPage(false)}>Back</div>
        <div className='character-creator-navigation__icon'>
            <img src={props.icon} alt='#'/>
        </div>
        <div className='character-creator-navigation__button' onClick={() => props.nextPage(true)}>Next</div>
    </div>
}

export default CCNavigation;