import React from 'react';
import traphucbontu from '../../../../assets/images/homepage/ListProductsCategory/tea-hot/tradautay.jpg';
import './Cake.scss'
const TeaHot = () => {
  return (
    <>
      <div className="products-gr row-cols-4 row-cols-md-4 g-4">
        <div className="col">
          <div className="card">
            <div className="card-img"><img src={traphucbontu} class="card-img-top" alt="traphucbontu" /></div>
            <div className="card-body">
              <h4 className="card-title">Trà Phúc Bồn Tử</h4>
              <p className="card-text">Giá: 40.000đ</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-img"><img src={traphucbontu} class="card-img-top" alt="traphucbontu" /></div>
            <div className="card-body">
              <h4 className="card-title">Trà Phúc Bồn Tử</h4>
              <p className="card-text">Giá: 40.000đ</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-img"><img src={traphucbontu} class="card-img-top" alt="traphucbontu" /></div>

            <div className="card-body">
              <h4 className="card-title">Trà Phúc Bồn Tử</h4>
              <p className="card-text">Giá: 40.000đ</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <div className="card-img"><img src={traphucbontu} class="card-img-top" alt="traphucbontu" /></div>

            <div className="card-body">
              <h4 className="card-title">Trà Phúc Bồn Tử</h4>
              <p className="card-text">Giá: 40.000đ</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeaHot;