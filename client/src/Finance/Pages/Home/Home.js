import React from 'react'
import SideBar from '../../../Finance/Components/Sidebar'
import NavBar from '../../../components/NavBar'

const FinanceHome = () => {
  return (
    <div>
        <div className="h-screen flex ">
                <section id="SideBar" className="fixed h-full">
                    <SideBar />
                </section>
                <section id="" className="flex-grow">
                        <div className="fixed w-full">
                            <NavBar />
                        </div>
                        <div className="p-[90px;] h-full">
                                <div className={`grid md:grid-cols-4 gap-4 mt-2 grid-cols-1 `}> 
                                </div>
                        </div>
                </section>
        </div>
                            
    </div>
  )
}

export default FinanceHome;