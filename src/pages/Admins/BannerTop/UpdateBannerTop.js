import React, { useEffect } from 'react';
import { Button, Form, Input, } from 'antd';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { updateBannerStart } from '../../../Redux/actions/bannerAction';
import { getBannerById } from '../../../apis/bannerApi';
import TopPage from '../../../layouts/AdminLayout/Toppage/TopPage';



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
            offset: 8,
        },
    },
};

const UpdateBannerTop = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    let history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        getDataById(id)
    }, [id])

    const getDataById = async (id) => {
        try {
            const data = await getBannerById(id);
            data && form.setFieldsValue({
                title: data.title,
                description: data.description,
                url: data.url
            });

        } catch (error) {
            console.log(error);
        }
    }

    const onFinish = (dataValue) => {
        if (!dataValue) return;
        dispatch(updateBannerStart({ id, dataValue }));
        toast.success("Update banner success");
        setTimeout(() => history.push('/adminUI/banners'), 500);
    };

    return (
        <>
            <TopPage title="Quản lý banner" title1="Cập nhật banner" />
            <span className="back-admin-user" onClick={() => { history.push('/adminUI/banners') }}>
                <i className="fas fa-arrow-left"></i>&nbsp;
                Quay lại
            </span>
            <h5 className="text-uppercase text-center mb-2">cập nhật banner</h5>
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
                        label="Tiêu đề hình"
                        rules={[

                            {
                                required: true,
                                message: 'Vui lòng nhập tiêu đề!',
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
                                message: 'Vui lòng nhập đường dẫn!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" htmlType="submit">
                            Cập nhật
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
};

export default UpdateBannerTop;