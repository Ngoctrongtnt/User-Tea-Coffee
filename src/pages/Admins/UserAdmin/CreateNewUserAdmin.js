import { Form, Input, Select, } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createUserAdminStart } from '../../../Redux/actions/userAdminAction';
import { toast } from 'react-toastify';
import './createNewUserAdmin.scss';
import TopPage from '../../../layouts/AdminLayout/Toppage/TopPage';

const { Option } = Select;

const randNumberId = () => {
    return (900000 + Math.trunc(Math.random() * 90000))
}
const randNumberUserId = () => {
    return (100000 + Math.trunc(Math.random() * 90000))
}

const CreateNewUserAdmin = () => {
    const [form] = Form.useForm();
    let history = useHistory();
    const dispatch = useDispatch();

    const onFinish = (data) => {
        const newUser = {
            ...data,
            id: randNumberId(),
            userId: randNumberUserId(),
            createAt: new Date().toLocaleString(),
            isUserAdmin: true
        }
        if (!data) return;
        dispatch(createUserAdminStart(newUser));
        setTimeout(() => history.push('/adminUI/admins'), 500)
        toast.success("Tài khoản đã được thêm thành công!!")
    };

    return (
        <>
            <TopPage title="Quản lý tài khoản Admin" title1="Thêm mới tài khoản" />
            <div className="backa-admin mb-4">
                <span className="back-admin-user" onClick={() => { history.push('/adminUI/admins') }}>
                    <i className="fas fa-arrow-left"></i>&nbsp;
                    Quay lại
                </span>
            </div>
            <h5 className="text-uppercase text-center mb-2">thêm mới tài khoản</h5>
            <div className="container mt-4">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 col-12">
                        <Form
                            form={form}
                            name="register"
                            onFinish={onFinish}
                            scrollToFirstError
                        >
                            <Form.Item
                                name="fullname"
                                rules={[
                                    {
                                        min: 3,
                                        message: 'Tên it nhất ${min} ký tự'
                                    },
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập họ tên!',
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
                                        message: 'Email không đúng định dạng!',
                                    },
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập email!',
                                    },
                                ]}
                            >
                                <Input placeholder="E-mail *" />
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
                                        message: 'Ít nhât 1 chữ hoa, 1 chữ thường, 1 số, 8 ký tự',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password placeholder="Mật khẩu *" />
                            </Form.Item>
                            <Form.Item
                                name="role"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng chọn quyền!',
                                    },
                                ]}
                            >
                                <Select placeholder="Chọn phân quyền *">
                                    <Option value="admin">Admin</Option>
                                    <Option value="manage">Manage</Option>
                                    <Option value="employee">Employee</Option>
                                </Select>
                            </Form.Item>
                            <div className="submit-create">
                                <button htmlType="submit">Tạo mới</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CreateNewUserAdmin;