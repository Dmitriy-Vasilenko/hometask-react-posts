import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';

import { Button } from 'antd';

import { useApi } from '../../hooks/useApi';

import UserContext from '../../context/userContext';

export const Registration = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);
    const api = useApi();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = ({ target }) => {
        setEmail(target.value.trim());
    };

    const handlePasswordChange = ({ target }) => {
        setPassword(target.value);
    };

    const onSignIn = (signedInUser) => {
        const { token, data } = signedInUser;
        localStorage.setItem('token', JSON.stringify(token));
        setUser(data);
        navigate('/');
    };

    const signUp = () => {
        if (email == '' || password == '') {
            alert('Введите вашу почту и пароль')
        } else {
            api.signUp({ email, password })
                .then((createdUser) => {
                    return api.signIn({ email, password });
                })
                .then(onSignIn)
        }
    };

    const signIn = () => {
        if (email == '' || password == '') {
            alert('Введите вашу почту и пароль')
        } else {
            api.signIn({ email, password })
                .then(onSignIn)
        }
    }

    return (
        <form>
            <h1>Регистрация</h1>
            <div className='inputs'>
                <input required placeholder='Введите Email' name='inputEmail' type='email' onChange={handleEmailChange}/>
                <input required placeholder='Введите пароль' name='inputPassword' type='password' onChange={handlePasswordChange}/>
            </div>
            <div className='buttons'>
                <Button onClick={signUp} type='primary'>Регистрация</Button>
                <Button onClick={signIn} type="primary">Войти</Button>
            </div>
        </form>
    )
}
