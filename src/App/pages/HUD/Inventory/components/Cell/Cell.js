import './Cell.scss';

const Cell = (props) => {
    return <div
        className='cell'
        style={props.thumb ? {} : props.defaultThumb ? {backgroundImage: `url(${props.defaultThumb}`} : {}}
        onMouseEnter={() => {
            if (props.setIsDragging) {
                if (props.isDragging) props.setTargetCell(props.position);
                else {
                    props.setDraggedCell(props.position);
                    props.setTargetCell(props.position);
                }
            }
        }}
    >
        {props.thumb &&
        <div
            className='cell__item'
            onMouseDown={(e) => {
                if (props.setIsDragging) {
                    if (props.thumb) {
                        props.setIsDragging(true);
                    }
                }
            }}
        >
            <img src={props.thumb} alt='#'/>
        </div>}
        {props.hotkey >= 0 && <div className='cell__hotkey'>{props.hotkey}</div>}
    </div>
}

export default Cell;