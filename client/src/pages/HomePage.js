import React from "react";
import Layout from "../components/Layout/Layout";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth";
import Header from "../components/Layout/Header";
import "../pages/Homepage.css";

const HomePage = () => {
  return (
    <Layout>
      <div className="body">
        <div className="wrapper">
          <div className="bg" />

          {/* SOCIAL MEDIA
    =============================== */}
          <div className="media">
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
          </div>
          {/* IMAGE
    =============================== */}
          <div className="img-wrapper">
            <div className="img" />
            <div className="block" />
          </div>
          {/* TEXT
    =============================== */}
          <div className="text">
            <h1>
              <span className="text-bar">
                Elevate Your <label> Spaces </label>
              </span>
            </h1>
            <p>
              <span className="text-bar">Where Quality Meets Comfort</span>
            </p>
          </div>
          {/* BOTTOMNAV
    =============================== */}
          <div className="bottomnav">
            <div className="next">Quality, Diversity, and Style</div>
          </div>
        </div>
      </div>
      <div className="homepage">
        <div className="homepage-showcase">
          <h2>Weaving Dreams</h2>
          <div className="d-flex justify-content-between align-items-center">
            <img src="/luxury1.jpg" alt="luxury exit" />
            <img src="/luxury3.jpg" alt="luxury exit2" />
          </div>
        </div>
        <div className="homepage-categories">
          <h2>Top Categories</h2>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <img src="/batmath.jpg" alt="luxury exit" />
              <p>Hotel Bath Mats</p>
            </div>
            <div>
              <img src="/carpet3.jpg" alt="luxury exit" />
              <p>Carpets</p>
            </div>
            <div>
              <img src="/rugs.jps.jpg" alt="luxury exit" />
              <p>Rugs</p>
            </div>
            <div>
              <img src="/doormat.jpg" alt="luxury exit" />
              <p>Door Mats</p>
            </div>
          </div>
        </div>
        <div className="homepage-assistance">
          <div className="m-auto">
            <h2>Need Virtual Assistance ?</h2>
            <NavLink className="" to="/book">
              Book an Appointment
            </NavLink>
          </div>
        </div>
        <div className="homepage-manu">
          <h2>What from Manufacturing ?</h2>
          <div className="m-auto d-flex justify-content-between align-items-center">
            <img src="/side.jpg" alt="luxury exit" />
            <p>
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it to make a type specimen book. It has survived not only five
              centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum
              passages, and more recently with desktop publishing software like
              Aldus PageMaker including versions of Lorem Ipsum. simply dummy
              text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when
              an unknown printer took a galley of type and scrambled it to make
              a type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
