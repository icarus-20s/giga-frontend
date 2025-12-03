import React, { useEffect, useRef, useState } from "react";
import hr1 from "../assets/service/hrms1.jpg";
import hr2 from "../assets/service/hrms2.jpg";
import hr3 from "../assets/service/hrms3.jpg";

const sections = [
  {
    id: 1,
    title: "Giga HR – Human Resources Management",
    description:
      "A complete, modern HR solution that automates leave, attendance, employee records, and payroll processing with accuracy and ease.",
    image: hr1,
  },
  {
    id: 2,
    title: "Leave Module",
    description: "Streamlines leave management for compliance and efficiency.",
    image: hr3,
    modules: [
      {
        name: "Leave Module",
        features: [
          "Leave master setup as per organization leave rule: Defines types, entitlements, and policies.",
          "Leave balance, opening, and closing transfer: Tracks accruals and carryovers.",
          "Leave encashment calculation: Automates payouts for unused leaves.",
          "Online leave application and approval to reduce paperwork and effective leave management: Digital workflows with notifications.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Attendance Management",
    description: "Ensures accurate staff tracking.",
    image: hr2,
    modules: [
      {
        name: "Attendance Management",
        features: [
          "Holiday settings: Calendars with custom holidays.",
          "Online attendance options are available: Self-marking via app.",
          "Download attendance logs calculate attendance and generate reports: Integrates with biometrics.",
          "Generates late coming and early going reports: Flags deviations.",
          "Synchronizes users for ZKT biometric devices only: Seamless device integration.",
          "Generate monthly attendance for salary calculation: Links to payroll.",
          "Generate Various Attendance Reports such as Daily Present, absent and Leave Status, Periodic Attendance Summary, Periodic Overtime Summary, Periodic In/Out Summary, etc: Comprehensive analytics.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Employee Management Module (PIS)",
    description: "Centralizes HR data for better management.",
    image: hr3,
    modules: [
      {
        name: "Employee Management Module (PIS)",
        features: [
          "Personal Information: Basic details like contact, address.",
          "Service Information: Employment history, positions.",
          "Other Official Information: IDs, designations.",
          "Salary Information: Pay scales, increments.",
          "Recording Pan, No, PF, CIT, Insurance Number, and Bank Account, etc.: Compliance fields.",
          "Documents Attachment: Uploads for records.",
          "Record Family Details: Dependents info.",
          "Previous Employment Details: Work history.",
          "Record Education Details: Qualifications.",
          "Job Allocation Details: Assignments.",
          "Training Details: Certifications.",
          "Award Details: Recognitions.",
          "Research and Publications: Academic contributions.",
          "Medical Details: Health records.",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Payroll",
    description: "Automates salary processing for accuracy and timeliness.",
    image: hr1,
    modules: [
      {
        name: "Payroll",
        features: [
          "Can create salary titles according to requirements: Custom components like allowances.",
          "Complete formula based salary titles, so easily customized with any type of organization: Flexible calculations.",
          "Payment option for monthly, periodic or on demand etc.: Various cycles.",
          "Can generate any number of payment sheets in a single month: Handles extras.",
          "Automatic TDS calculation: Tax deductions.",
          "Manage temporary/ short time period/seasonal employees' salary, TDS & history: Flexible for casual staff.",
          "Generate salary slip and send slip in email: Digital distribution.",
          "Other salary reports such as PF, CIT, bank, tax deposit, advance deductions, etc.: Compliance reports.",
          "Reports based on various cost centers: Segmented insights.",
        ],
      },
    ],
  },
];

const GigaHR = () => {
  const sectionRefs = useRef([]);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.dataset.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px 0px" }
    );

    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <main className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="w-full mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="space-y-32">
            {sections.map((section, index) => (
              <section
                key={section.id}
                ref={(el) => (sectionRefs.current[index] = el)}
                data-id={section.id}
                className={`opacity-0 translate-y-10 transition-all duration-1000 ease-out ${
                  visibleSections[section.id] ? "opacity-100 translate-y-0" : ""
                }`}
              >
                {/* Header with Image & Text */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
                  {/* Text */}
                  <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                    {/* No icon */}
                    <div className="mb-6">
                      <span className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 bg-blue-900/50 rounded-full border border-blue-800">
                        Module {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                      {section.title}
                    </h2>
                    <p className="text-lg text-slate-200 leading-relaxed">
                      {section.description}
                    </p>
                  </div>

                  {/* Image – Clean */}
                  <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                    <div className="rounded-2xl overflow-hidden border border-slate-700">
                      <img
                        src={section.image}
                        alt={section.title}
                        className="w-full h-72 lg:h-80 object-cover"
                        loading="lazy"
                      />
                      <div className="p-5 bg-slate-800">
                        <div>
                          <p className="text-white font-semibold">{section.title}</p>
                          <p className="text-white/60 text-sm">
                            {section.modules ? section.modules.length : 1} module
                            {section.modules?.length > 1 ? "s" : ""}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Features List – Only when modules exist */}
                {section.modules && (
                  <div className="space-y-8 py-10">
                    {section.modules.map((module, moduleIdx) => (
                      <div
                        key={moduleIdx}
                        className="bg-slate-800/70 rounded-2xl border border-slate-700"
                      >
                        <div className="px-8 py-6 bg-slate-800 border-b border-slate-700">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
                              {String(moduleIdx + 1).padStart(2, "0")}
                            </div>
                            <div>
                              <h3 className="text-xl font-bold text-white">{module.name}</h3>
                              <p className="text-sm text-slate-400">{module.features.length} Features</p>
                            </div>
                          </div>
                        </div>

                        <div className="p-8">
                          <div className="grid md:grid-cols-2 gap-6">
                            {module.features.map((feature, idx) => {
                              const [title, ...desc] = feature.split(":");
                              const description = desc.join(":").trim();
                              return (
                                <div
                                  key={idx}
                                  className="flex gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700"
                                >
                                  <div className="flex-shrink-0 mt-1">
                                    <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                          fillRule="evenodd"
                                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  <div>
                                    <p className="text-sm font-semibold text-white mb-1">
                                      {title.trim()}
                                    </p>
                                    {description && (
                                      <p className="text-xs text-slate-400 leading-relaxed">
                                        {description}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default GigaHR;