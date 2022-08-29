import React, { useEffect, useState } from 'react';
import './HeaderTop.scss'
import { Link, useHistory } from 'react-router-dom';
import CartProduct from '../Cart/CartProduct';
import { useDispatch, useSelector } from 'react-redux';
import { actGetProfileUI, actLogoutUI } from '../../../Redux/actions/actionAuthUser';
import SearchTop from './SearchTop';
import logo_mobi from '../../../assets/images/logo_mobi.png'


const HeaderTop = ({ showMenu }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { products } = useSelector(state => state.products);
  const userUI = JSON.parse(localStorage.getItem('userUI')) || null;

  useEffect(() => {
    if (userUI) {
      dispatch(actGetProfileUI(userUI))
    }
  }, [])

  const handleLogout = () => {
    setTimeout(() => {
      dispatch(actLogoutUI())
      history.push('/')
    }, 2000)
  }
  const [filters, setFilters] = useState('')
  const lowercasedFilter = filters.toLowerCase();

  const newProduct = products.filter(item => {
    return (
      item.productName.toUpperCase().includes(lowercasedFilter.toUpperCase()) ||
      item.priceNew.toUpperCase().includes(lowercasedFilter.toUpperCase()) ||
      item.category.toUpperCase().includes(lowercasedFilter.toUpperCase())
    )
  });

  const handleFilterChange = (newFilter) => {
    setFilters(newFilter.searchTerm)
  }

  return (
    <div className="header__top">
      <div className="container d-none d-md-block">
        <div className="row header-top">
          {/* Hotline */}
          <div className="header__top__hotline col-md-4">
            <i className="fas fa-phone-alt" ></i>
            Hotline:
            <a href="tel:1900 6750"> 1900 6750</a>
          </div>
          <div className="col-3 logo-menu-top">
            <Link to="/" >
              <img src={logo_mobi} alt="logo" />
            </Link>
          </div>
          <div className="d-flex header_top--block">
            {/* Search */}
            <SearchTop onSubmit={handleFilterChange} products={newProduct} />
            {/* User */}
            {userUI && userUI.isUser === true ? (
              <div className="header__top__account">
                <div className="account-title dropdown ">
                  <div className="hash-child">
                    <img src={userUI.avatar} className="avatar-header" alt="" />
                    <span className="profile-name ml-2">{userUI.fullname}</span>
                    <ul className="sub-menu">
                      <li><span className="text-dark pl-2">{userUI.fullname}</span></li>
                      <li><Link to="/userUI/settings" >Cài đặt</Link></li>
                      <li><span className="text-dark pl-2" onClick={handleLogout}>Đăng xuất</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="header__top__account">
                <div className="account-title dropdown ">
                  <div className="hash-child">
                    <i className="far fa-user"></i>
                    <span className="profile-name">Tài Khoản</span>
                    <ul className="sub-menu">
                      <li> <Link to="/login" >Đăng Nhập</Link></li>
                      <li><Link to="/register" >Đăng Ký</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            <div className="header__top__account cartProduct">
              <CartProduct />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid d-md-none d-block">
        <div className="row menu-top">
          <div className="col-1 d-sm-none d-md-none"></div>
          <div className="toggle-menu d-md-none">
            <i className="fas fa-bars" onClick={() => showMenu()}></i>
          </div>
          <div className="col-6 col-sm-3 logo-menu-top">
            <Link to="/" >
              <img src={logo_mobi} alt="logo" />
            </Link>
          </div>
          <div className="col-sm-3 col-1  d-flex">
            {userUI && userUI.isUser === true ? (
              <div className="header__top__account">
                <div className="account-title dropdown ">
                  <div className="hash-child">
                    <img
                      src={userUI.avatar}
                      style={{
                        width: 25,
                        height: 25,
                        marginRight: 10
                      }}
                      className="avatar-header"
                    />
                    <span className="profile-name">{userUI.fullname}</span>
                    <ul className="sub-menu">
                      <li><span className="text-dark pl-2">{userUI.fullname}</span></li>
                      <li><Link to="/userUI/settings" >Cài đặt</Link></li>
                      <li><span className="text-dark pl-2" onClick={handleLogout}>Đăng xuất</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <div className="header__top__account">
                <div className="account-title dropdown ">
                  <div className="hash-child">
                    <i className="far fa-user"></i>
                    <span className="profile-name">Tài Khoản</span>
                    <ul className="sub-menu">
                      <li> <Link to="/login" >Đăng Nhập</Link></li>
                      <li><Link to="/register" >Đăng Ký</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
            <div className="header__top__account cartProduct">
              <CartProduct />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-md-none search-header">
            <SearchTop onSubmit={handleFilterChange} products={newProduct} />
          </div>
        </div>
      </div>
    </div >
  );
};

export default HeaderTop;