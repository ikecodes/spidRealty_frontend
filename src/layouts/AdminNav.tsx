import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import colors from "../constants/colors";
import Logo from "../assets/images/logos/logo-3.png";
import {
  MdArticle,
  MdOutlineQuestionAnswer,
  MdSpaceDashboard,
} from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { BsFillHouseFill, BsUpload } from "react-icons/bs";

export const adminMenu = [
  {
    id: "1",
    name: "dashboard",
    path: "/admin/dashboard",
    icon: <MdSpaceDashboard size={25} />,
  },
  {
    id: "2",
    name: "agents",
    path: "/admin/agents",
    icon: <FaUserAlt size={25} />,
  },
  {
    id: "3",
    name: "properties",
    path: "/admin/properties",
    icon: <BsFillHouseFill size={25} />,
  },
  {
    id: "4",
    name: "articles",
    path: "/admin/articles",
    icon: <MdArticle size={25} />,
  },
  {
    id: "5",
    name: "post article",
    path: "/admin/post-article",
    icon: <BsUpload size={25} />,
  },
  {
    id: "6",
    name: "enquiries",
    path: "/admin/enquiries",
    icon: <MdOutlineQuestionAnswer size={25} />,
  },
];
const AdminNav = () => {
  return (
    <Container>
      <Link to='/'>
        <Image src={Logo} />
      </Link>
      <Menu>
        {adminMenu.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.icon}
              <span>{item.name}</span>
            </NavLink>
          </li>
        ))}
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  padding: 2rem 0;
  background-image: linear-gradient(
    to top right,
    ${colors.tertiary},
    ${colors.primary}
  );
`;
const Menu = styled.ul`
  color: ${colors.white};
  text-transform: capitalize;
  width: 100%;
  & li {
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
    font-weight: 600;
    text-transform: uppercase;
    & span {
      margin-left: 0.5rem;
    }
    & a,
    a:link {
      text-decoration: none;
      color: ${colors.white};
      padding: 0.8rem;
      width: 100%;
    }
    & a:hover {
      background-color: ${colors.white};
      color: ${colors.primary};
    }
    & a.active {
      background-color: ${colors.white};
      color: ${colors.primary};
    }
  }
  & li:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
const Image = styled.img`
  width: 15rem;
  height: auto;
  margin-bottom: 5rem;
`;
export default AdminNav;
