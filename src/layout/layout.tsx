import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

export default function layout() {
  return (
    <>
      <Header />
      <div style={{minHeight:"100vh"}}>

      <Outlet />
      </div>
      <Footer />
    </>
  );
}
