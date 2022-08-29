import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import TopPage from '../../../layouts/AdminLayout/Toppage/TopPage';
import { createBannerStart } from '../../../Redux/actions/bannerAction';
import './bannerTop.scss';
import { Button, Form, Input, } from 'antd';


const randNumberId = () => {
    return (40000 + Math.trunc(Math.random() * 500))
}
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 4,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 10,
        },
    },
};


const CreateBannerTop = () => {
    const [form] = Form.useForm();
    let history = useHistory();
    const dispatch = useDispatch();

    const onFinish = (data) => {
        const newBanner = {
            ...data,
            title: data.title,
            description: data.description,
            url: data.url,
            id: randNumberId(),
            createAt: new Date().toLocaleString()
        }
        if (!data) return;
        dispatch(createBannerStart(newBanner))
        setTimeout(() => history.push('/adminUI/banners'), 500);
        toast.success("Banner được thêm thành công!!");

    };

    return (
        <>
            <TopPage title="Quản lý banner" title1="Thêm mới banner" />
            <span className="back-admin-user" onClick={() => { history.push('/adminUI/banners') }}>
                <i className="fas fa-arrow-left"></i>&nbsp;
                Quay lại
            </span>
            <h5 className="text-uppercase text-center mb-2">thêm mới banner</h5>
            <div className="form-container">
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <Form.Item
                        name="title"
                        label="Tiêu đề"
                        rules={[

                            {
                                required: true,
                                message: 'Vui lòng nhập tiêu đề hình!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="Miêu tả"
                        rules={[

                            {
                                required: true,
                                message: 'Vui lòng nhập miêu tả!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="url"
                        label="Đường dẫn ảnh"
                        rules={[

                            {
                                required: true,
                                message: 'Vui lòng nhập url!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Thêm mới
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </>
    );
}

export default CreateBannerTop;