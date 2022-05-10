import React from 'react';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import Sidebar from '../Sidebar/Sidebar';

const Admin = () => {
    return (
        <div className=" row" >

        <div className="col-md-2">
            <Sidebar/>
        </div> 

        <div className="col-md-10">  
      <div className="container">
         <MakeAdmin/>
      </div>
        </div>
        
        
      </div>
    );
};

export default Admin;