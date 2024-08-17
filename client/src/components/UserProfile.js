import React from "react";
import data from '../assets/images/296fe121-5dfa-43f4-98b5-db50019738a7.jpg'
const UserProfile = ({resume_name, resume_url}) => {
    return (
        <div className="flex justify-center items-center flex-col gap-4 bg-gray-100 rounded-lg py-10">
            <img 
                src={data}
                alt=""
                className="w-24 p-2 border-[2px] border-solid border-green-400 rounded-full object-cover"
            />
            <div className="text-[1.2rem] font-bold">{resume_name}</div>
            <a href={resume_url} className="text-sm bg-green-500 p-2 text-white font-bold rounded-md">View Resume</a>
        </div>
    )
}
export default UserProfile;