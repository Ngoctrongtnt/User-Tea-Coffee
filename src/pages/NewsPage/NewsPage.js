import React from 'react';
import './NewsPage.scss'
import hinhanh1 from '../../assets/images/homepage/news/untitled-1.jpg'
import hinhanh7 from '../../assets/images/newpage/untitled-5.jpg'
import hinhanh8 from '../../assets/images/newpage/untitled-6.jpg'
import hinhanh9 from '../../assets/images/newpage/untitled-2.jpg'
import hinhanh10 from '../../assets/images/newpage/untitled-3.jpg'

import hinhanh2 from '../../assets/images/newpage/pictureblog_1.jpg'
import hinhanh3 from '../../assets/images/newpage/pictureblog_2.jpg'
import hinhanh4 from '../../assets/images/newpage/pictureblog_3.jpg'
import hinhanh5 from '../../assets/images/newpage/pictureblog_4.jpg'
import hinhanh6 from '../../assets/images/newpage/pictureblog_5.jpg'
import BreadCrumb from './../../components/UserHomePage/Main/BreadCrumb';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
const NewsPage = () => {
  return (
    <div className="newspage">
      <div className="container">
        <BreadCrumb title="Tin Tức" />
        <div className="row">
          <div className="newspage-left col-md-9 col-12">
            <div className="newspage-left-big">
              <div className="card" >
                <img src={hinhanh1} alt="hinhanh1" />
                <div className="card-body">
                  <h4 className="card-text card-text-big text-upper">
                    Nhâm nhi cà phê bao lâu nhưng bạn tận mắt nhìn kỹ xem hạt cà phê chưa?
                  </h4>
                </div>
              </div><div className="card" >
                <img src={hinhanh7} alt="hinhanh1" />
                <div className="card-body">
                  <h4 className="card-text card-text-big text-upper">
                    Uống 1-4 tách cà phê mỗi ngày giúp bệnh nhân ung thư kéo dài sự sống
                  </h4>
                </div>
              </div>
            </div>
            <div className="newspage-left-small">
              <div className="card" >
                <img src={hinhanh1} class="card-img-left" alt="hinhanh1" />
                <div className="card-body">
                  <div className="card-text">
                    <h6 className="small-text-title text-upper">Uống trà có mất ngủ không?</h6>
                    <p className="text-content">Đối với nhiều người, một ngày mới chỉ có thể khởi đầu tốt đẹp...</p>

                  </div>
                </div>
              </div>
              <div className="card" >
                <img src={hinhanh9} alt="hinhanh1" />
                <div className="card-body">
                  <div className="card-text">
                    <h6 className="small-text-title text-upper">Uống trà có mất ngủ không?</h6>
                    <p className="text-content">Đối với nhiều người, một ngày mới chỉ có thể khởi đầu tốt đẹp...</p>
                  </div>
                </div>
              </div>
              <div className="card" >
                <img src={hinhanh10} alt="hinhanh1" />
                <div className="card-body">
                  <div className="card-text">
                    <h6 className="small-text-title text-upper">Uống trà có mất ngủ không?</h6>
                    <p className="text-content">Đối với nhiều người, một ngày mới chỉ có thể khởi đầu tốt đẹp...</p></div>
                </div>
              </div>
              <div className="card" >
                <img src={hinhanh8} alt="hinhanh1" />
                <div className="card-body">
                  <div className="card-text">
                    <h6 className="small-text-title text-upper">Uống trà có mất ngủ không?</h6>
                    <p className="text-content">Đối với nhiều người, một ngày mới chỉ có thể khởi đầu tốt đẹp...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="newspage-right col-md-3 d-md-block d-none">
            <div className="category-news">
              <h4>DANH MỤC TIN TỨC</h4>
              <p className="menu-title-line"></p>
              <div className="menu1 ">
                <ul id="main-menu">
                  <li>
                    <NavLink exact to="/" activeClassName="selected">
                      <i class="fas fa-angle-right"></i>&ensp;Trang chủ
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/intro" activeClassName="selected">
                      <i class="fas fa-angle-right"></i>&ensp;Giới thiệu
                    </NavLink>
                  </li>
                  <li className="hash-child">
                    <NavLink to="/products" activeClassName="selected">
                      <i class="fas fa-angle-right"></i>&ensp;Sản phẩm
                    </NavLink>
                    <ul className="sub-menu">
                      <li className="hash-child">
                        <Link to="/products/coffees">Cà Phê</Link>
                      </li>
                      <li className="hash-child">
                        <Link to="/products/smoothies">Smoothies</Link>
                      </li>
                      <li>
                        <Link to="/products/fruitteas">Trà hoa quả</Link>
                      </li>
                      <li>
                        <Link to="/products/milkteas">Trà sữa</Link>
                      </li>
                      <li>
                        <Link to="/products/teahots">Trà nóng</Link>
                      </li>
                      <li>
                        <Link to="/products/cakes">Bánh Ngọt</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <NavLink to="/news" activeClassName="selected">
                      <i class="fas fa-angle-right"></i>&ensp;Tin tức
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contacts" activeClassName="selected">
                      <i class="fas fa-angle-right"></i>&ensp;Liên hệ
                    </NavLink>
                  </li>
                </ul>
              </div >
            </div>
            <div className="about-news">
              <h4 className="menu-title"> VỀ CHÚNG TÔI</h4>
              <p className="menu-title-line"></p>
              <div className="card" >
                <img src={hinhanh1} className="card-hinhanh-top" alt="..." />
                <div className="card-body">
                  {/* <h5 className="card-title">Card title</h5> */}
                  <p className="card-text">
                    Tea House được sinh ra từ niềm đam mê bất tận với lá trà Việt Nam.
                    Chúng tôi đã không ngừng mang đến những sản phẩm trà thơm ngon,
                    sánh đượm trong không gian thoải mái và lịch sự với mức giá hợp lý.</p>
                  <Link to="/newspage" className="btn btn-success">Đọc Tiếp</Link>
                </div>
              </div>

            </div>
            <div className="about-hinhanh">
              <h4 className="menu-title">HÌNH ẢNH TEAHOSUE</h4>
              <p className="menu-title-line"></p>
              <img className="news-hinhanh-content" src={hinhanh2} alt="hinhanh2" />
              <img className="news-hinhanh-content" src={hinhanh3} alt="hinhanh3" />
              <img className="news-hinhanh-content" src={hinhanh4} alt="hinhanh4" />

              <img className="news-hinhanh-content" src={hinhanh5} alt="hinhanh5" />
              <img className="news-hinhanh-content" src={hinhanh4} alt="hinhanh4" />
              <img className="news-hinhanh-content" src={hinhanh6} alt="hinhanh6" />
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default NewsPage;