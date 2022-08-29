import React, { useState } from 'react';
import BreadCrumb from './../../components/UserHomePage/Main/BreadCrumb';
import { useDispatch, useSelector } from 'react-redux';
import { Image, Form, Input, InputNumber, Avatar, Badge, Radio, Space } from 'antd';
import { createOrderStart } from '../../Redux/actions/orderAction';
import { useHistory } from 'react-router-dom';
import { deleteCart } from '../../Redux/actions/cartActions';
import './Checkout.scss';

const formItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 22,
    },
  },
};

const randNumberOrderId = () => {
  return (1100000000 + Math.trunc(Math.random() * 9000000))
}

const randNumberId = () => {
  return (900000000 + Math.trunc(Math.random() * 9000000))
}
const Checkout = () => {
  const [form] = Form.useForm();
  const { cartProducts } = useSelector(state => state.cartProducts);
  const totalPrice = cartProducts && cartProducts.reduce((a, c) => a + c.quantity * c.priceNew, 0);
  const dispatch = useDispatch();
  const { profile } = useSelector(state => state.authUser);
  const history = useHistory();

  const [value, setValue] = useState(1);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  console.log("profile:", profile);

  profile && form.setFieldsValue({
    fullname: profile.fullname,
    email: profile.email,
    address: profile.address,
    phoneNumber: profile.phone,
    description: profile.description
  })


  const onFinish = (values) => {
    const newOrder = {
      ...values,
      cartProducts,
      totalPrice,
      userId: profile.userUiId,
      createAt: (new Date().toLocaleString()),
      id: randNumberId(),
      orderId: randNumberOrderId(),
      status: "Chờ xác nhận",
    }

    setTimeout(() => {
      dispatch(createOrderStart(newOrder));
      dispatch(deleteCart());
      history.push('/checkout/success')
    }, 2000)

  };

  return (
    <div className="checkout">
      <div className="container">
        <BreadCrumb title="Thanh toán" />
        <div className="row">
          <div className="col-md-4 px-2 mb-5">
            <h5>Đơn hàng</h5>
            {cartProducts && cartProducts.map((item, index) => {
              return (
                <div className="checkout-order" key={index}>
                  <div className="product-cart">
                    <div className="cart-img">
                      <Badge count={item.quantity}>
                        <Avatar
                          shape="square"
                          style={{
                            width: 70,
                            height: 70
                          }}
                          src={
                            <Image
                              src={item.url}
                            />
                          }
                        />
                      </Badge>
                    </div>
                    <div className="product-info">
                      <p>{item.productName}</p>
                      {item.size &&
                        <span>Size: {item.size}</span>
                      }
                    </div>
                  </div>
                  <div className="product-price">{Number(item.priceNew).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</div>
                </div>
              )
            })}

            <div className="product-money">
              <div className="provisional">
                <p>Tạm tính</p>
                <p>{Number(totalPrice).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
              </div>
              <div className="fee">
                <p>Phí vận chuyển</p>
                <p>-</p>
              </div>
            </div>
            <div className="product-totalprice">
              <p>Tổng tiền</p>
              <p className="totalprice">{Number(totalPrice).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
            </div>
          </div>
          <div className="col-md-4 mb-5 payments">
            <h5>Hình thức thanh toán</h5>
            <Radio.Group onChange={onChange} value={value}>
              <Space direction="vertical">
                <Radio value={1}>Thanh toán khi nhận hàng.</Radio>
                <Radio value={2}>
                  Thanh toán qua thẻ VISA
                  {value === 2 ? (
                    <>
                      <Input
                        style={{
                          width: 250,
                          padding: 2,
                          paddingLeft: 10,
                          marginTop: 5
                        }}
                        placeholder="Họ tên trên thẻ *"
                      />
                      <Input
                        style={{
                          width: 250,
                          padding: 2,
                          paddingLeft: 10,
                          marginTop: 5
                        }}
                        placeholder="Mã CVV *"
                      />
                    </>
                  ) : null}
                </Radio>
                <Radio value={3} className="">
                  Thanh toán qua ví MOMO
                  {value === 3 ? (
                    <Input
                      style={{
                        width: 250,
                        padding: 2,
                        paddingLeft: 10,
                        marginTop: 5
                      }}
                      placeholder="Mã MoMo *"
                    />
                  ) : null}
                </Radio>
              </Space>
            </Radio.Group>
          </div>
          <div className="col-md-4">
            <h5>Thông tin khách hàng</h5>
            <Form
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
              initialValues={{
                prefix: '86',
              }}
              scrollToFirstError
            >
              <Form.Item
                name="fullname"
                rules={[
                  {
                    type: 'text',
                    message: 'The input is not valid họ và tên!',
                  },
                  {
                    required: true,
                    message: 'Please input your họ và tên!',
                  },
                ]}
              >
                <Input placeholder="Họ và tên *" />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <Input placeholder="E-mail *" />
              </Form.Item>
              <Form.Item
                name="address"
                rules={[
                  {
                    type: 'text',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}
              >
                <Input placeholder="Địa chỉ nhận hàng *" />
              </Form.Item>

              <Form.Item
                name="phoneNumber"
                rules={[
                  {
                    required: true,
                    message: 'Please input your phone number!',
                  },
                ]}
              >
                <InputNumber
                  style={{
                    width: '100%',
                  }}
                  placeholder="Số điện thoại liên hệ *"
                />
              </Form.Item>
              <Form.Item
                name="description"
              >
                <Input.TextArea showCount maxLength={100} placeholder="Thêm ghi chú" />
              </Form.Item>
              <span>Ship đồng giá 15.000 đ bán kính 5km!!</span>
              <div className="btn-checkout">
                <button className="form-checkout-btn" htmltype="submit" >Đặt hàng</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;