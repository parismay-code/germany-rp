import cn from 'classnames';

const CDClass = (props) => {
    return <div
        className={cn('car-dealer-class__option', props.autoClass === props.id && 'car-dealer-class__option_active')}
        onClick={() => {
            props.setAutoClass(props.id);
        }}
    >
        <img src={props.image} alt='#'/>
    </div>
}

export default CDClass;