import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AutoRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  }, [navigate]);

  return null;
}

export default AutoRedirect;
