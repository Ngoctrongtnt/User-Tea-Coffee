import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import TopPage from '../../../layouts/AdminLayout/Toppage/TopPage';
import { deleteSliderStart, loadSliderStart } from '../../../Redux/actions/sliderBotAction';
import { Popconfirm, Button, Input, Space, Table, Image } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';


const SliderBot = () => {
    const { sliders, loading } = useSelector(state => state.sliders);
    const dispatch = useDispatch();

    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const [bottom, setBottom] = useState('bottomCenter');
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});

    useEffect(() => {
        dispatch(loadSliderStart());
    }, [])

    const deleteSlider = (id) => {
        dispatch(deleteSliderStart(id));
        toast.success("Xóa slider thành công");
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
            title: 'Tiêu đề',
            dataIndex: 'title',
            key: 'title',
            width: '35%',
            ...getColumnSearchProps('title'),
            sorter: (a, b) => a.title.length - b.title.length,
        },

        {
            title: 'Hình ảnh',
            dataIndex: 'url',
            key: 'url',
            width: '25%',
            render: (url) => {
                return (
                    <Image
                        width={80}
                        src={url}
                    />
                )
            },

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
                            onConfirm={() => deleteSlider(item.id)}
                            okText="Xóa"
                            cancelText="Không"
                        >
                            <button
                                className="btn btn-sm bg-danger text-white  mr-2"
                            >
                                <i className="fas fa-trash-alt"></i>
                            </button>
                        </Popconfirm>
                        <Link to={`/adminUI/sliders/detail/${item.id}`}>
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
            <TopPage title="Quản lý slider bottom" />
            <div className="my-3">
                <Link to="/adminUI/sliders/create">
                    <button className="btn btn-primary">Thêm mới</button>
                </Link>
            </div>
            <h5 className="text-uppercase text-center mb-2">bảng danh sách hình ảnh slider bottom</h5>
            <div className="table-container mb-5">
                <Table
                    columns={columns}
                    dataSource={sliders}
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
        </>
    );
};

export default SliderBot;
