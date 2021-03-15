import CDColorOption from "./CDColoOption";

import './CDColor.scss';

const CDColor = (props) => {
    return <div className='car-dealer-color'>
        {props.palette.map((el, key) => {
            return <CDColorOption key={key} el={el} id={key} color={props.color} setColor={props.setColor}/>
        })}
        <span>Select color car</span>
    </div>
}

export default CDColor;