import React, { useState, useEffect } from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../../components/NavBar";
// import src from "../../../img/image.png";
import Addmentor from "../../components/Addmentor";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import alertify from "alertifyjs";
function CustomerMentor() {
  const [showAddmentor, setAddmentor] = useState(false);
  const [data, setFetchedData] = useState([]);
  const [error, setError] = useState(null);
  const token = jwtDecode(localStorage.getItem('token'));
  const [addMentData, setAddMentData] = useState({
        team_mail: `${token.user_mail}`,
        startup: '',
        mentor: '',
        date: '',
        time: '',
        description: ''
  });
  const handleChange = (e) => {
      const {name, value} = e.target;
      setAddMentData((prevData)=>({  
        ...prevData,
        [name]: value,
    }))
  }
  //console.log(addMentData);
  const handleSubmit = async(e) => {
        e.preventDefault();
        try
        {
          //  console.log(addMentData);
          const result = await axios.post('http://localhost:3003/api/v1/customer/apply-mentor',  addMentData, {headers: {
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
        }
        catch(err)
        {
           if(err.response.status == 401)
          {
            alertify.warning("Request already raised");
          }
        }
  }
  useEffect(()=>{
    const fetchData = async () => {
      try
      {
          const response = await axios.get('http://localhost:3003/api/v1/customer/fetch-mentor')
          setFetchedData(response.data.result.rows);
      }
      catch (err)
      {
        setError(err);
        console.log(err);
      }
    }
    fetchData();
  }, [])
  console.log(addMentData);
  return (
    <div className="flex">
      <section className="w-[66px]">
        <SideBar />
      </section>

      <div className="flex-grow">
        <NavBar />
        <div className="items-center px-4 py-4 mt-2 sm:mt-10 md:mt-1 p-8">
          <span className=" p-5 text-slate-500 text-md">
            Dashboard / Mentors
          </span>
        </div>
        <span className="p-10 text-md">Mentors</span>
        <div className=" flex flex-col items-left justify-center p-4 m-10 border ">
          <h2 className="text-gray-700 text-xl font-semibold mb-2">
            Current Mentors
          </h2>
          <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden my-4 align-left border-b-4">
            <div className="px-6 py-4">
              <div className="flex items-left">
                {/* <img className="w-16 h-16 rounded-full mr-4" src={src} /> */}
                <div className="text-left">
                  <div className="text-gray-900 font-bold text-lg mb-1">
                    S.Gopal
                  </div>
                  <p className="text-gray-600 text-sm">No designation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex flex-col items-left justify-center p-4 m-10 border ">
          <span className="  text-xl font-semibold text-gray-700">
            All Mentors
          </span>
          <div className="flex justify-start p-10 text-md mx-8">
            <span className="flex-grow">
              <input
                type="text"
                className="border border-blue-300 rounded-md bg-white-500 mr-8 md:h-[34px] sm:w-[50%]"
                placeholder="Search"
              />
            </span>
            <button
              type="button"
              className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-green-300 rounded-md bg-green-500 transition-all ease-in-out md:text-xs font-semibold p-2 text-white"
              onClick={() => setAddmentor(true)}
            >
              Add Mentor Hour
            </button>
          </div>
          <div className="overflow-x-auto sm:-mx-5 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-4 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="bg-white border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Profile
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Institute
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Startups
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        View
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Request
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td
                        colSpan="7"
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center"
                      >
                        No data available
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Addmentor isVisible={showAddmentor} onClose={() => setAddmentor(false)}>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-start p-2 text-lg ">
              <span className="flex-grow font-bold">Add Mentor Hour</span>
            </div>
            <div className="grid grid-cols-2 gap-4 ">
              <div>
                <select
                  id="options"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  name="startup"
                  onChange={handleChange}
                >
                  <option value="">Select Startup</option>
                  <option value="nirmaan">Nirmaan </option>
                  <option value="nirmaan">Nirmaan </option>
                </select>
              </div>
              <div>
                <select
                  id="options"
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  name="mentor"
                  onChange={handleChange}
                >
                  <option>Disabled</option>
                  {data.map((mentor) => (
                      <option key={mentor.mentor_email} value={mentor.mentor_email}>
                        {mentor.mentor_email}
                      </option>
                  ))}
                  {/* <option value="Mentor">Select Mentor</option>
                  <option value="OIE">OIE </option> */}
                </select>
              </div>
              <div>
                <input
                  type="Date"
                  className="mt-3 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                  name="date"
                  onChange={handleChange}
                ></input>
              </div>
              <div>
                <input
                  type="Time"
                  name="time"
                  onChange={handleChange}
                  className="mt-3 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                ></input>
              </div>
            </div>
            <div>
              <textarea
                id="description"
                name="description"
                rows="4"
                className=" mt-6 w-full p-2 border border-gray-300 rounded resize-none"
                placeholder="Description"
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className=" active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-green-300 rounded-md bg-green-500 transition-all ease-in-out md:text-xs font-semibold p-2 text-white"
            >
              Update
            </button>
          </form>
          </div>
      </Addmentor>
    </div>
  );
}
export default CustomerMentor;
