import React from "react";
// import NavBar from "./layout/Navbar";
import Sidebar from "./Sidebar";
import styled from 'styled-components';
import NavBar from "./Navbar";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column
`

const Layout = React.memo((props) => {
  
  return (
    <div className="d-flex ">
      <Sidebar 
        // roles={props.roles}
        logOut={props.logOut}
      />
      <Wrapper>
        <NavBar />        
        {props.children}
      </Wrapper>
    </div>
  );
});

export default Layout;
