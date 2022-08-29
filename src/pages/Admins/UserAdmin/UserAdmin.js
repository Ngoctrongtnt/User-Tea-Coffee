import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadUsersAdminStart, deleteUserAdminStart } from "../../../Redux/actions/userAdminAction";
import "./userAdmin.scss"
import { toast } from "react-toastify";
import TopPage from "../../../layouts/AdminLayout/Toppage/TopPage";

import { Popconfirm, Avatar, Image } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';



const UserAdmin = () => {
    const dispatch = useDispatch();
    const { usersAdmin, loading } = useSelector((state) => state.usersAdmin);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const [bottom, setBottom] = useState('bottomCenter');
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const { profile, isLoggIn } = useSelector(state => state.authAdmin)
    const listManage = usersAdmin.filter(item => item.role !== "admin")
    const listEmployee = listManage.filter(item => item.role !== "manage")


    useEffect(() => {
        dispatch(loadUsersAdminStart());
    }, []);

    const deleteUserAdmin = (userId) => {
        dispatch(deleteUserAdminStart(userId));
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
            title: 'Phân quyền',
            dataIndex: 'role',
            key: 'role',
            width: '15%',
            filters:
                [
                    {
                        text: 'admin',
                        value: 'admin',
                    },
                    {
                        text: 'manage',
                        value: 'manage',
                    },
                    {
                        text: 'employee',
                        value: 'employee',
                    },
                ],
            onFilter: (value, record) => record.role.includes(value),
        },
        {
            title: 'Action',
            dataIndex: '',
            key: '',
            render: (item) => {
                return (
                    <>
                        <Link to={`/adminUI/admins/edit/${item.id}`}>
                            <button className="btn btn-sm bg-primary text-white mr-2">
                                <i className="fas fa-edit"></i>
                            </button>
                        </Link>
                        {profile.role === "employee" ? "" : (
                            <Popconfirm
                                title="Bạn có chắc muốn xóa?"
                                onConfirm={() => deleteUserAdmin(item.id)}
                                okText="Xóa"
                                cancelText="Không"
                            >
                                <button
                                    className="btn btn-sm bg-danger text-white  mr-2"
                                >
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </Popconfirm>
                        )}

                        <Link to={`/adminUI/admins/detail/${item.id}`}>
                            <button className="btn btn-sm bg-info text-white">
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
            <TopPage title="Quản lý tài khoản Admin" />
            <div className="my-3">
                {profile.role === "employee" ? (
                    ""
                ) : (
                    <Link to="/adminUI/admins/create">
                        <button className="btn btn-primary">Thêm mới</button>
                    </Link>
                )}

            </div>
            <h5 className="text-uppercase text-center mb-3">danh sách tài khoản admin</h5>
            <div className="table-container">
                {profile.role === "admin" ? (
                    <Table
                        columns={columns}
                        dataSource={usersAdmin}
                        rowKey='id'
                        pagination={{
                            position: [bottom],
                        }}
                        onChange={handleChange}
                        scroll={{
                            x: 500,
                        }}
                    />
                ) : (profile.role === "manage" ? (
                    <Table
                        columns={columns}
                        dataSource={listManage}
                        rowKey='id'
                        pagination={{
                            position: [bottom],
                        }}
                        onChange={handleChange}
                        scroll={{
                            x: 500,
                        }}
                    />
                ) : (
                    <Table
                        columns={columns}
                        dataSource={listEmployee}
                        rowKey='id'
                        pagination={{
                            position: [bottom],
                        }}
                        onChange={handleChange}
                        scroll={{
                            x: 500,
                        }}
                    />
                ))}

            </div>
        </>
    );
};

export default UserAdmin;
