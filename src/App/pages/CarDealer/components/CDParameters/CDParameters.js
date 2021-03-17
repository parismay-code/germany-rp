import * as React from 'react';
import {observer} from "mobx-react-lite";

import maxSpeed from '@assets/images/carDealer/maxSpeed.svg';
import acceleration from '@assets/images/carDealer/acceleration.svg';

import './CDParameters.scss';

const CDParameters = ({ autoClass, model, carsList }) => {
    return <div className='car-dealer-parameters'>
        <div className='car-dealer-parameters__title'>Parameters</div>
        <div className='car-dealer-parameters-element'>
            <div className='car-dealer-parameters-element__title'>
                <img src={maxSpeed} alt='#'/>
                <span>{`${carsList[autoClass].cars[model].maxSpeed} km/h`}</span>
            </div>
            <span className='car-dealer-parameters-element__subtitle'>MaxSpeed</span>
        </div>
        <div className='car-dealer-parameters-element'>
            <div className='car-dealer-parameters-element__title'>
                <img src={acceleration} alt='#'/>
                <span>{`${carsList[autoClass].cars[model].acceleration} sec.`}</span>
            </div>
            <span className='car-dealer-parameters-element__subtitle'>Acceleration</span>
        </div>
    </div>
}

export default observer(CDParameters);