import React,{useState} from 'react'
import SideBar from "../../components/sidebar";
import NavBar from '../../components/NavBar';
function Events() {
  return (
    <div className="h-screen flex">
        <section id="SideBar" className="fixed h-full">
                <SideBar />               
        </section>
        <section className="flex-grow">
                <div className="fixed w-full">
                        <NavBar />
                </div>
                <div className={`p-[90px;] h-full`}>
                                <h1 className="text-gray-500 text-3xl font-semibold">Events</h1>
                                <div className="grid grid-cols-4 gap-4 mt-4">
                                        <div className="shadow-md font-semibold rounded-lg w-[100%;]" style={{backgroundColor: '#afdade'}}>
                                                <div className="p-4 text-md text-gray-600">Total Startups</div>
                                                <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-500">200</div>
                                        </div>
                                        <div className="shadow-md font-semibold rounded-lg w-[100%;]" style={{backgroundColor: '#afdade'}}>
                                                <div className="p-4 text-md text-gray-600">Total Startups</div>
                                                <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-500">200</div>
                                        </div>
                                        <div className="shadow-md font-semibold rounded-lg w-[100%;]" style={{backgroundColor: '#afdade'}}>
                                                <div className="p-4 text-md text-gray-600">Total Startups</div>
                                                <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-500">200</div>
                                        </div>
                                        <div className="shadow-md font-semibold rounded-lg w-[100%;]" style={{backgroundColor: '#afdade'}}>
                                                <div className="p-4 text-md text-gray-600">Total Startups</div>
                                                <div className="p-3 pt-3 text-5xl font-semibold pb-4 justify-end items-end flex text-gray-500">200</div>
                                        </div>
                                </div>
                </div>
        </section>
    </div>
  )
}

export default Events;