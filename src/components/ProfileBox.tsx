/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import Button from "../shared/Button";
import { useDispatch, useSelector } from "react-redux";
import { AuthState } from "../constants/interfaces";
import { updateMe, updatePhoto } from "../slices/authSlice";
import { FaUserEdit } from "react-icons/fa";

const ProfileBox = () => {
  const dispatch = useDispatch();
  const { user, loading, photoUpdateLoading } = useSelector(
    (state: AuthState) => state.auth
  );
  const [formdata, setFormdata] = useState({
    firstName: user?.firstName,
    lastName: user?.lastName,
    phone: user?.phone,
    email: user?.email,
  });
  const [photo, setPhoto] = useState<any>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handlePhoto = (e: any) => {
    e.preventDefault();
    setPhoto(e.target.files[0]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(updateMe(formdata));
  };

  useEffect(() => {
    setFormdata({
      ...formdata,
      firstName: user?.firstName,
      lastName: user?.lastName,
      phone: user?.phone,
      email: user?.email,
    });
  }, [user]);

  useEffect(() => {
    if (photo) {
      const formdata = new FormData();
      formdata.append("photo", photo);
      if (formdata) return dispatch(updatePhoto(formdata));
    }
  }, [photo]);
  return (
    <div className='row justify-content-center'>
      <div className='col-lg-8'>
        <div className='d-flex align-items-end'>
          <Box>
            <Profile
              src={user?.photo}
              alt='profile'
              className='rounded-circle'
            />
            <FaUserEdit
              className='text-secondary'
              size={30}
              style={{
                position: "absolute",
                bottom: "0",
                right: "50%",
                transform: "translateX(50%)",
              }}
            />
            <input
              role='button'
              type='file'
              name='photo'
              accept='images/*'
              id='photo'
              onChange={(e: any) => handlePhoto(e)}
              style={{
                position: "absolute",
                bottom: "0",
                right: "50%",
                transform: "translateX(50%)",
                opacity: "0",
                width: "3rem",
              }}
            />
          </Box>
          {photoUpdateLoading && <h6>Updating...</h6>}
        </div>

        <Form className='mt-3 text-dark' onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className='mb-3'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type='text'
              name='firstName'
              placeholder='Enter first name'
              className='rounded-0'
              value={formdata?.firstName}
              onChange={(e: any) => handleChange(e)}
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type='text'
              name='lastName'
              placeholder='Enter last name'
              className='rounded-0'
              value={formdata?.lastName}
              onChange={(e: any) => handleChange(e)}
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              name='email'
              placeholder='Enter email'
              className='rounded-0'
              value={formdata?.email}
              onChange={(e: any) => handleChange(e)}
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type='phone'
              name='phone'
              placeholder='Enter phone number'
              className='rounded-0'
              value={formdata?.phone}
              onChange={(e: any) => handleChange(e)}
            />
          </Form.Group>
          <Button title='update' loading={loading} />
        </Form>
      </div>
    </div>
  );
};

const Box = styled.div`
  position: relative;
  width: 7rem;
  height: 7rem;
`;
const Profile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export default ProfileBox;
