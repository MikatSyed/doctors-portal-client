import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const BookAppoinment = ({date}) => {
    const bookings = [
        {
            id: 1,
            name: 'Teeth Orthodonics',
            time: '08.00 AM - 09.00 AM',
            price: 20,
            space: 10,
        },
        {
            id: 2,
            name: 'Cosmetic Dentistry',
            time: '09.00 AM - 10.00 AM',
            price: 15,
            space: 8,
        },
        {
            id: 3,
            name: 'Teeth Cleaning',
            time: '10.00 AM - 11.00 AM',
            price: 17,
            space: 9,
        },
        {
            id: 4,
            name: 'Cavity Protection',
            time: '11.00 AM - 12.00 PM',
            price: 19,
            space: 5,
        },
        {
            id: 5,
            name: 'Pediatric Dental',
            time: '06.00 PM - 07.00 PM',
            price: 25,
            space: 10,
        },
        {
            id: 6,
            name: 'Oral Surgery',
            time: '07.00 PM - 08.00 PM',
            price: 35,
            space: 10,
        },
    ]
    return (
    <section>
        <h2 className="text-center" style={{color: '#16D2C2'}}>Available Appoinment on {date.toDateString()}</h2>
        <div className="container d-flex justify-content-center align-items-center h-100 mt-5">
                   <div className="row">
                   {
                        bookings.map(({id,name,time,price,space})=> (
                       <div className="col-md-4 col-sm-10  mb-2 mt-3">
                       <BookingCard  key={id} name={name} time={time} price={price} space={space} date={date}/>
                       </div>
                        ))
                    }
                   </div>
                </div>
    </section>
    );
};

export default BookAppoinment;