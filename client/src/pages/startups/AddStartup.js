import React from "react";
import SideBar from "../../components/sidebar";
import NavBar from "../../components/NavBar";
function AddStartup() {
  return (
    <div className="h-screen flex">
          <section className="fixed h-full">
                <SideBar />
          </section>
          <section className="flex-grow">
                        <div className="fixed w-full">
                            <NavBar />
                        </div>
                        <div className="p-[90px;] h-full">
                           <h1 className="text-3xl font-semibold text-gray-500 mt-5">Register for new startup</h1>
                                  <div className="grid grid-cols-3 mt-7 gap-6 mb-3 mt-[50px]">
                                      <input type="text" placeholder="Name of the startups" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md mb-3"/>
                                      <input type="Email" placeholder="Email" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md mb-3"/>
                                      <input type="text" placeholder="Domain" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md mb-3"/>
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
                                  <div className="flex justify-center items-center">
                                      <button className="mt-3 bg-green-700 text-gray-100 px-10 py-1 rounded-2xl text-xl hover:bg-green-400 ripple" >Register</button>
                                  </div>
                        </div>
          </section>
    </div>
  )
}
export default AddStartup;