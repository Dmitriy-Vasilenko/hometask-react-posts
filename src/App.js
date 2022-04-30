import React, {useState, useEffect} from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { CreatePost } from './components/pages/CreatePost';
import { PostInfo } from './components/pages/PostInfo';
import { PostList } from './components/PostList';

import api from './utils/api';

function App() {
  const [user,setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.getCurrentUser()
    .then((user) => setUser(user))
    .catch((err) => err.message)
  }, []);

  useEffect(() => {
    api.getPosts()
    .then((posts) => setPosts(posts))
    .catch((err) => err.message)
  }, []);

  return (
    <div className='appContainer'>
      <Header user={user}/>
      <Routes>
        <Route path='/' element={<PostList posts={posts} user={user}/>}/>
        <Route path='post/:postID' element={<PostInfo posts={posts} user={user} changePosts={setPosts}/>}/>
        <Route path='post/create' element={<CreatePost changePosts={setPosts}/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
