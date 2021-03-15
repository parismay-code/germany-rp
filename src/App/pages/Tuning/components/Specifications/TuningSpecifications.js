import TuningSpecification from "./Specification";

import maxSpeedIcon from '../../../../assets/images/tuning/maxSpeed.svg';
import accelerationIcon from '../../../../assets/images/tuning/acceleration.svg';
import brakesIcon from '../../../../assets/images/tuning/brakes.svg';
import clutchIcon from '../../../../assets/images/tuning/clutch.svg';

import './TuningSpecifications.scss';

const TuningSpecifications = () => {
    return <div className='tuning-specifications'>
        <div className='tuning-specifications__title'>Specifications</div>
        <div className='tuning-specifications__description'>
            Provides better handling due to the air pressure on the rear of the car
        </div>
        <div className='tuning-specifications__content'>
            <TuningSpecification thumb={maxSpeedIcon} maxValue='400' value='250' />
            <TuningSpecification thumb={accelerationIcon} maxValue='400' value='300' />
            <TuningSpecification thumb={brakesIcon} maxValue='400' value='180' />
            <TuningSpecification thumb={clutchIcon} maxValue='400' value='100' />
        </div>
    </div>
}

export default TuningSpecifications;