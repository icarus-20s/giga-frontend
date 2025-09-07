import React, { useState } from "react";
import api from "./Api";
import FadeUp from "./Fadeup";

const QuotationForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    service_name: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.full_name || !formData.email || !formData.service_name) {
      setStatus("Please fill in all required fields.");
      return;
    }

    try {
      const response = await api.post("quote/", formData);

      if (response.status === 201 || response.status === 200) {
        setStatus("Quote request submitted successfully!");
        setFormData({
          full_name: "",
          email: "",
          phone: "",
          service_name: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error submitting quote request:", error);
      setStatus("Failed to submit. Please try again.");
    }

    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
       {/* Floating Elements */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
    <div className="absolute top-1/3 right-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
    <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
  </div>
     <div className="absolute top-[-100px] left-[-100px] w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full animate-pulse delay-2000"></div>

      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="py-5 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
            Request Your <span className="text-s-600">Free Quote</span>
          </h2>
        </div>

        {/* Form */}
        <FadeUp>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="full_name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-800 placeholder-gray-400"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-800 placeholder-gray-400"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-800 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="service_name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Service Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="service_name"
                  id="service_name"
                  value={formData.service_name}
                  onChange={handleChange}
                  placeholder="Enter the service you need"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-800 placeholder-gray-400"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us more about your needs"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gray-50 text-gray-800 placeholder-gray-400 resize-none"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="px-8 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 hover:shadow-lg transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 cursor-pointer"
              aria-label="Submit Quote Request"
            >
              Submit Quote Request
            </button>
          </div>
        </form>
        </FadeUp>

        {/* Status Message */}
        {status && (
          <div className="mt-6 text-center">
            <p
              className={`text-sm sm:text-base font-medium ${
                status.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {status}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default QuotationForm;