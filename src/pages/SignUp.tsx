import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../layouts/Layout";
import Section from "../layouts/Section";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import { Form } from "react-bootstrap";
import Button from "../shared/Button";
import Toast from "../utils/Toast";
import { signup } from "../slices/authSlice";
import { AuthState } from "../constants/interfaces";
import styled from "styled-components";
import colors from "../constants/colors";

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  passwordConfirm: string;
  companyInfo: string;
  companyCac: FileList | any;
}
const SignUp = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state: AuthState) => state.auth.loading);
  const [checked, setChecked] = useState(false);
  const [data, setData] = useState<Props | any>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    passwordConfirm: "",
    companyInfo: "",
    companyCac: "",
  });
  const userType = location.search.split("?")[1];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement> | any) => {
    setData({ ...data, companyCac: e.target.files[0] });
  };

  const handlePhoneChange = (phone: any) => {
    setData({ ...data, phone: phone });
  };
  const handleChecked = () => {
    setChecked((val) => !val);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      password,
      passwordConfirm,
      companyInfo,
      companyCac,
    } = data;
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      phone === "" ||
      address === "" ||
      password === "" ||
      passwordConfirm === ""
    )
      return Toast("Please fill all required fields", "info");

    if (password !== passwordConfirm)
      return Toast("Your passwords do not match", "info");

    let formdata = new FormData();
    formdata.append("firstName", firstName);
    formdata.append("lastName", lastName);
    formdata.append("email", email);
    formdata.append("phone", phone);
    formdata.append("address", address);
    formdata.append("password", password);
    formdata.append("companyInfo", companyInfo);
    formdata.append("companyCac", companyCac);

    // return;
    dispatch(signup({ formdata, navigate }));
  };
  return (
    <Layout>
      <Section>
        <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <h1 className='text-capitalize m-0 p-0 mb-5'>{userType} sign up</h1>

            <Form className='mt-3 text-dark' onSubmit={handleSubmit}>
              <Form.Group className='mb-3'>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type='text'
                  name='firstName'
                  value={data.firstName}
                  placeholder='Enter first name'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e)
                  }
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type='text'
                  name='lastName'
                  value={data.lastName}
                  placeholder='Enter last name'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e)
                  }
                />
              </Form.Group>

              <Form.Group className='mb-3'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type='email'
                  name='email'
                  value={data.email}
                  placeholder='Enter email address'
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
                  value={data.password}
                  placeholder='Enter a password'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e)
                  }
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Password Confirm</Form.Label>
                <Form.Control
                  type='password'
                  name='passwordConfirm'
                  value={data.passwordConfirm}
                  placeholder='Re-enter your password'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e)
                  }
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Phone Number</Form.Label>
                <PhoneInput
                  specialLabel=''
                  country={"ng"}
                  placeholder='Enter phone number'
                  onChange={handlePhoneChange}
                  inputStyle={{ width: "100%" }}
                />
              </Form.Group>
              <Form.Group className='mb-3'>
                <Form.Label>Full Address</Form.Label>
                <Form.Control
                  as='textarea'
                  name='address'
                  value={data.address}
                  placeholder='Enter full address'
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChange(e)
                  }
                />
              </Form.Group>
              <div className='mb-3 d-flex flex-wrap gap-2'>
                <p>Do you have a company?</p>
                <Form.Group>
                  <Form.Check
                    type='checkbox'
                    label='Yes'
                    checked={checked}
                    onChange={handleChecked}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Check
                    type='checkbox'
                    label='No'
                    checked={!checked}
                    onChange={handleChecked}
                  />
                </Form.Group>
              </div>

              {checked && (
                <>
                  <Form.Group className='mb-3'>
                    <Form.Label>Company Info</Form.Label>
                    <Form.Control
                      as='textarea'
                      name='companyInfo'
                      value={data.companyInfo}
                      placeholder='Company info (optional)'
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleChange(e)
                      }
                    />
                  </Form.Group>
                  <Form.Group className='mb-3'>
                    <Form.Label>Company CAC (If registered)</Form.Label>
                    <Form.Control
                      type='file'
                      accept='image/*'
                      name='companyCac'
                      placeholder='Enter full address'
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleImageChange(e)
                      }
                    />
                  </Form.Group>
                </>
              )}
              <div className='mb-3'>
                <Button title='submit' loading={loading} />
              </div>
              <div className='d-flex gap-2 flex-wrap align-items-center'>
                <p className='m-0'>Already have an account ?</p>
                <Link to='/login' className='text-decoration-none'>
                  <span className='m-0'>Login</span>
                </Link>
              </div>
              <AgreeText className='mt-2'>
                By clicking Submit above, I agree that I will provide accurate
                and non-discriminatory information and I will comply with the
                Spidrealty.com Terms and Conditions and the Advertise a Property
                Terms of Service.
              </AgreeText>
            </Form>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

const AgreeText = styled.p`
  font-size: 0.8rem;
  color: ${colors.tertiary};
`;
export default SignUp;
