import {
    MdMail as Mail,
    MdPhone as Phone,
    MdLocationOn as MapPin,
} from "react-icons/md";
import { useState } from "react";

import {
    FaFacebook as Facebook,
    FaTwitter as Twitter,
    FaLinkedin as Linkedin,
    FaYoutube as Youtube,
} from "react-icons/fa";

import { HiChevronUp as ChevronUp } from "react-icons/hi";
import logo from "../assets/logo.jpg";
import api from "../Components/Api";
import Loader from "../Components/Loader";

const ProfessionalFooter = () => {
    const [email, setEmail] = useState("");
    const [subscribeStatus, setSubscribeStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleSubscribe = async (e) => {
        e.preventDefault();

        if (!email) {
            setSubscribeStatus("Please enter your email");
            return;
        }

        setLoading(true);

        try {
            const response = await api.post("emailstorage/", { email });

            if (response.status === 201) {
                setSubscribeStatus("Thank you for subscribing!");
            } else if (response.status === 200) {
                setSubscribeStatus("You are already subscribed.");
            }

            setEmail("");
        } catch (error) {
            setSubscribeStatus("Subscription failed. Please try again.");
        } finally {
            setLoading(false);
            setTimeout(() => setSubscribeStatus(""), 3000);
        }
    };

    const quickLinks = [
        { name: "About Us", href: "about" },
        { name: "Services", href: "services" },
        { name: "Careers", href: "career" },
        { name: "Contact", href: "contactus" },
        { name: "Products", href: "products" },
        { name: "Gallery", href: "gallery" },
    ];

    const services = [
        { name: "Cloud Solutions", href: "#cloud" },
        { name: "IT Consulting", href: "#consulting" },
        { name: "Digital Transform", href: "#digital" },
        { name: "System Integration", href: "#integration" },
    ];

    const support = [
        { name: "Help Center", href: "#help" },
        { name: "Documentation", href: "#docs" },
        { name: "Support Ticket", href: "#support" },
        { name: "Community", href: "#community" },
    ];

    const socialLinks = [
        {
            name: "Facebook",
            icon: Facebook,
            href: "https://www.facebook.com/GigaErpSoftwareNepal",
            color: "hover:text-blue-500",
        },
        {
            name: "Twitter",
            icon: Twitter,
            href: "https://www.facebook.com/GigaErpSoftwareNepal",
            color: "hover:text-sky-400",
        },
        {
            name: "LinkedIn",
            icon: Linkedin,
            href: "https://www.linkedin.com/company/gigainfosoft/about/",
            color: "hover:text-blue-600",
        },
        {
            name: "YouTube",
            icon: Youtube,
            href: "https://www.facebook.com/GigaErpSoftwareNepal",
            color: "hover:text-red-500",
        },
    ];

    return (
        <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="relative group">
                <button
                    onClick={scrollToTop}
                    className="absolute -top-6 right-6 z-20 w-12 h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center cursor-pointer"
                    aria-label="Scroll to top"
                >
                    <ChevronUp size={20} />
                </button>

                {/* Tooltip text */}
                <span className="absolute -top-12 right-0 px-2 py-1 text-sm text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Scroll to top
                </span>
            </div>

            <div className="relative z-10">
                {/* Main Content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                    {/* Top Section */}
                    <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
                        {/* Company Info - Takes 2 columns */}
                        <div className="lg:col-span-2">
                            {/* Logo and Company Name */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-11 h-11 rounded-xl flex items-center justify-center shadow-lg overflow-hidden">
                                    <img
                                        src={logo}
                                        alt="Giga Infosoft Logo"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div>
                                    <h2 className="text-2xl font-bold text-white">
                                        Giga Infosoft
                                    </h2>
                                    <p className="text-blue-300 text-sm">
                                        Technology Solutions
                                    </p>
                                </div>
                            </div>

                            <p className="text-slate-300 leading-relaxed mb-8 text-sm lg:text-base max-w-md">
                                Empowering businesses through innovative
                                technology solutions and digital transformation
                                services.
                            </p>

                            {/* Contact Info */}
                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-slate-300">
                                    <MapPin
                                        size={16}
                                        className="text-blue-400 shrink-0"
                                    />
                                    <span className="text-sm">
                                        Kathmandu, Nepal
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <Phone
                                        size={16}
                                        className="text-green-400 shrink-0"
                                    />
                                    <span className="text-sm">
                                        +977 9840073584
                                    </span>
                                </div>
                                <div className="flex items-center gap-3 text-slate-300">
                                    <Mail
                                        size={16}
                                        className="text-purple-400 shrink-0"
                                    />
                                    <span className="text-sm">
                                        info@gigainfosoft.com.np
                                    </span>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h4 className="text-white font-semibold mb-4 text-sm">
                                    Follow Us
                                </h4>
                                <div className="flex gap-3">
                                    {socialLinks.map((social) => {
                                        const IconComponent = social.icon;
                                        return (
                                            <a
                                                key={social.name}
                                                href={social.href}
                                                className={`w-10 h-10 bg-slate-700/50 rounded-lg flex items-center justify-center text-slate-300 hover:bg-slate-600/50 ${social.color} transition-all duration-300 hover:scale-105 backdrop-blur-sm`}
                                                aria-label={social.name}
                                            >
                                                <IconComponent size={18} />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                                Company
                            </h3>
                            <ul className="space-y-3">
                                {quickLinks.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-slate-400 hover:text-white transition-colors duration-200 text-sm block py-1"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                                Services
                            </h3>
                            <ul className="space-y-3">
                                {services.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-slate-400 hover:text-white transition-colors duration-200 text-sm block py-1"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support & Newsletter */}
                        <div>
                            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
                                Support
                            </h3>
                            <ul className="space-y-3 mb-8">
                                {support.map((link, index) => (
                                    <li key={index}>
                                        <a
                                            href={link.href}
                                            className="text-slate-400 hover:text-white transition-colors duration-200 text-sm block py-1"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            {/* Newsletter */}
                            <div>
                                <h4 className="text-white font-semibold mb-3 text-sm">
                                    Newsletter
                                </h4>
                                <p className="text-slate-400 text-xs mb-4 leading-relaxed">
                                    Get updates on latest tech trends
                                </p>
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Your email"
                                        value={email}
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        className="flex-1 px-3 py-2 bg-slate-700/50 border border-slate-600/50 rounded-l-lg text-white placeholder-slate-400 text-xs focus:outline-none focus:border-blue-500 focus:bg-slate-600/50 transition-colors backdrop-blur-sm"
                                        disabled={loading}
                                    />
                                    <button
                                        onClick={handleSubscribe}
                                        className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg transition-colors text-xs font-medium"
                                        disabled={loading}
                                    >
                                        {loading ? "Joining..." : "Join"}
                                    </button>
                                </div>

                                {loading && <Loader />}
                                {subscribeStatus && (
                                    <p className="text-xs mt-1 text-white">
                                        {subscribeStatus}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-slate-700/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
                                <p className="text-slate-400 text-xs">
                                    © 2025 Giga Infosoft Pvt. Ltd. All rights
                                    reserved.
                                </p>
                                <div className="hidden sm:block w-1 h-1 bg-slate-600 rounded-full"></div>
                            </div>

                            {/* Legal Links */}
                            <div className="flex flex-wrap gap-4 text-xs">
                                <a
                                    href="#privacy"
                                    className="text-slate-400 hover:text-white transition-colors"
                                >
                                    Privacy
                                </a>
                                <a
                                    href="#terms"
                                    className="text-slate-400 hover:text-white transition-colors"
                                >
                                    Terms
                                </a>
                                <a
                                    href="#cookies"
                                    className="text-slate-400 hover:text-white transition-colors"
                                >
                                    Cookies
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default ProfessionalFooter;
