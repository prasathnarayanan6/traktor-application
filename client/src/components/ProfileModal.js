import React, {
    useState,
    useEffect
} from "react";
function ProfileModal({isVisible, onClose, children}){
    if(!isVisible) return null;
    const handleClose = (e) => {
        if(e.target.id === 'wrapper') onClose();
    }
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-xs flex justify-center items-center border-md' id="wrapper" onClick={handleClose}>
            <div className="w-[600px]">
                {/* <button className="text-white text-xl place-self-end justify-end" onClick={()=>onClose()}>X</button> */}
                <div className="bg-white p-4 rounded">
                        {children}
                </div>
            </div>
        </div>
    )
}
export default ProfileModal;