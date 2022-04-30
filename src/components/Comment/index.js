import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { Avatar } from 'antd';
import Text from 'antd/lib/typography/Text';

import api from '../../utils/api';

export const Comment = ({item}) => {

    const [autorCom, setAutorCom] = useState({});

    useEffect(() => {
      api.getCommentUser(item.author)
      .then((data) => setAutorCom(data))
      .catch((err) => alert(err));
    }, []);

  return (
    <div className='comments__container'>
        <div className='avatar__emails'>
        <div>
            <Avatar src={autorCom?.avatar} size="large" />
        </div>
        <div className='name__data'>
            <Text >{autorCom?.name}</Text>
            <Text className='data_created' type="secondary">{dayjs(item?.created_at).locale('ru').format('DD MMMM YYYY')}</Text>
        </div>
        </div>
        <div>
            {item?.text}
        </div>
    </div>
  )
}
