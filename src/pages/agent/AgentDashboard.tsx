import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Card, Form } from "react-bootstrap";
import { MdHome, MdShowChart, MdUpload } from "react-icons/md";
import AgentLayout from "./AgentLayout";
import Button from "../../shared/Button";
import styled from "styled-components";
import ProfileImg from "../../assets/images/p2.jpg";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Listings", "Property", "Visible", "Promotions", "Sold", "Posted"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const AgentDashboard = () => {
  return (
    <AgentLayout>
      {/* <h2 className='text-capitalize shadow d-inline rounded m-0 p-2 mb-2'>
        welcome back, mary!
      </h2> */}
      <div className='row my-3 justify-content-around'>
        <div className='col-lg-4'>
          <Doughnut data={data} />
        </div>
        <div className='col-lg-6'>
          <ProfileBox>
            <Profile
              src={ProfileImg}
              alt='profile'
              className='rounded-circle'
            />
          </ProfileBox>
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
      <div className='row'>
        <div className='col-lg-4 mb-3'>
          <Card className='p-2 border-0 shadow'>
            <div className='d-flex align-items-center justify-content-evenly'>
              <div className='d-flex flex-column align-items-center justify-content-center'>
                <MdHome size={100} />
                <h4 className='text-capitalize m-0'>listings</h4>
              </div>
              <div>
                <ul className='text-capitalize'>
                  <li>total listings: 1</li>
                  <li>visible listings: 0</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
        <div className='col-lg-4 mb-3'>
          <Card className='p-2 border-0 shadow'>
            <div className='d-flex align-items-center justify-content-evenly'>
              <div className='d-flex flex-column align-items-center justify-content-center'>
                <MdUpload size={100} />
                <h4 className='text-capitalize m-0'>properties</h4>
              </div>
              <div>
                <ul className='text-capitalize'>
                  <li>posted properties: 1</li>
                  <li>sold: 0</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
        <div className='col-lg-4 mb-3'>
          <Card className='p-2 border-0 shadow'>
            <div className='d-flex align-items-center justify-content-evenly'>
              <div className='d-flex flex-column align-items-center justify-content-center'>
                <MdShowChart size={100} />
                <h4 className='text-capitalize m-0'>promotions</h4>
              </div>
              <div>
                <ul className='text-capitalize'>
                  <li>property promotions: 1</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </AgentLayout>
  );
};

const ProfileBox = styled.div`
  width: 7rem;
  height: 7rem;
`;
const Profile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export default AgentDashboard;
