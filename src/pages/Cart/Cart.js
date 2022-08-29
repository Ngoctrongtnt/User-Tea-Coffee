import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'antd';
import './Cart.scss'
import { buyProduct, deCrease, deleteProduct } from '../../Redux/actions/cartActions';
import BreadCrumb from '../../components/UserHomePage/Main/BreadCrumb';
import { toast } from 'react-toastify';


const Cart = () => {
  const { cartProducts } = useSelector(state => state.cartProducts)
  const totalPrice = cartProducts && cartProducts.reduce((a, c) => a + c.quantity * c.priceNew, 0);
  const dispatch = useDispatch();

  const onDelete = (id) => {
    dispatch(deleteProduct(id));
    toast.success("Xóa sản phẩm thành công!");
  }

  const onDecrease = (product) => {
    dispatch(deCrease(product));
    toast.success("Xóa sản phẩm thành công!");
  }

  const onIncrease = (product) => {
    dispatch(buyProduct(product));
    toast.success("Thêm sản phẩm thành công!");
  }

  return (
    <>
      <div className="cart">
        <div className="container">
          <BreadCrumb title="Thanh toán" />
          <h3 className="text-center">ĐƠN HÀNG</h3>
          {cartProducts?.length === 0 ?
            (<div className="row nothing ">
              <div className="col-md-12 nothing">
                Không có sản phẩm nào.
              </div>
            </div>
            ) : (
              <>
                {cartProducts && cartProducts.map((item) => {
                  return (
                    <div key={item.id} className="row cart-item">
                      <div className="title-img col-md-5 col-5">
                        <Image
                          width={120}
                          src={item.url}
                        />
                        <div className="cart-title">
                          <h5 className="cart-name text-uppercase">
                            {item.productName}
                          </h5>
                          <p className="cart-price">
                            {(Number(item.priceNew)).toLocaleString('vi', { style: 'currency', currency: 'VND' })} {item.category === "Trà sữa" && <span>{' '}- Size: {item.size}</span>}
                          </p>
                        </div>
                      </div>

                      <div className="button-cart col-md-4 col-3">
                        <div className="cart-control">
                          <span className="cart-decrease" onClick={() => onDecrease(item)}>-</span>
                          <span className="cart-count">
                            {(item.quantity)}
                          </span>
                          <span className="cart-increase" onClick={() => onIncrease(item)}>+</span>
                        </div>
                        <div className="cart-price-total">
                          {(Number(item.priceNew) * item.quantity).toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                        </div>
                      </div>
                      <div className="btn-delete">
                        <button className="btn btn-danger" onClick={() => onDelete(item)}><i className="fas fa-trash-alt"></i></button>
                      </div>
                    </div>
                  )
                })}

                <div className="row total-price-bottom">
                  <div className="col-md-5 col-6"><h5>Tổng thanh toán:</h5> </div>
                  <div className="col-md-3 col-3"><span className="price-total">
                    {Number(totalPrice).toLocaleString('vi', { style: 'currency', currency: 'VND' })}
                  </span>
                  </div>
                </div>
                <div className="row cart-button mb-4">
                  <Link to="/products"><button className="btn-continue"><i className="fas fa-reply"></i>Tiếp tục mua hàng</button></Link>
                  <Link to="/checkout"><button className="btn-checkout"><i className="fas fa-check"></i>Tiến hành thanh toán</button></Link>
                </div>
              </>)


          }

        </div >
      </div >
    </>
  );
};

export default Cart;