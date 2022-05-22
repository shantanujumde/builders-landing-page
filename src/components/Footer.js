import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid px-lg-5">
        <div className="row">
          <div className="col-md-4 py-5">
           
              {/* <div className="col-md-4 mb-md-0 mb-4"> */}
                <h2 className="footer-heading">About us</h2>
                <p>We are Builders Tribe</p>
                {/* </div> */}
            </div>
            <div className="col-md-3 py-5">
              <h2>Follow us at</h2>
              <ul style={{ listStyleType: "none" }} className="ftco-footer-social p-0">
                <li className="ftco-animate">
                  <a className="social-link" href="#">
                    LinkedIn{" "}
                  </a>
                </li>
                <li className="ftco-animate">
                  <a className="social-link" href="#">
                    Twitter{" "}
                  </a>
                </li>
                <li className="ftco-animate">
                  <a className="social-link" href="#">
                    Facebook{" "}
                  </a>
                </li>
              </ul>
            </div>
         
          <div className=" col-md-5 mt-5 mb-0 aside-stretch-right ">
            <h2 className="footer-heading  text-center">Build daily</h2>
            <p className="footer-heading  text-center">web3 and startups</p>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Type your email..."
                aria-label="Type your email..."
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
