import React from "react";
import Layout from "../../components/Layout/Layout";
import Login from "./Login";
import Register from "./Register";
import "../Index.css";

const Login_Register = () => {
  return (
    <Layout>
      <div className="main_login_reg">
        <Register />
        <Login />
      </div>
    </Layout>
  );
};

export default Login_Register;
