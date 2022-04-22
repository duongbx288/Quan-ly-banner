import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu.js";
import Logo from '../Logo.png';
import '../../styles/dashboard/style.css'

const SidebarNav = styled.nav`
  width: 250px;
  height: 100vh;
  border-right: 2px solid #a7a7a7;
  z-index: 0;
  background: #182537;
`;

const SidebarWrap = styled.div`
  width: 100%;
  margin: 0;
  padding: 10px;
`;
const SideBarHead = styled.div`
  height: 55px;
  padding: 12px;
  color: white;
  border-bottom: solid 1px #46515F;
`;


export default function Sidebar() {

  return (
    <>
      <SidebarNav>
        <SideBarHead>
          <img src={Logo} id="logo" />
        </SideBarHead>
        <SidebarWrap>
          {
            SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })
          }
        </SidebarWrap>
      </SidebarNav>
    </>

  );
};

