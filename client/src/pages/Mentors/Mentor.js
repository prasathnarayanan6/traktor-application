import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import SideBar from '../../components/sidebar';
function Mentor() {

  return (
    <div className="flex h-screen">
          <section id="SideBar" className="fixed h-full">
                  <SideBar />
          </section>
          <section className="flex-grow">
                <div className="fixed w-full">
                      <NavBar />
                </div>
                  <div className="p-[90px;] h-full">
                        <div className="flex justify-between">
                                <h1 className="p-0 text-3xl font-semibold text-gray-500">Mentors</h1>
                                <a href={'/addmentor'} className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md text-white" style={{backgroundColor: '#0b5f66'}}>Add new Mentor</a>
                        </div>
                  </div>
          </section>
    </div>
  );
}

export default Mentor;
