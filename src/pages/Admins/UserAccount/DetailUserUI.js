import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getUserUIById } from '../../../apis/userUIApi';
import TopPage from '../../../layouts/AdminLayout/Toppage/TopPage';
import { loadOrderStart } from '../../../Redux/actions/orderAction';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'antd';
import './detailUI.scss'
import HistoryOrder from '../../../components/UserHomePage/HistoryOrder/HistoryOrder';


const initialState = {
    fullname: "",
    email: "",
    passworld: "",
    birthday: "",
    address: "",
    phone: "",
    avatar: "",
    gender: "",
    userUiId: ""
}

const DetailUserUI = () => {
    const [detailUserUI, setDetailUserUI] = useState(initialState);
    const { orders, loading } = useSelector(state => state.orders)
    const { id } = useParams();
    let history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadOrderStart())
    }, [])

    useEffect(() => {
        getDataUserId(id);
    }, [id])

    const orderUser = orders.filter(item => item.userId === detailUserUI.userUiId)

    const getDataUserId = async (id) => {
        try {
            const data = await getUserUIById(id);
            data && setDetailUserUI({
                id: data.id,
                userUiId: data.userUiId,
                fullname: data.fullname,
                email: data.email,
                password: data.password,
                birthday: data.birthday,
                address: data.address,
                phone: data.phone,
                avatar: data.avatar,
                gender: data.gender,
            });
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <TopPage title="quản lý tài khoản khách hàng" title1="chi tiết tài khoản" />
            <span className="back-admin-user " onClick={() => { history.push('/adminUI/userUI') }}>
                <i className="fas fa-arrow-left"></i>&nbsp;
                Quay lại
            </span>
            <h5 className="text-uppercase text-center mb-2">Chi tiết tài khoản</h5>
            <div class="container rounded bg-white mt-5 mb-5">
                <div class="row">
                    <div class="col-md-3 border-right pr-3">
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                            <Image
                                width={250}
                                height={200}
                                src={detailUserUI.avatar}
                            />
                            <h5 class="font-weight-bold text-uppercase mt-3">{detailUserUI.fullname}</h5>
                        </div>
                    </div>
                    <div class="col-md-5 border-right">
                        <div class="p-3 py-5">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                            </div>
                            <div class="row mt-3">
                                <div class="col-md-12">
                                    <label class="labels">Họ và tên</label>
                                    <input disabled type="text" class="form-control" placeholder="Họ và tên" value={detailUserUI.fullname} />
                                </div>
                                <div class="col-md-12 mt-3">
                                    <label class="labels">Số điện thoại</label>
                                    <input disabled type="text" class="form-control" placeholder="Số điện thoại" value={detailUserUI.phone} />
                                </div>
                                <div class="col-md-12 mt-3">
                                    <label class="labels">Địa chỉ</label>
                                    <input disabled type="text" class="form-control" placeholder="Địa chỉ" value={detailUserUI.address} />
                                </div>
                                <div class="col-md-12 mt-3">
                                    <label class="labels">E-mail</label>
                                    <input disabled type="text" class="form-control" placeholder="E-mail" value={detailUserUI.email} />

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="p-3 py-5">
                            <div class="col-md-12 mt-3">
                                <label class="labels">Giới tính</label>
                                <input disabled type="text" class="form-control" placeholder="Giới tính" value={detailUserUI.gender} />
                            </div>
                            <div class="col-md-12 mt-3">
                                <label class="labels">Ngày sinh</label>
                                <input disabled type="date" class="form-control" placeholder="Ngày sinh" value={detailUserUI.birthday} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="table-order my-5">
                <h4>Lịch sử đặt hàng</h4>
                <HistoryOrder orderUser={orderUser} />
            </div>
        </>
    );
};

export default DetailUserUI;