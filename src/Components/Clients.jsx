import React from "react";
import { motion } from "framer-motion";

// Import all client logos
import aceCollege from "../assets/Clients/ace-college.png";
import ambitionCollege from "../assets/Clients/ambitioncollege.png";
import asha from "../assets/Clients/asha.png";
import cambridge from "../assets/Clients/cambridge.png";
import dav from "../assets/Clients/Dav.png";
import geetanjali from "../assets/Clients/Geetanjali English Secondary School.png";
import greenland from "../assets/Clients/greenlandschool.png";
import gyanjyoti from "../assets/Clients/gyanjyotischool.png";
import kanyaMandir from "../assets/Clients/Kanya-Mandir-Secondary-School.png";
import ktm from "../assets/Clients/ktm.png";
import orchid from "../assets/Clients/orchid.png";
import oxford from "../assets/Clients/oxfordcollege.png";
import pinnacle from "../assets/Clients/PINNACLE-ACADEMY.png";
import reliance from "../assets/Clients/reliancecollege.png";
import vinaySidha from "../assets/Clients/vinaysidha-college.png";
import vsNiketan from "../assets/Clients/VS-Niketan.png";

const clients = [
  { id: 1, name: "ACE College", logo: aceCollege },
  { id: 2, name: "Ambition College", logo: ambitionCollege },
  { id: 3, name: "Asha", logo: asha },
  { id: 4, name: "Cambridge", logo: cambridge },
  { id: 5, name: "DAV", logo: dav },
  { id: 6, name: "Geetanjali English Secondary School", logo: geetanjali },
  { id: 7, name: "Greenland School", logo: greenland },
  { id: 8, name: "Gyanjyoti School", logo: gyanjyoti },
  { id: 9, name: "Kanya Mandir Secondary School", logo: kanyaMandir },
  { id: 10, name: "KTM", logo: ktm },
  { id: 11, name: "Orchid", logo: orchid },
  { id: 12, name: "Oxford College", logo: oxford },
  { id: 13, name: "Pinnacle Academy", logo: pinnacle },
  { id: 14, name: "Reliance College", logo: reliance },
  { id: 15, name: "Vinay Sidha College", logo: vinaySidha },
  { id: 16, name: "VS Niketan", logo: vsNiketan },
];

const Clients = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.header
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-2 bg-blue-500/20 text-blue-300 text-sm font-semibold rounded-full border border-blue-500/30">
              Trusted Partners
            </span>
          </motion.div>
          
          <h1
            className="py-5 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Valued Clients
          </h1>
        </motion.header>

        {/* Clients Grid */}
<div className="max-w-7xl mx-auto">
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 justify-center justify-items-center">
    {clients.map((client, idx) => (
      <motion.div
        key={client.id}
        className="relative group flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg aspect-square overflow-hidden transition-all duration-300"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: idx * 0.05, ease: "easeOut" }}
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={client.logo}
          alt={`${client.name} logo`}
          className="max-h-16 sm:max-h-20 lg:max-h-24 max-w-full object-contain transition-all duration-300 group-hover:opacity-30"
          loading="lazy"
          decoding="async"
        />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60">
          <span className="text-white text-sm sm:text-base font-semibold px-2 text-center">
            {client.name}
          </span>
        </div>
      </motion.div>
    ))}
  </div>
</div>
        {/* Bottom section */}
        <motion.div
          className="text-center mt-12 sm:mt-16 lg:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="py-5 inline-flex items-center justify-center space-x-2 text-slate-400 text-sm sm:text-base">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-slate-400"></div>
            <span className="font-medium">Trusted by {clients.length}+ leading institutions</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-slate-400"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
