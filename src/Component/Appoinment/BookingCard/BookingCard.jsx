import React,{ useState} from 'react';
import { Button } from 'react-bootstrap';
import './BookingCard.css'
import AppoinmentForm from './../AppoinmentForm/AppoinmentForm';

const BookingCard = ({name,time,space,date}) => {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

    return (
        <div className="booking-card">
      <div className="book-main">
        <h4 style={{color:'#16D2C2'}}>{name}</h4>
        <b>{time}</b>
        <p className="text-secondary">{space}</p>
        <Button onClick={openModal} style={{backgroundColor:'#16D2C2',border:'none',color:'black',fontWeight:'bold'}}>Book Appoinment</Button>
        <AppoinmentForm modalIsOpen={modalIsOpen} appoinmentOn={name} closeModal={closeModal} date={date}/>
      </div>
        </div>
    );
};

export default BookingCard;