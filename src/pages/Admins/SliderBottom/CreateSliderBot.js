import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import TopPage from '../../../layouts/AdminLayout/Toppage/TopPage';
import { createSliderStart } from '../../../Redux/actions/sliderBotAction';
import './createSliderBot.scss';
import { Button, Form, Input, } from 'antd';


const randNumberId = () => {
    return (990000 + Math.trunc(Math.random() * 5000))
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


const CreateSliderBot = () => {
    const [form] = Form.useForm();
    let history = useHistory();
    const dispatch = useDispatch();

    const onFinish = (data) => {
        const newSlider = {
            ...data,
            title: data.title,
            url: data.url,
            id: randNumberId(),
            createAt: new Date().toLocaleString()
        }
        if (!data) return;
        dispatch(createSliderStart(newSlider))
        setTimeout(() => history.push('/adminUI/sliders'), 500);
        toast.success("Banner được thêm thành công!!");
    };

    return (
        <>
            <TopPage title="Quản lý slider" title1="Thêm mới slider" />
            <span className="back-admin-user" onClick={() => { history.push('/adminUI/sliderBot') }}>
                <i className="fas fa-arrow-left"></i>&nbsp;
                Quay lại
            </span>
            <h5 className="text-uppercase text-center mb-2">thêm mới hình ảnh slider</h5>
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
                                message: 'Please input your title!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="url"
                        label="Đường dẫn"
                        rules={[

                            {
                                required: true,
                                message: 'Please input your url!',
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

export default CreateSliderBot;