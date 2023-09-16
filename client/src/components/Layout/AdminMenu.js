import React from "react";
import { NavLink } from "react-router-dom";
const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group dashboard-menu">
          <h4>Admin Panel</h4>
          <NavLink
            to="/dashboard/admin"
            className="list-group-item list-group-item-action"
          >
            Profile
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-category"
            className="list-group-item list-group-item-action"
          >
            Manage Category
          </NavLink>
          <NavLink
            to="/dashboard/admin/create-product"
            className="list-group-item list-group-item-action"
          >
            Create Product
          </NavLink>

          <NavLink
            to="/dashboard/admin/products"
            className="list-group-item list-group-item-action"
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard/admin/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
          {/* <NavLink
            to="/dashboard/admin/eaboutus" //changeabout
            className="list-group-item list-group-item-action"
          >
            Change About Us
          </NavLink>

          <NavLink
            to="/dashboard/admin/efaqs"
            className="list-group-item list-group-item-action"
          >
            Edit FAQs
          </NavLink>
          <NavLink
            to="/dashboard/admin/Esizeguide"
            className="list-group-item list-group-item-action"
          >
            Edit Size Guide
          </NavLink>

          <NavLink
            to="/dashboard/admin/Econtacts"
            className="list-group-item list-group-item-action"
          >
            Edit Contact Details
          </NavLink> */}
          {/* <NavLink
            to="/dashboard/admin/users"
            className="list-group-item list-group-item-action"
          >
            Users
          </NavLink> */}
        </div>
      </div>
    </>
  );
};

export default AdminMenu;
