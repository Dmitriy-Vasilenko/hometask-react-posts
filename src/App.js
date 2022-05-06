import React, {useState, useEffect} from 'react';
import { Route, Routes, useNavigate } from 'react-router';

import './App.css';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { CreatePost } from './components/pages/CreatePost';
import { PostInfo } from './components/pages/PostInfo';
import { PostList } from './components/PostList';
import { Registration } from './components/Registration';
import { EditUser } from './components/pages/EditUser';

import { useLocalStorage } from './hooks/useLocalStorage';
import {useApi} from './hooks/useApi';

import UserContext from './context/userContext';


const App = () => {
  const api = useApi();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  const { readLS } = useLocalStorage();

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

  useEffect(() => {
    const token = readLS('token');
    if (!token) {
        navigate('user/registration')
    }
}, []);

  return (
    <UserContext.Provider value={{user, setUser}}>
      <div className='appContainer'>
        <Header user={user}/>
        <Routes>
          <Route path='/' element={<PostList posts={posts} user={user}/>}/>
          <Route path='post/:postID' element={<PostInfo posts={posts} user={user} changePosts={setPosts}/>}/>
          <Route path='post/create' element={<CreatePost changePosts={setPosts}/>} />
          <Route path='user/edit' element={<EditUser/>} />
          <Route path='user/registration' element={<Registration/>} />
        </Routes>
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
