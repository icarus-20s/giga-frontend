import React from "react";
import { motion } from "framer-motion";
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
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <div className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Header */}
        <motion.header
          className="text-center mb-16 sm:mb-20 lg:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <motion.h1
            className="py-10 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6"
          >
            Software Development
          </motion.h1>
        </motion.header>

        {/* Sections */}
        <motion.div
          className="max-w-7xl mx-auto space-y-20 sm:space-y-24 lg:space-y-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
        >
          {sections.map((section, index) => (
            <motion.article
              key={section.id}
              className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20 ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              }`}
              variants={fadeUp}
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
                <motion.h2
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
                  variants={fadeUp}
                >
                  {section.title}
                </motion.h2>
                <motion.p
                  className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0"
                  variants={fadeUp}
                >
                  {section.description}
                </motion.p>

                {/* Features */}
                <motion.div
                  className="py-5 flex flex-wrap justify-center lg:justify-start gap-3"
                  variants={fadeUp}
                >
                  {section.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium border border-white/10"
                    >
                      {feature}
                    </span>
                  ))}
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SoftDev;
