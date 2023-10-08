import React, { useEffect } from "react";
import useImgs from "../img/useImgs";
import styles from "./contact.module.scss"

export default function Contact() {
  const imgs = useImgs()
  return (
    <div>
      {/* <img src={`${imgs.wolf}`} alt="wolf" /> */}
      <h2 className="title text-center">Signup For Newsletter</h2>
      <div className="d-flex justify-content-center">
        <input className={`form-control w-50 border-secondary shadow-none ${styles.text} `} style={{outlineColor: "rgba(223, 223, 67, 0.788)"}} type="text" />
        <input type="button" className="btn btn-secondary ms-1" value={"Subscribe"} />
      </div>
    </div>
  );
}
