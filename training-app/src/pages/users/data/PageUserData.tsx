import { useEffect } from 'react';
import {
  EditOutlined,
  SaveOutlined,
} from '@ant-design/icons';
import {
  Breadcrumb,
  theme,
  Row,
  Col,
  Button,
  Select,
  Form,
  Input,
} from 'antd';
import { Link, redirect } from "react-router-dom";
import './PageUserData.css';
import { findById, onInsert, onUpdate } from '../../../services/UserService';

const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

function PageUserData() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  const params = new URLSearchParams(window.location.search)
  const id = params.get('_id');

  const [form] = Form.useForm();

  useEffect(() => {
    if (id) {
      GetDetail(id)
    }
  }, [])

  const GetDetail = (_id?: string) => {
    findById(_id).then(res => {
      let { data } = res;
      data['is_active'] = `${data['is_active']}`;
      form.setFieldsValue(data)
    }).catch(err => {
      console.log(err);
    })
  }

  const OnSave = () => {
    const formData = form.getFieldsValue();
    formData['is_active'] = JSON.parse(formData['is_active']);
    if (id) {
      onUpdate({
        data: {
          _id: id,
          ...formData
        }
      }).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
    } else {
      onInsert({
        data: formData
      }).then(res => {
        console.log(res);
        redirect("/users");
      }).catch(err => {
        console.log(err);
      })
    }
  }

  return (
    <>
      <Breadcrumb
        style={{ margin: '16px 0' }}
        items={[
          {
            title: <Link to="/">Home</Link>
          },
          {
            title: <Link to="/users">Users</Link>
          },
          {
            title: 'Add'
          }
        ]}
      />
      <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
        
          <Form
            {...formItemLayout}
            name="control-hooks"
            autoComplete="off"
            form={form}
          >
            <Row gutter={16}>
              <Col className="gutter-row" span={12}>
                <Form.Item name="name" label="Tên">
                  <Input placeholder="Nhập họ tên" prefix={<EditOutlined />} />
                </Form.Item>

                <Form.Item name="email" label="Email">
                  <Input placeholder="Nhập email" prefix={<EditOutlined />} />
                </Form.Item>

                <Form.Item
                  name="password"
                  label="Mật khẩu"
                >
                  <Input.Password prefix={<EditOutlined />} />
                </Form.Item>

                <Form.Item
                  name="confirm"
                  label="Xác nhận mật khẩu"
                  dependencies={['password']}
                >
                  <Input.Password prefix={<EditOutlined />} />
                </Form.Item>

                <Form.Item name="is_active" label="Trạng thái">
                  <Select
                    placeholder="Chọn trạng thái"
                    allowClear
                  >
                    <Option value="true">Đang hoạt động</Option>
                    <Option value="false">Tạm khóa</Option>
                  </Select>
                </Form.Item>

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
              <Col span={12} offset={3}>
                <Button type="primary" onClick={OnSave}>
                  <SaveOutlined /> Lưu Lại
                </Button>
              </Col>
            </Row>
          </Form>
      </div>
    </>
  );
}

export default PageUserData;
