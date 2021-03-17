import * as React from 'react';

import CDClass from "./CDClass";

import jeep from '@assets/images/carDealer/jeep.svg';
import coupe from '@assets/images/carDealer/coupe.svg';
import sport from '@assets/images/carDealer/sport.svg';

import './CDClasses.scss';

const CDClasses = ({ autoClass, setAutoClass, setModel }) => {
    return <div className='car-dealer-class'>
        <CDClass
            image={jeep}
            id={0}
            autoClass={autoClass}
            setAutoClass={setAutoClass}
            setModel={setModel}
        />
        <CDClass
            image={coupe}
            id={1}
            autoClass={autoClass}
            setAutoClass={setAutoClass}
            setModel={setModel}
        />
        <CDClass
            image={sport}
            id={2}
            autoClass={autoClass}
            setAutoClass={setAutoClass}
            setModel={setModel}
        />
    </div>
}

export default React.memo(CDClasses);