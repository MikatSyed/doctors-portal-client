import React from 'react';
import AppoinmentByDate from '../AppoinmentByDate/AppoinmentByDate';
import Sidebar from './../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useState } from 'react';
import { useEffect } from 'react';
import './Dashboard.css'
import { useContext } from 'react';
import { UserContext } from './../../../App';


const containerStyle = {
    backgroundColor : '#F4FDFB',
    height : '100%'
}
const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [selectedDate,setSelectedDate] = useState(new Date());
    const [appoinments,setAppoinments] = useState([])
   
   
    const handleDateChange = (date) => { 
        const newDate = date.toLocaleDateString()
       setSelectedDate(newDate)
    }
          useEffect(()=>{
            fetch('http://localhost:6700/appoinmentsByDate',{
                method : 'POST',
                headers : { 'content-type': 'application/json'},
                body : JSON.stringify({date : selectedDate,email: loggedInUser.email})
            })
    
            .then(res => res.json())
            .then( data => setAppoinments(data))
          },[selectedDate])
    
    return (
       <section>
           <div className="row" style={containerStyle}>

             <div className="col-md-2">
                 <Sidebar/>
             </div> 

             <div className="col-md-4">


            <div className="container">
            <Calendar
        onChange={handleDateChange}
        value={new Date()}
      />

            </div>

             </div>  

             <div className="col-md-5">
                 <AppoinmentByDate appoinments={appoinments}/>
             </div>  
           </div>
       </section>
    );
};

export default Dashboard;