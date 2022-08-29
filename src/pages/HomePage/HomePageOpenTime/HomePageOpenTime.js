import React from 'react';
import './HomePageOpenTime.scss'
const HomePageOpenTime = () => {
  return (
    <div className="home-page-open-time">
      <div className="container">
        <div className="row">
          <div className="col-md-7 left">
            <div className="left-module">
              <div className="module-title">
                <h2>THỜI GIAN MỞ CỬA</h2>
                <p>“Cà phê nhé" - Một lời hẹn rất riêng của người Việt.
                  Một lời ngỏ mộc mạc để mình ngồi lại bên nhau và sẻ chia câu chuyện của riêng mình.
                </p>
              </div>
              <div className="module-content">
                <span className="time">T2 - T6: 8h30 - 21h30</span>
                <span className="time">T7 - CN: 8h00 - 22h00</span>
              </div>
            </div>
          </div>
          <div className="col-md-5 bg_right d-md-block d-none"></div>
        </div>
      </div>

    </div>
  );
};

export default HomePageOpenTime;