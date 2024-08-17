import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import SideBar from "../../components/SideBar";
import NavBar from "../../../components/NavBar";

const contacts = [
  {
    name: "prasath",
    designation: "tech_support",
    organisation: "OIE",
    connectFor: "tech",
    
  },
  {
    name: "Aakarsh Naidu",
    designation: "CEO",
    organisation: "Startupreneur",
    connectFor: "Mentoring",
       button:"connecct"       
  },
];
const actionButton=(Params)=>{
  console.log(Params);
}
const DataTable = ({ rowData }) => {
  const columnDefs = [
    { headerName: 'Name', field: 'name', sortable: true, filter: true },
    { headerName: 'Designation', field: 'designation', sortable: true, filter: true },
    { headerName: 'Organisation', field: 'organisation', sortable: true, filter: true },
    { headerName: 'Connect', field: 'connectFor', sortable: true, filter: true }
  ];

  return (
    <div className="flex flex-col p-2 m-14 mt-2 border">
      <div className="mb-6">
        <div className="grid grid-cols-2 gap-4 mt-6 ml-4">
          <input
            type="text"
            className="border border-blue-300 rounded-md bg-white-500 text-md mr-8 md:h-[34px] sm:w-[50%] mb-4"
            placeholder="search for startups"
          />
        </div>
      </div>
      <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
    </div>
  );
};

function CustomerContacts() {
  return (
    <div className="flex">
      <section className="w-[66px]">
        <SideBar />
      </section>

      <div className="flex-grow">
        <NavBar />
        <div className="items-center px-4 py-4 mt-2 sm:mt-10 md:mt-1 p-8">
          <span className=" p-5 text-slate-500 text-md ">
            Dashboard / Contacts
          </span>
        </div>
        <div className="flex justify-start p-10 text-md mx-10">
          <span className="flex-grow">Contacts</span>
          <button
            type="button"
            onClick={() =>
              (window.location.href = "http://localhost:3000/contact/new")
            }
            className="active:scale-[.90] active:duration-70 hover:scale-[1.02] text-white bg-green-600 p-2 rounded-md font-semibold"
          >
            My Connections
          </button>
        </div>
        <DataTable rowData={contacts} />
      </div>
    </div>
  );
}

export default CustomerContacts;