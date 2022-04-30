import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Button, Image } from 'antd';
import './index.css';
import api from '../../../utils/api';

export const CreatePost = ({changePosts}) => {
    const navigate = useNavigate();

    const handelClick = () => {
        navigate('/');
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const {target: {inputUrl, inputTitle, textArea, inputTags}} = event;
        api.addPost({
            image: inputUrl.value,
            title: inputTitle.value,
            text: textArea.value,
            tags: inputTags.value.split(', ' && ',')
        })
        .then((data) => {
            changePosts((prevState) => [...prevState, data]);
            navigate('/');
        })
        .catch((err) => alert(err));

    };

  return (
    <form onSubmit={handleSubmit}>
        <div className='inputs'>
            <input id='imgPost' placeholder='url картинки поста' type='url' name='inputUrl'/>
            <input placeholder='Заголовок поста' name='inputTitle'/>
            <textarea rows={4} placeholder='Текст поста' name='textArea'/>
            <input placeholder='Введите теги через запятую' name='inputTags'/>
        </div>
        <div className='buttons'>
            <Button onClick={handelClick}>Отмена</Button>
            <Button htmlType='submit' type="primary">Создать</Button>
        </div>
    </form>
  )
}
