import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom"; // ← Added useLocation
import logo from "../assets/logo.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../Components/Context/AuthContextProvider";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation(); // ← This tracks current route
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const auth = useAuth();

    // Sync active item with current URL (even on reload)
    const currentPath = location.pathname;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Gallery", path: "/gallery" },
        { name: "Career", path: "/career" },
        { name: "Clients", path: "/clients" },
        { name: "Notices", path: "/notices" },
        { name: "About", path: "/about" },
        { name: "Contact Us", path: "/contactus" },
    ];

    const handleNavClick = (path) => {
        setIsOpen(false);
        navigate(path);
    };

    const handleLogout = () => {
        auth.logout();
        navigate("/");
        setIsOpen(false);
    };

    // Check if current path matches (supports exact match)
    const isActive = (path) => {
        if (path === "/") {
            return currentPath === "/";
        }
        return currentPath.startsWith(path);
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isScrolled
                        ? "bg-amber-50/90 backdrop-blur-md shadow-lg"
                        : "bg-transparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 lg:h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                            <a
                                href="/"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleNavClick("/");
                                }}
                                className="flex items-center space-x-2 group"
                            >
                                <img
                                    src={logo}
                                    alt="Company Logo"
                                    className="w-20 h-20 lg:w-28 lg:h-28 rounded-xl object-contain transform group-hover:scale-105 transition-transform duration-200"
                                />
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.path}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.path);
                                    }}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group ${
                                        isActive(item.path)
                                            ? isScrolled
                                                ? "text-blue-600"
                                                : "text-blue-300"
                                            : isScrolled
                                            ? "text-gray-700 hover:text-blue-600"
                                            : "text-white hover:text-blue-300"
                                    }`}
                                >
                                    {item.name}
                                    {isActive(item.path) && (
                                        <div
                                            className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-[2px] rounded-full ${
                                                isScrolled
                                                    ? "bg-blue-600"
                                                    : "bg-blue-300"
                                            }`}
                                        ></div>
                                    )}
                                    <div
                                        className={`absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                                            isScrolled
                                                ? "via-blue-500"
                                                : "via-blue-300"
                                        }`}
                                    ></div>
                                </a>
                            ))}

                            {/* Logout Button */}
                            {auth.isAuthenticated && (
                                <button
                                    onClick={handleLogout}
                                    className="ml-4 px-4 py-2 rounded-lg text-sm font-medium bg-blue-500 text-white hover:bg-red-600 transition cursor-pointer"
                                >
                                    Logout
                                </button>
                            )}
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`relative flex flex-col justify-center items-center w-10 h-10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                                    isScrolled
                                        ? "bg-white/80 text-gray-700 shadow hover:bg-gray-100 focus:ring-blue-500"
                                        : "bg-white/10 text-white backdrop-blur-md hover:bg-white/20 focus:ring-blue-300"
                                }`}
                                aria-label="Toggle menu"
                                aria-expanded={isOpen}
                            >
                                <span
                                    className={`block h-0.5 w-6 rounded-sm bg-current transform transition duration-300 ease-in-out ${
                                        isOpen
                                            ? "rotate-45 translate-y-1.5"
                                            : "-translate-y-1.5"
                                    }`}
                                />
                                <span
                                    className={`block h-0.5 w-6 rounded-sm bg-current transition-all duration-300 ease-in-out ${
                                        isOpen ? "opacity-0" : "opacity-100"
                                    }`}
                                />
                                <span
                                    className={`block h-0.5 w-6 rounded-sm bg-current transform transition duration-300 ease-in-out ${
                                        isOpen
                                            ? "-rotate-45 -translate-y-1.5"
                                            : "translate-y-1.5"
                                    }`}
                                />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation Menu */}
                    <div
                        className={`lg:hidden transition-all duration-300 ease-in-out ${
                            isOpen
                                ? "max-h-96 opacity-100 pb-4"
                                : "max-h-0 opacity-0 overflow-hidden"
                        }`}
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-amber-50/90 rounded-lg mt-2 shadow-lg border border-gray-100">
                            {navItems.map((item, index) => (
                                <a
                                    key={item.name}
                                    href={item.path}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.path);
                                    }}
                                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 transform hover:scale-[1.02] ${
                                        isActive(item.path)
                                            ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                                            : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                                    }`}
                                    style={{
                                        animationDelay: `${index * 50}ms`,
                                    }}
                                >
                                    <span className="flex items-center justify-between">
                                        {item.name}
                                        {isActive(item.path) && (
                                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                        )}
                                    </span>
                                </a>
                            ))}

                            {auth.isAuthenticated && (
                                <button
                                    onClick={handleLogout}
                                    className="w-full mt-2 px-4 py-3 rounded-lg text-base font-medium bg-blue-500 text-white hover:bg-red-600 transition"
                                >
                                    Logout
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile Overlay */}
                {isOpen && (
                    <div
                        className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </nav>
        </>
    );
};

export default Navbar;
