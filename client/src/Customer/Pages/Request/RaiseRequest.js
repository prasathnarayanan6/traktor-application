import React, {useState} from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../../components/NavBar";
import axios from "axios";
import alertify from "alertifyjs";
import { jwtDecode } from "jwt-decode";
const RaiseRequest = () => {
  let token = localStorage.getItem('token');
  let decrypted = jwtDecode(token);
  console.log(token.user_mail);
  const[raiseRequestData, setRaiseRequestData] = useState({
       team_mail: `${decrypted.user_mail}`,
       request_type: '',
       description: ''
  })
  const handleChange = (e) => {
    const {name, value} = e.target;
    setRaiseRequestData((prevData)=>({  
        ...prevData,
        [name]: value,
    })) 
  }
  console.log(raiseRequestData);
  const handleSubmit = async(e) => {
            e.preventDefault()
            try{
                const result = await axios.post(`http://localhost:3003/api/v1/customer/raise-request`,  raiseRequestData, {headers: {
                    // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }});
                if(result.status==200)
                {
                    alertify.success("Data Inserted Successfully");
                    setRaiseRequestData({
                        team_mail: `${decrypted.user_mail}`,
                        request_type: '',
                        description: ''
                    })
                }
                else if(result.status==204)
                {
                    alertify.warning("Field should not be empty");
                }
            }
            catch(err)
            {
                if(err.response.status == 400)
                {
                    alertify.error("Please fill Necessary data")
                }
                else if(err.response.status == 409)
                {
                    alertify.error("Data already exists");
                }
            }
   };
  return (
    <div className="flex">
      <section className="w-[66px]">
        <SideBar />
      </section>

      <div className="flex-grow">
        <NavBar />
        <div className="items-center px-4 py-4 mt-2 sm:mt-10 md:mt-1 p-8 ">
          <span className=" p-2 text-slate-500 text-md ">
            Home / Request
          </span>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="container mx-auto p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-lg font-semibold">Raise a Request</h1>
          </div>
          <div className="bg-white border border-black rounded p-8 w-1/2 mx-auto">
            <h2 className="text-xl font-semibold mb-4">Request</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Select Category
              </label>
              <select
                id="category"
                name="request_type"
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option>Type of Request</option>
                <option>Request regarding Members</option>
                <option>Request regarding Contact / Connections</option>
                <option>Request regarding Documentation</option>
                <option>
                  Request regarding Booking of Space / Conference Rooms
                </option>
                <option>
                  Request regarding Network Connectivity / Facilities
                </option>
                <option>Request regarding Funding</option>
                <option>Request regarding Internship Certificate</option>
                {/* Add more options here */}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Add a description of your request
              </label>
              <textarea
                id="description"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-none"
                rows="5"
                name="description"
                placeholder="description"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button className="active:scale-[.90] active:duration-70 hover:scale-[1.02] bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Request
              </button>
            </div>
          </div>
        </div>
        </form>
      </div>
    </div>
  );
};
export default RaiseRequest;
