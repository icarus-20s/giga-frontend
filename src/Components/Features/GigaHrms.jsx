import React from "react";

const modules = [
  {
    title: "Human Resource Management (HRM)",
    description:
      "Manage employees, payroll, leave, recruitment, and performance efficiently with Giga ERP.",
    icon: "👥",
  },
  {
    title: "Accounting & Finance",
    description:
      "Handle invoicing, expenses, ledgers, and reports seamlessly to keep your finances in check.",
    icon: "💰",
  },
  {
    title: "Inventory Management System (IMS)",
    description:
      "Track stock, manage suppliers, and optimize warehouse operations in real-time.",
    icon: "📦",
  },
  {
    title: "Sales & CRM",
    description:
      "Monitor leads, sales pipelines, and customer relationships with ease.",
    icon: "📈",
  },
  {
    title: "Project Management",
    description:
      "Plan, track, and collaborate on projects efficiently with your team.",
    icon: "🗂️",
  },
];

const GigaHrms = () => {
  return (
    <div className="px-6 py-12 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Giga ERP Software
      </h1>
      <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
        A demo overview of modules and functionalities for HRM, Accounting, IMS,
        and more. Designed to optimize your business workflow.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules.map((mod, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-4xl mb-4">{mod.icon}</div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">
              {mod.title}
            </h2>
            <p className="text-gray-600">{mod.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GigaHrms;
