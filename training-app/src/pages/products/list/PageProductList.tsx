import React from 'react';
import { Breadcrumb, theme } from 'antd';

function PageProductList() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Product</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
        <h1>Product list</h1>
      </div>
    </>
  );
}

export default PageProductList;
