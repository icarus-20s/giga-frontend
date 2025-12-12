import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../Components/Context/AuthContextProvider";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
    const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
    const dropdownRef = useRef(null);
    const auth = useAuth();
    const currentPath = location.pathname;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        // Check initial scroll position
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsAboutDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Gallery", path: "/gallery" },
        { name: "Career", path: "/career" },
        { name: "Clients", path: "/clients" },
        { name: "Notices", path: "/notices" },
        { name: "Blogs", path: "/blogs" },
        { name: "About", path: "/about", hasDropdown: true },
        { name: "Contact Us", path: "/contactus" },
    ];

    const aboutDropdownItems = [
        { name: "About", path: "/about" },
        { name: "Privacy Policy", path: "/privacy-policy" },
    ];

    const handleNavClick = (path) => {
        setIsOpen(false);
        setIsAboutDropdownOpen(false);
        setIsMobileAboutOpen(false);
        navigate(path);
    };

    const handleLogout = () => {
        auth.logout();
        navigate("/");
        setIsOpen(false);
    };

    const isActive = (path) => {
        if (path === "/") return currentPath === "/";
        return currentPath.startsWith(path);
    };

    const isAboutSectionActive = () => {
        return currentPath === "/about" || currentPath === "/privacy-policy";
    };

const handleDemoClick = () => {
  window.open(
    "https://gigademo.gigaschoolerp.com/auth/login?ReturnUrl=%2F",
    "_blank"
  );
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
                <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-2">
                    <div className="flex items-center justify-between h-14 lg:h-16">
                        {/* Logo - Left */}
                        <a
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick("/");
                            }}
                            className="flex items-center group"
                        >
                            <img
                                alt="Company Logo"
                                class="w-20 h-20 lg:w-28 lg:h-28 rounded-xl object-contain transform group-hover:scale-105 transition-transform duration-200"
                                src={logo}
                            />
                        </a>

                        {/* Desktop Navigation - Center */}
                        <div className="hidden lg:flex items-center justify-center flex-1">
                            <div className="flex items-center space-x-1">
                                {navItems.map((item) => {
                                    if (item.hasDropdown) {
                                        return (
                                            <div
                                                key={item.name}
                                                className="relative"
                                                ref={dropdownRef}
                                            >
                                                <button
                                                    onClick={() =>
                                                        setIsAboutDropdownOpen(
                                                            !isAboutDropdownOpen
                                                        )
                                                    }
                                                    className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1 ${
                                                        isAboutSectionActive()
                                                            ? isScrolled
                                                                ? "text-blue-600"
                                                                : "text-yellow-300"
                                                            : isScrolled
                                                            ? "text-gray-700 hover:text-blue-600"
                                                            : "text-white/90 hover:text-white"
                                                    }`}
                                                >
                                                    {item.name}
                                                    <ChevronDown
                                                        className={`w-4 h-4 transition-transform duration-200 ${
                                                            isAboutDropdownOpen
                                                                ? "rotate-180"
                                                                : ""
                                                        }`}
                                                    />
                                                </button>

                                                <AnimatePresence>
                                                    {isAboutDropdownOpen && (
                                                        <motion.div
                                                            initial={{
                                                                opacity: 0,
                                                                y: -10,
                                                                scale: 0.95,
                                                            }}
                                                            animate={{
                                                                opacity: 1,
                                                                y: 0,
                                                                scale: 1,
                                                            }}
                                                            exit={{
                                                                opacity: 0,
                                                                y: -10,
                                                                scale: 0.95,
                                                            }}
                                                            transition={{
                                                                duration: 0.2,
                                                            }}
                                                            className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                                                        >
                                                            {aboutDropdownItems.map(
                                                                (
                                                                    dropdownItem
                                                                ) => (
                                                                    <a
                                                                        key={
                                                                            dropdownItem.name
                                                                        }
                                                                        href={
                                                                            dropdownItem.path
                                                                        }
                                                                        onClick={(
                                                                            e
                                                                        ) => {
                                                                            e.preventDefault();
                                                                            handleNavClick(
                                                                                dropdownItem.path
                                                                            );
                                                                        }}
                                                                        className={`block px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                                                                            isActive(
                                                                                dropdownItem.path
                                                                            )
                                                                                ? "text-blue-600 bg-blue-50"
                                                                                : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                                                                        }`}
                                                                    >
                                                                        {
                                                                            dropdownItem.name
                                                                        }
                                                                    </a>
                                                                )
                                                            )}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    }

                                    return (
                                        <a
                                            key={item.name}
                                            href={item.path}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleNavClick(item.path);
                                            }}
                                            className={`px-3 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative group whitespace-nowrap ${
                                                isActive(item.path)
                                                    ? isScrolled
                                                        ? "text-blue-600"
                                                        : "text-cyan-300"
                                                    : isScrolled
                                                    ? "text-gray-700 hover:text-blue-600"
                                                    : "text-white/90 hover:text-white"
                                            }`}
                                        >
                                            {item.name}
                                            {isActive(item.path) && (
                                                <motion.div
                                                    layoutId="activeIndicator"
                                                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 rounded-full ${
                                                        isScrolled
                                                            ? "bg-blue-600"
                                                            : "bg-cyan-300"
                                                    }`}
                                                    transition={{
                                                        type: "spring",
                                                        stiffness: 380,
                                                        damping: 30,
                                                    }}
                                                />
                                            )}
                                        </a>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Demo Button - Right (Desktop) */}
                        <div className="hidden lg:flex items-center flex-shrink-0">
                            <button
                                onClick={handleDemoClick}
                                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                                    isScrolled
                                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
                                        : "bg-white text-blue-600 hover:bg-white/90 shadow-lg hover:shadow-xl"
                                }`}
                            >
                                Start Demo
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className={`relative flex flex-col justify-center items-center w-10 h-10 rounded-lg transition-all duration-300 focus:outline-none ${
                                    isScrolled
                                        ? "bg-white text-gray-700 shadow-md hover:bg-gray-50"
                                        : "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30"
                                }`}
                                aria-label="Toggle menu"
                                aria-expanded={isOpen}
                            >
                                <span
                                    className={`block h-0.5 w-5 rounded-full bg-current transform transition-all duration-300 ${
                                        isOpen
                                            ? "rotate-45 translate-y-1"
                                            : "-translate-y-1"
                                    }`}
                                />
                                <span
                                    className={`block h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
                                        isOpen
                                            ? "opacity-0 scale-0"
                                            : "opacity-100 scale-100"
                                    }`}
                                />
                                <span
                                    className={`block h-0.5 w-5 rounded-full bg-current transform transition-all duration-300 ${
                                        isOpen
                                            ? "-rotate-45 -translate-y-1"
                                            : "translate-y-1"
                                    }`}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Mobile Menu Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "tween", duration: 0.3 }}
                            className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-amber-50 shadow-2xl z-50 lg:hidden flex flex-col"
                        >
                            {/* Mobile Menu Header */}
                            <div className="flex items-center justify-between p-4 border-b border-gray-100 flex-shrink-0">
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="w-12 h-12 rounded-lg object-contain"
                                />
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-10 h-10 flex items-center justify-center rounded-lg bg-amber-50 hover:bg-gray-200 transition-colors"
                                >
                                    <span className="sr-only">Close menu</span>
                                    <svg
                                        className="w-5 h-5 text-gray-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* Mobile Nav Items - Scrollable */}
                            <div className="flex-1 overflow-y-auto p-4 space-y-1">
                                {navItems.map((item, index) => {
                                    if (item.hasDropdown) {
                                        return (
                                            <div key={item.name}>
                                                <button
                                                    onClick={() =>
                                                        setIsMobileAboutOpen(
                                                            !isMobileAboutOpen
                                                        )
                                                    }
                                                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                                                        isAboutSectionActive()
                                                            ? "text-blue-600 bg-blue-50"
                                                            : "text-gray-700 hover:bg-gray-50"
                                                    }`}
                                                >
                                                    <span>{item.name}</span>
                                                    <ChevronDown
                                                        className={`w-5 h-5 transition-transform duration-200 ${
                                                            isMobileAboutOpen
                                                                ? "rotate-180"
                                                                : ""
                                                        }`}
                                                    />
                                                </button>

                                                {isMobileAboutOpen && (
                                                    <motion.div
                                                        initial={{
                                                            height: 0,
                                                            opacity: 0,
                                                        }}
                                                        animate={{
                                                            height: "auto",
                                                            opacity: 1,
                                                        }}
                                                        exit={{
                                                            height: 0,
                                                            opacity: 0,
                                                        }}
                                                        transition={{
                                                            duration: 0.2,
                                                        }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-4">
                                                            {aboutDropdownItems.map(
                                                                (
                                                                    dropdownItem
                                                                ) => (
                                                                    <a
                                                                        key={
                                                                            dropdownItem.name
                                                                        }
                                                                        href={
                                                                            dropdownItem.path
                                                                        }
                                                                        onClick={(
                                                                            e
                                                                        ) => {
                                                                            e.preventDefault();
                                                                            handleNavClick(
                                                                                dropdownItem.path
                                                                            );
                                                                        }}
                                                                        className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                                                                            isActive(
                                                                                dropdownItem.path
                                                                            )
                                                                                ? "text-blue-600 bg-blue-50"
                                                                                : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                                                                        }`}
                                                                    >
                                                                        {
                                                                            dropdownItem.name
                                                                        }
                                                                    </a>
                                                                )
                                                            )}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </div>
                                        );
                                    }

                                    return (
                                        <motion.a
                                            key={item.name}
                                            href={item.path}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                handleNavClick(item.path);
                                            }}
                                            className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                                                isActive(item.path)
                                                    ? "text-blue-600 bg-blue-50"
                                                    : "text-gray-700 hover:bg-gray-50"
                                            }`}
                                        >
                                            <span>{item.name}</span>
                                            {isActive(item.path) && (
                                                <div className="w-2 h-2 bg-blue-600 rounded-full" />
                                            )}
                                        </motion.a>
                                    );
                                })}
                            </div>

                            {/* Mobile Menu Footer - Demo Button */}
                            <div className="flex-shrink-0 p-4 bg-amber-50 border-t border-gray-200 space-y-3">
                                <button
                                    onClick={handleDemoClick}
                                    className="w-full py-3.5 px-6 rounded-xl text-base font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                                >
                                    Start Demo
                                </button>

                                {auth.isAuthenticated && (
                                    <button
                                        onClick={handleLogout}
                                        className="w-full py-3 px-6 rounded-xl text-base font-medium bg-red-50 text-red-600 hover:bg-red-100 transition-all duration-200"
                                    >
                                        Logout
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
