/* global alt */
import * as React from 'react';
import cn from 'classnames';

import AuthLogin from "./components/AuthLogin";
import AuthRegistration from "./components/AuthRegistration";

import logo from '@assets/images/auth/logo.svg';

import './auth.scss';

const Auth = () => {
    const [component, setComponent] = React.useState('login'),
        [isNotifyVisible, setNotifyVisible] = React.useState(false),
        [notifyType, setNotifyType] = React.useState(null),
        [notifyText, setNotifyText] = React.useState(null);

    const sendNotify = React.useCallback((type, text) => {
        if (isNotifyVisible) {
            setNotifyVisible(false);
        }

        const timeout = setTimeout(() => {
            setNotifyType(type);
            setNotifyText(text);
            setNotifyVisible(true);
        }, 200);
    }, [isNotifyVisible]);

    React.useEffect(() => {
        if ('alt' in window) {
            alt.on('cef::auth:isRegistered', (bool) => {
                bool ? setComponent('login') : setComponent('registration');
            });
        }
    }, []);

    React.useEffect(() => {
        if ('alt' in window) {
            alt.on('cef::auth:sendNotify', (type, text) => sendNotify(type, text));
        }
    }, [sendNotify]);

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
                    <span
                        className={cn('auth-content-form__notify', notifyType === 0 ? 'auth-content-form__notify_error' : 'auth-content-form__notify_success')}
                        style={isNotifyVisible ? {opacity: 1} : {opacity: 0}}
                    >
                        {notifyText}
                    </span>
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