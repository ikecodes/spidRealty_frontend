import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AuthState } from "../constants/interfaces";
import Layout from "../layouts/Layout";
import Section from "../layouts/Section";
import Button from "../shared/Button";
import { login } from "../slices/authSlice";
import Toast from "../utils/Toast";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state: AuthState) => state.auth.loading);
  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const { email, password } = formdata;
    if (email === "" || password === "")
      return Toast("Please fill all required fields", "info");

    const nextPage = "/agent/dashboard";
    await dispatch(login({ formdata, navigate, nextPage }));
  };

  return (
    <Layout>
      <Section>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <h1 className='text-capitalize m-0 p-0 mb-5'>Login</h1>

            <Form className='mt-3 text-dark'>
              <Form.Group className='mb-3'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  name='email'
                  value={formdata.email}
                  placeholder='Enter email'
                  className='bg-light rounded-0'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e)
                  }
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type='password'
                  name='password'
                  value={formdata.password}
                  placeholder='•••••••••••'
                  className='bg-light rounded-0'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e)
                  }
                />
              </Form.Group>
              <div className='mb-3'>
                <Button
                  title='submit'
                  handleClick={(e) => handleSubmit(e)}
                  loading={loading}
                />
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
