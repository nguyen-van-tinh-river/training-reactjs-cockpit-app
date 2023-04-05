import React, { useState } from 'react';
import { Breadcrumb, Layout, theme } from 'antd';
import { Outlet } from "react-router-dom";
import './DashboardLayout.css';
import MyMenu from '../../components/common/menu/MyMenu';
import MyHeader from '../../components/common/header/MyHeader';
import MyFooter from '../../components/common/footer/MyFooter';

const { Content } = Layout;

const DashboardLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
        <MyMenu />
        <Layout className="site-layout">
          <MyHeader />
          <Content style={{ margin: '0 16px' }}>
            <Outlet />
          </Content>
          <MyFooter />
        </Layout>
    </Layout>
  );
};

export default DashboardLayout;
