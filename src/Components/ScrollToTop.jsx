import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const isMobile = window.innerWidth < 768; // mobile breakpoint
    window.scrollTo({ top: 0, behavior: isMobile ? "auto" : "smooth" });
  }, [pathname]);

  return null;
}
