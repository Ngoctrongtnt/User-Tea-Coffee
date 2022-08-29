import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import TopPage from '../../../layouts/AdminLayout/Toppage/TopPage';
import { deleteUserUIStart, loadUsersUIStart } from '../../../Redux/actions/userUIAction';
import { Popconfirm, Avatar, Image } from 'antd';
import { toast } from 'react-toastify';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import './userAccount.scss'



const UserAccount = () => {
    const dispatch = useDispatch();
    const { usersUI } = useSelector((state) => state.usersUI);

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const [bottom, setBottom] = useState('bottomCenter');
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});

    useEffect(() => {
        dispatch(loadUsersUIStart());
    }, []);

    const deleteUserUI = (id) => {
        dispatch(deleteUserUIStart(id));
        toast.success("Xóa tài khoản thành công")
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

    const columns = [
        {
            title: 'STT',
            dataIndex: '',
            key: '',
            width: '7%',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Họ và tên',
            dataIndex: '',
            key: '',
            width: '20%',
            ...getColumnSearchProps('fullname'),
            sorter: (a, b) => a.fullname.length - b.fullname.length,
            render: (item) => {
                return (
                    <>
                        <Avatar className="mr-2" src={<Image src={item.avatar} style={{ width: 32, height: 32 }} />} />
                        {item.fullname}
                    </>
                )
            },
        },
        {
            title: 'E-mail',
            dataIndex: 'email',
            key: 'email',
            width: '20%',
            sorter: (a, b) => a.email.length - b.email.length,
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
            width: '20%',
            ...getColumnSearchProps('address'),
        },
        {
            title: 'Số điện thoại',
            dataIndex: 'phone',
            key: 'phone',
            width: '15%',
            ...getColumnSearchProps('phone'),
        },
        {
            title: 'Action',
            dataIndex: '',
            key: '',
            render: (item) => {
                return (
                    <>
                        <Popconfirm
                            title="Bạn có chắc muốn xóa?"
                            onConfirm={() => deleteUserUI(item.id)}
                            okText="Xóa"
                            cancelText="Không"
                        >
                            <button
                                className="btn btn-sm bg-danger text-white  mr-2"
                            >
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        </Popconfirm>
                        <Link to={`/adminUI/userUI/detail/${item.id}`}>
                            <button className="btn btn-sm bg-info text-white ">
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
            <TopPage title="Quản lý tài khoản khách hàng" />
            <h5 className="text-uppercase text-center mb-2">bảng danh sách tài khoản khách hàng</h5>
            <div className="table-container">
                <Table
                    columns={columns}
                    dataSource={usersUI}
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

export default UserAccount;