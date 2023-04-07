import { useEffect, useState } from 'react';
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
import './PageProductData.css';
import { findById, onInsert, onUpdate } from '../../../services/ProductService';

const { Option } = Select;
const { TextArea } = Input;

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

function PageProductData() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  const params = new URLSearchParams(window.location.search)

  const [form] = Form.useForm();
  const [breadcrumbTitle, setBreadcrumbTitle] = useState('Add');
  const [productId, setProductId] = useState(params.get('_id'));

  useEffect(() => {
    console.log('params ===>>> ', productId);
    if (productId) {
      setBreadcrumbTitle('Edit');
      GetDetail(productId)
    }
  }, [])

  const GetDetail = (_id?: string) => {
    findById(_id).then(res => {
      let { data } = res;
      data['is_sales'] = `${data['is_sales']}`;
      form.setFieldsValue(data)
    }).catch(err => {
      console.log(err);
    })
  }

  const OnSave = () => {
    const formData = form.getFieldsValue();
    console.log('FORM ==>> ', formData);
    formData['is_sales'] = JSON.parse(formData['is_sales']);
    console.log('FORM ==>> ', productId);
    if (productId) {
      onUpdate({
        data: {
          _id: productId,
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
        redirect("/products");
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
            title: <Link to="/products">Products</Link>
          },
          {
            title: breadcrumbTitle
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
                <Form.Item name="product_name" label="Tên sản phẩm">
                  <Input placeholder="Nhập họ tên sản phẩm" prefix={<EditOutlined />} />
                </Form.Item>

                <Form.Item name="product_price" label="Giá bán">
                  <Input placeholder="Nhập giá bán" prefix={<EditOutlined />} />
                </Form.Item>

                <Form.Item name="description" label="Mô tả">
                  <TextArea rows={4} placeholder="Nhập mô tả" />
                </Form.Item>

                <Form.Item name="is_sales" label="Trạng thái">
                  <Select
                    placeholder="Chọn trạng thái"
                    allowClear
                  >
                    <Option value="true">Đang bán</Option>
                    <Option value="false">Ngừng bán</Option>
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

export default PageProductData;
