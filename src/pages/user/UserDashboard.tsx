import React from "react";
import UserLayout from "./UserLayout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import colors from "../../constants/colors";
import styled from "styled-components";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Purchased", "Favorites"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
  ],
};

const UserDashboard = () => {
  return (
    <UserLayout>
      <div className='row my-3 justify-content-around'>
        <div className='col-lg-4'>
          <Doughnut data={data} />
        </div>
        <ProfileDetails className='col-lg-6 p-5'>
          <h2 className='text-capitalize text-center border-bottom pb-2 mb-3'>
            mary jessica smith
          </h2>
          <div className='d-flex mb-2'>
            <MdEmail size={30} />
            <h4 className='m-0 ms-2'>mary@gmail.com</h4>
          </div>
          <div className='d-flex'>
            <MdLocalPhone size={30} />
            <h4 className='m-0 ms-2'>09056779797</h4>
          </div>
        </ProfileDetails>
      </div>
    </UserLayout>
  );
};
const ProfileDetails = styled.div`
  background-color: ${colors.secondary};
`;

export default UserDashboard;
