import React from 'react';
import { Button as ButtonAnt } from 'antd';
import { useNavigate } from 'react-router';
import 'antd/dist/antd.css';

export const Button = () => {
  const navigate = useNavigate();
  const click = () => {
    navigate('post/create');
  };

  return (
    <div>
      <ButtonAnt onClick={click}>Создать пост</ButtonAnt>
    </div>
  )
}
