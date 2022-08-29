import React from 'react';
import './notfound.scss';

const NotFound = () => {
    return (
        <div className="notfound">
            <h1>Page Not Found </h1>
            <p><span>404.</span>Đã xảy ra lỗi</p>
            <p>Không tìm thấy URL được yêu cầu trên máy chủ này. Đó là tất cả những gì chúng tôi biết.</p>
        </div>
    );
};

export default NotFound;