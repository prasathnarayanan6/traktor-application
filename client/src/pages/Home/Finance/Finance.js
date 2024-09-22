import React, {useState} from "react";
import SideBar from "../../../components/sidebar";
import NavBar from "../../../components/NavBar";
import PieChart from "../../../components/Graph";
import DonutChart from "../../../components/DonutChart";
import FundingPrathamPieChart from "../../../components/FundingPratham";
import { FaIndianRupeeSign } from "react-icons/fa6";
import FundingAksharPieChart from "../../../components/FundingAkshar";
function HomeFinance(props){
    console.log(props.props)
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [color, setColor] = useState(['#afdade', '#afd5de', '#afcdde', '#99b6bf', '#afd5de']);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [screenSize, setScreenSize] = useState('sm:')
    const darkColor = '#0b5f66';
    const toggleSideBar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const handleButtonClick = (index) => {
        setSelectedIndex(selectedIndex === index ? null : index);
    };
    return(
    
                <div className="grid md:grid-cols-4 gap-4 mt-2 grid-cols-1">
                        <div className="col-span-3 gap-3">
                                <div className="grid md:grid-cols-4 gap-2">
                                    <div className="shadow-md font-semibold rounded-lg w-[100%;]" style={{backgroundColor: '#afdade'}}>
                                            <div className="p-4 text-md text-gray-600">Pratham (in Total)</div>
                                            <div className="p-3 pt-3 text-3xl font-semibold pb-4 justify-end items-end flex text-gray-500"><span><FaIndianRupeeSign /></span>{props?.props?.Funding_Distrubuted_data?.Pratham?.Total_funding_pratham || "NA"}</div>
                                    </div>
                                    <div className="shadow-md rounded-lg w-[100%;]" style={{backgroundColor: '#afd5de'}}>
                                        <div className="p-3 text-md font-semibold text-gray-600">Akshar (in Total)</div>
                                        <div className="p-3 pt-3 text-3xl font-semibold pb-4 justify-end items-end flex text-gray-500"><span><FaIndianRupeeSign /></span>{props?.props?.Funding_Distrubuted_data?.Akshar?.Total_funding_Akshar || "0"}</div>
                                    </div>
                                    <div className="shadow-md rounded-lg w-[100%;]" style={{backgroundColor: '#afcdde'}}>
                                            <div className="p-3 text-md font-semibold text-gray-600">Total funding used</div>
                                            <div className="p-3 pt-3 text-3xl font-semibold pb-4 justify-end items-end flex text-gray-500"><span><FaIndianRupeeSign /></span>{props?.props?.Funding_Distrubuted_data?.Total_funding_used?.Total_funding_used || "NA"}</div>
                                    </div>
                                    <div className="shadow-md rounded-lg w-[100%;]" style={{backgroundColor: '#7da1ad'}}>
                                            <div className="p-3 text-md font-semibold text-gray-600">Total fund remaining</div>
                                            <div className="p-3 pt-3 text-3xl font-semibold pb-4 justify-end items-end flex text-gray-600"><span><FaIndianRupeeSign /></span>{props?.props?.Funding_Distrubuted_data?.Total_funding_used?.Total_funding_remaining || "NA"}</div>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6 mt-10 mb-2">
                                    <div className="shadow-md rounded-lg w-[100%;] border md:h-[435px;]">
                                            <div className="p-2 md:text-md text-gray-600 font-semibold">Funding Distributed across Sectors(Akshar)</div>
                                            <div className="justify-center items-center"><FundingAksharPieChart props={props} /></div>
                                    </div>
                                    <div className="shadow-md rounded-lg w-[100%;] border">
                                        <div className="p-3 pt-2 md:text-md text-gray-600 font-semibold">Funding Distributed across Sectors(Pratham)</div>
                                        <div className="justify-center items-center"><FundingPrathamPieChart props={props} /></div>
                                    </div>
                                </div>
                        </div>
                        <div className="col-span-1  gap-3">
                                <div className="grid grid-cols-1 gap-3 mb-2">
                                    <div className="shadow-md font-semibold rounded-lg w-full md:h-[300px;] border">
                                        <div className="p-2 pt-1 text-xs text-gray-600 font-semibold">Top 5 Sectors with Maximum Funds</div>
                                        <div className="flex justify-center items-center mb-1">
                                            <div className="w-50 h-50 overflow-hidden">
                                                <DonutChart/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-3">
                                    <div className="shadow-md font-semibold rounded-lg w-full md:h-[300px;] border">
                                        <div className="p-2 pt-1 text-sm text-gray-600 font-semibold">Total Mentoring hours across sector</div>
                                        <div className="flex justify-center items-center mb-1">
                                            <div className="w-50 h-50 overflow-hidden">
                                                <DonutChart/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                </div>
    )
}
export default HomeFinance;