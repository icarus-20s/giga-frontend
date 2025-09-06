import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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
    features: ["Custom Applications", "API Development", "System Integration"],
  },
  {
    id: 2,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications that deliver exceptional user experiences across iOS and Android platforms with optimal performance.",
    path: "/services/mobile-development",
    image: mobdev,
    features: ["iOS & Android", "Cross-Platform", "App Store Optimization"],
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built with cutting-edge technologies, optimized for performance and user engagement.",
    path: "/services/web-development",
    image: webdev,
    features: ["Responsive Design", "E-commerce", "Progressive Web Apps"],
  },
];

const Services = () => {
  const refs = useRef([]);
  const [visibleIds, setVisibleIds] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.id;
            if (!visibleIds.includes(id)) {
              setVisibleIds((prev) => [...prev, id]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [visibleIds]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      <div className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        {/* Header */}
<h1
  className="py-10 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white"

>
  Our <span className="text-blue-300">Services</span>
</h1>


        {/* Services Grid */}
        <div className="max-w-7xl mx-auto space-y-20 sm:space-y-24 lg:space-y-32">
          {services.map((service, index) => (
            <article
              key={service.id}
              data-id={service.id}
              ref={(el) => (refs.current[index] = el)}
              className={`flex flex-col lg:flex-row items-center gap-8 sm:gap-12 lg:gap-16 xl:gap-20 transition-all duration-700 ease-out transform ${
                visibleIds.includes(service.id.toString())
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              } ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <div className="py-5 relative overflow-hidden rounded-3xl shadow-lg transform-gpu transition-transform duration-500 hover:scale-105">
                  <img
                    src={service.image}
                    alt={`${service.title} illustration`}
                    className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-3xl"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 sm:space-y-8 text-white">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  <span className="text-blue-300">{service.title}</span>
                </h2>
                <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  {service.description}
                </p>

                <div className="py-5 flex flex-wrap justify-center lg:justify-start gap-3">
                  {service.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 bg-white/10 rounded-full text-blue-200 text-sm font-medium border border-white/10"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Link
                  to={service.path}
                  className="inline-flex items-center gap-2 text-blue-400 font-semibold text-lg hover:text-blue-300 transition-colors duration-300"
                >
                  Learn More <span>→</span>
                </Link>
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

export default Services;
