// import React from "react";

// const Step2 = ({formData, handleChange}) => {
//   return (
//     <div className="grid grid-cols-2 gap-4 items-center px-10">
//       <div class="relative mt-4">
//         <input
//           type="text"
//           id="Contact Number"
//           name="years_of_experience"
//           value={formData.years_of_experience}
//           onChange={handleChange}
//           class="block px-2.5 pb-2.5 pt-4 w-full  md:h-[45px] text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//           placeholder=""/>
//         <label
//           for="Contact Number "
//           class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
//         >
//           Years of Experience
//         </label>
//       </div>
//       <div class="relative mt-4">
//         <input
//           type="mail"
//           id="Mailid"
//           className="block px-2.5 pb-2.5 pt-4 w-full  md:h-[45px] text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//           placeholder=" "
//           name="current_designation"
//           value={formData.current_designation}
//           onChange={handleChange}
//         />
//         <label
//           for="Mailid"
//           className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
//         >
//           Current Designation
//         </label>
//       </div>

//       <div class="relative mt-4">
//         <input
//           type="text"
//           id="Link"
//           class="block px-2.5 pb-2.5 pt-4 w-full  md:h-[45px] text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//           placeholder=""
//           value={formData.institution}
//           onChange={handleChange}
//           name="institution"
//         />
//         <label
//           for="Website Link"
//           class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
//         >
//             Institution
//         </label>
//       </div>

//       <div class="relative mt-4">
//         <input
//           type="qualification"
//           id="Linkedin"
//           className="block px-2.5 pb-2.5 pt-4 w-full  md:h-[45px] text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//           placeholder=" "
//           value={formData.qualification}
//           name="qualification"
//           onChange={handleChange}
//         />
//         <label
//           for="Linkedin"
//           className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
//         >
//             Qualification
//         </label>
//       </div>
//       <div className="relative mt-4">
//         <select
//           id="options"
//           className="mt-1 block w-full pl-3 pr-10 py-2 md:h-[45px] text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md mb-4"
//           value={formData.startup_associated}
//           onChange={handleChange}
//           name="startup_associated"
//         >
//           <option value="" disabled selected>
//             Startup Associated
//           </option>
//           <option value="Nirmaan">Nirmaan</option>
//           <option value="UGFIR">UGFIR </option>
//           <option value="KGMG">KGMG</option>
//           <option value="SIP">SIP</option>
//           <option value="Disciplined Entrepreneurship">
//             Disciplined Entrepreneurship
//           </option>
//         </select>
//       </div>

//       <div class="relative mb-6 mt-3">
//         <input
//           type="text"
//           id="text"
//           name="year_of_passing_out"
//           onChange={handleChange}
//           value={formData.year_of_passing_out}
//           class="block px-2.5 pb-2.5 pt-4 w-full  md:h-[45px] text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//           placeholder=" "
//         />
//         <label
//           for="Cohort"
//           class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
//         >
//           Year of passing out
//         </label>
//       </div>

//       <div className="relative">
//         <select
//           id="options"
//           className="mt-1 block w-full pl-3 pr-10 py-2 md:h-[45px] text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md mb-4"
//           value={formData.area_of_expertise}
//           onChange={handleChange}
//           name="area_of_expertise"
//         >
//           <option value="" disabled selected>
//                 Area of Expertise
//           </option>
//           <option value="Nirmaan">Nirmaan</option>
//           <option value="UGFIR">UGFIR </option>
//           <option value="KGMG">KGMG</option>
//           <option value="SIP">SIP</option>
//           <option value="Disciplined Entrepreneurship">
//             Disciplined Entrepreneurship
//           </option>
//         </select>
//       </div>
//     </div>
//   );
// };

// export default Step2;
import React from "react";

const Step2 = ({ formData, handleChange }) => {
  return (
    <div className="grid grid-cols-2 gap-4 items-center px-10">
      <div className="relative mt-4">
        <input
          type="text"
          id="years_of_experience"
          name="years_of_experience"
          value={formData.years_of_experience}
          onChange={handleChange}
          className="block px-2.5 pb-2.5 pt-4 w-full md:h-[45px] text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
        />
        <label
          htmlFor="years_of_experience"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Years of Experience
        </label>
      </div>
      <div className="relative mt-4">
        <input
          type="email"
          id="current_designation"
          name="current_designation"
          value={formData.current_designation}
          onChange={handleChange}
          className="block px-2.5 pb-2.5 pt-4 w-full md:h-[45px] text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="current_designation"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Current Designation
        </label>
      </div>

      <div className="relative mt-4">
        <input
          type="text"
          id="institution"
          name="institution"
          value={formData.institution}
          onChange={handleChange}
          className="block px-2.5 pb-2.5 pt-4 w-full md:h-[45px] text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=""
        />
        <label
          htmlFor="institution"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Institution
        </label>
      </div>

      <div className="relative mt-4">
        <input
          type="text"
          id="qualification"
          name="qualification"
          value={formData.qualification}
          onChange={handleChange}
          className="block px-2.5 pb-2.5 pt-4 w-full md:h-[45px] text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="qualification"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Qualification
        </label>
      </div>
      <div className="relative mt-4">
        <select
          id="startup_associated"
          name="startup_associated"
          value={formData.startup_associated}
          onChange={handleChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 md:h-[45px] text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md mb-4"
        >
          <option value="" disabled>
            Startup Associated
          </option>
          <option value="Nirmaan">Nirmaan</option>
          <option value="UGFIR">UGFIR</option>
          <option value="KGMG">KGMG</option>
          <option value="SIP">SIP</option>
          <option value="Disciplined Entrepreneurship">
            Disciplined Entrepreneurship
          </option>
        </select>
      </div>

      <div className="relative mb-6 mt-3">
        <input
          type="text"
          id="year_of_passing_out"
          name="year_of_passing_out"
          value={formData.year_of_passing_out}
          onChange={handleChange}
          className="block px-2.5 pb-2.5 pt-4 w-full md:h-[45px] text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="year_of_passing_out"
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Year of Passing Out
        </label>
      </div>

      <div className="relative">
        <select
          id="area_of_expertise"
          name="area_of_expertise"
          value={formData.area_of_expertise}
          onChange={handleChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 md:h-[45px] text-base border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md mb-4"
        >
          <option value="" disabled>
            Area of Expertise
          </option>
          <option value="Nirmaan">Nirmaan</option>
          <option value="UGFIR">UGFIR</option>
          <option value="KGMG">KGMG</option>
          <option value="SIP">SIP</option>
          <option value="Disciplined Entrepreneurship">
            Disciplined Entrepreneurship
          </option>
        </select>
      </div>
    </div>
  );
};

export default Step2;

