import * as React from 'react';

import CDClass from "./CDClass";

import jeep from '@assets/images/carDealer/jeep.svg';
import coupe from '@assets/images/carDealer/coupe.svg';
import sport from '@assets/images/carDealer/sport.svg';

import './CDClasses.scss';

const CDClasses = ({ store, autoClass, setAutoClass }) => {
    return <div className='car-dealer-class'>
        {store.carDealerList.filter(el => el.categoryId === 0).length > 0 && <CDClass
            image={jeep}
            select={0}
            autoClass={autoClass}
            setAutoClass={setAutoClass}
        />}
        {store.carDealerList.filter(el => el.categoryId === 1).length > 0 && <CDClass
            image={jeep}
            select={1}
            autoClass={autoClass}
            setAutoClass={setAutoClass}
        />}
        {store.carDealerList.filter(el => el.categoryId === 2).length > 0 && <CDClass
            image={jeep}
            select={2}
            autoClass={autoClass}
            setAutoClass={setAutoClass}
        />}
        {store.carDealerList.filter(el => el.categoryId === 3).length > 0 && <CDClass
            image={jeep}
            select={3}
            autoClass={autoClass}
            setAutoClass={setAutoClass}
        />}
    </div>
}

export default React.memo(CDClasses);