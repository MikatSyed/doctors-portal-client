import React, { useContext } from 'react'
import {Navbar,Container,Nav,Button, NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './Navbars.css'


const Navbars = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
      <>
        <Navbar>
        <Container>
        <Navbar.Brand className="brand_name" >Doctor Portal</Navbar.Brand>
        <Nav className="">
          <Link className="nav_link" to="/home">Home</Link>
          <Link className="nav_link" to="/order">Order</Link>
          <Link className="nav_link" to="/dashboard">Admin</Link>
          <Link className="nav_link" to="">Deals</Link>
        </Nav>
        {
        loggedInUser.isSignedIn ? 
        <span> 
        {
          loggedInUser.photo ? (
              <Nav.Link as={Link} to="/profile">
                <img
                  className="avatar"
                  src={loggedInUser.photo}
                  alt={loggedInUser.name}
                />
              </Nav.Link>
            )
:
(
              <Nav.Link as={Link} to="/profile">
                <h5 className="text-white">{loggedInUser.name}</h5>
              </Nav.Link>
            )


        }
      
          
           </span>
         :
     <Link to="/login"> <button className="login_button">Login</button></Link>
      }
        </Container>
      
      </Navbar>
      
      </>
    );
};

export default Navbars;