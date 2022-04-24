import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu.js";
import Logo from '../Logo.png';
import '../../styles/dashboard/style.css'

const NavWrap = styled.nav`
  width: 100%;
  height: 55px;
  background: #66B8FF;
`;

export default function NavBar(props) {
  return (
    <>
      <NavWrap>
        Admin
      </NavWrap>
    </>
  );
};

