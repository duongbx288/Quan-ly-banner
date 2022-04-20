import React from "react";
// import NavBar from "../NavBar";
import Sidebar from "./default/Sidebar";


const Layout = React.memo((props) => {
  return (
    <>
      <Sidebar />
      {/* <NavBar 
        userID={props.userID} 
        socket={props.socket} 
        logOutHandler={props.logOutHandler} 
      /> */}
      {/* {props.children} */}
    </>
  );
});

export default Layout;
