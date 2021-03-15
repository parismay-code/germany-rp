import * as React from 'react';

import CDClass from "./CDClass";

import jeep from '../../../../assets/images/carDealer/jeep.svg';
import coupe from '../../../../assets/images/carDealer/coupe.svg';
import sport from '../../../../assets/images/carDealer/sport.svg';

import './CDClasses.scss';

const CDClasses = (props) => {
    return <div className='car-dealer-class'>
        <CDClass image={jeep} id={0} autoClass={props.autoClass} setAutoClass={props.setAutoClass}/>
        <CDClass image={coupe} id={1} autoClass={props.autoClass} setAutoClass={props.setAutoClass}/>
        <CDClass image={sport} id={2} autoClass={props.autoClass} setAutoClass={props.setAutoClass}/>
    </div>
}

export default CDClasses;