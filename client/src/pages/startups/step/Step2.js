import React from "react";

const Step2 = () => {
  return (
    <div className="grid grid-cols-2 gap-4 items-center ">
      <div class="relative mt-4">
        <input
          type="contact Number"
          id="Contact Number"
          class="block px-2.5 pb-2.5 pt-4 w-full  md:h-[45px] text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          for="Contact Number "
          class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Official Contact Number
        </label>
      </div>

      <div class="relative mt-4">
        <input
          type="Mail"
          id="Mailid"
          class="block px-2.5 pb-2.5 pt-4 w-full  md:h-[45px] text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          for="Mailid"
          class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Official Email Addrress
        </label>
      </div>

      <div class="relative mt-4">
        <input
          type="link"
          id="Link"
          class="block px-2.5 pb-2.5 pt-4 w-full  md:h-[45px] text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          for="Website Link"
          class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Website Link
        </label>
      </div>

      <div class="relative mt-4">
        <input
          type="ID"
          id="Linkedin"
          class="block px-2.5 pb-2.5 pt-4 w-full  md:h-[45px] text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
          name="Startup Technology"
        >
          <option value="" disabled selected>
            Startup Technology
          </option>
          <option value="3D Printing & Fabrication">
            3D Printing & Fabrication
          </option>
          <option value="App Development">App Development </option>
          <option value="Artificial Intelligence (AI) & Machine Learning (ML)">
            Artificial Intelligence (AI) & Machine Learning (ML)
          </option>
          <option value="Augmented Reality (AR) & Virtual Reality (VR)">
            Augmented Reality (AR) & Machine Learning (VR)
          </option>
          <option value="BioMimicry Applications">
            BioMimicry Applications
          </option>
          <option value="Blockchain">Blockchain</option>
          <option value="Deep Technology (Anything with  deep technical expertise)">
            Deep Technology (Anything with a deep technical expertise)
          </option>
          <option value="Internet of Things">Internet of Things</option>
          <option value="Others">Others</option>
        </select>
      </div>
      <div className="relative mt-4">
        <select
          id="options"
          className="mt-1 block w-full pl-3 pr-10 py-2 md:h-[45px] text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md mb-4"
          name="Program"
        >
          <option value="" disabled selected>
            Program
          </option>
          <option value="Nirmaan">Nirmaan</option>
          <option value="UGFIR">UGFIR </option>
          <option value="KGMG">KGMG</option>
          <option value="SIP">SIP</option>
          <option value="Disciplined Entrepreneurship">
            Disciplined Entrepreneurship
          </option>
        </select>
      </div>

      <div class="relative mb-6 mt-3">
        <input
          type="Password"
          id="password"
          class="block px-2.5 pb-2.5 pt-4 w-full  md:h-[45px] text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
