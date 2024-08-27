import React from "react";

const Step1 = ({ formData, handleChange }) => {
  return (
    <div className="grid grid-cols-1 gap-4 items-center px-10 mb-5">
      <div className="relative">
        <input
          type="text"
          id="floating_outlined"
          name="mentor_name"
          onChange={handleChange}
          value={formData.mentor_name}
          className="block px-2.5 pb-2.5 pt-4 w-full  md:h-[45px] text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="floating_outlined"  // Changed 'for' to 'htmlFor'
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          Name of the mentor
        </label>
      </div>
      <textarea
            type="text"
            name="mentor_description"  // Consistent naming
            value={formData.description}  // Accessing 'description' correctly
            onChange={handleChange}
            className="block w-full mb-4 text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer resize-none"
            placeholder="Description"
      ></textarea>
    </div>
  );
};
export default Step1;
