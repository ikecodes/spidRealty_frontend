import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Card, Form } from "react-bootstrap";
import {
  MdHome,
  // MdVerified,
  MdShowChart,
  MdUpload,
  MdEmail,
  MdLocalPhone,
  MdVerified,
} from "react-icons/md";
import AgentLayout from "./AgentLayout";
import colors from "../../constants/colors";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import Tip from "../../shared/Tip";
import Button from "../../shared/Button";
import { useDispatch, useSelector } from "react-redux";
import { AuthState } from "../../constants/interfaces";
import { uploadId } from "../../slices/authSlice";

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
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state: AuthState) => state.auth);
  const [identityCard, setIdentityCard] = useState("");

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const formdata = new FormData();
    formdata.append("identityCard", identityCard);
    dispatch(uploadId(formdata));
  };
  return (
    <AgentLayout>
      <div className='row mb-5'>
        <div className='col-lg-4 mb-3'>
          <Card className='p-2 border-0 shadow'>
            <div className='d-flex align-items-center justify-content-evenly'>
              <div className='d-flex flex-column align-items-center justify-content-center'>
                <MdHome size={100} />
                <h4 className='text-capitalize m-0'>listings</h4>
              </div>
              <div>
                <ul className='text-capitalize'>
                  <li>total listings: {user?.totalListings}</li>
                  <li>visible listings: {user?.visibleListings}</li>
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
                  <li>posted properties: {user?.posted}</li>
                  <li>sold: {user?.sold}</li>
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
                  <li>property promotions: {user?.propertyPromotions}</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className='row my-3 justify-content-around'>
        <div className='col-lg-4'>
          <Doughnut data={data} />
        </div>
        <ProfileDetails className='col-lg-6 p-3 h-25'>
          <h3 className='text-capitalize text-center border-bottom pb-2 mb-3'>
            {user?.firstName} {user?.lastName}
          </h3>

          {user?.isVerified ? (
            <div className='d-flex mb-3'>
              <MdVerified size={25} />
              <h5 className='m-0 ms-2'>Verified</h5>
            </div>
          ) : (
            <div className='d-flex mb-3 text-danger'>
              <FaTimes size={25} />
              <h5 className='m-0 ms-2 '>Unverified account</h5>
            </div>
          )}

          <div className='d-flex mb-3'>
            <MdEmail size={25} />
            <h5 className='m-0 ms-2'>{user?.email}</h5>
          </div>
          <div className='d-flex mb-3'>
            <MdLocalPhone size={25} />
            <h5 className='m-0 ms-2'>{user?.phone}</h5>
          </div>
          {!user?.isVerified && (
            <>
              <Tip
                title='account verification'
                description="Your account is currently unverified please upload Gov Issued ID - NIN, Int'l passport or drivers license"
              />
              <div className='p-2'>
                <Form>
                  <Form.Group className='mb-3'>
                    <Form.Label>Upload ID</Form.Label>
                    <Form.Control
                      type='file'
                      accept='image/*'
                      onChange={(e: any) => setIdentityCard(e.target.files[0])}
                    />
                  </Form.Group>
                  <Button
                    title='submit'
                    handleClick={(e) => handleSubmit(e)}
                    loading={loading}
                  />
                </Form>
              </div>
            </>
          )}
        </ProfileDetails>
      </div>
    </AgentLayout>
  );
};

const ProfileDetails = styled.div`
  background-color: ${colors.secondary};
`;

export default AgentDashboard;
