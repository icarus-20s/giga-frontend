import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import {
    ChevronRight,
    Code,
    Globe,
    Shield,
    Zap,
    Users,
    Award,
    Star,
    CheckCircle,
    Building2,
    TrendingUp,
    BookOpen,
    Layers,
} from "lucide-react";
import home from "../assets/home.avif";
import { clients } from "../Components/Clients";
import FadeUp from "../Components/Fadeup";

// ==================== CONSTANTS ====================
const ANIMATION_CONFIG = {
    testimonialInterval: 6000,
    statDelay: 0.15,
    impactDelay: 0.2,
};

const TESTIMONIAL_CATEGORIES = {
    SCHOOL: "school",
    HR: "hr",
};

// ==================== ANIMATION VARIANTS ====================
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

// ==================== DATA ====================
const STATS_DATA = [
    {
        number: "300+",
        label: "Happy Clients",
        icon: Users, // represents people/clients
    },
    {
        number: "5+",
        label: "Years of Excellence",
        icon: Award, // award icon fits excellence/achievement
    },
    {
        number: "200K+",
        label: "Active Users",
        icon: Users, // represents active users (slightly different from generic Users)
    },
    {
        number: "40+",
        label: "Team Members",
        icon: Building2, // office/team representation
    },
];

const SERVICES_DATA = [
    {
        name: "Giga School ERP",
        desc: "Smart, seamless school management in one powerful platform",
        icon: Users,
        features: [
            "Student & Parent Portal",
            "Online Fee Payment",
            "Examination Management",
            "Attendance & LMS",
        ],
    },
    {
        name: "Giga Corporate ERP",
        desc: "Drive growth with an all-in-one intelligent business suite",
        icon: Building2,
        features: [
            "Inventory & Sales",
            "CRM Integration",
            "Project Management",
            "Multi-branch Support",
        ],
    },
    {
        name: "Giga HR",
        desc: "Automate HR, empower teams, and boost workplace productivity",
        icon: Shield,
        features: [
            "Payroll Automation",
            "Leave & Attendance",
            "Performance Tracking",
            "Employee Self-Service",
        ],
    },
    {
        name: "Giga Accounting",
        desc: "Fast, precise, and effortless accounting for every business",
        icon: Award,
        features: [
            "Real-time Reporting",
            "GST & Tax Compliance",
            "Multi-currency",
            "Bank Reconciliation",
        ],
    },
];

const FEATURES_DATA = [
    {
        icon: Code,
        title: "Advanced Technology",
        description:
            "Cutting-edge solutions built with modern frameworks and best practices",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        icon: Shield,
        title: "Enterprise Security",
        description:
            "Bank-level security with end-to-end encryption and compliance standards",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        icon: Users,
        title: "User-Centric Design",
        description:
            "Intuitive interfaces designed for seamless user experience across all devices",
        gradient: "from-green-500 to-teal-500",
    },
    {
        icon: Award,
        title: "Global Scalability",
        description:
            "Cloud-native architecture supporting institutions of all sizes worldwide",
        gradient: "from-orange-500 to-red-500",
    },
];

const PRODUCTS_DATA = [
    {
        title: "Giga School ERP",
        description:
            "A powerful all-in-one platform that fully covers Academic, Financial, HR, and Administrative operations for schools and colleges — ensuring smooth management of students, staff, finances, and daily workflows within a single integrated system.",
        icon: BookOpen,
        color: "blue",
        features: [
            "Academic",
            "Financials",
            "Human Resource",
            "Administration",
        ],
    },
    {
        title: "Giga Corporate ERP",
        description:
            "A complete ERP solution that seamlessly integrates Accounting, Inventory, HR, Payroll, and CRM modules — enabling businesses to manage finances, operations, workforce, and customer relationships efficiently from a single unified platform.",
        icon: Layers,
        color: "green",
        features: [
            "Accounting",
            "Inventory",
            "Human Resource",
            "Payroll",
            "Leave & Attendance",
            "CRM",
        ],
    },
    {
        title: "Giga Accounting",
        description:
            "A comprehensive accounting system that streamlines Financial Management, Sales and Purchase processes, Inventory control, Pricing, Tax management, and overall business operations — providing accurate insights, smooth transactions, and complete control from a single powerful platform.",
        icon: TrendingUp,
        color: "purple",
        features: [
            "Financial Management",
            "Sales and Purchase Process",
            "Inventory Tracking",
            "Multi Branch and Multi Warehouse",
            "Multi Currency",
        ],
    },
    {
        title: "Giga HR",
        description:
            "A complete HR management system that centralizes Personal Information, Leave and Attendance tracking, Payroll processing, Performance Reviews, and workforce operations — ensuring smooth, accurate, and efficient HR workflows across the organization.",
        icon: Users,
        color: "orange",
        features: [
            "Personal Information System (PIS)",
            "Leave and Attendance Tracking",
            "Payroll Processing",
            "Performance Reviews",
        ],
    },
];

const IMPACT_STATS = [
    {
        stat: "300+ Clients",
        label: "Trusted Partners",
        description:
            "Trusted by over 200+ schools and 100+ corporates in Nepal, streamlining education and business operations efficiently.",
    },
    {
        stat: "200K+ Users",
        label: "Seamless Management",
        description:
            "Managing over 200k students and employees seamlessly through a single platform.",
    },
    {
        stat: "10M+ Transactions",
        label: "Transactions Processed",
        description:
            "Processed millions of transactions including fees, payrolls, and invoices with accuracy and speed.",
    },
];

const SCHOOL_ERP_TESTIMONIALS = [
    {
        school: "Ace Institute of Management",
        text: "Giga School ERP has made our fee and examination management effortless. Students can now pay fees online without any hassle, and the exam form application system has made the entire exam process smoother and more transparent. It's been a great upgrade for both students and staff.",
        author: "NB Chhetri",
        role: "IT Officer",
        photo: "src/assets/demo.avif",
    },
    {
        school: "Uniglobe College",
        text: "We use Giga ERP for internal and external examinations, LMS, attendance, and even fee management. The system keeps everything connected—teachers upload assignments, students track attendance, and our admin team manages staff attendance and payroll, all in one place.",
        author: "Bishal Bist",
        role: "IT Engineer",
        photo: "src/assets/demo.avif",
    },
    {
        school: "LRI School",
        text: "Our school uses almost every feature of Giga School ERP. From student admission to examination, library, payroll, and attendance—it has unified our operations. It's reliable, easy to use, and fits perfectly with our daily workflow.",
        author: "Deepak Joshi",
        role: "Chief Admin Officer",
        photo: "src/assets/demo.avif",
    },
    {
        school: "Gorkha School",
        text: "We rely on Giga School ERP for every part of our school operation. It keeps our academic, financial, and HR departments in sync. The support team is excellent, and the system keeps improving every year.",
        author: "K. Lama",
        role: "Principal",
        photo: "src/assets/demo.avif",
    },
    {
        school: "DAV School",
        text: "Giga ERP has simplified our fees and billing process. Parents can view due amounts and make payments on time, while our finance team saves hours of manual work. It's efficient and very dependable.",
        author: "M. Singh",
        role: "Finance Officer",
        photo: "src/assets/demo.avif",
    },
];

const HR_TESTIMONIALS = [
    {
        company: "Deluxe Securities",
        text: "Giga HR has made payroll and HR management simple and fast. We can now process salaries, manage leaves, and track employee records without the usual paperwork. It's accurate and saves a lot of time.",
        author: "Roshan Dahal",
        role: "General Manager",
        photo: "src/assets/demo.avif",
    },
    {
        company: "Birat Secuforce Pvt. Ltd.",
        text: "With Giga ERP, we handle accounting, inventory, HR, payroll, and attendance in one integrated system. It's helped us maintain better control over our operations and made reporting much easier.",
        author: "Sudarshan Chaulagain",
        role: "Managing Director",
        photo: "src/assets/demo.avif",
    },
    {
        company: "Prabhu Group",
        text: "We use Giga HR for inventory, payroll, attendance, and HR management across multiple branches. The centralized system keeps everything transparent and accessible. It's a powerful solution for a growing organization like ours.",
        author: "Nirmala Chaulagain",
        role: "HR Head",
        photo: "src/assets/demo.avif",
    },
];

// ==================== UTILITY COMPONENTS ====================
const AnimatedBackground = () => (
    <div className="absolute inset-0 overflow-hidden bg-[#0f172a]">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>
    </div>
);

const ScrollIndicator = () => (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
    </div>
);

// ==================== SECTION COMPONENTS ====================
const HeroSection = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <AnimatedBackground />

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <motion.div
                    className="space-y-8 text-white"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    <div className="space-y-4">
                        <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full text-sm font-medium text-blue-300 border border-blue-500/30">
                            <Zap size={16} className="mr-2" />
                            Trusted by 300+ Companies
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                            Smarter Systems for{" "}
                            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                Better Management, Every Day
                            </span>
                        </h1>
                        <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl">
                            We deliver smart, enterprise-grade solutions that
                            simplify operations and accelerate growth.
                        </p>
                    </div>
                </motion.div>

                <ServiceCards services={SERVICES_DATA.slice(0, 4)} />
            </div>
        </div>

        <ScrollIndicator />
    </section>
);

const ServiceCards = ({ services }) => (
    <div className="grid grid-cols-2 gap-4 lg:gap-6">
        {services.map((service, i) => {
            const IconComponent = service.icon;
            return (
                <div
                    key={i}
                    className="group bg-white/10 rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-transform duration-300 hover:scale-105"
                >
                    <div className="mb-4">
                        <IconComponent size={32} className="text-blue-600" />
                    </div>
                    <h3 className="font-bold text-white text-lg mb-2">
                        {service.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                        {service.desc}
                    </p>
                </div>
            );
        })}
    </div>
);

const StatCard = ({ stat, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
            duration: 0.7,
            delay: index * ANIMATION_CONFIG.statDelay,
            ease: "easeOut",
        }}
        className="text-center"
    >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl mb-4 group hover:scale-110 transition-transform">
            <stat.icon className="w-8 h-8 text-blue-600" />
        </div>
        <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
            {stat.number}
        </div>
        <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
    </motion.div>
);

const StatsSection = () => (
    <section id="stats" className="relative -mt-20 z-20 w-full px-0">
        <div className="max-w-none w-full">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {STATS_DATA.map((stat, index) => (
                        <StatCard key={index} stat={stat} index={index} />
                    ))}
                </div>
            </div>
        </div>
    </section>
);
const HowWeWorkSection = () => (
    <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden w-full"
    >
        <div className="w-full px-4 sm:px-6 lg:px-12">
            {/* Header */}
            <div className="text-center mb-20 w-full">
                <div className="inline-flex items-center px-5 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-800 mb-6">
                    <Award size={18} className="mr-2" />
                    Industry Leader Since 2000
                </div>

                <h2 className="text-4xl md:text-5xl  font-extrabold text-blue-800 mb-6">
                    How We Work
                </h2>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed w-full mx-auto">
                    At{" "}
                    <span className="font-bold text-blue-600">
                        Giga Infosoft
                    </span>
                    , we have a team of well trained and experienced information
                    technologists, business consultants, accountants, analysts,
                    educationists, providing solutions to various business
                    organizations. We develop high quality software that meets
                    today's industry standards.
                </p>
            </div>
            <br />

            <div className="grid lg:grid-cols-2 gap-20 items-center w-full">
                {/* Left Content */}
                <div className="space-y-12 w-full flex flex-col items-center lg:items-start">
                    <div className="space-y-6 w-full max-w-3xl">
                        <h3 className="text-3xl font-bold text-blue-800 text-center lg:text-left">
                            We Are Different
                        </h3>

                        <p className="text-lg text-gray-600 leading-relaxed">
                            We differentiate our service with expertise in
                            technology to deliver quality. Our goal is to
                            deliver world class applications with a premium
                            quality service while giving unmatched value to
                            enterprises worldwide at an affordable cost. We
                            believe in ‘Customer satisfaction is our
                            satisfaction’. We are confident that we can provide
                            the technical expertise, experience & value that
                            your organization requires without adding any
                            significant financial burden .
                        </p>
                    </div>

                    {/* Feature Points */}
                    <div className="space-y-6 w-full max-w-3xl py-5">
                        {[
                            {
                                icon: Zap,
                                colors: "from-blue-500 to-cyan-500",
                                title: "Expertise-Driven",
                                desc: "We deliver world-class applications using proven technology and deep domain knowledge.",
                            },
                            {
                                icon: Shield,
                                colors: "from-purple-500 to-pink-500",
                                title: "Customer-First Philosophy",
                                desc: "Your success is our priority. “Customer satisfaction is our satisfaction.”",
                            },
                            {
                                icon: Globe,
                                colors: "from-green-500 to-teal-500",
                                title: "Affordable Excellence",
                                desc: "Premium solutions at realistic prices — without compromising on quality or support.",
                            },
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4 py-3">
                                <div
                                    className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${item.colors} shadow-lg`}
                                >
                                    <item.icon className="w-6 h-6 text-white" />
                                </div>
                                <div className="text-gray-700">
                                    <h4 className="font-bold text-gray-900 mb-1">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full">
                        <a
                            href="/about"
                            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 
                            text-white font-semibold rounded-xl shadow-xl hover:scale-105 hover:from-blue-700 
                            hover:to-indigo-700 transition-all"
                        >
                            Learn More About Us
                            <ChevronRight className="ml-2" size={20} />
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-3xl -z-10 scale-110" />

                    <img
                        src={home}
                        className="w-full h-full object-cover"
                        alt="Giga Infosoft Team Collaboration"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center text-white">
                        <p className="text-2xl font-bold">Building Tomorrow,</p>
                        <p className="text-xl opacity-90">Together Today</p>
                    </div>
                </div>
            </div>
        </div>
    </motion.section>
);
const TopClients = ({ clients }) => {
    const displayedClients = clients?.slice(0, 5) || [];
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="relative w-full text-center mx-auto">
                {/* Section Header */}
                <div className="flex flex-col items-center justify-center text-center mb-16 lg:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center px-5 py-2 bg-blue-100 rounded-full text-sm font-semibold text-blue-800 mb-6 mx-auto"
                    >
                        Trusted by Industry Leaders
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4"
                    >
                        Visionary Executives and HR Professionals Trust and
                        Recommend Giga ERP
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto text-center leading-relaxed"
                    >
                        Proudly serving schools, corporations, and institutions
                        across Nepal and beyond
                    </motion.p>
                </div>

                {/* Clients Grid with Marquee */}
                <Marquee gradient={false} speed={50} pauseOnHover>
                    <div className="flex gap-12 justify-center py-5 pr-12">
                        {displayedClients.map((client, index) => (
                            <motion.div
                                key={client.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.05,
                                    ease: "easeOut",
                                }}
                                whileHover={{ scale: 1.12, y: -8 }}
                                className="relative group"
                            >
                                <div className="w-56 h-56 sm:w-60 sm:h-60 lg:w-64 lg:h-64 bg-white rounded-3xl shadow-xl border border-gray-100 flex items-center justify-center p-8 transition-all duration-500 hover:shadow-2xl hover:border-blue-200">
                                    <img
                                        src={client.logo}
                                        alt={client.name}
                                        className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-700 filter"
                                    />
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-5">
                                    <p className="text-white text-base font-medium">
                                        {client.name}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </section>
    );
};

const FeatureCard = ({ feature, index }) => {
    const IconComponent = feature.icon;
    return (
        <div
            className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100"
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl`}
            />

            <div className="relative z-10">
                <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                >
                    <IconComponent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                </p>
            </div>
        </div>
    );
};

const FeaturesSection = () => (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="w-full mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl py-5 font-bold text-blue-800 mb-6">
                    Our Core Values
                </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {FEATURES_DATA.map((feature, index) => (
                    <FeatureCard key={index} feature={feature} index={index} />
                ))}
            </div>
        </div>
    </section>
);

const ProductCard = ({ product }) => {
    const IconComponent = product.icon;

    const colorClasses = {
        blue: {
            gradient: "from-blue-500 to-blue-600",
            text: "text-blue-500",
            border: "hover:border-blue-200",
        },
        green: {
            gradient: "from-green-500 to-green-600",
            text: "text-green-500",
            border: "hover:border-green-200",
        },
        purple: {
            gradient: "from-purple-500 to-purple-600",
            text: "text-purple-500",
            border: "hover:border-purple-200",
        },
        orange: {
            gradient: "from-orange-500 to-orange-600",
            text: "text-orange-500",
            border: "hover:border-orange-200",
        },
    };

    const colors = colorClasses[product.color] || colorClasses.blue;

    return (
        <div
            className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 ${colors.border} transform hover:-translate-y-1 h-full flex flex-col py-2 w-full max-w-md mx-auto`}
        >
            <div className="p-6 flex-1 flex flex-col items-center">
                {/* Icon */}
                <div
                    className={`w-16 h-16 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                >
                    <IconComponent className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-blue-800 mb-3 text-center py-5">
                    {product.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center">
                    {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 border-t border-gray-100 pt-4 w-full">
                    {product.features.map((feature, j) => (
                        <li
                            key={j}
                            className="flex items-start gap-2 text-sm text-gray-600"
                        >
                            <span className={`${colors.text} mt-0.5 font-bold`}>
                                ✓
                            </span>
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const ProductsSection = () => {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8  bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 ">
            <div className="w-full mx-auto">
                {/* Header */}
                <div className="text-center mb-16 w-full">
                    <div className="inline-flex items-center px-4 py-1 bg-blue-100 rounded-full text-sm font-semibold text-blue-800 mb-4">
                        <Star size={16} className="mr-1" /> Long Term Solutions
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-800 mb-4 leading-tight">
                        Long-Term Solutions That<br />
                        Drive Success
                    </h2>
                    <p className="text-gray-600 text-base sm:text-lg py-5">
                        Accelerate your digital transformation with our proven,
                        industry-specific <br /> software products designed to
                        scale with your business.
                    </p>
                </div>

                {/* Cards */}
                <FadeUp>
                    <div className="grid gap-6 w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 py-2">
                        {PRODUCTS_DATA.map((product, i) => (
                            <ProductCard key={i} product={product} />
                        ))}
                    </div>
                </FadeUp>
            </div>
        </section>
    );
};

const ImpactStatCard = ({ item, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
            delay: index * ANIMATION_CONFIG.impactDelay,
            duration: 0.7,
        }}
        className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 hover:bg-white/20 transition-all flex flex-col items-center gap-3 sm:gap-4"
    >
        {/* Stat */}
        <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {item.stat}
        </div>
        {/* Label */}
        <div className="text-lg sm:text-xl font-semibold text-center">{item.label}</div>
        {/* Description */}
        <p className="text-sm sm:text-base text-blue-200 text-center max-w-xs leading-relaxed">
            {item.description}
        </p>
    </motion.div>
);

const ImpactSection = () => (
    <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden"
    >
        <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>
        <div className="w-full flex flex-col items-center justify-center text-center">
            <div className="mb-12 sm:mb-16">
                <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                    <Star className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    <span className="font-semibold text-xs sm:text-sm">OUR IMPACT</span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-4">
                    Our Unmatched Impact
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto px-4">
                    We measure our success by the tangible results our partners
                    achieve
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-10">
                {IMPACT_STATS.map((item, index) => (
                    <ImpactStatCard key={index} item={item} index={index} />
                ))}
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 text-center shadow-2xl max-w-4xl w-full mx-4 flex flex-col justify-center items-center ">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                    Let's Build Your Future Together
                </h3>
                <p className="text-base sm:text-lg lg:text-xl text-blue-100 max-w-2xl text-center">
                    If you're looking for solutions that grow with your
                    organization and provide sustained value, Giga Infosoft is
                    here to partner with you.
                </p>
            </div>
        </div>
    </motion.section>
);
const TestimonialCard = ({ testimonial }) => (
    <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-10 max-w-md w-full h-96 flex flex-col justify-between hover:scale-105 transition-transform overflow-hidden">
        <div className="flex justify-center mb-6">
            <img
                src={
                    testimonial.photo ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        testimonial.author
                    )}&background=fff&color=6366f1`
                }
                alt={testimonial.author}
                className="w-20 h-20 rounded-full object-cover border-4 border-white/30 shadow-xl"
            />
        </div>
        <blockquote className="text-xl text-center italic flex-1 overflow-y-auto px-4 scrollbar-thin scrollbar-thumb-white/30">
            "{testimonial.text}"
        </blockquote>
        <div className="text-center mt-6 space-y-1">
            <h4 className="font-bold text-lg">{testimonial.author}</h4>
            <p className="text-sm text-blue-200">{testimonial.role}</p>
            <p className="text-white/80 italic">
                {testimonial.school || testimonial.company}
            </p>
        </div>
    </div>
);

const TestimonialsSection = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [category, setCategory] = useState(TESTIMONIAL_CATEGORIES.SCHOOL);
    const activeList =
        category === TESTIMONIAL_CATEGORIES.SCHOOL
            ? SCHOOL_ERP_TESTIMONIALS
            : HR_TESTIMONIALS;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % activeList.length);
        }, ANIMATION_CONFIG.testimonialInterval);
        return () => clearInterval(interval);
    }, [activeList.length]);

    const handleCategoryChange = (newCategory) => {
        setCategory(newCategory);
        setCurrentTestimonial(0);
    };

    const handlePrevious = () => {
        setCurrentTestimonial(
            (prev) => (prev - 1 + activeList.length) % activeList.length
        );
    };

    const handleNext = () => {
        setCurrentTestimonial((prev) => (prev + 1) % activeList.length);
    };

    const getVisibleTestimonials = () => {
        const visibleCount =
            window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1;
        return Array.from(
            { length: visibleCount },
            (_, i) => activeList[(currentTestimonial + i) % activeList.length]
        );
    };

    return (
        <section className="relative py-16 sm:py-24 lg:py-32 text-white w-full overflow-hidden">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(135deg, rgba(59,130,246,0.9), rgba(147,51,234,0.9)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className="relative w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-8 sm:mb-10">
                    Client Testimonials
                </h2>

                <div className="flex justify-center gap-3 sm:gap-6 flex-wrap mb-8 sm:mb-12 lg:mb-16 py-4 sm:py-6 lg:py-10">
                    <button
                        onClick={() =>
                            handleCategoryChange(TESTIMONIAL_CATEGORIES.SCHOOL)
                        }
                        className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition ${
                            category === TESTIMONIAL_CATEGORIES.SCHOOL
                                ? "bg-white text-gray-900"
                                : "bg-white/20 hover:bg-white/30"
                        }`}
                    >
                        School ERP
                    </button>
                    <button
                        onClick={() =>
                            handleCategoryChange(TESTIMONIAL_CATEGORIES.HR)
                        }
                        className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base font-medium transition ${
                            category === TESTIMONIAL_CATEGORIES.HR
                                ? "bg-white text-gray-900"
                                : "bg-white/20 hover:bg-white/30"
                        }`}
                    >
                        HR & Corporate
                    </button>
                </div>

                <div className="flex justify-center items-stretch gap-4 sm:gap-6 lg:gap-8 mt-12 sm:mt-20 lg:mt-32 xl:mt-44 w-full flex-wrap">
                    {getVisibleTestimonials().map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="flex-1 min-w-[280px] sm:min-w-[300px] max-w-[350px]"
                        >
                            <TestimonialCard testimonial={testimonial} />
                        </div>
                    ))}
                </div>

                <button
                    onClick={handlePrevious}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 hidden sm:flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/20 hover:bg-white/40 rounded-full text-2xl sm:text-3xl lg:text-4xl transition backdrop-blur-sm shadow-lg"
                    aria-label="Previous testimonial"
                >
                    ←
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 hidden sm:flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white/20 hover:bg-white/40 rounded-full text-2xl sm:text-3xl lg:text-4xl transition backdrop-blur-sm shadow-lg"
                    aria-label="Next testimonial"
                >
                    →
                </button>

                <p className="text-center mt-6 sm:mt-8 text-xs sm:text-sm text-white/60 sm:hidden">
                    Swipe to see more testimonials
                </p>
            </div>
        </section>
    );
};
// ==================== MAIN COMPONENT ====================
const Home = () => {
    return (
        <main className="min-h-screen bg-white">
            <HeroSection />
            <StatsSection />
            <HowWeWorkSection />
            <ProductsSection product={PRODUCTS_DATA} />
            <TopClients clients={clients} />
            <FeaturesSection />
            <ImpactSection />
            <TestimonialsSection />
        </main>
    );
};

export default Home;
