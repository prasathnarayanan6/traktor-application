// DonutChart.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const DonutChart = (props) => {
  console.log(props)
  const data = {
    labels: ['Energy & Environment', 'Software & Data', 'Manufacturing & Industry', 'Agriculture & Food', 'Hardware & IoT', 'Edtech', 'Services', 'Ecommerce & Retail', 'Social & Leisure'],
    datasets: [
      {
        label: 'My Donut Chart',
        data: [
          parseInt(props?.props?.Funding_Distrubuted_data?.Akshar?.Energy_Akshar || 0),
          parseInt(props?.props?.Funding_Distrubuted_data?.Akshar?.Software_Akshar || 0),
          parseInt(props?.props?.Funding_Distrubuted_data?.Akshar?.Manufacturing_Akshar || 0),
          parseInt(props?.props?.Funding_Distrubuted_data?.Akshar?.Agriculture_Akshar || 0),
          parseInt(props?.props?.Funding_Distrubuted_data?.Akshar?.Hardware_Akshar || 0),
          parseInt(props?.props?.Funding_Distrubuted_data?.Akshar?.Edtech_Akshar || 0),
          parseInt(props?.props?.Funding_Distrubuted_data?.Akshar?.Services_Akshar || 0),
          parseInt(props?.props?.Funding_Distrubuted_data?.Akshar?.Ecommerce_Akshar || 0),
          parseInt(props?.props?.Funding_Distrubuted_data?.Akshar?.Social_Akshar || 0),
        ],
        backgroundColor: [
          'rgba(141, 182, 196)',
          'rgb(96, 164, 189)',
          'rgba(102, 131, 140)',
        ],
        borderColor: [
          'rgba(255, 255, 255)',
          'rgba(255, 255, 255)',
          'rgba(255, 255, 255)',
        ],
        borderWidth: 0.2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += `${context.parsed}`;
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div>
      {/* <h2>Donut Chart</h2> */}
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DonutChart;
