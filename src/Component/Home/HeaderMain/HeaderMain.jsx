import React from 'react';
import { Button } from 'react-bootstrap';
import chair from '../../../Image/chair.png'
const HeaderMain = () => {
    return (
       <main style={{height:'600px'}}className="row d-flex align-items-center">
           <div className="col-md-4 offset-md-1">
            <h1 style={{color:'#3A4256'}}>Your New Smile <br/> Start Here</h1>
            <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate illum sapiente, ratione sint quibusdam ducimus.</p>
            <Button style={{backgroundColor:'#16D2C2' ,border:'none'}}>GET APPOINTMENT</Button>
           </div>

           <div className="col-md-6">
               <img className="img-fluid" src={chair} alt=""/>
           </div>
       </main>
    );
};

export default HeaderMain;