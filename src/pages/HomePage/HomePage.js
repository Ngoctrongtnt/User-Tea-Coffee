import React from 'react';
import HomePageBanner from './HomePageBanner/HomePageBanner';
import HomePageListProducts from './HomePageListProducts/HomePageListProducts';
import HomePageWhy from './HomePageWhy/HomePageWhy';
import HomePageMenus from './HomePageMenus/HomePageMenus';
import HomePageOpenTime from './HomePageOpenTime/HomePageOpenTime';
import HomePageNews from './HomePageNews/HomePageNews';
import HomePageListImg from './HomePageListImg/HomePageListImg';

const HomePage = () => {
  return (
    <>
      <HomePageBanner />
      <HomePageListProducts />
      <HomePageWhy />
      <HomePageMenus />
      <HomePageOpenTime />
      <HomePageNews />
      <HomePageListImg />

    </>
  );
};

export default HomePage;