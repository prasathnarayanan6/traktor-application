import React from "react";
import SideBar from "../../../components/sidebar";
import NavBar from "../../../components/NavBar";
function FinTech(){
    return (
        <div className="h-screen flex">
            <sector className="fixed h-full">
                    <SideBar />
            </sector>
            <sector  className="flex-grow">
                        <div className="fixed w-full">
                            <NavBar />
                        </div>  
                        <div className="p-[90px;] h-full">
                            <h1 className="text-2xl font-semibold text-gray-500">FinTech Startups</h1>
                            <div className="flex">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Product Name</th>
                                                <th>Catrgory</th>
                                                <th>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Hello</td>
                                                <td>cskj</td>
                                                <td>sjojo</td>
                                                <td>jshfjh</td>
                                            </tr>
                                        </tbody>
                                    </table>
                            </div>
                        </div>
            </sector>
        </div>
    )
}
export default FinTech;