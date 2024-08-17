import React, {useState} from 'react'
import NavBar from '../../components/NavBar';
import SideBar from '../../components/sidebar';
import img from '../../assets/images/Nandhinimamtraktor.png';
import { FaMailBulk, FaPhone, FaSuitcase } from 'react-icons/fa';
function Profile() {
  const [hover, setHover] = useState(false);  
    const handleRippleEffect = (e) => {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const ripple = document.createElement("span");
  
      ripple.classList.add("ripple-effect");
      ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + "px";
      ripple.style.left = e.clientX - rect.left - (ripple.offsetWidth / 2) + "px";
      ripple.style.top = e.clientY - rect.top - (ripple.offsetHeight / 2) + "px";
  
      button.appendChild(ripple);
  
      setTimeout(() => ripple.remove(), 500); // Remove ripple after animation
    };
  return (
    <div className="h-screen flex">
                <section id="SideBar" className="fixed h-full">
                    <SideBar />
                </section>
                <section id="" className="flex-grow">
                        <div className="fixed w-full">
                            <NavBar />
                        </div>
                        <div className="p-[90px;] h-full">
                                  {/* <div className="flex justify-center items-center"><img class="w-[120px;] h-[120px;] rounded-full shadow-md border" src={img} alt="user photo" /></div> 
                                  <div className="flex justify-center items-center pt-2 text-xl font-semibold">Welcome, Manager</div>
                                  <div className="grid grid-cols-3 mt-7 gap-6 mb-3">
                                      <input type="text" placeholder="Name" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md"/>
                                      <input type="text" placeholder="Institution type" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md"/>
                                      <input type="text" placeholder="Sector" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md"/>
                                      <input type="text" placeholder="Contact" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md"/>
                                      <input type="text" placeholder="Website" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md"/>
                                      <input type="text" placeholder="LinkedIn" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md"/>
                                      <input type="text" placeholder="CEO Name" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md"/>
                                      <input type="text" placeholder="CEO Email" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md"/>
                                      <input type="text" placeholder="CEO Contact" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md"/>
                                  </div>
                                  <div className="flex justify-center items-center">
                                      <button className="mt-3 bg-green-300 text-gray-100 px-10 py-1 rounded-2xl text-xl hover:bg-green-700 ripple" style={{backgroundColor: hover ? '#0b5f66' : '#7da1ad'}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={handleRippleEffect}>Update</button>
                                  </div> */}
                                  <div className="flex justify-start items-start pt-2 text-3xl font-semibold text-gray-500 border-b pb-2">My Profile</div>
                                  <div className="grid grid-cols-2 gap-2 mt-4">
                                        <div className="border shadow-sm">
                                            <div className="flex justify-center items-center pt-5"><img class="w-[80px;] h-[80px;] rounded-full shadow-md border" src={img} alt="user photo" /></div>
                                            <div className="flex justify-center items-center pt-2 text-xl font-semibold">Manager</div>
                                            <div className="flex justify-center items-center text-xs text-gray-500 font-semibold">Administrator</div>
                                            <div className="flex justify-center items-center ps-2 mt-5 text-gray-500"> 
                                              <ul>
                                                  <li className="grid grid-cols-[auto_1fr] gap-3"> <span className="pt-1"><FaPhone size={15}/></span><span className="">+91-123456798</span></li>
                                                  <li className="grid grid-cols-[auto_1fr] gap-3 pt-2"><span className="pt-1"><FaMailBulk size={15}/></span><span className="">test@data.in</span></li>
                                                  <li className="grid grid-cols-[auto_1fr] gap-3 pt-2"><span className="pt-1"><FaSuitcase size={15}/></span><span className="">Administrator</span></li>
                                              </ul>
                                            </div>

                                        </div>
                                        <div className="border">
                                              <div className="p-2 font-semibold">Profile Settings</div>
                                              <div className="grid grid-cols-1 gap-3 p-2">
                                                 <input type="text" placeholder="Name" className="rounded-md border-1 focus:ring-green-700 focus:border-green-500 shadow-sm mb-2"/>
                                                 <input type="text" placeholder="Email" className="rounded-md border-1 focus:ring-green-700 focus:border-green-500 shadow-md mb-2"/>
                                                 <input type="text" placeholder="Contact" className="rounded-md border-1 focus:ring-green-700 focus:border-green-500 shadow-md mb-2"/>
                                                 <input type="text" placeholder="Sector" className="rounded-md border-1 focus:ring-green-700 focus:border-green-500 shadow-md mb-2"/>
                                                 <div className="flex justify-center items-center">
                                                    <button className="mt-3 bg-green-300 text-gray-100 px-10 py-1 rounded-2xl text-xl hover:bg-green-700 ripple" style={{backgroundColor: hover ? '#0b5f66' : '#7da1ad'}} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onClick={handleRippleEffect}>Update</button>
                                                 </div>
                                              </div>
                                        </div>
                                        {/* <div className="border mb-2 shadow-sm">
                                              <div className="p-2 font-semibold">Authentication Details</div>
                                              <div className="p-2 text-gray-500">
                                                  <div className="grid grid-cols-[auto_1fr] gap-5 pt-2">
                                                      <div>User Name: </div>
                                                      <div className="font-semibold">Manager</div>
                                                  </div>
                                                  <div className="grid grid-cols-[auto_1fr] gap-5 pt-2">
                                                      <div>Last Login: </div>
                                                      <div className="font-semibold">Wednesday 12th July</div>
                                                  </div>
                                                  <div className="grid grid-cols-[auto_1fr] gap-5 pt-2">
                                                      <div>Registered: </div>
                                                      <div className="font-semibold">July 12th, 2023</div>
                                                  </div>
                                              </div>
                                        </div> */}
                                  </div>
                        </div>
                </section>
            </div>
  )
}

export default Profile;