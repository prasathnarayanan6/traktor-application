import React from "react";
import PieChart from "../../../components/Graph";
import DonutChart from "../../../components/DonutChart";
import '../../../components/styles/style.css'
import LineChart from "../../../components/LineChart";
function Investor()
{
    return (
                <div className="grid md:grid-cols-4 gap-4 mt-2 grid-cols-1">
                        <div className="col-span-3 gap-3">
                                <div className="grid md:grid-cols-4 gap-2">
                                    <div className="shadow-md font-semibold rounded-lg w-[100%;]" style={{backgroundColor: '#afdade'}}>
                                            <div className="p-4 text-sm text-gray-600">Investors in total</div>
                                            <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-500">200</div>
                                    </div>
                                    <div className="shadow-md rounded-lg w-[100%;]" style={{backgroundColor: '#afd5de'}}>
                                        <div className="p-3 text-sm font-semibold text-gray-600">Internal funding utilized</div>
                                        <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-500">50</div>
                                    </div>
                                    <div className="shadow-md rounded-lg w-[100%;]" style={{backgroundColor: '#afcdde'}}>
                                            <div className="p-3 text-sm font-semibold text-gray-600">External funding raised</div>
                                            <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-500">30</div>
                                    </div>
                                    <div className="shadow-md rounded-lg w-[100%;]" style={{backgroundColor: '#7da1ad'}}>
                                            <div className="p-3 text-sm font-semibold text-gray-600">Total fund remaining</div>
                                            <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-600">50</div>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 gap-6 mt-10 mb-2">
                                    <div className="shadow-md rounded-lg w-[100%;] border md:h-[435px;]">
                                            <div className="p-2 md:text-md text-gray-600 font-semibold">Top 5 Sectors by Maximum Internal Fund Usage</div>
                                            <div className="justify-center items-center"><PieChart /></div>
                                    </div>
                                    <div className="shadow-md rounded-lg w-[100%;] border">
                                        <div className="p-3 pt-2 md:text-md text-gray-600 font-semibold">Funding Distributed across Sectors</div>
                                        <div className="justify-center items-center"><PieChart /></div>
                                    </div>
                                </div>
                        </div>
                        <div className="col-span-1  gap-3">
                                <div className="grid grid-cols-1 gap-3 mb-2">
                                    <div className="shadow-md font-semibold rounded-lg w-full md:h-[300px;] border">
                                        <div className="p-2 pt-1 text-xs text-gray-600 font-semibold">Women across industry</div>
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
export default Investor;