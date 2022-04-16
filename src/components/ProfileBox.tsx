import React from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import Button from "../shared/Button";
import ProfileImg from "../assets/images/p4.jpg";

const ProfileBox = () => {
  return (
    <div className='row justify-content-center'>
      <div className='col-lg-8'>
        <Box>
          <Profile src={ProfileImg} alt='profile' className='rounded-circle' />
        </Box>
        <Form className='mt-3 text-dark'>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter first name'
              className='bg-light rounded-0'
              value='mary'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter last name'
              className='bg-light rounded-0'
              value='slain'
            />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              className='rounded-0'
              value='mary@gmail.com'
              disabled
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type='phone'
              placeholder='Enter phone number'
              className='rounded-0'
              value='0904569888'
              disabled
            />
          </Form.Group>
          <Button title='update' />
        </Form>
      </div>
    </div>
  );
};

const Box = styled.div`
  width: 7rem;
  height: 7rem;
`;
const Profile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default ProfileBox;
