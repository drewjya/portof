import { CgProfile } from "react-icons/cg";
import {BsGear} from 'react-icons/bs';
import {IoSchoolOutline} from 'react-icons/io5';
import {FaMoon, FaSun} from 'react-icons/fa'
import useDarkMode from "../hooks/darkMode";


import {MdOutlineWorkspaces, MdOutlinePersonAddAlt1} from "react-icons/md";

const Sidebar = ()=>{
    return (
        <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
        bg-gray-200 dark:bg-gray-900 shadow-lg">
            <SidebarIcon icon={<CgProfile size="28"/>}/>
            <SidebarIcon icon={<BsGear size="28"/>}/>
            <SidebarIcon icon={<IoSchoolOutline size="28"/>}/>
            <SidebarIcon icon={<MdOutlineWorkspaces size="28"/>}/>
            <SidebarIcon icon={<MdOutlinePersonAddAlt1 size="28"/>}/>
            <ThemeIcon />
        </div>

    );
}

const ThemeIcon=()=>{
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <span className="themeIcon dark:bg-gray-800 dark:text-green-300" onClick={handleMode}>
        {darkTheme ? (
          <FaSun size='24' className='top-navigation-icon' />
        ) : (
          <FaMoon size='24' className='top-navigation-icon' />
        )}
      </span>
    );
  };

const listData = [
    'Profile',
    'Skills',
    'Education',
    'Project',
    'Contacts'
];
const SidebarIcon = ({key, icon, text=listData})=>(
    <div  className="sidebar-icon dark:bg-gray-800 dark:text-green-300 group">
        {icon}
        <span class="sidebar-tooltip group-hover:opacity-100">
            
            {key}
        </span>
    </div>
        
);

export default Sidebar
