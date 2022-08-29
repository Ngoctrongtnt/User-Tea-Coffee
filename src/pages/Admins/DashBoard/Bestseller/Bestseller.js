import React from 'react';
import { Image, Rate } from 'antd';


const Bestseller = ({ orders, product }) => {
    const orderFinish = orders.filter(item => item.status === "Giao thành công")
    return (

        <div className="d-flex justify-content-between mb-3 border-bottom pb-1">
            <div className="d-flex align-items-center">
                <Image
                    width={50}
                    src={product.url}
                />
                <div className="d-flex flex-column ml-3">
                    <span>{product.productName}</span>
                    <Rate style={{ fontSize: 15 }} disabled defaultValue={5} />
                </div>
            </div>
            <span className="mr-2"> {Number(product.priceNew).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
        </div>

    );
};

export default Bestseller;