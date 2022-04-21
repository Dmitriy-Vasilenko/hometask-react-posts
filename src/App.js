import React, {useState, useEffect} from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PostList } from './components/PostList';

import api from './utils/api';

function App() {
  const [user,setUser] = useState(null);

  useEffect(() => {
    api.getCurrentUser()
    .then((user) => setUser(user))
    .catch((err) => err.message)
  }, []);

  return (
    <div className='appContainer'>
      <Header name={user?.name}/>
      <PostList />
      <Footer />
    </div>
  );
}

export default App;
