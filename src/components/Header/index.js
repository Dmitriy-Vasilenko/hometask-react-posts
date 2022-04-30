import React from 'react';
import { Link } from 'react-router-dom';

import { Typography, Avatar } from 'antd';

import logo from '../../assets/svg/logo.svg';
import './index.css';

const { Text } = Typography;

export const Header = ({user}) => {
  return (
    <div className='header'>
      <div className='header__container'>
        <Link to='/'>
          <img src={logo}/>
        </Link>
        <ul className='list'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/'>Food Dog</Link></li>
          <li><Link to='/'>GitHub</Link></li>
        </ul>
        <div className='current__user'>
          <Avatar src={user?.avatar} size="large" />
          <Text strong>{user?.name}</Text>
        </div>
      </div>
    </div>
  )
}
