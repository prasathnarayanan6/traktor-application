import React, { useState, useEffect } from "react";
import SideBar from "../../components/sidebar";
import NavBar from "../../components/NavBar";
import DonutChart from "../../components/DonutChart";
import Schedule from "./Schedule";
import axios from "axios";
import toast from "react-hot-toast";
function MentorShip() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  const [openPopUp, setOpenpopup] = useState(false);
  const handleShow = (e) => setOpenpopup(true);
  const [startupsData, setStartupsData] = useState([])

  const StartupsData = async() => {
    try
    {
        const result = await axios.get('http://localhost:3003/api/v1/fetch-startup')
        console.log(result);
        setStartupsData(result.data.rows);
    }
    catch(err)
    {
        console.log(err)
    }
  }
  const [mentorData, setMentorData] = useState([]);
  const MentorData = async() => {
    try
    {
        const result = await axios.get('http://localhost:3003/api/v1/get-mentor-details');
        console.log(result);
        setMentorData(result.data.STATUS.rows);
    }
    catch(err)
    {
        console.log(err);
    }
  }
 const [formData, setFormData] = useState({
        select_startup:'', 
        select_mentor:'', 
        schedule_date: '', 
        schedule_time:'', 
        description:''
 })
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
        ...prevData,
        [name]: value,
    }));
  };
console.log(formData);

const ScheduleButton = async(e) => {
    e.preventDefault();
    try
    {
        const result = await axios.post('http://localhost:3003/api/v1/schedule-meeting', formData);
        console.log(result);
        if(result)
        {
            toast.success('Meeting Scheduled successfully');
            setOpenpopup(false);
        }
    }
    catch(err)
    {
        console.log(err);
        if(err.response.status==401)
        {
            toast.error('Please fill the required fields')
        }
        else if(err.response.status==500)
        {
            toast.error('Unknown error occured')
        }
    }
}
  useEffect(() => {
    StartupsData()
    MentorData()
  }, [])
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
              Mentorship
            </h1>
            <div>
              <button
                className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md"
                style={{ backgroundColor: "#afdade" }}
                onClick={handleShow}
              >
                Schedule
              </button>
            </div>
          </div>
          {/**Panel */}
          <div
            className={`grid grid-cols-4 gap-4 mt-5 content ${
              show ? "visible" : ""
            }`}
          >
            <div
              className="shadow-sm rounded-lg flex justify-between text-gray-500 font-semibold pt-3 pb-3"
              style={{ backgroundColor: "#97bfcc" }}
            >
              <div className="p-1 ps-5 text-lg text-black">Total Session</div>
              <div className="px-[20px] text-4xl text-black">45</div>
            </div>
            <div
              className="shadow-sm rounded-lg flex justify-between ps-2 text-gray-500 font-semibold pt-3 pb-3"
              style={{ backgroundColor: "#afd5de" }}
            >
              <div className="p-1 ps-5 text-md text-black">
                Team Participated
              </div>
              <div className="px-[20px] text-4xl text-black">45</div>
            </div>
            <div
              className="shadow-sm rounded-lg flex justify-between items-start ps-2 text-gray-500 font-semibold pt-3 pb-3"
              style={{ backgroundColor: "#afdade" }}
            >
              <div className="p-1 ps-5 text-md text-black">
                Total Pratham Hours
              </div>
              <div className="px-[20px] text-4xl text-black">45</div>
            </div>
            <div
              className="shadow-sm rounded-lg flex justify-between items-start ps-2 text-gray-500 font-semibold pt-3 pb-3"
              style={{ backgroundColor: "#afdade" }}
            >
              <div className="p-1 ps-5 text-md text-black">
                Total Akshar Hours
              </div>
              <div className="px-[20px] text-4xl text-black">45</div>
            </div>
          </div>

          <div
            className={`grid grid-cols-2 mt-5 gap-4 flex justify-center items-center content ${
              show ? "visible" : ""
            }`}
          >
            <div className="shadow-md font-semibold rounded-lg w-full md:h-[340px;] border">
              <div className="p-2 pt-1 text-sm text-gray-600 font-semibold">
                Pratham mentorship hours
              </div>
              <div className="flex justify-center items-center mb-1">
                <div className="w-50 h-50 overflow-hidden">
                  <DonutChart />
                </div>
              </div>
            </div>

            <div className="shadow-md font-semibold rounded-lg w-full md:h-[340px;] border">
              <div className="p-2 pt-1 text-sm text-gray-600 font-semibold">
                Akshar Mentorship hours
              </div>
              <div className="flex justify-center items-center mb-1">
                <div className="w-50 h-50 overflow-hidden">
                  <DonutChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Schedule isVisible={openPopUp} onClose={() => setOpenpopup(false)}>
        <form onSubmit={ScheduleButton}>
          <div className="font-semibold">Schedule Session</div>
          <div className="grid grid-cols-2 gap-2">
                 <div className="relative mt-5">
                    <select id="options" onChange={handleChange} className="peer border border-gray-300 h-[45px] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" name="select_startup">
                      <option value="Webinar" disabled>Select startups</option>
                      {Array.isArray(startupsData) && startupsData.length > 0 ? (
                        startupsData.map((dataObj, Index) => (
                            <option key={Index} value={dataObj.email_address}>{dataObj.startup_name}</option>
                        ))
                      ): (
                        <div>No startups found</div>
                      )}
                    </select>
                    <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-5 scale-75 top-3 z-10 bg-white px-2 peer-focus:px-2 peer-focus:text-blue-500">Select Startup</label>
                  </div>
                  <div className="relative mt-5">
                    <select id="options" 
                        onChange={handleChange} 
                        className="peer border border-gray-300 h-[45px] text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                        name="select_mentor">
                      <option value="Webinar">Select Mentors</option>
                      {Array.isArray(mentorData) && mentorData.length > 0 ? (
                        mentorData.map((dataObj, Index) => (
                            <option value={dataObj.email_address}>{dataObj.mentor_name}</option>
                        ))
                      ): (
                        <div>No Mentors found</div>
                      )}
                    </select>
                    <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-5 scale-75 top-3 z-10 bg-white px-2 peer-focus:px-2 peer-focus:text-blue-500">Select Mentor</label>
                  </div>
                  <div className="relative mt-5">
                    <input  type="date" onChange={handleChange} id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " name="schedule_date"/>
                    <label  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Schedule date</label>
                  </div>
                  <div className="relative mt-5">
                    <input  type="time" onChange={handleChange} id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " name="schedule_time"/>
                    <label  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Schedule time</label>
                  </div>    
            </div>

                        <div className="relative mt-5">
                                <textarea name="description" onChange={handleChange} rows="4" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none" placeholder=" "/>
                                <label  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">description</label>
                        </div>    
                        <div className="relative mt-5 flex justify-end mr-3">
  <button className="shadow-sm rounded-xl text-gray-800 font-semibold px-1 py-1" style={{ backgroundColor: "#afdade" }}>
    Submit
  </button>
</div>


          
        </form>
      </Schedule>
    </div>
  );
}

export default MentorShip;
