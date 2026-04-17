import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FriendContext from "./FriendContext";
import { ToastContainer } from "react-toastify";

const RootLayout = () => {
  return (
   <FriendContext>
     <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
       <ToastContainer />
    </div>
   </FriendContext>
  
  );
};

export default RootLayout;
