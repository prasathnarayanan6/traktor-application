import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { useState, useEffect } from 'react';
import SideBar from '../../components/SideBar';
import NavBar from '../../../components/NavBar';
import 'lity/dist/lity.css';
import lity from 'lity';
import axios from 'axios'
import alertify from 'alertifyjs';
import APP_URL from '../../../Config';
import { FaCheckCircle, FaEye, FaTrash } from 'react-icons/fa';
function Resume() {
  const [data, setData] = useState([]);
  const ApprovalButtonRenderer = ({ value, data }) => {
    const handleApprovalClick = async() => {
      try{
          const response = await axios.post(APP_URL+'resume/resume-send', data)
        if(response.status===200)
        {
            alertify.success("Email Sent")
        }  
      }
      catch(err)
      {
        console.log(err);
        alertify.error("Failed");
      }
    };

    const handleNewButtonClick = () => {
      console.log("New button clicked for", value);
      // Custom logic for the new button
    };

    return (
      <div className="flex items-center">
        <button onClick={handleApprovalClick} className="bg-green-500 mr-2 text-white font-bold rounded-md text-sm p-1">
          {value === 'Approved' ? 'Approve' : <FaCheckCircle />} 
        </button>
        <button onClick={handleNewButtonClick} className="bg-red-500 text-white font-bold rounded-md text-sm p-1">
          <FaTrash />
        </button>
      </div>
    );
  };
  const ResumeButtonRenderer = ({ value }) => {
    const openResume = (resume_url) => {
          lity(resume_url); 
    };
  
    return (
      <div className="flex items-center">
        <button
          className="bg-yellow-500 text-white font-bold rounded-md text-sm p-1"
          onClick={() => openResume(value)}>
          <FaEye />
        </button>
      </div>
    );
  };
  const columnDefs = [
    { field: 'resume_name', headerName: 'Full Name' },
    { field: 'resume_email', headerName: 'Email' },
    { field: 'resume_year', headerName: 'Year' },
    { field: 'college_data', headerName: 'College' },
    { field: 'college_department', headerName: 'Department' },
    {   field: 'resume_url', 
        headerName: 'Resume',
        cellRenderer: ResumeButtonRenderer,
        minWidth: 150
    },
    {
      field: 'approvalStatus',
      headerName: 'Action',
      cellRenderer: ApprovalButtonRenderer,
      minWidth: 150,
    },
  ];

  useEffect(() => {
    fetch(APP_URL+'resume-fetch/14/1')
      .then(response => response.json())
      .then(fetchedData => setData(fetchedData));
  }, []);
  const styles = `
  @media (max-width: 768px) {
    .ag-pagination {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }`;
  return (
    <div className="flex">
      <section id="SideBar" className="w-[66px]">
        <SideBar />
      </section>
      <section className="flex-grow">
        <NavBar />
        <div className="items-center px-4 py-2 m-auto mt-1 sm:mt-10">
          <div className="flex items-center justify-between">
                  <span className="text-slate-500 text-sm">Resume-data/ uploaded</span>
                  <a href="/customer/home" className="text-green-200 rounded-md bg-blue-900 p-1 text-lg place-self-end active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-al;"><FaEye /></a>
          </div>
        </div>
        <div className="flex align-center items-center justify-center mt-10">
          <div className="ag-theme-alpine w-full">
            <AgGridReact
              rowData={data}
              columnDefs={columnDefs}
              domLayout='autoHeight'
              headerBackgroundColor="#AED76Z"
              rowHeight={40}
              suppressHorizontalScroll={true}
              enableColResize={true}
              paginationPageSize = {10}
              paginationPageSizeSelector = {[10,20,30]}
              suppressScrollOnNewData={true}
              pagination={true}
              frameworkComponents={{
                ResumeButtonRenderer: ResumeButtonRenderer,
                ApprovalButtonRenderer: ApprovalButtonRenderer,
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
