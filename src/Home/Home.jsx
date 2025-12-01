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
import { clients } from "../Components/Clients";

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
    number: "50+",
    label: "Businesses Powered",
    icon: Building2,
  },
  {
    number: "4+",
    label: "Years of Excellence",
    icon: Award,
  },
  {
    number: "50K+",
    label: "Active Users Daily",
    icon: Users,
  },
  {
    number: "40%",
    label: "Avg. Cost Reduction",
    icon: TrendingUp,
  },
];
const longTermSolutions = [
    {
        title: "School Management System",
        description:
            "Revolutionize education management with a comprehensive platform that streamlines everything—from centralizing student data to enhancing parent-staff communication.",
        icon: BookOpen,
        color: "blue",
        features: [
            "Student Lifecycle Management",
            "Parent-Teacher Portal",
            "Attendance Tracking",
            "Report Card Generation",
        ],
    },
    {
        title: "Accounting System",
        description:
            "Experience financial clarity like never before. Simplify bookkeeping, invoicing, payroll, and analytics, enabling businesses to make informed decisions.",
        icon: TrendingUp,
        color: "green",
        features: [
            "Real-time Reporting",
            "Invoice Management",
            "Payroll Processing",
            "Tax Compliance",
        ],
    },
    {
        title: "Inventory & Assets Management",
        description:
            "Outsmart inefficiencies with real-time tracking and waste reduction. Designed for dynamic markets to ensure your business stays ahead.",
        icon: Layers,
        color: "purple",
        features: [
            "Real-time Tracking",
            "Waste Reduction",
            "Asset Depreciation",
            "Smart Alerts",
        ],
    },
    {
        title: "HR Management System",
        description:
            "From recruitment to payroll and compliance, we provide the tools you need to build a thriving workforce and improve employee engagement.",
        icon: Users,
        color: "orange",
        features: [
            "Recruitment Pipeline",
            "Performance Reviews",
            "Leave Management",
            "Employee Self-Service",
        ],
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
        name: "Giga School ERP",
        desc: "Complete educational management system with student tracking, grade management, and parent communication tools",
        icon: Users,
        features: [
            "Student Management",
            "Grade Tracking",
            "Parent Portal",
            "Attendance System",
        ],
    },
    {
        name: "Giga Accounting",
        desc: "Advanced financial management with real-time analytics and automated reporting",
        icon: Award,
        features: [
            "Financial Reporting",
            "Tax Management",
            "Audit Trails",
            "Multi-currency",
        ],
    },
    {
        name: "Giga HRMS",
        desc: "Complete human resource management with payroll, attendance, and performance tracking",
        icon: Shield,
        features: [
            "Payroll Management",
            "Performance Reviews",
            "Leave Management",
            "Recruitment",
        ],
    },
    {
        name: "Giga IMS",
        desc: "Smart inventory and procurement system with predictive analytics",
        icon: Zap,
        features: [
            "Stock Tracking",
            "Supplier Management",
            "Order Automation",
            "Analytics",
        ],
    },
];

const IMPACT_STATS = [
    {
        stat: "98%",
        label: "Client Retention",
        description:
            "Our partners stay with us because we deliver consistent value",
    },
    {
        stat: "10x",
        label: "Faster Operations",
        description: "Average efficiency gain reported by our clients",
    },
    {
        stat: "Zero",
        label: "Downtime Critical Systems",
        description:
            "Thanks to our proactive monitoring and robust infrastructure",
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
                            Trusted by 150+ Companies
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
                    Industry Leader Since 2022
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
                        src="src/assets/home.avif"
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
                    Core Values
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
    return (
        <div className="flex flex-col bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl border border-gray-200 transition-transform duration-300 hover:-translate-y-1 w-full max-w-sm">
            <div className="mb-6 flex justify-center text-5xl sm:text-6xl text-blue-600">
                <IconComponent size={60} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 text-center">
                {product.name}
            </h3>
            <p className="text-gray-600 mb-6 text-center flex-grow leading-relaxed">
                {product.desc}
            </p>
            <ul className="space-y-2 text-center">
                {product.features.map((feature, j) => (
                    <li
                        key={j}
                        className="flex items-center justify-center text-sm sm:text-base text-gray-600"
                    >
                        <CheckCircle
                            size={16}
                            className="text-green-500 mr-2 flex-shrink-0"
                        />
                        {feature}
                    </li>
                ))}
            </ul>
        </div>
    );
};

const ProductsSection = () => (
    <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-blue-50 relative min-h-screen flex items-center justify-center overflow-hidden"
    >
        <div className="relative w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <div className="text-center mb-20 max-w-3xl">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-800 mb-6 leading-tight">
                    Services We Offer
                </h2>
                <p className="py-10 text-lg sm:text-xl text-gray-600">
                    Accelerate your digital transformation with our proven,
                    industry-specific software products designed to scale with
                    your business.
                </p>
            </div>
            <div className="grid gap-10 w-full sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
                {PRODUCTS_DATA.map((product, i) => (
                    <ProductCard key={i} product={product} />
                ))}
            </div>
        </div>
    </motion.section>
);

const LongTermSolutionsSection = ({ longTermSolutions }) => {
    const colorMap = {
        blue: "from-blue-500 to-cyan-500",
        green: "from-green-500 to-emerald-500",
        purple: "from-purple-500 to-pink-500",
        orange: "from-orange-500 to-red-500",
    };

    return (
        <section className="py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header - Perfectly Centered */}
                <div className="flex flex-col items-center justify-center text-center mb-16 lg:mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-blue-100 rounded-full text-sm font-semibold text-blue-800 mb-6"
                    >
                        <Star className="w-5 h-5" />
                        Long-Term Impact
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4"
                    >
                        Long-Term Solutions That Drive Success
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
                    >
                        Our solutions are designed not just to meet immediate
                        needs but to deliver lasting benefits that drive
                        sustainable success.
                    </motion.p>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
                    {longTermSolutions.map((solution, index) => {
                        const Icon = solution.icon;
                        const gradient =
                            colorMap[solution.color] || colorMap.blue;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                }}
                                className="group bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2"
                            >
                                <div className="flex items-start gap-5 mb-6">
                                    <div
                                        className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}
                                    >
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                                        {solution.title}
                                    </h3>
                                </div>

                                <p className="text-gray-600 leading-relaxed mb-8">
                                    {solution.description}
                                </p>

                                <div className="space-y-3">
                                    {solution.features.map((feature, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3 text-gray-700"
                                        >
                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                            <span className="text-base">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
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
        className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all"
    >
        <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            {item.stat}
        </div>
        <div className="text-xl font-semibold mb-2">{item.label}</div>
        <p className="text-blue-200 text-center max-w-xs">{item.description}</p>
    </motion.div>
);

const ImpactSection = () => (
    <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="py-24 px-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden"
    >
        <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>
        <div className="w-full flex flex-col items-center justify-center text-center">
            <div className="mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                    <Star className="w-5 h-5 mr-2" />
                    <span className="font-semibold text-sm">OUR IMPACT</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Our Unmatched Impact
                </h2>
                <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                    We measure our success by the tangible results our partners
                    achieve
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-16 p-10 w-full max-w-7xl text-center">
                {IMPACT_STATS.map((item, index) => (
                    <ImpactStatCard key={index} item={item} index={index} />
                ))}
            </div>
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center shadow-2xl max-w-4xl w-full">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    Let's Build Your Future Together
                </h3>
                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
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
        <section className="relative py-32 text-white w-full overflow-hidden">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(135deg, rgba(59,130,246,0.9), rgba(147,51,234,0.9)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            <div className="relative w-full px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <h2 className="text-5xl font-extrabold text-center mb-10 ">
                    Client Testimonials
                </h2>

                <div className="flex justify-center gap-6 flex-wrap mb-16 py-10">
                    <button
                        onClick={() =>
                            handleCategoryChange(TESTIMONIAL_CATEGORIES.SCHOOL)
                        }
                        className={`px-8 py-3 rounded-full font-medium transition ${
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
                        className={`px-8 py-3 rounded-full font-medium transition ${
                            category === TESTIMONIAL_CATEGORIES.HR
                                ? "bg-white text-gray-900"
                                : "bg-white/20 hover:bg-white/30"
                        }`}
                    >
                        HR & Corporate
                    </button>
                </div>

                <div className="flex justify-center items-stretch gap-8 mt-32 lg:mt-44 w-full flex-wrap">
                    {getVisibleTestimonials().map((testimonial, idx) => (
                        <div
                            key={idx}
                            className="flex-1 min-w-[250px] max-w-[350px]"
                        >
                            <TestimonialCard testimonial={testimonial} />
                        </div>
                    ))}
                </div>

                <button
                    onClick={handlePrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 hidden sm:flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-white/20 hover:bg-white/40 rounded-full text-3xl lg:text-4xl transition backdrop-blur-sm shadow-lg"
                    aria-label="Previous testimonial"
                >
                    ←
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 hidden sm:flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 bg-white/20 hover:bg-white/40 rounded-full text-3xl lg:text-4xl transition backdrop-blur-sm shadow-lg"
                    aria-label="Next testimonial"
                >
                    →
                </button>

                <p className="text-center mt-8 text-sm text-white/60 sm:hidden">
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
            <ProductsSection />
            <TopClients clients={clients} />
            <FeaturesSection />
            <LongTermSolutionsSection longTermSolutions={longTermSolutions} />
            <ImpactSection />
            <TestimonialsSection />
        </main>
    );
};

export default Home;
