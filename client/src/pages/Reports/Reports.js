import React,{useState} from 'react'
import SideBar from '../../components/sidebar'
import NavBar from '../../components/NavBar'
import { FaFilter, FaGraduationCap, FaCheck } from 'react-icons/fa'
function Reports() {
  const[tick, setTick] = useState(false);
  const[type, setType] = useState('button');
  const[icon, setIcon] = useState(FaCheck);
  const handleActive = () => {
        setTick(!tick);
  }
  const handleGraduated = () => {
        setTick(!tick);
  }
  const handleDropped = () => {
        setTick(!tick);
  }
  return (
    <div className="flex">
        <section id="sidebar" className="max-w-[99px] min-w-[66px]">
            <SideBar />
        </section>
        <section id="" className="flex-grow">
            <NavBar />
            <div className="p-5 m-10 shadow-sm rounded-sm bg-gray-100">
                <span className="font-semibold mb-4">GENERATE REPORTS</span><br></br><br></br>
                <span className="text-gray-500 mt-3 ">Select Category</span><br></br><br></br>
                <button className="bg-green-500 p-2 align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] rounded-full"
                  type="button">Startups</button><br></br>
                <div className="shadow-sm bg-white mt-2 rounded-sm">
                    <div className="p-3"><span className="bg-blue-500 p-0 px-2 rounded-4xl font-semibold text-white">1</span><span className="font-semibold"> Filters</span></div>
                    <div className="shadow-sm m-7 p-4 rounded-sm border">
                        <span className="text-sm p-3"><button type="button" className="hover:bg-gray-100 p-2 rounded-sm text-green-500 text-xl"><FaFilter /> <span className="text-sm">Filter</span></button></span>
                        <div className="grid grid-cols-3 gap-4 m-1">
                            <div className="p-4 border">
                                <span className="font-semibold text-sm">Status</span>
                                <div className="grid grid-cols-3 gap-4 p-4">
                                    <button type="button" className="border border-green-400 px-1 py-1 rounded-md hover:bg-green-100" onClick={handleActive}>{tick && <FaCheck className="mr-1" />}Active</button>
                                    <button className="border border-blue-600 px-1 py-2 rounded-md hover:bg-blue-100" onClick={handleGraduated}>{tick && <FaCheck className="mr-1" />}Graduate</button>
                                    <button className="border border-red-600 px-1 py-1 rounded-md hover:bg-red-100" onClick={handleDropped}>{tick && <FaCheck className="mr-1" />}Dropped</button>
                                </div><br></br>
                                <div className="">
                                    <span className="font-semibold text-sm">Program</span>
                                    <div className="grid grid-cols-2 gap-4 m-3">
                                          <div className="px-5 py-1"><label><input type="checkbox"/> Nirmaan</label></div>
                                          <div className="px-5 py-1"><label><input type="checkbox"/> UGFIR</label></div>
                                          <div className="px-5 py-1"><label><input type="checkbox"/> KGMG</label></div>
                                          <div className="px-5 py-1"><label><input type="checkbox"/> SIP</label></div>
                                          <div className="px-5 py-1"><label><input type="checkbox"/> Discipined Entrepreneurship</label></div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border">
                                <span className="font-semibold text-sm">Sector</span><br></br>
                                <div className="relative">
                                            <select
                                                name="add_startup"
                                                className="w-full border-2 border-gray-200 rounded-md p-2 mt-3 bg-transparent hover:border-green-300 focus:outline-none"
                                            >
                                                <option value="">Select sector</option>
                                                <option value="">Algram Labgs</option>
                                            </select>
                                  </div><br></br>
                                  <span className="font-semibold text-sm">Cohort</span><br></br>
                                  <div className="relative">
                                              <select
                                                  name="add_startup"
                                                  className="w-full border-2 border-gray-200 rounded-md p-2 mt-3 bg-transparent hover:border-green-300 focus:outline-none"
                                              >
                                                  <option value="">Select cohort</option>
                                                  <option value="">Algram Labgs</option>
                                              </select>
                                    </div>
                            </div>
                            <div className="p-4 border">
                            <span className="font-semibold text-sm" >Stage</span><br></br>
                                <div className="relative">
                                            <select
                                                name="add_startup"
                                                className="w-full border-2 border-gray-200 rounded-md p-2 mt-3 bg-transparent hover:border-green-300 focus:outline-none"
                                            >
                                                <option value="">Select stage</option>
                                                <option value="">Algram Labgs</option>
                                            </select>
                                  </div><br></br>
                                  <span className="font-semibold text-sm">Mentors Associated</span><br></br>
                                  <div className="relative">
                                              <select
                                                  name="add_startup"
                                                  className="w-full border-2 border-gray-200 rounded-md p-2 mt-3 bg-transparent hover:border-green-300 focus:outline-none"
                                              >
                                                  <option value="">Select mentors</option>
                                                  <option value="">Algram Labgs</option>
                                              </select>
                                  </div>
                            </div>
                          
                        </div>
                        <button className="text-red-600 p-2">Cancel</button>
                        <button className="bg-green-500 p-1 font-semibold rounded-sm text-white">Next</button>
                    </div>
                    <div className="">
                            <div className="p-3"><span className="bg-blue-500 p-0 px-2 rounded-4xl font-semibold text-white">2</span><span className="font-semibold">Filtered Startups</span></div>
                            <div className="rounded-sm border m-7">
                                <div className="m-7 p-4 rounded-sm border">
                                          <div className="grid grid-cols-4 gap-4">
                                                    <div className=" p-4"><label><input type="checkbox"/> Team 1</label></div>
                                                    <div className=" p-4"><label><input type="checkbox"/> Team 2</label></div>
                                                    <div className=" p-4"><label><input type="checkbox"/> Team 3</label></div>
                                                    <div className=" p-4"><label><input type="checkbox"/> Team 4</label></div>
                                          </div>
                                </div>
                                <button className="text-red-600 p-2">Cancel</button>
                                <button className="bg-green-500 p-1 font-semibold rounded-sm text-white">Generate report</button>
                            </div><br></br>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
export default Reports