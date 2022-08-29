import React, { useEffect } from 'react';
import "./HomePageListImg.scss"
import Slider from "react-slick";
import { useDispatch, useSelector } from 'react-redux';
import { loadSliderStart } from '../../../Redux/actions/sliderBotAction';

const HomePageListImg = () => {
  const { sliders } = useSelector(state => state.sliders);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSliderStart())
  }, [])

  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 6000,
  };
  return (
    <div className="slider-bottom">
      <Slider {...settings}>
        {sliders && sliders.map((item, index) => {
          return (
            <h3 key={index}>
              <img src={item.url} className="card-img-top" alt="seccategory4" />
            </h3>
          )
        })}
      </Slider>
    </div >
  );
};

export default HomePageListImg;