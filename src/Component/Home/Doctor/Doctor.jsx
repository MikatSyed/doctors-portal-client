import React from 'react';
import doctor from '../../../Image/doctor.png'
import './Doctor.css'
const Doctor = ({doctor}) => {
 const {name,email,img} = doctor;
    return (
        <div className="col-md-4 text-center doctor">
     
           {
               doctor.image ? <img src={`data:image/jpeg;base64,${doctor.image.img}`} alt=""/> 
               :
            
               <img src={doctor} alt="" />
            
              
           } 
           <h5>{name}</h5>
            
        </div>
    );
};

export default Doctor;