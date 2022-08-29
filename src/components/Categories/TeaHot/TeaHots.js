import React, { useEffect, useState } from 'react';
import BreadCrumb from '../../UserHomePage/Main/BreadCrumb';
import { useDispatch, useSelector } from 'react-redux';
import { loadProductStart } from '../../../Redux/actions/productAction';
import { buyProduct } from '../../../Redux/actions/cartActions';
import Product from '../../UserHomePage/Product/Product';
import { toast } from 'react-toastify';
import Search from '../../Search/Search';
import { Slider, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import Pagination from '../../UserHomePage/Pagination/Pagination';

import './teahot.scss'

const antIcon = (
    <LoadingOutlined
        style={{
            fontSize: 24,
        }}
        spin
    />
);

const TeaHots = () => {
    const { products, loading } = useSelector(state => state.products)
    const dispatch = useDispatch();
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(12);
    const [dataFilter, setDataFilter] = useState('');
    const [data, setData] = useState([]);
    const [sortType, setSortType] = useState('');
    const [currentPage, setCurrentPage] = useState(1)
    const LIMIT_TASK_IN_PAGE = 12;

    useEffect(() => {
        dispatch(loadProductStart());
    }, [])
    useEffect(() => {
        setData(teahots)
    }, [products])

    const teahots = products.filter(item => item.category === "Trà nóng");

    //add productItem
    const onAdd = (product) => {
        dispatch(buyProduct(product))
        toast.success("Thêm giỏ hàng thành công");
    };

    useEffect(() => {
        const sortArray = (type) => {
            if (type === "priceNewAsc") {
                const types = {
                    priceNewAsc: 'priceNew',
                };
                const sortProperty = types[type];
                const sorted = [...teahots].sort((a, b) => a[sortProperty] - b[sortProperty])
                setData(sorted);
            } else if (type === "priceNewDesc") {
                const types = {
                    priceNewDesc: 'priceNew',
                };
                const sortProperty = types[type];
                const sorted = [...teahots].sort((a, b) => b[sortProperty] - a[sortProperty])
                setData(sorted);
            } else
                if (type === "productNameAsc") {
                    const types = {
                        productNameAsc: 'productName',
                    };
                    const sortProperty = types[type];
                    const sorted = [...teahots].sort((a, b) => a[sortProperty] === b[sortProperty] ? 0 : a[sortProperty] > b[sortProperty] ? 1 : -1)
                    setData(sorted);
                } else if (type === "productNameDesc") {
                    const types = {
                        productNameDesc: 'productName',
                    };
                    const sortProperty = types[type];
                    const sorted = [...teahots].sort((a, b) => a[sortProperty] === b[sortProperty] ? 0 : a[sortProperty] > b[sortProperty] ? -1 : 1)
                    setData(sorted);
                }
                else if (type === "createAtAsc") {
                    const types = {
                        createAtAsc: 'createAt',
                    };
                    const sortProperty = types[type];
                    const sorted = [...teahots].sort((a, b) => a[sortProperty] === b[sortProperty] ? 0 : a[sortProperty] > b[sortProperty] ? -1 : 1)
                    setData(sorted);
                }
                else {
                    setData([...teahots])
                }
        };
        sortArray(sortType);
    }, [sortType]);
    //search products
    const handleSearch = (newFilter) => {
        setDataFilter(newFilter.searchTerm)
    }
    const lowercasedFilter = dataFilter.toLowerCase();
    const dataFilterSearch = data.filter(item => {
        return (
            item.productName.toUpperCase().includes(lowercasedFilter.toUpperCase()) ||
            item.priceNew.toUpperCase().includes(lowercasedFilter.toUpperCase())
        )
    });
    //range price
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const onChange = (value) => {
        setData([...teahots].filter(item => (
            item.priceNew <= value[1] && value[0] <= item.priceNew
        )))
    };
    const onAfterChange = (value) => {
        setData([...teahots].filter(item => (item.priceNew <= value[1] && value[0] <= item.priceNew)));
        setValue1(value[0])
        setValue2(value[1])
    };
    const marks = {
        0: {
            style: {
                color: '#5c8759',
            },
            label: <strong>{value1}</strong>,
        },
        100000: {
            style: {
                color: '#5c8759',
            },
            label: <strong>{value2}</strong>,
        },
    }
    //get pagination
    const getTaskCurrentPage = () => {
        const startIndex = currentPage * LIMIT_TASK_IN_PAGE - LIMIT_TASK_IN_PAGE;
        return [...dataFilterSearch.slice(startIndex, startIndex + LIMIT_TASK_IN_PAGE)]
    }
    const listPaginationPage = getTaskCurrentPage()
    const handleSetCurrentPage = (page) => {
        setCurrentPage(page)
    }
    const paginate = (number) => setCurrentPage(number)

    return (
        <>
            <div className="container">
                <BreadCrumb title="Các loại trà nóng" />
            </div>
            <div className="products mb-5">
                <div className="container">
                    <h4 className="text-uppercase">Trà nóng</h4>
                    <>
                        <div className="row d-flex align-items-center">
                            <div className="col-md-3">
                            </div>
                            <Search onSubmit={handleSearch} />
                            <div className="col-md-3 product-filterPrice">
                                <h6>Lọc giá sản phẩm: </h6>
                                <Slider
                                    range
                                    step={5000}
                                    defaultValue={[0, 30000]}
                                    max={100000}
                                    onChange={onChange}
                                    onAfterChange={onAfterChange}
                                    marks={marks}

                                />
                            </div>
                            <div className="col-md-3 selected">
                                <h6>Sắp xếp sản phẩm: </h6>
                                <select onChange={(e) => setSortType(e.target.value)}>
                                    <option value="">Select choose</option>
                                    <option value="priceNewAsc">Giá tăng dần</option>
                                    <option value="priceNewDesc">Giá Giảm dần</option>
                                    <option value="productNameAsc">Tên sản phẩm A-Z</option>
                                    <option value="productNameDesc">Tên sản phẩm Z-A</option>
                                    <option value="createAtAsc">Sản phẩm mới nhất</option>
                                </select>
                            </div>

                        </div>
                        <div className="row protuct-container">
                            {!loading && listPaginationPage && listPaginationPage.length > 0 &&
                                listPaginationPage.map((product) => (
                                    <Product key={product.id} product={product} onAdd={onAdd} />
                                ))}
                            {loading && <div className="spin-loading"><Spin indicator={antIcon} /></div>}
                        </div>
                        <div className="d-flex justify-content-end mt-2">
                            <Pagination
                                currentPage={currentPage}
                                tasks={data}
                                limit={LIMIT_TASK_IN_PAGE}
                                handleSetCurrentPage={handleSetCurrentPage}
                                paginate={paginate}
                            />
                        </div>
                    </>
                </div>
            </div>
        </>
    );
};

export default TeaHots;


