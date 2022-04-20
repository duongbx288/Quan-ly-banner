import React, { useState } from "react";
import styled from "styled-components";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu.js";
import Logo from './Logo.png'; 
import '../style.css'

//left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
const SidebarNav = styled.nav`
  width: 230px;
  height: 100vh;
  justify-content: center;
  background-color: #fff;
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
    <SidebarNav>
      <SideBarHead>
        <img src={Logo} />
      </SideBarHead>
      <SidebarWrap>
        {SidebarData.map((item, index) => {
          return <SubMenu item={item} key={index} />;
        })}
      </SidebarWrap>
    </SidebarNav>
  );
};

