import React, { useEffect, useRef, useState } from "react";
import hr1 from "../assets/service/hrms1.jpg";
import hr2 from "../assets/service/hrms2.jpg";
import hr3 from "../assets/service/hrms3.jpg";
import FadeUp from "../Components/Fadeup";

// =================================================================
// THEME – EXACT SAME AS LATEST SchoolERP
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
// YOUR ORIGINAL DATA – KEPT 100% UNCHANGED
// =================================================================
const SECTIONS = [
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
          "Recording Pan No, PF, CIT, Insurance Number, and Bank Account, etc.: Compliance fields.",
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

// =================================================================
// UTILS & ICONS (same as SchoolERP)
// =================================================================
const formatModuleIndex = (index) => String(index + 1).padStart(2, "0");
const parseFeature = (feature) => {
  const [title, ...descParts] = feature.split(":");
  return {
    title: title.trim(),
    description: descParts.join(":").trim(),
  };
};
const getModuleCount = (section) => section.modules?.length || 1;
const isReversedLayout = (index) => index % 2 !== 0;

const CheckIcon = () => (
  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

// =================================================================
// SUB-COMPONENTS (exact same structure as your latest SchoolERP)
// =================================================================
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
  const moduleCount = getModuleCount(section);
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
          <div className={`p-5 ${card.background} border-t ${card.border}`}>
            <p className={`font-semibold ${text.primary}`}>{section.title}</p>
            <p className={`text-sm ${text.muted}`}>
              {moduleCount} Module{moduleCount > 1 ? "s" : ""}
            </p>
          </div>
        </div>
      </FadeUp>
    </div>
  );
};

const FeatureItem = ({ feature }) => {
  const { card, accent, text } = THEME.colors;
  const { feature: featurePadding } = THEME.spacing;
  const { title, description } = parseFeature(feature);
  return (
    <div className={`flex gap-4 ${featurePadding} rounded-lg ${card.background} border ${card.border}`}>
      <div className="flex-shrink-0 mt-1">
        <div className={`w-5 h-5 rounded-full ${accent.secondary} flex items-center justify-center`}>
          <CheckIcon />
        </div>
      </div>
      <div>
        <p className={`text-sm font-semibold ${text.primary} mb-1`}>{title}</p>
        {description && (
          <p className={`text-xs ${text.tertiary} leading-relaxed`}>{description}</p>
        )}
      </div>
    </div>
  );
};

const ModuleHeader = ({ module, index }) => {
  const { card, accent, text } = THEME.colors;
  const { cardHeader } = THEME.spacing;
  return (
    <div className={`${cardHeader} ${card.background} border-b ${card.border}`}>
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl ${accent.primary} flex items-center justify-center text-white font-bold`}>
          {formatModuleIndex(index)}
        </div>
        <div>
          <h3 className={`text-xl font-bold ${text.primary}`}>{module.name}</h3>
          <p className={`text-sm ${text.tertiary}`}>
            {module.features.length} Features
          </p>
        </div>
      </div>
    </div>
  );
};

const ModuleCard = ({ module, index }) => {
  const { card } = THEME.colors;
  const { cardBody } = THEME.spacing;
  return (
    <div className={`rounded-2xl border ${card.border} ${card.background} ${card.shadow}`}>
      <FadeUp>
        <ModuleHeader module={module} index={index} />
        <div className={cardBody}>
          <div className="grid md:grid-cols-2 gap-6">
            {module.features.map((feature, idx) => (
              <FeatureItem key={idx} feature={feature} />
            ))}
          </div>
        </div>
      </FadeUp>
    </div>
  );
};

const ModulesList = ({ modules }) => {
  const { modulesGap } = THEME.spacing;
  return (
    <div className={`space-y-8 ${modulesGap}`}>
      {modules.map((module, idx) => (
        <ModuleCard key={idx} module={module} index={idx} />
      ))}
    </div>
  );
};

const SectionContent = ({ section }) => {
  if (section.modules) {
    return <ModulesList modules={section.modules} />;
  }
  return null;
};

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
// MAIN COMPONENT – CLEAN & ANIMATED
// =================================================================
const GigaHR = () => {
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

export default GigaHR;