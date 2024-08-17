// import React, { useState } from "react";
// import PieChart from "./Graph.js";
// import DonutChart from "./DonutChart.js";
// import './styles/style.css';

// function GeneralAnalysis() {
//     const [color, setColor] = useState(['#afdade', '#afd5de', '#afcdde', '#99b6bf', '#afd5de']);
//     const darkColor = '#0b5f66';
//     const [selectedIndex, setSelectedIndex] = useState(null);
//     const handleButtonClick = (index) => {
//         setSelectedIndex(selectedIndex === index ? null : index);
//     };

//     return (
//         <div className="p-[90px] h-full">
//             <div className="flex justify-between items-center mb-1 ms-[630px]">
//                 {color.map((colors, index) => (
//                     <button
//                         key={index}
//                         className="text-gray-500 text-sm font-semibold mt-1 px-2 rounded-xl shadow-md"
//                         style={{ backgroundColor: selectedIndex === index ? darkColor : colors }}
//                         onClick={() => handleButtonClick(index)}
//                     >
//                         {['Home', 'Teams', 'Mentors', 'Finance', 'Investor'][index]}
//                     </button>
//                 ))}
//             </div>
//             <h1 className="text-3xl font-semibold text-gray-500 mb-7 mt- justify-content-center items-center">Welcome Manager</h1>
//             <div className="grid md:grid-cols-4 gap-4 mt-2 grid-cols-1">
//                 <div className="col-span-3 gap-3">
//                     <div className="grid md:grid-cols-4 gap-2">
//                         <div className="shadow-md font-semibold rounded-lg w-full" style={{ backgroundColor: '#afdade' }}>
//                             <div className="p-4 text-md text-gray-600">Total Startups</div>
//                             <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-500">200</div>
//                         </div>
//                         <div className="shadow-md rounded-lg w-full" style={{ backgroundColor: '#afd5de' }}>
//                             <div className="p-3 text-md font-semibold text-gray-600">Active Startups</div>
//                             <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-500">50</div>
//                         </div>
//                         <div className="shadow-md rounded-lg w-full" style={{ backgroundColor: '#afcdde' }}>
//                             <div className="p-3 text-md font-semibold text-gray-600">Graduated</div>
//                             <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-500">30</div>
//                         </div>
//                         <div className="shadow-md rounded-lg w-full" style={{ backgroundColor: '#7da1ad' }}>
//                             <div className="p-3 text-md font-semibold text-gray-600">Dropped</div>
//                             <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-600">50</div>
//                         </div>
//                     </div>
//                     <div className="grid md:grid-cols-2 gap-6 mt-10 mb-2">
//                         <div className="shadow-md rounded-lg w-full border md:h-[435px]">
//                             <div className="p-2 md:text-lg text-gray-600 font-semibold">Sectors Available</div>
//                             <div className="justify-center items-center"><PieChart /></div>
//                         </div>
//                         <div className="shadow-md rounded-lg w-full border">
//                             <div className="p-3 pt-2 md:text-lg text-gray-600 font-semibold">Funding Distributed across Sectors</div>
//                             <div className="justify-center items-center"><PieChart /></div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-span-1 gap-3">
//                     <div className="grid grid-cols-1 gap-3 mb-2">
//                         <div className="shadow-md font-semibold rounded-lg w-full md:h-[300px] border">
//                             <div className="p-2 pt-1 text-xs text-gray-600 font-semibold">Women across industry</div>
//                             <div className="flex justify-center items-center mb-1">
//                                 <div className="w-50 h-50 overflow-hidden">
//                                     <DonutChart />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="grid grid-cols-1 gap-3">
//                         <div className="shadow-md font-semibold rounded-lg w-full md:h-[300px] border">
//                             <div className="p-2 pt-1 text-sm text-gray-600 font-semibold">Total Mentoring hours across sector</div>
//                             <div className="flex justify-center items-center mb-1">
//                                 <div className="w-50 h-50 overflow-hidden">
//                                     <DonutChart />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default GeneralAnalysis;
