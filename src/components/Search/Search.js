import React, { useRef, useState } from 'react';
import "./search.scss";

const Search = ({ onSubmit, products }) => {
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
        <div className="col-md-3 formSearch-top">
            <div className="formSearch-top">
                <div className="formSearch-top-icon">
                    <input
                        type="text" placeholder="Tìm kiếm sản phẩm"
                        value={searchTerm}
                        onChange={(e) => handleSearch(e)}
                    />
                    <button type="submit"><i className="fas fa-search"></i></button>
                </div>
            </div>
        </div >
    );
};

export default Search;
