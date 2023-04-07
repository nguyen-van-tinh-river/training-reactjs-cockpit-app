import React from 'react';
import { Breadcrumb, theme } from 'antd';

function PageHome() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'Home' }]} />
      <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
        <h1>Home list</h1>
      </div>
    </>
  );
}

export default PageHome;
