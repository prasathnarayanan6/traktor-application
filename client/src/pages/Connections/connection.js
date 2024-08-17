import React from "react";
import SideBar from "../../components/sidebar";
import NavBar from "../../components/NavBar";
import { FaCross, FaExclamation, FaExclamationTriangle, FaFile, FaFileAlt, FaPagelines, FaPlusCircle, FaQuestion, FaSearch, FaTag, FaTrash } from "react-icons/fa";
import { FaGear, FaPage4, FaTrashCan } from "react-icons/fa6";
function Connection(){
    return (
        <div className="flex h-screen">
            <section className="">
                    <SideBar />
            </section>
            <section className="flex-grow">
                    <div className="fixed w-full">
                            <NavBar />
                    </div>
                    {/* //#0b5f66' */}
                    <div className="p-[90px;] h-full">
                            <h1 className="text-3xl font-semibold text-gray-500">Connections</h1>
                            <div className="grid grid-cols-2 mt-7 gap-10">
                                <div className="shadow-md font-semibold rounded-lg w-[100%;]" style={{backgroundColor: '#afdade'}}> 
                                            <div className="flex justify-center items-center"><button className="px-3 py-3 active:scale-[.98] active:duration-75 hover:scale-[1.08] ease-in-out transition-all" style={{color: '#0b5f66'}}><FaPlusCircle size={55  }/></button></div>
                                            <div className="text-center pb-3 text-gray-500">ADD CONNECTION</div>
                                </div>

                                <div className="shadow-md font-semibold rounded-lg w-[100%;]" style={{backgroundColor: '#afdade'}}> 
                                            <div className="flex justify-between p-3 text-xs border-b">
                                                <div className="text-sm">ID: cm.ie@imail.iitm.ac.in - Content</div>
                                                <div className="pt-1"><FaTrashCan size={14}/></div>
                                                <div className="pt-1"><FaTag size={14}/></div>
                                                <div className="pt-1 text-yellow-100"><FaExclamationTriangle size={14}/></div>
                                                {/* <div className="pt-1"><div className={`absolute inline-flex items-center justify-center w-[12px] h-[12px] text-xs font-bold text-white bg-red-500 border-0 border-white rounded-full top-[171px] end-[105px;] dark:border-gray-900 animate-pulse`}><span className="text-xs"></span></div></div> */}
                                            </div>
                                            <div className="grid grid-cols-3 gap-5 md:p-5">
                                                    <div className="flex justify-center items-center active:scale-[.98] active:duration-75 hover:scale-[1.08] ease-in-out transition-all" style={{color: '#0b5f66'}}><FaGear size={28}/></div>
                                                    <div className="flex justify-center items-center active:scale-[.98] active:duration-75 hover:scale-[1.08] ease-in-out transition-all" style={{color: '#0b5f66'}}><FaSearch size={28}/></div>
                                                    <div className="flex justify-center items-center active:scale-[.98] active:duration-75 hover:scale-[1.08] ease-in-out transition-all" style={{color: '#0b5f66'}}><FaFileAlt size={28}/></div>
                                            </div>
                                </div>

                                <div className="shadow-md font-semibold rounded-lg w-[100%;]" style={{backgroundColor: '#afdade'}}> 
                                            <div className="flex justify-between p-3 text-xs border-b">
                                                <div className="text-sm">ID: pm.ie@imail.iitm.ac.in - Sundar</div>
                                                <div className="pt-1"><FaTrashCan size={14}/></div>
                                                <div className="pt-1"><FaTag size={14}/></div>
                                                <div className="pt-1 text-yellow-100"><FaExclamationTriangle size={14}/></div>
                                                {/* <div className="pt-1"><div className={`absolute inline-flex items-center justify-center w-[12px] h-[12px] text-xs font-bold text-white bg-red-500 border-0 border-white rounded-full top-[171px] end-[105px;] dark:border-gray-900 animate-pulse`}><span className="text-xs"></span></div></div> */}
                                            </div>
                                            <div className="grid grid-cols-3 gap-5 md:p-5">
                                                    <div className="flex justify-center items-center active:scale-[.98] active:duration-75 hover:scale-[1.08] ease-in-out transition-all" style={{color: '#0b5f66'}}><FaGear size={28}/></div>
                                                    <div className="flex justify-center items-center active:scale-[.98] active:duration-75 hover:scale-[1.08] ease-in-out transition-all" style={{color: '#0b5f66'}}><FaSearch size={28}/></div>
                                                    <div className="flex justify-center items-center active:scale-[.98] active:duration-75 hover:scale-[1.08] ease-in-out transition-all" style={{color: '#0b5f66'}}><FaFileAlt size={28}/></div>
                                            </div>
                                </div>

                                <div className="shadow-md font-semibold rounded-lg w-[100%;]" style={{backgroundColor: '#afdade'}}> 
                                            <div className="flex justify-between p-3 text-xs border-b">
                                                <div className="text-sm">ID: tech_support.ie@imail.iitm.ac.in - Sath</div>
                                                <div className="pt-1"><FaTrashCan size={14}/></div>
                                                <div className="pt-1"><FaTag size={14}/></div>
                                                <div className="pt-1 text-yellow-100"><FaExclamationTriangle size={14}/></div>
                                                {/* <div className="pt-1"><div className={`absolute inline-flex items-center justify-center w-[12px] h-[12px] text-xs font-bold text-white bg-red-500 border-0 border-white rounded-full top-[171px] end-[105px;] dark:border-gray-900 animate-pulse`}><span className="text-xs"></span></div></div> */}
                                            </div>
                                            <div className="grid grid-cols-3 gap-5 md:p-5">
                                                    <div className="flex justify-center items-center active:scale-[.98] active:duration-75 hover:scale-[1.08] ease-in-out transition-all" style={{color: '#0b5f66'}}><FaGear size={28}/></div>
                                                    <div className="flex justify-center items-center active:scale-[.98] active:duration-75 hover:scale-[1.08] ease-in-out transition-all" style={{color: '#0b5f66'}}><FaSearch size={28}/></div>
                                                    <div className="flex justify-center items-center active:scale-[.98] active:duration-75 hover:scale-[1.08] ease-in-out transition-all" style={{color: '#0b5f66'}}><FaFileAlt size={28}/></div>
                                            </div>
                                </div>
                            </div>
                    </div>
            </section>
        </div>
    )
}
export default Connection;  