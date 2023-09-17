import React from "react";
import UserMenu from "../../components/Layout/UserMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import "../Index.css";
import DashboardHeader from "../../components/Layout/DashboardHeader";
const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="admin-dashboard">
        <DashboardHeader />
        <div className="m-3 p-3 row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9 admin-details">
            <h3 className=" ">User Details</h3>
            <div className="card ">
              <span class=" position-relative  material-symbols-outlined">
                edit_note
              </span>
              <table>
                <tr>
                  <td>Name:</td>
                  <td>{auth?.user?.name}</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>{auth?.user?.email}</td>
                </tr>
                <tr>
                  <td>Contact:</td>
                  <td>{auth?.user?.phone}</td>
                </tr>
                <tr className="align-top">
                  <td>Address:</td>
                  <td>{auth?.user?.address}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
