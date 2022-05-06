import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router';
import { Image, Card, Avatar, Tag, Button as ButtonAnt } from 'antd';
import { DeleteOutlined, HeartFilled } from '@ant-design/icons';
import Text from 'antd/lib/typography/Text';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import './index.css';
import api from '../../../utils/api';
import { Comment } from '../../Comment';

export const PostInfo = ({user, changePosts}) => {
  const [item, setItem] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  const isInUser = item?.author._id === user?._id;

  const [favorite, setFavorite] = useState(item?.likes || []);
  const isInFavorite = favorite.includes(user?._id);

  const addFavorite = () => {
    api.addLike(item?._id)
    .then((data) => setFavorite(data.likes))
    .catch((err) => alert(err));
  };

  const deleteFavorite = () => {
    api.deleteLike(item?._id)
    .then((data) => setFavorite(data.likes))
    .catch((err) => alert(err));
  };


  const handleClick = () => {
    alert('Вы уверены, что хотите удалить пост?');
    api.deletePost(params.postID)
    .then((data) => {
      changePosts((prevState) => {
        return prevState.filter((item) => item._id !== params.postID)
      })
      navigate('/')
    })
    .catch((err) => alert(err));
  };

  const exitClick = () => {
    navigate('/');
  };

  useEffect(() => {
    api.getPosts(params.postID)
    .then((data) => setItem(data))
    .catch((err) => alert(err));
  }, []);
  
  return (
    <div className='postinfo__container'>
        <div className='button__ant'>
          <ButtonAnt onClick={exitClick}>Назад</ButtonAnt>
        </div>
        <Image
            width={700}
            src={item?.image}
        />
        <Card title={
          <>
            <div className='avatar__email'>
              <div>
                <Avatar src={item?.author.avatar} size="large" />
              </div>
              <div className='name__data'>
                <Text >{item?.author.name}</Text>
                <Text className='data_created' type="secondary">{dayjs(item?.created_at).locale('ru').format('DD MMMM YYYY')}</Text>
              </div>
            </div>
          </>
          } 
          bordered={true} 
          style={{ width: 300 }}>
          <div className='content__text'>
            {item?.tags.map((el) => <Tag key={Math.floor(Math.random() * 1e16)}>{el}</Tag>)}
            <br/>
            <br/>
            <h3>{item?.title}</h3>
            <p>{item?.text}</p>
          </div>
          <div className='comments__text'>
            {item?.comments.map((el) => <Comment key={el._id} item={el}/>)}
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
          {isInUser ? (<button onClick={handleClick} type='button'><DeleteOutlined/></button>) : (<p></p>)}
        </Card>
      </div>
  )
}
