import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const StackedHorizontalBarChart = () => {
    const data = {
        labels: ['2024', '2023', '2022'],
        datasets: [
            {
                label: 'Healthcare',
                data: [30, 50, 70],
                backgroundColor: 'rgba(175, 218, 222, 0.8)',
                borderWidth: 0,
            },
            {
                label: 'Industry 4.0',
                data: [20, 40, 60],
                backgroundColor: 'rgba(125, 173, 163,0.8)',  //rgba(11, 95, 102, 1)
                borderWidth: 0, 
            },
            {
                label: 'Sustainability',
                data: [10, 30, 50],
                backgroundColor: 'rgba(151, 191, 204, 0.8)',
                borderWidth: 0,
            },
            {
                label: 'FinTech',
                data: [10, 30, 50],
                backgroundColor: 'rgba(175, 205, 222, 0.8)',
                borderWidth: 0,
            },
            {
                label: 'Mobility',
                data: [10, 30, 50],
                backgroundColor: 'rgba(151, 191, 204, 0.8)',
                borderWidth: 0,
            },
        ],
    };

    const options = {
        indexAxis: 'y',
        scales: {
            x: {
                stacked: true, 
                grid: {
                    display: false,
                }
            },
            y: {
                stacked: true, 
                grid: {
                    display: false, 
                }
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Startup`s sectors distribution of last 3 years',
            },
        },
    };

    return <div style={{width : '530px', height: '300px', maxWidth: '400px;',  height: 'auto', margin: '0 auto', padding: '10px'}}><Bar data={data} options={options} /></div>;
};

export default StackedHorizontalBarChart;
