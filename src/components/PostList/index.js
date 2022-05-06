import React, { useState } from 'react';

import { Post } from '../Post';
import { Button } from '../Button';
import { usePagination } from '../../hooks/usePagination';

import './index.css';

export const PostList = ({ posts, user }) => {
  const notesOnPage = 9;
  const countOfItems = Math.ceil(posts.length / notesOnPage);
  const _data = usePagination(posts, notesOnPage);
  const [page, setPage] = useState(1);

  const setPagination = () => {
    const arr = [];
    for (let i = 0; i <= countOfItems - 1; i++) {
      arr.push(<div 
        key={Math.floor(Math.random() * 1e16)} 
        className={(i+1) === page ? 'active' : ''} 
        onClick={() => {setPage(i+1); _data.jump(i+1)}}>{i+1}</div>)
    }

    return arr;
  };

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
        {_data.current().map((el) => <Post key={el._id} data={el} user={user}/>)}
      </div>
      <div className='page__container'>
        {setPagination(_data.maxPage)}
      </div>
    </>
  )
};
