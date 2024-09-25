import React, {useState, useEffect} from "react";
import { ApiFetchMentor, ApiDeletMentorData } from "../../../API/API";

const Step2 = ({formData, handleChange}) => {
  const [data, setData] = useState([]);

  const FetchData = async() => {
    try {
        const API = await ApiFetchMentor();
        setData(API.STATUS.rows);
        //console.log(API.STATUS.rows);
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
    <div className="grid grid-cols-2 gap-4 items-center ">
      <div class="relative mt-4">
        <input
          type="text"
          id="official_contact_number"
          className="block px-2.5 pb-2.5 pt-4 w-full  md:h-[45px] text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          name="official_contact_number"
          onChange={handleChange}
          value={formData.official_contact_number}
        />
        <label
          for="official_contact_number"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Official Contact Number
        </label>
      </div>

      <div class="relative mt-4">
        <input
          type="email"
          id="Email Address"
          className="block px-2.5 pb-2.5 pt-4 w-full  md:h-[45px] text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          name="official_email_address"
          onChange={handleChange}
          value={formData.official_email_address}
        />
        <label
          for="Email Address"
          name="official_email_address"
          onChange={handleChange}
          value={formData.official_email_address}
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Official Email
        </label>
      </div>
      

      <div class="relative mt-4">
        <input
          type="text"
          id="Link"
          name="website_link"
          className="block px-2.5 pb-2.5 pt-4 w-full  md:h-[45px] text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          value={formData.website_link}
          onChange={handleChange}
        />
        <label
          for="Website Link"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Website Link
        </label>
      </div>

      <div class="relative mt-4">
        <input
          type="ID"
          id="Linkedin"
          name="linkedin_id"
          onChange={handleChange}
          value={formData.linkedin_id}
          className="block px-2.5 pb-2.5 pt-4 w-full  md:h-[45px] text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          for="Linkedin"
          class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Linkedin ID
        </label>
      </div>
      <div className="relative mt-4">
        <select
          id="options"
          className="mt-1 block w-full pl-3 pr-10 py-2 md:h-[45px] text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md mb-4"
          name="mentor_associated"
          onChange={handleChange}
          value={formData.mentor_associated}
        >
          <option value="" disabled selected>
            Mentor Associated
          </option>
          {Array.isArray(data) && data.length > 0 ? (
              data.map((dataObj, index) => (
                <option key={index} value={dataObj.email_address}>{dataObj.mentor_name}</option>
              ))
          ): (
            <option>No Mentor to display</option>
          )}
          {/* {data.map((dataObj, key) => {
              <option value={key}>{dataObj.}</option>
          })} */}
        </select>
      </div>
      <div className="relative mt-4">
        <input
            type="text"
            id="Regis"
            name="registration_number"
            onChange={handleChange}
            value={formData.registration_number}
            className="block px-2.5 pb-2.5 pt-4 w-full  md:h-[45px] text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <label
            for="Regis"
            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
              CIN/ Registartion Number
          </label>
      </div>

      <div class="relative mb-6 mt-3">
        <input
          type="Password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="block px-2.5 pb-2.5 pt-4 w-full  md:h-[45px] text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          for="Cohort"
          class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Password
        </label>
      </div>
    </div>
  );
};

export default Step2;
