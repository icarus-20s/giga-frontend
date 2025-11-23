import React, { useState, useEffect } from "react";
import {
    Users,
    Shield,
    Code,
    BookOpen,
    Award,
    ArrowRight,
    CheckCircle,
    Star,
    Building2,
    Target,
    Eye,
    Zap,
    TrendingUp,
    Layers,
    Heart,
    Sparkles,
    Rocket,
    Brain,
    LifeBuoy,
} from "lucide-react";
import Clients from "../Components/Clients";
const sandip = "src/assets/Team/sandip.jpg";
const saurav = "src/assets/Team/saurav.jpg";
const yogesh = "src/assets/Team/suman.jpg";
const suman = "src/assets/Team/yogesh.jpg";
const santosh = "src/assets/Team/santosh.jpg";

// ==================== SECTION HEADER COMPONENT ====================
const SectionHeader = ({
    badge,
    title,
    description,
    badgeIcon: BadgeIcon,
    badgeColor = "blue",
}) => {
    const badgeColors = {
        blue: "bg-blue-100 text-blue-600",
        indigo: "bg-indigo-100 text-indigo-600",
    };

    return (
        <div className="text-center mb-16">
            <div
                className={`inline-flex items-center px-4 py-2 ${badgeColors[badgeColor]} rounded-full mb-4`}
            >
                <BadgeIcon className="w-5 h-5 mr-2" />
                <span className="font-semibold text-sm">{badge}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {title}
            </h2>
            {description && (
                <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center !text-center !mx-auto block py-5">
                    {description}
                </p>
            )}
        </div>
    );
};

// ==================== HERO SECTION ====================
const HeroSection = ({ isVisible }) => (
    <section
        id="hero"
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"
    >
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
            </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div
                className={`transform transition-all duration-1000 ${
                    isVisible.hero
                        ? "translate-y-0 opacity-100"
                        : "translate-y-20 opacity-0"
                }`}
            >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                    Building a Future
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                        Like No Other
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
                    We don't just deliver software—we deliver success, growth,
                    and transformation.
                    <br className="hidden md:block" />
                    We are the partner that makes it happen.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                </div>
            </div>
        </div>
    </section>
);

// ==================== STATS BANNER ====================
const StatsBanner = ({ stats, isVisible }) => (
    <section id="stats" className="relative -mt-20 z-20 w-full px-0">
        <div className="max-w-none w-full">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`text-center transform transition-all duration-700 ${
                                isVisible.stats
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-10 opacity-0"
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl mb-4 group hover:scale-110 transition-transform">
                                <stat.icon className="w-8 h-8 text-blue-600" />
                            </div>
                            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                                {stat.number}
                            </div>
                            <div className="text-sm text-gray-600 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

// ==================== MISSION & VISION ====================
const MissionVisionSection = ({ isVisible }) => (
    <section id="mission" className="py-24 px-0">
        <div className="w-full mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Mission */}
                <div
                    className={`transform transition-all duration-1000 ${
                        isVisible.mission
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-20 opacity-0"
                    }`}
                >
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow">
                        <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full mb-6">
                            <Target className="w-5 h-5 text-blue-600 mr-2" />
                            <span className="text-blue-600 font-semibold text-sm">
                                OUR MISSION
                            </span>
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Empowering Organizations to Unlock Their Full
                            Potential
                        </h2>

                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Our mission is to design and deliver intuitive,
                            scalable, and high-quality software systems that
                            streamline school management, accounting, and HR
                            processes.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Deliver cutting-edge educational software",
                                "Ensure seamless user experiences",
                                "Provide exceptional customer support",
                                "Foster innovation in education technology",
                            ].map((item, index) => (
                                <div key={index} className="flex items-start">
                                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-gray-700">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Vision */}
                <div
                    className={`transform transition-all duration-1000 delay-300 ${
                        isVisible.mission
                            ? "translate-x-0 opacity-100"
                            : "translate-x-20 opacity-0"
                    }`}
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl blur-2xl opacity-20"></div>
                        <div className="relative bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl p-8 md:p-10 text-white shadow-2xl">
                            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6">
                                <Eye className="w-5 h-5 mr-2" />
                                <span className="font-semibold text-sm">
                                    OUR VISION
                                </span>
                            </div>

                            <h3 className="text-3xl font-bold mb-6">
                                Leading the Global Software Revolution
                            </h3>

                            <p className="text-blue-100 text-lg leading-relaxed mb-8">
                                To become a global leader in providing
                                innovative and accessible software solutions
                                that transform how educational institutions and
                                businesses operate.
                            </p>

                            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                                <h4 className="text-xl font-semibold mb-4">
                                    Global Impact by 2030
                                </h4>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="text-center">
                                        <div className="text-4xl font-bold mb-2">
                                            1M+
                                        </div>
                                        <div className="text-sm text-blue-200">
                                            Students Impacted
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-4xl font-bold mb-2">
                                            50+
                                        </div>
                                        <div className="text-sm text-blue-200">
                                            Countries Reached
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

// ==================== WHAT SETS US APART ====================
const WhatSetsUsApartSection = ({ items, isVisible }) => (
    <section id="sets-apart" className="py-24 bg-white px-0">
        <div className="w-full mx-auto">
            <SectionHeader
                badge="WHY CHOOSE US"
                title="What Sets Us Apart"
                description="While others deliver short-term fixes, we focus on long-term transformation crafted with sustainability and scalability in mind."
                badgeIcon={Sparkles}
                badgeColor="indigo"
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                            isVisible["sets-apart"]
                                ? "translate-y-0 opacity-100"
                                : "translate-y-10 opacity-0"
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <div
                            className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                        ></div>

                        <div className="relative z-10">
                            <div
                                className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                            >
                                <item.icon className="w-7 h-7 text-white" />
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-indigo-600 transition-all">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ==================== LONG-TERM SOLUTIONS ====================
const LongTermSolutionsSection = ({ solutions, isVisible }) => {
    const colorClasses = {
        blue: "from-blue-500 to-cyan-500",
        green: "from-green-500 to-emerald-500",
        purple: "from-purple-500 to-pink-500",
        orange: "from-orange-500 to-red-500",
    };

    return (
        <section
            id="solutions"
            className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50"
        >
            <div className="w-full mx-auto ">
                <SectionHeader
                    badge="OUR SOLUTIONS"
                    title="Long-Term Solutions That Drive Success"
                    description="Our solutions are designed not just to meet immediate needs but to deliver lasting benefits that drive sustainable success."
                    badgeIcon={Rocket}
                    badgeColor="blue"
                />

                <div className="grid md:grid-cols-2 gap-8">
                    {solutions.map((solution, index) => (
                        <div
                            key={index}
                            className={`group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2 ${
                                isVisible.solutions
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-10 opacity-0"
                            }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="flex items-start mb-6">
                                <div
                                    className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${
                                        colorClasses[solution.color]
                                    } rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mr-9`}
                                >
                                    <solution.icon className="w-8 h-4 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2 pl-2">
                                        {solution.title}
                                    </h3>
                                </div>
                            </div>

                            <p className="text-gray-600 leading-relaxed mb-6">
                                {solution.description}
                            </p>

                            <div className="grid grid-cols-2 gap-3">
                                {solution.features.map((feature, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center text-sm text-gray-700"
                                    >
                                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ==================== FEATURES ====================
const FeaturesSection = ({ features, isVisible }) => (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="w-full mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl py-5 font-bold text-gray-900 mb-6">
                    Why Choose Giga Infosoft
                </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-gray-100 ${
                            isVisible.features
                                ? "translate-y-0 opacity-100"
                                : "translate-y-20 opacity-0"
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <div
                            className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity rounded-2xl`}
                        ></div>

                        <div className="relative z-10">
                            <div
                                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl mb-6 shadow-lg group-hover:scale-110 transition-transform`}
                            >
                                <feature.icon className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ==================== IMPACT SECTION ====================
const ImpactSection = ({ impactStats, isVisible }) => (
    <section
        id="impact"
        className="py-24 px-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden"
    >
        <div className="relative w-full inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>

        <div className="w-full flex flex-col items-center justify-center text-center">
            <div className="mb-16 flex flex-col items-center justify-center text-center">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                    <Star className="w-5 h-5 mr-2" />
                    <span className="font-semibold text-sm">OUR IMPACT</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Our Unmatched Impact
                </h2>

                <p className="text-xl text-blue-100 max-w-3xl mx-auto text-center !text-center">
                    We measure our success by the tangible results our partners
                    achieve
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16 p-10 w-full max-w-7xl text-center">
                {impactStats.map((item, index) => (
                    <div
                        key={index}
                        className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all text-center flex flex-col items-center justify-center ${
                            isVisible.impact
                                ? "translate-y-0 opacity-100"
                                : "translate-y-10 opacity-0"
                        }`}
                        style={{ transitionDelay: `${index * 150}ms` }}
                    >
                        <div className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                            {item.stat}
                        </div>

                        <div className="text-xl font-semibold mb-2">
                            {item.label}
                        </div>

                        <p className="text-blue-200 text-center max-w-xs">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-12 text-center shadow-2xl max-w-4xl w-full flex flex-col items-center justify-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    Let's Build Your Future Together
                </h3>

                <p className="text-xl text-blue-100 mb-8 max-w-2xl text-center">
                    If you're looking for solutions that grow with your
                    organization and provide sustained value, Giga Infosoft is
                    here to partner with you.
                </p>

                <button className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all flex items-center mx-auto">
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                </button>
            </div>
        </div>
    </section>
);

// ==================== TEAM SECTION ====================
const TeamSection = ({ teamMembers, isVisible }) => (
    <section
        id="team"
        className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50"
    >
        <div className="w-full mx-auto">
            <SectionHeader
                badge="OUR TEAM"
                title="Meet Our Experts"
                description="The brilliant minds behind our innovative solutions"
                badgeIcon={Users}
                badgeColor="indigo"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {teamMembers.map((member, index) => (
                    <div
                        key={index}
                        className={`group transform transition-all duration-700 ${
                            isVisible.team
                                ? "translate-y-0 opacity-100"
                                : "translate-y-10 opacity-0"
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all">
                            <div className="relative h-80 overflow-hidden">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>

                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                    <h3 className="font-bold text-lg mb-1">
                                        {member.name}
                                    </h3>
                                    <p className="text-blue-400 text-sm font-medium mb-2">
                                        {member.position}
                                    </p>
                                    <p className="text-xs text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                        {member.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

// ==================== MAIN COMPONENT ====================
const About = () => {
    const [isVisible, setIsVisible] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible((prev) => ({
                            ...prev,
                            [entry.target.id]: true,
                        }));
                    }
                });
            },
            { threshold: 0.1 }
        );

        document
            .querySelectorAll("section[id]")
            .forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const stats = [
        { number: "200+", label: "Schools Transformed", icon: Building2 },
        { number: "10+", label: "Years Experience", icon: Award },
        { number: "100K+", label: "Students Served", icon: Users },
        { number: "30%", label: "Efficiency Increase", icon: TrendingUp },
    ];

    const whatSetsUsApart = [
        {
            title: "Future Proof Design",
            description:
                "Our systems are built to grow with you. As your organization evolves, our solutions adapt seamlessly, ensuring you're always equipped to meet new challenges.",
            icon: Rocket,
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            title: "Sustainable Solutions",
            description:
                "We minimize inefficiencies and maximize productivity, helping you save time, resources, and costs. Every feature delivers measurable results that last.",
            icon: Layers,
            gradient: "from-green-500 to-emerald-500",
        },
        {
            title: "Unmatched Experience",
            description:
                "With decades of experience and innovative thinkers, we're constantly redefining what's possible. Our expertise keeps you at the forefront of technology.",
            icon: Brain,
            gradient: "from-purple-500 to-pink-500",
        },
        {
            title: "Unstoppable Passion",
            description:
                "Technology is more than our work; it's our passion. We pour our hearts into every solution, ensuring each product is intuitive and impactful.",
            icon: Heart,
            gradient: "from-red-500 to-orange-500",
        },
        {
            title: "Innovation First",
            description:
                "We don't follow trends—we set them. Our commitment to innovation means you always get cutting-edge solutions that give you a competitive advantage.",
            icon: Sparkles,
            gradient: "from-indigo-500 to-purple-500",
        },
        {
            title: "Comprehensive Support",
            description:
                "We're not just a provider; we're your partner. From consultation to ongoing support, we're by your side every step of the way.",
            icon: LifeBuoy,
            gradient: "from-yellow-500 to-amber-500",
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

    const teamMembers = [
        {
            name: "Saurav Bhattarai",
            position: "Co-Founder",
            image: saurav,
            description:
                "Visionary leader with 10+ years in educational technology",
        },
        {
            name: "Yogesh Sapkota",
            position: "Senior Developer",
            image: yogesh,
            description: "Full-stack expert specializing in scalable solutions",
        },
        {
            name: "Suman Paudyal",
            position: "Senior Developer",
            image: suman,
            description:
                "Backend architect with expertise in system optimization",
        },
        {
            name: "Santosh Pandey",
            position: "Implementation Specialist",
            image: santosh,
            description: "Expert in seamless software deployment and training",
        },
        {
            name: "Sandip Sharma",
            position: "Developer",
            image: sandip,
            description:
                "Frontend and backend developer focusing on clean code",
        },
    ];

    const features = [
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

    const impactStats = [
        {
            stat: "200+",
            label: "Schools Transformed",
            description:
                "Transformed into models of efficiency and academic excellence",
        },
        {
            stat: "30%",
            label: "Wastage Reduced",
            description:
                "Helping businesses reduce inventory wastage, saving millions annually",
        },
        {
            stat: "100+",
            label: "Hours Saved/Month",
            description:
                "Simplified HR for SMEs while improving employee satisfaction",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-x-hidden">
            <HeroSection isVisible={isVisible} />
            <StatsBanner stats={stats} isVisible={isVisible} />
            <MissionVisionSection isVisible={isVisible} />
            <WhatSetsUsApartSection
                items={whatSetsUsApart}
                isVisible={isVisible}
            />
            <LongTermSolutionsSection
                solutions={longTermSolutions}
                isVisible={isVisible}
            />
            <FeaturesSection features={features} isVisible={isVisible} />
            <ImpactSection impactStats={impactStats} isVisible={isVisible} />
            <TeamSection teamMembers={teamMembers} isVisible={isVisible} />
            <Clients />
        </div>
    );
};

export default About;
