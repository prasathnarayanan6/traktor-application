import React from "react";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/sidebar";
function CreateNewEvent()
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
                    <div className={`p-[90px;] h-full`}>
                    </div>
            </section>
    </div>
    )
}
export default CreateNewEvent;