import React from "react";
import { Link } from "react-router-dom";

const THEME = {
  colors: {
    background: "bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900",
    badge: {
      text: "text-sky-300",
      background: "bg-sky-900/40",
      border: "border-sky-600",
    },
    text: {
      primary: "text-white",
      secondary: "text-slate-200/90",
      tertiary: "text-slate-300",
      muted: "text-white/60",
    },
    card: {
      background: "bg-slate-900/80",
      border: "border-white/10",
      shadow: "shadow-lg shadow-black/20",
    },
    accent: {
      primary: "bg-sky-600",
      secondary: "bg-cyan-500",
    },
  },
};

const NoRoutePage = () => {
  return (
    <div
      className={`${THEME.colors.background} min-h-screen flex flex-col justify-center items-center px-4`}
    >
      <div
        className={`max-w-md w-full ${THEME.colors.card.background} ${THEME.colors.card.border} ${THEME.colors.card.shadow} rounded-xl p-8 text-center`}
      >
        <h1 className={`text-4xl sm:text-5xl font-bold ${THEME.colors.text.primary}`}>
          404
        </h1>
        <p className={`mt-4 text-lg sm:text-xl ${THEME.colors.text.secondary}`}>
          Oops! The page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className={`mt-6 inline-block px-6 py-3 rounded-lg font-semibold ${THEME.colors.accent.primary} ${THEME.colors.text.primary} hover:bg-cyan-500 transition-colors`}
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NoRoutePage;
