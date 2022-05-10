import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSignOutAlt,faList , faHome, faGripHorizontal,  faPlus,faCrown,faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from './../../../App';
import { useEffect } from 'react';


const Sidebar = () => {
  const[loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [isDoctor,setDoctor] = useState(false)
  
   useEffect(() => {
     fetch('http://localhost:6700/checkDoctor',{
         method : 'POST',
         headers: { 'content-type' : 'application/json'},
         body: JSON.stringify({email : loggedInUser.email})
     })
        .then(response => response.json())
        .then(data => setDoctor(data))
   },[])
   
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 col-sm-12 py-5 px-4 " style={{ height: "100vh" }}>
            <ul className="list-unstyled">
           <div>
                <li>
                    <Link to="/" className="text-white">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li>
                        <Link to="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faCalendarCheck} />   <span>Check Appoinment</span>
                        </Link>
                    </li>
                   {isDoctor && <div>
                   <li>
                        <Link to="/patient" className="text-white">
                            <FontAwesomeIcon icon={faList} /> <span>Patient</span>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/admin" className="text-white">
                            <FontAwesomeIcon icon={faCrown} /> <span>Make Admin</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/manage" className="text-white">
                            <FontAwesomeIcon icon={faFileAlt} /> <span>Manage Service</span>
                        </Link>
                    </li>
                   </div>
                   }
               
                 </div> 
                 <div>
                
            
                 
               </div>
            </ul>
            <div>
                <Link to="/" className="text-white"  onClick={()=>setLoggedInUser({})}><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;