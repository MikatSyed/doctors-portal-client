import React from 'react';
import doctor from '../../../Image/doctor.png'
import './MakeAppoinment.css';

const MakeAppoinment = () => {
    return (
        <section className="make-appointment">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 d-none d-md-block">
                        <img src={doctor} alt=""/>
                    </div>
                    <div className="col-md-7 text-white py-5">
                        <h5 className="text-primary  text-uppercase">APPOINTMENT</h5>
                        <h1 className="my-4">Make an appoinment <br/>Today</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum iste dolores excepturi quibusdam minus. Nemo assumenda mollitia molestiae excepturi consequatur!</p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppoinment;