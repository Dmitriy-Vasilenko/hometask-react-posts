import React from 'react';

import { Card } from 'antd';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import { Timeline } from 'antd';
import 'antd/dist/antd.css';

import './index.css';

import { useEffect, useState } from 'react';

export const Post = ({data}) => {

  // const [posts, setPosts] = useState(mockedData);
  // console.log(posts);

  // useEffect(() => {
  //     api.getProducts()
  //         .then((response) => response.json())
  //         .then((result) => {
  //           setSquares((prevState) => {
  //             return prevState = result;
  //           })
  //         });
  // });

  return (
    <>
      <Card extra={<a href="#">{data.title}</a>} style={{ width: 300 }}>
        <div className='avatar__email'>
          <Avatar size="large" icon={<UserOutlined />} />
          <h4>{data.author.email}</h4>
        </div>
        <div className='content'>
          <p>{data.text}</p>
        </div>
        <div>
          <span>Tags: </span>
          <Tag>{data.tags[0]}</Tag>
        </div>
        <div className='time__line'>
          <Timeline>
            <Timeline.Item>{data.created_at}</Timeline.Item>
            <Timeline.Item color='green'>{data.updated_at}</Timeline.Item>
          </Timeline>
        </div>
      </Card>
    </>
    // <>
    //     { posts.map(el => <div><img key={el._id} src={el.image} /></div>) }
    // </>
  );
};
