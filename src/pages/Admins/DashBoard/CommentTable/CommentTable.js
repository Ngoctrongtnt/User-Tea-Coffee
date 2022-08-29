import { Avatar, Table, Image, Rate } from 'antd';
import React, { useState } from 'react';

const CommentTable = ({ comments }) => {
    const [bottom, setBottom] = useState('bottomCenter');
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});

    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };

    //hien thi cac comment mơi nhat
    var newComments = (comments).reduceRight(function (previous, current) {
        previous.push(current);
        return previous;
    }, []);

    const columns = [
        {
            title: 'Khách hàng',
            dataIndex: '',
            key: '',
            width: 150,
            render: (item) => {
                return (
                    <div className="d-flex align-items-center">
                        <Avatar
                            src={
                                <Image src={item.avatar} style={{ width: 32, }} />
                            }
                        />
                        <span className="ml-2" style={{ fontSize: 13 }}>{item.userName}</span>
                    </div>
                )
            }
        },

        {
            title: 'Sản phẩm',
            dataIndex: '',
            key: '',
            width: 270,
            render: (item) => {
                return (
                    <div className="d-flex">
                        <Image
                            width={40}
                            src={item.product.url}
                        />
                        <div className="d-flex flex-column justify-content-center ml-2">
                            <span style={{ fontSize: 13 }}>{item.product.productName}</span>
                            <Rate style={{ fontSize: 10 }} disabled defaultValue={item.rate} />
                        </div>
                    </div>
                )
            }
        },
        {
            title: 'Bình luận',
            dataIndex: 'description',
            key: 'description',
            width: 250,
        },

        {
            title: 'Thời gian',
            dataIndex: 'createAt',
            key: 'createAt',
        },
    ];
    return (
        <>
            <Table
                columns={columns}
                dataSource={newComments.slice(0, 20)}
                rowKey='id'
                pagination={{
                    position: [bottom],
                    pageSize: [5]
                }}
                onChange={handleChange}
                scroll={{
                    x: 414,
                }}
            />

        </>
    );
}

export default CommentTable;
