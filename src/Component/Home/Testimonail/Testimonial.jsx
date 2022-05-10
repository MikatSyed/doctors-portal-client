import React from "react";
import "./Testimonial.css";

const Testimonial = ({ quote, name, from, img }) => {
  return (
    <div className="card">
      <div>
        <p className="mt-3">{quote}</p>
      </div>
      <div className="d-flex patient">
        <img src={img} alt=""  height="60" width=""/>
        <div>
          <h6 className="text-info ml-3">{name}</h6>
          <p>{from}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
