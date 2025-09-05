import React from "react";
import LoginForm from "../LoginForm";

const GigaAccounting = () => {
  const handleLogin = (data) => {
    console.log("Accounting login:", data);
  };

  return (
    <div>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default GigaAccounting;
