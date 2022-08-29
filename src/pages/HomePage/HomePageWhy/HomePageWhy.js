import React from 'react';
import whyicon1 from '../../../assets/images/homepage/icon_why_1.jpg'
import whyicon2 from '../../../assets/images/homepage/icon_why_2.jpg'
import whyicon3 from '../../../assets/images/homepage/icon_why_3.jpg'
import './HomePageWhy.scss'
const HomePageWhy = () => {
  return (
    <section className="why">
      <div className="container">
        <div className="row">
          <div className="why-left col-xl-6 col-lg-6 col-12">
            <div className="why-title-header">
              <h1 className="why-title">TẠI SAO CHỌN CHÚNG TÔI</h1>
              <p className="why-desc">Với những nghệ nhân rang tâm huyết và đội ngũ tài năng cùng những câu
                chuyện trà đầy cảm hứng, ngôi nhà Tea House là
                không gian dành riêng cho những ai trót yêu say đắm hương vị của những lá trà tuyệt hảo.</p>
            </div>
            <div className="why-title-item">
              <div className="col-item-srv">
                <div className="service-item-ed">
                  <div className="why-item-icon">
                    <img src={whyicon1} alt="whyicon1" />
                  </div>
                  <div className="why-item-content">
                    <span className="content-title">Giá cả phải chăng</span><br />
                    <span className="content-desc">Cam kết chỉ cung cấp cà phê có nguồn gốc được kiểm soát chất lượng</span>
                  </div>
                </div>
              </div>
              <div className="col-item-srv">
                <div className="service-item-ed">
                  <div className="why-item-icon">
                    <img src={whyicon2} alt="whyicon1" />
                  </div>
                  <div className="why-item-content">
                    <span className="content-title">Hương vị tuyệt hảo</span><br />
                    <span className="content-desc">Những đọt trà được lựa chọn cẩn thận ngay từ lúc đang ngâm mình trong sương</span>
                  </div>
                </div>
              </div>
              <div className="col-item-srv">
                <div className="service-item-ed">
                  <div className="why-item-icon">
                    <img src={whyicon3} alt="whyicon1" />
                  </div>
                  <div className="why-item-content">
                    <span className="content-title">Sản phẩm tự nhiên</span><br />
                    <span className="content-desc">Cam kết chỉ cung cấp lá trà có nguồn gốc được kiểm soát chất lượng chặt</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="why-right col-xl-6 col-lg-6 col-12"></div>
        </div>
      </div>
    </section >
  );
};

export default HomePageWhy;