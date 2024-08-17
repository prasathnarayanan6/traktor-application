import React,{useState} from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../../components/NavBar";
import axios from "axios";
import alertify from "alertifyjs";
import { jwtDecode } from "jwt-decode";
import {Bounce, ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { useNavigate} from "react-router-dom";
function ProfileApply() {
    let token = jwtDecode(localStorage.getItem('token'));
    // const [form] = Form.useForm();
    // console.log(token.user_mail);
    const[awsCreditDate, setAwsCreditData] = useState({
        team_email: `${token.user_mail}`,
        aws_startup_name: '',
        aws_email: '',
        aws_description: ''
    })
    const[tokenData, setTokenData] = useState('');
    // const[enc, setEnc] = useState('');
    const handleChange = (e) => {
        const {name, value} = e.target;
        setAwsCreditData((prevData)=>({  
            ...prevData,
            [name]: value,
        })) 
    }
    console.log(awsCreditDate);
    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const result = await axios.post(`http://localhost:3003/api/v1/customer/aws-credit-apply`,  awsCreditDate, {headers: {
                // 'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            }});
            if(result.status==200)
            {
                toast.success("We received your information");
                setAwsCreditData({
                    team_email: `${token.user_mail}`,
                    aws_startup_name: '',
                    aws_email: '',
                    aws_description: ''
                })
            }
        }
        catch(err)
        {
            if(err.response.status == 400)
            {
                // alertify.warning("Field should not be empty")
                toast.warning('Field Should not be empty', {
                    position: "bottom-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                })
            }
            else if(err.response.status == 401)
            {
                toast.warning('Email is not valid')
            }
            // else if(err.response.status==204)
            // {
            //     alertify.warning("Field should not be empty");
            // }
            else if(err.response.status == 409)
            {
                toast.error("Try after 24 hours!");
            }
        }
    };
    // const ProfileView = async() => {
    //     const result = await axios.get(`http://localhost:3003/api/v1/profile-data/${token.user_mail}`, {
    //         headers: {
    //           'Authorization': `Bearer ${localStorage.getItem('token')}`,
    //           'Content-Type': 'application/json'
    //         }
    //     });
    //     // if(result.data.statsu)
    //     // {
    //     //     console.log("401");
    //     // }
    //     if(result.data.message === "Invalid Token!")
    //     {
    //         localStorage.removeItem('token');
    //     }
    //     else
    //     {
    //       setTokenData(result.data.result.rows[0]);
    //     }
    // }
    // useState(()=>{
    //     ProfileView();
    // }, [])
    return (
        <div className="flex">
            <section className="w-[66px]">
                <SideBar />
            </section>
            <div className="flex-grow">
                <NavBar />
                    <div className="items-center px-4 py-4 mt-2 sm:mt-10 md:mt-1 p-8">
                            <span className=" p-5 text-slate-500 text-sm">
                                Dashboard / AWS Credits /Apply
                            </span></div>

                            <div className=" flex flex-col  p-2 m-14 mt-2 border ">
                                <div className="mb-6">
                                    <h2 className="text-2xl font-semibold mb-4">AWS Credits Application</h2>
                                    <form onSubmit={handleSubmit}>
                                        <div class="grid grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="startupName" className="block text-gray-700 font-semibold mb-2">Startup Name</label>
                                                <input type="text" id="startupName" name="aws_startup_name" className="w-full p-2 border border-gray-300 rounded" onChange={handleChange}/>
                                            </div> 
                
                                            <div>
                                                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                                                <input type="text" id="email" name="aws_email" className="w-full p-2 border border-gray-300 rounded" onChange={handleChange}/>
                                            </div>
                                        </div>
                                        <div className="mb-6">
                                            <label htmlFor="description" className="block text-gray-700 font-semibold mb-4 mt-6">Why would you like to apply?</label>
                                            <textarea id="description" name="aws_description" rows="4" className="w-full p-2 border border-gray-300 rounded resize-none" placeholder="Description" onChange={handleChange}></textarea>
                                        </div>
                                        <div className="flex justify-center ">
                                            <button type="button" className="active:scale-[.90] active:duration-70 hover:scale-[1.02] px-4 py-2 bg-gray-300 text-gray-700 font-semibold rounded-sm hover:bg-gray-400 text-sm">Cancel</button>
                                            <button type="submit" className="active:scale-[.90] active:duration-70 hover:scale-[1.02] px-4 py-2 bg-green-500 ml-2 text-white font-semibold rounded hover:bg-green-600 text-semibold">Apply</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                    </div>
                    <ToastContainer />
        </div>
    );
}
export default ProfileApply;