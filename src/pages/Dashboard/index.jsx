import React from "react";
import AutoRedirect from "../../components/autoredirect";

const Dashboard = () => {
  return (
    <>
      <AutoRedirect />
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-800">dashboard Page</h1>
        <p className="text-lg text-gray-600">Welcome to the dashboard!</p>
      </div>
    </>
  );
};

export default Dashboard;
