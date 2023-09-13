import React from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import "../Index.css";
import DashboardHeader from "../../components/Layout/DashboardHeader";
function orders() {
  return (
    <Layout>
      <div className="admin-dashboard">
        <DashboardHeader />
        <div className="m-3 p-3 row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9 admin-details">
            <h3 className=" ">Orders</h3>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default orders;
