// Services.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import softdev from "../assets/ServicesImg/softdev/softdev.jpg";
import webdev from "../assets/ServicesImg/webdev/webdev.jpg";
import mobdev from "../assets/ServicesImg/mobdev/mobdev.jpg";

const services = [
  {
    id: 1,
    title: "Software Development",
    description:
      "Custom software solutions tailored to your business needs. We deliver scalable, secure, and maintainable applications using modern technologies and best practices.",
    path: "/services/software-development",
    image: softdev,
    features: ["Custom Applications", "API Development", "System Integration"]
  },
  {
    id: 2,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms with optimal performance.",
    path: "/services/mobile-development",
    image: mobdev,
    features: ["iOS & Android", "Cross-Platform", "App Store Optimization"]
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with cutting-edge technologies, optimized for performance and user engagement.",
    path: "/services/web-development",
    image: webdev,
    features: ["Responsive Design", "E-commerce", "Progressive Web Apps"]
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const fadeUp = {
    hidden: { 
      opacity: 0, 
      y: 60
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94]
      } 
    }
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
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            Our Services
          </motion.h1>
        </motion.header>

        {/* Services Grid */}
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <div className="space-y-20 sm:space-y-24 lg:space-y-32">
            {services.map((service, index) => (
              <motion.article
                key={service.id}
                className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20 ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
                variants={fadeUp}
              >
                {/* Image Container */}
<div className="w-full lg:w-1/2">
  <div className="py-5 relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <img
      src={service.image}
      alt={`${service.title} illustration`}
      className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-3xl transform transition-transform duration-500 hover:scale-105"
      loading="lazy"
    />
    {/* Gradient Overlay */}
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
  </div>
</div>


                {/* Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 sm:space-y-8">
                  <motion.h2 
                    className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
                    variants={fadeUp}
                  >
                    {service.title}
                  </motion.h2>
                  
                  <motion.p 
                    className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0"
                    variants={fadeUp}
                  >
                    {service.description}
                  </motion.p>

                  {/* Features */}
                  <motion.div 
                    className="py-5 flex flex-wrap justify-center lg:justify-start gap-3"
                    variants={fadeUp}
                  >
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 bg-white/10 rounded-full text-blue-200 text-sm font-medium border border-white/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </motion.div>
                  
                  <motion.div variants={fadeUp}>
                    <Link
                      to={service.path}
                      className="inline-flex items-center gap-2 text-blue-400 font-semibold text-lg hover:text-blue-300 transition-colors duration-300"
                    >
                      Learn More
                      <span>→</span>
                    </Link>
                  </motion.div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;