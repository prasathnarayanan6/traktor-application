import React, {useState} from 'react'
import { FaBars, FaBook, FaCalendar, FaChalkboard, FaChalkboardTeacher, FaFilePdf, FaFileUpload, FaGraduationCap, FaHome, FaPencilAlt, FaPeopleArrows} from 'react-icons/fa';
import { FaPersonChalkboard } from 'react-icons/fa6';

function SideBar({children}) {
    const [userRole, setUserRole] = useState('customer');  
    const currentPath = window.location.pathname;
    const ShowArrowIcon = currentPath === '/customer/Home';
  return (
<div className="fixed top-0 left-0 mt-14 h-screen md:w-11 sm:w-9 w-9 m-0 flex flex-col text-black border border-r-1 border-gray-500 shadow-md">
      <SideBarLink href="/finance/home">
          <SideBarIcon icon={<FaHome size="24" />} tooltipText="Home" />
      </SideBarLink>
      <SideBarLink href="/startups">
          <SideBarIcon icon={<FaGraduationCap size="24" />} tooltipText="Startups" />
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
      className="relative flex items-center justify-center h-9 w-8 lg:mt-2 mb-3 mx-auto hover:border-2 hover:border-green-400 hover:bg-green-300 text-green-700 transition-all duration-300 cursor-pointer group active:scale-[.98] active:duration-75 hover:scale-[1.02] ease-in-out transition-all rounded-md"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {icon}
      {hoverTooltip && (
        <span className="absolute w-auto p-2 m-2 min-w-max left-8 rounded-md shadow-md text-slate-800 bg-white text-xs font-bold transition duration-1000 scale-100 border z-10 ">
            {tooltipText}
        </span>
      )}
    </div>
  );
};
export default SideBar;