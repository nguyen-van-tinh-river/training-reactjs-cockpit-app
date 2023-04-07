import { useEffect, useState } from 'react';
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
  Input
} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from "react-router-dom";
import { MST_USERS } from '../../../databases';
import './PageUserList.css';
import { findUserByCondition, onDelete, onUpdate } from '../../../services/UserService';

const { Option } = Select;

function PageUserList() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const columns: ColumnsType<MST_USERS> = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Họ tên',
      dataIndex: 'name',
      key: 'name',
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
      render: (_: any, record: MST_USERS) => {
        let buttonStatus = null;
        if (record.is_active) {
          buttonStatus = (
            <Button onClick={() => OnUpdateStatus(record._id, record.is_active)} style={{ background: '#52c41a', color: '#FFF' }}>
              <UsergroupDeleteOutlined />
            </Button>
          );
        } else {
          buttonStatus = (
            <Button onClick={() => OnUpdateStatus(record._id, record.is_active)} style={{ background: '#434343', color: '#FFF' }}>
              <UsergroupAddOutlined />
            </Button>
          );
        }
        return (
          <Space size="small">
            <Link to={`/users/data?_id=${record._id}`}>
              <Button type="primary"><EditOutlined /></Button>
            </Link>
            <Button type="primary" danger onClick={() => OnDeleteRecord(record._id)}><DeleteOutlined /></Button>
            { buttonStatus }
          </Space>
        )
      },
    },
  ];

  const [users, setUsers] = useState<MST_USERS[]>([]);
  const [form] = Form.useForm();

  const OnUpdateStatus = (_id: string, is_active: boolean) => {
    onUpdate({
      data: {
        _id, is_active: !is_active
      }
    }).then(res => {
      console.log(res);
      OnSearch();
    }).catch(err => {
      console.log(err);
    })
  }

  const OnDeleteRecord = (_id: string) => {
    onDelete(_id).then(res => {
      if (res.data.success) {
        OnSearch();
      }
    }).catch(err => {
      console.log(err);
    })
  }

  const OnSearch = () => {
    const formData = form.getFieldsValue();
    findUserByCondition({}, {_id: -1}, {}).then((res) => {
      const { data } = res;
      let items: MST_USERS[] = data;
      if (items) {
        if (formData.name) {
          items = items.filter((item: MST_USERS) => {
            return item.name.toLowerCase().includes(formData.name.toLowerCase()) === true;
          })
        }
        if (formData.email) {
          items = items.filter((item: MST_USERS) => {
            return item.email.toLowerCase().includes(formData.email.toLowerCase()) === true;
          })
        }
        if (formData.is_active) {
          items = items.filter((item: MST_USERS) => {
            return `${item.is_active}` === `${formData.is_active}`;
          })
        }
      }
      setUsers(items);
    })
  }

  const OnReset = () => {
    form.resetFields();
  };

  useEffect(() => {
    OnSearch();
  }, [])

  return (
    <>
      <Breadcrumb
        style={{ margin: '16px 0' }}
        items={[
          {
            title: <Link to="/">Home</Link>
          },
          {
            title: 'Users'
          }
        ]}
      />
      <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
        <Form
          name="control-hooks"
          layout="vertical"
          autoComplete="off"
          form={form}
        >
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <Form.Item name="name" label="Tên">
                <Input
                  name="name"
                  placeholder="Nhập họ tên"
                  prefix={<EditOutlined />}
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Form.Item name="email" label="Email">
                <Input
                  name="email"
                  placeholder="Nhập email"
                  prefix={<EditOutlined />}
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Form.Item name="group_role" label="Nhóm">
                <Select
                  placeholder="Chọn nhóm"
                  allowClear
                >
                  <Option value="Admin">Admin</Option>
                  <Option value="Editor">Editor</Option>
                  <Option value="Reviewer">Reviewer</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
              <Form.Item name="is_active" label="Trạng thái">
                <Select
                  placeholder="Chọn trạng thái"
                  allowClear
                >
                  <Option value="true">Đang hoạt động</Option>
                  <Option value="false">Tạm khóa</Option>
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
                onClick={OnSearch}
              >
                Tìm kiếm
              </Button>
              <Button
                type="default"
                icon={<ClearOutlined />}
                onClick={OnReset}
              >
                Xóa tìm
              </Button>
            </Space>
          </Col>
        </Row>
        <br/>
        <Row>
          <Col span={24}>
            <Table columns={columns} dataSource={users} rowKey="_id" />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default PageUserList;
