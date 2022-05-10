import React from 'react';
import AllPateient from '../AllPatient/AllPateient';
import Sidebar from './../Sidebar/Sidebar';

const Patient = () => {
    return (
        <div className=" row" >

        <div className="col-md-2">
            <Sidebar/>
        </div> 

        <div className="col-md-10">  
      <div className="container">
      <AllPateient/>
      </div>
        </div>
        
        
      </div>
    );
};

export default Patient;