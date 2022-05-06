import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { Button } from 'antd';
import UserContext from '../../../context/userContext';

import { useApi } from '../../../hooks/useApi';

export const EditUser = () => {
    const api = useApi();
    const {user, setUser} = useContext(UserContext);
    const [userName, setUserName] = useState('');
    const [userAbout, setUserAbout] = useState('');

    const navigate = useNavigate();

    const handleSubmit = () => {
        api.editCurentUser({ name: userName, about: userAbout })
            .then((data) => {
                setUser(data);
                navigate('/');
            })
            .catch((err) => alert(err));
    };

    useEffect(() => {
        user && setUserName(user.name);
        user && setUserAbout(user.about);
    }, [user]);

    const handleOut = () => {
        navigate('/');
    };

    return (
        <form>
            <h1>Редактировать пользователя</h1>
            <div className='inputs'>
                <input required placeholder='Имя' name='inputName' onChange={({ target }) => {
                        setUserName(target.value.trim());
                    }}/>
                <input required placeholder='Доп. информация' name='inputAbout' onChange={({ target }) => {
                        setUserAbout(target.value.trim());
                    }}/>
            </div>
            <div className='buttons'>
                <Button onClick={handleOut}>Отмена</Button>
                <Button onClick={handleSubmit} type="primary">Сохранить</Button>
            </div>
        </form>
    )
}
