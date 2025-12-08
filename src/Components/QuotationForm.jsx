import React, { useState } from "react";
import api from "./Api";
import FadeUp from "./Fadeup";
import Loader from "./Loader";

const QuotationForm = () => {
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        phone: "",
        service_name: "",
        message: "",
    });

    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

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
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-blue-500/20 rounded-full animate-ping"></div>

                <div className="absolute top-1/3 right-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-purple-500/20 rounded-full animate-pulse delay-500"></div>

                <div className="absolute bottom-1/4 left-1/4 w-8 h-8 sm:w-12 sm:h-12 bg-green-500/20 rounded-full animate-bounce delay-1000"></div>

                <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-pulse"></div>

                <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full animate-pulse delay-2000"></div>
            </div>

            <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12">
                {/* Header */}
                <div className="text-center mb-8 sm:mb-10">
                    <h2 className="py-5 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
                        Request Your{" "}
                        <span className="text-s-600 text-blue-800">Free Quote</span>
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
                                        Full Name{" "}
                                        <span className="text-red-500">*</span>
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
                                        Email{" "}
                                        <span className="text-red-500">*</span>
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
                                        Service Name{" "}
                                        <span className="text-red-500">*</span>
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
                                disabled={isSubmitting}
                                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                            >
                                {isSubmitting ? <Loader /> : "Send Message"}
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
