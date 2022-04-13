import React from 'react';
import logo from '../../assets/svg/logo.svg';
import './index.css';

export const Header = () => {
  return (
    <div className='header'>
      <div className='header__container'>
        <a href='#'>
          <img src={logo}/>
        </a>
        <ul className='list'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Food Dog</a></li>
          <li><a href='#'>GitHub</a></li>
        </ul>
      </div>
    </div>
  )
}
