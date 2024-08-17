import React from "react";  
const[showModal, setShowModal] = useState(false);
function Schedule({isVisible, onClose, children}) {
    if(!isVisible) return null;
    const handleClose = (e) => {
        if(e.target.id === 'wrapper') onClose();
    }
    return (
        <div className='fixed inset-0 bg-black bg-opacity-15 backdrop-blur-xs mt-[56px;] flex ps-[750px;] border-md' id="wrapper" onClose={handleClose}>
            <div className="w-[440px]">
                <div className="p-4" style={{backgroundColor: '#afd5de'}}>
                      {children}
                </div>
            </div>
        </div>
    )
}
export default Schedule