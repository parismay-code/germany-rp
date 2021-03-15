/* global alt */


import couponIcon from '../../../assets/images/fuelStation/couponIcon.svg';
import fullIcon from '../../../assets/images/fuelStation/fullIcon.svg';
import byLiterIcon from '../../../assets/images/fuelStation/byLiterIcon.svg';
import exitIcon from '../../../assets/images/fuelStation/exitIcon.svg';

import './fuelStation.scss';

const FuelStation = () => {
    return (
        <div className='fuel-station'>
            <div className='fuel-station-content'>
                <span className='fuel-station-content__title'>Fuelstation</span>
                <div className='fuel-station-content-screen'>
                    <input
                        type='number'
                        name='n_fuelStationFuel'
                        id='id_fuelStationFuel'
                        placeholder='000'
                    />
                    <span>L.</span>
                </div>
                <div className='fuel-station-content-info'>
                    <span>1L. - 6$</span>
                    <div className='fuel-station-content-info-options'>
                        <div className='fuel-station-content-info-options__element'>
                            <img src={couponIcon} alt='#' />
                            <span>Coupon</span>
                        </div>
                        <div className='fuel-station-content-info-options__element'>
                            <img src={fullIcon} alt='#' />
                            <span>Full</span>
                        </div>
                        <div className='fuel-station-content-info-options__element'>
                            <img src={byLiterIcon} alt='#' />
                            <span>By liter</span>
                        </div>
                        <div
                            className='fuel-station-content-info-options__element_exit'
                            onClick={() => {
                                if ('alt' in window) {
                                    alt.emit('cef::fuelStation:close');
                                }
                            }}
                        >
                            <img src={exitIcon} alt='#' />
                            <span>Exit</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FuelStation;