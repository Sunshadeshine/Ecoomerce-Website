import React from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import DashboardHeader from "../../components/Layout/DashboardHeader";
// import { useAuth } from "../../context/auth";
import "../Index.css";

const Users = () => {
  return (
    <Layout>
      <div className="admin-dashboard">
        <DashboardHeader />
        <div className="m-3 p-3 row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 admin-details">Users</div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;
