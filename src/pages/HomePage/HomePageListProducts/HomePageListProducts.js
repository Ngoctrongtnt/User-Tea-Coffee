import React, { useEffect } from 'react';
import Slider from "react-slick";
import './HomePageListProducts.scss'
import { useDispatch, useSelector } from 'react-redux';
import { loadCategoryStart } from '../../../Redux/actions/categoryAction';
import { Link } from 'react-router-dom';
import { loadProductStart } from '../../../Redux/actions/productAction';


const HomePageListProducts = () => {
  const { categories } = useSelector(state => state.categories)
  const { products } = useSelector(state => state.products)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategoryStart());
    dispatch(loadProductStart());
  }, [])


  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };
  return (
    <section className="home-page-list-products">
      <div className="container">
        <h1 className="title"> DANH MỤC SẢN PHẨM </h1>
        <Slider {...settings}>
          {categories && categories.map((item) => {
            return (
              <div key={item.id} className="category">
                <Link to={`products/${item.category}`}>
                  <h3>
                    <img src={item.url} className="card-img-top" alt="seccategory4" />
                  </h3>
                  <h5 className="card-title">{item.categoryName}</h5>
                </Link>
              </div>
            )
          })}
        </Slider>
      </div>
    </section >

  );
};

export default HomePageListProducts;