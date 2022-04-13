import React from 'react';
import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { PostList } from './components/PostList';

function App() {
  return (
    <div className='appContainer'>
      <Header />
      <PostList />
      <Footer />
    </div>
  );
}

export default App;
