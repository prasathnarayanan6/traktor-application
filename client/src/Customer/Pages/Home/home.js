import React, { useEffect } from 'react';
import lity from 'lity';
import SideBar from '../../components/SideBar';
import NavBar from '../../../components/NavBar';
const CustomerHome = () => {
    
    return(
        <div className="flex">
                <section id="SideBar" className="w-[66px]">
                        <SideBar />
                </section>
                <section id="" className="flex-grow">
                <NavBar />
                </section>
        </div>
    )
}
export default CustomerHome;