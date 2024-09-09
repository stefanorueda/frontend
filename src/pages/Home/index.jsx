import React from "react";
import Login from "../../components/login";
import AutoRedirect from "../../components/autoredirect";

const Home = () => {
  return (
    <>
      <AutoRedirect />
      <Login />
    </>
  );
};

export default Home;
