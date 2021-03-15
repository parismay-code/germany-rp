/* global alt */

import './atm.scss'

const ATM = () => {
    return (
        <div className='atm'>
            <div className='atm-screen'>
                <div className='atm-screen-options'>
                    <div className='atm-screen-options__balance'>
                        Balance: <span>548412$</span>
                    </div>
                    <div className='atm-screen-options__element'>Deposit</div>
                    <div className='atm-screen-options__element'>Withdraw</div>
                    <div className='atm-screen-options__element'>Pay house tax</div>
                    <div className='atm-screen-options__element'>Pay business tax</div>
                    <div className='atm-screen-options__element'>Transfer money</div>
                    <div className='atm-screen-options__exit' onClick={() => {
                        if ('alt' in window) {
                            alt.emit('cef::hud:closeComponent');
                        }
                    }}>Exit</div>
                </div>
            </div>
            <div className='atm-user-info'>
                <div className='atm-user-info__owner'>
                    <span>Owner</span>
                    <span>Putin V.V.</span>
                </div>
                <div className='atm-user-info__account'>
                    <span>Account number</span>
                    <span>65481321</span>
                </div>
            </div>
        </div>
    )
}

export default ATM;