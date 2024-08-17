import React,{useState, useEffect} from 'react';
import "@fontsource/open-sans";
import '@fontsource/josefin-sans';
import image from '../assets/images/nirmaan-iitm.14fdf833.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import { jwtDecode } from "jwt-decode";
import PuffLoader from "react-spinners/PuffLoader";
import APP_URL from '../Config';
import {Icon} from 'react-icons-kit';
import {eyeOff} from 'react-icons-kit/feather/eyeOff';
import {eye} from 'react-icons-kit/feather/eye'
function Login() {  
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        user_mail: '',
        user_password: ''
    }) 
    const[viewPassword, setViewPassword] = useState(false);
    const[icon, setIcon] = useState(eyeOff);
    const[type, setType] = useState('password');
    const [accessTokenn, setAccessToken] = useState('');
    const handleToggle = () => {
        if(type==='password')
        {
            setIcon(eye);
            setType('text');
        }
        else 
        {
            setIcon(eyeOff)
            setType('password')
        }
    }
    const handleForgotPassword = () => {
        alertify.prompt('Email:', '')
            .set({
                'onshow': function() {
                    this.setContent('<input type="email" id="email_prompt" name="email_prompt" style="width: 100%;">');
                },
                'title': 'Forgot Password',
                'type': 'text',
                'size': 'large',
                'width': '100%',
                'onok': async function(event, value){
                    var data = document.getElementById('email_prompt').value;
                    var datajson = {'email_prompt': data};
                    try
                    {
                        const response  = await axios.post(APP_URL + 'forgot-password', datajson);
                        //console.log(response.data);
                        if(response.data.Email_status === "exists")
                        {
                            alertify.success('Email sent!');
                        }
                        else if(response.data.Email_status === "Email does not exist! please provide valid email address")
                        {
                            alertify.warning("Email doesn't exist");
                        }
                        else
                        {
                            alertify.warning("Unexpected response");
                        }
                    }
                    catch(err)
                    {
                        console.log(err);
                    }
                },
                'oncancel': function(){
                    alertify.warning('Hope you remember it😁!');
                }
            }).show();
    }
    
    const [loading, setLoading] = useState(false); 
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData)=>({
            ...prevData,
            [name]: value,
        }))
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true)
        setTimeout(() => {
            setLoading(false);
          }, 4000);
        try
        {
            const response = await axios.post(APP_URL+'login', formData);
            if(response.data.authentication === "Please enter username and password properly!")
            {
                alertify.error('All fields are required to login');
            }
            else
            {
                const accessToken = response.data.result.accessToken;
                const data = response.data.result.role;
                console.log(response.data);
                localStorage.setItem('token', accessToken);
                // setAccessToken(accessToken);
                // console.log(accessTokenn);
                console.log(jwtDecode(accessToken));
                let stored = accessToken
                let x = localStorage.getItem('token');
                sessionStorage.setItem('role', data);
                setError('')
                if(!x)
                {
                    navigate('/');
                }     
                else
                {
                    if(response.data.result.status === 'Login Authenticated')
                        {
                            if(response.data.result.role === 5)
                            {
                                navigate('/customer/Profile');
                            }
                            else if(response.data.result.role === 2)
                            {
                                navigate('/home');
                            }
                            else
                            {
                               navigate('/');
                            }
                        }
                        else if(response.data.result.status === 'User_not_found')
                        {
                            alertify.error('User not found');
                        }
                        else if(response.data.authentication === 'Please enter username and password properly!')
                        {
                            alertify.error("Unknown Error");
                        }
                }          
            }
        }
        catch(error)
        {
            console.log("Login Failed" + error);
        }
    }
    return(
            <div className="flex w-full h-screen">
                <div className="w-full flex items-center justify-center lg:w-1/2">
                    <div className="bg-white px-10 py-20 rounded-xl border-2 border-green-400">
                    {error && <p>error</p>}
                    <form onSubmit={handleSubmit}>
                    <h1 className="text-2xl font-semibold text-gray-600">LOG IN</h1>
                            <div className="mt-8">
                                <div>
                                    <label className="text-lg font-medium text-green-600">Email<span className="text-red-500">*</span></label>
                                    <input name="user_mail" value={formData.user_mail} onChange={handleChange}
                                        className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent hover:border-green-300"
                                        placeholder="username@example.com"
                                        type="email"
                                    />
                                </div>
                                <div>
                                    <label className="text-lg font-medium text-green-600">Password<span className="text-red-500">*</span></label>
                                    <input name="user_password" value={formData.user_password} onChange={handleChange}
                                        className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent hover:border-green-300"
                                        placeholder="Password"
                                        type={type}
                                    />
                                    <span class="flex justify-end items-end text-green-400" onClick={handleToggle}>
                                        <Icon class="absolute mr-3 mb-4" icon={icon} size={25}/>
                                    </span>
                                </div>
                                <div className="mt-8 flex justify-between items-center" >
                                    <a className="text-green-500" onClick={handleForgotPassword}>Forgot Password</a>
                                </div>
                                <div className='mt-3 flex flex-col gap-y-4'>
                                    <button className="active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-all py-3 rounded-l bg-green-500 text-white text-lg font-bold flex items-center justify-center">{loading ? (<PuffLoader size={28} color="gold" ariaLabel="Loading"/>):('Log in')}</button>
                                    {/* <button className="active:scale-[.98] active:duration-75 hover:scale-[1.02] flex items-center items-center justify-center text-red-500"><FaGoogle />- <span className="font-bold text-blue-500">Log In</span></button> */}
                                </div>
                            </div>
                            </form>
                    </div>
                </div>
                <div className="hidden relative lg:flex flex-col items-center w-1/2 justify-center h-full bg-green-600">
                        <img src={image} alt={image} className="mb-4" width="30%"/>
                        <div className="text-4xl font-bold mb-4">Trak<span className="text-white">tor</span></div>
                        <div className="w-full flex justify-center font-semibold text-white">Information management portal</div>
                </div>
            </div>
    );        
}
  
export default Login;