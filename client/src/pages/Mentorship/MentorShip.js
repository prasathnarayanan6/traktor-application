import React, {useState, useEffect} from 'react'
import SideBar from '../../components/sidebar';
import NavBar from '../../components/NavBar'
import DonutChart from '../../components/DonutChart';
function MentorShip() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(true);
    }, [])
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
                                      <h1 className="p-0 text-3xl font-semibold text-gray-500">Mentorship</h1>
                                      <a href={'/addmentor'} className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md text-white" style={{backgroundColor: '#0b5f66'}}>Schedule</a>
                              </div>
                              {/**Panel */}
                              <div className={`grid grid-cols-4 gap-4 mt-5 content ${show ? "visible": ""}`}>
                                  <div className="shadow-sm rounded-lg flex justify-between text-gray-500 font-semibold pt-3 pb-3" style={{backgroundColor : '#97bfcc'}}>
                                        <div className="p-1 ps-5 text-lg text-black">Total Session</div>
                                        <div className="px-[20px] text-4xl text-black">45</div>
                                  </div>
                                  <div className="shadow-sm rounded-lg flex justify-between ps-2 text-gray-500 font-semibold pt-3 pb-3" style={{backgroundColor: '#afd5de'}}>
                                        <div className="p-1 ps-5 text-md text-black">Team Participated</div>
                                        <div className="px-[20px] text-4xl text-black">45</div>
                                  </div>
                                  <div className="shadow-sm rounded-lg flex justify-between items-start ps-2 text-gray-500 font-semibold pt-3 pb-3" style={{backgroundColor: '#afdade'}}>
                                        <div className="p-1 ps-5 text-md text-black">Total Pratham Hours</div>
                                        <div className="px-[20px] text-4xl text-black">45</div>
                                  </div>
                                  <div className="shadow-sm rounded-lg flex justify-between items-start ps-2 text-gray-500 font-semibold pt-3 pb-3" style={{backgroundColor: '#afdade'}}>
                                        <div className="p-1 ps-5 text-md text-black">Total Akshar Hours</div>
                                        <div className="px-[20px] text-4xl text-black">45</div>
                                  </div>
                              </div>

                              <div className={`grid grid-cols-2 mt-5 gap-4 flex justify-center items-center content ${show ? "visible": ""}`}>
                                    <div className="shadow-md font-semibold rounded-lg w-full md:h-[340px;] border">
                                        <div className="p-2 pt-1 text-sm text-gray-600 font-semibold">Pratham mentorship hours</div>
                                        <div className="flex justify-center items-center mb-1">
                                            <div className="w-50 h-50 overflow-hidden">
                                                <DonutChart/>
                                            </div>
                                        </div>
                                    </div> 

                                    <div className="shadow-md font-semibold rounded-lg w-full md:h-[340px;] border">
                                        <div className="p-2 pt-1 text-sm text-gray-600 font-semibold">Akshar Mentorship hours</div>
                                        <div className="flex justify-center items-center mb-1">
                                            <div className="w-50 h-50 overflow-hidden">
                                                <DonutChart/>
                                            </div>
                                        </div>
                                    </div>  
                              </div>  
                        </div>
                </section>
        </div>
  )
}

export default MentorShip