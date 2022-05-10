import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";
import './AppoinmentForm.css'
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const AppoinmentForm = ({modalIsOpen,closeModal,appoinmentOn,date}) => {
  const { register, handleSubmit,formState: { errors } } = useForm();
  const onSubmit = data =>{
     console.log(data);
      data.service = appoinmentOn;
      data.date = date.toLocaleDateString();
      data.created = new Date()


      fetch('http://localhost:6700/addAppoinment',{
      method : 'POST',
      headers : {'content-type' : 'application/json'},
      body : JSON.stringify(data)
      })
      .then(res => res.json())
      .then(sucess => {
      
          closeModal()
          alert('Appoinment Created Sucessfully!')
        
      })
}
 
  return (
    <div>
     
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-center"  style={{color:'#16D2C2'}}>{appoinmentOn}</h2>
        <p className="text-center text-secondary">ON {date.toDateString()}</p>
        <form onSubmit={handleSubmit(onSubmit)}>     
             
          <div className="form-group mt-5 pt-3">
            <input
              placeholder="Your Name"
              className="form-control"
              {...register("name", {
                required: true,
              })}
            /><br/>
            {errors?.name?.type === "required" && (
              <p className="text-danger">This field is required</p>
            )}
          </div>
          <div className="form-group">
            <input
              placeholder="Your Email"
              className="form-control"
              {...register("email", {
                required: true,
              })}
            /><br/>
            {errors?.email?.type === "required" && (
              <p className="text-danger">This field is required</p>
            )}
          </div>
          <div className="form-group">
            <input
              placeholder="Phone Number"
              className="form-control"
              {...register("phone", {
                required: true,
              })}
            /><br/>
            {errors?.phone?.type === "required" && (
              <p className="text-danger">This field is required</p>
            )}
          </div>

          <div className="form-group row">
            <div className="col-4">
              <select
                className="form-control"
                {...register("gender", {
                  required: true,
                })}
              >
                <option disabled={true} value="Not set">
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Not set">Other</option>
              </select>
              {errors?.gender?.type === "required" && (
                <p className="text-danger">Thisfd field is required</p>
              )}
            </div>
            <div className="col-4">
              <input
                {...register("age", {
                  required: true,
                })}
                className="form-control"
                placeholder="Your Age"
                type="age"
              />
              {errors?.age?.type === "required" && (
                <p className="text-danger">This field is required</p>
              )}
            </div>
            <div className="col-4">
              <input
                {...register("weight", {
                  required: true,
                })}
                className="form-control"
                placeholder="Weight"
                type="number"
              />
              {errors?.weight?.type === "required" && (
                <p className="text-danger">Thisfd field is required</p>
              )}
            </div>
          </div>

          <Button type="submit" style={{backgroundColor:'#16D2C2' ,border:'none', marginTop: '10px'}}>Submit</Button>
          {/* <Button onClick={closeModal} className=" mt-3" variant="danger">
            close
          </Button>  */}
        </form>
      </Modal>
    </div>
  );
};

export default AppoinmentForm;
