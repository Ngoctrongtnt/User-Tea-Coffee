import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getBannerById } from '../../../apis/bannerApi';
import TopPage from '../../../layouts/AdminLayout/Toppage/TopPage';
import '../UserAdmin/detailsUserAdmin.scss';
import './detailbanner.scss';

const initialState = {
    title: "",
    thumnailUrl: ""
}

const DetailBannerTop = () => {
    let history = useHistory();
    const [detailsUser, setDetailsUser] = useState(initialState);
    const { id } = useParams();

    useEffect(() => {
        getDataUserId(id);
    }, [id])

    const getDataUserId = async (id) => {
        try {
            const data = await getBannerById(id);
            data && setDetailsUser({
                id: data.id,
                title: data.title,
                url: data.url,

            });
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <TopPage title="Quản lý banner" title1="Chi tiết banner" />
            <span className="back-admin-user " onClick={() => { history.push('/adminUI/banners') }}>
                <i className="fas fa-arrow-left"></i>&nbsp;
                Quay lại
            </span>
            <h5 className="text-uppercase text-center mb-2">chi tiết banner</h5>
            <div className="detail">
                <div className="detail__info">
                    <h1>{detailsUser.title}</h1>
                </div>
                <div className="detail__imgs">
                    <img src={detailsUser.url} />
                </div>
            </div>
        </>
    );
};

export default DetailBannerTop;