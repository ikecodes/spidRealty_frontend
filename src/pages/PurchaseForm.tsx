import React from 'react';
import Layout from '../layouts/Layout';
import Section from '../layouts/Section';
import FormImg from '../assets/images/family.jpg';
import Image from '../shared/Image';
import Tip from '../shared/Tip';
import { Form } from 'react-bootstrap';
import Button from '../shared/Button';

const PurchaseForm = () => {
  return (
    <Layout>
      <Section>
        <div className='row align-items-center flex-md-row-reverse'>
          <div className='col-lg-6'>
            <Image src={FormImg} h={20} unit='rem' alt='property' />
          </div>
          <div className='col-lg-6'>
            <h4 className='text-capitalize m-0 p-0 my-3  text-dark'>
              buyer purchase form
            </h4>
            <Tip
              title='disclaimer'
              description='Please fill the form below, we will contact you shortly'
            />
            <Form className='text-dark text-capitalize mt-3'>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>First Name</Form.Label>
                <Form.Control type='text' placeholder='Enter first name' />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type='text' placeholder='Enter last name' />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control type='email' placeholder='Enter email' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type='phone' placeholder='Enter phone number' />
              </Form.Group>

              <Button title='submit' />
            </Form>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default PurchaseForm;
