import React from "react";
import { Button } from "react-bootstrap";
import Feature from "../../../Image/treatment.png";
import "./FeatureService.css";
const ExceptionalDental = () => {
  return (
    <section className="pb-0 pb-md-5 my-5">
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-md-5 mb-4 m-md-0">
            <img className="img-fluid" src={Feature} alt="" />
          </div>
          <div className="col-md-7 align-self-center">
            <h1>Exceptional Dental <br/> Care, on Your Teams</h1>
            <p  className="text-secondary mt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam quo maiores modi. Sed error illo quidem iure! Veniam, ex distinctio tempore recusandae animi soluta quisquam ad culpa accusantium dolorum quod officia, ut voluptas aut aliquid. Quidem ratione minus ducimus omnis in est pariatur, quia ex suscipit unde eligendi vero soluta veritatis ipsum ipsa doloremque excepturi. Sint, expedita sequi amet nihil ea molestiae ipsum, itaque nam officiis aperiam officia veniam iure numquam rem dolore ab est incidunt eos ad commodi aut quis adipisci! Sed illo quidem quibusdam praesentium beatae. Officiis dicta vero dolorum quos atque obcaecati soluta aliquam corrupti, repellendus esse?</p>
            <Button className="feature_btn">Learn More</Button>
          </div>
        </div>

      </div>

    </section>
  )
};

export default ExceptionalDental;
