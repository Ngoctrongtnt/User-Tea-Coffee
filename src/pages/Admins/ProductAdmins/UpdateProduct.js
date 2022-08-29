import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import TopPage from '../../../layouts/AdminLayout/Toppage/TopPage';
import {
    Button,
    Form,
    Input,
    Select,
} from 'antd';
import { getProductById } from '../../../apis/productApi';
import { useEffect } from 'react';
import { loadCategoryStart } from '../../../Redux/actions/categoryAction';
import { updateProductStart } from '../../../Redux/actions/productAction';
import { toast } from 'react-toastify';


const { Option } = Select;

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


const UpdateProduct = () => {
    let history = useHistory();
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const { id } = useParams();
    const { categories } = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(loadCategoryStart());
    }, [])

    useEffect(() => {
        getDataById(id)
    }, [id])

    const getDataById = async (id) => {
        try {
            const data = await getProductById(id);
            data && form.setFieldsValue({
                productName: data.productName,
                description: data.description,
                priceNew: data.priceNew,
                priceOld: data.priceOld,
                category: data.category,
                url: data.url,
            });
        } catch (error) {
            console.log(error);
        }
    }

    const onFinish = (dataValue) => {
        if (!dataValue) return;
        dispatch(updateProductStart({ id, dataValue }));
        toast.success("Update user success");
        setTimeout(() => history.push('/adminUI/products'), 500);
    };

    return (
        <div>
            <TopPage title="Quản lý sản phâme" title1="Cập nhật sản phẩm" />
            <span className="back-admin-user" onClick={() => { history.push('/adminUI/products') }}>
                <i className="fas fa-arrow-left"></i>&nbsp;
                Quay lại
            </span>
            <h5 className="text-uppercase text-center mt-4">cập nhật sản phẩm</h5>
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
                                <Input />
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
                                <Input.TextArea />
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
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="priceOld"
                                label="Giá cũ"
                            >
                                <Input />
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
                                <Select>
                                    {categories && categories.map((item, index) => {
                                        return (
                                            <Option key={index} value={item.categoryName}>{item.categoryName}</Option>
                                        )
                                    })}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name="url"
                                label="Hình ảnh"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Vui lòng nhập đường dẫn của ảnh!',
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
        </div>
    );
};

export default UpdateProduct;