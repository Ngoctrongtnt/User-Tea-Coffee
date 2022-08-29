import React from 'react';


export const adminRouter = [
    //dashboard
    {
        isExact: true,
        path: '/adminUI',
        component: React.lazy(() => import('../pages/Admins/DashBoard/DashBoard'))
    },
    //admin
    {
        isExact: true,
        path: '/adminUI/admins',
        component: React.lazy(() => import('../pages/Admins/UserAdmin/UserAdmin'))
    },
    {
        isExact: true,
        path: '/adminUI/admins/create',
        component: React.lazy(() => import('../pages/Admins/UserAdmin/CreateNewUserAdmin'))
    },
    {
        isExact: true,
        path: '/adminUI/admins/edit/:id',
        component: React.lazy(() => import('../pages/Admins/UserAdmin/UpdateUserAdmin'))
    },
    {
        isExact: true,
        path: '/adminUI/admins/detail/:id',
        component: React.lazy(() => import('../pages/Admins/UserAdmin/DetailUserAdmin'))
    },
    //User Account
    {
        isExact: true,
        path: '/adminUI/userUI',
        component: React.lazy(() => import('../pages/Admins/UserAccount/UserAccount'))
    },
    {
        isExact: true,
        path: '/adminUI/userUI/detail/:id',
        component: React.lazy(() => import('../pages/Admins/UserAccount/DetailUserUI'))
    },
    //Products
    {
        isExact: true,
        path: '/adminUI/products',
        component: React.lazy(() => import('../pages/Admins/ProductAdmins/Products'))
    },
    {
        isExact: true,
        path: '/adminUI/products/create',
        component: React.lazy(() => import('../pages/Admins/ProductAdmins/CreateNewProduct'))
    },
    {
        isExact: true,
        path: '/adminUI/products/edit/:id',
        component: React.lazy(() => import('../pages/Admins/ProductAdmins/UpdateProduct'))
    },
    {
        isExact: true,
        path: '/adminUI/products/detail/:id',
        component: React.lazy(() => import('../pages/Admins/ProductAdmins/DetailProduct'))
    },
    //Category
    {
        isExact: true,
        path: '/adminUI/categories',
        component: React.lazy(() => import('../pages/Admins/CategoryAdmin/Categories'))
    },
    {
        isExact: true,
        path: '/adminUI/categories/create',
        component: React.lazy(() => import('../pages/Admins/CategoryAdmin/CreateNewCategory'))
    },
    {
        isExact: true,
        path: '/adminUI/categories/edit/:id',
        component: React.lazy(() => import('../pages/Admins/CategoryAdmin/UpdateCategory'))
    },
    {
        isExact: true,
        path: '/adminUI/categories/detail/:id',
        component: React.lazy(() => import('../pages/Admins/CategoryAdmin/DetailCategory'))
    },
    //Order
    {
        isExact: true,
        path: '/adminUI/orders',
        component: React.lazy(() => import('../pages/Admins/Orders/Orders'))
    },
    {
        isExact: true,
        path: '/adminUI/orders/create',
        component: React.lazy(() => import('../pages/Admins/Orders/CreateOrder'))
    },
    {
        isExact: true,
        path: '/adminUI/orders/edit/:id',
        component: React.lazy(() => import('../pages/Admins/Orders/UpdateOrder'))
    },
    {
        isExact: true,
        path: '/adminUI/orders/detail/:id',
        component: React.lazy(() => import('../pages/Admins/Orders/DetailOrder'))
    },
    //Banner Top
    {
        isExact: true,
        path: '/adminUI/banners',
        component: React.lazy(() => import('../pages/Admins/BannerTop/BannerTop'))
    },
    {
        isExact: true,
        path: '/adminUI/banners/create',
        component: React.lazy(() => import('../pages/Admins/BannerTop/CreateBannerTop'))
    },
    {
        isExact: true,
        path: '/adminUI/banners/edit/:id',
        component: React.lazy(() => import('../pages/Admins/BannerTop/UpdateBannerTop'))
    },
    {
        isExact: true,
        path: '/adminUI/banners/detail/:id',
        component: React.lazy(() => import('../pages/Admins/BannerTop/DetailBannerTop'))
    },
    //Slider bottom
    {
        isExact: true,
        path: '/adminUI/sliders',
        component: React.lazy(() => import('../pages/Admins/SliderBottom/SliderBot'))
    },
    {
        isExact: true,
        path: '/adminUI/sliders/create',
        component: React.lazy(() => import('../pages/Admins/SliderBottom/CreateSliderBot'))
    },
    {
        isExact: true,
        path: '/adminUI/sliders/detail/:id',
        component: React.lazy(() => import('../pages/Admins/SliderBottom/DetailSliderBot'))
    },
    //Slider bottom
    {
        isExact: true,
        path: '/adminUI/comments',
        component: React.lazy(() => import('../pages/Admins/Comments/Comments'))
    },
    {
        isExact: true,
        path: '/adminUI/comments/detail/:id',
        component: React.lazy(() => import('../pages/Admins/Comments/Comments'))
    },
]