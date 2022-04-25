import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SidebarDataUser, SidebarDataAdmin } from "./SidebarData";
import { SidebarLink, SidebarLabel} from "./SubMenu"
import SubMenu from "./SubMenu.js";
import Logo from '../Logo.png';
import '../../styles/dashboard/style.css'
import { MdLogout } from "react-icons/md";

const SidebarNav = styled.nav`
  min-width: 250px;
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


export default function Sidebar(props) {
  // let AdminTab;
  // if (props.roles = "ROLE_ADMIN")
  // {
  //   AdminTab = SidebarDataAdmin.map((item, index) => {
  //     return <SubMenu item={item} key={index}/>;
  //   }
  // )}
  return (
    <>
      <SidebarNav>
        <SideBarHead>
          <img src={Logo} id="logo" />
        </SideBarHead>

        <SidebarWrap>
          {
            SidebarDataUser.map((item, index) => {
              return <SubMenu item={item} key={index}/>;
            })
          }
          {/* {AdminTab} */}
          <SidebarLink to={"/login"} onClick={props.logOut}>
            <MdLogout size={24}/>
            <SidebarLabel className="l-0">Đăng xuất</SidebarLabel>
            <div></div>
          </SidebarLink>
        </SidebarWrap>
      </SidebarNav>
    </>
  );
};
