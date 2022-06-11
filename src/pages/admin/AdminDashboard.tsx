// @ts-nocheck
import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { BsFillHouseFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { MdArticle } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import colors from "../../constants/colors";
import { AdminState } from "../../constants/interfaces";
import AdminLayout from "../../layouts/AdminLayout";
import Loader from "../../shared/Loader";
import { getStats } from "../../slices/adminSlice";

ChartJS.register(ArcElement, Tooltip, Legend);
const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { stats, loading } = useSelector((state: AdminState) => state.admin);

  const data = {
    labels: ["Total Agents", "Total Properties", "Total Articles"],
    datasets: [
      {
        label: "# of Votes",
        data: [stats?.totalUsers, stats?.totalProperties, stats?.totalArticles],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    dispatch(getStats());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AdminLayout>
      {loading && <Loader />}
      <Container>
        <div className='row mb-5'>
          <div className='col-lg-4 mb-3'>
            <Card className='p-2 shadow'>
              <div className='d-flex align-items-center justify-content-evenly'>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                  <FaUserAlt size={100} />
                  <h4 className='text-capitalize m-0'>agents</h4>
                </div>
                <div>
                  <ul className='text-capitalize'>
                    <li>total agents: {stats?.totalUsers}</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
          <div className='col-lg-4 mb-3'>
            <Card className='p-2 shadow'>
              <div className='d-flex align-items-center justify-content-evenly'>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                  <BsFillHouseFill size={100} />
                  <h4 className='text-capitalize m-0'>properties</h4>
                </div>
                <div>
                  <ul className='text-capitalize'>
                    <li>total properties: {stats?.totalProperties}</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
          <div className='col-lg-4 mb-3'>
            <Card className='p-2 shadow'>
              <div className='d-flex align-items-center justify-content-evenly'>
                <div className='d-flex flex-column align-items-center justify-content-center'>
                  <MdArticle size={100} />
                  <h4 className='text-capitalize m-0'>articles</h4>
                </div>
                <div>
                  <ul className='text-capitalize'>
                    <li>Total articles: {stats?.totalArticles}</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <ChartContainer>
          <div className='row justify-content-center'>
            <div className='col-lg-6'>
              <Pie data={data} />
            </div>
          </div>
        </ChartContainer>
      </Container>
    </AdminLayout>
  );
};

const Container = styled.div`
  margin-top: 2.5rem;
  color: ${colors.primary};
`;
const ChartContainer = styled.div`
  height: 20rem;
`;
export default AdminDashboard;
