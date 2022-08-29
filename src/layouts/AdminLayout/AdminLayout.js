import React, { useState } from 'react';
import HeaderAdmin from './HeaderAdmin/HeaderAdmin';
import SiderBarAdmin from './SiderBarAdmin/SiderBarAdmin';
import './adminLayout.scss';

const AdminLayout = ({ children }) => {
    const [visible, setVisible] = useState(false);
    const handleToggle = () => {
        setVisible(!visible)
    }

    return (
        <>
            <HeaderAdmin handleToggle={handleToggle} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 siderBar">
                        <div className="sider-bar">
                            <SiderBarAdmin />
                        </div>
                    </div>
                    {visible &&
                        <div className="col-md-2">
                            <div className="sider-bar">
                                <SiderBarAdmin />
                            </div>
                        </div>
                    }
                    <div className="col-md-10 ">
                        <div className="main">
                            {children}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AdminLayout;