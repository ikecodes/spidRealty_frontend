import React from "react";
import { Form } from "react-bootstrap";
import Layout from "../layouts/Layout";
import Section from "../layouts/Section";
import Button from "../shared/Button";

const ResetPassword = () => {
  return (
    <Layout>
      <Section>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <h1 className='text-capitalize m-0 p-0 mb-5'>Reset Password</h1>
            <Form className='mt-3 text-dark'>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='•••••••••••'
                  className='bg-light rounded-0'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Password Confirm</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='•••••••••••'
                  className='bg-light rounded-0'
                />
              </Form.Group>
              <div className='mb-3'>
                <Button title='submit' />
              </div>
            </Form>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default ResetPassword;
