const express = require('express');
// const {RateLimitMiddleware} = require("./helpers/ExpressRateLimit");
const cookieParser = require('cookie-parser');
const responseTime = require('response-time');
const LoginController= require('./routes/route');
const WorkRequestController = require('./routes/route');
const ResumeController = require('./routes/route');
const GetAllResumeController = require('./routes/route');
const ResumeUpload = require('./routes/route');
const Resumedata = require('./routes/route');
const ApporvalRequest = require('./routes/route');
const ForgotRequest = require('./routes/route');
const Profile = require('./routes/route');
const DeleteResume = require('./routes/route');
const AddMentor = require('./routes/route');
const bodyParser = require('body-parser');
const Settings = require('./routes/route')
const AddMessage = require('./routes/route');
const ViewMessage = require('./routes/route');
const AddConnections = require('./routes/route');
const AddStartup = require('./routes/route');
const ViewConnections = require('./routes/route');
const Job = require('./routes/route');
const Report = require('./routes/route');
const EstablishConnection = require('./routes/route');
const TeamMember = require('./routes/route');
const RaiseRequest = require('./routes/route');
const Authenticate = require('./utils/Authenticate');
const FetchDataMentor = require('./routes/route');
const Founder = require('./routes/route')
const cors = require('cors');
const AddMentorHour = require('./routes/route');
const AddJob = require('./routes/route');
const ViewNotification = require('./routes/route');
const  DeleteConnection = require('./routes/route');
const FetchMentorData = require('./routes/route');
const MentorCount = require('./routes/route');
const DeleteMentorData = require('./routes/route');
const CreateEvents = require('./routes/route');
const FetchEvents = require('./routes/route');
const RequestSpeaker = require('./routes/route');
const FetchStartupDatainNumbers = require('./routes/route');
const FetchStartupData = require('./routes/route');
const AddFunding = require('./routes/route');
const app = express();
app.use(cors());
app.use(cookieParser());
// app.use(RateLimitMiddleware);
app.use(responseTime());
app.use(bodyParser.json());
app.listen('3003', (err)=> {
    if(err) process.exit(1);
    console.log("working");
})
app.use('/api/v1/', AddFunding);
app.use('/api/v1/', LoginController);
app.use('api/v1/', ForgotRequest)
app.use('api/v1/', FetchStartupDatainNumbers)
app.get('/profile', (req, res) => {
    res.status(200).json("hello");
})
app.use('api/v1/', FetchStartupData);
app.use('api/v1/', FetchEvents);
app.use('api/v1/', MentorCount);
app.use('api/v1/', RequestSpeaker);
app.use('api/v1/', Profile);
app.use('api/v1/', AddJob);
app.use('api/v1/', CreateEvents);
app.use('/api/v1/work', WorkRequestController);
app.use('/api/v1/resume', ResumeController);
app.use('api/v1/resume',GetAllResumeController);
app.use('api/v1/resume',  ResumeUpload);
app.use('api/v1/resume', Resumedata);
app.use('api/v1/resume', ApporvalRequest);
app.use('api/v1/resume', DeleteResume);
app.use('api/v1/', AddMentor);
app.use('api/v1/', Profile);
app.use('api/v1/', Settings);
app.use('api/v1/', AddMessage);
app.use('api/v1/', ViewMessage);
app.use('api/v1/', AddConnections);
app.use('api/v1/',AddStartup);
app.use('api/v1/', ViewConnections);
app.use('api/v1/',FetchMentorData);
app.use('api/v1/', Job);
app.use('api/v1/', EstablishConnection);
app.use('api/v1/', Report);
app.use('api/v1/', Founder);
app.use('api/v1/', TeamMember);
app.use('api/v1/', RaiseRequest);
app.use('api/v1/', AddMentorHour)
app.use('api/v1/', FetchDataMentor);
app.use('api/v1/', ViewNotification);
app.use('api/v1/', DeleteConnection);
app.use('api/v1/', DeleteMentorData)
module.exports = app;


