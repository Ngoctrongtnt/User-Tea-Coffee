import React from 'react';
import { Redirect } from 'react-router-dom';
import AdminLayout from '../../layouts/AdminLayout/AdminLayout';

const PrivateRouter = ({ children, isAuthAdmin }) => {

    return (
        <>
            {!isAuthAdmin && <Redirect to='/adminUI/login' />}
            <AdminLayout>{children}</AdminLayout>
        </>
    );
};

export default PrivateRouter;