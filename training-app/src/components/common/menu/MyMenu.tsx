import {
  Routes,
  Route,
  Outlet,
  Link,
  useMatch,
  useResolvedPath,
} from "react-router-dom";
import type { LinkProps } from "react-router-dom";

import React, { useState } from 'react';
import {
  DashboardOutlined,
  UsergroupAddOutlined,
  BarcodeOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import './MyMenu.css';

const { Sider } = Layout;

function CustomLink({ children, to, ...props }: LinkProps) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        className={match ? 'active' : ''}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

const MyMenu = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1">
          <CustomLink to="/">
          <DashboardOutlined /> Dashboard
          </CustomLink>
        </Menu.Item>
        <Menu.Item key="2">
          <CustomLink to="/users">
            <UsergroupAddOutlined /> Users
          </CustomLink>
        </Menu.Item>
        <Menu.Item key="3">
          <CustomLink to="/products">
            <BarcodeOutlined /> Products
          </CustomLink>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default MyMenu;
