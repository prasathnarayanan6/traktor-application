import React, {useState} from 'react'
import { FaBars, FaBook, FaBuilding, FaBusinessTime, FaCalendar, FaChalkboardTeacher, FaFileExcel, FaFilePdf, FaGraduationCap, FaHome, FaJava, FaJoint, FaLayerGroup, FaPeopleArrows, FaPhone, FaPuzzlePiece, FaResolving, FaRestroom, FaSearch, FaSourcetree, FaTasks, FaUser, FaUsers} from 'react-icons/fa';
import { FaFile, FaGroupArrowsRotate, FaPersonRifle, FaRegSquarePlus, FaUpwork } from 'react-icons/fa6';

function SideBar() {
    const [userRole, setUserRole] = useState('customer');  
    const currentPath = window.location.pathname;
    const ShowArrowIcon = currentPath === '/customer/Home';
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-800 text-dark shadow-lg">
      <SideBarLink href="/customer/Profile">
          <SideBarIcon icon={<FaUser size="16"/>} tooltipText="Profile" />
      </SideBarLink>
      <SideBarLink href="/customer/DE">
          <SideBarIcon icon={<FaPuzzlePiece size="16"/>} tooltipText="DisEnt" />
      </SideBarLink>
      <SideBarLink href="/customer/Mentor">
          <SideBarIcon icon={<FaUsers size="16"/>} tooltipText="Mentor" />
      </SideBarLink>
      <SideBarLink href="/customer/Startups">
          <SideBarIcon icon={<FaLayerGroup size="16"/>} tooltipText="Startups" />
      </SideBarLink>
      <SideBarLink href="/customer/Contacts">
          <SideBarIcon icon={<FaPhone size="16"/>} tooltipText="Contacts" />
      </SideBarLink>
      <SideBarLink href="/customer/Jobs">
          <SideBarIcon icon={<FaBusinessTime  size="16"/>} tooltipText="Jobs" />
      </SideBarLink>
      <SideBarLink href="/customer/Resources">
          <SideBarIcon icon={<FaFile  size="16"/>} tooltipText="Resources" />
      </SideBarLink>
      <SideBarLink href="/customer/resume">
          <SideBarIcon icon={<FaFilePdf size="16" />} tooltipText="Resume" />
      </SideBarLink>
    </div>
  );
}

const SideBarLink = ({ href, children }) => {
  return (
    <a href={href} className="block">
      {children}
    </a>
  );
};

const SideBarIcon = ({ icon, tooltipText }) => {
  const [hoverTooltip, setHoverTooltip] = useState(false);

  const handleMouseEnter = () => {
    setHoverTooltip(true);
  };

  const handleMouseLeave = () => {
    setHoverTooltip(false);
  };

  return (
    <div
      className="relative flex items-center justify-center h-10 w-10 mt-4 mb-1 mx-auto shadow-lg bg-gray-900 text-green-500 hover:bg-green-600 hover:text-white rounded-3xl hover:rounded-xl transition-all duration-300 cursor-pointer group active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-all"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon}
      {hoverTooltip && (
        <span className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-sm shadow-md text-slate-800 bg-white text-xs font-bold transition duration-1000 scale-100">
            {tooltipText}
        </span>
      )}
    </div>
  );
};
export default SideBar;