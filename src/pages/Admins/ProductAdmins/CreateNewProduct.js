import { Form, Input, Select, } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createProductStart } from '../../../Redux/actions/productAction';
import { toast } from 'react-toastify';
import './createProduct.scss';
import TopPage from '../../../layouts/AdminLayout/Toppage/TopPage';
import { loadCategoryStart } from '../../../Redux/actions/categoryAction';


const { Option } = Select;

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
    return (90000000 + Math.trunc(Math.random() * 900000))
}
const randNumberProductId = () => {
    return (1100000 + Math.trunc(Math.random() * 90000))
}

const CreateNewProduct = () => {
    const [form] = Form.useForm();
    let history = useHistory();
    const dispatch = useDispatch();
    const { categories } = useSelector(state => state.categories);

    useEffect(() => {
        dispatch(loadCategoryStart());
    }, [])

    const onFinish = (data) => {
        const newProduct = {
            ...data,
            id: randNumberId(),
            productId: randNumberProductId(),
            createAt: new Date().toLocaleString()
        }
        if (!data) return;
        dispatch(createProductStart(newProduct));
        setTimeout(() => history.push('/adminUI/products'), 500)
        toast.success("Tài khoản đã được thêm thành công!!")
    };
    return (
        <>
            <TopPage title="Quản lý sản phẩm" title1="Thêm mới sản phẩm" />
            <div className="backa-admin">
                <span className="back-admin-user" onClick={() => { history.push('/adminUI/products') }}>
                    <i className="fas fa-arrow-left"></i>&nbsp;
                    Quay lại
                </span>
            </div>
            <h5 className="text-uppercase text-center mt-4">thêm mới sản phẩm</h5>
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
                                name="productName"
                                label="Tên sản phẩm"
                                rules={[
                                    {
                                        type: 'text'
                                    },
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập Tên sản phẩm!',
                                    },
                                ]}
                            >
                                <Input placeholder="Tên sản phẩm *" />
                            </Form.Item>
                            <Form.Item
                                name="description"
                                label="Mô tả"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập miêu tả!',
                                    },
                                ]}
                            >
                                <Input.TextArea placeholder="Mô tả sản phẩm *" />
                            </Form.Item>
                            <Form.Item
                                name="priceNew"
                                label="Giá mới"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập giá mới!',
                                    },
                                ]}
                            >
                                <Input placeholder="Giá mới *" />
                            </Form.Item>
                            <Form.Item
                                name="priceOld"
                                label="Giá cũ"
                            >
                                <Input placeholder="Giá cũ *" />
                            </Form.Item>
                            <Form.Item
                                name="category"
                                label="Danh mục"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng chọn danh mục!',
                                    },
                                ]}
                            >
                                <Select placeholder="Chọn danh mục *">
                                    {categories && categories.map((item, index) => {
                                        return (
                                            <Option key={index} value={item.categoryName}>{item.categoryName}</Option>
                                        )
                                    })}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="url"
                                label="URL hình ảnh"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập đường dẫn của ảnh!',
                                    },
                                ]}

                            >
                                <Input placeholder="URL hình ảnh sản phẩm *" />
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

export default CreateNewProduct;