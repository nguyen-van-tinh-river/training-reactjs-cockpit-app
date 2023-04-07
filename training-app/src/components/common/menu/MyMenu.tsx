import {
  useNavigate,
  useLocation
} from "react-router-dom";

import React, { useState, useEffect } from 'react';
import {
  DashboardOutlined,
  UsergroupAddOutlined,
  BarcodeOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import './MyMenu.css';

const { Sider } = Layout;

const MyMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState('/');

  useEffect(() => {
    console.log(location.pathname);
    const pathItems = location.pathname.split('/')
    setCurrent(`/${pathItems[1]}`)
  }, [])

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
      <Menu
        onClick={(info) => {
          setCurrent(info.key)
          navigate(info.key)
        }}
        theme="dark"
        mode="inline"
        selectedKeys={[current]}
        items={[
          {
            label: 'Dashboard',
            key: '/',
            icon: <DashboardOutlined />
          },
          {
            label: 'Users',
            key: '/users',
            icon: <UsergroupAddOutlined />
          },
          {
            label: 'Products',
            key: '/products',
            icon: <BarcodeOutlined />
          },
        ]}
      />
    </Sider>
  );
};

export default MyMenu;
