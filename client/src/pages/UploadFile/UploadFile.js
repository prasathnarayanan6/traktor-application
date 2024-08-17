import React, {useState, useEffect} from "react";
import SideBar from "../../components/sidebar";
import NavBar from "../../components/NavBar";
import axios from "axios";
import alertify from 'alertifyjs';
import { FaEye } from "react-icons/fa";
import APP_URL from "../../Config";
function UploadFile(){
    const[formdata, setFormData] = useState({
        name:'',
        year:'',
        email:'',
        department:'',
        college:'',
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]: value,
        }))
    }
    // console.log(formdata.url);
    const handleSubmit = async(e) => {
        e.preventDefault();
        if(!formdata.name || !formdata.year || !formdata.email || !formdata.department || !formdata.college || !formdata.url)
        {
            alertify.warning("All fields are required");
            return;
        }
        try
        {
            const response = await axios.post(APP_URL+'resumeupload', formdata)
            //console.log(response);
            if(response.status == 200)
            {
                alertify.success("Uploaded Successfully");
            }
            else
            {
                alertify.success("Please try later");
            }
        }
        catch(err)
        {
            console.log(err);
        }    
    }

    return(
        <div className="flex">
            <section id="SideBar" className="w-[66px]">
                <SideBar />
            </section>
            <section  id="" className="flex-grow">
                <NavBar />
                <div className="items-center px-4 py-4 m-auto mt-2 sm:mt-10 md:mt-1">
                        <div className="flex items-center justify-between">
                                <span className="text-slate-500 text-sm">Resume-data / Uploads </span>
                                <a href="/view/uploads" className="text-green-200 rounded-md bg-blue-900 p-1 text-lg place-self-end active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-al;"><FaEye /></a>
                        </div>
                        <form className="w-full pt-5" onSubmit={handleSubmit}>
                                <div className="flex flex-col mb-4">
                                <label htmlFor="name" className="text-gray-700 text-sm mb-1">Applicant's Name</label>
                                <input
                                    value={formdata.name} 
                                    onChange={handleChange}
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Applicant's Name"
                                    className="border rounded-md py-2 px-3 text-sm text-gray-800 border-gray-300 focus:outline-none focus:border-blue-400"
                                />
                                </div>

                                <div className="flex flex-col mb-4">
                                <label htmlFor="year" className="text-gray-700 text-sm mb-1">Year</label>
                                <input
                                    value={formdata.year} 
                                    onChange={handleChange}
                                    type="text"
                                    id="year"
                                    name="year"
                                    placeholder="Applicant's year in college"
                                    className="border rounded-md py-2 px-3 text-sm text-gray-800 border-gray-300 focus:outline-none focus:border-blue-400"
                                />
                                </div>

                                <div className="flex flex-col mb-4">
                                <label htmlFor="email" className="text-gray-700 text-sm mb-1">Email</label>
                                <input
                                    value={formdata.email} 
                                    onChange={handleChange}
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Applicant's email"
                                    className="border rounded-md py-2 px-3 text-sm text-gray-800 border-gray-300 focus:outline-none focus:border-blue-400"
                                />
                                </div>

                                <div className="flex flex-col mb-4">
                                <label htmlFor="department" className="text-gray-700 text-sm mb-1">Department</label>
                                <input
                                    value={formdata.department} 
                                    onChange={handleChange}
                                    type="department"
                                    id="department"
                                    name="department"
                                    placeholder="Applicant's department"
                                    className="border rounded-md py-2 px-3 text-sm text-gray-800 border-gray-300 focus:outline-none focus:border-blue-400"
                                />
                                </div>

                                <div className="flex flex-col mb-4">
                                <label htmlFor="college" className="text-gray-700 text-sm mb-1">College</label>
                                <input
                                    value={formdata.college} 
                                    onChange={handleChange}
                                    type="text"
                                    id="college"
                                    name="college"
                                    placeholder="Applicant's college name"
                                    className="border rounded-md py-2 px-3 text-sm text-gray-800 border-gray-300 focus:outline-none focus:border-blue-400"
                                />
                                </div>

                                <div className="flex flex-col mb-4">
                                <label htmlFor="college" className="text-gray-700 text-sm mb-1">Resume URL</label>
                                <input
                                    value={formdata.url} 
                                    onChange={handleChange}
                                    type="text"
                                    id="url"
                                    name="url"
                                    placeholder="eg: https://pleaseuploadresumeurl.test"
                                    className="border rounded-md py-2 px-3 text-sm text-gray-800 border-gray-300 focus:outline-none focus:border-blue-400"
                                />
                                </div>

                                
                                <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md text-sm focus:outline-none focus:shadow-outline"
                                >
                                Upload data
                                </button>
                        </form>
                </div>
            </section>
        </div>
    )
}
export default UploadFile;