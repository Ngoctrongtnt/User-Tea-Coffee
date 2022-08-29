import React from 'react';
import './Register.scss'
import { Form, Input, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { createUserUIStart } from '../../../Redux/actions/userUIAction';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

const randNumberId = () => {
  return (80000000 + Math.trunc(Math.random() * 9000000))
}
const randNumberUserId = () => {
  return (90000000 + Math.trunc(Math.random() * 9000000))
}
const { Option } = Select;
const Register = () => {
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useDispatch()

  const onFinish = (data) => {
    const newUserUI = {
      ...data,
      id: randNumberId(),
      userUiId: randNumberUserId(),
      createAt: new Date().toLocaleString(),
      isUser: true,
      avatar: 'https://sm.mashable.com/mashable_in/photo/default/this-one-piece-fans-femme-luffy-cosplay-is-gomu-gomu-no-a-mi_gqe7.jpg'
    }
    setTimeout(() => {
      dispatch(createUserUIStart(newUserUI));
      toast.success("Đăng ký thành công!!");
      history.push('/login');
    }, 2000)
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="84">+84</Option>
      </Select>
    </Form.Item>
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 form-register ">
          <div className="register__header">
            <h2>Đăng Ký</h2>
            <p>Nếu bạn chưa có tài khoản, đăng ký tại đây</p>
          </div>
          <div className="register__form">
            <Form
              wrapperCol={{
                span: 26,
              }}
              form={form}
              name="register"
              onFinish={onFinish}
              initialValues={{
                prefix: '84',
              }}
              scrollToFirstError
            >
              <Form.Item
                name="fullname"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập họ tên!',
                  },
                  {
                    min: 2,
                    message: 'Tên không được ít hơn 2 ký tự!',
                  },
                  {
                    max: 30,
                    message: 'Tên không được quá 30 ký tự!',
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
                    message: 'Định dạng email chưa đúng',
                  },
                  {
                    required: true,
                    message: 'Vui lòng nhập email!',
                  },
                ]}
              >
                <Input placeholder="Email *" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập mật khẩu!',
                  },
                  {
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                    message: 'Ít nhât 1 Hoa,1 thường, 1 số, 8 ký tự)',
                  },
                ]}
                hasFeedback
              >
                <Input.Password placeholder="Mật khẩu *" />
              </Form.Item>
              <Form.Item
                name="phone"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập số điện thoại!',
                  },
                  {
                    min: 10,
                    message: 'Số điện thoại ít nhất 10 số!',
                  },
                ]}
              >
                <Input type={"number"} placeholder="Số điện thoại *" addonBefore={prefixSelector} />
              </Form.Item>

              <button htmlType="submit" >Đăng Ký</button>

            </Form>
          </div>
          <div className="register__footer">
            <p>Hoặc đăng nhập bằng</p>
            <div className="register__footer--btn">
              <button className="btn-facebook"><i class="fab fa-facebook-f"></i><span>Facebook</span></button>
              <button className="btn-google"><i class="fab fa-google-plus-g"></i><span>Google</span></button>
            </div>
            <div className="icon-login">
              <i className="fab fa-facebook-f facebook"></i>
              <i className="fab fa-google-plus-g google"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;