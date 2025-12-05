import React from "react";
import work from "../assets/work.jpg";
import FadeUp from "../Components/Fadeup";

// =================================================================
// THEME – EXACT SAME AS YOUR OTHER PAGES
// =================================================================
const THEME = {
  colors: {
    background: "bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900",
    badge: {
      text: "text-sky-300",
      background: "bg-sky-900/40",
      border: "border-sky-600",
    },
    text: {
      primary: "text-white",
      secondary: "text-slate-200/90",
      tertiary: "text-slate-300",
      muted: "text-white/60",
    },
    card: {
      background: "bg-slate-900/80",
      border: "border-white/10",
      shadow: "shadow-lg shadow-black/20",
    },
    accent: {
      primary: "bg-sky-600",
      secondary: "bg-cyan-500",
    },
  },
  spacing: {
    section: "py-20 lg:py-28",
    sectionGap: "gap-12 lg:gap-16",
    modulesGap: "py-10",
    cardHeader: "px-8 py-6",
    cardBody: "p-8",
    feature: "p-4",
  },
};

// =================================================================
// YOUR ORIGINAL DATA – 100% PRESERVED
// =================================================================
const SECTIONS = [
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

// =================================================================
// REUSABLE COMPONENTS – SAME AS SCHOOLERP
// =================================================================
const formatModuleIndex = (i) => String(i + 1).padStart(2, "0");
const parseFeature = (f) => {
  const [title, ...rest] = f.split(":");
  return { title: title.trim(), description: rest.join(":").trim() };
};
const getModuleCount = (s) => s.modules?.length || 1;
const isReversedLayout = (i) => i % 2 !== 0;

const CheckIcon = () => (
  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const ModuleBadge = ({ index }) => {
  const { badge } = THEME.colors;
  return (
    <span className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full border ${badge.text} ${badge.background} ${badge.border}`}>
      Module {formatModuleIndex(index)}
    </span>
  );
};

const SectionText = ({ section, index }) => {
  const { text } = THEME.colors;
  return (
    <div className={isReversedLayout(index) ? "lg:order-2" : ""}>
      <div className="flex items-center gap-3 mb-6">
        <ModuleBadge index={index} />
      </div>
      <h2 className={`text-4xl lg:text-5xl font-bold ${text.primary} mb-6 leading-tight`}>
        {section.title}
      </h2>
      <p className={`text-lg ${text.secondary} leading-relaxed`}>
        {section.description}
      </p>
    </div>
  );
};

const SectionImage = ({ section, index }) => {
  const { card, text } = THEME.colors;
  const count = getModuleCount(section);
  return (
    <div className={isReversedLayout(index) ? "lg:order-1" : ""}>
      <FadeUp>
        <div className={`rounded-2xl overflow-hidden border ${card.border} ${card.background}`}>
          <img
            src={section.image}
            alt={section.title}
            className="w-full h-72 lg:h-80 object-cover"
            loading="lazy"
          />
          <div className={`p-5 border-t ${card.border}`}>
            <p className={`font-semibold ${text.primary}`}>{section.title}</p>
            <p className={`text-sm ${text.muted}`}>
              {count} Module{count > 1 ? "s" : ""}
            </p>
          </div>
        </div>
      </FadeUp>
    </div>
  );
};

const FeatureItem = ({ feature }) => {
  const { card, accent, text } = THEME.colors;
  const { title, description } = parseFeature(feature);
  return (
    <div className={`flex gap-4 items-start ${THEME.spacing.feature} rounded-lg ${card.background} border ${card.border}`}>
      <div className="flex-shrink-0 mt-1">
        <div className={`w-5 h-5 rounded-full ${accent.secondary} flex items-center justify-center`}>
          <CheckIcon />
        </div>
      </div>
      <div>
        <p className={`text-sm font-semibold ${text.primary}`}>{title}</p>
        {description && <p className={`text-xs leading-relaxed ${text.tertiary}`}>{description}</p>}
      </div>
    </div>
  );
};

const ModuleHeader = ({ module, index }) => {
  const { card, accent, text } = THEME.colors;
  return (
    <div className={`${THEME.spacing.cardHeader} ${card.background} border-b ${card.border}`}>
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl ${accent.primary} flex items-center justify-center text-white font-bold`}>
          {formatModuleIndex(index)}
        </div>
        <div>
          <h3 className={`text-xl font-bold ${text.primary}`}>{module.name}</h3>
          <p className={`text-sm ${text.tertiary}`}>{module.features.length} Features</p>
        </div>
      </div>
    </div>
  );
};

const ModuleCard = ({ module, index }) => {
  const { card } = THEME.colors;
  return (
    <article className={`rounded-2xl border ${card.border} ${card.background} ${card.shadow}`}>
      <FadeUp>
        <ModuleHeader module={module} index={index} />
        <div className={`${THEME.spacing.cardBody} grid md:grid-cols-2 gap-6`}>
          {module.features.map((f, i) => (
            <FeatureItem key={i} feature={f} />
          ))}
        </div>
      </FadeUp>
    </article>
  );
};

const ModulesList = ({ modules }) => (
  <div className={`space-y-8 ${THEME.spacing.modulesGap}`}>
    {modules.map((m, i) => (
      <ModuleCard key={i} module={m} index={i} />
    ))}
  </div>
);

const SectionContent = ({ section }) => (section.modules ? <ModulesList modules={section.modules} /> : null);

const Section = ({ section, index }) => {
  const { sectionGap } = THEME.spacing;
  return (
    <section data-id={section.id}>
      <div className={`grid lg:grid-cols-2 ${sectionGap} items-center mb-16`}>
        <SectionText section={section} index={index} />
        <SectionImage section={section} index={index} />
      </div>
      <SectionContent section={section} />
    </section>
  );
};

// =================================================================
// MAIN COMPONENT – FINAL & FLAWLESS
// =================================================================
const GigaCorporateERP = () => {
  const { background } = THEME.colors;
  const { section: sectionPadding } = THEME.spacing;

  return (
    <div className="min-h-screen">
      <main className={background}>
        <div className={`w-full mx-auto px-6 lg:px-8 ${sectionPadding}`}>
          <div className="space-y-32">
            {SECTIONS.map((section, index) => (
              <Section
                key={section.id}
                section={section}
                index={index}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default GigaCorporateERP;