import carsData from "../../../../store/carDealer/carsData";

import maxSpeed from '../../../../assets/images/carDealer/maxSpeed.svg';
import acceleration from '../../../../assets/images/carDealer/acceleration.svg';

import './CDParameters.scss';

const CDParameters = (props) => {
    return <div className='car-dealer-parameters'>
        <div className='car-dealer-parameters__title'>Parameters</div>
        <div className='car-dealer-parameters-element'>
            <div className='car-dealer-parameters-element__title'>
                <img src={maxSpeed} alt='#'/>
                <span>{`${carsData[props.autoClass].cars[props.model].maxSpeed} km/h`}</span>
            </div>
            <span className='car-dealer-parameters-element__subtitle'>MaxSpeed</span>
        </div>
        <div className='car-dealer-parameters-element'>
            <div className='car-dealer-parameters-element__title'>
                <img src={acceleration} alt='#'/>
                <span>{`${carsData[props.autoClass].cars[props.model].acceleration} sec.`}</span>
            </div>
            <span className='car-dealer-parameters-element__subtitle'>Acceleration</span>
        </div>
    </div>
}

export default CDParameters;