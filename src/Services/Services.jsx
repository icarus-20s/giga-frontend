import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import FadeUp from "../Components/Fadeup";
import accounting from "../assets/service/accounting.jpg";
import erp from "../assets/service/erp.png";
import hrms from "../assets/service/hrms.png";
import IMS from "../assets/service/IMS.webp";
import CallToAction from "../Components/CallToAction";

const services = [
    {
        id: 1,
        title: "GigaAccounting",
        description:
            "A comprehensive accounting solution designed to simplify your financial management. Track transactions, generate reports, and ensure compliance with ease.",
        path: "/services/accounting",
        image: accounting,
        features: [
            "Automated Invoicing",
            "Financial Reporting",
            "Expense Tracking",
        ],
    },
    {
        id: 2,
        title: "GigaHRMS",
        description:
            "Human Resource Management System to automate HR processes. Manage payroll, employee records, leave, and performance seamlessly.",
        path: "/services/hrms",
        image: hrms,
        features: [
            "Payroll Automation",
            "Leave & Attendance Management",
            "Performance Tracking",
        ],
    },
    {
        id: 3,
        title: "GigaIMS",
        description:
            "Inventory management system to optimize your stock and reduce wastage. Track inventory levels, manage suppliers, and generate reports easily.",
        path: "/services/ims",
        image: IMS,
        features: [
            "Stock Tracking",
            "Supplier Management",
            "Inventory Reports",
        ],
    },
    {
    id: 4,
    title: "GigaERP",
    description:
        "A complete Enterprise Resource Planning solution designed to unify all your business processes. From finance and HR to inventory and operations, GigaERP helps your organization operate efficiently, make data-driven decisions, and scale seamlessly.",
    path: "/services/erp",
    image: erp,
    features: [
        "Integrated Financial Management",
        "Human Resource Automation",
        "Inventory & Supply Chain Management",
        "Data Analytics & Reporting",
        "Customizable Workflows",
    ],
}

];


const Services = () => {
    const refs = useRef([]);
    const [visibleIds, setVisibleIds] = useState([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.dataset.id;
                        if (!visibleIds.includes(id)) {
                            setVisibleIds((prev) => [...prev, id]);
                        }
                    }
                });
            },
            { threshold: 0.2 }
        );

        refs.current.forEach((el) => el && observer.observe(el));

        return () => observer.disconnect();
    }, [visibleIds]);

    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                </div>
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
                {/* Header – Left Aligned */}
                <div className="max-w-7xl mx-auto">
                    <FadeUp>
                        <h1 className="text-2xl sm:text-2xl lg:text-2xl xl:text-6xl font-bold tracking-tighter">
                            <span className="text-white">Explore </span>
                            <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
                                services
                            </span>
                        </h1>
                    </FadeUp>

                    <p className="mt-8 text-xl sm:text-2xl text-gray-400 py-2 font-medium tracking-wider uppercase">
                        Innovative • Scalable • Future-ready
                    </p>
                </div>

                {/* Services Grid */}
                <div className="w-full mx-auto py-5">
                    {services.map((service, index) => (
                        <article
                            key={service.id}
                            data-id={service.id}
                            ref={(el) => (refs.current[index] = el)}
                            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 xl:gap-24 mb-32 lg:mb-40 last:mb-0 transition-all duration-700 ease-out ${
                                visibleIds.includes(service.id.toString())
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-16 opacity-0"
                            } ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
                        >
                            {/* Image Section */}
                            <div className="w-full lg:w-1/2">
                                <div className="relative overflow-hidden rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-500">
                                    <img
                                        src={service.image}
                                        alt={`${service.title} illustration`}
                                        className="w-full h-72 sm:h-80 lg:h-96 xl:h-[28rem] object-cover rounded-3xl"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-3xl pointer-events-none"></div>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className="w-full lg:w-1/2 text-center lg:text-left space-y-8">
                                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                                    <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 bg-clip-text text-transparent">
                                        {service.title}
                                    </span>
                                </h2>

                                <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                    {service.description}
                                </p>

                                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                                    {service.features.map((feature, idx) => (
                                        <span
                                            key={idx}
                                            className="px-5 py-3 bg-white/10 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium border border-white/20"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>

                                <Link
                                    to={service.path}
                                    className="inline-flex items-center gap-3 text-blue-400 font-semibold text-lg hover:text-cyan-300 transition-colors duration-300"
                                >
                                    Learn More{" "}
                                    <span className="text-xl">→</span>
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            <CallToAction />
        </section>
    );
};

export default Services;
