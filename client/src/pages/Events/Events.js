import React,{useState} from 'react'
import SideBar from "../../components/sidebar";
import NavBar from '../../components/NavBar';
import { FaBars, FaEllipsisV } from 'react-icons/fa';
import AddPastEvents from './AddPastEvents';
import CreateNewEvent from './CreateNewEvent';
import RequestSpeaker from './RequestSpeaker';
function Events() {
    const [openPopUp, setOpenpopup] = useState(false);
    const handleShow = (e) => setOpenpopup(true);

    const [openCreateNewEvent, setCreateNewEvent] = useState(false);
    const handleShow2 = (e) => setCreateNewEvent(true);

    const [reqSpeaker, setRequestSpeaker] = useState(false);
    const handleShow3 = (e) => setRequestSpeaker(true);
  return (
    <div className="h-screen flex">
        <section id="SideBar" className="fixed h-full">
                <SideBar />               
        </section>
        <section className="flex-grow">
                <div className="fixed w-full">
                        <NavBar />
                </div>
                <div className={`p-[90px;] h-full`}>
                                <h1 className="text-gray-500 text-3xl font-semibold">Events</h1>
                                <div className={`border mt-10 rounded-md w-full`}>
                                        <div className="p-3 font-semibold text-gray-500 text-xl pb-7">All Events</div>
                                        <div className="grid grid-cols-2 gap-5 px-10">
                                                <div className="px-3"><input type="text" placeholder="Search for Events" className="w-full rounded-3xl focus:ring-green-400"/></div>
                                                <div className="cols-span-3">
                                                        <div className="grid grid-cols-3 gap-4">
                                                                <div><button className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md" style={{backgroundColor: '#afdade'}} onClick={handleShow}>Add Past Event</button></div>
                                                                <div><button className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md"  style={{backgroundColor: '#afd5de'}} onClick={handleShow2}>Create Event</button></div>
                                                                <div><button className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md"  style={{backgroundColor: '#afcdde'}} onClick={handleShow3}>Request Speaker</button></div>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="m-12 bg-white border border-gray-100 shadow-md rounded-md overflow-x-auto">
                                                <table class="table-fixed">
                                                        <thead>
                                                                <tr>
                                                                        <th className="px-5 py-2 text-left text-green-600">Event type</th>
                                                                        <th className="px-5 py-2 text-left text-green-600">Title</th>
                                                                        <th className="px-5 py-2 text-left text-green-600">Speaker</th>
                                                                        <th className="px-5 py-2 text-left text-green-600">Date</th>
                                                                        <th className="px-5 py-2 text-left text-green-600">Time</th>
                                                                        <th className="px-5 py-2 text-left text-green-600">Responses</th>
                                                                        <th className="px-5 py-2 text-left text-green-600">Feedback</th>
                                                                        <th className="px-5 py-2 text-left text-green-600">Actions</th>
                                                                </tr>
                                                        </thead>
                                                        <tbody>
                                                                <tr className="border-t border-gray-300 hover:bg-gray-100">
                                                                        <td className="px-5 py-2">Workshop</td>
                                                                        <td className="px-5 py-2">DE Cohort 2 | Session 1</td>
                                                                        <td className="px-5 py-2">John Doe</td>
                                                                        <td className="px-5 py-2">Sun Oct 31 2021</td>
                                                                        <td className="px-5 py-2">6:00:00 pm</td>
                                                                        <td className="px-5 py-2">
                                                                                <button class="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md" style={{backgroundColor: '#afcdde'}}>View</button>
                                                                        </td>
                                                                        <td className="px-5 py-2">
                                                                                <button className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md" style={{backgroundColor: '#afcdde'}}>Initiate</button>
                                                                        </td>
                                                                        <td className="px-5 py-2">
                                                                                <button className="px-2 rounded text-gray-400"><FaEllipsisV /></button>
                                                                        </td>
                                                                </tr>
                                                                <tr className="border-t border-gray-300 hover:bg-gray-100">
                                                                        <td className="px-5 py-2">Workshop</td>
                                                                        <td className="px-5 py-2">DE Cohort 2 | Session 1</td>
                                                                        <td className="px-5 py-2">John Doe</td>
                                                                        <td className="px-5 py-2">Sun Oct 31 2021</td>
                                                                        <td className="px-5 py-2">6:00:00 pm</td>
                                                                        <td className="px-5 py-2">
                                                                                <button class="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md" style={{backgroundColor: '#afcdde'}}>View</button>
                                                                        </td>
                                                                        <td className="px-5 py-2">
                                                                                <button className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md" style={{backgroundColor: '#afcdde'}}>Initiate</button>
                                                                        </td>
                                                                        <td className="px-5 py-2">
                                                                                <button className="px-2 rounded text-gray-400"><FaEllipsisV /></button>
                                                                        </td>
                                                                </tr>
                                                        </tbody>
                                                </table>
                                                <div class="flex justify-end mt-5">
                                                                <div className="p-3">
                                                                        <label for="rows-per-page" class="mr-2 text-sm">Rows per page:</label>
                                                                        <select id="rows-per-page" class="border border-gray-600 rounded p-0 border-b-1 border-t-0 border-l-0 border-r-0 focus:ring-0">
                                                                                <option value="5">5</option>
                                                                                <option value="10">10</option>
                                                                                <option value="15">15</option>
                                                                        </select>
                                                                </div>
                                                                {/* <div>
                                                                        <span>1-5 of 7</span>
                                                                        <button class="ml-2 text-gray-500">Prev</button>
                                                                        <button class="ml-2 text-gray-500">Next</button>
                                                                </div> */}
                                                </div>       
                                                                
                                        </div>
                                </div>
                </div>
        </section>
        <AddPastEvents isVisible={openPopUp} onClose={()=>setOpenpopup(false)}>
                <h1 className="font-semibold">Add Past Events</h1>
                <div className="grid grid-cols-2 gap-4 mt-10">
                        <div class="relative">
                                <select id="countries" className="peer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="US">Webinar</option>
                                        <option value="CA">Conference</option>
                                        <option value="se">Seminar</option>
                                        <option value="DE">Workshop</option>
                                        <option value="DE">Masterclass</option>
                                </select>
                                <label for="countries" id="floatig_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-700 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-focus:dark:bg-gray-700 peer-focus:bg-white peer-focus:scale-75 peer-focus:-translate-y-6 left-2.5">Event type</label>
                        </div>
                        <div className="relative">
                                <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " name="email_address"/>
                                <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Event title</label>
                        </div>
                        <div className="relative">
                                <input type="date" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " name="email_address"/>
                                <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Event date</label>
                        </div>
                        <div className="relative">
                                <input type="time" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " name="email_address"/>
                                <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Event time</label>
                        </div>                                                
                </div>
                <div className="grid grid-cols-1 gap-4 mt-2">
                     <textarea className="border rounded-md resize-none"></textarea>
                     <div class="relative">
                                <select id="countries" className="peer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="US">Webinar</option>
                                        <option value="CA">Conference</option>
                                        <option value="se">Seminar</option>
                                        <option value="DE">Workshop</option>
                                        <option value="DE">Masterclass</option>
                                </select>
                                <label for="countries" id="floatig_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-700 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-focus:dark:bg-gray-700 peer-focus:bg-white peer-focus:scale-75 peer-focus:-translate-y-6 left-2.5">Select Speaker</label>
                    </div>
                </div>
        </AddPastEvents>
        <CreateNewEvent isVisible={openCreateNewEvent} onClose={()=>setCreateNewEvent(false)}>
                <h1 className="text-gray-500 font-semibold">Create Event</h1>
                <div className="grid grid-cols-3 gap-4 mt-10">
                        <div class="relative">
                                <select id="countries" className="peer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="US">Webinar</option>
                                        <option value="CA">Conference</option>
                                        <option value="se">Seminar</option>
                                        <option value="DE">Workshop</option>
                                        <option value="DE">Masterclass</option>
                                </select>
                                <label for="countries" id="floatig_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-700 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-focus:dark:bg-gray-700 peer-focus:bg-white peer-focus:scale-75 peer-focus:-translate-y-6 left-2.5">Event type</label>
                        </div>
                        <div className="relative">
                                <input type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " name="email_address"/>
                                <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Event privacy</label>
                        </div> 
                        <div class="relative">
                                <select id="countries" className="peer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="US">Webinar</option>
                                        <option value="CA">Conference</option>
                                        <option value="se">Seminar</option>
                                        <option value="DE">Workshop</option>
                                        <option value="DE">Masterclass</option>
                                </select>
                                <label for="countries" id="floatig_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-700 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-focus:dark:bg-gray-700 peer-focus:bg-white peer-focus:scale-75 peer-focus:-translate-y-6 left-2.5">Event Privacy</label>
                        </div>                                              
                </div>
                <div className="grid grid-cols-1 mt-5">
                        <div className="relative">
                                <textarea className="resize-none rounded-md w-full" placeholder=""></textarea>
                                <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Event description</label>
                        </div>
                </div>
                <div className="grid grid-cols-2 mt-3 gap-4">
                        <div className="relative">
                                <input type="date" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " name="email_address"/>
                                <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Event date</label>
                        </div> 
                        <div className="relative">
                                <input type="time" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " name="email_address"/>
                                <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Event time</label>
                        </div>
                </div>
                <div className="flex justify-center mt-3">
                    <button className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md" style={{backgroundColor: '#afdade'}}>Create Event</button>                                                    
                </div>
        </CreateNewEvent>
        <RequestSpeaker isVisible={reqSpeaker} onClose={()=>setRequestSpeaker(false)}>
                   <div className="font-semibold">Request Speaker</div> 
                   <div class="relative mt-5">
                                <select id="countries" className="peer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="US">Webinar</option>
                                        <option value="CA">Conference</option>
                                        <option value="se">Seminar</option>
                                        <option value="DE">Workshop</option>
                                        <option value="DE">Masterclass</option>
                                </select>
                                <label for="countries" id="floatig_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-700 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-focus:dark:bg-gray-700 peer-focus:bg-white peer-focus:scale-75 peer-focus:-translate-y-6 left-2.5">Select Speaker</label>
                  </div>
                  <div className="relative mt-5">
                                <textarea className="resize-none rounded-md w-full" placeholder=""></textarea>
                                <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Event description</label>
                </div> 
        </RequestSpeaker>
    </div>
  )
}

export default Events;