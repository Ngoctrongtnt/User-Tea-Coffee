import React from 'react';
import './Contacts.scss'
import { Form, Input, InputNumber } from 'antd';
import BreadCrumb from '../../components/UserHomePage/Main/BreadCrumb';
// import GoogleMaps from './GoogleMaps';
const Contacts = () => {
  const onFinish = (values) => {
  };

  return (
    <div className="contacts">
      <div className="container">
        <BreadCrumb title="Liên hệ" />
        <div className="row contacts-flex">
          <div className="contacts-gmap col-md-6 d-md-block d-none">
            <div className="googlemaps">
              {/* <GoogleMaps /> */}
            </div>
          </div>
          <div className="contacts-form col-md-6 col-12">
            <h2>GỬI THÔNG TIN CHO CHÚNG TÔI</h2>
            <p>
              Hãy liên hệ ngay với chúng tôi để nhận được nhiều ưu đãi hấp dẫn dành cho bạn!
            </p>
            <div className="contacts-info">
              <div className="info-address info-flex">
                <i class="fas fa-map-marker info-icon "></i>
                <p className="info-title">
                  Địa chỉ:
                </p>
                <p>Tâng 6 toà nhà Ladeco, 266 Đội Cấn, phường Liễu Giai, Hà Nội</p>
              </div>
              <div className="info-email info-flex">
                <i class="fas fa-envelope email-icon info-icon "></i>
                <p className="info-title">
                  Email:
                </p>
                <a href="mailto:hellocafein@gmail.com">
                  hellocafein@gmail.com
                </a>
              </div>
              <div className="info-tel info-flex">
                <i class="fas fa-phone tel-icon info-icon"></i>
                <p className="info-title">
                  Hotline:
                </p>
                <a class="fone" href="tel:19006750"> 1900 6750</a>
              </div>
            </div>
            <div className="contacts-form-bottom">
              <Form
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
                <Form.Item >
                  <button className="form-checkout-btn" htmltype="submit" >Gửi Thông Tin</button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;