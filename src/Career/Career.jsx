import React, { useState } from "react";
import FadeUp from "../Components/Fadeup";

const Career = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    resume: null,
  });

  const benefits = [
    { title: "Innovation Hub", desc: "Lead groundbreaking projects that redefine industry standards.", icon: "💡" },
    { title: "Elite Collaboration", desc: "Partner with experts in an inclusive and diverse culture.", icon: "🤝" },
    { title: "Career Growth", desc: "Accelerated career advancement with premium resources.", icon: "📈" },
    { title: "Global Impact", desc: "Shape change that transforms industries worldwide.", icon: "🌍" },
  ];

  const traits = [
    { name: "Visionary", desc: "Drive innovation with strategic thinking.", icon: "🔥" },
    { name: "Excellence-Driven", desc: "Commitment to mastery and quality.", icon: "💪" },
    { name: "Innovation Catalyst", desc: "Bring fresh ideas and creativity.", icon: "🎨" },
    { name: "Team Leader", desc: "Inspire and uplift teams with collaboration.", icon: "👥" },
  ];

  const hiringSteps = [
    { step: "Application Review", desc: "Evaluation of your professional background." },
    { step: "Strategic Discussion", desc: "Conversation about goals and aspirations." },
    { step: "Technical Round", desc: "Assessment of skills and expertise." },
    { step: "Final Interview", desc: "Discussion with senior leadership." },
  ];

  const openRoles = [
    { role: "Senior Sales & Marketing Strategist", type: "Full-time", location: "Kathmandu", level: "Senior" },
    { role: "Lead Software Architect", type: "Full-time", location: "Kathmandu", level: "Lead" },
    { role: "Principal UI/UX Designer", type: "Full-time", location: "Kathmandu", level: "Principal" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, resume: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your application has been submitted. We will contact you within 48 hours.");
    setIsModalOpen(false);
    setFormData({ name: "", email: "", phone: "", position: "", message: "", resume: null });
  };

  const openModal = (role = "") => {
    setFormData({ ...formData, position: role });
    setIsModalOpen(true);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative min-h-[500px] bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center text-center py-20 overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-10 w-4 h-4 bg-blue-500 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-20 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
        </div>
        <div className="absolute top-[-100px] left-[-100px] w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-40 h-40 sm:w-56 sm:h-56 lg:w-80 lg:h-80 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-full animate-pulse"></div>

        <FadeUp>
          <div className="relative z-10 max-w-4xl px-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
              Shape the <span className="text-blue-300">Future</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Join a team of visionaries, innovators, and leaders dedicated to transforming technology and creating extraordinary impact.
            </p>
          </div>
        </FadeUp>
      </section>
<main className="bg-gradient-to-b from-blue-50 via-blue-100 to-gray-100 w-full flex flex-col items-center">
  {/* Vision */}
  <FadeUp delay={100}>
    <section className="py-16 w-full flex justify-center">
      <div className="max-w-6xl text-center px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Our Vision & Mission
        </h2>

        {/* Paragraph */}
        <p className="text-gray-700 mb-12 text-lg sm:text-xl leading-relaxed">
          We are a technology organization at the forefront of digital transformation, delivering innovative solutions that redefine industries.
        </p>

        {/* Core Values */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <h3 className="font-bold text-xl mb-2">Innovation</h3>
            <p className="text-gray-600 text-sm">
              Continuously pushing boundaries with cutting-edge solutions.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <h3 className="font-bold text-xl mb-2">Integrity</h3>
            <p className="text-gray-600 text-sm">
              Upholding transparency, honesty, and ethics in every project.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <h3 className="font-bold text-xl mb-2">Excellence</h3>
            <p className="text-gray-600 text-sm">
              Delivering high-quality solutions that exceed expectations.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transition transform hover:-translate-y-1">
            <h3 className="font-bold text-xl mb-2">Collaboration</h3>
            <p className="text-gray-600 text-sm">
              Working closely with clients and teams to achieve shared goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  </FadeUp>

        {/* Benefits */}
        <FadeUp delay={200}>
          <section className="py-5 mb-20 text-center w-full">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12">Why Work With Us</h2>
            <div className="py-5 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
              {benefits.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-1 flex flex-col items-center max-w-xs w-full"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-center">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeUp>

        {/* Traits + Hiring */}
        <FadeUp delay={300}>
          <section className="py-5 mb-20  text-center w-full">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12">Who We’re Looking For</h2>
            <div className="py-5 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-items-center mb-12">
              {traits.map((t, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl border border-gray-200 text-center flex flex-col items-center max-w-xs w-full shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1"
                >
                  <div className="text-4xl mb-3">{t.icon}</div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2">{t.name}</h3>
                  <p className="text-gray-700 text-center">{t.desc}</p>
                </div>
              ))}
            </div>

            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">Our Hiring Process</h3>
            <div className="py-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
              {hiringSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-xl shadow hover:shadow-lg flex flex-col items-center max-w-xs w-full transition-transform transform hover:-translate-y-1"
                >
                  <div className="w-12 h-12 mb-4 bg-indigo-600 text-white rounded-full flex items-center justify-center text-lg font-semibold">
                    {idx + 1}
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold mb-2">{step.step}</h4>
                  <p className="text-gray-600 text-center">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeUp>

        {/* Open Roles */}
        <FadeUp delay={400}>
          <section className="mb-20 text-center w-full">
            <h2 className="text-4xl sm:text-5xl font-bold mb-12">Open Positions</h2>
            <div className="py-5 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {openRoles.map((job, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-1 flex flex-col items-center max-w-xs w-full"
                >
                  <div className="flex justify-center space-x-3 mb-4">
                    <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">{job.type}</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">{job.level}</span>
                  </div>
                  <p className="text-gray-500 mb-2">📍 {job.location}</p>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-6">{job.role}</h3>
                  <button
                    onClick={() => openModal(job.role)}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform transform cursor-pointer shadow-lg hover:shadow-2xl"
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </section>
        </FadeUp>
      </main>

{/* Modal */}
{isModalOpen && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 sm:p-10 max-w-4xl w-full shadow-2xl transform transition-all duration-300 scale-95 animate-fadeIn">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-gray-900">Application Form</h2>
      
      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          <input 
            type="text" 
            name="name" 
            placeholder="Full Name" 
            value={formData.name} 
            onChange={handleInputChange} 
            required 
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleInputChange} 
            required 
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
          />
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone Number" 
            value={formData.phone} 
            onChange={handleInputChange} 
            required 
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
          />
          <select 
            name="position" 
            value={formData.position} 
            onChange={handleInputChange} 
            required 
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
          >
            <option value="">Select Position</option>
            {openRoles.map((job, idx) => (
              <option key={idx} value={job.role}>{job.role}</option>
            ))}
          </select>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          <input 
            type="file" 
            name="resume" 
            onChange={handleFileChange} 
            accept=".pdf,.doc,.docx" 
            required 
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
          />
          <textarea 
            name="message" 
            rows="7" 
            placeholder="Brief message..." 
            value={formData.message} 
            onChange={handleInputChange} 
            className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
          ></textarea>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-end gap-3 mt-2">
            <button 
              type="button" 
              onClick={() => setIsModalOpen(false)} 
              className="w-full sm:w-auto px-5 py-3 bg-gray-200 rounded-xl hover:bg-gray-300 transition font-medium"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="w-full sm:w-auto px-5 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition font-medium"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
)}


    </div>
  );
};

export default Career;
