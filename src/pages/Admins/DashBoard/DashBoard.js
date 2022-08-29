import { Tabs, Calendar } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TopPage from '../../../layouts/AdminLayout/Toppage/TopPage';
import { loadCommentStart } from '../../../Redux/actions/commentAction';
import { loadOrderStart } from '../../../Redux/actions/orderAction';
import { loadProductStart } from '../../../Redux/actions/productAction';
import { loadUsersUIStart } from '../../../Redux/actions/userUIAction';
import CommentTable from './CommentTable/CommentTable';
import './dashboard.scss';
import LineChartJS from './LineChart/LineChart';
import PieChartJS from './PieChart/PieChart';
import TableOrder from './TableOrders/TableOrder';
import { dataYear, dataMonth } from './Data';
import Bestseller from './Bestseller/Bestseller';

const { TabPane } = Tabs;
const DashBoard = () => {
    const { usersUI } = useSelector(state => state.usersUI);
    const { products } = useSelector(state => state.products);
    const { orders } = useSelector(state => state.orders);
    const { comments } = useSelector(state => state.comments);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUsersUIStart());
        dispatch(loadProductStart());
        dispatch(loadOrderStart());
        dispatch(loadCommentStart());
    }, []);

    const orderNew = (orders.filter(item => item.status === "Chờ xác nhận")).length


    return (
        <div className="container-fluid">
            <TopPage title="Dashboard" />
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className="p-3 list-box">
                        <div className="small-box d-sm-6 ">
                            <div className="icon">
                                <i className="fas fa-users"></i>
                            </div>
                            <div className="inner">
                                <h4 className="text-primary">{usersUI.length}</h4>
                                <p>Thành viên mới</p>
                            </div>

                            <div className="box-footer">
                                <Link to="/adminUI/usersUI"> More info <i className="fas fa-arrow-circle-right"></i></Link>
                            </div>
                        </div>
                        <div className=" small-box">
                            <div className="icon">
                                <i className="fas fa-cart-plus"></i>
                            </div>
                            <div className="inner">
                                <h4 className="text-danger">{orderNew}</h4>
                                <p>Đơn hàng mới</p>
                            </div>
                            <Link to="/adminUI/orders"> More info <i className="fas fa-arrow-circle-right"></i></Link>
                        </div>
                        <div className=" small-box">
                            <div className="icon">
                                <i className="fas fa-carrot"></i>
                            </div>
                            <div className="inner">
                                <h4 className="text-success">{products.length}</h4>
                                <p>Tống số sản phẩm</p>
                            </div>

                            <div className="box-footer">
                                <Link to="/adminUI/products"> More info <i className="fas fa-arrow-circle-right"></i></Link>
                            </div>
                        </div>
                        <div className=" small-box">
                            <div className="icon">
                                <i className="fas fa-comments"></i>
                            </div>
                            <div className="inner">
                                <h4 className="text-info">{comments.length}</h4>
                                <p>Bình luận</p>
                            </div>

                            <div className="box-footer">
                                <Link to="/adminUI/order/new"> More info <i className="fas fa-arrow-circle-right"></i></Link>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-6 col-12 px-0">
                    <div className="calendar p-3">
                        <Calendar fullscreen={false} />
                    </div>
                </div>
            </div>

            <div className="row my-5">
                <div className="col-md-8 col-12 pl-0">
                    <div className="linechart p-3">
                        <h5>Đồ thị doanh thu</h5>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="Doanh thu 10 ngày gần nhất" key="1">
                                <LineChartJS data={dataMonth} />
                            </TabPane>
                            <TabPane tab="Doanh thu trong năm" key="2">
                                <LineChartJS data={dataYear} />
                            </TabPane>
                        </Tabs>
                    </div>

                </div>
                <div className="col-md-4 col-12 piechart p-4">
                    <h5>Đồ thị trạng thái đơn hàng</h5>
                    <PieChartJS orders={orders} />
                </div>
            </div>
            <div className="row my-5">
                <div className="col-md-4 col-12 p-4 product-store">
                    <h5 className="mb-4">Top sản phẩm bán chạy</h5>
                    {products && products.slice(0, 6).map((product, index) => {
                        return (
                            <Bestseller orders={orders} product={product} key={index} />
                        )
                    })}
                </div>
                <div className="col-md-8 col-12 pr-0">
                    <div className="user-comment p-3">

                        <h4>Bình luận khách hàng</h4>
                        <CommentTable comments={comments} />
                    </div>
                </div>

            </div>
            <div className="row my-5">
                <div className="col-md-12 col-12 info-user p-4">
                    <h4>Bảng thông tin Order</h4>
                    <TableOrder />
                </div>
            </div>
        </div>
    );
};

export default DashBoard;