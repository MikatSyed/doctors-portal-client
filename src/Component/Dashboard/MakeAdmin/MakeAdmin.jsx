import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Col, Form, Row } from 'react-bootstrap';

const MakeAdmin = () => {


    const {register,handleSubmit,watch,formState: { errors }} = useForm();
    const onSubmit = (data) => {
        // console.log(data.name, data.email,data.image[0] )
        const formData = new FormData()
      
        formData.append('name', data.name)
        formData.append('email',data.email)
        formData.append('file', data.image[0])

        fetch('http://localhost:6700/addDoctor', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        }) 
    }

    // const handleFileChange = (e) => {
    //  const newFile = e.target.files[0]
    //   setFile(newFile);
    // }

    
    return (
     
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB", height: '600px' }}>
                <h5 className="text-primary">Add a Doctor</h5>

                <div style={{ backgroundColor: 'white', borderRadius: '10px', width: '70%', height: '300px' }}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row className="col-md-12 container mt-3">
                            <Col className="mt-2">
                            <b>Email Address</b>
                                <Form.Control placeholder="Enter email" {...register("email", { required: true })}
                                    />
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </Col>
                        </Row>

                        <Row className="col-md-12 container mt-2">
                            <Col>
                            <b>Name</b>
                                <Form.Control placeholder="Enter name" {...register("name", { required: true })}
                                    />
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </Col>
                        </Row>


                        <Row className="col-md-12 container mt-2">
                            <Col>
                                <Form.Group controlId="formFile">
                                    <Form.Label><b>Upload a image</b></Form.Label>
                                    <Form.Control type="file" placeholder="File" {...register("image", { required: true })} />
                                    
                                </Form.Group>
                            </Col>
                        </Row>
                         <div className="container mt-3">
                         <Button variant="primary" className="btn" type="submit">
                            Submit
                        </Button>
                         </div>


                    </Form>
                </div>
                </div>


         
      
    );
};

export default MakeAdmin;