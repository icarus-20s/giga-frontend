import React, { useEffect, useRef, useState } from "react";
import work from "../assets/work.jpg";

const sections = [
  {
    id: 1,
    title: "Financial Accounting & Inventory",
    description: "Offers robust accounting tools for compliance, reporting, and resource management.",
    image: work,
    modules: [
      {
        name: "Financial Accounting & Inventory",
        features: [
          "Managing chart of account (Up to 11 levels): Structures accounts hierarchically for detailed financial categorization.",
          "Manage customer/ vendor information: Maintains profiles with contact details and transaction histories.",
          "Manage cost center (Up to 7 dimensions): Tracks expenses across departments, projects, or locations.",
          "Budget planning and controlling: Sets budgets with variance alerts and real-time monitoring.",
          "Reconcile bank statements: Automates matching of transactions for accuracy.",
          "Journal entries: Supports manual adjustments with audit trails.",
          "Vendors bill entry: Records invoices with approval workflows.",
          "Payment entries (Tracking bill wise): Processes payments linked to specific bills.",
          "Receipt entries (Tracking bill wise): Logs inflows with allocations.",
          "Fiscal year closing: Automates year-end processes with carryovers.",
          "Check printing: Generates printable checks with security features.",
          "Customized document numbering: Defines numbering schemes for invoices/receipts.",
          "Approval workflow: Routes documents for multi-level approvals.",
          "Profit and loss statement: Generates P&L reports with filters and comparisons.",
          "Balance sheet: Provides snapshot of assets/liabilities.",
          "Cash flow: Tracks liquidity with projections.",
          "Trial balance: Ensures accounting balance.",
          "Customer/ vendor ledger: Detailed transaction logs.",
          "General ledger: Comprehensive account summaries.",
          "Aging report: Analyzes receivables/payables by age.",
          "Other analytical reports: Custom dashboards for insights.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Human Resources",
    description: "Complete HR management system with leave, attendance, payroll, and employee lifecycle automation.",
    image: work,
    modules: [
      {
        name: "Leave Module",
        features: [
          "Leave master setup as per organization leave rule: Defines types, entitlements, and policies.",
          "Leave balance, opening, and closing transfer: Tracks accruals and carryovers.",
          "Leave encashment calculation: Automates payouts for unused leaves.",
          "Online leave application and approval: Digital workflows with notifications.",
        ],
      },
      {
        name: "Attendance Management",
        features: [
          "Holiday settings: Calendars with custom holidays.",
          "Online attendance options: Self-marking via app.",
          "Download attendance logs: Integrates with biometrics.",
          "Generates late coming and early going reports: Flags deviations.",
          "Synchronizes users for ZKT biometric devices: Seamless integration.",
          "Generate monthly attendance for salary calculation: Links to payroll.",
          "Generate various attendance reports: Comprehensive analytics.",
        ],
      },
      {
        name: "Employee Management Module (PIS)",
        features: [
          "Personal Information: Basic details like contact, address.",
          "Service Information: Employment history, positions.",
          "Other Official Information: IDs, designations.",
          "Salary Information: Pay scales, increments.",
          "Recording Pan No, PF, CIT, Insurance Number, Bank Account etc.: Compliance fields.",
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
      {
        name: "Payroll",
        features: [
          "Create salary titles according to requirements: Custom components like allowances.",
          "Complete formula-based salary titles: Flexible calculations.",
          "Payment options for monthly, periodic, or on demand: Various cycles.",
          "Generate multiple payment sheets in a single month.",
          "Automatic TDS calculation: Tax deductions.",
          "Manage temporary/seasonal employees' salary, TDS & history.",
          "Generate salary slip and send via email.",
          "Other salary reports such as PF, CIT, bank, tax deposit, advance deductions, etc.",
          "Reports based on various cost centers: Segmented insights.",
        ],
      },
    ],
  },
];

const GigaCorporateERP = () => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <div className="w-full mx-auto px-6 lg:px-8 py-20 lg:py-28 space-y-32">
        {sections.map((section, index) => (
          <section
            key={section.id}
            ref={(el) => (sectionRefs.current[index] = el)}
            data-id={section.id}
            className={`opacity-0 translate-y-10 transition-all duration-1000 ease-out ${
              visibleSections[section.id] ? "opacity-100 translate-y-0" : ""
            }`}
          >
            {/* Section Header */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
              <div className={index % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-300 bg-blue-900/50 rounded-full border border-blue-800">
                    Module {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                  {section.title}
                </h2>
                <p className="text-lg text-slate-200 leading-relaxed">{section.description}</p>
              </div>

              <div className={index % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="rounded-2xl overflow-hidden border border-slate-700">
                  <img
                    src={section.image}
                    alt={section.title}
                    className="w-full h-72 lg:h-80 object-cover"
                    loading="lazy"
                  />
                  <div className="p-5 bg-slate-800">
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="text-white font-semibold">{section.title}</p>
                        <p className="text-white/60 text-sm">
                          {section.modules.length} Module{section.modules.length > 1 ? "s" : ""}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modules */}
            <div className="space-y-8 py-10">
              {section.modules.map((module, moduleIdx) => (
                <div key={moduleIdx} className="bg-slate-800/70 rounded-2xl border border-slate-700">
                  <div className="px-8 py-6 bg-slate-800 border-b border-slate-700 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
                      {String(moduleIdx + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{module.name}</h3>
                      <p className="text-sm text-slate-400">{module.features.length} Features</p>
                    </div>
                  </div>

                  <div className="p-8 grid md:grid-cols-2 gap-6">
                    {module.features.map((feature, idx) => {
                      const [title, ...descParts] = feature.split(":");
                      const description = descParts.join(":").trim();
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
                            <p className="text-sm font-semibold text-white">{title.trim()}</p>
                            {description && <p className="text-xs text-slate-400 leading-relaxed">{description}</p>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default GigaCorporateERP;
