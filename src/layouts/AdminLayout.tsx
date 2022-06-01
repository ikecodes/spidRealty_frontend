import React from "react";
import { useNavigate } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import styled from "styled-components";
import colors from "../constants/colors";
import AdminNav from "./AdminNav";
import { logout } from "../utils/Helpers";

interface Props {
  children: React.ReactNode;
}
const AdminLayout: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const to = "/admin/login";
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-2'>
          <AdminNav />
        </div>
        <ActionContainer className='col-lg-10 px-5 pt-5'>
          <Logout
            className='p-2 shadow rounded text-capitalize'
            onClick={() => logout(navigate, to)}
          >
            <span className='me-2'>Admin</span>
            <BiLogOutCircle size={20} />
            <span className='ms-1'>logout</span>
          </Logout>
          <Container>{children}</Container>
        </ActionContainer>
      </div>
    </div>
  );
};

const ActionContainer = styled.div`
  overflow: hidden;
  position: relative;
`;
const Container = styled.div`
  height: 90vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: none;
    background-color: #999bcb;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(96, 99, 173);
    outline: none;
  }
`;

const Logout = styled.span`
  position: absolute;
  color: ${colors.tertiary};
  cursor: pointer;
  top: 1rem;
  right: 5rem;
`;
export default AdminLayout;
