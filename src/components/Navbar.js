import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <a className="navbar-brand " href="#">
          BUIDLERS TRIBE
        </a>
        <div className="navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  text-center">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Out Startups
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Builders
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Investors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Experts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                People
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Values
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                BeliefDAO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Jobs
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
