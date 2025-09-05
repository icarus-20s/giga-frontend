import React, { useState, useEffect, useRef } from "react";
import ERP from "../assets/Products/ERP.png";

const themes = [
  { bg: "bg-[#1A1A2E]", text: "text-white", primary: "bg-gradient-to-r from-[#35c3c1] to-[#00d6b7]" },
  { bg: "bg-[#461220]", text: "text-white", primary: "bg-gradient-to-r from-[#E94560] to-[#FF7F50]" },
  { bg: "bg-[#192A51]", text: "text-white", primary: "bg-gradient-to-r from-[#967AA1] to-[#B19CD9]" },
  { bg: "bg-[#F7B267]", text: "text-black", primary: "bg-gradient-to-r from-[#F4845F] to-[#FFB347]" },
];

const LoginForm = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [theme, setTheme] = useState(themes[0]);
  const [isVisible, setIsVisible] = useState(false);

  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (formRef.current) observer.observe(formRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });
  };

  return (
    <div
      className={`relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 ${theme.bg}`}
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
            <label htmlFor="username" className={`text-sm font-medium ${theme.text}`}>
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Username"
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

          {/* Forgot link */}
          <a href="#" className="block text-center text-sm text-cyan-400 hover:text-cyan-300 transition">
            Forgot password?
          </a>
        </form>

        {/* Footer Links */}
        <div className={`flex justify-between text-sm mt-6 ${theme.text} text-opacity-80`}>
          <a href="#" className="hover:text-opacity-100 transition">Forgot Password?</a>
          <a href="#" className="hover:text-opacity-100 transition">Create Account</a>
        </div>

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
