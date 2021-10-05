import React from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
const Registration = () => {
    return (
        <div>
            <h3>Registration</h3>
            <div className="row">
                  <div className="col-12 col-md-6">
                  <Form className="text-start p-5">
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>First-Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your First-Name" />
                    </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Last-Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Last-Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="agree with terms and condition" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                  </div>
                  <div className="col-12 col-md-6 my-4">
                     <div>
                     <img className="w-25 p-3" src="https://media.istockphoto.com/vectors/register-now-round-red-grunge-stamp-vector-id696912944?b=1&k=20&m=696912944&s=612x612&w=0&h=JdB-93ia37oQF7OccwQS6PWv7hdK57cM2zGYUl7Gup4=" alt="" />
                     </div>
                      <div>
                      <img className="w-50" src="./image/bg-image/registration.jpg" alt="" />
                      </div>
                  </div>
            </div>
        </div>
    );
};

export default Registration;