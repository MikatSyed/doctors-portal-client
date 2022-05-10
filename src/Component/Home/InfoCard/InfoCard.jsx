import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './InfoCard.css'

const InfoCard = ({ title, icon, description, background }) => { 
    return (
        <div className="col-md-4 text-white info-card">
            <div className={`d-flex info-${background} info-container justify-content-center`}>
            <div>
             <FontAwesomeIcon className="info-icon" icon={icon}/>
            </div>
            <div>
                <h6>{title}</h6>
                <small>{description}</small>

            </div>
            </div>
        </div>
    );
};

export default InfoCard;