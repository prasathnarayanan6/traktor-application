import React from "react";
import DonutChart from "../DonutChart";


function IndustryModule()
{
    return (
        <div>
            <h1 className="text-3xl text-gray-500 pb-3">Industry 4.0</h1>
            <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-3">
                            <div className="grid grid-cols-4 p-2 gap-4">
                                    <div className="shadow-md font-semibold rounded-lg w-[100%;]" style={{backgroundColor: '#afdade'}}>
                                        <div className="p-4 text-md text-gray-600">Akshar Teams</div>
                                        <div className="p-3 pt-3 text-3xl font-semibold pb-4 justify-end items-end flex text-gray-500">200</div>
                                    </div>
                                    <div className="shadow-md font-semibold rounded-lg w-[100%;]" style={{backgroundColor: '#afd5de'}}>
                                        <div className="p-4 text-md text-gray-600">Pratham Team</div>
                                        <div className="p-3 pt-3 text-3xl font-semibold pb-4 justify-end items-end flex text-gray-500">200</div>
                                    </div>
                                    <div className="shadow-md font-semibold rounded-lg w-[100%;]" style={{backgroundColor: '#afcdde'}}>
                                        <div className="p-4 text-md text-gray-600">Mentors Associated</div>
                                        <div className="p-3 pt-3 text-3xl font-semibold pb-4 justify-end items-end flex text-gray-500">200</div>
                                    </div>
                                    <div className="shadow-md font-semibold rounded-lg w-[100%;]" style={{backgroundColor: '#99d1c7'}}>
                                        <div className="p-4 text-md text-gray-600">Total Funds</div>
                                        <div className="p-3 pt-3 text-3xl font-semibold pb-4 justify-end items-end flex text-gray-500">3500000</div>
                                    </div>
                                    <div className="shadow-md font-semibold rounded-lg w-[100%;]" style={{backgroundColor: '#afcce3'}}>
                                        <div className="p-4 text-md text-gray-600">Graduated startups</div>
                                        <div className="p-3 pt-3 text-3xl font-semibold pb-4 justify-end items-end flex text-gray-500">20</div>
                                    </div>
                            </div>
                            <div className="grid grid-cols-1 mt-12">
                                                        {/* table starts */}
                                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                            <thead class="text-xs text-gray-500 uppercase dark:text-gray-500" style={{backgroundColor: '#7da1ad'}}>
                                                <tr>
                                                    <th scope="col" class="px-6 py-3">
                                                        Team Name
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Founder email
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Sub Sector
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                         
                                                    </th>
                                                    <th scope="col" class="px-6 py-3">
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        Apple MacBook Pro 17"
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        Silver
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        Laptop
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        $2999
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                                    </td>
                                                </tr>
                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        Microsoft Surface Pro
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        White
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        Laptop PC
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        $1999
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                                    </td>
                                                </tr>
                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        Magic Mouse 2
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        Black
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        Accessories
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        $99
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                                    </td>
                                                </tr>
                                                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        Google Pixel Phone
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        Gray
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        Phone
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        $799
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        Apple Watch 5
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        Red
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        Wearables
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        $999
                                                    </td>
                                                    <td class="px-6 py-4">
                                                        <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* table ends */}
                            </div>
                    </div>
                    <div className="cols-span-1 ">
                            <div className="grid grid-cols-1 p-2 gap-4">
                                    <div className="shadow-md font-semibold rounded-lg w-full md:h-[300px;] border">
                                        <div className="p-2 pt-1 text-xs text-gray-600 font-semibold">Fund distributed across distributed Sub-sector</div>
                                        <div className="flex justify-center items-center mb-1">
                                            <div className="w-50 h-50 overflow-hidden">
                                                <DonutChart/>
                                            </div>
                                        </div>
                                    </div> 
                            </div>

                            <div className="grid grid-cols-1 p-2 gap-4">
                                    <div className="shadow-md font-semibold rounded-lg w-full md:h-[300px;] border">
                                        <div className="p-2 pt-1 text-xs text-gray-600 font-semibold">Fund distributed across distributed Sub-sector</div>
                                        <div className="flex justify-center items-center mb-1">
                                            <div className="w-50 h-50 overflow-hidden">
                                                <DonutChart/>
                                            </div>
                                        </div>
                                    </div> 
                            </div>
                    </div>
            </div> 
        </div>
    )
}       
export default IndustryModule;