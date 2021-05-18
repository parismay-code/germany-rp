/* global alt */
import * as React from 'react';

import couponIcon from '@assets/images/fuelStation/couponIcon.svg';
import fullIcon from '@assets/images/fuelStation/fullIcon.svg';
import byLiterIcon from '@assets/images/fuelStation/byLiterIcon.svg';
import exitIcon from '@assets/images/fuelStation/exitIcon.svg';

import './fuelStation.scss';

const FuelStation = () => {
    const input = React.useRef(null);

    return (
        <div className='fuel-station'>
            <div className='fuel-station-content'>
                <span className='fuel-station-content__title'>Tankstelle</span>
                <div className='fuel-station-content-screen'>
                    <input
                        type='number'
                        ref={input}
                        name='n_fuelStationFuel'
                        placeholder='000'
                        onInput={(e) => {
                            if (e.currentTarget.value.length > 3) {
                                e.currentTarget.value = e.currentTarget.value.slice(0, 3);
                            }
                        }}
                    />
                    <span>Liter</span>
                </div>
                <div className='fuel-station-content-info'>
                    <span>1L. - 6$</span>
                    <div className='fuel-station-content-info-options'>
                        <div className='fuel-station-content-info-options__element'>
                            <img src={couponIcon} alt='#' />
                            <span>Treibstoff</span>
                        </div>
                        <div className='fuel-station-content-info-options__element'>
                            <img src={fullIcon} alt='#' />
                            <span>Voll</span>
                        </div>
                        <div className='fuel-station-content-info-options__element'>
                            <img src={byLiterIcon} alt='#' />
                            <span>Auswahl</span>
                        </div>
                        <div
                            className='fuel-station-content-info-options__element_exit'
                            onClick={() => {
                                if ('alt' in window) {
                                    alt.emit('client::hud:closeComponent');
                                }
                            }}
                        >
                            <img src={exitIcon} alt='#' />
                            <span>Scliessen</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(FuelStation);