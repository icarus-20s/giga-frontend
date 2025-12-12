import React from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { useClientsContext } from "../Components/Context/ClientsContext"; // import your context hook

// ── Motion Variants ───────────────────────────────────────────
const hoverVariant = { hover: { y: -12, scale: 1.06 } };
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

// ── Client Card ───────────────────────────────────────────────
const ClientCard = ({ client }) => (
  <motion.div
    className="relative flex-shrink-0 w-72 h-48 bg-blue-200 rounded-3xl border border-white/10 overflow-hidden group cursor-pointer transition-all duration-500 hover:bg-white/10 hover:border-blue-400/40 hover:shadow-2xl hover:shadow-blue-500/20"
    whileHover="hover"
    variants={hoverVariant}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
    <img
      src={client.logo || ""}
      alt={`${client.name} logo`}
      className="w-full h-full object-contain p-8 transition-all duration-500 group-hover:scale-90 group-hover:opacity-50"
      loading="lazy"
    />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
      <p className="text-white font-bold text-xl tracking-wide drop-shadow-2xl text-center px-4">
        {client.name}
      </p>
    </div>
  </motion.div>
);

// ── Main Clients Component ────────────────────────────────────
const Clients = ({ display = "marquee" }) => {
  const clients = useClientsContext(); // use clients from context
  const isMarquee = display === "marquee";

  if (!clients || clients.length === 0)
    return <p className="text-center text-white">Loading...</p>;

  const renderMarquee = (clientsSlice, keyPrefix, direction = "left") => (
    <Marquee gradient={false} speed={70} direction={direction} pauseOnHover>
      <div className="flex items-center justify-center gap-12 lg:gap-20 px-8 py-5">
        {clientsSlice.map((client, i) => (
          <ClientCard key={`${keyPrefix}-${i}`} client={client} />
        ))}
      </div>
    </Marquee>
  );

  return (
    <section className="w-full relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-40 w-80 h-80 bg-purple-600/25 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-cyan-500/20 blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.9 }}
        >
          <motion.span
            className="inline-block px-6 py-3 mb-8 text-sm font-semibold tracking-wider text-blue-300 uppercase bg-blue-500/10 border border-blue-400/30 rounded-full backdrop-blur-sm"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Trusted by Nepal's Leading Institutions
          </motion.span>
          <h2 className="py-5 text-5xl sm:text-6xl lg:text-5xl font-black text-white leading-tight">
            Empowering Our Clients <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Shaping the Future
            </span>
          </h2>
        </motion.div>
      </div>

      {/* Clients Content */}
      <div className="relative z-10 -mx-4 sm:-mx-6 lg:mx-0 space-y-16 py-15">
        {isMarquee ? (
          <>
            {renderMarquee([...clients.slice(0, 10), ...clients.slice(0, 10)], "row1")}
            {renderMarquee([...clients.slice(10), ...clients.slice(10)], "row2", "right")}
          </>
        ) : (
          <div className="grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] justify-items-center gap-8 px-8">
            {clients.map((client) => (
              <ClientCard key={client.id} client={client} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Clients;
