import React from "react";
import Layout from "../components/Layout/Layout";
// import { NavLink } from "react-router-dom";
import { useAuth } from "../context/auth";
const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout>
      <main className="animation_home">
        <video autoplay muted loop id="myVideo">
          <source src="video.mov" type="video/mov" />
        </video>
      </main>
      <section class="product-container">
        <div className="container1">
          {/* categories */}
          <h1>Cotton Bathmats</h1>
          <pre>{JSON.stringify(auth, null, 4)}</pre>
          <div className="d-flex "></div>
        </div>
        <div className="container2">{/* designs */}</div>
        <div className="container3">{/* virtual assitsance */}</div>
        <div className="container4">{/* caraosel */}</div>
        <div className="container5">{/* style spotlight */}</div>
        <div>{/* about us */}</div>
      </section>
    </Layout>
  );
};

export default HomePage;
