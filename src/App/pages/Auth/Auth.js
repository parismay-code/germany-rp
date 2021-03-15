/* global alt */
import * as React from 'react';
import cn from 'classnames';

import AuthLogin from "./components/AuthLogin";
import AuthRegistration from "./components/AuthRegistration";

import logo from '../../assets/images/auth/logo.svg';

import './auth.scss';

const Auth = () => {
    const [component, setComponent] = React.useState('login');

    React.useEffect(() => {
        if ('alt' in window) {
            alt.on('cef::auth:isRegistered', (bool) => {
                bool ? setComponent('login') : setComponent('registration');
            })
        }
    }, []);

    return (
        <div className='auth'>
            <div className='auth-content'>
                <div className='auth-content-logo'>
                    <img src={logo} alt='#'/>
                </div>
                <div className='auth-content-form'>
                    <div className='auth-content-form-navigation'>
                        <span
                            className={cn('auth-content-form-navigation__element', component === 'login' && 'auth-content-form-navigation__element_active')}
                            onClick={() => {
                                setComponent('login');
                            }}
                        >
                            Authorization
                        </span>
                        <span
                            className={cn('auth-content-form-navigation__element', component === 'registration' && 'auth-content-form-navigation__element_active')}
                            onClick={() => {
                                setComponent('registration');
                            }}
                        >
                            Registration
                        </span>
                    </div>
                    {component === 'login' && <AuthLogin/>}
                    {component === 'registration' && <AuthRegistration/>}
                </div>
                <div className='auth-content-link'>
                    <span>aroslife.net</span>
                </div>
            </div>
        </div>
    )
}

export default React.memo(Auth);