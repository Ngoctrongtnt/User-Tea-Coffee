import React from 'react';
import { Image, Table } from 'antd';
import './historyorder.scss'


const HistoryOrder = ({ orderUser }) => {
    const columns = [
        {
            title: 'STT',
            dataIndex: '',
            key: '',
            width: '5%',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Sản phẩm',
            dataIndex: '',
            key: '',
            width: '40%',
            render: (item) => {
                return (
                    <>
                        {item.cartProducts.map((item, index) => {
                            return (
                                <div key={index} className="d-flex align-items-center">
                                    <span className="mr-3">SP {index + 1},</span>
                                    <Image
                                        width={50}
                                        src={item.url}
                                    />
                                    <div className="ml-4 d-flex flex-column">
                                        <span>{item.productName}</span>
                                        <div>
                                            {item.size && <span className="mr-2">Size: {item.size} {' '}-</span>}
                                            <span>{item.quantity}{' '}x{' '}{Number(item.priceNew).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </>
                )
            },
        },
        {
            title: 'Giá tiền',
            dataIndex: '',
            key: '',
            width: '10%',
            render: (item) => {
                return (
                    <>
                        <span>{Number(item.totalPrice).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</span>
                    </>
                )
            }
        },
        {
            title: 'Trạng thái',
            dataIndex: '',
            key: '',
            width: '20%',
            render: (item) => {
                const checkStatus = () => {
                    if (item.status === "Chờ xác nhận") { return "New" }
                    else if (item.status === "Đang chuẩn bị") { return "Prepare" }
                    else if (item.status === "Đang vận chuyển") { return "Delivering" }
                    else if (item.status === "Giao thành công") { return "Success" }
                    else if (item.status === "Đã hủy") { return "Destroy" }
                }
                return (
                    <>
                        <span
                            className={checkStatus()}
                        >
                            {item.status}
                        </span>
                    </>
                )
            }
        },
        {
            title: 'Thời gian',
            dataIndex: 'createAt',
            key: 'createAt',
        },

    ];

    return (
        <>
            <h5 className="text-uppercase text-center mb-3">quản lý đơn hàng</h5>
            <div className="table-container">
                <Table
                    columns={columns}
                    dataSource={orderUser}
                    rowKey='id'
                    pagination={{
                        pageSize: [5]
                    }}
                    scroll={{
                        x: 800,
                    }}
                />
            </div>
        </>
    );
};

export default HistoryOrder;
