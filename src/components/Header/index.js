import React from 'react';

import { Typography } from 'antd';

import logo from '../../assets/svg/logo.svg';
import './index.css';

const { Text } = Typography;

export const Header = ({name}) => {
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
        <div className='current__user'>
          <Text strong>User: {name}</Text>
        </div>
      </div>
    </div>
  )
}
