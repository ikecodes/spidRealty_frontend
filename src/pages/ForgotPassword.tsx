import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AuthState } from "../constants/interfaces";
import Layout from "../layouts/Layout";
import Section from "../layouts/Section";
import Button from "../shared/Button";
import { forgotPassword } from "../slices/authSlice";
import Toast from "../utils/Toast";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: AuthState) => state.auth.loading);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (email === "") return Toast("Please enter your email", "info");
    dispatch(forgotPassword({ email: email }));
  };
  return (
    <Layout>
      <Section>
        <div className='row justify-content-center'>
          <div className='col-lg-8'>
            <h1 className='text-capitalize m-0 p-0 mb-5'>Recover Password</h1>
            <Form className='mt-3 text-dark'>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  className='bg-light rounded-0'
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                />
              </Form.Group>
              <div className='mb-3'>
                <Link to='/reset-password'>
                  <Button
                    title='submit'
                    loading={loading}
                    handleClick={(e) => handleSubmit(e)}
                  />
                </Link>
              </div>
            </Form>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default ForgotPassword;
