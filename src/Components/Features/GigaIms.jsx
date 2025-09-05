import React from "react";
import LoginForm from "../LoginForm";

const GigaIms = () => {
  const handleLogin = (data) => {
    console.log("IMS login:", data);
    // handle authentication for IMS
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default GigaIms;
