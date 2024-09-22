import React from "react";

const Step1 = ({formData, handleChange}) => {
  return (
    <div className="grid grid-cols-2 gap-4 items-center ">
      <div class="relative">
        <input
          type="text"
          name="startup_name"
          id="floating_outlined"
          className="block px-2.5 pb-2.5 pt-4 w-full  md:h-[45px] text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
          onChange={handleChange}
          value={formData.start_name}
        />
        
        <label
          for="floating_outlined"
          class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Startup Name
        </label>
      </div>

      <select
        id="options"
        className=" block w-full pl-3 pr-10 py-2 md:h-[45px] mt-4 text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md mb-4"
        name="startup_program"
        placeholder="Sector"
        onChange={handleChange}
        value={formData.start_program}
      >
        <option value="" disabled selected>
          Sector
        </option>
        <option value="Agriculture & Food">Agriculture & Food</option>
        <option value="Ecommerce & Retail">Ecommerce & Retail</option>
        <option value="Edtech">Edtech</option>
        <option value="Energy & Environment">Energy & Envirnoment</option>
        <option value="Software & Data">Software & Data</option>
        <option value="Hardware & IOT">Hardware & IoT</option>
        <option value="Manufacturing & Industry">Manufacturing & Industry</option>
        <option value="services">Services</option>
        <option value="Social & Leisure">Social & Leisure</option>
      </select>
      <select
        id="options"
        className="mt-1 block w-full pl-3 pr-10 py-2 md:h-[45px] text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md mb-4"
        name="startup_type"
        value={formData.start_type}
        onChange={handleChange}
      >
        <option value="" disabled selected>
          Startup Type
        </option>
        <option value="Hardware">Hardware</option>
        <option value="Hybrid">Hybrid </option>
        <option value="Software">Software</option>
        <option value="Service">Service</option>
      </select>

      <select
        id="options"
        className="mt-1 block w-full pl-3 pr-10 py-2 md:h-[45px] text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md mb-4"
        name="startup_industry"
        value={formData.start_industry}
        onChange={handleChange}
      >
        <option value="" disabled selected>
          Startup Industry
        </option>
        <option value="Industry 4.0">
            Industry 4.0
        </option>
        <option value="Healthcare">
            Healthcare
        </option>
        <option value="Sustainability">
              Sustainability
        </option>
        <option value="Fintech">Fintech</option>
        <option value="Mobility">Mobility</option>
      </select>

      <select
        id="options"
        className="mt-1 block w-full pl-3 pr-10 py-2 md:h-[45px] text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md mb-4"
        name="startup_tech"
        value={formData.start_tech}
        onChange={handleChange}
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
        <option value="BioMimicry Applications">BioMimicry Applications</option>
        <option value="Blockchain">Blockchain</option>
        <option value="Deep Technology (Anything with  deep technical expertise)">
          Deep Technology (Anything with a deep technical expertise)
        </option>
        <option value="Internet of Things">Internet of Things</option>
        <option value="Others">Others</option>
      </select>

      <select
        id="options"
        className="mt-1 block w-full pl-3 pr-10 py-2 md:h-[45px] text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md mb-4"
        name="program"
        onChange={handleChange}
        value={formData.program}
      >
        <option value="" disabled selected>
          Program
        </option>
        <option value="Pratham">Pratham</option>
        <option value="Akshar">Akshar</option>
      </select>

      <div class="relative mt-4">
        <input
          type="month"
          id="Date"
          className="block px-2.5 pb-2.5 pt-4 w-full mb-4 md:h-[45px] text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          name="cohort"
          onChange={handleChange}
          value={formData.cohort}
        />
        <label
          for="Cohort"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Cohort
        </label>
      </div>
    </div>
  );
};

export default Step1;
