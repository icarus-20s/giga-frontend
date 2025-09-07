import React from "react";

const CallToAction = () => {
    return (
        <>
      {/* Floating background shapes */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-blue-700/30 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-indigo-600/30 rounded-full blur-2xl animate-blob animation-delay-2000"></div>

<div className="relative w-full flex flex-col lg:flex-row items-center justify-between gap-10 bg-white/10 backdrop-blur-md rounded-3xl p-10 sm:p-16 shadow-xl">
        {/* Text Content */}
        <div className="text-center lg:text-left lg:max-w-lg space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Ready to take your business to the next level?
          </h2>
          <p className="text-lg sm:text-xl text-blue-200">
            Get in touch with us today and let’s build something amazing together.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center lg:justify-end">
          <a
            href="/quotation"
            className="relative inline-block px-12 py-5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-bold rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Get Free Quotation
            <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 hover:opacity-20 transition-opacity"></span>
          </a>
        </div>
      </div>
        </>

  );
};

export default CallToAction;
