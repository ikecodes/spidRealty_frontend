/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import Button from "../shared/Button";
import { useDispatch, useSelector } from "react-redux";
import { AuthState } from "../constants/interfaces";
import { updatePhoto } from "../slices/authSlice";
import { FaUserEdit } from "react-icons/fa";
import colors from "../constants/colors";

const ProfileBox = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state: AuthState) => state.auth);
  const [photo, setPhoto] = useState<any>("");

  const handlePhoto = (e: any) => {
    e.preventDefault();
    setPhoto(e.target.files[0]);
  };

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
        <Box>
          <Profile src={user?.photo} alt='profile' className='rounded-circle' />
          <FaUserEdit
            color={colors.tertiary}
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
        <Form className='mt-3 text-dark'>
          <Form.Group className='mb-3'>
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter first name'
              className='rounded-0'
              value={user?.firstName}
              disabled
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter last name'
              className='rounded-0'
              // value={user?.lastName}
              disabled
            />
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              className='rounded-0'
              // value={user?.email}
              disabled
            />
          </Form.Group>
          <Form.Group className='mb-3'>
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              type='phone'
              placeholder='Enter phone number'
              className='rounded-0'
              // value={user?.phone}
              disabled
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
