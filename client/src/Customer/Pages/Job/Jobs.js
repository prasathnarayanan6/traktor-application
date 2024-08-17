import React from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../../components/NavBar";
function Jobs() {
  return (
    <div className="flex">
      <section className="w-[66px]">
        <SideBar />
      </section>

      <div className="flex-grow">
        <NavBar />

        <div className="items-center px-4 py-4 mt-2 sm:mt-10 md:mt-1 p-8">
          <span className=" p-5 text-slate-500 text-md">Dashboard / Jobs</span>
        </div>
        <div className="flex justify-start p-2 text-lg mx-12">
          <span className="flex-grow">Jobs</span>
          <button
            type="button"
            onClick={() =>
              (window.location.href = "http://localhost:3000/jobs/new")
            }
            className="active:scale-[.90] active:duration-70 hover:scale-[1.02] border border-green-300 rounded-md bg-green-500 transition-all ease-in-out md:text-xs font-semibold p-2 text-white"
          >
            <span>Post A New Job</span>
          </button>
        </div>
        <div className=" flex flex-col items-left justify-center p-2 m-16 border ">
          <h2 className="text-gray-700 text-xl font-semibold mb-2">All Jobs</h2>
          <div className="flex flex-col">
            <form className="p-4 w-[500px] relative">
              <div className="relative">
                <input
                  type="text"
                  className="border border-blue-300 rounded-md bg-white-500 ms-4 md:h-[34px;] sm:w-[50%]"
                  placeholder="Search Jobs"
                ></input>
              </div>
            </form>
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
                          Role
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Duration
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Requirements
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Paid/unpaid
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Created at
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Responses
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Actions
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
      </div>
    </div>
  );
}
export default Jobs;
