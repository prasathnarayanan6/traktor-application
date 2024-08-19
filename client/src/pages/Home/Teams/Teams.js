import React, {useEffect, useState} from 'react';
import PieChart from "../../../components/Graph";
import DonutChart from "../../../components/DonutChart";
import '../../../components/styles/style.css'
import LineChart from "../../../components/LineChart";
import '../../../components/styles/style.css';
function Teams(){
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(true);
    }, [])
    return (
        <div className={`grid md:grid-cols-4 gap-4 mt-2 grid-cols-1 content ${show ? "visible": ""}`}>
            <div className="col-span-3 gap-3">
                    <div className="grid md:grid-cols-3 gap-2">
                        <div className="shadow-md font-semibold rounded-lg w-[100%;]" style={{backgroundColor: '#afdade'}}>
                                <div className="p-4 text-sm text-gray-600">Pratham Teams (in Total)</div>
                                <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-500">200</div>
                        </div>
                        <div className="shadow-md rounded-lg w-[100%;]" style={{backgroundColor: '#afd5de'}}>
                            <div className="p-3 text-sm font-semibold text-gray-600">Akshar Teams (in Total)</div>
                            <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-500">50</div>
                        </div>
                        <div className="shadow-md rounded-lg w-[100%;]" style={{backgroundColor: '#7da1ad'}}>
                                <div className="p-3 text-sm font-semibold text-gray-600">Total Graduated</div>
                                <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-600">50</div>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 mt-10 mb-2">
                        <div className="shadow-md rounded-lg w-[100%;] border md:h-[435px;]">
                                <div className="p-2 md:text-md text-gray-600 font-semibold">Average graduation rate per year</div>
                                <div className="justify-center items-center"><PieChart /></div>
                        </div>
                        <div className="shadow-md rounded-lg w-[100%;] border">
                            <div className="p-3 pt-2 md:text-md text-gray-600 font-semibold">Total teams incubated at IITMIC</div>
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
export default Teams;