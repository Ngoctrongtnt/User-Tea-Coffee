import React from 'react';
import './cartOrder.scss'

const TableUpdateOrder = ({ cartProducts, onAdd, onDecrease, onDeleteProduct, totalPrice }) => {
    const onDelete = (product) => {
        onDeleteProduct(product);
    }
    return (
        <div className="cartOrder mt-3">
            <h5>Giỏ hàng</h5>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">Sản phẩm</th>
                        <th scope="col">Số lượng</th>
                        <th scope="col">Giá tiền</th>
                        <th scope="col">Tổng tiền</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {(cartProducts) && (cartProducts).map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <th scope="row">{index + 1}</th>
                                <td>{item.productName} <br /> {item.category === "Trà sữa" && <span>Size: {item.size}</span>}</td>
                                <td className="quantity d-flex justify-content-between align-items-center">
                                    <span className="quantity__btn" onClick={() => onAdd(item)}>+</span>
                                    <span>{item.quantity}</span>
                                    <span className="quantity__btn" onClick={() => onDecrease(item)}>-</span>
                                </td>
                                <td>{Number(item.priceNew).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                                <td>{(Number(item.priceNew) * Number(item.quantity)).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</td>
                                <td>
                                    <span className="ondelete" onClick={() => onDelete(item)}><i className="fas fa-trash-alt"></i></span>
                                </td>
                            </tr>
                        )
                    })}


                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan="2">Tổng thanh toán:</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th colSpan="2">{Number(totalPrice).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default TableUpdateOrder;