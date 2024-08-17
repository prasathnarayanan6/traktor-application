import React from 'react';
import SideBar from '../../components/SideBar';
import NavBar from '../../../components/NavBar';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

function CustomerStartup() {

  const columnDefs = [
    { headerName: 'Name', field: 'name' },
    { headerName: 'Cohort', field: 'cohort' },
    { headerName: 'Sector', field: 'sector' },
    { headerName: 'Mentor', field: 'mentor' },
    { headerName: 'Actions', field: 'actions', cellRenderer: () => <button>Action</button> },
  ];

  const rowData = [];

  return (
    <div className="flex">
      <section className="w-[66px]">
        <SideBar />
      </section>
      <div className="flex-grow">
        <NavBar />
        <div className="items-center px-4 py-4 mt-2 sm:mt-10 md:mt-1 p-8">
          <span className="p-5 text-slate-500 text-md">
            Dashboard / Startups
          </span>
          <h5 className="text-lg font-semibold mt-2 ml-10">Startups</h5>
        </div>
        <div className="flex flex-col p-2 m-14 mt-2 border">
          <div className="mb-6">
            <div className="grid grid-cols-2 gap-4 mt-6 ml-4">
              <input
                type="text"
                className="border border-blue-300 rounded-md bg-white-500 text-md mr-8 md:h-[34px] sm:w-[50%] mb-4"
                placeholder="search for startups"
              />
            </div>
            <div className="ag-theme-alpine" style={{ height: 400, width: '100%' }}>
              <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData}
                domLayout="autoHeight"
                pagination={true}
              paginationPageSize={10}
                overlayNoRowsTemplate={
                  '<span class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">No data available</span>'
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerStartup;