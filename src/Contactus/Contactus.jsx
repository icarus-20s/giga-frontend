import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, Clock, Globe } from "lucide-react";
import FadeUp from "../Components/Fadeup";
import FAQPage from "../Components/FAQPage";
import api from "../Components/Api";
import Loader from "../Components/Loader";
const Contactus = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await api.post("contact/", formData);
            console.log("Response:", response.data);

            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
            alert("✅ Thank you! Your message has been sent successfully.");
        } catch (error) {
            console.error("❌ Failed to send message:", error);
            alert("❌ Something went wrong. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: Phone,
            title: "Call Us",
            numbers: [
                "9851341127",
                "9851341128",
                "9840073584",
                "9802390239",
            ],
            subInfo: "Mon-Fri 9:00 AM - 6:00 PM",
        },
        {
            icon: Mail,
            title: "Email Us",
            info: "info@gigaerp.com",
            subInfo: "We'll respond within 24 hours",
        },
        {
            icon: MapPin,
            title: "Visit Us",
            info: "Shankhamul, Kathmandu",
            subInfo: "Nepal 44600",
        },
        {
            icon: Clock,
            title: "Business Hours",
            info: "Mon - Fri: 9:00 AM - 6:00 PM",
            subInfo: "Sat: 10:00 AM - 4:00 PM",
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
                    </div>
                </div>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-4xl mx-auto text-center">
                    <FadeUp
                        className="relative max-w-4xl mx-auto text-center"
                        delay={100}
                    >
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight text-white">
                            Get In{"\n"}
                            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                                Touch
                            </span>
                        </h1>
                        <div className="py-5">
                            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed">
                                Ready to transform your ideas into reality?
                                Let’s start a conversation about your next
                                project.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-sm">
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-white">
                                <Globe className="w-8 h-8" />
                                <span>Global Service</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full text-white">
                                <Clock className="w-8 h-8" />
                                <span>24/7 Support</span>
                            </div>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 md:py-24 bg-gradient-to-b from-white to-blue-50/30">
                <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                    {" "}
                    {/* Card content */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
                        {contactInfo.map((item, index) => (
                            <FadeUp key={index} delay={index * 150}>
                                <div className="group bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-xl hover:border-blue-200 hover:-translate-y-1 transition-all duration-300">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <item.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-blue-600 font-medium mb-1">
                                            {item.numbers ? (
                                                <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                                                    {item.numbers.map(
                                                        (num, i) => (
                                                            <a
                                                                key={i}
                                                                href={`tel:${num.replace(
                                                                    /-/g,
                                                                    ""
                                                                )}`}
                                                                className="text-blue-600 font-semibold hover:text-blue-800 transition text-sm sm:text-base whitespace-nowrap"
                                                            >
                                                                {num}
                                                                {i !==
                                                                    item.numbers
                                                                        .length -
                                                                        1 &&
                                                                    ","}
                                                            </a>
                                                        )
                                                    )}
                                                </div>
                                            ) : (
                                                <span className="text-blue-600 font-medium">
                                                    {item.info}
                                                </span>
                                            )}
                                        </p>

                                        <p className="text-gray-500 text-sm">
                                            {item.subInfo}
                                        </p>
                                    </div>
                                </div>
                            </FadeUp>
                        ))}
                    </div>
                    {/* Form + Map */}
                    <div className="py-5 grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-10">
                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 border border-gray-100">
                            <FadeUp
                                duration={700}
                                className="relative max-w-4xl mx-auto text-center"
                            >
                                <div className="mb-6">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-2">
                                        Send us a Message
                                    </h2>
                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                        Have a project in mind? Fill out the
                                        details below and we’ll get back to you
                                        soon.
                                    </p>
                                </div>

                                <form
                                    onSubmit={handleSubmit}
                                    className="space-y-6"
                                >
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition"
                                            placeholder="Full Name *"
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition"
                                            placeholder="Email Address *"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition"
                                            placeholder="Phone"
                                        />
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition"
                                        >
                                            <option value="">
                                                Select a subject *
                                            </option>
                                            <option value="general">
                                                General Inquiry
                                            </option>
                                            <option value="project">
                                                New Project
                                            </option>
                                            <option value="support">
                                                Technical Support
                                            </option>
                                            <option value="partnership">
                                                Partnership
                                            </option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="5"
                                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30 transition resize-none"
                                        placeholder="Your Message *"
                                    ></textarea>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                                    >
                                        {isSubmitting ? (
                                            <Loader />
                                        ) : (
                                            "Send Message"
                                        )}
                                    </button>
                                </form>
                            </FadeUp>
                        </div>

                        {/* Map Section */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                            <FadeUp
                                duration={700}
                                className="relative max-w-4xl mx-auto text-center"
                            >
                                <div className="p-6 sm:p-8 lg:p-10 pb-0">
                                    <h2 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-2">
                                        Find Our Office
                                    </h2>
                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                        Visit us at our Kathmandu office or
                                        schedule a virtual meeting. We're here
                                        to help bring your vision to life.
                                    </p>
                                </div>

                                <div
                                    className="relative h-80 sm:h-96 lg:h-[450px]"
                                    id="map"
                                >
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14130.890423580893!2d85.32444906677248!3d27.717245200000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a6b97c767f%3A0x5ecd208e1c8b8976!2sShankhamul%2C%20Kathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2snp!4v1694188800000!5m2!1sen!2snp"
                                        width="100%"
                                        height="100%"
                                        className="border-0 w-full h-full"
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="ARK Botech Location - Shankhamul, Kathmandu"
                                    />
                                </div>
                            </FadeUp>
                        </div>
                    </div>
                </div>
            </section>
            <FadeUp>
                <FAQPage />
            </FadeUp>
        </div>
    );
};

export default Contactus;
