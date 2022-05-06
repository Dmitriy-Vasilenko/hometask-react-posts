import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import { Typography, Avatar, Button } from 'antd';

import logo from '../../assets/svg/logo.svg';
import './index.css';

const { Text } = Typography;

export const Header = ({user}) => {
  const navigate = useNavigate();

  const signOut = () => {
    localStorage.setItem('token', '');
    navigate(0);
  };

  const handleClick = () => {
    navigate('user/edit')
  }

  return (
    <div className='header'>
      <div className='header__container'>
        <Link to='/'>
          <img src={logo}/>
        </Link>
        <div className='current__user'>
          <div onClick={handleClick} style={{cursor: 'pointer'}}>
            <Avatar src={user?.avatar} size="large" style={{marginRight: '10px'}}/>
            <Text strong>{user?.name}</Text>
          </div>
          <Button onClick={signOut} style={{marginLeft: '10px', marginTop: '15px'}}>Выйти</Button>
        </div>
      </div>
    </div>
  )
}
