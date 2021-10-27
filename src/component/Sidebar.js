import { CgProfile } from "react-icons/cg";
import {BsGear} from 'react-icons/bs';
import {IoSchoolOutline} from 'react-icons/io5';
import {FaMoon, FaSun} from 'react-icons/fa'
import useDarkMode from "../hooks/darkMode";
import {MdOutlineWorkspaces, MdOutlinePersonAddAlt1} from "react-icons/md";
import { useHistory } from "react-router";
import { useState, useEffect } from 'react'

const Sidebar = props=>{
  const history = useHistory();
  const [activeTabs, setActiveTabs] = useState(props.name);
  useEffect(() => {
    switch (activeTabs) {
        case 'profile':
            history.push('/portof/')
            break;
        case 'skills':
            history.push('/portof/skills')
            break;
        case 'education':
            history.push('/portof/education')
            break;
        case 'project':
            history.push('/portof/project')
            break; 
        case 'contact':
            history.push('/portof/contact')
            break;
        default:
            history.push('/portof/')
            break;
    }
}, [activeTabs, history]);
    return (
        <div className="sidebar">
          <div  className="sidebar-icon group " onClick={()=>setActiveTabs('profile')}>
          {activeTabs === 'profile' ?
            <div className="tab-icon">
              <CgProfile size="28" />
            </div> : 
            <div className="tab-icon-off">
              <CgProfile size="28"/>
            </div>
            }
              <span class="sidebar-tooltip group-hover:scale-100">
            Profile
            </span>
          </div>
          <div  className="sidebar-icon group " onClick={()=>setActiveTabs('skills')}>
          {activeTabs === 'skills' ?
            <div className="tab-icon">
              <BsGear size="28" />
            </div> : 
            <div className="tab-icon-off">
              <BsGear size="28"/>
            </div>
            }
              <span class="sidebar-tooltip group-hover:scale-100">
            Skills
            </span>
          </div>
          <div  className="sidebar-icon group"  onClick={()=>setActiveTabs('education')}>
          {activeTabs === 'education' ?
            <div className="tab-icon">
              <IoSchoolOutline size="28"/>
            </div> : 
            <div className="tab-icon-off">
              <IoSchoolOutline size="28"/>
            </div>
            }
              <span class="sidebar-tooltip group-hover:scale-100">
            Education
            </span>
          </div>
          <div  className="sidebar-icon group" onClick={()=>setActiveTabs('project')}>
          {activeTabs === 'project' ?
            <div className="tab-icon">
              <MdOutlineWorkspaces size="28" />
            </div> : 
            <div className="tab-icon-off">
              <MdOutlineWorkspaces size="28" />
            </div>
            }
              <span class="sidebar-tooltip group-hover:scale-100">
            Project
            </span>
          </div>
          <div  className="sidebar-icon group"  onClick={()=>setActiveTabs('contact')}>
          {activeTabs === 'contact' ?
            <div className="tab-icon">
              <MdOutlinePersonAddAlt1 size="28"/>
            </div> : 
            <div className="tab-icon-off">
              <MdOutlinePersonAddAlt1 size="28"/>
            </div>
            }
              <span class="sidebar-tooltip group-hover:scale-100">
            Contact
            </span>
          </div>
         
            
           
            <ThemeIcon />
        </div>

    );
}

const ThemeIcon=()=>{
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <span className="themeIcon dark:bg-gray-700 dark:text-green-300" onClick={handleMode}>
        {darkTheme ? (
          <FaMoon size='24' className='top-navigation-icon' />
        ) : (
          <FaSun size='24' className='top-navigation-icon' />
        )}
      </span>
    );
  };





export default Sidebar
