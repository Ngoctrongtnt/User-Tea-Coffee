import React from 'react';
import { Form, Input, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { updateUserUIStart } from '../../../Redux/actions/userUIAction';
import { toast } from 'react-toastify';
import { actLoginUI } from '../../../Redux/actions/actionAuthUser';
const { Option } = Select;

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 24,
    },
};

const validateMessages = {
    required: '${label} không được để trống!',
    types: {
        email: '${label} không đúng định dạng!',
    },
};

const ModalEditUser = ({ profile, setVisible }) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();

    profile && form.setFieldsValue({
        fullname: profile.fullname,
        email: profile.email,
        address: profile.address,
        password: profile.password,
        birthday: profile.birthday,
        phone: profile.phone,
        avatar: profile.avatar,
        gender: profile.gender,
    })
    const onFinish = (values) => {
        const dataValue = {
            ...values,
            isUser: true,
            id: profile.id
        }
        setTimeout(() => {
            dispatch(updateUserUIStart({ id: dataValue.id, dataValue }))
            dispatch(actLoginUI(dataValue))
            toast.success("Cập nhật thành công!!")
            setVisible(false)
        }, 500)
    };
    return (
        <div className="p-4">
            <Form {...layout} form={form} name="register" onFinish={onFinish} validateMessages={validateMessages}>
                <Form.Item
                    name={['fullname']}
                    label='Họ tên'
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input placeholder="Họ và tên *" />
                </Form.Item>
                <Form.Item
                    name={['email']}
                    label='E-mail'
                    rules={[
                        {
                            type: 'email',
                        },
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input placeholder="E-mail *" />
                </Form.Item>
                <Form.Item
                    name={['password']}
                    label='Mật khẩu'
                    rules={[
                        {
                            required: true,
                        },
                        {
                            pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                            message: 'Ít nhât 1 chữ hoa, 1 chữ thường, 1 số, 8 ký tự',
                        },
                    ]}
                >
                    <Input.Password placeholder="Mật khẩu *" />
                </Form.Item>
                <Form.Item
                    name={['address']}
                    label='Địa chỉ'
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Input placeholder="Địa chỉ liên hện *" />
                </Form.Item>
                <Form.Item
                    name={['birthday']}
                    label='Ngày sinh'
                >
                    <Input type="date" placeholder="Ngày sinh *" />
                </Form.Item>
                <Form.Item
                    name={['phone']}
                    label='Số đt'
                    rules={[
                        {
                            required: true,
                        },
                        {
                            len: 10,
                            message: 'Số điện thoại phải là 10 sô, bắt đầu bằng số 0'
                        }
                    ]}
                >
                    <Input type="number" placeholder="Số điện thoại liên hệ *" />
                </Form.Item>
                <Form.Item
                    name={['avatar']}
                    label='Avatar'
                >
                    <Input placeholder="Hình đại diện *" />
                </Form.Item>
                <Form.Item
                    name="gender"
                    label="Giới tính"
                >
                    <Select placeholder="select your gender">
                        <Option value="male">Male</Option>
                        <Option value="female">Female</Option>
                        <Option value="other">Other</Option>
                    </Select>
                </Form.Item>

                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <button className="btn btn-success" htmltype="submit">
                        Chỉnh sửa
                    </button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default ModalEditUser;