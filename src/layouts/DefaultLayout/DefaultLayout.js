import React from 'react';
import Header from '../../components/UserHomePage/Header/Header';
import Footer from '../../components/UserHomePage/Footer/Footer';
import BackToTop from '../../pages/HomePage/BackToTop/BackToTop';


const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <BackToTop />
    </>
  );
};

export default DefaultLayout;