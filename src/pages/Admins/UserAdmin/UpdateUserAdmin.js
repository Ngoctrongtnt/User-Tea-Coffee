import React, { useEffect, useState } from 'react';
import { Form, Input, Select, } from 'antd';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserAdminById } from '../../../apis/userAdminApi';
import { updateUserAdminStart } from '../../../Redux/actions/userAdminAction';
import { toast } from 'react-toastify';
import TopPage from '../../../layouts/AdminLayout/Toppage/TopPage';
import './updateUserAdmin.scss'
import { actGetProfile, actLogin, actLoginSuccess } from '../../../Redux/actions/actionAuthAdmin';

const { Option } = Select;

const UpdateUserAdmin = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const { id } = useParams();
    let history = useHistory();
    const [roles, setRole] = useState('');
    const userAdmin = JSON.parse(localStorage.getItem('userAdmin')) || null;

    useEffect(() => {
        getDataById(id)
    }, [id])

    const getDataById = async (id) => {
        try {
            const data = await getUserAdminById(id);
            setRole(data.role)
            data && form.setFieldsValue({
                fullname: data.fullname,
                email: data.email,
                password: data.password,
                birthday: data.birthday,
                address: data.address,
                phone: data.phone,
                avatar: data.avatar,
                gender: data.gender,
                role: data.role,
                id: data.id
            });
        } catch (error) {
            console.log(error);
        }
    }
    const onFinish = (values) => {
        const dataValue = {
            ...values,
            isUserAdmin: true
        }
        dispatch(updateUserAdminStart({ id, dataValue }));
        if (dataValue.id === userAdmin.id) {
            dispatch(actLoginSuccess(dataValue))
        }
        toast.success("Update user success");
        setTimeout(() => history.push('/adminUI/admins'), 500);
    };
    return (
        <>
            <TopPage title="Quản lý tài khoản Admin" title1="Cập nhật tài khoản" />
            <span className="back-admin-user" onClick={() => { history.push('/adminUI/admins') }}>
                <i className="fas fa-arrow-left"></i>&nbsp;
                Quay lại
            </span>
            <h5 className="text-uppercase text-center mb-2 mt-3">cập nhật tài khoản</h5>
            <div className="container my-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 col-12">
                        <Form
                            form={form}
                            name="register"
                            onFinish={onFinish}
                            scrollToFirstError
                        >
                            <Form.Item
                                name="id"
                            >
                                <Input type="hidden" />
                            </Form.Item>
                            <Form.Item
                                name="fullname"
                                rules={[
                                    {
                                        type: 'text'
                                    },
                                    {
                                        required: true,
                                        message: 'Trường này không được để trống!',
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
                                        message: 'Email không dúng định dạng',
                                    },
                                    {
                                        required: true,
                                        message: 'Trường này không được để trống!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Trường này không được để trống!',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password placeholder="Mật khẩu *" />
                            </Form.Item>
                            <Form.Item
                                name="birthday"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Trường này không được để trống!',
                                    },

                                ]}
                            >
                                <Input type="date" placeholder="Ngày sinh*" />
                            </Form.Item>
                            <Form.Item
                                name="address"
                                rules={[

                                    {
                                        required: true,
                                        message: 'Trường này không được để trống!',
                                    },
                                ]}
                            >
                                <Input placeholder="Địa chỉ *" />
                            </Form.Item>
                            <Form.Item
                                name="phone"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Trường này không được để trống!',
                                    },
                                ]}
                            >
                                <Input placeholder="Số điện thoại *" />
                            </Form.Item>
                            <Form.Item
                                name="avatar"
                                rules={[

                                    {
                                        required: true,
                                        message: 'Vùi lòng chọn hình ảnh!',
                                    },
                                ]}
                            >
                                <Input placeholder="Hình đại diện *" />
                            </Form.Item>
                            <Form.Item
                                name="education"
                                rules={[

                                    {
                                        type: "text",
                                        message: 'Vùi lòng chọn hình ảnh!',
                                    },
                                ]}
                            >
                                <Input placeholder="Trình độ học vấn" />
                            </Form.Item>
                            <Form.Item
                                name="gender"
                                rules={[
                                    {
                                        type: 'text',
                                    },
                                ]}
                            >
                                <Select placeholder="Vui lòng chọn giới tính">
                                    <Option value="Nam">Name</Option>
                                    <Option value="Nữ">Nữ</Option>
                                    <Option value="Khác">Khác</Option>
                                </Select>
                            </Form.Item>
                            {roles === "employee" ? (
                                <Form.Item
                                    name="role"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng chọn quyền!',
                                        },
                                    ]}
                                >
                                    <Select disabled placeholder="Vui lòng chọn phân quyền *">
                                        <Option value="admin">Admin</Option>
                                        <Option value="manage">Manage</Option>
                                        <Option value="employee">Employee</Option>
                                    </Select>
                                </Form.Item>
                            ) : (
                                <Form.Item
                                    name="role"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Vui lòng chọn quyền!',
                                        },
                                    ]}
                                >
                                    <Select placeholder="Vui lòng chọn phân quyền *">
                                        <Option value="admin">Admin</Option>
                                        <Option value="manage">Manage</Option>
                                        <Option value="employee">Employee</Option>
                                    </Select>
                                </Form.Item>
                            )}
                            <div className="submit-create">
                                <button htmlType="submit">Cập nhật</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default UpdateUserAdmin;