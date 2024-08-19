import React, {useState, useEffect} from "react";
import SideBar from "../../components/sidebar";
import NavBar from "../../components/NavBar";
import { FaBookOpen, FaCheck, FaGraduationCap, FaRegBuilding } from "react-icons/fa";
import PieChart from "../../components/Graph";
import DonutChart from "../../components/DonutChart";
import '../../components/styles/style.css'
import LineChart from "../../components/LineChart";
import Investor from "./Investor/Investor";
import HomeFinance from "./Finance/Finance";
import Teams from "./Teams/Teams";
import {SkeletonLoader, SkeletonChartLoader, SkeletonChartLoader2} from "../../components/SkeletonLoader";
import axios from "axios";
import Mentor from "./Mentors/Mentor";
function Home() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [color, setColor] = useState(['#afdade', '#afd5de', '#afcdde', '#99b6bf', '#afd5de']);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [screenSize, setScreenSize] = useState('sm:')
    const darkColor = '#0b5f66';
    const toggleSideBar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const[analysis, setAnalysis] = useState('home');

    const handleButtonClick = (index) => {
        setSelectedIndex(selectedIndex === index ? null : index);
        if (selectedIndex === index) {
            setSelectedIndex(null);
            setAnalysis('home');
        } else {
            setSelectedIndex(index);
            const analysisOptions = ['home', 'teams', 'mentors', 'finance', 'investor'];
            setAnalysis(analysisOptions[index]);
        }
    };
    const [userList, setUserList] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(true);
    }, [])
    useEffect(() => {
        const loaded = () => {
            setTimeout(()=>{
                axios.get('https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole')
                .then(res => {
                    setUserList(res.data);
                    setIsLoaded(true)
                })
            }, 2000)
        }
        loaded()
    })
    return (
            <div className="h-screen flex">
                 {isSidebarOpen && (
                    <section id="SideBar" className="fixed h-full">
                        <SideBar />
                    </section>
                )}
                <section id="" className="flex-grow">
                        <div className="fixed w-full">
                            <NavBar />
                        </div>
                        <div className="p-[90px;] h-full">
                                <div className="flex justify-between items-center mb-1 ms-[640px;]">
                                         {color.map((colors, index) => (
                                            <button
                                            key={index}
                                            className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md"
                                            style={{ backgroundColor: selectedIndex === index ? darkColor : colors,
                                                color: selectedIndex === index ? 'white' : 'initial'
                                             }}
                                            onClick={() => handleButtonClick(index)}
                                            >
                                            {['Home', 'Teams', 'Mentors', 'Finance', 'Investor'][index]}
                                            </button>
                                        ))}
                                </div>
                                <h1 className="text-3xl font-semibold text-gray-500 mb-7 mt- justify-content-center items-center">Welcome Manager</h1>
                                    { analysis === 'home' && (
                                        // {`grid grid-cols-2 mt-7 gap-10 content ${show ? "visible": ""}` }
                                        <div className={`grid md:grid-cols-4 gap-4 mt-2 grid-cols-1 content ${show ? "visible": ""}`}> 
                                        <div className="col-span-3 gap-3 overflow-hidden">
                                                <div className="grid md:grid-cols-4 gap-2">
                                                        {!isLoaded ? (
                                                                <SkeletonLoader />
                                                            ) : (
                                                                <div className="shadow-md font-semibold rounded-lg w-[100%;]" style={{backgroundColor: '#afdade'}}>
                                                                    <div className="p-4 text-md text-gray-600">Total Startups</div>
                                                                    <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-500">200</div>
                                                                </div>
                                                            )
                                                        }
                                                        {!isLoaded ? (
                                                                    <SkeletonLoader />
                                                                ) : (
                                                                    <div className="shadow-md rounded-lg w-[100%;]" style={{backgroundColor: '#afd5de'}}>
                                                                            <div className="p-3 text-md font-semibold text-gray-600">Active Startups</div>
                                                                            <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-500">50</div>
                                                                    </div>
                                                                )
                                                        }
                                                        {!isLoaded ? (
                                                            <SkeletonLoader />
                                                            ) : (
                                                                <div className="shadow-md rounded-lg w-[100%;]" style={{backgroundColor: '#afcdde'}}>
                                                                    <div className="p-3 text-md font-semibold text-gray-600">Graduated</div>
                                                                    <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-500">30</div>
                                                                </div>
                                                            )

                                                        }
                                                        {!isLoaded ? (
                                                            <SkeletonLoader />
                                                        ) : (
                                                                <div className="shadow-md rounded-lg w-[100%;]" style={{backgroundColor: '#7da1ad'}}>
                                                                    <div className="p-3 text-md font-semibold text-gray-600">Dropped</div>
                                                                    <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-600">69</div>
                                                                </div>
                                                        )}
                                                </div>
                                                <div className="grid md:grid-cols-2 gap-6 mt-10 mb-2">
                                                        {!isLoaded ? (
                                                            <SkeletonChartLoader2 />
                                                        ) : (
                                                            <div className="shadow-md rounded-lg w-[100%;] border md:h-[435px;]">
                                                                     <div className="p-2 md:text-lg text-gray-600 font-semibold">Sectors Available</div>
                                                                    <div className="justify-center items-center"><PieChart /></div>
                                                            </div>
                                                        )}
                                                        {!isLoaded ? (
                                                            <SkeletonChartLoader2 />
                                                        ) : (
                                                            <div className="shadow-md rounded-lg w-[100%;] border md:h-[435px;]">
                                                                <div className="p-3 pt-2 md:text-lg text-gray-600 font-semibold">Funding Distributed across Sectors</div>
                                                                <div className="justify-center items-center"><PieChart /></div>
                                                            </div>
                                                        )}
                                                </div>
                                        </div>
                                        <div className="col-span-1  gap-3 mb-2">
                                                <div className="grid grid-cols-1 gap-3 mb-2">
                                                        {!isLoaded ? (
                                                            <SkeletonChartLoader />
                                                        ) : (
                                                            <div className="shadow-md font-semibold rounded-lg w-full md:h-[300px;] border">
                                                                <div className="p-2 pt-1 text-xs text-gray-600 font-semibold">Women across industry</div>
                                                                <div className="flex justify-center items-center mb-1">
                                                                    <div className="w-50 h-50 overflow-hidden">
                                                                        <DonutChart/>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )}
                                                </div>
                                                <div className="grid grid-cols-1 gap-3 mb-2">
                                                        {!isLoaded ? (
                                                            <SkeletonChartLoader />
                                                            ) : (
                                                                <div className="shadow-md font-semibold rounded-lg w-full md:h-[300px;] border">
                                                                    <div className="p-2 pt-1 text-sm text-gray-600 font-semibold">Total Mentoring hours across sector</div>
                                                                    <div className="flex justify-center items-center mb-1">
                                                                        <div className="w-50 h-50 overflow-hidden">
                                                                            <DonutChart/>
                                                                        </div>
                                                                    </div>
                                                                </div>    
                                                        )}
                                                </div>
                                        </div>
                                    </div>
                                    )}
                                    {analysis === 'teams' && (
                                        <Teams/>
                                    )}
                                    {analysis === 'investor' &&(
                                        <Investor />
                                    )}
                                    {analysis === 'finance' && (
                                        <HomeFinance />
                                    )}
                                    {analysis === 'mentors' && (
                                        <Mentor />
                                    )}
                        </div>
                </section>
            </div>
    );
}
export default Home;