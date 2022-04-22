import React from "react";
// import NavBar from "./layout/Navbar";
import Sidebar from "./Sidebar";
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column
`


const Layout = React.memo((props) => {
  return (
    <>
      <Sidebar />
      <Wrapper>
        {/* <NavBar/> */}
        {props.children}
      </Wrapper>
    </>
  );
});

export default Layout;
