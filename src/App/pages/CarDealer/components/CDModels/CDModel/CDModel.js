import cn from 'classnames';

const CDModel = (props) => {
    return <div
        className={cn('car-dealer-models__option', props.model === props.id && 'car-dealer-models__option_active')}
        onClick={() => props.setModel(props.id)}
    >
        {`${props.name} #${props.id}`}
    </div>
}

export default CDModel;