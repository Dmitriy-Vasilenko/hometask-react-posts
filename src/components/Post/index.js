import React, { useState } from 'react';
import { useNavigate } from 'react-router';

import { Card, Avatar, Tag, Timeline, Image } from 'antd';
import { HeartFilled, CommentOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import Text from 'antd/lib/typography/Text';

import 'antd/dist/antd.css';
import './index.css';

import api from '../../utils/api';

export const Post = ({ data, user }) => {
  const [favorite, setFavorite] = useState(data.likes || []);
  const isInFavorite = favorite.includes(user._id);
  const navigate = useNavigate();

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
      <Card 
        className='post__container'
        title={
          <div className='avatar__email'>
            <Avatar src={data?.author.avatar} size="large" />
            <div>
              <Link to={`post/${data._id}`}>{data?.author.name}</Link>
              <p className='autor__about'>{data?.author.about}</p>
            </div>
          </div>
        } 
        style={{ width: 300 }}
      >
        <div className='avatar__email'>
          <Image preview={false} src={data?.image} />
        </div>
        <div className='content'>
          <Text strong={true}>{data?.title}</Text>
          <Text>{data?.text}</Text>
        </div>
        <div>
          <span>Tags: </span>
          {data.tags.map((el) => <Tag key={Math.floor(Math.random() * 1e16)}>{el}</Tag>)}
        </div>
        <div className='time__line'>
          <Timeline>
            <Timeline.Item>{dayjs(data.created_at).locale('ru').format('DD MMMM YYYY, HH:mm')}</Timeline.Item>
            <Timeline.Item color='green'>Пост отредактирован: {dayjs(data?.updated_at).locale('ru').format('DD MMMM YYYY, HH:mm')}</Timeline.Item>
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
        <div className='comments__info'>
          <CommentOutlined />
          <Text className='heart__sum'>{data?.comments.length}</Text>
        </div>
      </Card>
  );
};
