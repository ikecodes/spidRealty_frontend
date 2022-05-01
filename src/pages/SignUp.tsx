import React, { useState } from "react";
import Layout from "../layouts/Layout";
import Section from "../layouts/Section";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import { Form } from "react-bootstrap";
import Button from "../shared/Button";
const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const userType = location.search.split("?")[1];

  const handleChecked = () => {
    setChecked((val) => !val);
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    navigate(`/${userType}/dashboard`);
  };
  return (
    <Layout>
      <Section>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <h1 className='text-capitalize m-0 p-0 mb-5'>{userType} sign up</h1>

            <Form className='mt-3 text-dark'>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>First Name</Form.Label>
                <Form.Control type='text' placeholder='Enter first name' />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type='text' placeholder='Enter last name' />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type='email' placeholder='Enter email address' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Phone Number</Form.Label>
                <PhoneInput
                  specialLabel=''
                  country={"ng"}
                  placeholder='Enter phone number'
                  onChange={() => {}}
                  // inputClass='form-control'
                  inputStyle={{ width: "100%" }}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Full Address</Form.Label>
                <Form.Control as='textarea' placeholder='Enter full address' />
              </Form.Group>
              <div className='mb-3 d-flex flex-wrap gap-2'>
                <p>Do you have a company?</p>
                <Form.Group>
                  <Form.Check
                    type='checkbox'
                    label='Yes'
                    checked={checked}
                    onClick={handleChecked}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Check
                    type='checkbox'
                    label='No'
                    checked={!checked}
                    onClick={handleChecked}
                  />
                </Form.Group>
              </div>

              {checked && (
                <>
                  <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Company Info</Form.Label>
                    <Form.Control
                      as='textarea'
                      placeholder='Company info (optional)'
                    />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Company CAC (If registered)</Form.Label>
                    <Form.Control
                      type='file'
                      placeholder='Enter full address'
                    />
                  </Form.Group>
                </>
              )}
              <div className='mb-3'>
                <Button title='submit' handleClick={(e) => handleSubmit(e)} />
              </div>
              <div className='d-flex gap-2 flex-wrap align-items-center'>
                <p className='m-0'>Already have an account ?</p>
                <Link to='/login' className='text-decoration-none'>
                  <span className='m-0'>Login</span>
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </Section>
    </Layout>
  );
};
export default SignUp;
