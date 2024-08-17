import React, {useState, useEffect} from "react";
import PaginationButtons from "../../components/PaginationButtons";
import UserProfile from "../../components/UserProfile"; // Assuming UserProfile is in the same folder
import axios from "axios";
import alertify from "alertifyjs";
import SideBar from "../../components/sidebar";
import NavBar from "../../components/NavBar";
import { FaFontAwesome, FaSpinner } from "react-icons/fa";
const View = () => {
  const API_URL = "http://localhost:3001/api/v1/resume/resume-fetch/3";
  const totalPages = 300;
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const page = Math.min(currentPage + 1, totalPages);
      console.log(page);
      const result = await axios.get(`${API_URL}/${page}`);
      if(result.data.status === "User_not_found")
      {
          alertify.error("end of data");
      }
          setPages(result.data);
          setLoading(false);
    };
    fetchData();
  }, [currentPage]);

  return (
    <div className="flex">
                <section id="SideBar" className="w-[66px]">
                        <SideBar />
                </section>
                <section id="" className="flex-grow">
                <NavBar /> 
                <div className="items-center px-4 py-4 m-auto mt-2 sm:mt-10">
                        <span className="text-slate-500 text-sm">Uploaded / Resume <span><a href="/uploads">uploads</a></span></span>
                        <div className="mt-3 font-semibold text-slate-600">UPLOADED FILES</div>
                </div>
                      <div className="section">
                            {loading ? (
                              <div className="text-center text-md items-center justify-center place-items-center">
                                  Loading
                              </div>
                            ) : (
                              <>
                              <div className="grid grid-cols-3 gap-10">
                                    {pages.map((page) => {
                                      return <UserProfile key={page.resume_email} {...page}/>; // No props needed for static image
                                    })}
                                  </div>
                                  <div className="mt-3">
                                      <PaginationButtons totalPages={totalPages} currentPage={currentPage} setCurrentPage={(page)=>setCurrentPage(page - 1)} />
                                  </div>
                              </>
                            )}
                      </div>
                </section>
    </div>
  );
};

export default View;
