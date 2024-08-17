import React from "react";
import SideBar from "../../components/SideBar";
import NavBar from "../../../components/NavBar";
import { FaDownload, FaFileExcel, FaFilePdf, FaFilePowerpoint } from "react-icons/fa";
import jsPDF from 'jspdf';
import 'jspdf-autotable';


function Resources() {
  const files = [
    { name: "DE Step 1", type: "pdf" },
    { name: "DE Step 2", type: "pdf" },
    { name: "DE Step 3", type: "pdf" },
    { name: "DE Step 4", type: "pdf" },
    { name: "DE Step 5", type: "pdf" },
    { name: "DE Overview PPT", type: "ppt" },
    { name: "Market Segmentation Template", type: "xlsx" },
  ];

  const generatePDF = (fileName) => {
    const doc = new jsPDF();

    // Adding a title
    doc.setFontSize(20);
    doc.text(fileName, 105, 20, null, null, 'center');

    // Adding text with alignment
    doc.setFontSize(12);
    doc.text('Left aligned text', 10, 40);
    doc.text('Center aligned text', 105, 50, null, null, 'center');
    doc.text('Right aligned text', 200, 60, null, null, 'right');

    // Adding a table
    doc.autoTable({
      head: [['Name', 'Email','state', 'Country']],
      body: [
        ['Prasath Narayanan', 'techsupport@iitm.ac.in', 'TamilNadu', 'India']
      ],
      startY: 80,
      margin: { top: 10, left: 10, right: 10 },
      styles: { overflow: 'linebreak' },
      headStyles: { fillColor: [22, 160, 133] },
      bodyStyles: { fillColor: [255, 255, 255] },
    });

    // Save the PDF
    doc.save(`${fileName}.pdf`);
  };

  const getFileIcon = (type) => {
    switch (type) {
      case "pdf":
        return <span className="text-red-500"><FaFilePdf/></span>;
      case "ppt":
        return <span className="text-green-500"><FaFilePowerpoint/></span>;
      case "xlsx":
        return <span className="text-green-700"><FaFileExcel/></span>;
      default:
        return <span>📄</span>;
    }
  };

  return (
    <div className="flex">
      <section className="w-[66px]">
        <SideBar />
      </section>
      <div className="flex-grow">
        <NavBar />
        <div className="items-center px-4 py-4 mt-2 sm:mt-10 md:mt-1 p-8">
          <span className="p-5 text-slate-500 text-md mb-2">
            Dashboard / Resources
          </span>
        </div>
        <span className="p-10 text-md">Resources</span>
        <div className="flex flex-col items-left justify-center p-4 m-10 mt-2 border">
          <h2 className="text-gray-700 text-md font-semibold mb-2">All Resources</h2>
          <div className="px-6 py-4">
            <div className="relative">
              <input
                type="text"
                className="border border-blue-300 rounded-md bg-white-500 ms-4 md:h-[34px] sm:w-[25%]"
                placeholder="Search for Resources"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 p-4">
            {files.map((file, index) => (
              <div key={index} className="flex items-center border rounded p-2">
                <div className="flex-grow flex items-center">
                  {getFileIcon(file.type)}
                  <span className="ml-2">{file.name}</span>
                </div>
                <button 
                  className="active:scale-[.90] active:duration-70 hover:scale-[1.02] text-gray-600" 
                  onClick={() => generatePDF(file.name)}
                >
                  <FaDownload />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resources;