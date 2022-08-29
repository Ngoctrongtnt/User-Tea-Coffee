import React from 'react';
import { NavLink } from 'react-router-dom';
import './siderBarAdmin.scss'

const SiderBarAdmin = () => {
    return (
        <>
            <ul className="nav flex-column">
                <li className="nav-item">
                    <NavLink to="/adminUI" exact activeClassName="active">
                        <i className="fas fa-home"></i>
                        Trang chủ
                    </NavLink>
                </li>

                <li className="nav-item" >
                    <NavLink to="/adminUI/admins" activeClassName="active">
                        <i className="fas fa-user-shield"></i>
                        Admin
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/adminUI/userUI" activeClassName="active">
                        <i className="fas fa-users"></i>
                        khách hàng
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/adminUI/products" activeClassName="active" >
                        <i className="fas fa-carrot"></i>
                        Sản phẩm
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink to="/adminUI/categories" activeClassName="active">
                        <i className="fas fa-list-ul"></i>
                        Danh mục
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/adminUI/orders" activeClassName="active">
                        <i className="fas fa-check"></i>
                        Đơn hàng
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/adminUI/banners" activeClassName="active">
                        <i className="far fa-image"></i>
                        Banner
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/adminUI/sliders" activeClassName="active">
                        <i className="far fa-images"></i>
                        Slider
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/adminUI/comments" activeClassName="active">
                        <i className="far fa-comments"></i>
                        Bình luận
                    </NavLink>
                </li>
            </ul>
        </>
    );
};

export default SiderBarAdmin;