import Slider from "react-slick";
import React from 'react';
import './HomePageBanner.scss'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadBannerStart } from "../../../Redux/actions/bannerAction";


const HomePageBanner = () => {
  const { banners } = useSelector(state => state.banners);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBannerStart())
  }, [])

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000,
    speed: 5000
  };
  return (
    <section className="banner">
      <Slider {...settings}>
        {banners && banners.map((item, index) => {
          return (
            <div key={index} className="banner-container">
              <div className="container">
                <div className="banner-content">
                  <h1 className="banner-title">{item.title}</h1>
                  <p className="banner-des">{item.description}</p>
                </div>
              </div>
              <h3>
                <img src={item.url} />
              </h3>
            </div>
          )
        })}
      </Slider>
    </section >

  );
};

export default HomePageBanner;