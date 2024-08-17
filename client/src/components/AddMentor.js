import React from "react"; 

function AddMentor({isVisible,  onClose, children }){
    const handleClose = (e) => {
        if(e.target.id === 'wrapper') onClose();
    }
    return (
        <div className={`fixed inset-0 bg-black bg-opacity-25 backdrop-blur-xs flex justify-center items-center border-md ${isVisible ? 'animate-show' : 'animate-hide'}`} id="wrapper" onClick={handleClose}>
                <div className="w-[700px]">
                    <div className="bg-white p-4 rounded">
                        {children}
                    </div>
                </div>
        </div>
    ) 
}
export default AddMentor;