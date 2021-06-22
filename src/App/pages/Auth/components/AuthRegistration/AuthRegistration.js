/* global alt */
import * as React from 'react';

import './authRegistration.scss';

const AuthRegistration = () => {
    const login = React.useRef(null);
    const email = React.useRef(null);
    const password = React.useRef(null);
    const rePassword = React.useRef(null);

    const handleSubmit = React.useCallback(() => {
        if ('alt' in window) {
            if (password.current.value === rePassword.current.value) {
                alt.emit('client::auth:register', JSON.stringify({
                    login: login.current.value,
                    email: email.current.value,
                    password: password.current.value,
                }))
            }
        }
    }, [login, email, password, rePassword])

    return (
        <div className='auth-registration'>
            <input
                ref={login}
                type='text'
                name='n_authRegLogin'
                placeholder='Enter login'
                className='auth-login__input'
            />
            <input
                ref={email}
                type='email'
                name='n_authRegMail'
                placeholder='Enter email'
                className='auth-login__input'
            />
            <input
                ref={password}
                type='password'
                name='n_authRegPassword'
                placeholder='Passwort eingeben'
                className='auth-login__input'
            />
            <input
                ref={rePassword}
                type='password'
                name='n_authRegRePassword'
                placeholder='Repeat password'
                className='auth-login__input'
            />
            <input
                type='button'
                name='n_authRegSubmit'
                value='Create account'
                className='auth-registration__submit'
                onClick={() => handleSubmit()}
            />
        </div>
    )
}

export default React.memo(AuthRegistration);