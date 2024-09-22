import React, {useState} from "react";
import SideBar from "../../components/sidebar";
import NavBar from "../../components/NavBar";
import {AddTeams} from "../../API/API";
import AddStartupMultiForm from "./AddStartupMultiForm";
function AddStartup() {
  const [getData, setgetData] = useState({
    startup_name: '',
    email: '',
    domain: '',
    sector: '',
    academic_background: '',
    program: '',
    founder_name: '',
    contact_number: '',
    roll_number: '',
    female_cofounder: '',
    pia: '',
    fund_allocated: ''
  });
  const handleChange = (e) => {
    const {name, value} = e.target;
    setgetData((prevData)=>({  
        ...prevData,
        [name]: value,
    })) 
  }
  const handleClick = async (e) =>{
      e.preventDefault();
      try
      {
        // const API = await AddTeams(getData);
        console.log("Hello");
      }
      catch(err)
      {
        console.error("An error occurred:", err);
      }
  }
   return (
    <div className="h-screen flex">
          <section className="fixed h-full">
                <SideBar />
          </section>
          <section className="flex-grow">
                        <div className="fixed top-0 left-0 w-full z-50">
                            <NavBar />
                        </div>
                        <div className="p-[90px;] h-full">
                           <h1 className="text-xl font-semibold text-gray-500 mt-5">Add New Startup</h1>
                            <div className="">
                                <AddStartupMultiForm />
                            </div>
                        </div>
          </section>
    </div>
  )
}
export default AddStartup;