import React, { useRef, useState } from 'react';
import { Image } from 'antd';
import './SearchTop.scss'
import { Link } from 'react-router-dom';

const SearchTop = ({ onSubmit, products }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const typingTimeoutRef = useRef(null);

    const handleSearch = (e) => {
        const value = e.target.value
        setSearchTerm(value)
        if (!onSubmit) return;
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current)
        }
        typingTimeoutRef.current = setTimeout(() => {
            const formValues = {
                searchTerm: value
            };
            onSubmit(formValues)
        }, 300)

    }
    return (
        <div className="formSearch-top">
            <div className="formSearch-top-icon">
                <input
                    type="text" placeholder="Tìm kiếm sản phẩm"
                    value={searchTerm}
                    onChange={(e) => handleSearch(e)}
                />
                <button type="submit"><i className="fas fa-search"></i></button>
            </div>
            {searchTerm &&
                <div className="list-search" id="style-2">
                    {products && products.map((item, index) => {
                        return (
                            <Link to={`/products/detail/${item.id}`}>
                                <div className="product-item">
                                    <div className="d-flex align-items-center">
                                        <Image
                                            width={20}
                                            src={item.url}
                                        />
                                        <span className="ml-2" key={index}>{item.productName}</span>
                                    </div>
                                    <span>{Number(item.priceNew).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            }
        </div>
    );
};

export default SearchTop;