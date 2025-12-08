import {
    MdMail as Mail,
    MdPhone as Phone,
    MdLocationOn as MapPin,
} from "react-icons/md";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { HiChevronUp as ChevronUp } from "react-icons/hi";
import { useState } from "react";
import logo from "../assets/logo.jpg";
import api from "../Components/Api";
import Loader from "../Components/Loader";
import { useNavigate } from "react-router-dom";

const ProfessionalFooter = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [subscribeStatus, setSubscribeStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email.trim()) {
            setSubscribeStatus("Please enter a valid email");
            return;
        }

        setLoading(true);
        try {
            const response = await api.post("emailstorage/", { email });
            if (response.status === 201) {
                setSubscribeStatus("Thank you for subscribing!");
            } else if (response.status === 200) {
                setSubscribeStatus("You're already subscribed!");
            }
            setEmail("");
        } catch (error) {
            setSubscribeStatus("Subscription failed. Please try again.");
        } finally {
            setLoading(false);
            setTimeout(() => setSubscribeStatus(""), 4000);
        }
    };

    const quickLinks = [
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Careers", href: "/career" },
        { name: "Contact", href: "/contactus" },
        { name: "Products", href: "/products" },
        { name: "Gallery", href: "/gallery" },
    ];

    const services = [
        { name: "Accounting System", href: "/products/giga-accounting" },
        { name: "HRMS System", href: "/products/giga-hrms" },
        { name: "ERP System", href: "/products/giga-erp" },
        { name: "IMS System", href: "/products/giga-ims" },
    ];

    const socialLinks = [
        {
            name: "Facebook",
            icon: FaFacebook,
            href: "https://www.facebook.com/GigaErpSoftwareNepal",
            color: "hover:text-blue-600",
        },
        {
            name: "Twitter",
            icon: FaTwitter,
            href: "https://twitter.com/GigaInfosoft",
            color: "hover:text-sky-500",
        },
        {
            name: "LinkedIn",
            icon: FaLinkedin,
            href: "https://www.linkedin.com/company/gigainfosoft",
            color: "hover:text-blue-700",
        },
        {
            name: "YouTube",
            icon: FaYoutube,
            href: "https://www.youtube.com/@GigaInfosoft", // Fixed incorrect link
            color: "hover:text-red-600",
        },
    ];

    return (
        <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
            {/* Scroll to Top Button */}
            <div className="relative group">
                <button
                    onClick={scrollToTop}
                    className="absolute -top-6 right-6 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:scale-110"
                    aria-label="Scroll to top"
                >
                    <ChevronUp size={24} />
                </button>
                <span className="absolute -top-12 right-0 whitespace-nowrap rounded bg-gray-800 px-3 py-1 text-sm opacity-0 transition-opacity group-hover:opacity-100">
                    Scroll to top
                </span>
            </div>

            <div className="relative z-10">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
                    {/* Main Grid */}
                    <div className="grid gap-10 lg:grid-cols-4 lg:gap-12">
                        {/* Company Info Column */}
                        <div className="lg:col-span-1">
                            <div className="mb-8 flex items-center gap-4">
                                <div className="h-12 w-12 overflow-hidden rounded-xl shadow-lg">
                                    <img
                                        src={logo}
                                        alt="Giga Infosoft Logo"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">
                                        Giga Infosoft
                                    </h2>
                                    <p className="text-sm text-blue-400">
                                        Technology Solutions
                                    </p>
                                </div>
                            </div>

                            <p className="mb-8 max-w-md text-sm leading-relaxed text-slate-300">
                                Empowering businesses through innovative
                                technology solutions and digital transformation
                                services.
                            </p>

                            {/* Contact Info */}
                            <div className="mb-8 space-y-4 py-5">
                                <div className="flex items-center gap-3 text-slate-300">
                                    <MapPin
                                        size={18}
                                        className="text-blue-400"
                                    />
                                    <span className="text-sm">
                                        Kathmandu, Nepal
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <Phone
                                        size={18}
                                        className="text-green-400"
                                    />
                                    <span className="text-sm">
                                        +977 9840073584
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <Mail
                                        size={18}
                                        className="text-purple-400"
                                    />
                                    <span className="text-sm">
                                        info@gigainfosoft.com.np
                                    </span>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                                    Follow Us
                                </h4>
                                <div className="flex gap-3">
                                    {socialLinks.map(
                                        ({ name, icon: Icon, href, color }) => (
                                            <a
                                                key={name}
                                                href={href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={name}
                                                className={`flex h-10 w-10 items-center justify-center rounded-lg bg-slate-700/50 text-slate-300 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-slate-600/70 ${color}`}
                                            >
                                                <Icon size={20} />
                                            </a>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
                                Company
                            </h3>
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="block py-1 text-sm text-slate-400 transition-colors hover:text-white"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
                                Services & Products
                            </h3>
                            <ul className="space-y-3">
                                {services.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.href}
                                            className="block py-1 text-sm text-slate-400 transition-colors hover:text-white"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h3 className="mb-6 text-sm font-semibold uppercase tracking-wider text-white">
                                Stay Updated
                            </h3>
                            <p className="mb-5 text-sm text-slate-400">
                                Subscribe to get updates on the latest tech
                                trends and offers.
                            </p>

                            <form
                                onSubmit={handleSubscribe}
                                className="flex flex-col gap-3"
                            >
                                <div className="flex">
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        placeholder="Enter your email"
                                        disabled={loading}
                                        className="w-full rounded-l-lg border border-slate-600/50 bg-slate-700/50 px-4 py-2.5 text-sm text-white placeholder-slate-400 backdrop-blur-sm focus:border-blue-500 focus:outline-none focus:bg-slate-600/50"
                                    />
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="rounded-r-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 disabled:opacity-70"
                                    >
                                        {loading ? "Joining..." : "Join"}
                                    </button>
                                </div>
                                {loading && <Loader />}
                                {subscribeStatus && (
                                    <p
                                        className={`text-xs ${
                                            subscribeStatus.includes("Thank") ||
                                            subscribeStatus.includes("already")
                                                ? "text-green-400"
                                                : "text-red-400"
                                        }`}
                                    >
                                        {subscribeStatus}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-700/50">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-400 sm:flex-row">
                            <p>
                                © 2025 Giga Infosoft Pvt. Ltd. All rights
                                reserved.
                            </p>

                            <p className="text-xs flex items-center gap-1">
                                <button
                                    onClick={() =>
                                        navigate("/page/privacy-policy")
                                    }
                                    className="underline hover:text-white transition-colors hover:cursor-pointer"
                                >
                                    Privacy Policy
                                </button>
                                |<span>Crafted with passion in Nepal</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ProfessionalFooter;
