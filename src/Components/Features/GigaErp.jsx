import React from "react";
import LoginForm from "../LoginForm";

const GigaErp = () => {
  const handleLogin = (data) => {
    console.log("GigaERP login:", data);
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
      {/* ERP main dashboard */}
    </div>
  );
};

export default GigaErp;
