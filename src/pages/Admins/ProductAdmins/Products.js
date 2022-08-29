import { Link } from 'react-router-dom';
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import TopPage from "../../../layouts/AdminLayout/Toppage/TopPage";
import { deleteProductStart, loadProductStart } from '../../../Redux/actions/productAction';
import { Popconfirm } from 'antd';
import { Button, Input, Space, Table, Image } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import { loadCategoryStart } from '../../../Redux/actions/categoryAction';


const Products = () => {
    const dispatch = useDispatch();
    const { products, loading } = useSelector((state) => state.products);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const [bottom, setBottom] = useState('bottomCenter');
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const { categories } = useSelector(state => state.categories);

    //load data product
    useEffect(() => {
        dispatch(loadProductStart());
    }, []);
    useEffect(() => {
        dispatch(loadCategoryStart())
    }, [])

    //hien thi cac san pham mơi nhat
    var newProducts = (products).reduceRight(function (previous, current) {
        previous.push(current);
        return previous;
    }, []);

    //delete produc
    const deleteProduct = (id) => {
        dispatch(deleteProductStart(id));
        toast.success("Xóa sản phẩm thành công")
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
            title: 'Tên sản phẩm',
            dataIndex: 'productName',
            key: 'productName',
            width: '30%',
            ...getColumnSearchProps('productName'),
            sorter: (a, b) => a.category.length - b.category.length,
        },
        {
            title: 'Danh mục',
            dataIndex: 'category',
            key: 'category',
            width: '15%',
            filters:
                categories.map((item, index) => (
                    {
                        key: index,
                        text: item.categoryName,
                        value: item.categoryName,
                    }
                ))
            ,
            onFilter: (value, record) => record.category.includes(value),
            sorter: (a, b) => a.category.length - b.category.length,
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'url',
            key: 'url',
            width: '15%',
            render: (url) => {
                return (
                    <Image
                        width={60}
                        src={url}
                    />
                )
            },

        },
        {
            title: 'Giá tiền',
            dataIndex: '',
            key: '',
            width: '15%',
            sorter: (a, b) => a.priceNew.length - b.priceNew.length,
            ...getColumnSearchProps('priceNew'),
            render: (item) => {
                return (
                    Number(item.priceNew).toLocaleString('vi', { style: 'currency', currency: 'VND' })
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
                        <Link to={`/adminUI/products/edit/${item.id}`}>
                            <button className="btn btn-sm bg-primary text-white  mr-2">
                                <i className="fas fa-edit"></i>
                            </button>
                        </Link>
                        <Popconfirm
                            title="Bạn có chắc muốn xóa?"
                            onConfirm={() => deleteProduct(item.id)}
                            okText="Xóa"
                            cancelText="Không"
                        >
                            <button
                                className="btn btn-sm bg-danger text-white  mr-2"
                            >
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        </Popconfirm>
                        <Link to={`/adminUI/products/detail/${item.id}`}>
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
            <TopPage title="Quản lý sản phẩm" />
            <div className="my-3">
                <Link to="/adminUI/products/create">
                    <button className="btn btn-primary">Thêm mới</button>
                </Link>
            </div>
            <h5 className="text-uppercase text-center mb-2">bảng danh sách sản phẩm</h5>
            <div className="table-container mb-5">
                <Table
                    columns={columns}
                    dataSource={newProducts}
                    rowKey='id'
                    pagination={{
                        position: [bottom],
                    }}
                    onChange={handleChange}
                    scroll={{
                        x: 900,
                    }}
                />
            </div>

        </>
    );
};

export default Products;