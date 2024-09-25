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
const FundingAksharPieChart = (props) => {
    console.log(props.props.props.Funding_Distrubuted_data.Akshar?.Funds);
  const data = {
    labels: ['Energy & Environment', 'Software & Data', 'Manufacturing & Industry', 'Agriculture & Food', 'Hardware & IoT', 'Edtech', 'Services', 'Ecommerce & Retail', 'Social & Leisure'],
    datasets: [
      {
        labels: ' of Votes',
        data: [
            parseInt(props?.props?.props?.Funding_Distrubuted_data?.Akshar?.Funds?.Energy_Sector_Akshar_Funds || 0),
            parseInt(props?.props?.props?.Funding_Distrubuted_data?.Akshar?.Funds?.Software_Sector_Akshar_Funds || 0),
            parseInt(props?.props?.props?.Funding_Distrubuted_data?.Akshar?.Funds?.Manufacturing_Sector_Akshar_Funds || 0),
            parseInt(props?.props?.props?.Funding_Distrubuted_data?.Akshar?.Funds?.Agriculture_Sector_Akshar_Funds || 0),
            parseInt(props?.props?.props?.Funding_Distrubuted_data?.Akshar?.Funds?.Hardware_Sector_Akshar_Funds || 0),
            parseInt(props?.props?.props?.Funding_Distrubuted_data?.Akshar?.Funds?.Edtech_Sector_Akshar_Funds || 0),
            parseInt(props?.props?.props?.Funding_Distrubuted_data?.Akshar?.Funds?.Services_Sector_Akshar_Funds || 0),
            parseInt(props?.props?.props?.Funding_Distrubuted_data?.Akshar?.Funds?.Ecommerce_Sector_Akshar_Funds || 0),
            parseInt(props?.props?.props?.Funding_Distrubuted_data?.Akshar?.Funds?.Social_Sector_Akshar_Funds || 0),
          
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

export default FundingAksharPieChart;
