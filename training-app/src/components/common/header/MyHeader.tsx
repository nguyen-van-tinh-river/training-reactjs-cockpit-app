import React from 'react';
import { Layout, theme } from 'antd';
import './MyHeader.css';

const { Header } = Layout;

const MyHeader: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Header style={{ padding: 0, background: colorBgContainer }} />
  );
};

export default MyHeader;