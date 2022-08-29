import React from "react";
import './Footer.scss';
import logo from '../../../assets/images/logo.webp'
import { Link, NavLink } from "react-router-dom";
const Footer = () => {

  return (
    <div className="footer ">
      <div className="container">
        <div className="footer-support row">
          <div className="footer-support1 footer-support2 col-md-4 col-12">
            <div className="footer-img">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <p>
              Chúng tôi mong muốn Tea House sẽ trở thành “Nhà Trà",
              nơi mọi người xích lại gần nhau và tìm thấy niềm vui,
              sự sẻ chia thân tình bên những tách cà phê đượm hương, chất lượng.
            </p>
            <div className="call-me">
              <i className="fas fa-phone-alt"></i>
              <a href="tel:1900 6750">1900 6750</a>
            </div>
          </div>
          <div className="footer-support1 support1 col-md-4 col-12">
            <p>
              <b>Về chúng tôi</b>
            </p>
            <div className="list-support">
              <div className="list-support1">
                <NavLink to="/">Trang chủ</NavLink>
                <NavLink to="/intro">Giới thiệu</NavLink>
                <NavLink to="/products">Sản phẩm</NavLink>
              </div>
              <div className="list-support1">
                <NavLink to="/cart">Đặt hàng</NavLink>
                <NavLink to="/news">Tin tức</NavLink>
                <NavLink to="/contact">Liên hệ</NavLink>
              </div>
            </div>
          </div>
          <div className="footer-support1 support1 col-md-4 d-none d-md-block">
            <p>
              <b>Hỗ trợ khách hàng</b>
            </p>
            <div className="list-support">
              <div className="list-support1">
                <NavLink to="/">Trang chủ</NavLink>
                <NavLink to="/intro">Giới thiệu</NavLink>
                <NavLink to="/products">Sản phẩm</NavLink>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="footer-copyright ">&copy;Copyright, Da Nang 14-05-2022</div>

    </div>
  );
}

export default Footer;