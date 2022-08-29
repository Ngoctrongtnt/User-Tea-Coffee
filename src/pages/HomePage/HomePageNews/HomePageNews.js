import React from 'react';
import imgnews1 from '../../../assets/images/homepage/news/untitled-1.jpg'
import imgnews2 from '../../../assets/images/homepage/news/untitled-2.jpg'
import imgnews3 from '../../../assets/images/homepage/news/untitled-3.jpg'
import './HomePageNews.scss'
const HomePageNews = () => {
  return (
    <div className="home-page-news">
      <div className="container">
        <div className="news-title">
          <h1>TIN TỨC NỔI BẬT</h1>
        </div>
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="card" >
              <img src={imgnews1} className="card-img-top" alt="imgnews1" />
              <div className="card-body">
                <h4 className="card-title">Nhâm nhi cà phê bao lâu nhưng bạn tận mắt nhìn kỹ xem hạt cà phê chưa?
                </h4>
                <p className="card-text">Cốc cafe vị đăng đắng, lẫn thêm chút ngọt bùi của sữa đặc sao mà gây nghiện đến thế. Không chỉ cuốn hút ở mùi vị, một cốc cafe sáng còn giúp ngày mới tràn đầy năng lượng với người trẻ, sẵn sàng...</p>
                <a href="#" className="stretched-link"></a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card" >
              <img src={imgnews2} className="card-img-top" alt="imgnews2" />
              <div className="card-body">
                <h4 className="card-title">Nhâm nhi cà phê bao lâu nhưng bạn tận mắt nhìn kỹ xem hạt cà phê chưa?</h4>
                <p className="card-text">Cốc cafe vị đăng đắng, lẫn thêm chút ngọt bùi của sữa đặc sao mà gây nghiện đến thế. Không chỉ cuốn hút ở mùi vị, một cốc cafe sáng còn giúp ngày mới tràn đầy năng lượng với người trẻ, sẵn sàng...</p>
                <a href="#" className="stretched-link"></a>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card" >
              <img src={imgnews3} className="card-img-top" alt="imgnews3" />
              <div className="card-body">
                <h4 className="card-title">Nhâm nhi cà phê bao lâu nhưng bạn tận mắt nhìn kỹ xem hạt cà phê chưa?</h4>
                <p className="card-text">Cốc cafe vị đăng đắng, lẫn thêm chút ngọt bùi của sữa đặc sao mà gây nghiện đến thế. Không chỉ cuốn hút ở mùi vị, một cốc cafe sáng còn giúp ngày mới tràn đầy năng lượng với người trẻ, sẵn sàng...</p>
                <a href="#" className="stretched-link"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageNews;