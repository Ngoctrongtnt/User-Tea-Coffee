import React, { useEffect } from 'react';
import {
    Button,
    Form,
    Input,
} from 'antd';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { updateCategoryStart } from '../../../Redux/actions/categoryAction';
import { getCategoryById } from '../../../apis/categoryApi';
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
            offset: 10,
        },
    },
};

const UpdateCategory = () => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    let history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        getDataById(id)
    }, [id])

    const getDataById = async (id) => {
        try {
            const data = await getCategoryById(id);
            data && form.setFieldsValue({
                categoryName: data.categoryName,
                description: data.description,
                url: data.url,
            });
        } catch (error) {
            console.log(error);
        }
    }


    const onFinish = (dataValue) => {
        if (!dataValue) return;
        dispatch(updateCategoryStart({ id, dataValue }));
        toast.success("Update user success");
        setTimeout(() => history.push('/adminUI/categories'), 500);
    };
    return (
        <>
            <TopPage title="Quản lý danh mục sản phẩm" title1="Cập nhật danh mục" />
            <span className="back-admin-user" onClick={() => { history.push('/adminUI/categories') }}>
                <i className="fas fa-arrow-left"></i>&nbsp;
                Quay lại
            </span>
            <h5 className="text-uppercase text-center mb-2">cập nhật danh mục</h5>
            <div className="form-container">
                <Form
                    {...formItemLayout}
                    form={form}
                    name="register"
                    onFinish={onFinish}
                    scrollToFirstError
                >
                    <Form.Item
                        name="categoryName"
                        label="Tên danh mục"
                        rules={[

                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="Mô tả"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your description!',
                            },
                        ]}
                    >
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item
                        name="url"
                        label="Hình ảnh"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your description!',
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

export default UpdateCategory;