import React, { useState } from "react";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/sidebar";
import { FaEllipsisV } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
function Mentor() {
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
              Mentors
            </h1>
            <a
              href={"/addmentor"}
              className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md text-white"
              style={{ backgroundColor: "#0b5f66" }}
            >
              Add new Mentor
            </a>
          </div>
          <div className="border mt-10 rounded-md">
          <h1 className="px-5 my-5 font-semibold text-lg text-gray-500">All Mentor</h1>
          <div className="m-12 bg-white border border-gray-100 shadow-md rounded-md overflow-x-auto">
            <table class="table-fixed w-full">
              <thead>
                <tr>
                  <th className="px-5 py-2 text-left text-green-600">
                    {/* Event type */}
                  </th>
                  <th className="px-5 py-2 text-left text-green-600">Name</th>
                  <th className="px-5 py-2 text-left text-green-600">
                    Institution
                  </th>
                  <th className="px-5 py-2 text-left text-green-600">Startups</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-300 hover:bg-gray-100">
                  <td className="px-5 py-2"><FaPerson size={35}/></td>
                  <td className="px-5 py-2">IIT-M</td>
                  <td className="px-5 py-2">Not associated</td>
                  <td className="px-5 py-2">
                    Hello
                  </td>
                  <td className="px-5 py-2">
                    <button className="px-2 rounded text-gray-400">
                      <FaEllipsisV />
                    </button>
                  </td>
                </tr>
                <tr className="border-t border-gray-300 hover:bg-gray-100">
                  <td className="px-5 py-2">Workshop</td>
                  <td className="px-5 py-2">DE Cohort 2</td>
                  <td className="px-5 py-2">John Doe</td>
                  <td className="px-5 py-2">
                    Hello
                  </td>
                  <td className="px-5 py-2">
                    <button className="px-2 rounded text-gray-400">
                      <FaEllipsisV />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="flex justify-end mt-5">
              <div className="p-3">
                <label for="rows-per-page" class="mr-2 text-sm">
                  Rows per page:
                </label>
                <select
                  id="rows-per-page"
                  class="border border-gray-600 rounded p-0 border-b-1 border-t-0 border-l-0 border-r-0 focus:ring-0"
                >
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                </select>
              </div>
              {/* ksn */}
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Mentor;
