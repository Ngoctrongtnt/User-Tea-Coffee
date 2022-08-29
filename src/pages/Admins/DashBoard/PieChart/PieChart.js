import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

const PieChartJS = ({ orders }) => {

    const orderNew = (orders.filter(item => item.status === "Chờ xác nhận")).length
    const orderDelivery = (orders.filter(item => item.status === "Đang vận chuyển")).length
    const orderFinish = (orders.filter(item => item.status === "Giao thành công")).length
    const orderCancel = (orders.filter(item => item.status === "Đã hủy")).length

    const data = [
        {
            type: 'Đang giao',
            value: orderDelivery,
        },
        {
            type: 'Đơn mới',
            value: orderNew,
        },
        {
            type: 'Đã giao',
            value: orderFinish,
        },
        {
            type: 'Đã hủy',
            value: orderCancel,
        },
    ];
    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
            type: 'inner',
            offset: '-30%',
            content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
            style: {
                fontSize: 14,
                textAlign: 'center',
            },
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };

    return (
        <Pie {...config} />
    );
}

export default PieChartJS;