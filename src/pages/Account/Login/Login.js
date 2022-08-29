import React from 'react';
import { Form, Input } from 'antd';
import { Link, Redirect } from 'react-router-dom';
import './login.scss'
import { useDispatch, useSelector } from 'react-redux';
import { actLoginUI } from '../../../Redux/actions/actionAuthUser';

const Login = () => {
  const [form] = Form.useForm();
  const { isLoading, notif, isLoggIn } = useSelector(state => state.authUser)
  const dispatch = useDispatch();

  const onFinish = (values) => {
    setTimeout(() =>
      dispatch(actLoginUI(values))
      , 1000)
  };

  if (isLoggIn) {
    return <Redirect to='/'></Redirect>
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 form-register ">
          <div className="register__header">
            <h2>Đăng nhập</h2>
            <p>Nếu chưa có tài khoản, <Link to="/register">đăng ký tại đây</Link></p>
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
                name="email"
                rules={[
                  {
                    type: 'email',
                    message: 'E-mail example@gmail.com!',
                  },
                  {
                    required: true,
                    message: 'Vui lòng nhập email!',
                  },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập mật khẩu!',
                  },
                ]}
                hasFeedback
              >
                <Input.Password placeholder="Mật khẩu" />
              </Form.Item>
              <span className="text-danger">{notif}</span>

              <button htmltype="submit" >Đăng nhập</button>

            </Form>
          </div>
          <div className="register__footer">
            <p>Hoặc đăng nhập bằng</p>
            <div className="register__footer--btn">
              <button className="btn-facebook"><i className="fab fa-facebook-f"></i><span>Facebook</span></button>
              <button className="btn-google"><i className="fab fa-google-plus-g"></i><span>Google</span></button>
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

export default Login;