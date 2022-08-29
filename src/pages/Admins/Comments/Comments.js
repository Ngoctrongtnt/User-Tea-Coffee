import { Link } from 'react-router-dom';
import TopPage from '../../../layouts/AdminLayout/Toppage/TopPage';
import React, { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';

import { Popconfirm, Button, Input, Space, Table, Image, Rate } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCommentStart, loadCommentStart } from '../../../Redux/actions/commentAction';

const Comments = () => {
    const dispatch = useDispatch();
    const { comments, loading } = useSelector(state => state.comments)
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const [bottom, setBottom] = useState('bottomCenter');
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});

    useEffect(() => {
        dispatch(loadCommentStart())
    }, [])

    const deleteComment = (id) => {
        dispatch(deleteCommentStart(id))
        toast.success("Xóa bình luận thành công")
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
    const newComments = (comments).reduceRight(function (previous, current) {
        previous.push(current);
        return previous;
    }, []);

    const columns = [
        {
            title: 'STT',
            dataIndex: '',
            key: '',
            width: '5%',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Tên khách hàng',
            dataIndex: 'userName',
            key: 'userName',
            width: '20%',
            ...getColumnSearchProps('phoneNumber'),
            sorter: (a, b) => a.fullname.length - b.fullname.length,

        },
        {
            title: 'Sản phẩm',
            dataIndex: '',
            key: '',
            width: '30%',
            render: (item) => {
                return (
                    <div className="d-flex align-items-center">
                        <div>
                            <Image
                                width={60}
                                src={item.product.url}
                            />
                        </div>
                        <div className="ml-3">
                            <Rate style={{ fontSize: 15 }} disabled defaultValue={item.rate} />
                            <p>{item.product.productName}</p>
                            <p>{Number(item.product.priceNew).toLocaleString('vi', { style: 'currency', currency: 'VND' })}</p>
                        </div>
                    </div>
                )
            },
        },
        {
            title: 'Bình luận',
            dataIndex: 'description',
            key: 'description',
            width: '30%',
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
                            onConfirm={() => deleteComment(item.id)}
                            okText="Xóa"
                            cancelText="Không"
                        >
                            <button
                                className="btn btn-sm bg-danger text-white  mr-2"
                            >
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        </Popconfirm>
                    </>
                )
            },

        },
    ];

    return (
        <div>
            <TopPage title="Quản lý bình luận" />
            <h5 className="text-uppercase text-center mb-3">quản lý bình luận</h5>
            <div className="table-container mb-5">
                <Table
                    columns={columns}
                    dataSource={newComments}
                    rowKey='id'
                    pagination={{
                        position: [bottom],
                    }}
                    onChange={handleChange}
                    scroll={{
                        x: 500,
                    }}
                />
            </div>
        </div>
    );
};

export default Comments;