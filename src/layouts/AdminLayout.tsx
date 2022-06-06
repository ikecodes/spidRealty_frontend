import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiLogOutCircle } from "react-icons/bi";
import styled from "styled-components";
import colors from "../constants/colors";
import AdminNav from "./AdminNav";
import { logout } from "../utils/Helpers";
import { useDispatch } from "react-redux";
import { getMe } from "../slices/authSlice";

interface Props {
  children: React.ReactNode;
}
const AdminLayout: React.FC<Props> = ({ children }) => {
  const dispatch = useDispatch();
  //  const user = useSelector((state: AuthState) => state.auth.user);
  useEffect(() => {
    // @ts-ignore
    const token = localStorage.getItem("token");
    if (token) dispatch(getMe());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();
  const to = "/admin/login";
  return (
    <div className='overflow-hidden'>
      <div className='row'>
        <div className='col-lg-2'>
          <AdminNav />
        </div>
        <ActionContainer className='col-lg-10 mt-5 p-0'>
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
`;
const Container = styled.div`
  height: 90vh;
  overflow-y: scroll;
  overflow-x: hidden;
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
  top: 0.5rem;
  right: 0.5rem;
`;
export default AdminLayout;
