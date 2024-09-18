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
          Program
        </option>
        <option value="Advertising"> Advertising </option>
        <option value="Aerospace">Aerospace</option>
        <option value="Agritech"> Agritech </option>
        <option value="Art">Art</option>
        <option value="Automotive">Automotive</option>
        <option value="AI/ML">AI/ML</option>
        <option value="AR/VR">AR/VR</option>
        <option value="Blockchain">Blockchain</option>
        <option value="Big Data">Big Data</option>
        <option value="Clean Technology">CleanTechnology</option>
        <option value="Construction">Construction</option>
        <option value="Cloud">Cloud</option>
        <option value="Cyber Security">Cyber Security</option>
        <option value="Consulting">Consulting</option>
        <option value="Design">Design</option>
        <option value="Digital Marketing">Digital Marketing</option>
        <option value="Ecommerce">Ecommerce</option>
        <option value="Edtech">Edtech</option>
        <option value="Energy">Energy</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Fashion">Fashion</option>
        <option value="Fitech">Fitech</option>
        <option value="Health and Wellness">Health and Wellness</option>
        <option value="Health Tech">Health Tech</option>
        <option value="Hospitality">Hospitality</option>
        <option value="Informaton Technology">Informaton Technology</option>
        <option value="Hardware/Internet of Things(IOT)">
          Internet of Things(IOT)
        </option>
        <option value="Life Sciences">Life Sciences</option>
        <option value="Logistics">Logistics</option>
        <option value="Manufacturing">Manufacturing</option>
        <option value="Media">Media</option>
        <option value="Mobile Application">Mobile Application</option>
        <option value="Nonprofits">Nonprofits</option>
        <option value="Platforms">Platforms</option>
        <option value="Retail">Retail</option>
        <option value="Sports">Sports</option>
        <option value="Travel">Travel</option>
        <option value="Waste Management">Waste Management</option>
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
        <option value="Aerospace & Drones Applications">
          Aerospace & Drones Applications
        </option>
        <option value="Agriculture & Allied Industries">
          Agriculture & Allied Industries{" "}
        </option>
        <option value="Apparels, Fashion & Personal Gadgets">
          Apparels, Fashion & Personal Gadgets
        </option>
        <option value="Arts, Culture & Traditions">
          Arts, Culture & Traditions
        </option>
        <option value="Automobiles & Self-Driving Assistances">
          Automobiles & Self-Driving Assistances
        </option>
        <option value="Banking, Finance Services & Insurances(BFSI)">
          Banking, Finance Services & Insurances(BFSI)
        </option>
        <option value="Central & State Government Agencies">
          Central & State Govenment Agencies
        </option>
        <option value="Defense & Security Systems">
          Defence & Security Systems
        </option>
        <option value="E-Commerce Platform">E-Commerce Platform</option>
        <option value="Education & Research">Education & Research</option>
        <option value="Health, Wellness & Allied Industries">
          Health, Wellness & Allied Industries
        </option>
        <option value="Human Resources Management">
          Human Resources Management
        </option>
        <option value="Logistics & Transportation">
          Logistics & Transportation
        </option>
        <option value="Manufacturing & Processing">
          Manufacturing & Processing
        </option>
        <option value="Marketing, Social Media & Sales">
          Marketing, Social Media & Sales
        </option>
        <option value="Space Exploration Satellite">
          Space Exploration Satellite
        </option>
        <option value="Others">Others</option>
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
        <option value="Nirmaan">Nirmaan</option>
        <option value="UGFIR">UGFIR </option>
        <option value="KGMG">KGMG</option>
        <option value="SIP">SIP</option>
        <option value="Disciplined Entrepreneurship"></option>
      </select>

      <div class="relative mt-4">
        <input
          type="date"
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
