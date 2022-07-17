/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layout";
import Section from "../layouts/Section";
import Image from "../shared/Image";
import Tip from "../shared/Tip";
import { Form } from "react-bootstrap";
import Button from "../shared/Button";
import { useLocation } from "react-router-dom";
import Toast from "../utils/Toast";
import { useDispatch, useSelector } from "react-redux";
import { createEnquiry } from "../slices/enquirySlice";
import { EnquiryState, PropertyState } from "../constants/interfaces";
import { getProperty } from "../slices/propertySlice";

const PurchaseForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { loading } = useSelector((state: EnquiryState) => state.enquiry);
  const [formData, setFormdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const id = location.search.split("?")[1];
  const { property } = useSelector((state: PropertyState) => state.property);
  useEffect(() => {
    dispatch(getProperty(id));
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormdata({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    console.log(formData);
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone
    )
      return Toast("Please fill all inputs", "info");
    const formdata = {
      ...formData,
      propertyId: id,
    };

    dispatch(createEnquiry(formdata));
    setFormdata({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });
  };

  return (
    <Layout>
      <Section>
        <div className='row align-items-center flex-md-row-reverse'>
          <div className='col-lg-6'>
            <Image
              src={property?.images[0].original}
              h={20}
              unit='rem'
              alt='property'
            />
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
                <Form.Control
                  type='text'
                  name='firstName'
                  value={formData.firstName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e)
                  }
                  placeholder='Enter first name'
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type='text'
                  name='lastName'
                  value={formData.lastName}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e)
                  }
                  placeholder='Enter last name'
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e)
                  }
                  placeholder='Enter email'
                />
              </Form.Group>
              <Form.Group className='mb-3' controlId='formBasicEmail'>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e)
                  }
                  placeholder='Enter phone number'
                />
              </Form.Group>
              <Button
                title='submit'
                handleClick={(e) => handleSubmit(e)}
                loading={loading}
              />
            </Form>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default PurchaseForm;
