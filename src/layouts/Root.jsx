import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Foooter from "../components/Footer/Foooter";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div>
      <div className="h-20">
        <NavBar></NavBar>
      </div>

      <ToastContainer></ToastContainer>

      <div className="min-h-[calc(100vh-300px)]">
        <Outlet></Outlet>
      </div>

      <Foooter></Foooter>
    </div>
  );
};

export default Root;
