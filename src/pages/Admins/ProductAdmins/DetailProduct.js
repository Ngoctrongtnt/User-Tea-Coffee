import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getProductById } from '../../../apis/productApi';
import TopPage from '../../../layouts/AdminLayout/Toppage/TopPage';
import { Tabs } from 'antd';
import './detailProduct.scss'

const { TabPane } = Tabs;

const initialState = {
    productName: "",
    description: "",
    priceNew: "",
    priceOld: "",
    category: "",
    url: "",
    id: "",
    productId: ""
}

const onChange = (key) => {
};

const DetailProduct = () => {
    const [detailProduct, setDetailProduct] = useState(initialState);
    const { id } = useParams();
    let history = useHistory();

    useEffect(() => {
        getDataProduct(id);
    }, [id])

    const getDataProduct = async (id) => {
        try {
            const data = await getProductById(id);
            data && setDetailProduct({
                id: data.id,
                productId: data.productId,
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
    return (
        <>
            <TopPage title="quản lý tài khoản khách hàng" title1="chi tiết tài khoản" />
            <span className="back-admin-user " onClick={() => { history.push('/adminUI/products') }}>
                <i className="fas fa-arrow-left"></i>&nbsp;
                Quay lại
            </span>
            <h5 className="text-uppercase text-center mb-2">chi tiết sản phẩm</h5>
            <div className=" row detailProduct mt-5">
                <div className="detailProduct__images col-md-4">
                    <img src={detailProduct.url} />
                </div>
                <div className="detailProduct__info col-md-6">
                    <h5 className="text-uppercase mb-2">{detailProduct.productName}</h5>
                    <p className="detailProduct__info--price">Giá: <span>{Number(detailProduct.priceNew).toLocaleString('vi', { style: 'currency', currency: 'VND' })} </span></p>
                    <Tabs defaultActiveKey="1" onChange={onChange}>
                        <TabPane tab="Mô tả về sản phẩm" key="1">
                            {detailProduct.description}
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </>
    );
};

export default DetailProduct;