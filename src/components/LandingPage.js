import React, { useEffect } from "react";
import "./LandingPage.css";
import Aos from "aos";
import "aos/dist/aos.css";
export default function LandingPage() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <img
        className="disp-image"
        src="https://images.unsplash.com/photo-1545987796-200677ee1011?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
      />
      <div className="centered text-center">Get access to the best investors and VCs in web3</div>
      <div data-aos="fade-up" className="text-block row">
        <img
          className="col-12 col-md-6"
          height="98%"
          src="https://images.unsplash.com/photo-1538688423619-a81d3f23454b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
        />
        <p className="col-12 col-md-6 text-center text-one">Be a part of a high-trust network of buidlers.</p>
      </div>
      <div data-aos="fade-up" className="text-block row">
        <p className="col-12 col-md-6 text-center text-one">
          Work with over 100 functional experts who work with you in exchange for a small allocation.
        </p>
        <img
          className="col-12 col-md-6"
          height="98%"
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
        />
      </div>

      <div data-aos="fade-up" className=" btn-block row">
        <button className="btn-action">Read what builders have to say about us!</button>
        <a href="#" className="text-center link">
          Are you a builder?
        </a>
      </div>

      <div data-aos="fade-up" className="btn-block row block-selection">
        <p className="col-12 col-md-6 text-center text-one">700 startup pitches </p>
        <p className="col-12 col-md-6 text-center text-one">15 startups selected</p>
        <p className="col-12 col-md-12 mt-5 text-center text-one">43 VCs / 100+ investors</p>
      </div>
    </>
  );
}
