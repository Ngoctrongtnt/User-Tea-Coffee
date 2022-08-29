import React from 'react';
import {
    Button,
    Form,
    Input,

} from 'antd';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createCategoryStart } from '../../../Redux/actions/categoryAction';
import { toast } from 'react-toastify';
import TopPage from '../../../layouts/AdminLayout/Toppage/TopPage';

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 6,
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

const randNumberId = () => {
    return (30000 + Math.trunc(Math.random() * 500))
}

const CreateNewCategory = () => {
    const [form] = Form.useForm();
    let history = useHistory();
    const dispatch = useDispatch();

    const onFinish = (data) => {
        const newCategory = {
            ...data,
            id: randNumberId(),
            createAt: new Date().toLocaleString()
        }
        if (!data) return;
        dispatch(createCategoryStart(newCategory))
        setTimeout(() => history.push('/adminUI/categories'), 500);
        toast.success("Danh mục được thêm thành công!!");

    };
    return (
        <>
            <TopPage title="Quản lý danh mục sản phẩm" title1="Thêm danh mục sản phẩm" />
            <span className="back-admin-user" onClick={() => { history.push('/adminUI/categories') }}>
                <i className="fas fa-arrow-left"></i>&nbsp;
                Back
            </span>
            <h5 className="text-uppercase text-center mt-3">thêm mới danh mục</h5>
            <div className="container my-4">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-8 col-12">
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
                                        message: 'Vùi lòng nhập tên danh mục!',
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
                                        message: 'Vui lòng nhập mô tả!',
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
                                        message: 'Vui lòng nhập đường dẫn hình ảnh!',
                                    },
                                ]}
                            >
                                <Input />
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

export default CreateNewCategory;