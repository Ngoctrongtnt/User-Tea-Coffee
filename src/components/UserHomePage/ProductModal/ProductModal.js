import React, { useState } from 'react';
import './productModal.scss';
import { Rate, Radio } from 'antd';


const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];


const ProductModal = ({ product, onAdd }) => {
    const [size, setSize] = useState('S');

    const onClick = (product) => {
        onAdd(product);
    }

    const onChange = (e) => {
        setSize(e.target.value);
    };
    return (
        <div className="container">
            <div className="row productModal">
                <div className=" col-md-5 col-12 productModal__img">
                    <img src={product.url} />
                </div>
                <div className="col-md-6 col-12 productModal__content">
                    <p className="productModal__content--name">{product.productName}</p>
                    <p className="productModal__content--price">
                        {Number(product.priceNew).toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                    </p>
                    <p className="productModal__content--des">{product.description}</p>
                    {product.category === "Trà sữa" &&
                        <div className="d-flex">
                            <p className="mr-2">Size:</p>
                            <Radio.Group onChange={onChange}>
                                <Radio value="S">S</Radio>
                                <Radio value="L">L</Radio>
                            </Radio.Group>
                        </div>
                    }
                    <div className>
                        <Rate allowHalf defaultValue={2.5} />
                    </div>
                    <button className="btn btn-success mt-4" onClick={() => onClick({ ...product, size: size })}>Thêm giỏ hàng</button>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;