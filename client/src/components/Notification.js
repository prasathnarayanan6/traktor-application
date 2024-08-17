import React from "react";
function Notification({isVisible, onClose, children})
{
    if(!isVisible) return null;
    const handleClose = (e) => {
        if(e.target.id === 'wrapper') onClose();
    }
    return(
        <div className='fixed inset-0 bg-black bg-opacity-15 backdrop-blur-xs mt-[56px;] flex ps-[750px;] border-md' id="wrapper" onClick={handleClose}>
            <div className="w-[440px]">
                <div className="p-4" onClick={handleClose} style={{backgroundColor: '#afd5de'}}>
                      {children}
                </div>
            </div>
        </div>
    )
}
export default Notification;  
