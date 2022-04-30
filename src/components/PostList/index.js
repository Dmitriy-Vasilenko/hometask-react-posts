import React from 'react';

import { Post } from '../Post';
import { Button } from '../Button';

import './index.css';

export const PostList = ({ posts, user }) => {
  return (
    <>
      <div className='button__container'>
        <div>
          <h1>Добро пожаловать в приложение!</h1>
          <p>Создай свой уникальный пост. 🥳</p>
        </div>
        <div className='button'>
          <Button />
        </div>
      </div>
      <div className='postList'>
        {posts.map((el) => <Post key={el._id} data={el} user={user}/>)}
      </div>
    </>
  )
};
