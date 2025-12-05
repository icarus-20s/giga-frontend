import React, { useEffect, useRef, useState } from "react";

import erp1 from "../assets/service/erp1.jpg";
import erp2 from "../assets/service/erp2.jpg";
import erp3 from "../assets/service/erp3.jpg";
import FadeUp from "../Components/Fadeup";

// =================================================================
// THEME CONFIGURATION
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
// DATA
// =================================================================

const SECTIONS = [
  {
    id: 1,
    title: "Academics",
    description:
      "A complete academic ecosystem covering Student Information System, Exam Management, and Learning Management System to digitize and streamline the entire teaching-learning process.",
    image: erp1,
    modules: [
      {
        name: "Student Information System (SIS)",
        features: [
          "Pre-admission process (Student enquiry, short list, selection): Streamlines initial inquiries by capturing leads, evaluating candidates through customizable criteria, and automating shortlisting and selection notifications to reduce manual effort and speed up admissions.",
          "Student admission: Facilitates seamless enrollment with digital forms, document uploads, and automated fee calculations, integrating with payment gateways for immediate processing.",
          "Generate student ID card with QR-Code: Creates customizable ID cards with embedded QR codes for quick scanning, enabling features like attendance tracking or access control.",
          "Recording student related documents both personal (citizenships, father's mother's details, etc.) and academic certificates (migration, transcripts, character certificates, etc.): Securely stores and organizes documents in a digital repository, with search functionality and access controls to comply with privacy regulations.",
          "Tracking student attendance (Manual and Device both options available): Supports manual entry or integration with biometric/RFID devices for real-time attendance logging, generating alerts for absences and reports for analysis.",
          "Send Email/ Notices to Students: Automates personalized or bulk communications for announcements, reminders, or updates, with tracking for delivery and read receipts.",
          "Student Portal: Provides a self-service dashboard for students to view grades, schedules, assignments, and personal info, promoting independence and engagement.",
          "Mobile app for students and parents: Offers on-the-go access via Android/iOS apps, including push notifications for real-time updates on attendance, fees, and events.",
        ],
      },
      {
        name: "Exam Management",
        features: [
          "Define grading criteria as per requirement (Can apply different grading system for different program): Allows customization of grading scales (e.g., GPA, percentage) tailored to specific courses or levels, ensuring alignment with educational standards.",
          "Define ranking criteria as per requirement (Can apply different ranking system for different program): Sets up ranking based on weighted scores, attendance, or extracurriculars, with options for program-specific variations.",
          "Define exam type / assessment types: Supports diverse assessments like quizzes, finals, or projects, with templates for quick setup.",
          "Define exam terms: Organizes exams into terms or semesters, with automated scheduling and conflict checks.",
          "Manage exam weightage: Assigns weights to different components (e.g., theory vs. practical) for accurate overall scoring.",
          "Create exam schedule: Generates timetables with room allocations, invigilator assignments, and calendar integrations to avoid overlaps.",
          "Manage exam remarks (General remarks & student specific remarks; both options available): Adds standardized or personalized feedback to results, aiding in student development tracking.",
          "Manage exam attendance: Tracks presence during exams via manual or device-based methods, linking to eligibility for results.",
          "Manage thematic evaluation (As per guidelines of CDC For Nursery to 3 Class): Complies with Curriculum Development Centre standards for early grades, evaluating themes like social skills or creativity.",
          "Grading for extra activities: Incorporates scores from sports, arts, or clubs into overall evaluations for holistic assessment.",
          "Marks entry and verification (Admin and teacher both options available): Enables secure input by teachers with admin oversight, including double-verification to minimize errors.",
          "Result calculation & publishing result: Automates computations and publishes results via portal or app, with options for delayed release.",
          "Print admit card: Generates printable hall tickets with student details, exam info, and barcodes for verification.",
          "Print report card (Marksheet / gradesheet): Produces customizable reports with graphs, comments, and historical comparisons.",
          "Custom report card (Report card can be customized as per school requirement): Allows design tweaks like logos, layouts, or additional fields to match school branding.",
          "Marks / grade ledger: Maintains a comprehensive record of all scores for auditing, progress tracking, or transcripts.",
        ],
      },
      {
        name: "Learning Management System",
        features: [
          "Course creation, allocation and management: Enables admins to build courses, assign teachers, and manage enrollments with prerequisites.",
          "Course/ subject wise attendance: Logs attendance per class, integrating with overall student records for comprehensive insights.",
          "Course content & resources: Uploads and organizes materials like PDFs, videos, or links, with version control and access restrictions.",
          "Assignment and homework management: Creates, distributes, and collects assignments digitally, with deadlines and automated reminders.",
          "Ranking and grading of assignments: Automates scoring with rubrics, providing feedback and integrating into final grades.",
          "Lecture notes and course plan: Shares structured plans and notes, allowing updates and student downloads.",
          "News & announcement: Posts school-wide or class-specific updates, visible on portals and apps.",
          "Forums and Discussions: Facilitates threaded discussions for Q&A, peer learning, and moderated interactions.",
          "Live classes (Integrated with Zoom, Google Meet): Schedules and launches virtual sessions seamlessly, recording for later access.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Financials",
    description:
      "End-to-end financial automation with billing, accounting, inventory, and online payment integration for complete transparency and efficiency.",
    image: erp2,
    modules: [
      {
        name: "Billing Management",
        features: [
          "Automatic push data to financial accounting: Syncs billing data in real-time to accounting ledgers for unified financial oversight.",
          "Online payment integration (eSewa, Khalti, Connect IPS): Enables secure digital payments with instant receipts and reconciliation.",
          "Managing fee titles: Defines various fee categories (e.g., tuition, lab) for organized structuring.",
          "Creating fee structure for classes / batches: Customizes fees by grade or group, with bulk application.",
          "Provide discount/ scholarship to students: Applies rule-based discounts or scholarships, tracking eligibility and impacts.",
          "Apply fine policy: Automates late fees with customizable rates and waivers.",
          "Create fee invoice and set payment deadlines (in bulk or individual): Generates invoices with due dates, sending via email/SMS.",
          "Manage bus fees, hostel fees, canteen fees: Handles ancillary charges with separate tracking and integration.",
          "Record fee receipts: Logs payments with partial options and generates printable receipts.",
          "Manage advance payments: Tracks prepayments, applying them to future invoices automatically.",
          "Miscellaneous fee assign and receipt (Copy, pen, pencil, school uniform etc.): Manages ad-hoc charges with inventory links.",
          "Student wise statement report: Provides detailed transaction histories per student.",
          "Daily cash collection report: Summarizes daily inflows for cash management.",
          "Due reports: Lists outstanding fees with aging for follow-up.",
          "Fee due aging analysis: Analyzes overdue patterns to inform collection strategies.",
        ],
      },
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
    id: 3,
    title: "Administration",
    description:
      "Centralized administrative tools including Transportation, Library, Communication, and Custom Reports for seamless daily operations.",
    image: erp3,
    modules: [
      {
        name: "Transportation Management",
        features: [
          "Define route and bus stops: Maps routes with GPS integration for optimization.",
          "Record vehicle information: Tracks details like registration, capacity, and insurance.",
          "Record driver information: Manages licenses, contacts, and assignments.",
          "Record vehicle activities: Logs trips, fuel usage, and incidents.",
          "Record vehicle maintenance information: Schedules services with reminders and cost tracking.",
          "Assign students to route: Links students to buses with capacity checks.",
          "Charge fee to students (Route / location wise): Automates billing based on distance or zone.",
        ],
      },
      {
        name: "Library Management System",
        features: [
          "Define membership type: Sets categories like student, staff with borrowing limits.",
          "Manage library membership: Handles registrations and renewals.",
          "Define book category: Organizes books by genre/subject.",
          "Define issue rule: Sets loan periods, fines, and limits.",
          "Create book group/ sub group: Hierarchical categorization for browsing.",
          "Enter book information: Adds details like ISBN, author, with search.",
          "Manage book circulation (Issue/ Renew/ Return): Automates transactions with notifications.",
          "Printing barcode/ QR Code: Generates labels for quick scanning.",
          "Collect fine: Calculates and records overdue penalties.",
          "Book reservation: Allows holds with waitlists.",
          "Daily book transaction report: Summarizes activities.",
          "Book due report: Lists overdue items.",
          "Book issue report: Tracks borrowing patterns.",
          "Book count report: Inventory audits.",
          "Other custom reports: Tailored analytics.",
        ],
      },
      {
        name: "Communication",
        features: [
          "Sending notices to students (In bulk or individuals): Custom messages via portal.",
          "Push notification through web & mobile apps (In bulk or individuals): Instant alerts on devices.",
          "Email notification for different activities such as fee due, exam result, exam schedule, book due etc.: Automated triggers for key events.",
          "SMS notifications (In bulk or individuals): Text-based alerts for urgent info.",
        ],
      },
      {
        name: "Custom Reports",
        features: [
          "User can create custom report as per their requirements: Drag-and-drop builder.",
          "Can create custom report template (Invoice, receipt, exam report card etc.): Design reusable formats.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Human Resources",
    description:
      "Comprehensive HR suite with employee management, leave, attendance, and payroll automation tailored for educational institutions.",
    image: erp1,
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
  {
    id: 5,
    title: "Mobile App (Android & iOS)",
    description:
      "Role-based mobile applications for Teachers, Students/Guardians, and Admin Staff — bringing the entire system to your fingertips.",
    image: erp2,
    icon: "📱",
    features: [
      "Mobile App for Teachers: Tools for attendance, grading, and communication.",
      "Mobile App for Student/ Guardians: Views for progress, payments, and notices.",
      "Mobile App For Admin Staffs: Oversight for approvals and reports.",
    ],
  },
];

// =================================================================
// UTILITY FUNCTIONS
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

// =================================================================
// ICONS
// =================================================================

const CheckIcon = () => (
  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const MobileIcon = () => (
  <svg
    className="w-8 h-8 text-white"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>
);

// =================================================================
// SUB-COMPONENTS
// =================================================================

const ModuleBadge = ({ index }) => {
  const { badge } = THEME.colors;

  return (
    <span
      className={`
        px-3 py-1.5 
        text-xs font-semibold uppercase tracking-wider 
        ${badge.text} ${badge.background} 
        rounded-full border ${badge.border}
      `}
    >
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
            <p className={`font-semibold ${text.primary}`}>
              {section.title}
            </p>
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
        <p className={`text-sm font-semibold ${text.primary} mb-1`}>
          {title}
        </p>
        {description && (
          <p className={`text-xs ${text.tertiary} leading-relaxed`}>
            {description}
          </p>
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
        <div
          className={`w-12 h-12 rounded-xl ${accent.primary} flex items-center justify-center text-white font-bold`}
        >
          {formatModuleIndex(index)}
        </div>

        <div>
          <h3 className={`text-xl font-bold ${text.primary}`}>
            {module.name}
          </h3>
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

const MobileFeatureCard = ({ feature }) => {
  const { card, accent, text } = THEME.colors;
  const { title, description } = parseFeature(feature);

  return (
    <div className={`p-6 rounded-xl ${card.background} border ${card.border} text-center`}>
      <div className={`w-16 h-16 mx-auto mb-4 rounded-xl ${accent.primary} flex items-center justify-center`}>
        <MobileIcon />
      </div>

      <h4 className={`text-lg font-bold ${text.primary} mb-2`}>
        {title}
      </h4>

      {description && (
        <p className={`text-sm ${text.tertiary}`}>
          {description}
        </p>
      )}
    </div>
  );
};

const MobileFeaturesList = ({ features }) => (
  <div className="grid md:grid-cols-3 gap-8 py-5">
    {features.map((feature, idx) => (
      <MobileFeatureCard key={idx} feature={feature} />
    ))}
  </div>
);

const SectionContent = ({ section }) => {
  if (section.modules) {
    return <ModulesList modules={section.modules} />;
  }

  if (section.features) {
    return <MobileFeaturesList features={section.features} />;
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
// CUSTOM HOOKS
// =================================================================

const useSectionVisibility = (sectionRefs) => {
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "-50px 0px",
    };

    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.dataset.id]: true,
          }));
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [sectionRefs]);

  return visibleSections;
};

// =================================================================
// MAIN COMPONENT
// =================================================================

const SchoolERP = () => {
  const sectionRefs = useRef([]);
  const visibleSections = useSectionVisibility(sectionRefs);

  const { background } = THEME.colors;
  const { section: sectionPadding } = THEME.spacing;

  return (
    <div className="min-h-screen">
      <main className={background}>
        <div className={`w-full mx-auto px-6 lg:px-8 ${sectionPadding}`}>
          <div className="space-y-32">
            {SECTIONS.map((section, index) => (
              <Section key={section.id} section={section} index={index} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SchoolERP;