import Navbars from '../../Shared/Navbar/Navbars';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import Footer from './../../Shared/Footer/Footer';
import React, { useState } from 'react';
import BookAppoinment from '../BookAppoinment/BookAppoinment';
const Appoinment = () => {
    const [selectedDate,setSelectedDate] = useState(new Date());
   
    const handleDateChange = (date) => {
        
        setSelectedDate(date);
    }
    return (
        <div>
          
            <Navbars/>
            <AppoinmentHeader handleDateChange={handleDateChange}/>
            <BookAppoinment date={selectedDate} />
            <Footer/>
        </div>
    );
};

export default Appoinment;