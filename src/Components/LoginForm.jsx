import React, { useState, useEffect, useRef } from "react";
import ERP from "../assets/Products/ERP.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Components/Context/AuthContextProvider";
import api from "../Components/Api"

const themes = [
  { bg: "bg-[#1A1A2E]", text: "text-white", primary: "bg-gradient-to-r from-[#35c3c1] to-[#00d6b7]" },
  { bg: "bg-[#461220]", text: "text-white", primary: "bg-gradient-to-r from-[#E94560] to-[#FF7F50]" },
  { bg: "bg-[#192A51]", text: "text-white", primary: "bg-gradient-to-r from-[#967AA1] to-[#B19CD9]" },
  { bg: "bg-[#F7B267]", text: "text-black", primary: "bg-gradient-to-r from-[#F4845F] to-[#FFB347]" },
];

const LoginForm = () => {
  const navigate = useNavigate();
  const auth = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [theme, setTheme] = useState(themes[0]);
  const [isVisible, setIsVisible] = useState(false);

const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        const response = await api.post("/login/", { email, password });
        console.log("Login Response:", response);

        if (response.status === 200) {
            const { user, token, role, product } = response.data;

            auth.login(user, token, role, product);
            if (product === "giga-accounting") {
                navigate("/products/giga-accounting", { replace: true });
            } else if (product === "giga-erp") {
                navigate("/products/giga-erp", { replace: true });
            } else if (product === "giga-hrms") {
                navigate("/products/giga-hrms", { replace: true });
            } else if (product === "giga-ims") {
                navigate("/products/giga-ims", { replace: true });
            } else {
                navigate("/", { replace: true }); 
            }
        }
    } catch (error) {
        setError("Login Failed. Please check your email and password.");
        console.error("Login Failed:", error);
    }
};


  const formRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 ${theme.bg} overflow-hidden`}
      style={{
        backgroundImage: `url(${ERP})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div
        ref={formRef}
        className={`relative z-10 w-full max-w-md p-6 sm:p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl space-y-6 transform transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-4 sm:mb-6">
          <h2 className={`text-2xl sm:text-3xl font-semibold ${theme.text}`}>Welcome Back</h2>
          <p className={`mt-2 text-sm sm:text-base ${theme.text} text-opacity-70`}>
            Sign in to your account
          </p>
        </div>

        {/* Login Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Username */}
<div className="flex flex-col space-y-1">
  <label htmlFor="email" className={`text-sm font-medium ${theme.text}`}>
    Email
  </label>
  <input
    id="email"
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    required
    className="flex-1 px-4 py-3 rounded-md bg-white/5 border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 transition-all duration-200"
  />
</div>


          {/* Password */}
          <div className="flex flex-col space-y-1">
            <label htmlFor="password" className={`text-sm font-medium ${theme.text}`}>
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-md bg-white/5 border border-white/20 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 transition-all duration-200"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className={`w-full py-3 text-base font-medium rounded-md ${theme.primary} ${theme.text} hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 transition-all duration-200`}
          >
            LOGIN
          </button>
        </form> 

        {/* Theme Switcher */}
        <div className="flex gap-3 mt-6 justify-center">
          {themes.map((t, idx) => (
            <button
              key={idx}
              className={`w-8 h-8 rounded-full ${t.bg} border border-white/20 hover:scale-110 transition-transform duration-200`}
              onClick={() => setTheme(t)}
              aria-label={`Switch to theme ${idx + 1}`}
            />
          ))}
        </div>
      </div>
      {/* Decorative circles */}
      <div className="absolute w-24 h-24 bg-cyan-500/10 rounded-full -top-8 -left-8 animate-pulse"></div>
      <div className="absolute w-32 h-32 bg-purple-500/10 rounded-full -bottom-12 -right-12 animate-pulse delay-1000"></div>
    </div>
  );
};

export default LoginForm;
