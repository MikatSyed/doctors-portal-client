import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetails = ({name,img}) => {
    return (
    
            <div className="col-md-4 text-center">
            <img style={{height:'50px'}} src={img} alt=""/>
            <h5 className="mt-3 mb-3">{name}</h5>
            <p className="text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, velit.</p>
          
        </div>
      
    );
};

export default ServiceDetails;