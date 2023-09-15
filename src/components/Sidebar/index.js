import React, {useState} from 'react'
import "./styles.css"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [active, setActive] = useState("")
    const [actives, setActives] = useState("")

    return (
        <div className='sidebar'>
            <div className='side-container'>
                <div className={actives==="profile"?'sides-select':"sides"}>
                <Link to="/profile">
                <p onClick={(e)=>setActives("profile")}>Profile Page</p>
                </Link>
                </div>
                <div className={active==="user"?'side1-select':"side1"}>
                    <Link to="/usermanagement">
                           <p onClick={(e)=>setActive("user")}> User Management < ChevronRightIcon />
                           </p>
                           </Link>
                </div>
                <div className='side2'>
                    <Menu >
                        <MenuButton    >
                            General Report < ChevronRightIcon />
                        </MenuButton>
                        <MenuList>
                            {/* MenuItems are not rendered unless Menu is open */}
                            <MenuItem>New Window</MenuItem>
                            <MenuItem>Open Closed Tab</MenuItem>
                            <MenuItem>Open File</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
                <div className={active==="program"?'side3-select':"side3"}>
                    <Link to="/programlist">
                    <p onClick={(e)=>setActive("program")}>
                            Program List < ChevronRightIcon />
                            </p>
                            </Link>
                </div>
                <div className={active==="subject"?'side3-select':"side4"}>
                    <Link to='/subject'>
                   <p onClick={(e)=>setActive("subject")}>
                            Subject Combination < ChevronRightIcon />
                            </p> 
                            </Link>
                </div>
                <div className={active==="admission"?'side3-select':"side5"}>
                    <Link to="/admissioncriteria">
                    <p onClick={(e)=>setActive("admission")}>
                            Admission Criteria < ChevronRightIcon />
                            </p>  
                            </Link>
                </div>
                <div className={active==="student"?'side3-select':"side6"}>
                    <Link to="/studentlist">
                    <p onClick={(e)=>setActive("student")}>
                            Student's List < ChevronRightIcon />
                            </p>
                            </Link>
                </div>
                <div className={active==="admissionlist"?'side3-select':"side7"}>
                    <Link to="/admissionlist">
                <p onClick={(e)=>setActive("admissionlist")}>
                            Admission list < ChevronRightIcon />
                            </p> 
                            </Link>   
                </div>
                <div className={active==="session"?'side3-select':"side8"}>
                    <Link to='/session'>
                    <p onClick={(e)=>setActive("session")}>
                            Session < ChevronRightIcon />
                            </p> 
                            </Link>
                </div>
                <div className={active==="updatepassword"?'side3-select':"side9"}>
                    <Link to='/updatepassword'>
                    <p onClick={(e)=>setActive("updatepassword")}>Update Password</p>
                    </Link>
                </div>
                <div className={active==="help"?'side3-select':"side10"}>
                    <Link to='/help'>
                    <p onClick={(e)=>setActive("help")}>Help</p>
                    </Link>
                </div>
                <div className={active==="signout"?'side3-select':"side11"}>
                <Link to="/signout">
                    <p onClick={(e)=>setActive("signout")}>Sign Out</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Sidebar