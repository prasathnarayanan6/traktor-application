import React, { useState, useEffect } from "react";
import SideBar from "../../components/sidebar";
import NavBar from "../../components/NavBar";
import AddConnections from "../../components/AddConnections";
import { CSSTransition } from "react-transition-group";
import {FaExclamationTriangle, FaFileAlt, FaPlusCircle, FaSearch, FaTag} from "react-icons/fa";
import { FaGear, FaPage4, FaTrashCan } from "react-icons/fa6";
import { ApiAddConnections } from "../../API/API";
import '../../components/styles/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Connection(){
    const [openPopUp, setOpenpopup] = useState(false);
    const handleShow = () => setOpenpopup(true);
    const [AddConnection, setAddConnection] = useState({
        name: '',
        designation: '',
        organisation: '',
        connect_for: '',
        contact_number: '',
        email_address: ''
    })
console.log(AddConnection);
      const handleChange = (e) => {
        const {name, value} = e.target;
        setAddConnection((prevData)=>({  
            ...prevData,
            [name]: value,
        })) 
      }
      const handleClick = async (e) =>{
          e.preventDefault();
          try
          {
            const API = await ApiAddConnections(AddConnection);
            if(API)
            {
                toast.success('Connection Added');
            }
          }
          catch(err)
          {
            if(err.response)
            {
                if(err.response.status==400)
                {
                    toast.error("All Fields are required");
                }
                else if(err.response.status==422)
                {
                    toast.error('Please provide a valid email')
                }
                else if(err.response.status=403)
                {
                    toast.error('Please provide a valid contact number')
                }
            }
            else {
                console.log(err.message);
            }
          }
      }
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(true);
    }, [])
    return (
        <div className="flex h-screen">
            <section className="">
                    <SideBar />
            </section>
            <section className="flex-grow">
                    <div className="fixed w-full">
                            <NavBar />
                    </div>
                    <div className={`p-[90px;] h-full`}>
                            <h1 className="text-3xl font-semibold text-gray-500">Connections</h1>
                            <div className={`grid grid-cols-2 mt-7 gap-10 content ${show ? "visible": ""}` }>
                                <div className="shadow-md font-semibold rounded-lg w-[100%;]" style={{backgroundColor: '#afdade'}}> 
                                            <div className="flex justify-center items-center"><button className="px-3 py-3 active:scale-[.98] active:duration-75 hover:scale-[1.08] ease-in-out transition-all" style={{color: '#0b5f66'}} onClick={handleShow}><FaPlusCircle size={55  }/></button></div>
                                            <div className="text-center pb-3 text-gray-500">ADD CONNECTION</div>
                                </div>

                                <div className="shadow-md font-semibold rounded-lg w-[100%;]" style={{backgroundColor: '#afdade'}}> 
                                            <div className="flex justify-between p-3 text-xs border-b">
                                                <div className="text-sm">ID: cm.ie@imail.iitm.ac.in - Content</div>
                                                <div className="pt-1"><FaTrashCan size={14}/></div>
                                                <div className="pt-1"><FaTag size={14}/></div>
                                                <div className="pt-1 text-yellow-100"><FaExclamationTriangle size={14}/></div>
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
            <AddConnections isVisible={openPopUp} onClose={()=>setOpenpopup(false)}>
                    <h1 className="text-xl p-3 pb-3 text-gray-500">Register for new connection</h1>
                    <form onSubmit={handleClick}>
                    <div className="grid grid-cols-2 p-3 gap-4">
                            <div class="relative">
                                <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " name="name" onChange={handleChange}/>
                                <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Name</label>
                            </div>
                            <div class="relative">
                                <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " name="designation" onChange={handleChange}/>
                                <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Designation</label>
                            </div>
                            <div class="relative">
                                <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " name="organisation" onChange={handleChange}/>
                                <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Organisation</label>
                            </div>
                            <div class="relative">
                                <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " name="connect_for" onChange={handleChange}/>
                                <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Connect For?</label>
                            </div>
                            <div class="relative">
                                <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " name="contact_number" onChange={handleChange} />
                                <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Contact Number</label>
                            </div>
                            <div class="relative">
                                <input type="text" id="floating_outlined" class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " name="email_address" onChange={handleChange}/>
                                <label for="floating_outlined" class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email Address</label>
                            </div>
                    </div>
                    <div className="flex justify-center items-center"><button className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md active:scale-[.98] active:duration-75 hover:scale-[1.08] ease-in-out transition-all" style={{backgroundColor : '#afdade'}}>Register</button></div>
                    </form>
            </AddConnections>
        </div>
    )
}
export default Connection;  