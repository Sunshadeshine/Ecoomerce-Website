import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import "../Index.css";
import DashboardHeader from "../../components/Layout/DashboardHeader";

const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="admin-dashboard">
        <DashboardHeader />
        <div className="m-3 p-3 row">
          <div className="col-md-3">
            <AdminMenu />
          </div>

          <div className="col-md-9 admin-details">
            <h3 className=" ">Admin Details</h3>
            <div className="admin-card  card ">
              <table>
                <tr>
                  <td>Role :</td>
                  <td>Admin</td>
                </tr>
                <tr>
                  <td>Name :</td>
                  <td>{auth?.user?.name}</td>
                </tr>
                <tr>
                  <td>Email :</td>
                  <td>{auth?.user?.email}</td>
                </tr>
                <tr>
                  <td>Contact :</td>
                  <td>{auth?.user?.phone}</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
