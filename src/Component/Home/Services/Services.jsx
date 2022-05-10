import React from 'react';
import Fluorid from '../../../Image/fluoride.png'
import Cavity from '../../../Image/cavity.png'
import Whitening from '../../../Image/whitening.png'
import ServiceDetails from './../ServiceDetails/ServiceDetails';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const serviceData = [
    {
        name:'Fluorid Treatment',
        img: Fluorid
    },
    {
        name:'Cavity Filling',
        img: Cavity
    },
    {
        name:'Teeth Whitening',
        img: Whitening
    }
]
const Services = () => {
    return (
       <section>
           <div className="text-center mt-5">
           <h5 style={{color: '#1CC7C1'}}>OUR SERVICES</h5>
           <h2>Services We Provide</h2>
           </div>

            <div className="d-flex justify-content-center mt-5 pt-5">
         <div className="row w-75">
         {
              serviceData.map(({img,name})=><ServiceDetails img={img} name={name}/>)
          }
        <div className="text-center mb-5 mt-5">
        <Link to="/appoinment">  <Button  style={{backgroundColor:'#16D2C2',border:'none',fontWeight:'bold'}}>Make Appoinment</Button> </Link>
        </div>
         </div>
      </div>
       </section>
    );
};

export default Services;