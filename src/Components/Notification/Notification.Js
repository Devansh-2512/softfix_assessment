import React from 'react'
import { notification } from 'antd';
const Notification = ({children}) => {
    const [api, contextHolder] = notification.useNotification();
  const openNotification = ({message}) => {
    api.success({
      message: {message},
      placement:"topRight",
    });
  };
  return (
    <>
    {contextHolder}
    {children}
    </>
  )
}

export default Notification