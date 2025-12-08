import React from "react";

// ==================== STATIC CONTENT ====================
const LAST_UPDATED = "February 23, 2024";
const COMPANY_NAME = "Giga School ERP";
const COMPANY_LEGAL = "Giga Infosoft Pvt. Ltd.";
const CONTACT_EMAIL = "gigaimplementation@gmail.com";

const HERO_TITLE = "Privacy Policy";
const HERO_SUBTITLE =
    "Your privacy matters to us. Learn how we protect and manage your information.";

const TRUST_BADGES = [
    {
        icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
        label: "Secure Data",
    },
    {
        icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
        label: "GDPR Compliant",
    },
    {
        icon: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
        label: "Transparent",
    },
];

const SECTIONS = [
    {
        number: "1",
        title: "Introduction",
        content: `Welcome to ${COMPANY_NAME} ("we," "our," or "us"), a product of ${COMPANY_LEGAL}. This Privacy Policy is designed to help you understand how we collect, use, share, and safeguard your personal information. By using ${COMPANY_NAME}, you agree to the practices outlined in this policy.`,
    },
    {
        number: "2",
        title: "Information We Collect",
        subsections: [
            {
                subtitle: "2.1. User Information",
                text: `${COMPANY_NAME} may collect personal information such as names, contact details, and user credentials when you register.`,
                gradient: "from-blue-50 to-blue-100/50",
                border: "border-blue-600",
            },
            {
                subtitle: "2.2. Usage Information",
                text: "We gather data on how you interact with ${COMPANY_NAME}, including log files, IP addresses, browser type, and other usage information.",
                gradient: "from-indigo-50 to-indigo-100/50",
                border: "border-indigo-600",
            },
            {
                subtitle: "2.3. Student Information",
                text: `In the context of a school ERP software, ${COMPANY_NAME} may collect and store student information, such as grades, attendance records, and other educational data.`,
                gradient: "from-purple-50 to-purple-100/50",
                border: "border-purple-600",
            },
        ],
    },
    {
        number: "3",
        title: "How We Use Your Information",
        subsections: [
            {
                subtitle: "3.1. Providing Services",
                text: "We use the collected information to deliver and enhance the features and services of ${COMPANY_NAME}.",
                gradient: "from-blue-50 to-blue-100/50",
                border: "border-blue-600",
            },
            {
                subtitle: "3.2. Communication",
                text: `${COMPANY_NAME} may use your contact information to send important updates, announcements, and other relevant information.`,
                gradient: "from-indigo-50 to-indigo-100/50",
                border: "border-indigo-600",
            },
            {
                subtitle: "3.3. Improvement and Research",
                text: "We may use aggregated and anonymized data for research and improvement of ${COMPANY_NAME}.",
                gradient: "from-purple-50 to-purple-100/50",
                border: "border-purple-600",
            },
        ],
    },
    {
        number: "4",
        title: "Sharing Your Information",
        subsections: [
            {
                subtitle: "4.1. Third-Party Service Providers",
                text: `We may share your information that you allow with third-party service providers who assist us in providing and improving our services. The information that we share to third-party is governed by their privacy policies so we kindly request you to visit their privacy policies before allowing your information.`,
                gradient: "from-blue-50 to-blue-100/50",
                border: "border-blue-600",
            },
            {
                subtitle: "4.2. Legal Compliance",
                text: `${COMPANY_NAME} may disclose your information in response to legal requests or when necessary to protect our rights, users, or others.`,
                gradient: "from-indigo-50 to-indigo-100/50",
                border: "border-indigo-600",
            },
        ],
    },
    {
        number: "5",
        title: "Security",
        content:
            "We implement industry-standard security measures to protect your information from unauthorized access, disclosure, alteration, and destruction.",
    },
    {
        number: "6",
        title: "Your Choices",
        content: `You can control and manage your information through the settings provided in ${COMPANY_NAME}.`,
    },
    {
        number: "7",
        title: "Changes to this Privacy Policy",
        content:
            "We reserve the right to modify this Privacy Policy at any time. Updates will be posted on our website, and you are encouraged to review this policy periodically.",
    },
    {
        number: "8",
        title: "Contact Us",
        content: `If you have any questions, concerns, or requests regarding this Privacy Policy, please contact ${COMPANY_LEGAL} at `,
        highlightEmail: true,
    },
];
const AnimatedBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
    </div>
);

// ==================== MAIN COMPONENT ====================
const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
                <AnimatedBackground />
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute inset-0 bg-grid-pattern opacity-10" />
                </div>
                <div className="absolute inset-0 bg-black/30" />

                <div className="relative z-10 w-full max-w-4xl px-6 text-center">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-6">
                        Privacy{" "}
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                            Policy
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-4 leading-relaxed">
                        {HERO_SUBTITLE}
                    </p>
                    <p className="text-lg text-blue-200/80 mb-10">
                        Last Updated: {LAST_UPDATED}
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">
                        {TRUST_BADGES.map((badge, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full text-white text-sm font-medium"
                            >
                                <svg
                                    className="w-5 h-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d={badge.icon}
                                    />
                                </svg>
                                <span>{badge.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="relative px-6 py-20 lg:py-28">
                <div className="w-full mx-auto">
                    <div className="w-full bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                        <div className="p-8 md:p-12 lg:p-20 space-y-16">
                            {SECTIONS.map((section, index) => (
                                <div key={index} className="w-full">
                                    {/* Section Header */}
                                    <div className="flex items-center gap-6 mb-8">
                                        <div
                                            className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 
       flex items-center justify-center text-white text-2xl font-bold shadow-xl"
                                        >
                                            {section.number}
                                        </div>
                                        <div className="flex-1">
                                            <h2 className="text-3xl md:text-3xl font-bold text-blue-800">
                                                {section.title}
                                            </h2>
                                        </div>
                                    </div>

                                    {/* Section Content */}
                                    {section.content && (
                                        <div className="ml-20 py-5">
                                            <p className="text-lg text-gray-700 leading-relaxed text-justify">
                                                {section.content}
                                                {section.highlightEmail && (
                                                    <>
                                                        <strong className="text-blue-700 font-bold">
                                                            {CONTACT_EMAIL}
                                                        </strong>
                                                        .
                                                    </>
                                                )}
                                            </p>
                                        </div>
                                    )}

                                    {/* Subsections (for sections 2,3,4) */}
                                    {section.subsections && (
                                        <div className="ml-20 space-y-10 py-5">
                                            {section.subsections.map(
                                                (sub, i) => (
                                                    <div
                                                        key={i}
                                                        className="space-y-4"
                                                    >
                                                        <h3 className="text-xl font-bold text-blue-600 py-5">
                                                            {sub.subtitle}
                                                        </h3>
                                                        <div
                                                            className={`w-full bg-gradient-to-r ${sub.gradient} border-l-4 ${sub.border} p-6 rounded-r-2xl shadow-sm `}
                                                        >
                                                            <p className="text-gray-700 leading-relaxed text-justify">
                                                                {sub.text}
                                                            </p>
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    )}

                                    {/* Divider */}
                                    {index < SECTIONS.length - 1 && (
                                        <div className="w-full border-t-2 border-gray-100 mt-16 py-5" />
                                    )}
                                </div>
                            ))}

                            {/* Special Contact Section Styling */}
                            <div className=" py-5 w-full -mx-8 -mb-8 md:-mx-12 md:-mb-12 lg:-mx-20 lg:-mb-20">
                                <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border-t-4 border-blue-300 p-10 md:p-14 rounded-b-3xl">
                                    <p className="text-lg md:text-xl text-gray-800 leading-relaxed text-justify max-w-5xl mx-auto">
                                        If you have any questions, concerns, or
                                        requests regarding this Privacy Policy,
                                        please contact{" "}
                                        <strong>{COMPANY_LEGAL}</strong> at{" "}
                                        <a
                                            href={`mailto:${CONTACT_EMAIL}`}
                                            className="text-blue-700 font-bold underline hover:text-blue-800"
                                        >
                                            {CONTACT_EMAIL}
                                        </a>
                                        .
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Footer Note */}
                    <div className="mt-16 text-center py-10">
                        <div className="inline-flex items-center gap-3 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full border border-gray-200 shadow-lg">
                            <svg
                                className="w-6 h-6 text-green-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            <p className="text-sm font-semibold text-gray-700">
                                This privacy policy is a legal document. Please
                                read it carefully.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Optional: Add grid pattern via CSS if needed
const style = `
  .bg-grid-pattern {
    background-image: 
      linear-gradient(to right, #4f4f4f2e 1px, transparent 1px),
      linear-gradient(to bottom, #4f4f4f2e 1px, transparent 1px);
    background-size: 14px 24px;
  }
`;

export default PrivacyPolicy;
