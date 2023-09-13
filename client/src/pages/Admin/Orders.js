import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import "../Index.css";
import DashboardHeader from "../../components/Layout/DashboardHeader";
const Orders = () => {
  return (
    <Layout>
      <div className="admin-dashboard">
        <DashboardHeader />
        <div className="m-3 p-3 row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 admin-details">Orders</div>
        </div>
      </div>
    </Layout>
  );
};

export default Orders;
