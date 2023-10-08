import React from "react";
import { Link } from "react-router-dom";
import "./header.scss"
export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary  pt-0 mb-1">
        <div className="container-fluid">
          <Link className="navbar-brand link" to="">
            Navbar
          </Link>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto  me-4">
              <li className="nav-item">
                <Link className="nav-link link" aria-current="page" to={""}>
                 <span className="span">Home</span> 
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link  link"
                  aria-current="page"
                  to={"about"}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link  link"
                  aria-current="page"
                  to={"artist"}
                >
                  Artist
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link  link"
                  aria-current="page"
                  to={"contact"}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
