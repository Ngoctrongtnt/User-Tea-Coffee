import { Form, Input } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { actLogin } from '../../../Redux/actions/actionAuthAdmin';
import './loginAdmin.scss'

const LoginAdmin = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const { isLoading, notif, isLoggIn } = useSelector(state => state.authAdmin)

    const onFinish = (values) => {
        setTimeout(() =>
            dispatch(actLogin(values))
            , 1000)
    };

    if (isLoggIn) {
        return <Redirect to='/adminUI'></Redirect>
    }

    return (
        <div className="loginAdmin-container">
            <div className="container">
                <div className="row" >
                    <div className="col-md-4 col-12 form-container">
                        <div className="register__header">
                            <h2 className="text-uppercase">Đăng nhập</h2>
                        </div>
                        <div className="form-register">
                            <Form
                                form={form}
                                name="register"
                                onFinish={onFinish}
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
                                <button htmltype="submit" >LogIn</button>
                            </Form>
                        </div>
                    </div>
                    <div className="col-md-8 d-md-block d-none banner-login"></div>
                </div>
            </div>
        </div>
    );
};

export default LoginAdmin;