import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthState } from "../constants/interfaces";
import Layout from "../layouts/Layout";
import Section from "../layouts/Section";
import Button from "../shared/Button";
import { resetPassword } from "../slices/authSlice";
import Toast from "../utils/Toast";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const resetToken = location.search.split("?")[1];
  const loading = useSelector((state: AuthState) => state.auth.loading);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (password === "" || passwordConfirm === "")
      return Toast("Please enter all fields", "info");
    const formdata = { password: password };
    dispatch(resetPassword({ formdata, resetToken, navigate }));
  };
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
                  value={password}
                  onChange={(e: any) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Password Confirm</Form.Label>
                <Form.Control
                  type='password'
                  placeholder='•••••••••••'
                  className='bg-light rounded-0'
                  value={passwordConfirm}
                  onChange={(e: any) => setPasswordConfirm(e.target.value)}
                />
              </Form.Group>
              <div className='mb-3'>
                <Button
                  title='submit'
                  loading={loading}
                  handleClick={(e) => handleSubmit(e)}
                />
              </div>
            </Form>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default ResetPassword;
