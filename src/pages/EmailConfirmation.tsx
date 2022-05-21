import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AuthState } from "../constants/interfaces";
import Layout from "../layouts/Layout";
import Section from "../layouts/Section";
import Button from "../shared/Button";
import { verify } from "../slices/authSlice";

const EmailConfirmation = () => {
  // @ts-ignore
  const data = JSON.parse(localStorage.getItem("data"));
  const [token, setToken] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state: AuthState) => state.auth.loading);
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const formdata: any = {
      token: token,
      email: data.email,
    };
    dispatch(verify({ formdata, navigate }));
  };
  return (
    <Layout>
      <Section>
        <h4 className='m-0 p-0 my-5'>
          We have sent a confirmation token to your email, please input the code
          below
        </h4>
        <Form className='d-flex'>
          <Form.Control
            type='text'
            style={{ width: "10rem" }}
            className='rounded-0'
            value={token}
            onChange={(e) => setToken(e.target.value)}
          />
          <Button
            title='submit'
            handleClick={(e) => handleSubmit(e)}
            loading={loading}
          />
        </Form>
        <p className='text-secondary mt-2'>
          We will use this code to verify your email address
        </p>
      </Section>
    </Layout>
  );
};

export default EmailConfirmation;
