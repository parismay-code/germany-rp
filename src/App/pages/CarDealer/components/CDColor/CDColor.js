import * as React from 'react';

import CDColorOption from "./CDColoOption";

import './CDColor.scss';

const CDColor = ({ palette, color, setColor }) => {
    return <div className='car-dealer-color'>
        {palette.map((el, key) => {
            return <CDColorOption
                key={key}
                el={el}
                id={key}
                color={color}
                setColor={setColor}
            />
        })}
        <span className='car-dealer-color__title'>Select color car</span>
    </div>
}

export default React.memo(CDColor);