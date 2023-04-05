import React from 'react';
import { Layout } from 'antd';
import './MyFooter.css';

const { Footer } = Layout;

const MyFooter: React.FC = () => {
  return (
    <Footer style={{ textAlign: 'center' }}>Design by nguyen.tinh.rcvn2012@gmail.com</Footer>
  );
};

export default MyFooter;