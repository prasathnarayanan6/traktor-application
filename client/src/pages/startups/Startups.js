import React, {useEffect, useState} from 'react'
import SideBar from '../../components/sidebar';
import NavBar from '../../components/NavBar';
import { FaCar, FaEllipsisV, FaEye, FaFileExcel, FaFilter, FaRecycle, FaUser, FaUserAlt, FaUserMd} from "react-icons/fa";
import axios from 'axios';
import profile from '../../assets/images/Nandhinimamtraktor.png';
import { FaGears, FaIndianRupeeSign } from 'react-icons/fa6';
import StackedHorizontalBarChart from '../../components/HorizontalChart';
import '../../components/styles/style.css';
function Startups() {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetchData();
    })
    const fetchData = async () => {
        try {
          const response = await axios.post('http://localhost:3007/api/v1/view');
          setData(response.data.rows); // Assuming your data is in response.data.rows
        } catch (error) {
          console.error('Error fetching data:', error);
        }
    };
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(true);
    }, [])
    const[startupsData, setStartupsData] = useState([])
    const [currentPage, setCurrentPage] = useState(1); 
    const [rowsPerPage, setRowsPerPage] = useState(3); 
    const UpdatedFundingData = async() => {
        try
        {
            const result = await axios.get('http://localhost:3003/api/v1/fetch-startup');
            setStartupsData(result.data.rows)
        }
        catch(err)
        {
          console.log(err);
        }
      }
      useEffect(()=> {
        UpdatedFundingData()
      }, [])


      const indexOfLastMentor = currentPage * rowsPerPage;
      const indexOfFirstMentor = indexOfLastMentor - rowsPerPage;
      const currentMentors = startupsData.slice(indexOfFirstMentor, indexOfLastMentor);
      const totalPages = Math.ceil(startupsData.length / rowsPerPage);
        const handleNextPage = () => {
            if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            }
        };
        const handlePreviousPage = () => {
            if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            }
        };
  return (
    <div className="h-screen flex">
                    <section id="SideBar" className="fixed h-full">
                        <SideBar />
                    </section>
                    <section className="flex-grow">
                        <div className="fixed w-full">
                            <NavBar />
                        </div>
                        <div className="p-[90px;] h-full">
                        <div className="flex justify-between">
                                <h1 className="p-0 text-3xl font-semibold text-gray-500">Startups</h1>
                                <a href={'/addstartup'} className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md text-white" style={{backgroundColor: '#0b5f66'}}>Add new Startup</a>
                        </div>
                        <h1 className="p-0 text-lg text-gray-500 mt-1 ms-1  ">Analytics</h1>
                            <div className={`flex justify-center items-center content ${show ? "visible": ""}`}>
                                        <div className="shadow-md rounded-md mt-10 border flex justify-center items-center md:w-[95%]">
                                                <table className="table-fixed w-full text-sm p-2">
                                                        <thead>
                                                        <tr>
                                                            <th className="px-5 py-2 text-left text-green-600">Name</th>
                                                            <th className="px-5 py-2 text-left text-green-600">Sector</th>
                                                            <th className="px-5 py-2 text-left text-green-600">Program</th>
                                                            <th className="px-5 py-2 text-left text-green-600">Founder Name</th>
                                                            <th className="px-5 py-2 text-left text-green-600">Action</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                            {currentMentors.length > 0 ? (
                                                                currentMentors.map((dataObj, index) => (
                                                                    <tr key={index} className="border-t border-gray-300 hover:bg-gray-100">
                                                                    <td className="px-5 py-2">{dataObj.startup_name}</td>
                                                                    <td className="px-5 py-2">{dataObj.startup_sector}</td>
                                                                    <td className="px-5 py-2">{dataObj.program}</td>
                                                                    <td className="px-5 py-2">{dataObj.founder_name}</td>
                                                                    <td className="px-5 py-2">
                                                                        <button>
                                                                        <FaEllipsisV />
                                                                        </button>
                                                                    </td>
                                                                    </tr>
                                                                ))
                                                                ) : (
                                                                <tr>
                                                                    <td colSpan="5" className="text-center py-2">
                                                                    No data available
                                                                    </td>
                                                                </tr>
                                                            )}
                                                        </tbody>
                                                </table>     
                                        </div>
                            </div>
                            <div className="flex justify-between items-center p-4">
                                    <button
                                    onClick={handlePreviousPage}
                                    disabled={currentPage === 1}
                                    className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md"
                                    style={{ backgroundColor: '#afdade' }}
                                    >
                                    Previous
                                    </button>
                                    <span className="text-sm">
                                    Page {currentPage} of {totalPages}
                                    </span>
                                    <button
                                    onClick={handleNextPage}
                                    disabled={currentPage === totalPages}
                                    className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md"
                                    style={{ backgroundColor: '#afdade' }}
                                    >
                                    Next
                                    </button>
                            </div>
                            <h1 className="text-3xl text-gray-500 font-semibold mt-3">Sectors</h1>
                            <div className={`grid md:grid-cols-5 gap-2 mt-3 pb-2 content ${show ? "visible": ""}`}>
                                        <a href="/industrystartups" className="active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-all">
                                            <div className="shadow-md font-semibold rounded-lg w-[100%;] text-gray-600" style={{backgroundColor: '#afdade'}}>
                                                    <div className="p-1 grid grid-cols-2">
                                                            <div className="justify-center flex items-center pt-1 ps-4" style={{color: '#0b5f66'}}>Industry 4.0</div>
                                                            <div className="justify-center flex items-center pt-3 pb-3" style={{color: '#0b5f66'}}><FaGears size={45}/></div>
                                                    </div>
                                            </div>
                                        </a>
                                        <a className="active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-all">
                                            <div className="shadow-md rounded-lg w-[100%;] font-semibold text-gray-600" style={{backgroundColor: '#afd5de'}}>
                                                    <div className="p-1 grid grid-cols-2">
                                                            <div className="justify-center flex items-center pt-1 ps-4" style={{color: '#0b5f66'}}>Healthcare</div>
                                                            <div className="justify-center flex items-center pt-3 pb-3" style={{color: '#0b5f66'}}><FaUserMd size={45}/></div>
                                                    </div>
                                            </div>
                                        </a>
                                        <a className="active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-all">
                                            <div className="shadow-md rounded-lg w-[100%;] font-semibold text-gray-600" style={{backgroundColor: '#afcdde'}}>
                                                    <div className="p-1 grid grid-cols-2">
                                                            <div className="justify-center flex items-center pt-1 ps-4" style={{color: '#0b5f66'}}>Sustainability</div>
                                                            <div className="justify-center flex items-center pt-3 pb-3" style={{color: '#0b5f66'}}><FaRecycle size={45}/></div>
                                                    </div>
                                            </div>
                                        </a>
                                        <a href="/fintechstartups" className="active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-all">
                                            <div className="shadow-md rounded-lg w-[100%;] font-semibold text-gray-600" style={{backgroundColor: '#97bfcc'}}>
                                                    <div className="p-1 grid grid-cols-2">
                                                            <div className="justify-center flex items-center pt-1 ps-4" style={{color: '#0b5f66'}}>FinTech</div>
                                                            <div className="justify-center flex items-center pt-3 pb-3" style={{color: '#0b5f66'}}><FaIndianRupeeSign size={45}/></div>
                                                    </div>
                                            </div>
                                        </a>
                                        <a href="/mobilitystartups" className="active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-all">
                                            <div className="shadow-md rounded-lg w-[100%;] font-semibold text-gray-600" style={{backgroundColor: '#7dada3'}}>
                                                    <div className="p-1 grid grid-cols-2">
                                                            <div className="justify-center flex items-center pt-1 ps-4" style={{color: '#0b5f66'}}>Mobility</div>
                                                            <div className="justify-center flex items-center pt-3 pb-3" style={{color: '#0b5f66'}}><FaCar size={45}/></div>
                                                    </div>  
                                            </div>
                                        </a>
                            </div>
                        </div>
                    </section>
    </div>
  )
}
export default Startups;