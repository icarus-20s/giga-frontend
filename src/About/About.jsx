import React, { useState, useEffect } from "react";
import {
    Users,
    BookOpen,
    Award,
    CheckCircle,
    Building2,
    Target,
    Eye,
    TrendingUp,
    Layers,
    Heart,
    Sparkles,
    Rocket,
    Brain,
    LifeBuoy,
    UserRound,
} from "lucide-react";
import Clients from "../Components/Clients";
import welcome from "../assets/welcome.jpg";
import { useNavigate } from "react-router-dom";
import sandip from "../assets/Team/sandip.jpg";
import saurav from "../assets/Team/saurav.jpg";
import yogesh from "../assets/Team/yogesh.jpg";
import suman from "../assets/Team/suman.jpg";
import santosh from "../assets/Team/santosh.jpg";

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
            <h2 className="text-4xl md:text-5xl text-blue-800 font-bold mb-6">
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

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
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
// ==================== WELCOME SECTION ====================
const WelcomeSection = () => {
    const navigate = useNavigate();

    return (
        <section className="w-full py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-indigo-50 overflow-hidden">
            {/* Full-Width Background with subtle wave or accent */}
            <div className="absolute inset-0 overflow-hidden opacity-30">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-400 rounded-full blur-3xl"></div>
            </div>

            <div className="relative w-full max-w-none">
                <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-20 px-6 sm:px-12 lg:px-20 xl:px-32">
                    {/* Left: Image */}
                    <div className="relative order-2 lg:order-1">
                        <div className="relative mx-auto max-w-2xl lg:max-w-none">
                            <img
                                src={welcome}
                                alt="Giga Infosoft Team in Action"
                                className="w-full h-auto rounded-3xl shadow-2xl object-cover lg:h-[600px] xl:h-[700px]"
                            />
                            {/* Floating Trust Badge - Updated */}
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-8 lg:-translate-x-0 lg:bottom-8 bg-white rounded-2xl shadow-xl px-6 py-4 flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center">
                                    <Sparkles className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-600 font-medium">
                                        Trusted by
                                    </p>
                                    <p className="text-xl font-bold text-gray-900">
                                        Growing Businesses
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content - Updated Text Only */}
                    <div className="order-1 lg:order-2 text-center lg:text-left space-y-8">
                        <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-semibold">
                            <Rocket className="w-5 h-5" />
                            Welcome to Giga Infosoft
                        </div>

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-6xl font-extrabold text-gray-900 leading-tight mt-6">
                            Elevate Your
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700">
                                Entire Business Operation
                            </span>
                        </h1>

                        <div className="space-y-6 text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 py-2">
                            <p>
                                At{" "}
                                <span className="font-bold text-blue-700">
                                    Giga Infosoft
                                </span>
                                , we deliver powerful, intelligent software that
                                streamlines accounting, HR, inventory, and
                                operations — all in one unified platform.
                            </p>
                            <p>
                                Designed for ambitious companies ready to
                                eliminate chaos, boost efficiency, and scale
                                with confidence.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6 pt-6 justify-center lg:justify-start">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg">
                                    <CheckCircle className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">
                                        Future-Proof
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Built to Scale with You
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 py-5">
                                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Heart className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900">
                                        Customer Obsessed
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Support That Feels Personal
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button
                            className="mt-8 px-10 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                            onClick={() => navigate("/services")}
                        >
                            Discover Our Solutions
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};
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

                            <h3 className="text-xl font-bold text-blue-800 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-indigo-600 transition-all">
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
// ==================== TEAM SECTION ====================
const TeamCard = ({ member, delay, isVisible }) => (
    <div
    className={`transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
    }`}
    style={{ transitionDelay: `${delay * 120}ms` }}
    >
        <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden border border-gray-100">
            {/* Photo */}
            <div className="relative w-full h-72 overflow-hidden rounded-t-3xl">
                <img
                    src={member.photo || "https://i.ibb.co/MBtjqXQ/user-placeholder.png"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>

            {/* Info */}
            <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                </h3>
                <p className="text-blue-700 text-sm mt-1 font-medium">
                    {member.position}
                </p>
                {member.description && (
                    <p className="text-gray-500 text-xs mt-3 leading-relaxed">
                        {member.description}
                    </p>
                )}

            </div>
        </div>
    </div>
);

const TeamSection = ({ teamMembers, isVisible }) => {
    const topTwo = teamMembers.slice(0, 2);
    const midFive = teamMembers.slice(2, 7);
    const lastFour = teamMembers.slice(7, 11);

    return (
        <section
            id="team"
            className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50"
        >
            <div className="w-full mx-auto text-center">
                <SectionHeader
                    badge="OUR TEAM"
                    title="Meet Our Experts"
                    description="The brilliant minds behind our innovative solutions"
                    badgeIcon={Users}
                    badgeColor="blue"
                />

                {/* === TOP EXECUTIVES ROW (2) === */}
                <div className="mt-16 flex justify-center gap-10">
                    {topTwo.map((member, index) => (
                        <div className="w-full max-w-xs">
                            <TeamCard
                                key={index}
                                member={member}
                                delay={index}
                                isVisible={isVisible.team}
                                highlight
                            />
                        </div>
                    ))}
                </div>

                {/* === MID MANAGEMENT ROW (5) === */}
                <div className="py-10 mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
                    {midFive.map((member, index) => (
                        <TeamCard
                            key={index}
                            member={member}
                            delay={index + 2}
                            isVisible={isVisible.team}
                        />
                    ))}
                </div>

                {/* === OTHER TEAM (4) === */}
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {lastFour.map((member, index) => (
                        <TeamCard
                            key={index}
                            member={member}
                            delay={index + 7}
                            isVisible={isVisible.team}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

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

    const teamMembers = [
        {
            name: "Mr. Govinda Pandey",
            position: "Managing Director",
            photo: "",
            description: "20+ years of experience in educational technology.",
        },
        {
            name: "Mr. Keshav Gautam",
            position: "Chief Executive Officer (CEO)",
            photo: "",
            description:
                "15+ years of experience in ERP and educational technology.",
        },
        {
            name: "Mr. Suman Paudyal",
            position: "Chief Technology Officer (CTO)",
            photo: suman,
            description: "10+ years of experience in software development.",
        },
        {
            name: "Mr. Santosh Pandey",
            position: "Chief Operation Officer (COO)",
            photo: santosh,
            description:
                "10+ years of experience in finance and operation management.",
        },
        {
            name: "Mr. Saurav Bhattarai",
            position: "Chief Implementation Officer (CIO)",
            photo: saurav,
            description: "8+ years of experience in system implementation.",
        },
        {
            name: "Mr. Ishwor Pandey",
            position: "Chief Customer Relationship Officer (CRO)",
            photo: "",
            description:
                "10+ years of experience in system implementation and customer relation.",
        },
        {
            name: "Mr. Gaurav Bhusal",
            position: "Senior Developer",
            photo: "",
            description: "8+ years of experience in software development.",
        },
        {
            name: "Mr. Yogesh Sapkota",
            position: "Senior Developer",
            photo: yogesh,
            description: "7+ years of experience in software development.",
        },
        {
            name: "Mr. Shandip Sharma",
            position: "Software Developer",
            photo: "",
            description: "4+ years of experience in software development.",
        },
        {
            name: "Mr. Ravi Sapkota",
            position: "Software Implementation Officer",
            photo: "",
            description: "3+ years of experience in software implementation.",
        },
        {
            name: "Ms. Manisha Adhikari",
            position: "Office Assistant",
            photo: "",
            description: "",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-x-hidden">
            <HeroSection isVisible={isVisible} />
            <StatsBanner stats={stats} isVisible={isVisible} />
            <WelcomeSection />
            <MissionVisionSection isVisible={isVisible} />
            <WhatSetsUsApartSection
                items={whatSetsUsApart}
                isVisible={isVisible}
            />
            <TeamSection teamMembers={teamMembers} isVisible={isVisible} />
            <Clients />
        </div>
    );
};

export default About;
