import React, { useEffect, useRef, useState } from "react";
import soft1 from "../assets/ServicesImg/softdev/soft1.jpg";
import soft2 from "../assets/ServicesImg/softdev/soft2.jpg";
import soft3 from "../assets/ServicesImg/softdev/soft3.jpg";

const sections = [
  {
    id: 1,
    title: "Custom Applications",
    description:
      "We build tailored software applications that perfectly align with your business goals, ensuring efficiency and scalability.",
    image: soft1,
    features: ["Business Solutions", "Process Automation", "Scalable Systems"],
  },
  {
    id: 2,
    title: "API Development & Integration",
    description:
      "Seamlessly connect your applications with secure, high-performance APIs and third-party integrations.",
    image: soft2,
    features: ["REST & GraphQL APIs", "Third-Party Integration", "Microservices"],
  },
  {
    id: 3,
    title: "Enterprise Software",
    description:
      "From ERP to CRM, we develop enterprise-grade solutions that streamline workflows and drive growth.",
    image: soft3,
    features: ["ERP Systems", "CRM Solutions", "Enterprise Automation"],
  },
];

const SoftDev = () => {
  const sectionRefs = useRef([]);
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({ ...prev, [entry.target.dataset.id]: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Header */}
        <header
          className={`text-center mb-16 sm:mb-20 lg:mb-24 transition-transform transition-opacity duration-700 ease-out transform-gpu ${
            visibleSections["header"] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
          ref={(el) => (sectionRefs.current[0] = el)}
          data-id="header"
        >
          <h1 className="py-10 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6">
            Software Development
          </h1>
        </header>

        {/* Sections */}
        <div className="max-w-7xl mx-auto space-y-20 sm:space-y-24 lg:space-y-32">
          {sections.map((section, index) => (
            <article
              key={section.id}
              data-id={section.id}
              ref={(el) => (sectionRefs.current[index + 1] = el)}
              className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20 transition-transform transition-opacity duration-700 ease-out transform-gpu ${
                visibleSections[section.id] ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              } ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="py-5 relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={section.image}
                    alt={`${section.title} illustration`}
                    className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-3xl transform transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 sm:space-y-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {section.title}
                </h2>
                <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {section.description}
                </p>

                {/* Features */}
                <div className="py-5 flex flex-wrap justify-center lg:justify-start gap-3">
                  {section.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium border border-white/10"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
       {/* Floating Elements */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
    <div className="absolute top-1/3 right-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
    <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
  </div>
     <div className="absolute top-[-100px] left-[-100px] w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full animate-pulse delay-2000"></div>

    </section>
  );
};

export default SoftDev;
