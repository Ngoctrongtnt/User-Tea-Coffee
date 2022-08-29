import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getCategoryById } from '../../../apis/categoryApi';
import TopPage from '../../../layouts/AdminLayout/Toppage/TopPage';
import '../UserAdmin/detailsUserAdmin.scss'

const initialState = {
    categoryName: "",
    description: "",
    url: ""
}

const DetailCategory = () => {
    let history = useHistory();
    const [detailsCategory, setDetailsCategory] = useState(initialState);
    const { id } = useParams();

    useEffect(() => {
        getDataCategoryId(id);
    }, [id])

    const getDataCategoryId = async (id) => {
        try {
            const data = await getCategoryById(id);
            data && setDetailsCategory({
                id: data.id,
                categoryName: data.categoryName,
                description: data.description,
                url: data.url

            });
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <TopPage title="Quản lý danh mục sản phẩm" title1="Chi tiết danh mục" />
            <span className="back-admin-user " onClick={() => { history.push('/adminUI/categories') }}>
                <i className="fas fa-arrow-left"></i>&nbsp;
                Quay lại
            </span>
            <h5 className="text-uppercase text-center mb-2">Chi tiết danh mục</h5>
            <div className="detail-container">
                <div className="detailUser px-3 pt-1">
                    <div className="detailCategory">
                        <img src={detailsCategory.url} alt="" />
                    </div>
                    <div className="detailUser__info">
                        <h3>{detailsCategory.categoryName}</h3>
                        <p><span>Id:</span> {detailsCategory.id}</p>
                        <p><span>Mô tả:</span> {detailsCategory.description}</p>

                    </div>
                </div>
            </div>
        </>
    );
};

export default DetailCategory;