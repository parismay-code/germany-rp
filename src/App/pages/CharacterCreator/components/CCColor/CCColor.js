import cn from 'classnames';

import './CCColor.scss';

const CCColor = (props) => {
    return <div className='character-creator-color'>
        <div className='character-creator-color__title'>{props.title}</div>
        <div className='character-creator-color-list'>
            {props.palette.map((el, key) => {
                return <div
                    key={key}
                    className={cn('character-creator-color-list__element', props.color === key && 'character-creator-color-list__element_active')}
                    style={{backgroundColor: el}}
                    onClick={() => props.setColor(key)}
                />
            })}
        </div>
    </div>
}

export default CCColor;