import React from "react";
import SideBar from "../../components/sidebar";
import NavBar from "../../components/NavBar";

function Cms() {
    return(
        <div className="flex">
            <section id="SideBar" className="w-[66px]">
                    <SideBar />
            </section> 
            <section className="flex-grow">
                <NavBar />
            </section>
        </div>
    )
}
export default Cms;