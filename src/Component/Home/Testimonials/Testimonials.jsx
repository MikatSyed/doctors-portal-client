import React from 'react';
import './Testimonials.css';
import wilson from '../../../Image/people-1.png';
import ema from '../../../Image/people-2.png';
import aliza from '../../../Image/people-3.png';
import Testimonial from './../Testimonail/Testimonial';

const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    }
]

const Testimonials = () => {
    return (
       <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-primary text-uppercase">Testimonial</h5>
                   <h1>What Our Patients <br/> Says </h1>
               </div>
               <div className="container d-flex justify-content-center align-items-center h-100 mt-5">
                   <div className="row">
                   {
                        testimonialData.map(({quote,name,from ,img,index})=> (
                       <div className="col-md-4 col-sm-10  mb-2">
                       <Testimonial  key={index} name={name} from={from} img={img} quote={quote}/>
                       </div>
                        ))
                    }
                   </div>
                </div>
           </div>
       </section>
    );
};

export default Testimonials;