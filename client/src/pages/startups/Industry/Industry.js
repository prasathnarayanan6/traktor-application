import React from "react";
import SideBar from "../../../components/sidebar";
import NavBar from "../../../components/NavBar";
import IndustryModule from "../../../components/Industry/IndustryModule";
function Industry(){
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
                                <IndustryModule />
                        </div>
                </section>
        </div>
    )
}
export default Industry;