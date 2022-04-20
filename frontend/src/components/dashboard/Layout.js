import React from "react";
import Sidebar from "./Sidebar";


const Layout = React.memo((props) => {
  return (
    <>
      <Sidebar />
      {props.children}
    </>
  );
});

export default Layout;
