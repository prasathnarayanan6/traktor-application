import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/sidebar";
import { FaEllipsisV, FaUserCircle } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { ApiFetchMentor, ApiDeletMentorData } from "../../API/API";
import toast from "react-hot-toast";
import { GiConsoleController } from "react-icons/gi";
import DeleteConfirmation from "../../components/DeleteConfirmation";
function Mentor() {
  const [openEstablishPopUp, setOpenEstablishPopUp] = useState(false);
  const handleEstablish = () => setOpenEstablishPopUp(true);
  const [data, setData] = useState([]);
  const [buttontoggle, setButtonToggle] = useState(null);
  const [mentordata, setMentorData] = useState('');
  const handleClickButtonToggle = (index) => {
      setButtonToggle(buttontoggle === index ? null : index);
  }
  const FetchData = async() => {
        try {
            const API = await ApiFetchMentor();
            setData(API.STATUS.rows);
            console.log(API.STATUS.rows);
        }
        catch(err)
        {
            console.log(err);
        }
  }
  const DeleteMentorData = async(id) => {
      try 
      {
            const API = await ApiDeletMentorData(id);
            if(API)
            {
                  toast.success('Mentor deleted successfully!');
            }
            else {
                  toast.error('Failed to delete mentor.');
            }
      }
      catch(err)
      {
            console.log(err);
      }
  }
  useEffect(() =>{
      FetchData();
      setData()
  },[])
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
          <div className="flex justify-between">
            <h1 className="p-0 text-3xl font-semibold text-gray-500">
              Mentors
            </h1>
            <a
              href={"/addmentor"}
              className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md text-white"
              style={{ backgroundColor: "#0b5f66" }}
            >
              Add new Mentor
            </a>
          </div>
          <div className="border mt-10 rounded-md">
          <h1 className="px-5 my-5 font-semibold text-lg text-gray-500">All Mentor</h1>
          <div className="m-12 bg-white border border-gray-100 shadow-md rounded-md overflow-hidden">
            <table class="table-fixed w-full">
              <thead>
                <tr>
                  <th className="px-5 py-2 text-left text-green-600">
                    {/* Event type */}
                  </th>
                  <th className="px-5 py-2 text-left text-green-600">Name</th>
                  <th className="px-5 py-2 text-left text-green-600">
                    Institution
                  </th>
                  <th className="px-5 py-2 text-left text-green-600">Startups</th>
                </tr>
              </thead>
              <tbody>
                  {Array.isArray(data) && data.length > 0 ? (
                  data.map((dataObj, index) => (

                        <tr key={index} className="border-t border-gray-300 hover:bg-gray-100">
                        <td className="px-5 py-2"><FaUserCircle size={35}/></td>
                        <td className="px-5 py-2">{dataObj.mentor_name}</td>
                        <td className="px-5 py-2">{dataObj.institution}</td>
                        <td className="px-5 py-2">
                              {dataObj.startup_assoc}
                        </td>
                        <td className="px-5 py-2">
                              <div className="relative inline-block text-left">
                                    <button type="button" className="inline-flex justify-center w-full px-2 py-2 text-sm font-medium text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => handleClickButtonToggle(index)}>
                                          <FaEllipsisV className="h-5 w-5 text-gray-400" />
                                    </button>
                                    {buttontoggle === index && (
                                          <div className="origin-top-right absolute right-0 mt-0 w-30 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 z-10">   
                                                      <div classname="py-0">
                                                            {/* <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">View</a> */}
                                                            <a onClick={() => {
                                                                  handleEstablish();
                                                                  setMentorData(dataObj.email_address);
                                                            }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Delete</a>
                                                      </div>
                                           </div>
                                    )}
                              </div>
                        </td>
                        </tr>
                  ))
                  ) : (
                  <tr>
                        <td colSpan="5" className="px-5 py-2 text-center">No data available</td>
                  </tr>
                  )}
            </tbody>
            </table>
            <div class="flex justify-end mt-5">
              <div className="p-3">
                <label for="rows-per-page" class="mr-2 text-sm">
                  Rows per page:
                </label>
                <select
                  id="rows-per-page"
                  class="border border-gray-600 rounded p-0 border-b-1 border-t-0 border-l-0 border-r-0 focus:ring-0"
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                </select>
              </div>
              {/* ksn */}
            </div>
          </div>
          </div>
        </div>
      </section>
      <DeleteConfirmation isVisible={openEstablishPopUp} onClose={()=>setOpenEstablishPopUp(false)}>
                  <h1 className="text-center font-semibold text-2xl">Are you sure</h1>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                              <button className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md active:scale-[.98] active:duration-75 hover:scale-[1.08] ease-in-out transition-all" style={{backgroundColor : '#afdade'}} onClick={()=>{DeleteMentorData(mentordata); setData(); setOpenEstablishPopUp(false);}}>Yes</button>
                              <button className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md active:scale-[.98] active:duration-75 hover:scale-[1.08] ease-in-out transition-all" style={{backgroundColor : '#afdade'}} onClick={() => setOpenEstablishPopUp(false)}>No</button>
                  </div>
      </DeleteConfirmation>
    </div>
  );
}

export default Mentor;
