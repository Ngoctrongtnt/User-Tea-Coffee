import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import TopPage from '../../../layouts/AdminLayout/Toppage/TopPage';
import { toast } from 'react-toastify';

import { Popconfirm, Button, Input, Space, Table, Spin } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { useDispatch, useSelector } from 'react-redux';
import { deleteOrderStart, loadOrderStart } from '../../../Redux/actions/orderAction';
import './order.scss'


const Orders = () => {
    const dispatch = useDispatch();
    const { orders, loading } = useSelector(state => state.orders)

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const [bottom, setBottom] = useState('bottomCenter');
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});

    useEffect(() => {
        dispatch(loadOrderStart())
    }, [])

    const deleteOrder = (id) => {
        dispatch(deleteOrderStart(id))
        toast.success("Xóa đơn hàng thành công")
    };

    //search data
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div
                style={{
                    padding: 8,
                }}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1890ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };

    const ordersNew = (orders).reduceRight(function (previous, current) {
        previous.push(current);
        return previous;
    }, []);

    const columns = [
        {
            title: 'STT',
            dataIndex: '',
            key: '',
            width: '7%',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Thông tin liên hệ',
            dataIndex: '',
            key: '',
            width: '20%',
            ...getColumnSearchProps('phoneNumber'),
            sorter: (a, b) => a.fullname.length - b.fullname.length,
            render: (item) => {
                return (
                    <>
                        {!loading &&
                            <>
                                <p><span>Tên: </span>{item.fullname}</p>
                                <p><span>Số ĐT:</span> {item.phoneNumber}</p>
                            </>
                        }
                        {loading && <p>Loading...</p>}
                    </>
                )
            },
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
            width: '20%',
        },
        {
            title: 'Tổng thanh toán (vnđ)',
            dataIndex: '',
            key: '',
            width: '20%',
            sorter: (a, b) => a.totalPrice.length - b.totalPrice.length,
            render: (item) => {
                return (
                    Number(item.totalPrice).toLocaleString('vi', { style: 'currency', currency: 'VND' })
                )
            }

        },
        {
            title: 'Trạng thái',
            dataIndex: '',
            key: '',
            width: '15%',
            filters:
                [
                    {
                        text: 'Chờ xác nhận',
                        value: 'Chờ xác nhận',
                    },
                    {
                        text: 'Đang chuẩn bị',
                        value: 'Đang chuẩn bị',
                    },
                    {
                        text: 'Đang vận chuyển',
                        value: 'Đang vận chuyển',
                    },
                    {
                        text: 'Giao thành công',
                        value: 'Giao thành công',
                    },
                    {
                        text: 'Đã hủy',
                        value: 'Đã hủy',
                    },
                ],
            // filteredValue: filteredInfo.status || null,
            onFilter: (value, record) => record.status.includes(value),
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
            title: 'Action',
            dataIndex: '',
            key: '',
            render: (item) => {
                return (
                    <>
                        <Link to={`/adminUI/orders/edit/${item.id}`}>
                            <button className="btn btn-sm bg-primary text-white">
                                <i className="fas fa-edit"></i>
                            </button>
                        </Link>
                        <Popconfirm
                            title="Bạn có chắc muốn xóa?"
                            onConfirm={() => deleteOrder(item.id)}
                            okText="Xóa"
                            cancelText="Không"
                        >
                            <button
                                className="btn btn-sm bg-danger text-white  mx-2"
                            >
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        </Popconfirm>
                        <Link to={`/adminUI/orders/detail/${item.id}`}>
                            <button className="btn btn-sm bg-info text-white px-2">
                                <i className="fas fa-info-circle"></i>
                            </button>
                        </Link>
                    </>
                )
            },

        },
    ];


    return (
        <>
            <TopPage title="Quản lý đơn hàng" />
            <div className="my-3">
                <Link to="/adminUI/orders/create">
                    <button className="btn btn-primary">Thêm mới</button>
                </Link>
            </div>
            <h5 className="text-uppercase text-center mb-3">quản lý đơn hàng</h5>
            <div className="table-container mb-5">
                <Table
                    columns={columns}
                    dataSource={ordersNew}
                    rowKey='id'
                    pagination={{
                        position: [bottom],
                    }}
                    onChange={handleChange}
                    scroll={{
                        x: 1000,
                    }}
                />
            </div>
        </>
    );
};

export default Orders;
