import React, { useEffect, useState } from 'react';

import api from '../../utils/api';

import { Post } from '../Post';
// import mockedData from '../../data.json';
import {Button} from '../Button';

import './index.css';

export const PostList = () => {
  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    api.getPosts()
    .then((posts) => setPosts(posts))
    .catch((err) => err.message)
  }, [posts]);

  return (
    <>
      <div className='main__lincs'>
        <a className='left__linc'>Home</a>
        <p>/</p>
        <a className='right__linc'>All posts</a>
      </div>
      <div className='button__container'>
        <div>
          <h1>Welcome to Our Image Board!</h1>
          <p>We're stoked that you're here. 🥳</p>
        </div>
        <div className='button'>
          <Button />
        </div>
      </div>
      <div className='postList'>
        {posts.map((el) => <Post key={el._id} data={el}/>)}
      </div>
    </>
  )
}
