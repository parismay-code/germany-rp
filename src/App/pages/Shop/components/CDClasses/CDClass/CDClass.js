import cn from 'classnames';

const CDClass = (props) => {
    return <div
        className={cn('car-dealer-class__option', props.type === props.currentType && 'car-dealer-class__option_active')}
        onClick={() => {
            props.setType(props.currentType);
        }}
    >
        <img src={props.image} alt='#'/>
    </div>
}

export default CDClass;