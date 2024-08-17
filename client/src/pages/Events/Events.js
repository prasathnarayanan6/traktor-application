import React,{useState} from 'react'
import SideBar from "../../components/sidebar";
import NavBar from '../../components/NavBar';
function Events() {
  return (
    <div className="h-screen flex">
        <section id="SideBar" className="fixed h-full">
                <SideBar />               
        </section>
        <section className="">
                <div className="fixed w-full">
                        <NavBar />
                </div>
        </section>
    </div>
  )
}

export default Events;