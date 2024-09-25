import React, {useState, useEffect} from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);
const FundingPrathamPieChart = (props) => {
   console.log(props?.props?.props?.Funding_Distrubuted_data);
  const data = {
    labels: ['Energy & Environment', 'Software & Data', 'Manufacturing & Industry', 'Agriculture & Food', 'Hardware & IoT', 'Edtech', 'Services', 'Ecommerce & Retail', 'Social & Leisure'],
    datasets: [
      {
        labels: ' of Votes',
        data: [
          parseInt(props?.props?.props?.Funding_Distrubuted_data?.Pratham?.Funds?.Energy_Sector_Pratham_Funds || 0),
          parseInt(props?.props?.props?.Funding_Distrubuted_data?.Pratham?.Funds?.Software_Sector_Pratham_Funds || 0),
          parseInt(props?.props?.props?.Funding_Distrubuted_data?.Pratham?.Funds?.Manufacturing_Sector_Pratham_Funds || 0),
          parseInt(props?.props?.props?.Funding_Distrubuted_data?.Pratham?.Funds?.Agriculture_Sector_Pratham_Funds || 0),
          parseInt(props?.props?.props?.Funding_Distrubuted_data?.Pratham?.Funds?.Hardware_Sector_Pratham_Funds || 0),
          parseInt(props?.props?.props?.Funding_Distrubuted_data?.Pratham?.Funds?.Edtech_Sector_Pratham_Funds || 0),
          parseInt(props?.props?.props?.Funding_Distrubuted_data?.Pratham?.Funds?.Services_Sector_Pratham_Funds || 0),
          parseInt(props?.props?.props?.Funding_Distrubuted_data?.Pratham?.Funds?.Ecommerce_Sector_Pratham_Funds || 0),
          parseInt(props?.props?.props?.Funding_Distrubuted_data?.Pratham?.Funds?.Social_Sector_Pratham_Funds || 0),
          
        ],
        backgroundColor: [
          'rgba(141, 182, 196)',
          'rgb(96, 164, 189)',
          'rgba(102, 131, 140)',
          'rgba(123, 160, 181)',
          'rgba(141, 196, 201)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 255, 255)',
          'rgba(255, 255, 255)',
          'rgba(255, 255, 255)',
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
      labels: {
        usePointStyle: true,
        pointStyle: 'roundRect', 
      },
    },
  };

  return <div style={{width : '90%', maxWidth: '400px;',  height: 'auto', margin: '0 auto', padding: '10px'}}><Pie data={data} options={options} /></div>;
};

export default FundingPrathamPieChart;
