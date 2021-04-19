import * as React from 'react';

import CDClass from "./CDClass";

import jeep from '@assets/images/carDealer/jeep.svg';
import coupe from '@assets/images/carDealer/coupe.svg';
import sport from '@assets/images/carDealer/sport.svg';

import './CDClasses.scss';

const CDClasses = ({ autoClass, setAutoClass }) => {
    return <div className='car-dealer-class'>
        <CDClass
            image={jeep}
            select='default'
            autoClass={autoClass}
            setAutoClass={setAutoClass}
        />
        <CDClass
            image={coupe}
            select='premium'
            autoClass={autoClass}
            setAutoClass={setAutoClass}
        />
        <CDClass
            image={sport}
            select='luxury'
            autoClass={autoClass}
            setAutoClass={setAutoClass}
        />
    </div>
}

export default React.memo(CDClasses);