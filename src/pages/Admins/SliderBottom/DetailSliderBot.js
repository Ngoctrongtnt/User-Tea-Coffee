import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import TopPage from '../../../layouts/AdminLayout/Toppage/TopPage';
import './createSliderBot.scss';
import { getSliderById } from '../../../apis/SliderBotApi';

const initialState = {
    title: "",
    thumnailUrl: ""
}

const DetailSliderBot = () => {
    let history = useHistory();
    const [detailsSlider, setDetailsSlider] = useState(initialState);
    const { id } = useParams();

    useEffect(() => {
        getDataSliderId(id);
    }, [id])

    const getDataSliderId = async (id) => {
        try {
            const data = await getSliderById(id);
            data && setDetailsSlider({
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
            <TopPage title="Quản lý Slider bottom" title1="Chi tiết slider" />
            <span className="back-admin-user " onClick={() => { history.push('/adminUI/sliders') }}>
                <i className="fas fa-arrow-left"></i>&nbsp;
                Quay lại
            </span>
            <h5 className="text-uppercase text-center mb-2">chi tiết slider</h5>
            <div className="detail">
                <div className="detail__info">
                    <h2>{detailsSlider.title}</h2>
                </div>
                <div className="detail__img">
                    <img src={detailsSlider.url} />
                </div>
            </div>
        </>
    );
};

export default DetailSliderBot;