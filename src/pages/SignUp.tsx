import React from "react";
import Layout from "../layouts/Layout";
import Section from "../layouts/Section";
import { useLocation, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import Button from "../shared/Button";
const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userType = location.search.split("?")[1];

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    navigate(`/${userType}/dashboard`);
  };
  return (
    <Layout>
      <Section>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <h1 className='text-capitalize m-0 p-0 mb-5'>
              registering as {userType}
            </h1>

            <Form className='mt-3 text-dark'>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter first name'
                  className='bg-light rounded-0'
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter last name'
                  className='bg-light rounded-0'
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  className='bg-light rounded-0'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type='phone'
                  placeholder='Enter phone number'
                  className='bg-light rounded-0'
                />
              </Form.Group>
              <Button title='submit' handleClick={(e) => handleSubmit(e)} />
            </Form>
          </div>
        </div>
      </Section>
    </Layout>
  );
};
export default SignUp;
