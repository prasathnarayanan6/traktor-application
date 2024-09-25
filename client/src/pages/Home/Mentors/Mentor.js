import React, {useEffect, useState} from "react";
import PieChart from "../../../components/Graph";
import DonutChart from "../../../components/DonutChart";
import '../../../components/styles/style.css'
import LineChart from "../../../components/LineChart";
import axios from "axios";
import { ApiFetchMentorCount } from "../../../API/API";
function Mentor(props){
    console.log(props)
    const [show, setShow] = useState(false);
    const [data, setData] = useState([]); 
    const getData = async() => {
        try
        {
            const result = await ApiFetchMentorCount();
            // console.log(result.rows[0].count);
            setData(result.rows);
        }
        catch(err)
        {
            console.log(err);
        }
    }
    useEffect(() => {
        getData();
        setShow(true);
    }, [])
    //console.log(data.rows);
    return (
        <div className={`grid md:grid-cols-4 gap-4 mt-2 grid-cols-1 content ${show ? "visible": ""}`}>
                    <div className="col-span-3 gap-3">
                            <div className="grid md:grid-cols-3 gap-2">
                                <div className="shadow-md font-semibold rounded-lg w-[100%;]" style={{backgroundColor: '#afdade'}}>
                                {Array.isArray(data) && data.length > 0 ? (
                                    data.map((dataObj, index) => (
                                        <div key={index}>
                                                <div className="p-4 text-sm text-gray-600">Mentors in total</div>
                                                <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-500">{dataObj.count}</div>  
                                        </div>
                                    ))
                                    ) : (
                                    <>
                                        <div className="p-4 text-sm text-gray-600">Mentors in total</div>
                                        <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-500">NA</div>
                                    </>
                                    )}   
                                </div>
                                <div className="shadow-md rounded-lg w-[100%;]" style={{backgroundColor: '#afd5de'}}>
                                    <div className="p-3 text-sm font-semibold text-gray-600">Mentoring Sessions</div>
                                    <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-500">{props?.props?.Mentors?.Session_Total || "NA"}</div>
                                </div>
                                <div className="shadow-md rounded-lg w-[100%;]" style={{backgroundColor: '#afcdde'}}>
                                        <div className="p-3 text-sm font-semibold text-gray-600">Total Mentoring Hours</div>
                                        <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-500">30</div>
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
export default Mentor;