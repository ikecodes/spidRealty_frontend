import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import Logo from "../../assets/images/logos/logo-3.png";
import Toast from "../../utils/Toast";
import Button from "../../shared/Button";
import colors from "../../constants/colors";
import { AuthState } from "../../constants/interfaces";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../slices/authSlice";
const AdminLogin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loading = useSelector((state: AuthState) => state.auth.loading);
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!email || !password) return Toast("Please input all fields", "info");

    const formdata = { email, password };
    const nextPage = "/admin/dashboard";
    dispatch(login({ formdata, navigate, nextPage }));
  };
  return (
    <FormContainer>
      <ContactForm className='p-5 rounded mx-3'>
        <div className='text-center'>
          <Image src={Logo} alt='grooming' />
        </div>

        <Form className='m-0' onSubmit={(e: any) => handleSubmit(e)}>
          <div className='mb-3 form-group'>
            <label htmlFor='email' className='form-label'>
              Email
            </label>
            <input
              type='email'
              name='email'
              className='form-control rounded-0'
              placeholder='Email Address'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-3 form-group'>
            <label htmlFor='password' className='form-label'>
              Password
            </label>
            <input
              type='password'
              name='password'
              className='form-control rounded-0'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='text-start'>
            <Button title='login' inverse rounded loading={loading} />
          </div>
        </Form>
        <p>Input your email and password to login to the admin</p>
      </ContactForm>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.img`
  width: 15rem;
  height: auto;
`;
const ContactForm = styled.div`
  background-color: ${colors.tertiary};
  color: ${colors.white};
  max-width: 600px;

  & p {
    font-size: 1rem;
    margin-top: 1rem;
  }
`;
export default AdminLogin;
