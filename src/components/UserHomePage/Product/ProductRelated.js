import React from "react";
import { Link } from "react-router-dom";
import './product.scss';
import { Modal, Radio } from 'antd';
import { useState } from "react";
import ProductModal from "../ProductModal/ProductModal";

const ProductRelated = ({ product, onAdd }) => {
    const [visible, setVisible] = useState(false);
    const [size, setSize] = useState('S');
    const showDetailModal = () => {
        setVisible(!visible)
    }
    const onChange = (e) => {
        setSize(e.target.value);
    };
    return (
        <div className="m-2">
            <div className="product-wrapper text-center">
                <div className="product-img">
                    <Link to={`/products/detail/${product.id}`}>
                        <img src={product.url} alt={product.productName} />
                    </Link>
                    <span className="text-center">
                        {Number(product.priceNew).toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                    </span>
                    <div className="product-action">
                        <div className="product-size">
                            {product.category === "Trà sữa" &&
                                <Radio.Group onChange={onChange} value={size}>
                                    <Radio value="S">S</Radio>
                                    <Radio value="L">L</Radio>
                                </Radio.Group>
                            }
                        </div>
                        <div className="product-action-style">
                            <span onClick={() => onAdd(product)}>
                                <i className="fa fa-shopping-cart"></i>
                            </span>
                            <span onClick={() => showDetailModal(product)}>
                                <i className="far fa-eye"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <p className="productName text-uppercase">{product.productName}</p>
            <Modal
                visible={visible}
                onCancel={() => setVisible(false)}
                width={1000}
                product={product}
                footer={null}
            >
                <ProductModal product={product} onAdd={onAdd} setVisible={setVisible} />

            </Modal>
        </div>
    );
};

export default ProductRelated;
