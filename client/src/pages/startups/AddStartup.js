import React, {useState} from "react";
import SideBar from "../../components/sidebar";
import NavBar from "../../components/NavBar";
import {AddTeams} from "../../API/API";
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
                        <div className="fixed w-full">
                            <NavBar />
                        </div>
                        <form onSubmit={handleClick}>
                        <div className="p-[90px;] h-full">
                           <h1 className="text-3xl font-semibold text-gray-500 mt-5">Register for new startup</h1>
                                  <div className="grid grid-cols-3 mt-7 gap-6 mb-3 mt-[50px]">
                                      <input type="text" placeholder="Name of the startups" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md mb-3" name="startup_name" onChange={handleChange}/>
                                      <input type="Email" placeholder="Email" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md mb-3" name="email" onChange={handleChange}/>
                                      <select className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md mb-3" name="domain" onChange={handleChange} value={getData.domain}>
                                          <option value="" disabled selected>Domain</option>
                                          <option value="option1">Healthcare</option>
                                          <option value="option2">Mobility</option>
                                          <option value="option3">Industry 4.0</option>
                                          <option value="">Sustainability</option>
                                          <option value="">FinTech</option>
                                      </select>
                                      <select className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md mb-3" name="sector" onChange={handleChange} value={getData.sector}>
                                          <option value="" disabled selected>Sector</option>
                                          <option value="option1">Manufacturing & Industry</option>
                                          <option value="option2">Services</option>
                                          <option value="option3">Social & Leisure</option>
                                          <option value="">E-commerce & Retail</option>
                                          <option value="">EdTech</option>
                                          <option value="">Agriculture & Food</option>
                                          <option value="">Software & Data</option>
                                          <option value="">Energy & Environment</option>
                                          <option value="">Hardware & IOT</option>
                                      </select>                                       
                                      <input type="text" placeholder="Academic Background" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md mb-3" name="academic_background" onChange={handleChange}/>
                                      <select className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md mb-3" name="program" onChange={handleChange} value={getData.program}>
                                          <option value="" disabled selected>Program</option>
                                          <option value="Akshar">Pratham</option>
                                          <option value="Pratham">Akshar</option>
                                      </select>
                                      {/* <input type="text" placeholder="Program" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md mb-3" name="program" onChange={handleChange}/> */}
                                      <input type="text" placeholder="Point of Contact Name" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md mb-3" name="founder_name" onChange={handleChange}/>
                                      <input type="text" placeholder="Conact Number" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md mb-3" name="contact_number" onChange={handleChange}/>
                                      <input type="text" placeholder="Roll Number" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md mb-3" name="roll_number" onChange={handleChange}/>
                                      <input type="number" placeholder="Number of Female Co-Founder" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md mb-3" name="female_cofounder" onChange={handleChange}/>
                                      <select className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md mb-3" name="pia" onChange={handleChange} value={getData.pia}>
                                          <option value="" disabled selected>PIA Information</option>
                                          <option value="Signed">Signed</option>
                                          <option value="Not Signed">Not Signed</option>
                                      </select>
                                      <input type="text" placeholder="Fund allocated" className="rounded-xl border-0 focus:ring-green-700 focus:border-green-500 shadow-md mb-3" name="fund_allocated" onChange={handleChange}/>
                                  </div>
                                  <div className="flex justify-center items-center">
                                      <button className="mt-3 bg-green-700 text-gray-100 px-10 py-1 rounded-2xl text-xl hover:bg-green-400 ripple">Register</button>
                                  </div>
                        </div>
                        </form>
          </section>
    </div>
  )
}
export default AddStartup;