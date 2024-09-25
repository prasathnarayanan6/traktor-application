import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import SideBar from "../../components/sidebar";
import { FaEllipsisV, FaUserCircle } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { ApiFetchMentor, ApiDeletMentorData } from "../../API/API";
import toast from "react-hot-toast";
import { GiConsoleController } from "react-icons/gi";
import DeleteConfirmation from "../../components/DeleteConfirmation";

function Mentor() {
  const [openEstablishPopUp, setOpenEstablishPopUp] = useState(false);
  const handleEstablish = () => setOpenEstablishPopUp(true);
  const [data, setData] = useState([]);
  const [buttontoggle, setButtonToggle] = useState(null);
  const [mentordata, setMentorData] = useState('');
  const [currentPage, setCurrentPage] = useState(1); 
  const [rowsPerPage, setRowsPerPage] = useState(3); 

  const handleClickButtonToggle = (index) => {
      setButtonToggle(buttontoggle === index ? null : index);
  }

  const FetchData = async () => {
    try {
      const API = await ApiFetchMentor();
      setData(API.STATUS.rows);
      console.log(API.STATUS.rows);
    } catch (err) {
      console.log(err);
    }
  }

  const DeleteMentorData = async (id) => {
    try {
      const API = await ApiDeletMentorData(id);
      if (API) {
        toast.success('Mentor deleted successfully!');
        FetchData(); // Refetch data after deletion
      } else {
        toast.error('Failed to delete mentor.');
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    FetchData();
  }, []);

  // Calculate the mentors to display based on pagination
  const indexOfLastMentor = currentPage * rowsPerPage;
  const indexOfFirstMentor = indexOfLastMentor - rowsPerPage;
  const currentMentors = data.slice(indexOfFirstMentor, indexOfLastMentor);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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
            <h1 className="p-0 text-3xl font-semibold text-gray-500">Mentors</h1>
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
            <div className="m-12 bg-white border border-gray-300 shadow-md rounded-md overflow-hidden">
              <table className="table-fixed w-full">
                <thead>
                  <tr>
                    <th className="px-5 py-2 text-left text-green-600"></th>
                    <th className="px-5 py-2 text-left text-green-600">Name</th>
                    <th className="px-5 py-2 text-left text-green-600">Institution</th>
                    <th className="px-5 py-2 text-left text-green-600">Startups</th>
                  </tr>
                </thead>
                <tbody>
                  {currentMentors.length > 0 ? (
                    currentMentors.map((dataObj, index) => (
                      <tr key={index} className="border-t border-gray-300 hover:bg-gray-100">
                        <td className="px-5 py-2"><FaUserCircle size={35} /></td>
                        <td className="px-5 py-2">{dataObj.mentor_name}</td>
                        <td className="px-5 py-2">{dataObj.institution}</td>
                        <td className="px-5 py-2">{dataObj.startup_assoc}</td>
                        <td className="px-5 py-2">
                          <div className="relative inline-block text-left">
                            <button type="button" className="inline-flex justify-center w-full px-2 py-2 text-sm font-medium text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:outline-none" onClick={() => handleClickButtonToggle(index)}>
                              <FaEllipsisV className="h-5 w-5 text-gray-400" />
                            </button>
                            {buttontoggle === index && (
                              <div className="origin-top-right absolute right-0 mt-0 w-30 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 z-10">
                                <div className="py-0">
                                  <a onClick={() => {
                                    handleEstablish();
                                    setMentorData(dataObj.email_address);
                                  }} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Delete</a>
                                </div>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="px-5 py-2 text-center">No data available</td>
                    </tr>
                  )}
                </tbody>
              </table>

              {/* Pagination Controls */}
              <div className="flex justify-between items-center p-4">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md"
                  style={{ backgroundColor: '#afdade' }}
                >
                  Previous
                </button>
                <span className="text-sm">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md"
                  style={{ backgroundColor: '#afdade' }}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <DeleteConfirmation isVisible={openEstablishPopUp} onClose={() => setOpenEstablishPopUp(false)}>
        <h1 className="text-center font-semibold text-2xl">Are you sure</h1>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <button className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md" style={{ backgroundColor: '#afdade' }} onClick={() => { DeleteMentorData(mentordata); setOpenEstablishPopUp(false); }}>Yes</button>
          <button className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md" style={{ backgroundColor: '#afdade' }} onClick={() => setOpenEstablishPopUp(false)}>No</button>
        </div>
      </DeleteConfirmation>
    </div>
  );
}

export default Mentor;
