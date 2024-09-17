import React,{useEffect, useState} from 'react'
import SideBar from "../../components/sidebar";
import NavBar from '../../components/NavBar';
import { FaBars, FaEllipsisV } from 'react-icons/fa';
import AddPastEvents from './AddPastEvents';
import CreateNewEvent from './CreateNewEvent';
import RequestSpeaker from './RequestSpeaker';
import { jwtDecode } from 'jwt-decode';
import axios from 'axios';
import toast from 'react-hot-toast';
import { ApiFetchEvents } from '../../API/API';
import { GiConsoleController } from 'react-icons/gi';
function Events() {
    const [openPopUp, setOpenpopup] = useState(false);
    const handleShow = (e) => setOpenpopup(true);

    const [openCreateNewEvent, setCreateNewEvent] = useState(false);
    const handleShow2 = (e) => setCreateNewEvent(true);

    const [reqSpeaker, setRequestSpeaker] = useState(false);
    const [eventData, setEventData] = useState([]);
    const handleShow3 = (e) => setRequestSpeaker(true);

    const [currentPage, setCurrentPage] = useState(1);

    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = eventData.slice(firstIndex, lastIndex);
    const npage = Math.ceil(eventData.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1)

    let localStoragee = localStorage.getItem('token');
    let decodedStorage = jwtDecode(localStoragee);
//     console.log(decodedStorage.user_mail);
    const[formData, setFormData] = useState({
        event_type: 'Webinar',
        event_title: '',
        event_privacy: 'Public',
        event_description: '',
        // event_speaker: '',
        event_date: '',
        event_time: '',
        created_by: decodedStorage.user_mail
    });
    console.log(formData);
    const handleChangeEve = (e) => {
        const {name, value} = e.target;
        setFormData((prevData)=>({ 
            ...prevData,
            [name]: value,
        }))
     }
    const CreateEveData = async(e) => {
        e.preventDefault();
        try{
            const result = await axios.post('http://localhost:3003/api/v1/create-events', formData);
            console.log(result.data);
            if(result)
            {
                toast.success("Event Created");
                setCreateNewEvent(false);
            }
        }
        catch(err)
        {
             if(err.response.status==400)
             {
                toast.error('All fields are required')
             }
        }
    }
    const Events = async() => {
        try 
        {
                const result = await ApiFetchEvents();
                //console.log(result.rows);
                setEventData(result.rows);
                console.log(eventData);
        }
        catch(err)
        {
                console.log(err);
        }
    }
    
    useEffect(() => {
                Events()
    },[])
    const [requestSpeakerData, setRequestSpeakerData] = useState({
        select_speaker: 'B.Vaidyanathan',
        event_description: '',
        created_by: decodedStorage.user_mail
    });
    const handleChangeReqSpeaker = (e) => {
        const {name, value} = e.target;
        setRequestSpeakerData((prevData)=>({ 
            ...prevData,
            [name]: value,
        }))
     }
//      console.log(requestSpeakerData);
     const RequestSpeakerButton = async(e) => {
        e.preventDefault();
                try 
                {
                        const result = await axios.post('http://localhost:3003/api/v1/mentor/request-speaker', requestSpeakerData)
                        if(result)
                        {
                                toast.success('Speaker Requested') ;
                                setRequestSpeaker(false);    
                        }               
                }
                catch(err)
                {
                        console.log(err);
                        if(err)
                        {
                                if(err.response.status == 401)
                                {
                                        toast.error('Fields required')
                                }
                        }
                }
     }
    const [fetchedMentorData, setFetchedMentorData] = useState([  ]);
    const FetchMentorName = async() => {
        try
        {
                const result = await axios.get('http://localhost:3003/api/v1/get-mentor-details');
                if(result)
                {
                        setFetchedMentorData(result.data.STATUS.rows); 
                }
        }
        catch(err)
        {
                console.log(err); 
        }
    }


//     Add Past events Data 
    const [AddPastEvent, setPastEvent] = useState({
        event_type: '',
        event_title: '',
        event_privacy: 'Public', 
        event_description: '',
        select_speaker: '',
        event_date: '',
        event_time: '',
        created_by: decodedStorage.user_mail
    })
 
    const handleChangePastEvent = (e) => {
        const {name, value} = e.target;
        setPastEvent((prevData)=>({ 
            ...prevData,
            [name]: value,
        }))
     }
     console.log(AddPastEvent)

     const SubmitAddPastEvent = async(e) => {
        e.preventDefault();
        try 
        {
                const result = await axios.post('http://localhost:3003/api/v1/create-events', AddPastEvent);
                if(result)
                {
                        toast.success('Created Events');
                        setOpenpopup(false)
                }
        }
        catch(err)
        {
                if(err)
                {
                        if(err.response.status == 400)
                        {
                                toast.error("Check all fields");
                        }
                }
        }
     }
    useEffect(() => {
        FetchMentorName();
    }, [])
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
                                                <table class="table-fixed w-full">
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
                                                        {Array.isArray(eventData) && eventData.length > 0 ? (
                                                                eventData.map((dataObj, index) => (
                                                                        <tr key={index} className="border-t border-gray-300 hover:bg-gray-100">
                                                                                <td className="px-5 py-2">{dataObj.event_type}</td>
                                                                                <td className="px-5 py-2">{dataObj.event_title}</td>
                                                                                <td className="px-5 py-2">test</td>
                                                                                <td className="px-5 py-2">{dataObj.event_date}</td>
                                                                                <td className="px-5 py-2">{dataObj.event_time}</td>
                                                                                <td className="px-5 py-2">
                                                                                        <button className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md" style={{ backgroundColor: '#afcdde' }}>View</button>
                                                                                </td>
                                                                                <td className="px-5 py-2">
                                                                                        <button className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md" style={{ backgroundColor: '#afcdde' }}>Initiate</button>
                                                                                </td>
                                                                                <td className="px-5 py-2">
                                                                                        <button className="px-2 rounded text-gray-400"><FaEllipsisV /></button>
                                                                                </td>
                                                                        </tr>
                                                                ))
                                                                ) : (
                                                                <tr>
                                                                        <td colSpan="8" className="text-center px-5 py-2">
                                                                                <div role="status" className="flex justify-center items-center">
                                                                                                <svg aria-hidden="true" class=" w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-400" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                                                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                                                                                </svg>
                                                                                                <span class="sr-only">Loading...</span>
                                                                                </div>
                                                                        </td>
                                                                </tr>
                                                                )}

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
                                                                <div>
                                                                        <span>1-5 of 7</span>
                                                                        <button class="ml-2 text-gray-500">Prev</button>
                                                                        {/* {
                                                                                numbers.map((n, i) => (
                                                                                        <button key={i} onClick={changeCPage} className={` ${currentPage === n ? 'active': ''}`}></button>
                                                                                ))
                                                                        } */}
                                                                        <button class="ml-2 text-gray-500">Next</button>
                                                                </div> 
                                                </div>       
                                                                
                                        </div>
                                </div>
                </div>
        </section>
        <AddPastEvents isVisible={openPopUp} onClose={()=>setOpenpopup(false)}>
                <h1 className="font-semibold">Add Past Events</h1>
                <form onSubmit={SubmitAddPastEvent}>
                <div className="grid grid-cols-2 gap-4 mt-10">
                        <div class="relative">
                                <select id="countries" name="event_type" className="peer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChangePastEvent}>
                                        <option value="Webinar">Webinar</option>
                                        <option value="Conference">Conference</option>
                                        <option value="Seminar">Seminar</option>
                                        <option value="Workshop">Workshop</option>
                                        <option value="Masterclass">Masterclass</option>
                                </select>
                                <label for="countries" id="floatig_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-700 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-focus:dark:bg-gray-700 peer-focus:bg-white peer-focus:scale-75 peer-focus:-translate-y-6 left-2.5">Event type</label>
                        </div>
                        <div className="relative">
                                <input onChange={handleChangePastEvent} type="text" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " name="event_title"/>
                                <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Event title</label>
                        </div>
                        <div className="relative">
                                <input onChange={handleChangePastEvent} type="date" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " name="event_date"/>
                                <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Event date</label>
                        </div>
                        <div className="relative">
                                <input onChange={handleChangePastEvent} type="time" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 appearance-none dark:text-white dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " name="event_time"/>
                                <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Event time</label>
                        </div>                                                
                </div>
                <div className="grid grid-cols-1 gap-4 mt-2">
                     <textarea onChange={handleChangePastEvent} className="border rounded-md resize-none" name="event_description"></textarea>
                     <div class="relative">
                                <select id="countries" className="peer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="select_speaker" onChange={handleChangePastEvent}>
                                        <option disabled selected>Select Speaker</option>
                                        {Array.isArray(fetchedMentorData) && fetchedMentorData.length > 0 ? (
                                                fetchedMentorData.map((dataObj, key) => (
                                                        <option key={key} value={dataObj.mentor_name}>
                                                                {dataObj.mentor_name}
                                                        </option>    
                                                ))
                                        ) : null}
                                </select>
                                <label for="countries" id="floatig_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-700 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-focus:dark:bg-gray-700 peer-focus:bg-white peer-focus:scale-75 peer-focus:-translate-y-6 left-2.5">Select Speaker</label>
                    </div>
                </div>
                <button className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md flex items-center justify-center"  style={{backgroundColor: '#afcdde'}}>Submit</button>                
        </form>
        </AddPastEvents>
        <CreateNewEvent isVisible={openCreateNewEvent} onClose={()=>setCreateNewEvent(false)}>
                <form onSubmit={CreateEveData}>
                <h1 className="text-gray-500 font-semibold">Create Event</h1>
                <div className="grid grid-cols-3 gap-4 mt-10">
                        <div class="relative">
                                <select id="countries" name="event_type" onChange={handleChangeEve} className="peer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                                <option>Hello</option>
                                </select>
                                <label for="countries" id="floatig_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-700 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-focus:dark:bg-gray-700 peer-focus:bg-white peer-focus:scale-75 peer-focus:-translate-y-6 left-2.5">Event type</label>
                        </div>
                        <div className="relative">
                                <input type="text" id="floating_outlined" onChange={handleChangeEve} name="event_title" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                                <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Event Title</label>
                        </div> 
                        <div class="relative">
                                <select id="countries" name="event_privacy" onChange={handleChangeEve} className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        <option value="Public">Public</option>
                                        <option value="Private">Private</option>
                                </select>
                                <label for="countries" id="floatig_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-700 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-focus:dark:bg-gray-700 peer-focus:bg-white peer-focus:scale-75 peer-focus:-translate-y-6 left-2.5">Event Privacy</label>
                        </div>                                              
                </div>
                <div className="grid grid-cols-1 mt-5">
                        <div className="relative">
                                <textarea name="event_description" onChange={handleChangeEve} className="resize-none rounded-md w-full" placeholder=""></textarea>
                                <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Event description</label>
                        </div>
                </div>
                <div class="relative mt-2 ">
                                <select id="countries" className="peer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" name="select_speaker" onChange={handleChangeEve}>
                                        {Array.isArray(fetchedMentorData) && fetchedMentorData.length > 0 ? (
                                                fetchedMentorData.map((dataObj, key) => (
                                                        <option key={key} value={dataObj.mentor_name}>
                                                                {dataObj.mentor_name}
                                                        </option>    
                                                ))
                                        ) : null}
                                </select>
                                <label for="countries" id="floatig_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-700 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-focus:dark:bg-gray-700 peer-focus:bg-white peer-focus:scale-75 peer-focus:-translate-y-6 left-2.5">Select Speaker</label>
                </div>
                <div className="grid grid-cols-2 mt-3 gap-4">
                        <div className="relative">
                                <input type="date" onChange={handleChangeEve} name="event_date" id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                                <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Event date</label>
                        </div> 
                        <div className="relative">
                                <input type="time" name="event_time" onChange={handleChangeEve} id="floating_outlined" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                                <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Event time</label>
                        </div>
                </div>
                <div className="flex justify-center mt-3">
                    <button className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md" style={{backgroundColor: '#afdade'}}>Create Event</button>                                                    
                </div>
                </form>
        </CreateNewEvent>
        <RequestSpeaker isVisible={reqSpeaker} onClose={()=>setRequestSpeaker(false)}>
                <form onSubmit={RequestSpeakerButton}>
                        <div className="font-semibold">Request Speaker</div> 
                        <div class="relative mt-5">
                                        <select id="countries" onChange={handleChangeReqSpeaker} name="select_speaker" className="peer border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 appearance-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        {Array.isArray(fetchedMentorData) && fetchedMentorData.length > 0 ? (
                                                fetchedMentorData.map((dataObj, key) => (
                                                        <option key={key} value={dataObj.mentor_name}>
                                                                {dataObj.mentor_name}
                                                        </option>    
                                                ))
                                        ) : null}
                                        </select>
                                        <label for="countries" id="floatig_outlined"  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-700 px-2 peer-focus:px-2 peer-focus:text-blue-500 peer-focus:dark:text-blue-500 peer-focus:dark:bg-gray-700 peer-focus:bg-white peer-focus:scale-75 peer-focus:-translate-y-6 left-2.5">Select Speaker</label>
                        </div>
                        <div className="relative mt-5">
                                        <textarea className="resize-none rounded-md w-full" placeholder="" name="event_description" onChange={handleChangeReqSpeaker}></textarea>
                                        <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Event description</label>
                        </div> 
                        <div className="flex justify-center mt-3">
                                        <button className="text-gray-500 text-sm font-semibold mt-1 p-1 px-3 rounded-xl shadow-md" style={{backgroundColor: '#afdade'}}>Create Event</button>                                                    
                        </div>                
                </form>
        </RequestSpeaker>
    </div>
  )
}

export default Events;