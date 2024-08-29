import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, redirect, Navigate, useNavigate } from 'react-router-dom';
import Home from './pages/Home/home';
import Login from './pages/Login';
import Connections from './pages/Connections/connection';
import Forms from './components/Forms';
import Startups from './pages/startups/Startups';
import Mentors from './pages/Mentors/Mentor';
import AddStartup from './pages/startups/AddStartup';
import Events from './pages/Events/Events';
import MentorShip from './pages/Mentorship/MentorShip';
import Settings from './pages/Settings/Settings'
import CreateNewEvent from './pages/Events/CreateNewEvent';
import AddNewMentor from './pages/Mentors/AddNewMentor';
import Contacts from './pages/Connections/Contacts';
import Reports from './pages/Reports/Reports';
import RequestSpeaker from './pages/Events/RequestSpeaker';
import CustomerHome from './Customer/Pages/Home/home';
import Resume from './Customer/Pages/Resume/Resume';
import UploadFile from './pages/UploadFile/UploadFile';
import View from './pages/UploadFile/View';
import ViewComponents from './pages/UploadFile/ViewComponents';
import CustomerProfile from './Customer/Pages/Profile/Profile.js'
import HomeMentor from './pages/Home/Mentors/Mentor.js';
import Investor from './pages/Home/Investor/Investor.js';
import HomeFunding from './pages/Home/Funding/Funding.js';
import Addjob from './Customer/Pages/Job/AddJob.js';
// import HomeTeam from './pages/Home/Teams/Team.js';
// import Todo from '../src/__test__/todo'
import HomeFinance from './pages/Home/Finance/Finance.js';
import ProtectedRoutes from './utils/ProtectedRoutes';
import Cms from './pages/cms/Cms.js';
import Profile from './pages/profile/Profile.js';
import Resource from './Customer/Pages/Resources/Resources.js';
import CustomerMentor from './Customer/Pages/Mentor/Mentor.js';
// import JobModel from '../../server/model/jobModel.js';
import Jobs from './Customer/Pages/Job/Jobs.js';
import Profileapply from './Customer/Pages/Profile/ProfileApply.js';
import RaiseRequest from './Customer/Pages/Request/RaiseRequest.js';
import DisEnt from './Customer/Pages/DistEnt/DistEnt.js';
import CustomerStartup from './Customer/Pages/Sartups/Startups.js';
import CustomerContacts from './Customer/Pages/Contact/contact.js';
import FinTech from './pages/startups/FinTech/FinTech.js';
import Industry from './pages/startups/Industry/Industry.js';
import Sustainability from './pages/startups/Sustainability/Sustainability.js';
import Healthcare from './pages/startups/Healthcare/Healthcare.js';
import Mobility from './pages/startups/Mobility/Mobility.js';
// import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import AddStartupMultiForm from './pages/startups/AddStartupMultiForm.js';
function App() {
  const [LoggedIn, setLoggedIn] = useState(false);
  const authenticate = async() => {
    try
    {
      const token = localStorage.getItem('token');
      //console.log(token);
      if(token)
      {
          setLoggedIn(true);
      }
      else
      {
        setLoggedIn(false);
      }
    }
    catch(err){
      console.log(err);
      setLoggedIn(false);
    }
  }
  useEffect(()=>{
    authenticate();
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  }
  return (
    <div>
      <Toaster 
        position="top-right"
        reverseOrder={false}
      />
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<Login />} /> 
            <Route element={<ProtectedRoutes requiredRoles={[localStorage.getItem('token'), '2']} />}>
                  {/* <Route path="/home" element={<Home />} /> */}
                  <Route path="/home" element={<Home />} />
                  <Route path="/profile" element={<Profile/>} />
                  <Route path="/" element={<AddStartup/>} />
                  <Route path="/home-finance" element={<HomeFinance/>} />
                  <Route path="/connections" element={<Connections />} />
                  <Route path="/addstartup" element={<AddStartup/>} />
                  <Route path="/startups" element={<Startups />} />
                  <Route path="/connections" element={<Connections />} />
                  {/* <Route path="/profile" element={<Profile/>} /> */}
                  <Route path="/addconnections" element={<Forms />} />
                  <Route path="/startups" element={<Startups />} />
                  <Route path="/mentors" element={<Mentors />} />
                  <Route path="/events" element={<Events/>} />
                  <Route path="/mentorship" element={<MentorShip/>} />
                  {/* <Route path="/startup/new" element={<AddStartup/>} /> */}
                  <Route path="/settings" element={<Settings/>} />
                  <Route path="/fintechstartups" element={<FinTech />} />
                  <Route path="/industrystartups" element={<Industry />} />
                  <Route path="/addmentor" element={<AddNewMentor />} />
                  <Route path="/Sustainability" element={<Sustainability />} />
                  <Route path="/healthcarestartups" element={<Healthcare />} />
                  <Route path="/mobilitystartups" element={<Mobility/>} />
                  <Route path="/events/new" element={<CreateNewEvent />} />
                  <Route path="/contacts" element={<Contacts/>} /> 
                  <Route path="/mentor/new" element={<AddNewMentor />} />
                  <Route path="/reports" element={<Reports />} />
                  <Route path="/uploads" element={<UploadFile />} />
                  <Route path="/view/uploads" element={<ViewComponents/> }/>
                  <Route path="/cms" element={<Cms />} />
                  {/* <Route path="/home?tab=startups" element={<HomeStartups />} /> */}
             </Route>
             <Route  element={<ProtectedRoutes requiredRoles={[localStorage.getItem('token'), '5']} />} >
                  <Route path="/events/request-speaker" element={<RequestSpeaker/>} />  
                  <Route path="/customer/Home" element={< CustomerHome/>}  />
                  <Route path="/customer/resume" element={<Resume />} />
                  <Route path="/customer/resources" element={<Resource/>} />
                  <Route path="/customer/Mentor" element={<CustomerMentor/>} />
                  <Route path="/customer/jobs" element={<Jobs />} />
                  <Route path="/customer/profile" element={<CustomerProfile />} />
                  <Route path="/jobs/new" element={<Addjob />} />
                  <Route path="/Profile/addprofile" element={<Profileapply/>} />
                  <Route path="/customer/DE" element={<DisEnt />} />
                  <Route path="/customer/home/request" element={<RaiseRequest />} />
                  <Route path="/customer/Startups" element={<CustomerStartup />} />
                  <Route path="/customer/contacts" element={<CustomerContacts />} />
             </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
