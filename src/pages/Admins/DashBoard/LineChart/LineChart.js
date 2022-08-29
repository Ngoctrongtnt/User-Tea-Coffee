import React from 'react';
import { Line } from '@ant-design/plots';

const LineChartJS = ({ data }) => {

    const config = {
        data,
        xField: 'key',
        yField: 'value',
        label: {},
        point: {
            size: 5,
            shape: 'diamond',
            style: {
                fill: 'white',
                stroke: '#5B8FF9',
                lineWidth: 2,
            },
        },
        tooltip: {
            showMarkers: false,
        },
        state: {
            active: {
                style: {
                    shadowBlur: 4,
                    stroke: '#000',
                    fill: 'red',
                },
            },
        },
        interactions: [
            {
                type: 'marker-active',
            },
        ],
    };
    return <Line {...config} />;
};

export default LineChartJS;
