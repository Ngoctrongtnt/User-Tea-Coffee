import React from 'react';
import { NavLink } from 'react-router-dom';
import './BreadCrumb.scss'
const BreadCrumb = ({ title }) => {
    return (
        <nav   >
            <ol className="breadcrumb">
                <li className="breadcrumb-item">
                    <NavLink to="/">Trang chủ </NavLink>
                </li>
                <span><i className="fas fa-chevron-right"></i></span>
                <li className="breadcrumb-item" aria-current="page">{title}</li>
            </ol>
        </nav >
    );
};

export default BreadCrumb;