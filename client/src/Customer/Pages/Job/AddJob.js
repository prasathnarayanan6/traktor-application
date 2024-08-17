import React, {useState} from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../../components/NavBar";
import { FaArrowLeft } from "react-icons/fa";
import { jwtDecode } from "jwt-decode";
import alertify from "alertifyjs";
import axios from "axios";
function Addjob() {
    let token = jwtDecode(localStorage.getItem('token'));
    const[formData, setFormData] = useState({
      team_mail: `${token.user_mail}`,
      role: '',
      duration: '',
      job_type: '',
      renumeration: '',
      requirements: '',
      description: ''
    })
    const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData((prevData)=>({  
        ...prevData,
        [name]: value,
      }))
    }
    const handleSubmit = async(e) => {
      e.preventDefault();
      try
      {
        //  console.log(addMentData);
        const result = await axios.post('http://localhost:3003/api/v1/customer/add-job',  formData, {headers: {
          'Content-Type': 'application/json'
        }});
        if(result.code==="23505")
        {
          alertify.error("Request already raised");
        }
        else
        {
          alertify.success("Data Inserted successfully");
        }
        //console.log(result)
      }
      catch(err)
      {
         if(err.response.status == 401)
        {
          alertify.warning("Please fill necessary data");
        }
        else if(err.response.status==400)
        {
          alertify.error("Error Pushing the data");
        }
        else if(err.response.status ==500)
        {
           alertify.error("Request already raised please wait 3 hours.")
        }
        //console.log(err);
      }
      //console.log(formData);
    }
  return (
    <div className="flex">
      <section className="w-[66px]">
        <SideBar />
      </section>

      <div className="flex-grow">
        <NavBar />
        <div className="items-center px-4 py-4 mt-2 sm:mt-10 md:mt-1 p-8">
          <span className=" p-5 text-slate-500 text-sm">
            Dashboard / New Job
          </span>
        </div>
        {/* <div className="flex justify-start p-2 text-lg mx-12">
          <div className="flex items-center">
            <button
              type="button"
              className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-green-300 rounded-md bg-gray-500 transition-all ease-in-out md:text-xs font-semibold p-2 text-white ms-2"
            >
              <span>
                <FaArrowLeft />
              </span>
            </button>
            <div className="mx-2">Jobs</div>
          </div>
        </div> */}
        <div className=" flex flex-col items-left justify-center p-4 m-10 border mt-6 ">
          <h3 className="text-gray-700 text-xl font-semibold mb-2">
            Post A New Job
          </h3>

          <div>
            <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 items-center mb-12">
              <input
                type="text"
                className="border border-blue-300 rounded-md bg-white md:h-[45px] sm:w-full p-2"
                placeholder="Role"
                name="role"
                onChange={handleChange}
              />
              <input
                type="text"
                className="border border-blue-300 rounded-md bg-white md:h-[45px] sm:w-full p-2"
                placeholder="Duration"
                name="duration"
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 items-center ">
              <select
                id="options"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                name="job_type"
                onChange={handleChange}
              >
                <option value="Job Type">Job Type</option>
                <option value="Full Time"> Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Remote"> Remote </option>
                <option value="Intern">Intern</option>
              </select>
              <select
                id="options"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                name="renumeration"
                onChange={handleChange}
              >
                <option value="Renumeration">Renumeration</option>
                <option value="Not Paid">Not Paid </option>
                <option value="Paid">Paid</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div></div>
            <textarea
              id="requirements"
              rows="4"
              className="mt-12 w-full p-2 border border-blue-300 rounded resize-none"
              placeholder="Requirements"
              name="requirements"
              onChange={handleChange}
            ></textarea>
            <textarea
              id="description"
              name="description"
              rows="4"
              className="mt-12 w-full p-2 border border-blue-300 rounded mb-4 resize-none"
              placeholder="Description"
              onChange={handleChange}
            ></textarea>
            <div className="flex justify-center ">
              <button
                type="submit"
                className="active:scale-[.90] active:duration-70 hover:scale-[1.02] px-4 py-2 bg-green-500 ml-2 text-white font-semibold rounded-sm hover:bg-green-600"
              >
                Post Job
              </button>
            </div>
            </form>
          </div>

          <div className="px-6 py-4"></div>
        </div>
      </div>
    </div>
  );
}
export default Addjob;
