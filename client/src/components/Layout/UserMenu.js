import React from "react";
import { NavLink } from "react-router-dom";
const UserMenu = () => {
  return (
    <div>
      <div className="text-center dashboard-menu">
        <div className="list-group">
          <h4>Dashboard</h4>
          <NavLink
            to="/dashboard/user/Wallet"
            className="list-group-item list-group-item-action"
          >
            Wallet
          </NavLink>
          <NavLink
            to="/dashboard/user/orders"
            className="list-group-item list-group-item-action"
          >
            Orders
          </NavLink>
          <NavLink
            to="/dashboard/user/security"
            className="list-group-item list-group-item-action"
          >
            Security
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
