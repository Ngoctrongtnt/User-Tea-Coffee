import { Result } from 'antd';
import React from 'react';

const CheckoutSuccess = () => (
    <div style={{ minHeight: 500 }}>
        <Result
            status="success"
            title="Đặt hàng thành công!"
            subTitle="Cảm ơn quý khách đã tin tưởng và ủng hộ sản phẩm của cửa hàng chúng tôi. Chúc quý khách ngon miệng!!!"
        />
    </div>
);

export default CheckoutSuccess;