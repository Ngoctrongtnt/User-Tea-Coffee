import React, { useEffect } from 'react';
import './headerAdmin.scss';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.webp'
import { useDispatch, useSelector } from 'react-redux';
import { actLogout } from '../../../Redux/actions/actionAuthAdmin';
import { Popover, Badge, Image, Avatar } from 'antd';
import { loadCommentStart } from '../../../Redux/actions/commentAction';
import { loadOrderStart } from '../../../Redux/actions/orderAction';


const HeaderAdmin = ({ handleToggle }) => {
    const { profile } = useSelector(state => state.authAdmin)
    const dispatch = useDispatch();
    const { comments } = useSelector(state => state.comments)
    const { orders } = useSelector(state => state.orders);

    const handleLogout = () => {
        setTimeout(() =>
            dispatch(actLogout())
            , 500)
    }
    useEffect(() => {
        dispatch(loadCommentStart())
        dispatch(loadOrderStart())
    }, [])

    const today = (new Date()).toLocaleDateString()
    const totalNewOrder = (orders.filter(item => item.status === "Chờ xác nhận")).length
    const newOrders = orders.filter(item => item.status === "Chờ xác nhận")
    const newCommentToday = comments.filter(item => item.createAt2 === today)
    const totalComment = newCommentToday.length

    //hien thi cac comment mơi nhat
    var newComments = (newCommentToday).reduceRight(function (previous, current) {
        previous.push(current);
        return previous;
    }, []);

    //hien thi cac orderNew mơi nhat
    var newOrder1 = (newOrders).reduceRight(function (previous, current) {
        previous.push(current);
        return previous;
    }, []);


    const content = (
        <>
            <Link to={`/adminUI/admins/detail/${profile.id}`}>
                <p className="profile">Profile</p>
            </Link>
            <p className="logout" onClick={handleLogout}>Logout</p>
        </>
    );
    const header = (
        <div className="profile-header">
            <Image
                width={100}
                src={profile.avatar}
            />
            <span>{profile.fullname}</span>
            <span className="profile-role">{profile.role}</span>
        </div>
    )
    const comment = (
        <>
            {newComments && newComments.map((item, index) => {
                return (
                    <div key={index} className="newComments">
                        <Image
                            width={30}
                            src={item.avatar}
                        />
                        <span className="username">{item.userName}</span>{' '}đã bình luận về <span>{item.product.productName}</span>
                        <div className="createAt d-flex justify-content-end">
                            <span>{item.createAt}</span>
                        </div>
                    </div>
                )
            })}
        </>
    );
    const newOrder = (
        <>
            {newOrder1 && newOrder1.map((item, index) => {
                return (
                    <div key={index} className="neworders">
                        <Link to={`/adminUI/orders/detail/${item.id}`}>
                            <Avatar
                                style={{
                                    backgroundColor: '#87d068',
                                    width: 7,
                                    height: 10,
                                    paddingRight: 10,
                                    marginRight: 10
                                }}
                            />
                            <span>{item.fullname}</span> đã đặt một đơn hàng mới.
                        </Link>
                        <div className="createAt d-flex justify-content-end">
                            <span>{item.createAt}</span>
                        </div>
                    </div>
                )
            })}
        </>
    )

    return (
        <div className="container-fluid">
            <div className="row navbar  fixed-top flex-md-nowrap p-0 shadow">
                <div className="col-md-12 d-flex justify-content-between col-12">
                    <div className="navbar-toggle d-md-none" onClick={handleToggle}>
                        <i className="fas fa-bars" id="btn"></i>
                    </div>
                    <div className="navbar-brand ">
                        <Link to='/adminUI'>
                            <img src={logo} alt="Tee and coffee" />
                        </Link>
                    </div>
                    <div className="user-container">
                        <div className="notification">
                            <Popover placement="bottomLeft" title="Đơn hàng mới" content={newOrder} trigger="click">
                                <Badge count={totalNewOrder}>
                                    <i className="fas fa-cart-plus"></i>
                                </Badge>
                            </Popover>
                            <Popover placement="bottomLeft" title="Bình luận mới" content={comment} trigger="click">
                                <Badge count={totalComment}>
                                    <i className="fas fa-comments"></i>
                                </Badge>
                            </Popover>
                        </div>
                        <Popover placement="bottomRight" title={header} content={content} trigger="click">
                            <span className="avatar mr-2 "><img src={profile.avatar} /></span>
                        </Popover>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderAdmin;