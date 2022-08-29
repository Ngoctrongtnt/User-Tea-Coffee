import { Link } from 'react-router-dom';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyProduct, deCrease, deleteProduct } from '../../../Redux/actions/cartActions';
import { toast } from 'react-toastify';

const CartProduct = () => {
    const { cartProducts } = useSelector(state => state.cartProducts)
    const totalPrice = cartProducts && cartProducts.reduce((a, c) => a + c.quantity * c.priceNew, 0);
    const countCartItems = cartProducts.length
    const dispatch = useDispatch();

    const onDelete = (id) => {
        dispatch(deleteProduct(id))
        toast.success("Xóa sản phẩm thành công!");
    }

    const onDecrease = (product) => {
        dispatch(deCrease(product))
        toast.success("Xóa sản phẩm thành công!");
    }

    const onIncrease = (product) => {
        dispatch(buyProduct(product));
        toast.success("Thêm sản phẩm thành công!");
    }


    return (
        <div className="account-title dropdown ">
            <div className="hash-child">
                <span >
                    <Link to='/cart'>
                        <i className="fas fa-shopping-bag">
                            {countCartItems ? (
                                <span className="totalQuantity"> {countCartItems}</span>
                            ) : (
                                <span>0</span>
                            )}
                        </i>
                        <span className="produtc-cart">Giỏ Hàng</span>
                    </Link>
                </span>
                <ul className="sub-menu sub-cart">
                    <li>
                        <div className="modal-cart">
                            {cartProducts?.length === 0 ? <div className="nothing">Không có sản phẩm nào.</div> :
                                < >
                                    <div className="top--scroll nothing" id="style-2">
                                        {cartProducts && cartProducts.map((item, index) => (
                                            <div key={index} className="modal-cart__top" >
                                                <div className="modal-cart__top--img">
                                                    <img src={item.url} alt="" />
                                                </div>
                                                <div className="modal-cart__top--content">
                                                    <div className="content--title">
                                                        <span className="nothing">{item.productName}</span>
                                                        <br />
                                                        <span className="number-price">{Number(item.priceNew).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
                                                        {item.category === "Trà sữa" && <span> - Size: {item.size}</span>}
                                                    </div>
                                                    <div className="content--btn">
                                                        <span className="btn--increase" onClick={() => onDecrease(item)}>-</span>
                                                        <span className="mx-2 number">{item.quantity}</span>
                                                        <span className="btn--deincrease" onClick={() => onIncrease(item)}>+</span>
                                                    </div>
                                                </div>
                                                <span className="btn--del" onClick={() => onDelete(item)}>Xóa</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="modal-cart__total">
                                        <p className="nothing">Tổng thanh toán:</p>
                                        <p className="nothing">{Number(totalPrice).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
                                    </div>
                                    <div className="modal-cart__btn">
                                        <Link to='/cart'>
                                            <button >Tới giỏ hàng</button>
                                        </Link>
                                    </div>
                                </>
                            }
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CartProduct;