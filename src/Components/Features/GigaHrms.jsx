import React from "react";
import LoginForm from "../LoginForm";

const GigaHrms = () => {
  const handleLogin = (data) => {
    console.log("HRMS login:", data);
    // handle authentication
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default GigaHrms;
