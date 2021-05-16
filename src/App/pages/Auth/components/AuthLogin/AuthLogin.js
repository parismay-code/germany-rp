/* global alt */
import * as React from 'react';
import cn from 'classnames';

import checked from '@assets/images/auth/checked.svg';

import './authLogin.scss';

const AuthLogin = () => {
    const [remember, setRemember] = React.useState(false);

    const login = React.useRef(null);
    const password = React.useRef(null);

    const handleSubmit = React.useCallback(() => {
        if ('alt' in window) {
            alt.emit('client::auth:login', JSON.stringify({
                login: login.current.value,
                password: password.current.value
            }))
        }
    }, [login, password])

    return (
        <div className='auth-login'>
            <input
                ref={login}
                type='text'
                name='n_authLogLogin'
                placeholder='Enter login'
                className='auth-login__input'
                autofocus="true"
            />
            <input
                ref={password}
                type='password'
                name='n_authLogPassword'
                placeholder='Enter password'
                className='auth-login__input'
            />
            <div className='auth-login-submit'>
                <div
                    className={cn('auth-login-submit__checkbox', remember && 'auth-login-submit__checkbox_checked')}
                    onClick={() => {
                        setRemember(!remember);

                        if ('ait' in window) {
                            alt.emit('cef::auth:remember', (!remember))
                        }
                    }}
                >
                    <img src={checked} alt='#' />
                </div>
                <span>angemeldet bleiben</span>
                <input
                    type='button'
                    name='n_authLogSubmit'
                    id='id_authLogSubmit'
                    className='auth-login-submit__submit'
                    value='EINLOGGEN'
                    onClick={() => handleSubmit()}
                />
            </div>
            <span className='auth-login__cant-login'>Du kannst dich nicht einloggen?</span>
        </div>
    )
}

export default React.memo(AuthLogin);