import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../layouts/Layout";
import Section from "../layouts/Section";
import Button from "../shared/Button";

const Login = () => {
  return (
    <Layout>
      <Section>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <h1 className='text-capitalize m-0 p-0 mb-5'>Login</h1>

            <Form className='mt-3 text-dark'>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  className='bg-light rounded-0'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='•••••••••••'
                  className='bg-light rounded-0'
                />
              </Form.Group>
              <div className='mb-3'>
                <Button title='submit' />
              </div>
              <div className='d-flex flex-wrap gap-2 align-items-center'>
                <p className='m-0'>Forgot password ?</p>
                <Link to='/forgot-password' className='text-decoration-none'>
                  <span className='m-0'>Reset Password</span>
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Login;
