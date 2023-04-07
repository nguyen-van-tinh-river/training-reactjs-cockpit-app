import { useEffect, useState } from 'react';
import {
  EditOutlined,
  DeleteOutlined,
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
} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { Link } from "react-router-dom";
import { MST_PRODUCTS } from '../../../databases';
import './PageProductList.css';
import { findByCondition, onDelete } from '../../../services/ProductService';

const { Option } = Select;

function PageProductList() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const columns: ColumnsType<MST_PRODUCTS> = [
    {
      title: 'ID',
      dataIndex: '_id',
      key: '_id',
    },
    {
      title: 'Tên sản phẩm',
      dataIndex: 'product_name',
      key: 'product_name',
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Giá bán',
      dataIndex: 'product_price',
      key: 'product_price',
    },
    {
      title: 'Tình trạng',
      dataIndex: 'is_sales',
      key: 'is_sales',
      render: (_: any, record: MST_PRODUCTS) => {
        return (
          <p className={record.is_sales ? 'is_sales' : 'is_block'}>{ record.is_sales ? 'Đang bán' : 'Ngừng bán' }</p>
        );
      },
    },
    {
      title: '',
      key: 'action',
      render: (_: any, record: MST_PRODUCTS) => {
        return (
          <Space size="small">
            <Link to={`/products/data?_id=${record._id}`}>
              <Button type="primary"><EditOutlined /></Button>
            </Link>
            <Button type="primary" danger onClick={() => OnDeleteRecord(record._id)}><DeleteOutlined /></Button>
          </Space>
        )
      },
    },
  ];

  const [products, setProducts] = useState<MST_PRODUCTS[]>([]);
  const [form] = Form.useForm();

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
    findByCondition({}, {}, {}).then((res) => {
      const { data } = res;
      let items: MST_PRODUCTS[] = data;
      if (items) {
        if (formData.product_name) {
          items = items.filter((item: MST_PRODUCTS) => {
            return item.product_name.toLowerCase().includes(formData.product_name.toLowerCase()) === true;
          })
        }
        if (formData.product_price_from) {
          items = items.filter((item: MST_PRODUCTS) => {
            return Number(item.product_price) >= Number(formData.product_price_from);
          })
        }
        if (formData.product_price_to) {
          items = items.filter((item: MST_PRODUCTS) => {
            return Number(item.product_price) <= Number(formData.product_price_to);
          })
        }
        if (formData.is_sales) {
          items = items.filter((item: MST_PRODUCTS) => {
            return `${item.is_sales}` === `${formData.is_sales}`;
          })
        }
      }
      setProducts(items);
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
            title: 'Products'
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
              <Form.Item name="product_name" label="Tên sản phẩm">
                <Input
                  name="product_name"
                  placeholder="Nhập tên sản phẩm"
                  prefix={<EditOutlined />}
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={6}>
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
            <Col className="gutter-row" span={3}>
              <Form.Item name="product_price_from" label="Giá bán từ">
                <Input
                  name="product_price_from"
                  prefix={<EditOutlined />}
                />
              </Form.Item>
            </Col>
            <Col className="gutter-row" span={3}>
              <Form.Item name="product_price_to" label="Giá bán đến">
                <Input
                  name="product_price_to"
                  prefix={<EditOutlined />}
                />
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
              <Link to="/products/data">
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
            <Table columns={columns} dataSource={products} rowKey="_id" />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default PageProductList;
