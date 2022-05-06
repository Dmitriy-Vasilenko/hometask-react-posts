import React from 'react';
import { useNavigate } from 'react-router';
import { Button } from 'antd';
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
            image: inputUrl.value.trim(),
            title: inputTitle.value.trim(),
            text: textArea.value.trim(),
            tags: inputTags.value.trim().split(', ' && ',')
        })
        .then((data) => {
            changePosts((prevState) => [...prevState, data]);
            navigate('/');
        })
        .catch((err) => alert(err));

    };

  return (
    <form onSubmit={handleSubmit}>
        <h1>Создание поста</h1>
        <div className='inputs'>
            <input required id='imgPost' placeholder='url картинки поста' type='url' name='inputUrl'/>
            <input required placeholder='Заголовок поста' name='inputTitle'/>
            <textarea required rows={4} placeholder='Текст поста' name='textArea'/>
            <input required placeholder='Введите теги через запятую' name='inputTags'/>
        </div>
        <div className='buttons'>
            <Button onClick={handelClick}>Отмена</Button>
            <Button htmlType='submit' type="primary">Создать</Button>
        </div>
    </form>
  )
}
