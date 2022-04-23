import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Image, Card, Avatar } from 'antd';
import { DeleteOutlined, UserOutlined, HeartFilled } from '@ant-design/icons';
import Text from 'antd/lib/typography/Text';
import './index.css';
import api from '../../../utils/api';

export const PostInfo = () => {
  const [item, setItem] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  const handleClick = () => {
    alert('Вы уверены, что хотите удалить пост?');
    api.deletePost(params.postID)
    .then((data) => navigate('/'))
    .catch((err) => alert(err));
  };

  useEffect(() => {
    api.getPosts(params.postID)
    .then((data) => setItem(data))
    .catch((err) => alert(err));
  }, []);
  
  return (
    <div className='postinfo__container'>
        <Image
            width={700}
            src={item?.image}
        />
        <Card title={
          <>
            <div className='avatar__email'>
              <Avatar size="large" icon={<UserOutlined />} />
              <h4>{item?.author.name}</h4>
            </div>
            <div className='heart'>
              <HeartFilled />
              <Text className='heart__sum'>{item?.likes.length}</Text>
            </div>
          </>
          } 
          bordered={true} 
          style={{ width: 300 }}>
          <div className='content'>
            <h3>{item?.title}</h3>
            <p>{item?.text}</p>
          </div>
          <button onClick={handleClick} type='button'><DeleteOutlined/></button>
        </Card>
    </div>
  )
}
