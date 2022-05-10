import React, { useState } from 'react';

const AllPateient = () => {
    const [patient,setAllPateient] = useState([])
    fetch(`http://localhost:6700/allPatient`)
    .then(res => res.json())
    .then(data => setAllPateient(data))
    return (
     
          <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB", height: '600px' }}>
        <h5 className="text-primary">All Patient</h5>

        <div style={{ backgroundColor: 'white', borderRadius: '10px', width: '100%'}}>
        <table className="table table-borderless">
        <thead>
            <tr className="text-bold" scope="col">
            <th >Sr No.</th>
            <th >Name</th>
            <th>Phone</th>
            <th >Email</th>
            <th >Gendar</th>
            <th >Age</th>
            <th >Weight</th>
            </tr>
        </thead>
        <tbody>
          
                    
                
                {
                    patient.map((pb,index)=>
                    <tr className="text-secondary">
                    <td>{index + 1 }</td>
                    <td>{pb.name}</td>
                    <td>{pb.phone}</td>
                    <td>{pb.email}</td>
                    <td>{pb.gender}</td>
                    <td>{pb.age}</td>
                    <td>{pb.weight}</td>
                    </tr>             
                    )
                 
                }
         
        </tbody>
    </table>
    </div>
    </div>
  
    );
};

export default AllPateient;