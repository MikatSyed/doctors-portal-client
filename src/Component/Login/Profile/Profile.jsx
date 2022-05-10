import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { UserContext } from "../../../App.js";

import './Profile.css'

import { Link } from 'react-router-dom';
import LoggedInUser from './../LoggedInUser/LoggedInUser';
import Navbars from "../../Shared/Navbar/Navbars";



const Profile = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

 

  return (
     
     <>
     <Navbars/>
    <section className="container">
   
      <div> 
        <LoggedInUser/>
    
      
      <Button
          as={Link}
          to="/home"
          className="logout_btn"
          variant="primary"
          onClick={()=>setLoggedInUser({})}
        >
          Log Out
        </Button>
   
   
      </div>
    </section>
   </>
  );
};

export default Profile;