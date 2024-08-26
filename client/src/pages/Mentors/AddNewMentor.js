import React from "react";
import SideBar from "../../components/sidebar";
import NavBar from "../../components/NavBar";
function AddNewMentor()
{
    return(
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
                                        <h1 className="p-0 text-3xl font-semibold text-gray-500">Add new mentor</h1>
                                        {/* <a href={'/addmentors'} className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md text-white" style={{backgroundColor: '#0b5f66'}}>Add new Mentor</a> */}
                                </div>

                                  {/* <div className="grid grid-cols-3 mt-7 gap-6 mb-3 mt-[50px]">
                                      <input type="text" placeholder="Mentor Name" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md mb-3"/>
                                      <input type="Email" placeholder="Mentor Email" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md mb-3"/>
                                      <input type="text" placeholder="Area of Expertise" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md mb-3"/>
                                      <input type="text" placeholder="Sector" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md mb-3"/>
                                      <input type="text" placeholder="Academic Background" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md mb-3"/>
                                      <input type="text" placeholder="Program" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md mb-3"/>
                                      <input type="text" placeholder="Founder Name" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md mb-3"/>
                                      <input type="text" placeholder="Conact Number" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md mb-3"/>
                                      <input type="text" placeholder="Conact Number" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md mb-3"/>
                                      <input type="text" placeholder="Number of Female Co-Founder" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md mb-3"/>
                                      <input type="text" placeholder="PIA Signed" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md mb-3"/>
                                      <input type="text" placeholder="Fund allocated" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md mb-3"/>
                                  </div>
                                  <div>
                                        <button className="mt-3 bg-green-700 text-gray-100 px-10 py-1 rounded-2xl text-xl hover:bg-green-400 ripple" >Register</button>
                                  </div> */}
                        </div>
                </section>
        </div>
    )
}
export default AddNewMentor;