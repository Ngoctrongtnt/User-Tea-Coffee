import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { getOrderById } from '../../../apis/OrderApi';
import TopPage from '../../../layouts/AdminLayout/Toppage/TopPage';
import { Image } from 'antd';
import './detailOrder.scss'

const initialState = {
    fullname: "",
    phoneNumber: "",
    orderId: "",
    status: "",
    cartProducts: "",
    totalPrice: "",
    createAt: ""

}

const DetailOrder = () => {
    let history = useHistory();
    const { id } = useParams();
    const [detailsOrder, setDetailsOrder] = useState(initialState);

    useEffect(() => {
        getDataOrderId(id);
    }, [id])

    const getDataOrderId = async (id) => {
        try {
            const data = await getOrderById(id);
            data && setDetailsOrder({
                fullname: data.fullname,
                phoneNumber: data.phoneNumber,
                orderId: data.orderId,
                status: data.status,
                cartProducts: data.cartProducts,
                totalPrice: data.totalPrice,
                createAt: data.createAt
            });
        } catch (error) {
            console.log(error);
        }
    }
    const checkStatus = () => {
        if (detailsOrder.status === "Chờ xác nhận") { return "New" }
        else if (detailsOrder.status === "Đang chuẩn bị") { return "Prepare" }
        else if (detailsOrder.status === "Đang vận chuyển") { return "Delivering" }
        else if (detailsOrder.status === "Giao thành công") { return "Success" }
        else if (detailsOrder.status === "Đã hủy") { return "Destroy" }
    }

    return (
        <>
            <TopPage title="Quản lý đơn hàng" title1="Chi tiết đơn hàng" />
            <span className="back-admin-user " onClick={() => { history.push('/adminUI/orders') }}>
                <i className="fas fa-arrow-left"></i>&nbsp;
                Quay lại
            </span>
            <h5 className="text-uppercase text-center my-4">chi tiết đơn hàng</h5>
            <div className="row detail my-5">
                <div className="col-md-4 detail__user">
                    <h3 class="text-uppercase">{detailsOrder.fullname}</h3>
                    <p><span>OrderId: </span>{detailsOrder.orderId}</p>
                    <p><span>Số ĐT: </span>{detailsOrder.phoneNumber}</p>
                    <p ><span >Trạng thái: </span><span className={checkStatus()}>{detailsOrder.status}</span></p>
                    <p><span>Ngày đặt: </span>{detailsOrder.createAt}</p>
                </div>
                <div className="col-md-12 detail__product table-responsive">
                    <h4>Danh sách sản phẩm order</h4>
                    <table className="table ">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Sản phẩm</th>
                                <th scope="col">Hình ảnh</th>
                                <th scope="col">Size</th>
                                <th scope="col">Số lượng</th>
                                <th scope="col">Giá tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {detailsOrder.cartProducts && (detailsOrder.cartProducts).map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.productName}</td>
                                        <td>
                                            <Image
                                                width={100}
                                                src={item.url}
                                            />
                                        </td>
                                        <td>{item.size}</td>
                                        <td>{item.quantity}</td>
                                        <td>{Number(item.priceNew).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <th colSpan="2">Tổng thanh toán:</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col" >{(detailsOrder.totalPrice).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </>
    );
};

export default DetailOrder;