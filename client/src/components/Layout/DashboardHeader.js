import React from "react";
import { useAuth } from "../../context/auth";

const DashboardHeader = () => {
  const [auth] = useAuth();
  return (
    <>
      <h3 className="text-start ">Account Details</h3>
      <h6 className="text-start"> {auth?.user?.name}</h6>
      <hr />
    </>
  );
};

export default DashboardHeader;
