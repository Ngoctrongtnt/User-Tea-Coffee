import React from 'react';
import './toppage.scss'

const TopPage = ({ title, title1 }) => {
    return (
        <div className="header-dashboard">
            <h4 className="text-uppercase fw-bold">{title}</h4>  <h6 className="text-uppercase"> {title1} </h6>
        </div>
    );
};

export default TopPage;