import React from 'react';

import { Card } from 'antd';
import { Avatar } from 'antd';
import { HeartFilled, UserOutlined } from '@ant-design/icons';
import { Tag } from 'antd';
import { Timeline } from 'antd';

import 'antd/dist/antd.css';

import './index.css';
import Text from 'antd/lib/typography/Text';

export const Post = ({ data }) => {

  return (
    <>
      <Card title={<a href='#'>{data.title}</a>} style={{ width: 300 }}>
        <div className='avatar__email'>
          <Avatar size="large" icon={<UserOutlined />} />
          <h4>{data.author?.email}</h4>
        </div>
        <div className='content'>
          <p>{data.text}</p>
        </div>
        <div>
          <span>Tags: </span>
          {data.tags.map((el) => <Tag key={Math.floor(Math.random() * 1e16)}>{el}</Tag>)}
        </div>
        <div className='time__line'>
          <Timeline>
            <Timeline.Item>{data.created_at}</Timeline.Item>
            <Timeline.Item color='green'>Last edit {data.updated_at}</Timeline.Item>
          </Timeline>
        </div>
        <div className='heart'>
          <HeartFilled />
          <Text className='heart__sum'>{data.likes?.length}</Text>
        </div>
      </Card>
    </>
  );
};
