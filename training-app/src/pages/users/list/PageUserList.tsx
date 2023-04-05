import React, { useEffect, useState } from 'react';
import {
  EditOutlined,
  DeleteOutlined,
  UsergroupDeleteOutlined,
  UsergroupAddOutlined,
  ClearOutlined,
  SearchOutlined,
} from '@ant-design/icons';
import {
  Breadcrumb,
  theme,
  Row,
  Col,
  Space,
  Button,
  Table,
  Select,
  Form,
  Input,
  Modal,
  Switch
} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from "react-router-dom";
import { MST_USERS } from '../../../databases';
import './PageUserList.css';
import { findUserByCondition } from '../../../services/UserService';

const { Option } = Select;

function PageUserList() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const columns: ColumnsType<MST_USERS> = [
    {
      title: 'Họ tên',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <a>{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Nhóm',
      dataIndex: 'group_role',
      key: 'group_role',
    },
    {
      title: 'Trạng Thái',
      dataIndex: 'is_active',
      key: 'is_active',
      render: (isActive: boolean) => (
        <p className={isActive ? 'is_active' : 'is_block'}>{ isActive ? 'Đang hoạt động' : 'Tạm khóa' }</p>
      ),
    },
    {
      title: '',
      key: 'action',
      render: (_: any, record: MST_USERS) => (
        <Space size="small">
          <Button type='primary' ><EditOutlined /></Button>
          <Button type="primary" danger><DeleteOutlined /></Button>
          <Button><UsergroupDeleteOutlined /></Button>
        </Space>
      ),
    },
  ];

  const [users, setUsers] = useState<MST_USERS[]>([]);

  useEffect(() => {
    // const rows: MST_USERS[] = findUserByCondition();
    // console.log('ROWS ==> ', rows);
    // setUsers(rows);
  }, [])

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>
          <Link to="/">
            Home
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>User</Breadcrumb.Item>
      </Breadcrumb>
      <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
        <Form
          name="control-hooks"
          layout="vertical"
          autoComplete="off"
        >
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <Form.Item name="name" label="Tên">
                <Input placeholder="Nhập họ tên" prefix={<EditOutlined />} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Form.Item name="email" label="Email">
                <Input placeholder="Nhập email" prefix={<EditOutlined />} />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Form.Item name="group_role" label="Nhóm">
                <Select
                  placeholder="Chọn nhóm"
                  allowClear
                >
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Form.Item name="is_active" label="Trạng thái">
                <Select
                  placeholder="Chọn trạng thái"
                  allowClear
                >
                  <Option value="male">male</Option>
                  <Option value="female">female</Option>
                  <Option value="other">other</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Row gutter={16}>
          <Col className="gutter-row" span={6}>
            <Button
              type="primary"
              icon={<UsergroupAddOutlined />}
            >
              <Link to="/users/data">
                Thêm mới
              </Link>
            </Button>
          </Col>
          <Col className="gutter-row" span={6} offset={12}>
            <Space>
              <Button
                type="primary"
                icon={<SearchOutlined />}
              >
                Tìm kiếm
              </Button>
              <Button
                type="default"
                icon={<ClearOutlined />}
              >
                Xóa tìm
              </Button>
            </Space>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col span={24}>
            <Table columns={columns} dataSource={users} />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default PageUserList;
