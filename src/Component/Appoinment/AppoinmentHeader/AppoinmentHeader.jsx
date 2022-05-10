import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import chair from '../../../Image/chair.png'
const AppoinmentHeader = ({handleDateChange}) => {
    
    return (
       <main style={{height:'600px'}}className="row d-flex align-items-center">
           <div className="col-md-4 offset-md-1">
            <h1 style={{color:'#3A4256'}}>Appoinment </h1>
            <Calendar
        onChange={handleDateChange}
        value={new Date()}
      />
           </div>

           <div className="col-md-6">
               <img className="img-fluid" src={chair} alt=""/>
           </div>
       </main>
    );
};

export default AppoinmentHeader;