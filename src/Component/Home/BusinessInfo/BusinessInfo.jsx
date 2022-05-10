import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock,faMapMarker,faPhone } from '@fortawesome/free-solid-svg-icons'
const BusinessInfo = () => {
    const infoData = [
        {
           title:'Opening Hours',
           description: 'We are open 7 days',
           icon: faClock,
           background: 'primary'
        },
        {
            title:'Visit Our Location',
            description: 'Brooklyn, New Work',
            icon:faMapMarker,
            background: 'dark'
         },
         {
            title:'Call us now',
            description: '+97876896676',
            icon:faPhone,
            background: 'primary'
         }
    ]

    
    return (
      <section className="d-flex justify-content-center">
         <div className="row w-75">
         {
              infoData.map(({title,description,icon,background})=><InfoCard title={title} description={description} icon={icon} background={background}/>)
          }
         </div>
      </section>
    );
};

export default BusinessInfo;