import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import useImgs from "../img/useImgs";

export default function Layout() {
 
  const imgs = useImgs()
  console.log(imgs)
  return (
    <>
      <main style={{ minHeight: "100vh" }} className="bg-primary position-relative ">
        <Header />
        <div className=" position-absolute bottom-0 end-0 " >

      <img src={`${imgs["P6g7PlQlh2+r5Pd0C"]}`} className="rounded-circle  " style={{background:"white",cursor:"pointer"}}/>
        </div>
        <div className="container ">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
