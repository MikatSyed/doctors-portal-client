import React from 'react';
import { useState, useEffect } from 'react';
import Doctor from './../Doctor';

const Doctors = () => {
    const[doctors,setDoctors] = useState([])
    console.log(doctors);
    
    useEffect(() => {

        fetch('http://localhost:6700/doctors')
        .then(response => response.json())
        .then(data => setDoctors(data))
    },[])
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <article className=" mt-5">
        <div className="row mt-3 mb-5">
          {doctors.map((doctor, index) => (
            <Doctor key={doctor._id} doctor={doctor} />
          ))}
        </div>
      </article>
                  
               
            </div>
        </section>
    );
};

export default Doctors;