import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import img from '../assets/images/nirmaan-iitm.14fdf833.svg';
import profile from '../assets/images/Nandhinimamtraktor.png';
import {FaArrowAltCircleDown, FaBars, FaComment, FaEye, FaList, FaPaperPlane, FaRegBell, FaUserCircle } from 'react-icons/fa';
import axios from 'axios';
import APP_URL from '../Config';
import { jwtDecode } from 'jwt-decode';
import ProfileModal from './ProfileModal';
import Messages from './Messages';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { FaEllipsis, FaMessage, FaPerson } from 'react-icons/fa6';
import Notification from './Notification';
function NavBar({toggleSideBar}) {
  const [openNav, setOpenNav] = useState(false);
  const openSideBar = () => {
        setOpenNav(!openNav);
        toggleSideBar();
  }
  const navigate = useNavigate();
  const [bellBlinkChange, setBlinkChange] = useState('')
  const currentPath = window.location.pathname;
  const showArrowIcon = currentPath === '/home';
  const [isBellHovered, setIsBellHovered] = useState(false);
  const [profileHover, setProfileHover] = useState(false);
  // const [rocketHover, setRocketHover] = useState(false);
  // const [arrowHover, setArrowHover] = useState(false);
  const [signOut, setSignOut] = useState(false);
  const [messageNotify, setMessageNotification] = useState(false);
  const handleShow = () => setMessageNotification(true);
  const handleClose = () => setMessageNotification(false);
  const handleMouseEnter = () => {
    setProfileHover(true);
  }
  const handleMouseLeave = () => {
    setProfileHover(false);
  }
  const styles = {
      transform: isBellHovered?"rotate(30deg)" : "",
      transitionTimingFunction: isBellHovered?"ease-in" : "",
      transition: isBellHovered?"0.30s":""
  }
  const handleBellHover = () => {
    setIsBellHovered(!isBellHovered);
  };
  const handleSignOut = () => {
      const token = localStorage.removeItem('token');
      if(!token)
      {
        navigate('/')
      }
  }
  let result = localStorage.getItem('token');
  const[showModal, setShowModal] = useState(false);
  const[showMessages, setShowMessages] = useState(false);
  const[enc, setEnc] = useState('');
  useState(()=>{
    try
    {
      if(!result || result.split('.').length !== 3){
        throw new Error("Invalid format")
      }
      const decoded = jwtDecode(result);
      console.log(decoded);
      let x = decoded.user_mail;
      setEnc(x);
      return
    }
    catch(err)
    {
        console.log(err);
    }
  }, [])
  const[tokenData, setTokenData] = useState('')
  const ProfileView = async() => {
    const result = await axios.get(APP_URL+`profile-data/${enc}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
    });
    if(result.data.message === "Invalid Token!")
    {
        localStorage.removeItem('token');
    }
    else
    {
      setTokenData(result.data.result.rows[0]);
    }
  }
  const NotificationsData = async() => {
    try{
      const result = await axios.get(`http://localhost:3003/api/v1/notification`, {
        headers: {
          // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
        })
        //console.log(result.data.result);
        if(result.data.result.rows[0].status === "pending")
        {
            setBlinkChange('bg-red-500')
            console.log(result);
        }
        else if(result.data.result.rows[0].status === "approved")
        {
          setBlinkChange('');
        }
    }
    catch(err)
    {
        console.log(err);
    }
   
  }
  return (
    <div className="navbar">
          <nav className="dark:bg-gray-900 shadow-sm border-10" style={{ backgroundColor: '#0b5f66' }}>
            <div className="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto p-2">
              <button className="text-white text-xl" onClick={openSideBar}><FaBars /></button>
              <a href="https://github.com/prasathnarayanan6/nirmaan-vc-app" className="flex space-x-3 rtl:space-x-reverse">
                  <img src={img} className="h-10" alt="Flowbite Logo" />
                  <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white text-green-500 hover:text-green-500 transition-all eas-in-out active:scale-[.100] active:duration-75"><i>Trak<span className="text-white">tor</span></i></span>
              </a>
              {/* <input type="text" placeholder="Search" class="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 shadow-sm text-gray-700 placeholder-gray-400 h-8"/> */}
              <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
              </button>
              <div className="hidden w-full md:block md:w-auto lg:w-auto" id="navbar-default">
                <ul className="font-medium flex flex-col p-6 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-gray-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" style={{ backgroundColor: '#0b5f66' }}>
                  <li>
                     <button onClick={handleShow}  className="relative -left-10 block py-2 px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-1 dark:text-white md:dark:text-blue-500 text-xl hover:text-white rounded-3xl hover:rounded-2xl transition-all duration-200 ease-linear cursor-pointer group;" onMouseEnter={handleBellHover} onMouseLeave={handleBellHover}>
                        <FaMessage className="mt-[4px;] text-2xl"/> <span class="sr-only">Notifications</span>
                        <div className={`absolute inline-flex items-center justify-center w-[9px;] h-[9px;] text-xs font-bold text-white bg-green-200 border-0 border-white rounded-full top-1 end-[2px;] dark:border-gray-900 animate-pulse`}><span className="text-xs"></span></div>
                     </button>
                  </li>
                  <li>
                     <a href="/home"   className="relative -left-10 block py-2 px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-300 md:p-1 dark:text-white md:dark:text-blue-500 text-xl hover:text-white rounded-3xl hover:rounded-2xl transition-all duration-200 ease-linear cursor-pointer group;" onMouseEnter={handleBellHover} onMouseLeave={handleBellHover}>
                        <FaRegBell className="mt-[4px;] text-2xl"/> <span class="sr-only">Notifications</span>
                        <div className={`absolute inline-flex items-center justify-center w-[9px;] h-[9px;] text-xs font-bold text-white bg-red-400 border-0 border-white rounded-full top-1 end-[5px;] dark:border-gray-900`}><span className="text-xs"></span></div>
                     </a>
                  </li>
                  <li>
                      <div className="block py-2 px-2 text-white bg-blue-700 rounded md:bg-transparent md:text-gray-300 md:p-1 dark:text-white md:dark:text-blue-500 text-xl hover:text-white rounded-3xl hover:rounded-2xl transition-all duration-300 ease-linear cursor-pointer group; relative -left-10 bg-white" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ><img className="w-8 h-8 rounded-full" src={profile} alt="user photo" />
                            {profileHover && (
                                <div className="absolute top-[33px;] right-[-24px;] mt-1 w-30 border bg-white shadow-sm rounded-lg shadow-sm items-center w-[230%]">
                                    <a href="/settings" className="block py-2 px-4 text-sm text-black text-center">Settings</a>
                                    <a href="/profile" className="block py-2 px-4 text-black text-sm text-center justify-center items-center">Profile</a>
                                    <a onClick={handleSignOut} className="block py-2 px-4 text-black text-sm text-center justify-center items-center">SignOut</a>
                                </div>
                            )}
                      </div>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Notification isVisible={messageNotify} onClose={handleClose}>
                      <div className="grid grid-cols-3 gap-1 shadow-md p-0 border bg-white rounded-2xl">  
                            <div className="text-center p-2 items-start justify-start flex"><img src={profile} className="w-12 h-12 rounded-full"/></div>
                            <div className="text-sm pt-5 font-semibold ps-1 ">Requested for Aws</div>
                            <div className="p-4 items-center justify-end flex"><FaEllipsis /></div>
                      </div>
          </Notification>
          <ProfileModal isVisible={showModal} onClose={()=>setShowModal(false)}>
                      <center><img src={img} className="h-[60px;]" alt="Flowbite Logo" /></center>
                      <div className="grid grid-cols-2 cols-2 gap-4">
                                    <input name="name" 
                                        className="w-full border-2 border-gray-200 rounded-md p-2 mt-3 bg-transparent hover:border-green-300"
                                        placeholder="Name"
                                        Value={tokenData.user_name}
                                    />
                                    <input name="insti-type" 
                                        className="w-full border-2 border-gray-200 rounded-md p-2 mt-3 bg-transparent hover:border-green-300"
                                        placeholder="Institution type"
                                    />
                                    <input name="sector" 
                                        className="w-full border-2 border-gray-200 rounded-md p-2 mt-3 bg-transparent hover:border-green-300"
                                        placeholder="Sector"
                                        Value={tokenData.user_department}
                                    />
                                    <input name="Email" 
                                        className="w-full border-2 border-gray-200 rounded-md p-2 mt-3 bg-transparent hover:border-green-300"
                                        placeholder="Email"
                                        value={tokenData.user_mail}
                                    />
                                    <input name="contact_number" 
                                        className="w-full border-2 border-gray-200 rounded-md p-2 mt-3 bg-transparent hover:border-green-300"
                                        placeholder="Contact Number"
                                    />
                                    <input name="website" 
                                        className="w-full border-2 border-gray-200 rounded-md p-2 mt-3 bg-transparent hover:border-green-300"
                                        placeholder="Website"
                                    />
                                    <input name="linkedin" 
                                        className="w-full border-2 border-gray-200 rounded-md p-2 mt-3 bg-transparent hover:border-green-300"
                                        placeholder="Linked In"
                                    />
                                    <input name="ceo_name" 
                                        className="w-full border-2 border-gray-200 rounded-md p-2 mt-3 bg-transparent hover:border-green-300"
                                        placeholder="CEO name"
                                        value={tokenData.user_name}
                                    />
                                    <input name="ceo_email" 
                                        className="w-full border-2 border-gray-200 rounded-md p-2 mt-3 bg-transparent hover:border-green-300"
                                        placeholder="CEO email"
                                        value={tokenData.personal_email}
                                    />
                                    <input name="ceo_contact_number" 
                                        className="w-full border-2 border-gray-200 rounded-md p-2 mt-3 bg-transparent hover:border-green-300"
                                        placeholder="CEO contact number"
                                        value={tokenData.user_contact}
                                    />
                                    <button className="text-red-400 font-bold active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-all">Cancel</button>
                                    <button className="text-white bg-green-400 rounded-sm font-bold active p-1 active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-all">Update</button>
                      </div>
          </ProfileModal>
    </div>
  )
}
export default NavBar;
