import React from 'react';
import { Button as ButtonAnt } from 'antd';
import 'antd/dist/antd.css';

export const Button = () => {
  const click = () => {
    console.log('Есть контакт');
  };

  return (
    <div>
      <ButtonAnt onClick={click}>Create post</ButtonAnt>
    </div>
  )
}
