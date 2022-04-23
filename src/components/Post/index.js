import React, { useState } from 'react';

import { Card, Avatar, Tag, Timeline } from 'antd';
import { HeartFilled, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Text from 'antd/lib/typography/Text';

import 'antd/dist/antd.css';
import './index.css';

import api from '../../utils/api';

export const Post = ({ data, user }) => {
  const [favorite, setFavorite] = useState(data.likes || []);
  const isInFavorite = favorite.includes(user._id);

  const addFavorite = () => {
    api.addLike(data._id)
    .then((data) => setFavorite(data.likes))
    .catch((err) => alert(err));
  };

  const deleteFavorite = () => {
    api.deleteLike(data._id)
    .then((data) => setFavorite(data.likes))
    .catch((err) => alert(err));
  };

  return (
    <>
      <Card title={<Link to={`post/${data._id}`}>{data.title}</Link>} style={{ width: 300 }}>
        <div className='avatar__email'>
          <Avatar size="large" icon={<UserOutlined />} />
          <h4>{data?.author.email}</h4>
        </div>
        <div className='content'>
          <p>{data?.text}</p>
        </div>
        <div>
          <span>Tags: </span>
          {data.tags.map((el) => <Tag key={Math.floor(Math.random() * 1e16)}>{el}</Tag>)}
        </div>
        <div className='time__line'>
          <Timeline>
            <Timeline.Item>{data.created_at}</Timeline.Item>
            <Timeline.Item color='green'>Last edit {data?.updated_at}</Timeline.Item>
          </Timeline>
        </div>
        {isInFavorite ? (
            <div onClick={deleteFavorite} className='heart__favotite'>
              <HeartFilled />
              <Text className='heart__sum'>{favorite?.length}</Text>
            </div>
            ) : (
            <div onClick={addFavorite} className='heart'>
              <HeartFilled />
              <Text className='heart__sum'>{favorite?.length}</Text>
            </div>)
        }
      </Card>
    </>
  );
};
