import * as React from 'react';

import CDClass from "./CDClass";

import bicycle from '@assets/images/carDealer/bicycle.svg';
import motorcycle from '@assets/images/carDealer/motorcycle.svg';
import lowrider from '@assets/images/carDealer/lowrider.svg';
import offroad from '@assets/images/carDealer/offroad.svg';
import suv from '@assets/images/carDealer/suv.svg';
import standart from '@assets/images/carDealer/standart.svg';
import sports from '@assets/images/carDealer/sports.svg';
import supersports from '@assets/images/carDealer/supersports.svg';
import airplane from '@assets/images/carDealer/airplane.svg';
import helicopter from '@assets/images/carDealer/helicopter.svg';
import boat from '@assets/images/carDealer/boat.svg';
import truck from '@assets/images/carDealer/truck.svg';
import musclecar from '@assets/images/carDealer/musclecar.svg';
import useful from '@assets/images/carDealer/useful.svg';
import transport from '@assets/images/carDealer/transport.svg';
import classic from '@assets/images/carDealer/classic.svg';
import tuning from '@assets/images/carDealer/tuning.svg';


import './CDClasses.scss';

const CDClasses = ({ store, autoClass, setAutoClass }) => {
    return <div className='car-dealer-class'>
        {store.carDealerList.filter(el => el.CategoryId === 1).length > 0 && <CDClass
            image={bicycle}
            select={0}
            autoClass={autoClass}
            setAutoClass={setAutoClass}
        />}
        {store.carDealerList.filter(el => el.CategoryId === 2).length > 0 && <CDClass
            image={motorcycle}
            select={1}
            autoClass={autoClass}
            setAutoClass={setAutoClass}
        />}
        {store.carDealerList.filter(el => el.CategoryId === 3).length > 0 && <CDClass
            image={lowrider}
            select={2}
            autoClass={autoClass}
            setAutoClass={setAutoClass}
        />}
        {store.carDealerList.filter(el => el.CategoryId === 4).length > 0 && <CDClass
            image={offroad}
            select={3}
            autoClass={autoClass}
            setAutoClass={setAutoClass}
        />}
        {store.carDealerList.filter(el => el.CategoryId === 5).length > 0 && <CDClass
            image={suv}
            select={3}
            autoClass={autoClass}
            setAutoClass={setAutoClass}
        />}
        {store.carDealerList.filter(el => el.CategoryId === 6).length > 0 && <CDClass
            image={standart}
            select={3}
            autoClass={autoClass}
            setAutoClass={setAutoClass}
        />}
        {store.carDealerList.filter(el => el.CategoryId === 7).length > 0 && <CDClass
            image={sports}
            select={3}
            autoClass={autoClass}
            setAutoClass={setAutoClass}
        />}
        {store.carDealerList.filter(el => el.CategoryId === 8).length > 0 && <CDClass
            image={supersports}
            select={3}
            autoClass={autoClass}
            setAutoClass={setAutoClass}
        />}
        {store.carDealerList.filter(el => el.CategoryId === 9).length > 0 && <CDClass
            image={airplane}
            select={3}
            autoClass={autoClass}
            setAutoClass={setAutoClass}
        />}
        {store.carDealerList.filter(el => el.CategoryId === 10).length > 0 && <CDClass
            image={helicopter}
            select={3}
            autoClass={autoClass}
            setAutoClass={setAutoClass}
        />}
        {store.carDealerList.filter(el => el.CategoryId === 11).length > 0 && <CDClass
            image={boat}
            select={3}
            autoClass={autoClass}
            setAutoClass={setAutoClass}
        />}
        {store.carDealerList.filter(el => el.CategoryId === 12).length > 0 && <CDClass
            image={truck}
            select={3}
            autoClass={autoClass}
            setAutoClass={setAutoClass}
        />}
        {store.carDealerList.filter(el => el.CategoryId === 13).length > 0 && <CDClass
            image={musclecar}
            select={3}
            autoClass={autoClass}
            setAutoClass={setAutoClass}
        />}
        {store.carDealerList.filter(el => el.CategoryId === 13).length > 0 && <CDClass
            image={useful}
            select={3}
            autoClass={autoClass}
            setAutoClass={setAutoClass}
        />}
        {store.carDealerList.filter(el => el.CategoryId === 13).length > 0 && <CDClass
            image={transport}
            select={3}
            autoClass={autoClass}
            setAutoClass={setAutoClass}
        />}
        {store.carDealerList.filter(el => el.CategoryId === 13).length > 0 && <CDClass
            image={classic}
            select={3}
            autoClass={autoClass}
            setAutoClass={setAutoClass}
        />}
        {store.carDealerList.filter(el => el.CategoryId === 13).length > 0 && <CDClass
            image={tuning}
            select={3}
            autoClass={autoClass}
            setAutoClass={setAutoClass}
        />}
    </div>
}

export default React.memo(CDClasses);