import React from 'react';

export const userRouter = [
    {
        isExact: true,
        path: '/login',
        component: React.lazy(() => import('../pages/Account/Login/Login'))
    },
    {
        isExact: true,
        path: '/register',
        component: React.lazy(() => import('../pages/Account/Register/Register'))
    },
    {
        isExact: true,
        path: '/userUI/settings',
        component: React.lazy(() => import('../pages/Account/SettingUserUI/SettingUserUI'))
    },
    {
        isExact: true,
        path: '/',
        component: React.lazy(() => import('../pages/HomePage/HomePage'))
    },
    {
        isExact: true,
        path: '/intro',
        component: React.lazy(() => import('../pages/IntroPage/IntroPage'))
    },
    {
        isExact: true,
        path: '/products',
        component: React.lazy(() => import('../pages/Products/Products'))
    },
    {
        isExact: true,
        path: '/products/coffees',
        component: React.lazy(() => import('../components/Categories/Coffee/Coffee'))
    },
    {
        isExact: true,
        path: '/products/smoothies',
        component: React.lazy(() => import('../components/Categories/Smoothies/Smoothies'))
    },
    {
        isExact: true,
        path: '/products/fruitteas',
        component: React.lazy(() => import('../components/Categories/FruitTea/FruitTeas'))
    },
    {
        isExact: true,
        path: '/products/milkteas',
        component: React.lazy(() => import('../components/Categories/MilkTea/MilkTeas'))
    },
    {
        isExact: true,
        path: '/products/teahots',
        component: React.lazy(() => import('../components/Categories/TeaHot/TeaHots'))
    },
    {
        isExact: true,
        path: '/products/cakes',
        component: React.lazy(() => import('../components/Categories/Cake/Cakes'))
    },
    {
        isExact: true,
        path: '/products/detail/:id',
        component: React.lazy(() => import('../components/UserHomePage/Product/DetailProduct'))
    },

    {
        isExact: true,
        path: '/news',
        component: React.lazy(() => import('../pages/NewsPage/NewsPage'))
    },
    {
        isExact: true,
        path: '/contacts',
        component: React.lazy(() => import('../pages/Contacts/Contacts'))
    },
    {
        isExact: true,
        path: '/checkout',
        component: React.lazy(() => import('../pages/Checkout/Checkout'))
    },
    {
        isExact: true,
        path: '/cart',
        component: React.lazy(() => import('../pages/Cart/Cart'))
    },
    {
        isExact: true,
        path: '/checkout/success',
        component: React.lazy(() => import('../pages/Checkout/CheckoutSuccess'))
    },

]

